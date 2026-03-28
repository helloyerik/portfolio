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
import {
  PALETTE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  readPreferredPalette,
  readPreferredTheme,
} from "./lib/theme";

const theme = ref(readPreferredTheme());
const palette = ref(readPreferredPalette());
const route = ref(readRoute());
const locale = computed(() => route.value.locale);
const siteCopy = computed(() => getSiteCopy(locale.value));
const localizedCases = computed(() => getLocalizedCases(locale.value));

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
  document.documentElement.dataset.theme = value;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, value);
  } catch {
    // Ignore localStorage failures.
  }
});

watch(palette, (value) => {
  document.documentElement.dataset.palette = value;
  try {
    window.localStorage.setItem(PALETTE_STORAGE_KEY, value);
  } catch {
    // Ignore localStorage failures.
  }
});

watch(
  locale,
  (value) => {
    document.documentElement.lang = value;
  },
  { immediate: true },
);

const syncRoute = () => {
  route.value = readRoute();
};

onMounted(() => {
  window.addEventListener("popstate", syncRoute);
});

onBeforeUnmount(() => {
  window.removeEventListener("popstate", syncRoute);
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
    :palette="palette"
    @update:theme="theme = $event"
    @update:palette="palette = $event"
  />

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
    :mechta-projects="localizedCases.mechtaProjects"
    :freelance-projects="localizedCases.freelanceProjects"
    :bmc-projects="localizedCases.bmcProjects"
  />
</template>
