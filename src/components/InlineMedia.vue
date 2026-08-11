<script setup>
import { computed, onBeforeUnmount, ref } from "vue";
import { Tag } from "@yerik/yedesign-system";
import BeforeAfterSlider from "./BeforeAfterSlider.vue";
import ImageLightbox from "./ImageLightbox.vue";
import MediaImage from "./MediaImage.vue";

const props = defineProps({
  media: {
    type: [String, Object, Array],
    default: null,
  },
});

const activeImage = ref(null);
/** Keys of videos that have painted their first playing frame (poster can hide). */
const readyVideoKeys = ref(new Set());

const isVideoReady = (key) => readyVideoKeys.value.has(key);

const arrayVideoKey = (index) => `a-${index}`;

const markVideoReady = (key) => {
  if (readyVideoKeys.value.has(key)) return;
  const next = new Set(readyVideoKeys.value);
  next.add(key);
  readyVideoKeys.value = next;
};

/** Apply optional media.playbackRate (e.g. 1.25) once metadata is ready. */
const applyPlaybackRate = (event, rate) => {
  const video = event?.target;
  if (!video || rate == null || Number.isNaN(Number(rate))) return;
  video.playbackRate = Number(rate);
};

/** Retry play if autoplay was blocked until data is ready. */
const ensurePlay = (event) => {
  const video = event?.target;
  if (!video || !video.paused) return;
  const playPromise = video.play();
  if (playPromise?.catch) playPromise.catch(() => {});
};

const onVideoPlaying = (key) => {
  markVideoReady(key);
};

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

const isVideo = computed(
  () => typeof props.media === "object" && !Array.isArray(props.media) && props.media?.kind === "video",
);

const carouselItems = computed(() => (isCarousel.value ? props.media.items ?? [] : []));

const isFrames = computed(
  () => typeof props.media === "object" && !Array.isArray(props.media) && props.media?.kind === "frames",
);

const frameItems = computed(() => (isFrames.value ? props.media.items ?? [] : []));

/** Per-frame orientation from natural sizes — drives portrait/landscape frame styles. */
const frameOrientations = ref({});

const onFrameLoaded = (index, size) => {
  if (!size?.naturalWidth || !size?.naturalHeight) return;
  const orientation = size.naturalHeight > size.naturalWidth ? "portrait" : "landscape";
  if (frameOrientations.value[index] === orientation) return;
  frameOrientations.value = { ...frameOrientations.value, [index]: orientation };
};

const frameOrientationClass = (index) => {
  const orientation = frameOrientations.value[index];
  return orientation ? `gallery__item--frame-${orientation}` : "";
};

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
      data-lenis-prevent
      @pointerdown="onCarouselPointerDown"
      @click.capture="onCarouselClickCapture"
    >
      <div
        v-for="(item, index) in carouselItems"
        :key="item.src ?? index"
        class="gallery__item gallery__item--carousel"
      >
        <MediaImage
          img-class="gallery__image"
          :src="item.src"
          :alt="item.alt ?? ''"
          :draggable="false"
        />
      </div>
    </div>
    <div v-else-if="isFrames" class="gallery gallery--frames">
      <div
        v-for="(item, index) in frameItems"
        :key="item.src ?? index"
        class="gallery__item gallery__item--frame"
        :class="frameOrientationClass(index)"
      >
        <button
          type="button"
          class="gallery__zoom-trigger"
          @click="openImage(item.src, item.alt ?? '')"
        >
          <MediaImage
            img-class="gallery__image gallery__image--frame"
            :src="item.src"
            :alt="item.alt ?? ''"
            @loaded="onFrameLoaded(index, $event)"
          />
        </button>
      </div>
    </div>
    <div v-else-if="Array.isArray(media)" class="gallery gallery--stack">
      <div
        v-for="(item, index) in media"
        :key="item.src ?? index"
        class="gallery__item gallery__item--inline"
        :class="{ 'gallery__item--video': item.kind === 'video' }"
        :style="item.kind === 'video' && item.poster
          ? { backgroundImage: `url(${item.poster})` }
          : undefined"
      >
        <video
          v-if="item.kind === 'video'"
          class="gallery__video"
          :class="{ 'gallery__video--ready': isVideoReady(arrayVideoKey(index)) }"
          :src="item.src"
          :poster="item.poster"
          :aria-label="item.alt ?? ''"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          @loadedmetadata="applyPlaybackRate($event, item.playbackRate)"
          @loadeddata="ensurePlay"
          @canplay="ensurePlay"
          @playing="onVideoPlaying(arrayVideoKey(index))"
        />
        <button
          v-else
          type="button"
          class="gallery__zoom-trigger"
          @click="openImage(item.src, item.alt ?? '')"
        >
          <MediaImage img-class="gallery__image" :src="item.src" :alt="item.alt ?? ''" />
        </button>
      </div>
    </div>
    <BeforeAfterSlider
      v-else-if="typeof media === 'object' && media.kind === 'before-after'"
      :before-src="media.beforeSrc"
      :after-src="media.afterSrc"
      :before-label="media.beforeLabel"
      :after-label="media.afterLabel"
    />
    <div
      v-else-if="typeof media === 'object' && media.kind === 'case-soon'"
      class="gallery__item gallery__item--inline gallery__item--case-soon"
    >
      <Tag label="Case Soon" variant="overlay" />
    </div>
    <div
      v-else-if="isVideo"
      class="gallery__item gallery__item--inline gallery__item--video"
      :style="media.poster ? { backgroundImage: `url(${media.poster})` } : undefined"
    >
      <video
        class="gallery__video"
        :class="{ 'gallery__video--ready': isVideoReady('single') }"
        :src="media.src"
        :poster="media.poster"
        :aria-label="media.alt ?? ''"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        @loadedmetadata="applyPlaybackRate($event, media.playbackRate)"
        @loadeddata="ensurePlay"
        @canplay="ensurePlay"
        @playing="onVideoPlaying('single')"
      />
    </div>
    <div v-else class="gallery__item gallery__item--inline">
      <button
        v-if="typeof media === 'object' && media.src"
        type="button"
        class="gallery__zoom-trigger"
        @click="openImage(media.src, media.alt ?? '')"
      >
        <MediaImage
          img-class="gallery__image"
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
