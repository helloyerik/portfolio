<script setup>
import { computed, inject } from "vue";
import { Tag } from "@yerik/yedesign-system";
import NavLink from "./NavLink.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const siteCopy = inject("siteCopy");
const projectFacts = computed(() =>
  props.project.highlights?.length ? props.project.highlights : props.project.facts ?? [],
);
const showSoonTag = computed(() =>
  projectFacts.value.includes("Скоро") || projectFacts.value.includes("Soon"),
);
const cardSummary = computed(
  () => props.project.cardSummary ?? (props.project.showSummary ? props.project.summary?.[0] ?? "" : ""),
);
const nonTagFacts = computed(() =>
  projectFacts.value.filter((fact) => fact !== "Скоро" && fact !== "Soon"),
);
const coverMetrics = computed(() => props.project.metrics ?? []);
const showHighlights = computed(() => nonTagFacts.value.length && !coverMetrics.value.length);
const formatHighlight = (value) => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};
const metricMarker = (metric) => {
  if (/\+/.test(metric)) return "\u2191";
  if (/-/.test(metric)) return "\u2193";
  return "\u2191";
};
</script>

<template>
  <NavLink v-if="!project.preview" class="project-card-link" :href="project.slug">
    <article class="project-card">
      <div class="project-card__body">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p v-if="cardSummary" class="project-card__summary">{{ cardSummary }}</p>
        <ul v-if="showHighlights" class="project-card__highlights">
          <li v-for="(fact, index) in nonTagFacts" :key="`${fact}-${index}`" class="metric-list-item">
            <span class="metric-list-item__marker" aria-hidden="true">&uarr;</span>
            {{ formatHighlight(fact) }}
          </li>
        </ul>
      </div>
      <div v-if="project.cover" class="project-card__cover">
        <Tag
          v-if="showSoonTag"
          class="project-card__overlay-tag"
          :label="siteCopy.soonLabel"
          variant="overlay"
        />
        <div v-if="coverMetrics.length" class="project-card__metrics-overlay">
          <Tag
            v-for="(metric, index) in coverMetrics"
            :key="`metric-${index}`"
            class="project-card__metric-tag"
            variant="overlay"
          >
            <span class="project-card__metric-marker" aria-hidden="true">{{ metricMarker(metric) }}</span>
            {{ metric }}
          </Tag>
        </div>
        <img class="project-card__image" :src="project.cover" alt="" />
      </div>
    </article>
  </NavLink>

  <article v-else class="project-card">
    <div class="project-card__body">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p v-if="cardSummary" class="project-card__summary">{{ cardSummary }}</p>
      <ul v-if="nonTagFacts.length" class="project-card__highlights">
        <li v-for="(fact, index) in nonTagFacts" :key="`${fact}-${index}`" class="metric-list-item">
          <span class="metric-list-item__marker" aria-hidden="true">&uarr;</span>
          {{ formatHighlight(fact) }}
        </li>
      </ul>
    </div>
    <div v-if="project.cover" class="project-card__cover">
      <Tag
        v-if="showSoonTag"
        class="project-card__overlay-tag"
        :label="siteCopy.soonLabel"
        variant="overlay"
      />
      <div v-if="coverMetrics.length" class="project-card__metrics-overlay">
        <Tag
          v-for="(metric, index) in coverMetrics"
          :key="`metric-${index}`"
          class="project-card__metric-tag"
          variant="overlay"
        >
          <span class="project-card__metric-marker" aria-hidden="true">{{ metricMarker(metric) }}</span>
          {{ metric }}
        </Tag>
      </div>
      <img class="project-card__image" :src="project.cover" alt="" />
    </div>
  </article>
</template>
