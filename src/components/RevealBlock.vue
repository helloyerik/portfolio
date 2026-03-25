<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  as: {
    type: String,
    default: "div",
  },
  order: {
    type: Number,
    default: 0,
  },
});

const visible = ref(false);

onMounted(() => {
  window.requestAnimationFrame(() => {
    visible.value = true;
  });
});
</script>

<template>
  <component
    :is="as"
    class="reveal"
    :class="{ 'reveal--visible': visible }"
    :style="{ '--reveal-delay': `${order * 12}ms` }"
  >
    <slot />
  </component>
</template>
