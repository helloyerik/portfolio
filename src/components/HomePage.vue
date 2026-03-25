<script setup>
import meImage from "../assets/me.png";
import { bmcProjects, freelanceProjects, mechtaProjects } from "../content/cases";
import CompanyDivider from "./CompanyDivider.vue";
import ProjectCard from "./ProjectCard.vue";
import RevealBlock from "./RevealBlock.vue";
import SpecialProjectsSection from "./SpecialProjectsSection.vue";
</script>

<template>
  <main class="shell home-page">
    <RevealBlock class="hero-intro" :order="1">
      <div class="hero-avatar">
        <img class="hero-avatar__image" :src="meImage" alt="" />
      </div>
      <h1 class="display-title" id="about">
        Помогаю бизнесу эффективнее выполнять задачи и улучшить юзабилити
      </h1>
    </RevealBlock>

    <RevealBlock :order="3">
      <CompanyDivider
        id="mechta"
        mark-type="mechta"
        name="Mechta.kz"
        period="Июль 2025 — сейчас"
        role="Продуктовый дизайнер"
      />
    </RevealBlock>
    <RevealBlock v-for="project in mechtaProjects" :key="project.title" :order="4">
      <ProjectCard :project="project" />
    </RevealBlock>

    <RevealBlock id="projects" :order="5">
      <CompanyDivider
        mark="F"
        name="Фриланс"
        period="Июль 2023 — июль 2025"
        role="Проектная занятость · онлайн"
      />
    </RevealBlock>
    <RevealBlock v-for="project in freelanceProjects" :key="project.title" :order="6">
      <ProjectCard :project="project" />
    </RevealBlock>

    <RevealBlock :order="7">
      <CompanyDivider
        mark="B"
        name="BMC Group"
        period="Февраль 2024 — август 2024"
        role="Проектная занятость · гибрид"
      />
    </RevealBlock>
    <RevealBlock v-for="project in bmcProjects" :key="project.title" :order="8">
      <ProjectCard :project="project" />
    </RevealBlock>

    <RevealBlock as="section" class="about-block" :order="9">
      <h2 class="section-title">Обо мне</h2>
      <div class="prose">
        <p>
          Я продуктовый дизайнер с 3+ годами опыта в цифровых продуктах. Работал с
          интернет-магазином, B2B, ритейлом, ИИ и внутренними сервисами, включая админки,
          процессные сценарии и сервисные интерфейсы.
        </p>
        <p>
          Сильнее всего мне интересны задачи, где нужно одновременно учитывать usability,
          бизнес-цели и реальную реализацию: от мобильных приложений и клиентских сценариев до
          внутренних инструментов, дизайн-систем и продуктовых улучшений. Участвовал в запуске
          новых решений с нуля, поддержке существующих продуктов и их последовательном
          улучшении через прототипы, системный подход и тесную работу с командой.
        </p>
      </div>
    </RevealBlock>

    <RevealBlock as="section" class="special-projects-block" :order="10">
      <SpecialProjectsSection />
    </RevealBlock>
  </main>
</template>
