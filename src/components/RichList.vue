<script setup>
import { isPositiveNdaMetric } from "../lib/metricMarkers";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  ordered: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <ol v-if="ordered">
    <li v-for="(item, index) in items" :key="`${item}-${index}`">{{ item }}</li>
  </ol>
  <ul v-else class="rich-list">
    <li
      v-for="(item, index) in items"
      :key="`${item}-${index}`"
      :class="{ 'metric-list-item': isPositiveNdaMetric(item) }"
    >
      <span v-if="isPositiveNdaMetric(item)" class="metric-list-item__marker" aria-hidden="true">↑</span>
      {{ item }}
    </li>
  </ul>
</template>
