export const THEME_STORAGE_KEY = "portfolio-theme";
export const THEME_TRANSITION_MS = 280;

export function readPreferredTheme() {
  if (typeof window === "undefined") return "dark";

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function persistTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore localStorage failures.
  }
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  persistTheme(theme);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function beginThemeSwitching() {
  document.documentElement.classList.add("theme-switching");
}

function endThemeSwitching() {
  document.documentElement.classList.remove("theme-switching");
}

function dissolveFallback(apply) {
  const root = document.documentElement;
  beginThemeSwitching();
  root.classList.add("theme-dissolve-out");

  window.setTimeout(() => {
    apply();
    root.classList.remove("theme-dissolve-out");
    root.classList.add("theme-dissolve-in");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove("theme-dissolve-in");
        window.setTimeout(endThemeSwitching, THEME_TRANSITION_MS);
      });
    });
  }, THEME_TRANSITION_MS);
}

export function applyThemeWithDissolve(theme) {
  if (typeof document === "undefined") return;

  const apply = () => applyTheme(theme);

  if (prefersReducedMotion()) {
    apply();
    return;
  }

  if (typeof document.startViewTransition === "function") {
    try {
      // Disable competing color/bg transitions before capture so the new
      // snapshot has final theme colors and only the dissolve animates.
      beginThemeSwitching();
      const transition = document.startViewTransition(apply);
      transition.finished.finally(endThemeSwitching);
      return;
    } catch {
      endThemeSwitching();
      // Fall through to class-based dissolve.
    }
  }

  dissolveFallback(apply);
}
