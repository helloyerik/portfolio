const DEFAULT_CONCURRENCY = 3;
const DEFAULT_IDLE_TIMEOUT_MS = 1800;

function addMediaUrls(media, target) {
  if (!media || typeof media === "string") return;
  if (Array.isArray(media)) {
    media.forEach((item) => addMediaUrls(item, target));
    return;
  }
  if (typeof media !== "object") return;

  if (media.kind === "before-after") {
    if (media.beforeSrc) target.add(media.beforeSrc);
    if (media.afterSrc) target.add(media.afterSrc);
    return;
  }

  if (media.kind === "carousel") {
    for (const item of media.items ?? []) {
      if (item?.src) target.add(item.src);
    }
    return;
  }

  // Skip videos — Image() preload would fail / waste bandwidth.
  if (media.kind === "video") return;

  if (media.src) target.add(media.src);
}

function walkCase(caseData, covers, interiors) {
  if (!caseData || typeof caseData !== "object") return;

  if (caseData.cover) covers.add(caseData.cover);

  for (const section of caseData.sections ?? []) {
    addMediaUrls(section?.media, interiors);
    for (const subsection of section?.subsections ?? []) {
      addMediaUrls(subsection?.media, interiors);
    }
  }
}

function walkProjectList(list, covers) {
  for (const project of list ?? []) {
    if (project?.cover) covers.add(project.cover);
  }
}

/** Collect cover vs interior image URLs from one or more localized case bundles. */
export function collectCaseMediaUrls(bundles) {
  const list = Array.isArray(bundles) ? bundles : [bundles];
  const covers = new Set();
  const interiors = new Set();

  for (const bundle of list) {
    if (!bundle) continue;

    for (const caseData of Object.values(bundle.publicCases ?? {})) {
      walkCase(caseData, covers, interiors);
    }
    for (const caseData of Object.values(bundle.workflowCases ?? {})) {
      walkCase(caseData, covers, interiors);
    }

    walkProjectList(bundle.mechtaProjects, covers);
    walkProjectList(bundle.freelanceProjects, covers);
    walkProjectList(bundle.bmcProjects, covers);
  }

  const coverList = [...covers];
  const interiorList = [...interiors].filter((url) => !covers.has(url));

  return { covers: coverList, interiors: interiorList };
}

function preloadUrl(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(url);
    img.onerror = () => resolve(url);
    img.src = url;
  });
}

async function runQueue(urls, concurrency, isCancelled) {
  const queue = urls.filter(Boolean);
  if (!queue.length) return;

  const workerCount = Math.max(1, Math.min(concurrency, queue.length));
  const workers = Array.from({ length: workerCount }, async () => {
    while (queue.length) {
      if (isCancelled()) return;
      const next = queue.shift();
      if (!next) return;
      await preloadUrl(next);
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
    id: window.setTimeout(callback, Math.min(timeoutMs, 200)),
    cancel(id) {
      window.clearTimeout(id);
    },
  };
}

/**
 * After first paint / idle, preload case interior media with limited concurrency.
 * Homepage covers are left to the normal DOM load path; interiors warm the cache.
 */
export function startBackgroundMediaPreload(bundles, options = {}) {
  if (typeof window === "undefined") return () => {};

  const concurrency = options.concurrency ?? DEFAULT_CONCURRENCY;
  const idleTimeout = options.idleTimeout ?? DEFAULT_IDLE_TIMEOUT_MS;
  const { interiors } = collectCaseMediaUrls(bundles);

  let cancelled = false;
  const isCancelled = () => cancelled;

  const idle = scheduleIdle(() => {
    void runQueue(interiors, concurrency, isCancelled);
  }, idleTimeout);

  return () => {
    cancelled = true;
    idle.cancel(idle.id);
  };
}
