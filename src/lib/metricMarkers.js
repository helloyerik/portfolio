const POSITIVE_ACHIEVEMENT_PATTERNS = [
  /^\s*↑/i,
  /\+\s*(?:NDA%|XX%|X%)/i,
  /\b(faster|less|lower|improved|increased|accelerated|grew|growth|reduced|shorter)\b/i,
  /\b(рост|вырос|увелич|ускор|сниз|меньше|ниже|повыс|улучш|успешн|конверс|nps)\b/i,
];

export const isPositiveNdaMetric = (value) =>
  typeof value === "string" && POSITIVE_ACHIEVEMENT_PATTERNS.some((pattern) => pattern.test(value));
