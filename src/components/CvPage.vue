<script setup>
import { inject } from "vue";
import RevealBlock from "./RevealBlock.vue";

defineProps({
  cvData: {
    type: Object,
    required: true,
  },
});

const siteCopy = inject("siteCopy");
</script>

<template>
  <main class="page cv-page shell">
    <RevealBlock class="content-block" :order="1">
      <h1 class="display-title">{{ cvData.title }}</h1>
      <div class="cv-subtitle">{{ cvData.role }}</div>
      <div class="prose">
        <p v-for="(paragraph, index) in cvData.intro" :key="`${paragraph}-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock
      v-for="(item, index) in cvData.experience"
      :key="item.company"
      as="article"
      class="content-block cv-entry"
      :order="index + 2"
    >
      <div class="cv-entry__header">
        <h2 class="section-title">{{ item.company }}</h2>
        <div class="cv-entry__meta">
          <span>{{ item.role }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ item.period }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ item.format }}</span>
        </div>
      </div>

      <div class="prose">
        <p>{{ item.summary }}</p>

        <h3 class="cv-entry__label">{{ siteCopy.cvResponsibilitiesLabel }}</h3>
        <ul>
          <li v-for="(line, i) in item.responsibilities" :key="`resp-${i}`">{{ line }}</li>
        </ul>

        <h3 class="cv-entry__label">{{ siteCopy.cvResultsLabel }}</h3>
        <ul>
          <li v-for="(line, i) in item.results" :key="`res-${i}`">{{ line }}</li>
        </ul>
      </div>
    </RevealBlock>
  </main>
</template>
