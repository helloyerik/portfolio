<script setup>
import { inject, onBeforeUnmount, onMounted, ref } from "vue";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import ScrollProgressBar from "./ScrollProgressBar.vue";

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
      <nav class="topnav topbar__actions">
        <NavLink class="topnav__button" href="/"><span>Home</span></NavLink>
        <NavLink class="topnav__button" href="/cv"><span>CV</span></NavLink>
        <button type="button" class="topnav__button" @click="openExternal(siteCopy.telegramHref)">
          <span>{{ siteCopy.telegramButton }}</span>
        </button>
      </nav>
    </RevealBlock>
  </header>
  <div class="topbar-spacer" aria-hidden="true" :style="{ height: `${spacerHeight}px` }" />
</template>
