<script setup>
import { isPositiveNdaMetric } from "../lib/metricMarkers";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="line-list">
    <li
      v-for="(item, index) in items"
      :key="`${item}-${index}`"
      :class="{ 'metric-list-item': isPositiveNdaMetric(item) }"
    >
      <span v-if="isPositiveNdaMetric(item)" class="metric-list-item__marker" aria-hidden="true">↑</span>
      <template v-if="index > 0"><br /></template>{{ item }}
    </li>
  </ul>
</template>
