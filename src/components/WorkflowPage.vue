<script setup>
import { computed, inject } from "vue";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import SectionBody from "./SectionBody.vue";
import SiteFooter from "./SiteFooter.vue";

const props = defineProps({
  workflowCase: {
    type: Object,
    required: true,
  },
});

const mergedSections = computed(() => props.workflowCase.sections ?? []);
const siteCopy = inject("siteCopy");
</script>

<template>
  <main class="page case-page shell">
    <RevealBlock class="content-block" :order="1">
      <h1 class="display-title">{{ workflowCase.title }} / Workflow</h1>
      <div class="prose">
        <p>{{ siteCopy.workflowIntro }}</p>
      </div>
    </RevealBlock>

    <RevealBlock
      v-for="(section, index) in mergedSections"
      :key="section.title"
      as="article"
      class="content-block"
      :order="index + 2"
    >
      <h2 class="section-title">{{ section.title }}</h2>
      <SectionBody :section="section" />
    </RevealBlock>

    <RevealBlock as="nav" class="project-nav" :order="mergedSections.length + 2">
      <NavLink :href="workflowCase.publicHref">{{ siteCopy.workflowPublicCaseLabel }}</NavLink>
      <NavLink href="/#mechta">{{ siteCopy.workflowBackToProjectsLabel }}</NavLink>
    </RevealBlock>

    <SiteFooter :order="mergedSections.length + 3" />
  </main>
</template>
