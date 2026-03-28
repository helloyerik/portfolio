<script setup>
import { inject } from "vue";
import RevealBlock from "./RevealBlock.vue";

defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
});

const siteCopy = inject("siteCopy");
</script>

<template>
  <main class="page shell">
    <RevealBlock as="section" class="page-header" :order="1">
      <div class="content-block">
        <div class="eyebrow">{{ siteCopy.workPageEyebrow }}</div>
        <h1 class="display-title">Backlog</h1>
        <div class="prose">
          <p>{{ siteCopy.backlogDescription }}</p>
        </div>
      </div>
    </RevealBlock>

    <section class="page-grid">
      <RevealBlock
        v-for="(section, index) in sections"
        :key="section.title"
        as="article"
        class="content-block"
        :order="index + 2"
      >
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="prose">
          <p v-for="(paragraph, innerIndex) in section.paragraphs ?? []" :key="`${paragraph}-${innerIndex}`">
            {{ paragraph }}
          </p>
          <ul v-if="section.list">
            <li v-for="(item, itemIndex) in section.list" :key="`${item}-${itemIndex}`">{{ item }}</li>
          </ul>
        </div>
      </RevealBlock>
    </section>
  </main>
</template>
