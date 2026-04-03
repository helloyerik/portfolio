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
    return "dark";
  }

  return "dark";
}

export function readPreferredPalette() {
  if (typeof window === "undefined") return "default";

  try {
    const storedPalette = window.localStorage.getItem(PALETTE_STORAGE_KEY);
    return storedPalette === "default" || storedPalette === "gruvbox" ? storedPalette : "default";
  } catch {
    return "default";
  }
}
