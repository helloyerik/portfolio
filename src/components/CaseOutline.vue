<script setup>
import { onMounted, ref } from "vue";
import NavLink from "./NavLink.vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  activeId: {
    type: String,
    default: "",
  },
});

const visible = ref(false);

onMounted(() => {
  window.requestAnimationFrame(() => {
    visible.value = true;
  });
});
</script>

<template>
  <aside
    class="case-outline reveal"
    :class="{ 'reveal--visible': visible }"
    :style="{ '--reveal-delay': '12ms' }"
    aria-label="Навигация по странице"
  >
    <div class="case-outline__toggle" aria-hidden="true">
      <span
        v-for="item in items"
        :key="item.id"
        class="case-outline__line"
        :class="{ 'case-outline__line--active': item.id === activeId }"
      />
    </div>
    <nav class="case-outline__panel">
      <NavLink
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        class="case-outline__link"
        :class="{ 'case-outline__link--active': item.id === activeId }"
      >
        {{ item.label }}
      </NavLink>
    </nav>
  </aside>
</template>
