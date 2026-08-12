<script setup>
import { inject, onBeforeUnmount, onMounted, ref } from "vue";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import ScrollProgressBar from "./ScrollProgressBar.vue";

const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:theme"]);

const siteCopy = inject("siteCopy");
const hidden = ref(false);
const topbarRef = ref(null);
const spacerHeight = ref(0);

let lastScrollY = 0;

const syncSpacer = () => {
  spacerHeight.value = topbarRef.value?.offsetHeight ?? 0;
};

const onScroll = () => {
  const y = window.scrollY || document.documentElement.scrollTop || 0;

  if (y <= 0) {
    hidden.value = false;
  } else if (y > lastScrollY) {
    hidden.value = true;
  } else if (y < lastScrollY) {
    hidden.value = false;
  }

  lastScrollY = y;
};

const openExternal = (href) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

const toggleTheme = () => {
  emit("update:theme", props.theme === "dark" ? "light" : "dark");
};

onMounted(() => {
  lastScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  syncSpacer();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", syncSpacer, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", syncSpacer);
});
</script>

<template>
  <ScrollProgressBar />
  <header ref="topbarRef" class="topbar" :class="{ 'topbar--hidden': hidden }">
    <RevealBlock as="div" class="shell topbar__inner" :order="0">
      <nav class="topnav topbar__nav">
        <NavLink class="topnav__button" href="/">
          <span>Home</span>
          <kbd class="keycap" aria-hidden="true">H</kbd>
        </NavLink>
        <NavLink class="topnav__button" href="/cv">
          <span>Резюме</span>
          <kbd class="keycap" aria-hidden="true">R</kbd>
        </NavLink>
        <button type="button" class="topnav__button" @click="toggleTheme">
          <span>{{ siteCopy.themeButton }}</span>
          <kbd class="keycap" aria-hidden="true">D</kbd>
        </button>
      </nav>
      <button type="button" class="topnav__button topbar__end" @click="openExternal(siteCopy.telegramHref)">
        <span>{{ siteCopy.telegramButton }}</span>
        <kbd class="keycap" aria-hidden="true">C</kbd>
      </button>
    </RevealBlock>
  </header>
  <div class="topbar-spacer" aria-hidden="true" :style="{ height: `${spacerHeight}px` }" />
</template>
