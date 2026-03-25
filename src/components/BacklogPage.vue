<script setup>
import { backlogSections } from "../content/cases";
import RevealBlock from "./RevealBlock.vue";
</script>

<template>
  <main class="page shell">
    <RevealBlock as="section" class="page-header" :order="1">
      <div class="content-block">
        <div class="eyebrow">Рабочая страница</div>
        <h1 class="display-title">Backlog</h1>
        <div class="prose">
          <p>
            Сюда складывается нераспределенный, сырой и промежуточный контент, который пока не
            вошел в основную структуру сайта. Эта страница нужна как рабочий буфер, чтобы не
            терять материалы между итерациями.
          </p>
        </div>
      </div>
    </RevealBlock>

    <section class="page-grid">
      <RevealBlock
        v-for="(section, index) in backlogSections"
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
