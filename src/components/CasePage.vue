<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { caseOrder } from "../content/cases";
import { mergeLearningSections, toSectionId } from "../lib/navigation";
import CaseOutline from "./CaseOutline.vue";
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
});

const mergedSections = computed(() => mergeLearningSections(props.caseData.sections));
const currentIndex = computed(() => caseOrder.findIndex((item) => item.slug === props.caseData.slug));
const prevCase = computed(() =>
  currentIndex.value >= 0 ? caseOrder[(currentIndex.value - 1 + caseOrder.length) % caseOrder.length] : null,
);
const nextCase = computed(() =>
  currentIndex.value >= 0 ? caseOrder[(currentIndex.value + 1) % caseOrder.length] : null,
);

const sectionItems = computed(() => [
  ...(props.caseData.myRole ? [{ id: "my-role", label: "Моя роль" }] : []),
  { id: "results", label: "Результаты" },
  { id: "tasks", label: "Задачи" },
  ...mergedSections.value.map((section, index) => ({
    id: toSectionId(section.title, index),
    label: section.title,
  })),
]);

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
      <img class="case-hero__image" :src="caseData.heroImage" alt="" />
    </RevealBlock>
    <RevealBlock v-else class="image-placeholder" :order="1">Обложка кейса / hero visual</RevealBlock>

    <RevealBlock v-if="caseData.highlights?.length" class="fact-row" :order="2">
      <span v-for="(item, index) in caseData.highlights" :key="`${item}-${index}`">{{ item }}</span>
    </RevealBlock>

    <RevealBlock class="content-block" :order="3">
      <h1 class="display-title">{{ caseData.title }}</h1>
      <div class="prose">
        <p v-for="(paragraph, index) in caseData.summary" :key="`${paragraph}-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock v-if="caseData.myRole" as="article" class="content-block" id="my-role" :order="4">
      <h2 class="section-title">Моя роль</h2>
      <div class="prose">
        <p v-for="(paragraph, index) in caseData.myRole" :key="`${paragraph}-${index}`">{{ paragraph }}</p>
      </div>
    </RevealBlock>

    <RevealBlock as="article" class="content-block" id="results" :order="5">
      <h2 class="section-title">Результаты</h2>
      <div class="prose">
        <RichList :items="caseData.results" />
      </div>
    </RevealBlock>

    <RevealBlock as="article" class="content-block" id="tasks" :order="6">
      <h2 class="section-title">Задачи</h2>
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
      :order="index + 7"
    >
      <h2 class="section-title">{{ section.title }}</h2>
      <SectionBody :section="section" />
      <InlineMedia v-if="section.media && section.mediaPlacement !== 'after-problems'" :media="section.media" />
    </RevealBlock>

    <RevealBlock as="nav" class="project-nav" :order="mergedSections.length + 7">
      <NavLink v-if="prevCase" :href="prevCase.slug">Предыдущий кейс: {{ prevCase.label }}</NavLink>
      <span v-else />
      <NavLink v-if="nextCase" :href="nextCase.slug">Следующий кейс: {{ nextCase.label }}</NavLink>
      <span v-else />
    </RevealBlock>
  </main>
</template>
