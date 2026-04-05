<script setup>
import { inject } from "vue";
import RichList from "./RichList.vue";
import LineList from "./LineList.vue";
import InlineMedia from "./InlineMedia.vue";

const props = defineProps({
  section: {
    type: Object,
    required: true,
  },
});

const siteCopy = inject("siteCopy");
</script>

<template>
  <div class="case-section__content">
    <p v-for="(paragraph, index) in section.paragraphs ?? []" :key="`${paragraph}-${index}`">
      {{ paragraph }}
    </p>

    <template v-if="section.problems?.length">
      <h3 class="section-inline-title">{{ siteCopy.problemsLabel }}</h3>
      <RichList :items="section.problems" />
    </template>

    <InlineMedia
      v-if="section.mediaPlacement === 'after-problems' || section.mediaPlacement === 'before-result'"
      :media="section.media"
    />

    <template v-if="section.result?.length || section.resultList?.length">
      <p v-if="section.resultTitleStyle === 'body'" class="section-inline-label">
        {{ section.resultTitle ?? siteCopy.resultLabel }}
      </p>
      <h3 v-else class="section-inline-title">
        {{ section.resultTitle ?? siteCopy.resultLabel }}
      </h3>
      <p v-for="(paragraph, index) in section.result ?? []" :key="`${paragraph}-${index}`">
        {{ paragraph }}
      </p>
      <RichList v-if="section.resultList?.length" :items="section.resultList" :force-markers="true" />
    </template>

    <RichList v-if="section.list?.length" :items="section.list" :ordered="Boolean(section.ordered)" />

    <div v-for="(subsection, index) in section.subsections ?? []" :key="`${subsection.title}-${index}`" class="case-subsection">
      <h3 class="case-subsection__title">{{ subsection.title }}:</h3>
      <p v-for="(paragraph, innerIndex) in subsection.paragraphs ?? []" :key="`${paragraph}-${innerIndex}`">
        {{ paragraph }}
      </p>
      <template v-if="subsection.problems?.length">
        <h3 class="section-inline-title">{{ siteCopy.problemsLabel }}</h3>
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
      <h3 class="section-inline-title">{{ siteCopy.personalTakeawaysLabel }}</h3>
      <LineList :items="section.learningList" />
    </template>
  </div>
</template>
