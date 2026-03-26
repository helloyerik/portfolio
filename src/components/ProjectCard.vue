<script setup>
import { Tag } from "@yerik/yedesign-system";
import NavLink from "./NavLink.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const projectFacts = props.project.highlights?.length ? props.project.highlights : props.project.facts;
const nonTagFacts = projectFacts.filter((fact) => fact !== "Скоро");
const showSoonTag = projectFacts.includes("Скоро");
const metaParts = [props.project.kind, props.project.period].filter(Boolean);
</script>

<template>
  <NavLink v-if="!project.preview" class="project-card-link" :href="project.slug">
    <article class="project-card">
      <div v-if="project.cover" class="project-card__cover">
        <Tag v-if="showSoonTag" class="project-card__overlay-tag" label="Скоро" variant="overlay" />
        <img class="project-card__image" :src="project.cover" alt="" />
      </div>
      <div class="project-card__body">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p v-if="metaParts.length" class="project-card__meta-line">{{ metaParts.join(" • ") }}</p>
        <div v-if="nonTagFacts.length" class="fact-row project-card__highlights">
          <span v-for="(fact, index) in nonTagFacts" :key="`${fact}-${index}`">{{ fact }}</span>
        </div>
      </div>
    </article>
  </NavLink>

  <article v-else class="project-card">
    <div v-if="project.cover" class="project-card__cover">
      <Tag v-if="showSoonTag" class="project-card__overlay-tag" label="Скоро" variant="overlay" />
      <img class="project-card__image" :src="project.cover" alt="" />
    </div>
    <div class="project-card__body">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p v-if="metaParts.length" class="project-card__meta-line">{{ metaParts.join(" • ") }}</p>
      <div v-if="nonTagFacts.length" class="fact-row project-card__highlights">
        <span v-for="(fact, index) in nonTagFacts" :key="`${fact}-${index}`">{{ fact }}</span>
      </div>
    </div>
  </article>
</template>
