<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const progress = ref(0);
let rafId = 0;

const syncProgress = () => {
  const scrollTop =
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    0;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) {
    progress.value = 0;
    return;
  }

  progress.value = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
};

const requestSync = () => {
  if (rafId) return;

  rafId = window.requestAnimationFrame(() => {
    rafId = 0;
    syncProgress();
  });
};

onMounted(() => {
  syncProgress();
  window.addEventListener("scroll", requestSync, { passive: true });
  window.addEventListener("resize", requestSync);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", requestSync);
  window.removeEventListener("resize", requestSync);

  if (rafId) {
    window.cancelAnimationFrame(rafId);
  }
});
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress__fill" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>
