const freelanceAssetModules = import.meta.glob("../assets/projects/freelance/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

function parseFreelanceAssetPath(path) {
  const match = path.match(/freelance\/(.+?)\/(\d+)\/(.+)\.(png|jpe?g|webp)$/i);
  if (!match) return null;

  const [, project, order, name] = match;
  return {
    project,
    order: Number(order),
    name,
  };
}

function formatAlt(project, name, order) {
  return `${project} ${String(order).padStart(2, "0")} ${name}`;
}

const freelanceEntries = Object.entries(freelanceAssetModules)
  .map(([path, src]) => {
    const parsed = parseFreelanceAssetPath(path);
    if (!parsed) return null;

    return {
      src,
      project: parsed.project,
      order: parsed.order,
      name: parsed.name,
      alt: formatAlt(parsed.project, parsed.name, parsed.order),
    };
  })
  .filter(Boolean)
  .sort((left, right) => {
    if (left.project !== right.project) {
      return left.project.localeCompare(right.project);
    }

    if (left.order !== right.order) {
      return left.order - right.order;
    }

    return left.name.localeCompare(right.name);
  });

export const freelanceMedia = freelanceEntries.reduce((accumulator, item) => {
  if (!accumulator[item.project]) {
    accumulator[item.project] = [];
  }

  accumulator[item.project].push({
    src: item.src,
    alt: item.alt,
  });

  return accumulator;
}, {});
