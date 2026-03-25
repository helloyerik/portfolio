export function readRoute() {
  if (typeof window === "undefined") {
    return { pathname: "/", hash: "" };
  }

  return {
    pathname: window.location.pathname.replace(/\/+$/, "") || "/",
    hash: window.location.hash || "",
  };
}

export function navigate(event, href) {
  if (!href) return;

  const isHash = href.startsWith("#") || href.startsWith("/#");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) return;

  event.preventDefault();

  if (isHash) {
    const target = href.startsWith("/#")
      ? href
      : `${window.location.pathname.replace(/\/+$/, "") || "/"}${href}`;

    if (`${window.location.pathname}${window.location.hash}` !== target) {
      window.history.pushState({}, "", target);
    }

    window.dispatchEvent(new PopStateEvent("popstate"));
    return;
  }

  if (window.location.pathname !== href || window.location.hash) {
    window.history.pushState({}, "", href);
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
