<script setup>
import { getMetricMarker, isPositiveNdaMetric, POSITIVE_METRIC_MARKER } from "../lib/metricMarkers";
import MetricMarker from "./MetricMarker.vue";

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
  cards: {
    type: Boolean,
    default: false,
  },
});

const markerFor = (item) => {
  if (props.forceMarkers) return getMetricMarker(item) ?? POSITIVE_METRIC_MARKER;
  if (props.showMetrics && isPositiveNdaMetric(item)) {
    return getMetricMarker(item) ?? POSITIVE_METRIC_MARKER;
  }
  return null;
};
</script>

<template>
  <ol v-if="ordered">
    <li v-for="(item, index) in items" :key="`${item}-${index}`">{{ item }}</li>
  </ol>
  <ul v-else class="rich-list" :class="{ 'rich-list--cards': cards }">
    <li
      v-for="(item, index) in items"
      :key="`${item}-${index}`"
      :class="{ 'metric-list-item': Boolean(markerFor(item)) }"
    >
      <MetricMarker v-if="markerFor(item)" :kind="markerFor(item)" />
      {{ item }}
    </li>
  </ul>
</template>
