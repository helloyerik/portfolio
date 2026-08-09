import Lenis from "lenis";

/** Matches `scroll-margin-top` on anchored case sections in styles.css. */
const ANCHOR_OFFSET = -72;

/** Site curve without overshoot, defined in styles.css `:root` (no end-bounce). */
const EASING_VAR = "--motion-toolbar-ease";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function cubicBezierEasing(x1, y1, x2, y2) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const sampleX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t) => ((ay * t + by) * t + cy) * t;
  const sampleDerivX = (t) => (3 * ax * t + 2 * bx) * t + cx;

  const solveT = (x) => {
    let t = x;

    for (let i = 0; i < 8; i += 1) {
      const error = sampleX(t) - x;
      if (Math.abs(error) < 1e-6) return t;
      const derivative = sampleDerivX(t);
      if (Math.abs(derivative) < 1e-6) break;
      t -= error / derivative;
    }

    let low = 0;
    let high = 1;
    t = x;

    while (high - low > 1e-6) {
      if (sampleX(t) < x) low = t;
      else high = t;
      t = (low + high) / 2;
    }

    return t;
  };

  return (progress) => {
    if (progress <= 0) return 0;
    if (progress >= 1) return 1;
    return sampleY(solveT(progress));
  };
}

/** Reads the site easing curve from CSS and converts it to a JS easing function. */
function readSiteEasing() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(EASING_VAR)
    .trim();
  const match = raw.match(
    /^cubic-bezier\(\s*([\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*([\d.]+)\s*,\s*(-?[\d.]+)\s*\)$/,
  );
  if (!match) return undefined;

  const [, x1, y1, x2, y2] = match;
  return cubicBezierEasing(Number(x1), Number(y1), Number(x2), Number(y2));
}

function isAnchorTarget(target) {
  return typeof target === "string" || target instanceof Element;
}

/** Native scrolling kept for reduced-motion users. */
function createNativeFallback() {
  return {
    scrollTo(target) {
      if (typeof target === "number") {
        window.scrollTo(0, target);
        return;
      }

      const element = typeof target === "string" ? document.querySelector(target) : target;
      element?.scrollIntoView({ block: "start" });
    },
    stop() {},
  };
}

export function startSmoothScroll() {
  if (typeof window === "undefined" || prefersReducedMotion()) {
    return createNativeFallback();
  }

  const lenis = new Lenis({
    easing: readSiteEasing(),
  });

  let rafId = 0;
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return {
    scrollTo(target, { immediate = false } = {}) {
      const options = isAnchorTarget(target)
        ? { immediate, offset: ANCHOR_OFFSET }
        : { immediate };
      lenis.scrollTo(target, options);
    },
    stop() {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    },
  };
}
