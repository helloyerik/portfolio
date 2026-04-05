<script setup>
import { ListItem } from "@yerik/yedesign-system";

const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  mark: {
    type: String,
    default: "",
  },
  markType: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  blurb: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :id="id" class="company-divider">
    <div class="company-component">
      <ListItem
        :title="name"
        :subtitle="`${period} · ${role}`"
        size="XL"
        variant="plain"
        :interactive="false"
        :chevron="false"
        class="company-divider__item"
      />
    </div>
    <p v-if="blurb" class="company-divider__blurb">{{ blurb }}</p>
  </div>
</template>
