function normalizePathname(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

const LEGACY_CASE_REDIRECTS = {
  "/projects/partners": "/projects/internal-tools",
  "/projects/corporate-portal": "/projects/internal-tools",
};

export function readRoute() {
  if (typeof window === "undefined") {
    return { pathname: "/", hash: "", locale: "en" };
  }

  const rawPathname = normalizePathname(window.location.pathname);
  const locale = rawPathname === "/ru" || rawPathname.startsWith("/ru/") ? "ru" : "en";
  let pathname =
    locale === "ru" ? normalizePathname(rawPathname.slice(3) || "/") : rawPathname;

  const redirectedPath = LEGACY_CASE_REDIRECTS[pathname];
  if (redirectedPath) {
    pathname = redirectedPath;
    const hash = window.location.hash || "";
    const localizedPath =
      locale === "ru"
        ? redirectedPath === "/"
          ? "/ru"
          : `/ru${redirectedPath}`
        : redirectedPath;
    window.history.replaceState({}, "", `${localizedPath}${hash}`);
  }

  return {
    pathname,
    hash: window.location.hash || "",
    locale,
  };
}

export function localizeHref(href, locale = "en") {
  if (!href) return href;

  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal || href.startsWith("#")) return href;

  const [path, hash = ""] = href.split("#");

  if (locale !== "ru") {
    return href;
  }

  const localizedPath =
    path === "/" ? "/ru" : path.startsWith("/ru") ? path : `/ru${path}`;

  return hash ? `${localizedPath}#${hash}` : localizedPath;
}

export function navigate(event, href) {
  if (!href) return;

  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) return;

  event.preventDefault();

  const currentPath = normalizePathname(window.location.pathname);
  const currentTarget = `${currentPath}${window.location.hash || ""}`;
  const target = href.startsWith("#") ? `${currentPath}${href}` : href;

  if (currentTarget !== target) {
    window.history.pushState({}, "", target);
  }

  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function toSectionId(title, index) {
  const slug = title
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9\u0400-\u04ff]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug ? `section-${slug}` : `section-${index + 1}`;
}

export function mergeLearningSections(sections) {
  const merged = [];

  for (let index = 0; index < sections.length; index += 1) {
    const current = sections[index];
    const next = sections[index + 1];

    if (current?.title === "Итог" && next?.title === "Личные итоги") {
      merged.push({
        ...current,
        learningList: next.list ?? [],
        learningOrdered: next.ordered,
      });
      index += 1;
      continue;
    }

    merged.push(current);
  }

  return merged;
}
