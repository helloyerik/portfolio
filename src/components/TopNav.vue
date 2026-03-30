<script setup>
import { inject, ref } from "vue";
import { Button } from "@yerik/yedesign-system";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import ScrollProgressBar from "./ScrollProgressBar.vue";
import ThemeSettingsModal from "./ThemeSettingsModal.vue";

const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
  palette: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:theme", "update:palette"]);

const isThemeSettingsOpen = ref(false);
const siteCopy = inject("siteCopy");

const openExternal = (href) => {
  window.open(href, "_blank", "noopener,noreferrer");
};

const openEmail = () => {
  window.location.href = "mailto:helloyerik@gmail.com";
};
</script>

<template>
  <header class="topbar">
    <ScrollProgressBar />
    <RevealBlock as="div" class="shell topbar__inner" :order="0">
      <NavLink class="brand" href="/">Yerik Kuanbayev</NavLink>
      <nav class="topnav topbar__actions">
        <Button
          :label="siteCopy.telegramButton"
          variant="text-only"
          size="M"
          class-name="topnav__button"
          @click="openExternal('https://t.me/helloyerik')"
        />
        <Button
          :label="siteCopy.emailButton"
          variant="text-only"
          size="M"
          class-name="topnav__button"
          @click="openEmail"
        />
        <Button
          :label="siteCopy.themeButton"
          variant="text-only"
          size="M"
          class-name="theme-toggle"
          @click="isThemeSettingsOpen = true"
        />
      </nav>
    </RevealBlock>
  </header>

  <ThemeSettingsModal
    v-if="isThemeSettingsOpen"
    :theme="theme"
    :palette="palette"
    @close="isThemeSettingsOpen = false"
    @update:theme="emit('update:theme', $event)"
    @update:palette="emit('update:palette', $event)"
  />
</template>
