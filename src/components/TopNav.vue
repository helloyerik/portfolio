<script setup>
import { ref } from "vue";
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
</script>

<template>
  <header class="topbar">
    <ScrollProgressBar />
    <RevealBlock as="div" class="shell topbar__inner" :order="0">
      <NavLink class="brand" href="/">Yerik Kuanbayev</NavLink>
      <div class="topbar__actions">
        <nav class="topnav">
          <a href="https://t.me/helloyerik" target="_blank" rel="noreferrer">Telegram</a>
          <span>Email</span>
        </nav>
        <Button
          label="Тема"
          variant="text-only"
          size="M"
          class-name="theme-toggle"
          @click="isThemeSettingsOpen = true"
        />
      </div>
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
