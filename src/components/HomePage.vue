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
  heroSummary: {
    type: String,
    default: "",
  },
  freelanceProjects: {
    type: Array,
    default: () => [],
  },
  bmcProjects: {
    type: Array,
    default: () => [],
  },
  certificates: {
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
      <p v-if="heroSummary" class="hero-summary">{{ heroSummary }}</p>
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

    <RevealBlock id="certificates" :order="7">
      <CompanyDivider
        mark="C"
        :name="siteCopy.certificatesName"
        :period="siteCopy.certificatesPeriod"
        :role="siteCopy.certificatesRole"
      />
    </RevealBlock>
    <RevealBlock v-for="certificate in certificates" :key="certificate.title" :order="8">
      <a
        class="project-card-link"
        :href="certificate.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <article class="project-card">
          <div class="project-card__body">
            <div class="project-card__heading">
              <h3 class="project-card__title">{{ certificate.title }}</h3>
              <p v-if="certificate.period" class="project-card__meta-line">{{ certificate.period }}</p>
            </div>
            <p v-if="certificate.summary" class="project-card__summary">{{ certificate.summary }}</p>
          </div>
        </article>
      </a>
    </RevealBlock>

  </main>
</template>
