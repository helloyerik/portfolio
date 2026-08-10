<script setup>
import { computed, inject } from "vue";
import { ListItem } from "@yerik/yedesign-system";
import CompanyDivider from "./CompanyDivider.vue";
import ContactCta from "./ContactCta.vue";
import ProjectCard from "./ProjectCard.vue";
import RevealBlock from "./RevealBlock.vue";
import SiteFooter from "./SiteFooter.vue";

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
        mark-type="habr"
        :name="siteCopy.freelanceName"
        :period="siteCopy.freelancePeriod"
        :role="siteCopy.freelanceRole"
      />
    </RevealBlock>
    <RevealBlock v-for="project in freelanceProjects" :key="project.title" :order="6">
      <ProjectCard :project="project" />
    </RevealBlock>

    <RevealBlock id="certificates" :order="7">
      <h2 class="section-title section-title--case">{{ siteCopy.certificatesName }}</h2>
    </RevealBlock>
    <RevealBlock v-for="certificate in certificates" :key="certificate.title" :order="8">
      <a
        class="project-card-link"
        :href="certificate.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItem
          :title="certificate.title"
          :subtitle="certificate.period"
          :image-src="certificate.imageSrc || ''"
          :image-alt="certificate.title"
          size="XL"
          variant="plain"
          :interactive="true"
          :chevron="false"
          class="company-divider__item"
        />
      </a>
    </RevealBlock>

    <ContactCta :order="9" />

    <SiteFooter :order="10" />

  </main>
</template>
