<script setup>
import { navigate } from "../lib/navigation";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});

const handleClick = (event) => {
  navigate(event, props.href);
};
</script>

<template>
  <a :href="href" @click="handleClick">
    <slot />
  </a>
</template>
