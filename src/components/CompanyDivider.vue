<script setup>
import { ListItem } from "@yerik/yedesign-system";
import mechtaKzLogo from "../assets/mechta-kz-logo.png";

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

const isMechtaLogo = props.markType === "mechta";
</script>

<template>
  <div :id="id" class="company-divider">
    <ListItem
      :title="name"
      :subtitle="`${period} · ${role}`"
      size="M"
      variant="plain"
      :interactive="false"
      :chevron="false"
      class="company-divider__item"
    >
      <template #media>
        <img v-if="isMechtaLogo" class="company-divider__logo-image" :src="mechtaKzLogo" alt="" aria-hidden="true" />
        <div v-else class="company-divider__mark" aria-hidden="true">
          {{ mark }}
        </div>
      </template>
    </ListItem>
    <p v-if="blurb" class="company-divider__blurb">{{ blurb }}</p>
  </div>
</template>
