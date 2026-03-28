<script setup>
import { inject } from "vue";
import meImage from "../assets/me.png";
import CompanyDivider from "./CompanyDivider.vue";
import ProjectCard from "./ProjectCard.vue";
import RevealBlock from "./RevealBlock.vue";
import SpecialProjectsSection from "./SpecialProjectsSection.vue";

defineProps({
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
</script>

<template>
  <main class="shell home-page">
    <RevealBlock class="hero-intro" :order="1">
      <div class="hero-avatar">
        <img class="hero-avatar__image" :src="meImage" alt="" />
      </div>
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
    <RevealBlock v-for="project in mechtaProjects" :key="project.title" :order="4">
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

    <RevealBlock :order="7">
      <CompanyDivider
        mark="B"
        name="BMC Group"
        :period="siteCopy.bmcPeriod"
        :role="siteCopy.bmcRole"
      />
    </RevealBlock>
    <RevealBlock v-for="project in bmcProjects" :key="project.title" :order="8">
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

    <RevealBlock as="section" class="special-projects-block" :order="10">
      <SpecialProjectsSection />
    </RevealBlock>
  </main>
</template>
