<script setup>
import { inject } from "vue";
import RevealBlock from "./RevealBlock.vue";

defineProps({
  order: {
    type: Number,
    default: 0,
  },
});

const siteCopy = inject("siteCopy");
</script>

<template>
  <RevealBlock as="section" :order="order">
    <a
      class="contact-cta"
      :href="siteCopy.telegramHref"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="contact-cta__title">{{ siteCopy.ctaTitle }}</span>
      <kbd class="keycap" aria-hidden="true">C</kbd>
    </a>
  </RevealBlock>
</template>
