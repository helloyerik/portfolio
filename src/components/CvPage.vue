<script setup>
import { cvData } from "../content/cases";
import RevealBlock from "./RevealBlock.vue";
import RichList from "./RichList.vue";
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
          <span>{{ item.period }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ item.role }}</span>
          <span aria-hidden="true">·</span>
          <span>{{ item.format }}</span>
        </div>
      </div>

      <div class="prose">
        <p>{{ item.summary }}</p>
      </div>

      <div class="cv-entry__grid">
        <div class="cv-entry__block">
          <h3 class="cv-entry__label">Проекты</h3>
          <RichList :items="item.projects" />
        </div>
        <div class="cv-entry__block">
          <h3 class="cv-entry__label">Обязанности</h3>
          <RichList :items="item.responsibilities" />
        </div>
        <div class="cv-entry__block">
          <h3 class="cv-entry__label">Результаты</h3>
          <RichList :items="item.results" />
        </div>
      </div>
    </RevealBlock>
  </main>
</template>
