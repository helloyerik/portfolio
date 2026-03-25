<script setup>
import BeforeAfterSlider from "./BeforeAfterSlider.vue";
import ServiceCardAnatomy from "./ServiceCardAnatomy.vue";

const props = defineProps({
  media: {
    type: [String, Object],
    default: null,
  },
});
</script>

<template>
  <template v-if="media">
    <div
      v-if="typeof media === 'object' && media.kind === 'before-after'"
      class="gallery__item gallery__item--inline gallery__item--bare"
    >
      <BeforeAfterSlider
        :before-src="media.beforeSrc"
        :after-src="media.afterSrc"
        :before-label="media.beforeLabel"
        :after-label="media.afterLabel"
      />
    </div>
    <div
      v-else-if="typeof media === 'object' && media.kind === 'service-card-anatomy'"
      class="gallery__item gallery__item--inline"
    >
      <ServiceCardAnatomy />
    </div>
    <div v-else class="gallery__item gallery__item--inline">
      <img
        v-if="typeof media === 'object' && media.src"
        class="gallery__image"
        :src="media.src"
        :alt="media.alt ?? ''"
      />
      <template v-else>{{ media }}</template>
    </div>
  </template>
</template>
