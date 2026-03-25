<script setup>
import { ListItem } from "@yedesign";
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
      size="XL"
      variant="plain"
      :interactive="false"
      :chevron="false"
      class-name="company-divider__item"
    >
      <template #media>
        <div class="company-divider__mark" :class="{ 'company-divider__mark--image': isMechtaLogo }" aria-hidden="true">
          <img v-if="isMechtaLogo" class="company-divider__logo-image" :src="mechtaKzLogo" alt="" />
          <template v-else>{{ mark }}</template>
        </div>
      </template>
    </ListItem>
    <p v-if="blurb" class="company-divider__blurb">{{ blurb }}</p>
  </div>
</template>
