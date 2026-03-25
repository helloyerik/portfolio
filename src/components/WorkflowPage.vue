<script setup>
import { computed } from "vue";
import { mergeLearningSections } from "../lib/navigation";
import NavLink from "./NavLink.vue";
import RevealBlock from "./RevealBlock.vue";
import SectionBody from "./SectionBody.vue";

const props = defineProps({
  workflowCase: {
    type: Object,
    required: true,
  },
});

const mergedSections = computed(() => mergeLearningSections(props.workflowCase.sections));
</script>

<template>
  <main class="page case-page shell">
    <RevealBlock class="content-block" :order="1">
      <h1 class="display-title">{{ workflowCase.title }} / Workflow</h1>
      <div class="prose">
        <p>
          Это внутренний слой кейса, в котором собраны контекст, промежуточные шаги,
          компромиссы, договоренности с командой и логика выбора решений.
        </p>
      </div>
    </RevealBlock>

    <RevealBlock
      v-for="(section, index) in mergedSections"
      :key="section.title"
      as="article"
      class="content-block"
      :order="index + 2"
    >
      <h2 class="section-title">{{ section.title }}</h2>
      <SectionBody :section="section" />
    </RevealBlock>

    <RevealBlock as="nav" class="project-nav" :order="mergedSections.length + 2">
      <NavLink :href="workflowCase.publicHref">Публичный кейс</NavLink>
      <NavLink href="/#mechta">Назад к проектам</NavLink>
    </RevealBlock>
  </main>
</template>
