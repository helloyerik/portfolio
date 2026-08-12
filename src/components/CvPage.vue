<script setup>
import { inject } from "vue";
import RevealBlock from "./RevealBlock.vue";
import SiteFooter from "./SiteFooter.vue";

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
        <h1 class="section-title">{{ item.company }}</h1>
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

        <ul>
          <li v-for="(line, i) in item.responsibilities" :key="`resp-${i}`">{{ line }}</li>
        </ul>
      </div>
    </RevealBlock>

    <RevealBlock
      v-if="cvData.education"
      as="article"
      class="content-block cv-entry"
      :order="cvData.experience.length + 2"
    >
      <div class="cv-entry__header">
        <h1 class="section-title">{{ cvData.education.label }}</h1>
      </div>

      <div class="prose">
        <p>{{ cvData.education.main }}</p>

        <h3 class="cv-entry__label">{{ cvData.education.additionalLabel }}</h3>
        <ul>
          <li v-for="(line, i) in cvData.education.additional" :key="`edu-${i}`">{{ line }}</li>
        </ul>
      </div>
    </RevealBlock>

    <RevealBlock
      v-if="cvData.mentorship"
      as="article"
      class="content-block cv-entry"
      :order="cvData.experience.length + 3"
    >
      <div class="cv-entry__header">
        <h1 class="section-title">{{ cvData.mentorship.label }}</h1>
      </div>

      <div class="prose">
        <ul>
          <li v-for="(line, i) in cvData.mentorship.items" :key="`ment-${i}`">{{ line }}</li>
        </ul>
      </div>
    </RevealBlock>

    <SiteFooter :order="cvData.experience.length + 4" />
  </main>
</template>
