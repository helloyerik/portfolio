<script setup>
import { inject } from "vue";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import ScrollProgressBar from "./ScrollProgressBar.vue";

const siteCopy = inject("siteCopy");

const openExternal = (href) => {
  window.open(href, "_blank", "noopener,noreferrer");
};
</script>

<template>
  <header class="topbar">
    <ScrollProgressBar />
    <RevealBlock as="div" class="shell topbar__inner" :order="0">
      <nav class="topnav topbar__actions">
        <NavLink class="topnav__button" href="/">Home</NavLink>
        <NavLink class="topnav__button" href="/cv">CV</NavLink>
        <button type="button" class="topnav__button" @click="openExternal('https://t.me/helloyerik')">
          {{ siteCopy.telegramButton }}
        </button>
      </nav>
    </RevealBlock>
  </header>
</template>
