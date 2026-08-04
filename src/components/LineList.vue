<script setup>
import { getMetricMarker, isPositiveNdaMetric, POSITIVE_METRIC_MARKER } from "../lib/metricMarkers";
import MetricMarker from "./MetricMarker.vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});

const markerFor = (item) => {
  if (isPositiveNdaMetric(item)) return getMetricMarker(item) ?? POSITIVE_METRIC_MARKER;
  return null;
};
</script>

<template>
  <ul class="line-list">
    <li
      v-for="(item, index) in items"
      :key="`${item}-${index}`"
      :class="{ 'metric-list-item': Boolean(markerFor(item)) }"
    >
      <MetricMarker v-if="markerFor(item)" :kind="markerFor(item)" />
      <template v-if="index > 0"><br /></template>{{ item }}
    </li>
  </ul>
</template>
