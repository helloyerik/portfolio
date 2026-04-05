<script setup>
import { inject } from "vue";
import { Button } from "@yerik/yedesign-system";
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
      <NavLink class="brand" href="/">Yerik</NavLink>
      <nav class="topnav topbar__actions">
        <Button
          :label="siteCopy.telegramButton"
          variant="text-only"
          size="M"
          class-name="topnav__button"
          @click="openExternal('https://t.me/helloyerik')"
        />
      </nav>
    </RevealBlock>
  </header>
</template>
