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
const scrollToTop = inject("scrollToTop", () => window.scrollTo(0, 0));
</script>

<template>
  <RevealBlock as="footer" class="project-nav site-footer" :order="order">
    <span>{{ siteCopy.footerCopyright }}</span>
    <button type="button" class="topnav__button" @click="scrollToTop">
      <span>{{ siteCopy.backToTopLabel }} <span class="site-footer__arrow" aria-hidden="true">&uarr;</span></span>
    </button>
  </RevealBlock>
</template>
