<script setup>
import { computed, onBeforeUnmount, ref } from "vue";
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

const isCarousel = computed(
  () => typeof props.media === "object" && !Array.isArray(props.media) && props.media?.kind === "carousel",
);

const carouselItems = computed(() => (isCarousel.value ? props.media.items ?? [] : []));

/** Carousel: horizontal trackpad/drag only — no vertical page scroll while hovered. */
const carouselRef = ref(null);
const isDragging = ref(false);
const DRAG_THRESHOLD = 4;

let dragPointerId = null;
let dragStartX = 0;
let dragStartScrollLeft = 0;
let dragMoved = false;
let suppressClickUntil = 0;
let removeDragListeners = null;

const canCarouselScroll = (el) => el && el.scrollWidth > el.clientWidth + 1;

const onCarouselPointerMove = (event) => {
  if (event.pointerId !== dragPointerId) return;
  const el = carouselRef.value;
  if (!el) return;

  const deltaX = event.clientX - dragStartX;
  if (!dragMoved && Math.abs(deltaX) >= DRAG_THRESHOLD) {
    dragMoved = true;
    isDragging.value = true;
  }
  if (!dragMoved) return;

  event.preventDefault();
  el.scrollLeft = dragStartScrollLeft - deltaX;
};

const endCarouselDrag = () => {
  removeDragListeners?.();
  removeDragListeners = null;

  if (dragMoved) {
    suppressClickUntil = Date.now() + 250;
  }

  isDragging.value = false;
  dragPointerId = null;
  dragMoved = false;
};

const onCarouselPointerDown = (event) => {
  if (event.pointerType !== "mouse" || event.button !== 0) return;
  const el = carouselRef.value;
  if (!el || !canCarouselScroll(el)) return;

  dragPointerId = event.pointerId;
  dragStartX = event.clientX;
  dragStartScrollLeft = el.scrollLeft;
  dragMoved = false;

  const onPointerMove = (moveEvent) => onCarouselPointerMove(moveEvent);
  const onPointerUp = () => endCarouselDrag();

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
  document.addEventListener("pointercancel", onPointerUp);
  removeDragListeners = () => {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    document.removeEventListener("pointercancel", onPointerUp);
  };
};

const onCarouselClickCapture = (event) => {
  if (Date.now() < suppressClickUntil) {
    event.preventDefault();
    event.stopPropagation();
  }
};

onBeforeUnmount(() => {
  endCarouselDrag();
});
</script>

<template>
  <template v-if="media">
    <div
      v-if="isCarousel"
      ref="carouselRef"
      class="gallery gallery--carousel"
      :class="{ 'gallery--carousel-dragging': isDragging }"
      @pointerdown="onCarouselPointerDown"
      @click.capture="onCarouselClickCapture"
    >
      <div
        v-for="(item, index) in carouselItems"
        :key="item.src ?? index"
        class="gallery__item gallery__item--carousel"
      >
        <img class="gallery__image" :src="item.src" :alt="item.alt ?? ''" draggable="false" />
      </div>
    </div>
    <div v-else-if="Array.isArray(media)" class="gallery gallery--stack">
      <div v-for="(item, index) in media" :key="item.src ?? index" class="gallery__item gallery__item--inline">
        <button type="button" class="gallery__zoom-trigger" @click="openImage(item.src, item.alt ?? '')">
          <img class="gallery__image" :src="item.src" :alt="item.alt ?? ''" />
        </button>
      </div>
    </div>
    <div
      v-else-if="typeof media === 'object' && media.kind === 'before-after'"
      class="gallery__item gallery__item--inline gallery__item--bare"
    >
      <BeforeAfterSlider
        :before-src="media.beforeSrc"
        :after-src="media.afterSrc"
        :before-label="media.beforeLabel"
        :after-label="media.afterLabel"
      />
    </div>
    <div v-else class="gallery__item gallery__item--inline">
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
