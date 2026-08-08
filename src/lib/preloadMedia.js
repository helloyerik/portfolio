const DEFAULT_IMAGE_CONCURRENCY = 4;
const DEFAULT_VIDEO_CONCURRENCY = 2;
const DEFAULT_IDLE_TIMEOUT_MS = 600;
const VIDEO_PRELOAD_TIMEOUT_MS = 90_000;

function addMediaUrls(media, images, videos, posters) {
  if (!media || typeof media === "string") return;
  if (Array.isArray(media)) {
    media.forEach((item) => addMediaUrls(item, images, videos, posters));
    return;
  }
  if (typeof media !== "object") return;

  if (media.kind === "before-after") {
    if (media.beforeSrc) images.add(media.beforeSrc);
    if (media.afterSrc) images.add(media.afterSrc);
    return;
  }

  if (media.kind === "carousel") {
    for (const item of media.items ?? []) {
      if (item?.src) images.add(item.src);
    }
    return;
  }

  if (media.kind === "video") {
    if (media.poster) {
      posters.add(media.poster);
      images.add(media.poster);
    }
    if (media.src) videos.add(media.src);
    return;
  }

  if (media.src) images.add(media.src);
}

function isVideoUrl(url) {
  return typeof url === "string" && /\.mp4(\?|#|$)/i.test(url);
}

function walkCase(caseData, covers, interiors, videos, posters) {
  if (!caseData || typeof caseData !== "object") return;

  if (caseData.cover) {
    if (caseData.coverKind === "video" || isVideoUrl(caseData.cover)) {
      if (caseData.coverPoster) {
        posters.add(caseData.coverPoster);
        covers.add(caseData.coverPoster);
      }
      videos.add(caseData.cover);
    } else {
      covers.add(caseData.cover);
    }
  } else if (caseData.coverPoster) {
    posters.add(caseData.coverPoster);
    covers.add(caseData.coverPoster);
  }

  for (const section of caseData.sections ?? []) {
    addMediaUrls(section?.media, interiors, videos, posters);
    for (const subsection of section?.subsections ?? []) {
      addMediaUrls(subsection?.media, interiors, videos, posters);
    }
  }
}

function walkProjectList(list, covers, videos, posters) {
  for (const project of list ?? []) {
    if (!project?.cover) continue;
    if (project.coverKind === "video" || isVideoUrl(project.cover)) {
      if (project.coverPoster) {
        posters.add(project.coverPoster);
        covers.add(project.coverPoster);
      }
      videos.add(project.cover);
      continue;
    }
    covers.add(project.cover);
  }
}

/** Collect cover vs interior image URLs, plus posters and video sources. */
export function collectCaseMediaUrls(bundles) {
  const list = Array.isArray(bundles) ? bundles : [bundles];
  const covers = new Set();
  const interiors = new Set();
  const videos = new Set();
  const posters = new Set();

  for (const bundle of list) {
    if (!bundle) continue;

    for (const caseData of Object.values(bundle.publicCases ?? {})) {
      walkCase(caseData, covers, interiors, videos, posters);
    }
    for (const caseData of Object.values(bundle.workflowCases ?? {})) {
      walkCase(caseData, covers, interiors, videos, posters);
    }

    walkProjectList(bundle.mechtaProjects, covers, videos, posters);
    walkProjectList(bundle.freelanceProjects, covers, videos, posters);
    walkProjectList(bundle.bmcProjects, covers, videos, posters);
  }

  const coverList = [...covers];
  const interiorList = [...interiors].filter((url) => !covers.has(url));
  const posterList = [...posters];
  const videoList = [...videos];

  return {
    covers: coverList,
    interiors: interiorList,
    posters: posterList,
    videos: videoList,
    images: [...new Set([...posterList, ...interiorList])],
  };
}

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(url);
    img.onerror = () => resolve(url);
    img.src = url;
  });
}

function preloadVideo(url, isCancelled) {
  return new Promise((resolve) => {
    if (typeof document === "undefined") {
      resolve(url);
      return;
    }

    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("muted", "");

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timeoutId);
      video.removeAttribute("src");
      try {
        video.load();
      } catch {
        /* ignore */
      }
      video.remove();
      resolve(url);
    };

    const timeoutId = window.setTimeout(finish, VIDEO_PRELOAD_TIMEOUT_MS);

    video.addEventListener("canplaythrough", finish, { once: true });
    video.addEventListener("error", finish, { once: true });
    video.addEventListener(
      "canplay",
      () => {
        // Enough data to start playback — sufficient for cache warming.
        if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) finish();
      },
      { once: true },
    );

    if (isCancelled()) {
      finish();
      return;
    }

    video.src = url;
    video.load();
  });
}

async function runQueue(urls, concurrency, worker, isCancelled) {
  const queue = urls.filter(Boolean);
  if (!queue.length) return;

  const workerCount = Math.max(1, Math.min(concurrency, queue.length));
  const workers = Array.from({ length: workerCount }, async () => {
    while (queue.length) {
      if (isCancelled()) return;
      const next = queue.shift();
      if (!next) return;
      await worker(next, isCancelled);
    }
  });

  await Promise.all(workers);
}

function scheduleIdle(callback, timeoutMs) {
  if (typeof window.requestIdleCallback === "function") {
    return {
      id: window.requestIdleCallback(callback, { timeout: timeoutMs }),
      cancel(id) {
        window.cancelIdleCallback?.(id);
      },
    };
  }

  return {
    id: window.setTimeout(callback, Math.min(timeoutMs, 120)),
    cancel(id) {
      window.clearTimeout(id);
    },
  };
}

/**
 * After first paint / idle: warm posters first, then interior images, then videos
 * (limited concurrency so the homepage stays responsive). Cancel on unmount.
 */
export function startBackgroundMediaPreload(bundles, options = {}) {
  if (typeof window === "undefined") return () => {};

  const imageConcurrency = options.imageConcurrency ?? options.concurrency ?? DEFAULT_IMAGE_CONCURRENCY;
  const videoConcurrency = options.videoConcurrency ?? DEFAULT_VIDEO_CONCURRENCY;
  const idleTimeout = options.idleTimeout ?? DEFAULT_IDLE_TIMEOUT_MS;
  const { posters, interiors, videos } = collectCaseMediaUrls(bundles);

  // Posters first (instant UI), then remaining interior images, then mp4s.
  const imageQueue = [...posters, ...interiors.filter((url) => !posters.includes(url))];

  let cancelled = false;
  const isCancelled = () => cancelled;
  /** @type {Array<{ id: number, cancel: (id: number) => void }>} */
  const scheduled = [];

  const posterIdle = scheduleIdle(() => {
    void runQueue(imageQueue, imageConcurrency, (url) => preloadImage(url), isCancelled).then(() => {
      if (isCancelled() || !videos.length) return;

      const videoIdle = scheduleIdle(() => {
        void runQueue(
          videos,
          videoConcurrency,
          (url, cancelFlag) => preloadVideo(url, cancelFlag),
          isCancelled,
        );
      }, Math.min(idleTimeout, 400));
      scheduled.push(videoIdle);
    });
  }, Math.min(idleTimeout, 200));
  scheduled.push(posterIdle);

  return () => {
    cancelled = true;
    for (const job of scheduled) job.cancel(job.id);
  };
}
