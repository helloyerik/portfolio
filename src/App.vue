<script setup>
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from "vue";
import BacklogPage from "./components/BacklogPage.vue";
import CasePage from "./components/CasePage.vue";
import CvPage from "./components/CvPage.vue";
import HomePage from "./components/HomePage.vue";
import TopNav from "./components/TopNav.vue";
import WorkflowPage from "./components/WorkflowPage.vue";
import { getLocalizedCases, getSiteCopy } from "./content";
import { readRoute } from "./lib/navigation";
import { startBackgroundMediaPreload } from "./lib/preloadMedia";
import { applyThemeWithDissolve, readPreferredTheme } from "./lib/theme";

const theme = ref(readPreferredTheme());
const route = ref(readRoute());
const locale = computed(() => route.value.locale);
const siteCopy = computed(() => getSiteCopy(locale.value));
const localizedCases = computed(() => getLocalizedCases(locale.value));
const heroSummary = computed(() =>
  (siteCopy.value.aboutParagraphs ?? []).filter(Boolean).join(" "),
);

provide("locale", locale);
provide("siteCopy", siteCopy);

const publicCaseMap = computed(() =>
  Object.fromEntries(Object.values(localizedCases.value.publicCases).map((item) => [item.slug, item])),
);

const workflowCaseMap = computed(() =>
  Object.fromEntries(
    Object.values(localizedCases.value.workflowCases ?? {})
      .filter(Boolean)
      .map((item) => [item.publicHref ? `${item.publicHref}/workflow` : "", item])
      .filter(([slug]) => slug),
  ),
);

watch(theme, (value) => {
  applyThemeWithDissolve(value);
});

watch(
  locale,
  (value) => {
    document.documentElement.lang = value;
  },
  { immediate: true },
);

const PAGE_TRANSITION_MS = 280;
const isLeaving = ref(false);
const isEntering = ref(false);
let transitionTimeout = 0;
let stopMediaPreload = null;

const syncRoute = () => {
  const newRoute = readRoute();
  const pathChanged = newRoute.pathname !== route.value.pathname;

  if (!pathChanged) {
    route.value = newRoute;
    return;
  }

  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = 0;
  }

  isEntering.value = false;
  isLeaving.value = true;

  transitionTimeout = setTimeout(() => {
    isLeaving.value = false;
    route.value = newRoute;
    isEntering.value = true;
    setTimeout(() => {
      isEntering.value = false;
    }, 50);
    transitionTimeout = 0;
  }, PAGE_TRANSITION_MS);
};

onMounted(() => {
  window.addEventListener("popstate", syncRoute);
  stopMediaPreload = startBackgroundMediaPreload([
    getLocalizedCases("en"),
    getLocalizedCases("ru"),
  ], {
    idleTimeout: 400,
    imageConcurrency: 4,
    videoConcurrency: 2,
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", syncRoute);
  if (transitionTimeout) clearTimeout(transitionTimeout);
  stopMediaPreload?.();
  stopMediaPreload = null;
});

watch(
  () => [route.value.pathname, route.value.hash],
  ([pathname, hash]) => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: "start" });
      });
      return;
    }

    if (pathname) {
      window.scrollTo(0, 0);
    }
  },
  { immediate: true },
);

const currentPublicCase = computed(() => publicCaseMap.value[route.value.pathname] ?? null);
const currentWorkflowCase = computed(() => workflowCaseMap.value[route.value.pathname] ?? null);
</script>

<template>
  <TopNav
    :theme="theme"
    @update:theme="theme = $event"
  />

  <div
    class="page-wrap"
    :class="{ 'page-wrap--leaving': isLeaving, 'page-wrap--entering': isEntering }"
  >
    <CasePage
      v-if="currentPublicCase"
      :case-data="currentPublicCase"
      :case-order="localizedCases.caseOrder"
    />
    <WorkflowPage v-else-if="currentWorkflowCase" :workflow-case="currentWorkflowCase" />
    <CvPage v-else-if="route.pathname === '/cv'" :cv-data="localizedCases.cvData" />
    <BacklogPage
      v-else-if="route.pathname === '/backlog'"
      :sections="localizedCases.backlogSections"
    />
    <HomePage
      v-else
      :hero-summary="heroSummary"
      :mechta-projects="localizedCases.mechtaProjects"
      :freelance-projects="localizedCases.freelanceProjects"
      :bmc-projects="localizedCases.bmcProjects"
      :certificates="localizedCases.certificates"
    />
  </div>
</template>
