<script setup>
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
  <ul v-else>
    <li v-for="(item, index) in items" :key="`${item}-${index}`">{{ item }}</li>
  </ul>
</template>
