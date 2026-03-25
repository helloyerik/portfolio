<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <ul class="line-list">
    <li v-for="(item, index) in items" :key="`${item}-${index}`">
      <template v-if="index > 0"><br /></template>{{ item }}
    </li>
  </ul>
</template>
