export const POSITIVE_METRIC_MARKER = "check";
export const NEGATIVE_METRIC_MARKER = "minus";

const POSITIVE_ACHIEVEMENT_PATTERNS = [
  /^\s*[↑✓✔☑↗]/i,
  // Portfolio NDA % deltas are achievements: growth (+NDA%) and good reductions (-NDA%)
  /[+-]\s*(?:NDA%|XX%|X%|\d+%)/i,
  /\b(faster|improved|increased|accelerated|grew|growth|shorter|reduced|fewer|lower|less)\b/i,
  /\b(рост|вырос|увелич|ускор|повыс|улучш|успешн|конверс|nps|сниз|меньше|ниже)\b/i,
];

// Explicit regression glyphs only — not percentage decreases of bad metrics
const NEGATIVE_REGRESSION_PATTERNS = [/^\s*[↓−]/i];

export const isPositiveNdaMetric = (value) =>
  typeof value === "string" && POSITIVE_ACHIEVEMENT_PATTERNS.some((pattern) => pattern.test(value));

export const getMetricMarker = (value) => {
  if (typeof value !== "string") return null;
  if (isPositiveNdaMetric(value)) return POSITIVE_METRIC_MARKER;
  if (NEGATIVE_REGRESSION_PATTERNS.some((pattern) => pattern.test(value))) {
    return NEGATIVE_METRIC_MARKER;
  }
  return null;
};
