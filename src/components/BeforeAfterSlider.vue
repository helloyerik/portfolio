<script setup>
import { Tag } from "@yedesign";
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = defineProps({
  beforeSrc: {
    type: String,
    required: true,
  },
  afterSrc: {
    type: String,
    required: true,
  },
  beforeLabel: {
    type: String,
    default: "До",
  },
  afterLabel: {
    type: String,
    default: "После",
  },
});

const frameRef = ref(null);
const position = ref(50);
const hintAnimating = ref(false);
const hasPlayedHint = ref(false);

const updatePositionFromClientX = (clientX) => {
  const frame = frameRef.value;
  if (!frame) return;

  const rect = frame.getBoundingClientRect();
  const next = ((clientX - rect.left) / rect.width) * 100;
  position.value = Math.min(100, Math.max(0, next));
};

const stopHint = () => {
  hintAnimating.value = false;
  hasPlayedHint.value = true;
};

const handlePointerMove = (event) => {
  if (event.pointerType !== "mouse") return;
  stopHint();
  updatePositionFromClientX(event.clientX);
};

const handleTouchMove = (event) => {
  const touch = event.touches?.[0];
  if (!touch) return;
  stopHint();
  updatePositionFromClientX(touch.clientX);
};

let observer;
let delayTimeout;
let returnTimeout;
let finishTimeout;
let startFrame;

onMounted(() => {
  if (!frameRef.value || hasPlayedHint.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting || hasPlayedHint.value) return;

      observer.disconnect();
      hasPlayedHint.value = true;

      delayTimeout = window.setTimeout(() => {
        hintAnimating.value = true;

        startFrame = window.requestAnimationFrame(() => {
          position.value = 75;
        });

        returnTimeout = window.setTimeout(() => {
          position.value = 50;
        }, 1240);

        finishTimeout = window.setTimeout(() => {
          hintAnimating.value = false;
        }, 2640);
      }, 2000);
    },
    { threshold: 0.45 },
  );

  observer.observe(frameRef.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (delayTimeout) window.clearTimeout(delayTimeout);
  if (returnTimeout) window.clearTimeout(returnTimeout);
  if (finishTimeout) window.clearTimeout(finishTimeout);
  if (startFrame) window.cancelAnimationFrame(startFrame);
});
</script>

<template>
  <div class="before-after">
    <div
      ref="frameRef"
      class="before-after__frame"
      :class="{ 'before-after__frame--hint-animating': hintAnimating }"
      @pointermove="handlePointerMove"
      @touchstart="handleTouchMove"
      @touchmove="handleTouchMove"
    >
      <div class="before-after__base" aria-hidden="true">
        <img class="before-after__image before-after__image--base" :src="afterSrc" :alt="afterLabel" />
        <div class="before-after__layer-tags before-after__layer-tags--base">
          <Tag class="before-after__tag" :label="afterLabel" variant="overlay" />
        </div>
      </div>
      <div
        class="before-after__overlay"
        :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
        aria-hidden="true"
      >
        <img class="before-after__image before-after__image--overlay" :src="beforeSrc" :alt="beforeLabel" />
        <div class="before-after__layer-tags before-after__layer-tags--overlay">
          <Tag class="before-after__tag" :label="beforeLabel" variant="overlay" />
        </div>
      </div>
      <div class="before-after__divider" :style="{ left: `${position}%` }" aria-hidden="true">
        <span class="before-after__handle" />
      </div>
    </div>
  </div>
</template>
