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
    default: "",
  },
  role: {
    type: String,
    default: "",
  },
  blurb: {
    type: String,
    default: "",
  },
});

const subtitle = [props.period, props.role].filter(Boolean).join(" · ");
</script>

<template>
  <div :id="id" class="company-divider">
    <div class="company-component">
      <ListItem
        :title="name"
        :subtitle="subtitle"
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
