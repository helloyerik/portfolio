<script setup>
import { computed, inject } from "vue";
import { Tag } from "@yerik/yedesign-system";
import { getMetricMarker, POSITIVE_METRIC_MARKER } from "../lib/metricMarkers";
import MetricMarker from "./MetricMarker.vue";
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
const cardSummary = computed(() => {
  if (props.project.cardSummary) return props.project.cardSummary;
  if (props.project.showSummary === false) return "";
  return props.project.summary?.[0] ?? "";
});
const nonTagFacts = computed(() =>
  projectFacts.value.filter((fact) => fact !== "Скоро" && fact !== "Soon"),
);
const coverMetrics = computed(() => props.project.metrics ?? []);
const highlightItems = computed(() => {
  if (coverMetrics.value.length) {
    return coverMetrics.value.map((metric) => ({
      text: formatHighlight(metric),
      marker: getMetricMarker(metric) ?? POSITIVE_METRIC_MARKER,
    }));
  }

  return nonTagFacts.value.map((fact) => ({
    text: formatHighlight(fact),
    marker: getMetricMarker(fact) ?? POSITIVE_METRIC_MARKER,
  }));
});
const formatHighlight = (value) => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};
</script>

<template>
  <NavLink v-if="!project.preview" class="project-card-link" :href="project.slug">
    <article class="project-card">
      <div class="project-card__body">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p v-if="cardSummary" class="project-card__summary">{{ cardSummary }}</p>
        <ul v-if="highlightItems.length" class="project-card__highlights">
          <li v-for="(item, index) in highlightItems" :key="`${item.text}-${index}`" class="metric-list-item">
            <MetricMarker :kind="item.marker" />
            {{ item.text }}
          </li>
        </ul>
        <div v-if="showSoonTag" class="project-card__tags">
          <Tag
            class="project-card__overlay-tag"
            :label="siteCopy.soonLabel"
            variant="overlay"
          />
        </div>
      </div>
      <div v-if="project.cover" class="project-card__cover">
        <img class="project-card__image" :src="project.cover" alt="" />
      </div>
    </article>
  </NavLink>

  <article v-else class="project-card project-card--preview">
    <div class="project-card__body">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p v-if="cardSummary" class="project-card__summary">{{ cardSummary }}</p>
      <ul v-if="highlightItems.length" class="project-card__highlights">
        <li v-for="(item, index) in highlightItems" :key="`${item.text}-${index}`" class="metric-list-item">
          <MetricMarker :kind="item.marker" />
          {{ item.text }}
        </li>
      </ul>
      <div v-if="showSoonTag" class="project-card__tags">
        <Tag
          class="project-card__overlay-tag"
          :label="siteCopy.soonLabel"
          variant="overlay"
        />
      </div>
    </div>
    <div v-if="project.cover" class="project-card__cover">
      <img class="project-card__image" :src="project.cover" alt="" />
    </div>
  </article>
</template>
