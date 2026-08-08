<script setup>
import { nextTick, onMounted, ref, watch } from "vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  imgClass: {
    type: [String, Array, Object],
    default: "",
  },
  /** Fill the parent box (covers, hero, before/after). */
  fill: {
    type: Boolean,
    default: false,
  },
  /** Position wrapper absolutely (before/after overlay layer). */
  absolute: {
    type: Boolean,
    default: false,
  },
  draggable: {
    type: [Boolean, String],
    default: true,
  },
});

const imgRef = ref(null);
const loaded = ref(false);
const errored = ref(false);

const markLoaded = () => {
  loaded.value = true;
  errored.value = false;
};

const markError = () => {
  errored.value = true;
  loaded.value = true;
};

/** Catch cached images where `load` fired before Vue bound @load. */
const syncFromElement = () => {
  const img = imgRef.value;
  if (!img) return;

  if (!img.complete) return;

  if (img.naturalWidth > 0) {
    markLoaded();
    return;
  }

  // complete + 0 width usually means a broken resource
  if (img.currentSrc || img.src) {
    markError();
  }
};

watch(
  () => props.src,
  async () => {
    loaded.value = false;
    errored.value = false;
    await nextTick();
    syncFromElement();
  },
);

onMounted(async () => {
  await nextTick();
  syncFromElement();
});
</script>

<template>
  <span
    class="media-image"
    :class="{
      'media-image--fill': fill,
      'media-image--absolute': absolute,
      'media-image--loaded': loaded,
      'media-image--error': errored,
    }"
  >
    <span
      v-if="!loaded && !errored"
      class="media-image__skeleton"
      aria-hidden="true"
    />
    <img
      ref="imgRef"
      class="media-image__img"
      :class="imgClass"
      :src="src"
      :alt="alt"
      :draggable="draggable === true || draggable === 'true'"
      @load="markLoaded"
      @error="markError"
    />
  </span>
</template>
