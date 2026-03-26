<script setup>
import { Button, BottomSheet, Dialog, RadioGroup, useIsMobileViewport } from "@yerik/yedesign-system";

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

const emit = defineEmits(["close", "update:theme", "update:palette"]);

const paletteOptions = [
  { value: "default", label: "Стандартная" },
  { value: "gruvbox", label: "Gruvbox" },
];

const themeOptions = [
  { value: "light", label: "Светлая" },
  { value: "dark", label: "Темная" },
];

const { isMobile } = useIsMobileViewport();

</script>

<template>
  <BottomSheet
    v-if="isMobile"
    :model-value="true"
    title="Настройки темы"
    body-class-name="theme-settings-modal__sheet-body"
    @update:model-value="emit('close')"
    @close="emit('close')"
  >
    <div class="theme-settings-modal__body">
      <div class="theme-settings-modal__section">
        <p class="theme-settings-modal__label">Палитра</p>
        <RadioGroup
          :model-value="palette"
          :options="paletteOptions"
          direction="vertical"
          size="L"
          @update:model-value="emit('update:palette', $event)"
        />
      </div>

      <div class="theme-settings-modal__section">
        <p class="theme-settings-modal__label">Режим</p>
        <RadioGroup
          :model-value="theme"
          :options="themeOptions"
          direction="vertical"
          size="L"
          @update:model-value="emit('update:theme', $event)"
        />
      </div>

      <Button label="Готово" variant="primary" size="M" width="full" @click="emit('close')" />
    </div>
  </BottomSheet>

  <Dialog
    v-else
    :model-value="true"
    title="Настройки темы"
    width="S"
    variant="Secondary"
    :show-footer="true"
    body-class-name="theme-settings-modal__body"
    content-class-name="theme-settings-modal__content"
    @update:model-value="emit('close')"
    @close="emit('close')"
  >
    <div class="theme-settings-modal__section">
      <p class="theme-settings-modal__label">Палитра</p>
      <RadioGroup
        :model-value="palette"
        :options="paletteOptions"
        direction="vertical"
        size="L"
        @update:model-value="emit('update:palette', $event)"
      />
    </div>

    <div class="theme-settings-modal__section">
      <p class="theme-settings-modal__label">Режим</p>
      <RadioGroup
        :model-value="theme"
        :options="themeOptions"
        direction="vertical"
        size="L"
        @update:model-value="emit('update:theme', $event)"
      />
    </div>

    <template #footer>
      <Button label="Готово" variant="primary" size="M" width="full" @click="emit('close')" />
    </template>
  </Dialog>
</template>
