<script setup>
import { computed, inject } from "vue";
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

const siteCopy = inject("siteCopy");
const paletteOptions = computed(() => [
  { value: "default", label: siteCopy.value.defaultPaletteLabel },
  { value: "gruvbox", label: siteCopy.value.gruvboxPaletteLabel },
]);

const themeOptions = computed(() => [
  { value: "light", label: siteCopy.value.lightThemeLabel },
  { value: "dark", label: siteCopy.value.darkThemeLabel },
]);

const { isMobile } = useIsMobileViewport();

</script>

<template>
  <BottomSheet
    v-if="isMobile"
    :model-value="true"
    :title="siteCopy.themeSettingsTitle"
    body-class-name="theme-settings-modal__sheet-body"
    @update:model-value="emit('close')"
    @close="emit('close')"
  >
    <div class="theme-settings-modal__body">
      <div class="theme-settings-modal__section">
        <p class="theme-settings-modal__label">{{ siteCopy.paletteLabel }}</p>
        <RadioGroup
          :model-value="palette"
          :options="paletteOptions"
          direction="vertical"
          size="L"
          @update:model-value="emit('update:palette', $event)"
        />
      </div>

      <div class="theme-settings-modal__section">
        <p class="theme-settings-modal__label">{{ siteCopy.modeLabel }}</p>
        <RadioGroup
          :model-value="theme"
          :options="themeOptions"
          direction="vertical"
          size="L"
          @update:model-value="emit('update:theme', $event)"
        />
      </div>

      <Button :label="siteCopy.doneLabel" variant="primary" size="M" width="full" @click="emit('close')" />
    </div>
  </BottomSheet>

  <Dialog
    v-else
    :model-value="true"
    :title="siteCopy.themeSettingsTitle"
    width="S"
    variant="Secondary"
    :show-footer="true"
    body-class-name="theme-settings-modal__body"
    content-class-name="theme-settings-modal__content"
    @update:model-value="emit('close')"
    @close="emit('close')"
  >
    <div class="theme-settings-modal__section">
      <p class="theme-settings-modal__label">{{ siteCopy.paletteLabel }}</p>
      <RadioGroup
        :model-value="palette"
        :options="paletteOptions"
        direction="vertical"
        size="L"
        @update:model-value="emit('update:palette', $event)"
      />
    </div>

    <div class="theme-settings-modal__section">
      <p class="theme-settings-modal__label">{{ siteCopy.modeLabel }}</p>
      <RadioGroup
        :model-value="theme"
        :options="themeOptions"
        direction="vertical"
        size="L"
        @update:model-value="emit('update:theme', $event)"
      />
    </div>

    <template #footer>
      <Button :label="siteCopy.doneLabel" variant="primary" size="M" width="full" @click="emit('close')" />
    </template>
  </Dialog>
</template>
