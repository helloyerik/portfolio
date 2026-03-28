<script setup>
import { computed, inject } from "vue";
import { localizeHref, navigate } from "../lib/navigation";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});

const locale = inject("locale", computed(() => "en"));
const localizedHref = computed(() => localizeHref(props.href, locale.value));

const handleClick = (event) => {
  navigate(event, localizedHref.value);
};
</script>

<template>
  <a :href="localizedHref" @click="handleClick">
    <slot />
  </a>
</template>
