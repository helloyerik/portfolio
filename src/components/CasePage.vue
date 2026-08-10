<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { toSectionId } from "../lib/navigation";
import CaseOutline from "./CaseOutline.vue";
import ContactCta from "./ContactCta.vue";
import InlineMedia from "./InlineMedia.vue";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import RichList from "./RichList.vue";
import SectionBody from "./SectionBody.vue";

const props = defineProps({
  caseData: {
    type: Object,
    required: true,
  },
  caseOrder: {
    type: Array,
    default: () => [],
  },
});

const mergedSections = computed(() => props.caseData.sections ?? []);
const hasStructuredOverview = computed(
  () =>
    Array.isArray(props.caseData.context) ||
    Array.isArray(props.caseData.goals) ||
    Array.isArray(props.caseData.actions),
);
const introContextItems = computed(() => props.caseData.context ?? props.caseData.myRole ?? []);
const goalsItems = computed(() => props.caseData.goals ?? []);
const actionsItems = computed(() => props.caseData.actions ?? props.caseData.tasks ?? []);
const currentIndex = computed(() => props.caseOrder.findIndex((item) => item.slug === props.caseData.slug));
const prevCase = computed(() =>
  currentIndex.value >= 0
    ? props.caseOrder[(currentIndex.value - 1 + props.caseOrder.length) % props.caseOrder.length]
    : null,
);
const nextCase = computed(() =>
  currentIndex.value >= 0 ? props.caseOrder[(currentIndex.value + 1) % props.caseOrder.length] : null,
);
// A 2-item cycle makes prev and next the same project — collapse to one link.
const singleAdjacentCase = computed(() =>
  prevCase.value && nextCase.value && prevCase.value.slug === nextCase.value.slug
    ? prevCase.value
    : null,
);
const siteCopy = inject("siteCopy");
const isModuleCase = computed(() => Boolean(props.caseData.moduleCase));
const hasIntroCopy = computed(
  () => Boolean(props.caseData.summary?.length) || Boolean(introContextItems.value.length),
);
const sectionOrderOffset = computed(() => {
  let order = 3;
  if (hasStructuredOverview.value) {
    if (goalsItems.value.length) order += 1;
    if (actionsItems.value.length) order += 1;
    if (props.caseData.results?.length) order += 1;
  } else {
    if (props.caseData.results?.length) order += 1;
    if (props.caseData.tasks?.length) order += 1;
  }
  return order;
});

const sectionItems = computed(() => {
  if (hasStructuredOverview.value) {
    return [
      ...(goalsItems.value.length ? [{ id: "goals", label: siteCopy.value.goalsLabel }] : []),
      ...(actionsItems.value.length ? [{ id: "actions", label: siteCopy.value.actionsLabel }] : []),
      ...(props.caseData.results?.length ? [{ id: "results", label: siteCopy.value.resultsLabel }] : []),
      ...mergedSections.value.map((section, index) => ({
        id: toSectionId(section.title, index),
        label: section.title,
      })),
    ];
  }

  return [
    ...(props.caseData.results?.length ? [{ id: "results", label: siteCopy.value.resultsLabel }] : []),
    ...(props.caseData.tasks?.length ? [{ id: "tasks", label: siteCopy.value.tasksLabel }] : []),
    ...mergedSections.value.map((section, index) => ({
      id: toSectionId(section.title, index),
      label: section.title,
    })),
  ];
});

const activeSectionId = ref(sectionItems.value[0]?.id ?? "");

const updateActiveSection = () => {
  const sectionsOnPage = sectionItems.value
    .map((item) => ({
      id: item.id,
      element: document.getElementById(item.id),
    }))
    .filter((item) => item.element);

  if (!sectionsOnPage.length) return;

  const offset = 140;
  let nextActiveId = sectionsOnPage[0].id;

  sectionsOnPage.forEach(({ id, element }) => {
    if (element.getBoundingClientRect().top <= offset) {
      nextActiveId = id;
    }
  });

  activeSectionId.value = nextActiveId;
};

onMounted(() => {
  updateActiveSection();
  window.addEventListener("scroll", updateActiveSection, { passive: true });
  window.addEventListener("resize", updateActiveSection);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateActiveSection);
  window.removeEventListener("resize", updateActiveSection);
});

watch(sectionItems, () => {
  activeSectionId.value = sectionItems.value[0]?.id ?? "";
});
</script>

<template>
  <main class="page case-page shell">
    <CaseOutline :items="sectionItems" :active-id="activeSectionId" />

    <RevealBlock v-if="caseData.highlights?.length" class="fact-row" :order="1">
      <span v-for="(item, index) in caseData.highlights" :key="`${item}-${index}`">{{ item }}</span>
    </RevealBlock>

    <RevealBlock v-if="hasIntroCopy" class="content-block" :order="2">
      <h1 class="visually-hidden">{{ caseData.title }}</h1>
      <div class="prose">
        <p v-for="(paragraph, index) in caseData.summary ?? []" :key="`summary-${index}`">{{ paragraph }}</p>
        <p v-for="(paragraph, index) in introContextItems" :key="`context-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock v-if="hasStructuredOverview && goalsItems.length" as="article" class="content-block" id="goals" :order="4">
      <h2 class="section-title">{{ siteCopy.goalsLabel }}</h2>
      <div class="prose">
        <RichList :items="goalsItems" :show-metrics="false" />
      </div>
    </RevealBlock>

    <RevealBlock v-if="hasStructuredOverview && actionsItems.length" as="article" class="content-block" id="actions" :order="5">
      <h2 class="section-title">{{ siteCopy.actionsLabel }}</h2>
      <div class="prose">
        <RichList :items="actionsItems" />
      </div>
    </RevealBlock>

    <RevealBlock
      v-if="hasStructuredOverview && caseData.results?.length"
      as="article"
      class="content-block"
      id="results"
      :order="6"
    >
      <h2 class="section-title">{{ siteCopy.resultsLabel }}</h2>
      <div class="prose">
        <RichList :items="caseData.results" :show-metrics="false" />
      </div>
    </RevealBlock>

    <RevealBlock
      v-if="!hasStructuredOverview && caseData.results?.length"
      as="article"
      class="content-block"
      id="results"
      :order="4"
    >
      <h2 class="section-title">{{ siteCopy.resultsLabel }}</h2>
      <div class="prose">
        <RichList :items="caseData.results" :show-metrics="false" />
      </div>
    </RevealBlock>

    <RevealBlock
      v-if="!hasStructuredOverview && caseData.tasks?.length"
      as="article"
      class="content-block"
      id="tasks"
      :order="6"
    >
      <h2 class="section-title">{{ siteCopy.tasksLabel }}</h2>
      <div class="prose">
        <RichList :items="caseData.tasks" />
      </div>
    </RevealBlock>

    <RevealBlock
      v-for="(section, index) in mergedSections"
      :id="toSectionId(section.title, index)"
      :key="section.title"
      as="section"
      class="case-section"
      :order="index + sectionOrderOffset"
    >
      <component :is="isModuleCase ? 'h2' : 'h1'" class="section-title">
        {{ section.title }}
      </component>
      <SectionBody :section="section" />
      <InlineMedia
        v-if="section.media && section.mediaPlacement !== 'after-problems' && section.mediaPlacement !== 'before-result'"
        :media="section.media"
      />
    </RevealBlock>

    <ContactCta :order="mergedSections.length + sectionOrderOffset" />

    <RevealBlock as="nav" class="project-nav" :order="mergedSections.length + sectionOrderOffset + 1">
      <template v-if="singleAdjacentCase">
        <NavLink :href="singleAdjacentCase.slug">
          {{ singleAdjacentCase.label }}
        </NavLink>
        <span />
      </template>
      <template v-else>
        <NavLink v-if="prevCase" :href="prevCase.slug">
          {{ siteCopy.previousCaseLabel }}: {{ prevCase.label }}
        </NavLink>
        <span v-else />
        <NavLink v-if="nextCase" :href="nextCase.slug">
          {{ siteCopy.nextCaseLabel }}: {{ nextCase.label }}
        </NavLink>
        <span v-else />
      </template>
    </RevealBlock>
  </main>
</template>
