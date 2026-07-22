<script setup>
import { ButtonIcon } from "@yerik/yedesign-system";
import { PhX } from "@phosphor-icons/vue";
import { computed, inject, onBeforeUnmount, onMounted, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);
const siteCopy = inject("siteCopy");
const isOpen = computed(() => props.modelValue && Boolean(props.src));

const stopOverflow = () => {
  document.body.style.overflow = "";
};

const close = () => {
  emit("update:modelValue", false);
};

const onKeyDown = (event) => {
  if (event.key === "Escape") {
    close();
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
  stopOverflow();
});

watch(isOpen, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox" :duration="{ enter: 480, leave: 480 }">
      <div
        v-if="isOpen"
        class="image-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="siteCopy.imageViewerLabel"
      >
        <button
          type="button"
          class="image-lightbox__backdrop"
          :aria-label="siteCopy.imageViewerCloseLabel"
          @click="close"
        />
        <div class="image-lightbox__close">
          <ButtonIcon
            size="L"
            variant="secondary"
            :tooltip="siteCopy.imageViewerCloseLabel"
            @click="close"
          >
            <PhX :size="20" weight="bold" />
          </ButtonIcon>
        </div>
        <div class="image-lightbox__viewport">
          <img class="image-lightbox__image" :src="src" :alt="alt" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
