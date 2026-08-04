<script setup>
import { computed } from "vue";
import { ListItem } from "@yerik/yedesign-system";
import mechtaLogo from "@/assets/mechta-kz-logo.png";
import habrLogo from "@/assets/habr-logo.png";

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

const logoByMarkType = {
  mechta: mechtaLogo,
  habr: habrLogo,
};

const logoSrc = computed(() => logoByMarkType[props.markType] ?? "");
</script>

<template>
  <div :id="id" class="company-divider">
    <div class="company-component">
      <ListItem
        :title="name"
        :subtitle="subtitle"
        :image-src="logoSrc"
        :image-alt="name"
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
