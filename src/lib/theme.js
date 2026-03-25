export const THEME_STORAGE_KEY = "portfolio-theme";
export const PALETTE_STORAGE_KEY = "portfolio-palette";

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

export function readPreferredPalette() {
  if (typeof window === "undefined") return "default";

  try {
    return window.localStorage.getItem(PALETTE_STORAGE_KEY) === "gruvbox" ? "gruvbox" : "default";
  } catch {
    return "default";
  }
}
