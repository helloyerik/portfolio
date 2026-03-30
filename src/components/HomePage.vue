<script setup>
import { computed, inject } from "vue";
import CompanyDivider from "./CompanyDivider.vue";
import ProjectCard from "./ProjectCard.vue";
import RevealBlock from "./RevealBlock.vue";

const props = defineProps({
  mechtaProjects: {
    type: Array,
    default: () => [],
  },
  freelanceProjects: {
    type: Array,
    default: () => [],
  },
  bmcProjects: {
    type: Array,
    default: () => [],
  },
});

const siteCopy = inject("siteCopy");
const visibleMechtaProjects = computed(() =>
  props.mechtaProjects.filter((project) => !project.hiddenOnHome),
);
</script>

<template>
  <main class="shell home-page">
    <RevealBlock class="hero-intro" :order="1">
      <h1 class="display-title" id="about">
        {{ siteCopy.heroTitle }}
      </h1>
    </RevealBlock>

    <RevealBlock :order="3">
      <CompanyDivider
        id="mechta"
        mark-type="mechta"
        name="Mechta.kz"
        :period="siteCopy.mechtaPeriod"
        :role="siteCopy.productDesignerRole"
      />
    </RevealBlock>
    <RevealBlock v-for="project in visibleMechtaProjects" :key="project.title" :order="4">
      <ProjectCard :project="project" />
    </RevealBlock>

    <RevealBlock id="projects" :order="5">
      <CompanyDivider
        mark="F"
        :name="siteCopy.freelanceName"
        :period="siteCopy.freelancePeriod"
        :role="siteCopy.freelanceRole"
      />
    </RevealBlock>
    <RevealBlock v-for="project in freelanceProjects" :key="project.title" :order="6">
      <ProjectCard :project="project" />
    </RevealBlock>

    <RevealBlock as="section" class="about-block" :order="9">
      <h2 class="section-title">{{ siteCopy.aboutTitle }}</h2>
      <div class="prose">
        <p v-for="(paragraph, index) in siteCopy.aboutParagraphs" :key="`${paragraph}-${index}`">
          {{ paragraph }}
        </p>
      </div>
    </RevealBlock>
  </main>
</template>
