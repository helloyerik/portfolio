<script setup>
import { ref } from "vue";
import BeforeAfterSlider from "./BeforeAfterSlider.vue";
import ImageLightbox from "./ImageLightbox.vue";

const props = defineProps({
  media: {
    type: [String, Object, Array],
    default: null,
  },
});

const activeImage = ref(null);

const openImage = (src, alt = "") => {
  if (!src) return;
  activeImage.value = { src, alt };
};

const closeImage = () => {
  activeImage.value = null;
};
</script>

<template>
  <template v-if="media">
    <div v-if="Array.isArray(media)" class="gallery gallery--carousel gallery--square">
      <div v-for="(item, index) in media" :key="item.src ?? index" class="gallery__item gallery__item--carousel">
        <button type="button" class="gallery__zoom-trigger" @click="openImage(item.src, item.alt ?? '')">
          <img class="gallery__image" :src="item.src" :alt="item.alt ?? ''" />
        </button>
      </div>
    </div>
    <div
      v-else-if="typeof media === 'object' && media.kind === 'before-after'"
      class="gallery__item gallery__item--inline gallery__item--bare gallery__item--square"
    >
      <BeforeAfterSlider
        :before-src="media.beforeSrc"
        :after-src="media.afterSrc"
        :before-label="media.beforeLabel"
        :after-label="media.afterLabel"
      />
    </div>
    <div
      v-else
      class="gallery__item gallery__item--inline"
      :class="{ 'gallery__item--square': typeof media === 'object' && media.src }"
    >
      <button
        v-if="typeof media === 'object' && media.src"
        type="button"
        class="gallery__zoom-trigger"
        @click="openImage(media.src, media.alt ?? '')"
      >
        <img
          class="gallery__image"
          :src="media.src"
          :alt="media.alt ?? ''"
        />
      </button>
      <template v-else>{{ media }}</template>
    </div>
    <ImageLightbox
      :model-value="Boolean(activeImage)"
      :src="activeImage?.src ?? ''"
      :alt="activeImage?.alt ?? ''"
      @update:model-value="closeImage"
    />
  </template>
</template>
