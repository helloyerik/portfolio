const METRIC_MARKER = "✓";

const POSITIVE_ACHIEVEMENT_PATTERNS = [
  /^\s*[↑✓]/i,
  /\+\s*(?:NDA%|XX%|X%|\d+%)/i,
  /\b(faster|improved|increased|accelerated|grew|growth|shorter)\b/i,
  /\b(рост|вырос|увелич|ускор|повыс|улучш|успешн|конверс|nps)\b/i,
];

const NEGATIVE_DIRECTION_PATTERNS = [
  /^\s*↓/i,
  /-\s*(?:NDA%|XX%|X%|\d+%)/i,
  /\b(less|lower|reduced|drop|fewer|exits|requests|waste|errors|time to)\b/i,
  /\b(сниз|меньше|ниже|отказ|обращен|ошибк|время до|расход)\b/i,
];

export const isPositiveNdaMetric = (value) =>
  typeof value === "string" && POSITIVE_ACHIEVEMENT_PATTERNS.some((pattern) => pattern.test(value));

export const getMetricMarker = (value) => {
  if (typeof value !== "string") return null;
  if (
    NEGATIVE_DIRECTION_PATTERNS.some((pattern) => pattern.test(value)) ||
    isPositiveNdaMetric(value)
  ) {
    return METRIC_MARKER;
  }
  return null;
};
