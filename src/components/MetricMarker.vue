<script setup>
import { PhCheck, PhMinus } from "@phosphor-icons/vue";

defineProps({
  kind: {
    type: String,
    required: true,
    validator: (value) => value === "check" || value === "minus",
  },
});
</script>

<template>
  <span
    class="metric-list-item__marker"
    :class="`metric-list-item__marker--${kind}`"
    aria-hidden="true"
  >
    <PhCheck v-if="kind === 'check'" :size="14" weight="bold" />
    <PhMinus v-else :size="14" weight="bold" />
  </span>
</template>
