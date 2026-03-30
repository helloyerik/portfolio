<script setup>
import { inject, onBeforeUnmount, onMounted, ref } from "vue";
import NavLink from "./NavLink.vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  activeId: {
    type: String,
    default: "",
  },
});

const visible = ref(false);
const isOpen = ref(false);
const outlineRef = ref(null);
const siteCopy = inject("siteCopy");
let closeTimeoutId = 0;

const clearCloseTimeout = () => {
  if (!closeTimeoutId) return;
  window.clearTimeout(closeTimeoutId);
  closeTimeoutId = 0;
};

const openOutline = () => {
  clearCloseTimeout();
  if (isOpen.value) return;
  isOpen.value = true;
};

const closeOutline = () => {
  clearCloseTimeout();
  if (!isOpen.value) return;
  isOpen.value = false;
};

const scheduleClose = () => {
  clearCloseTimeout();
  closeTimeoutId = window.setTimeout(() => {
    isOpen.value = false;
    closeTimeoutId = 0;
  }, 120);
};

const handleFocusOut = (event) => {
  if (!outlineRef.value?.contains(event.relatedTarget)) {
    closeOutline();
  }
};

onMounted(() => {
  window.requestAnimationFrame(() => {
    visible.value = true;
  });
});

onBeforeUnmount(() => {
  clearCloseTimeout();
});
</script>

<template>
  <aside
    ref="outlineRef"
    class="case-outline reveal"
    :class="{ 'reveal--visible': visible, 'case-outline--open': isOpen }"
    :style="{ '--reveal-delay': '12ms' }"
    :aria-label="siteCopy.caseOutlineAriaLabel"
    @mouseenter="openOutline"
    @mouseleave="scheduleClose"
    @focusin="openOutline"
    @focusout="handleFocusOut"
  >
    <div class="case-outline__toggle" aria-hidden="true">
      <span
        v-for="item in items"
        :key="item.id"
        class="case-outline__line"
        :class="{ 'case-outline__line--active': item.id === activeId }"
      />
    </div>
    <nav class="case-outline__panel">
      <NavLink
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        class="case-outline__link"
        :class="{ 'case-outline__link--active': item.id === activeId }"
        @click="closeOutline"
      >
        {{ item.label }}
      </NavLink>
    </nav>
  </aside>
</template>
