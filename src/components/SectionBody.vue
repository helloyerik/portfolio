<script setup>
import RichList from "./RichList.vue";
import LineList from "./LineList.vue";
import InlineMedia from "./InlineMedia.vue";

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="prose">
    <p v-for="(paragraph, index) in section.paragraphs ?? []" :key="`${paragraph}-${index}`">
      {{ paragraph }}
    </p>

    <template v-if="section.problems?.length">
      <p class="section-inline-title">Проблемы</p>
      <RichList :items="section.problems" />
    </template>

    <InlineMedia
      v-if="section.mediaPlacement === 'after-problems' || section.mediaPlacement === 'before-result'"
      :media="section.media"
    />

    <template v-if="section.result?.length || section.resultList?.length">
      <p :class="section.resultTitleStyle === 'body' ? 'section-inline-label' : 'section-inline-title'">
        {{ section.resultTitle ?? "Результат" }}
      </p>
      <p v-for="(paragraph, index) in section.result ?? []" :key="`${paragraph}-${index}`">
        {{ paragraph }}
      </p>
      <RichList v-if="section.resultList?.length" :items="section.resultList" />
    </template>

    <RichList v-if="section.list?.length" :items="section.list" :ordered="Boolean(section.ordered)" />

    <div v-for="(subsection, index) in section.subsections ?? []" :key="`${subsection.title}-${index}`" class="case-subsection">
      <p class="case-subsection__title">{{ subsection.title }}:</p>
      <p v-for="(paragraph, innerIndex) in subsection.paragraphs ?? []" :key="`${paragraph}-${innerIndex}`">
        {{ paragraph }}
      </p>
      <template v-if="subsection.problems?.length">
        <p class="section-inline-title">Проблемы</p>
        <RichList :items="subsection.problems" />
      </template>
      <RichList
        v-if="subsection.list?.length"
        :items="subsection.list"
        :ordered="Boolean(subsection.ordered)"
      />
      <InlineMedia :media="subsection.media" />
    </div>

    <template v-if="section.learningList?.length">
      <p class="section-inline-title">Личные итоги</p>
      <LineList :items="section.learningList" />
    </template>
  </div>
</template>
