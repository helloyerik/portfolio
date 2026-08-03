<script setup>
import { getMetricMarker, isPositiveNdaMetric } from "../lib/metricMarkers";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  ordered: {
    type: Boolean,
    default: false,
  },
  showMetrics: {
    type: Boolean,
    default: true,
  },
  forceMarkers: {
    type: Boolean,
    default: false,
  },
});

const markerFor = (item) => {
  if (props.forceMarkers) return getMetricMarker(item) ?? "✓";
  if (props.showMetrics && isPositiveNdaMetric(item)) return getMetricMarker(item) ?? "✓";
  return null;
};
</script>

<template>
  <ol v-if="ordered">
    <li v-for="(item, index) in items" :key="`${item}-${index}`">{{ item }}</li>
  </ol>
  <ul v-else class="rich-list">
    <li
      v-for="(item, index) in items"
      :key="`${item}-${index}`"
      :class="{ 'metric-list-item': Boolean(markerFor(item)) }"
    >
      <span v-if="markerFor(item)" class="metric-list-item__marker" aria-hidden="true">{{
        markerFor(item)
      }}</span>
      {{ item }}
    </li>
  </ul>
</template>
