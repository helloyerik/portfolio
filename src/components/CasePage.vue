<script setup>
import { computed, inject, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { mergeLearningSections, toSectionId } from "../lib/navigation";
import CaseOutline from "./CaseOutline.vue";
import ImageLightbox from "./ImageLightbox.vue";
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

const mergedSections = computed(() => mergeLearningSections(props.caseData.sections));
const hasStructuredOverview = computed(
  () =>
    Array.isArray(props.caseData.context) ||
    Array.isArray(props.caseData.goals) ||
    Array.isArray(props.caseData.actions),
);
const contextItems = computed(() => props.caseData.context ?? props.caseData.summary ?? []);
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
const siteCopy = inject("siteCopy");
const sectionOrderOffset = computed(() => (hasStructuredOverview.value ? 8 : 7));
const heroImageOpen = ref(false);

const sectionItems = computed(() => {
  if (hasStructuredOverview.value) {
    return [
      ...(contextItems.value.length ? [{ id: "context", label: siteCopy.value.contextLabel }] : []),
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
    ...(props.caseData.myRole ? [{ id: "my-role", label: siteCopy.value.myRoleLabel }] : []),
    { id: "results", label: siteCopy.value.resultsLabel },
    { id: "tasks", label: siteCopy.value.tasksLabel },
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

    <RevealBlock v-if="caseData.heroImage" class="case-hero" :order="1">
      <button type="button" class="gallery__zoom-trigger case-hero__trigger" @click="heroImageOpen = true">
        <img class="case-hero__image" :src="caseData.heroImage" alt="" />
      </button>
    </RevealBlock>
    <RevealBlock v-else class="image-placeholder" :order="1">{{ siteCopy.caseCoverPlaceholder }}</RevealBlock>

    <RevealBlock v-if="caseData.highlights?.length" class="fact-row" :order="2">
      <span v-for="(item, index) in caseData.highlights" :key="`${item}-${index}`">{{ item }}</span>
    </RevealBlock>

    <RevealBlock class="content-block" :order="3">
      <h1 class="display-title">{{ caseData.title }}</h1>
      <div class="prose">
        <p v-for="(paragraph, index) in caseData.summary" :key="`${paragraph}-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock v-if="hasStructuredOverview && contextItems.length" as="article" class="content-block" id="context" :order="4">
      <h2 class="section-title">{{ siteCopy.contextLabel }}</h2>
      <div class="prose">
        <p v-for="(paragraph, index) in contextItems" :key="`${paragraph}-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock v-if="hasStructuredOverview && goalsItems.length" as="article" class="content-block" id="goals" :order="5">
      <h2 class="section-title">{{ siteCopy.goalsLabel }}</h2>
      <div class="prose">
        <RichList :items="goalsItems" :show-metrics="false" />
      </div>
    </RevealBlock>

    <RevealBlock v-if="hasStructuredOverview && actionsItems.length" as="article" class="content-block" id="actions" :order="6">
      <h2 class="section-title">{{ siteCopy.actionsLabel }}</h2>
      <div class="prose">
        <RichList :items="actionsItems" />
      </div>
    </RevealBlock>

    <RevealBlock v-if="hasStructuredOverview" as="article" class="content-block" id="results" :order="7">
      <h2 class="section-title">{{ siteCopy.resultsLabel }}</h2>
      <div class="prose">
        <RichList :items="caseData.results" :force-markers="true" />
      </div>
    </RevealBlock>

    <RevealBlock v-if="!hasStructuredOverview && caseData.myRole" as="article" class="content-block" id="my-role" :order="4">
      <h2 class="section-title">{{ siteCopy.myRoleLabel }}</h2>
      <div class="prose">
        <p v-for="(paragraph, index) in caseData.myRole" :key="`${paragraph}-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock v-if="!hasStructuredOverview" as="article" class="content-block" id="results" :order="5">
      <h2 class="section-title">{{ siteCopy.resultsLabel }}</h2>
      <div class="prose">
        <RichList :items="caseData.results" :force-markers="true" />
      </div>
    </RevealBlock>

    <RevealBlock v-if="!hasStructuredOverview" as="article" class="content-block" id="tasks" :order="6">
      <h2 class="section-title">{{ siteCopy.tasksLabel }}</h2>
      <div class="prose">
        <RichList :items="caseData.tasks" />
      </div>
    </RevealBlock>

    <RevealBlock
      v-for="(section, index) in mergedSections"
      :id="toSectionId(section.title, index)"
      :key="section.title"
      as="article"
      class="content-block"
      :order="index + sectionOrderOffset"
    >
      <h2 class="section-title">{{ section.title }}</h2>
      <SectionBody :section="section" />
      <InlineMedia v-if="section.media && section.mediaPlacement !== 'after-problems'" :media="section.media" />
    </RevealBlock>

    <RevealBlock as="nav" class="project-nav" :order="mergedSections.length + sectionOrderOffset">
      <NavLink v-if="prevCase" :href="prevCase.slug">
        {{ siteCopy.previousCaseLabel }}: {{ prevCase.label }}
      </NavLink>
      <span v-else />
      <NavLink v-if="nextCase" :href="nextCase.slug">
        {{ siteCopy.nextCaseLabel }}: {{ nextCase.label }}
      </NavLink>
      <span v-else />
    </RevealBlock>

    <ImageLightbox
      :model-value="heroImageOpen"
      :src="caseData.heroImage ?? ''"
      :alt="caseData.title"
      @update:model-value="heroImageOpen = false"
    />
  </main>
</template>
