<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import BacklogPage from "./components/BacklogPage.vue";
import CasePage from "./components/CasePage.vue";
import CvPage from "./components/CvPage.vue";
import HomePage from "./components/HomePage.vue";
import TopNav from "./components/TopNav.vue";
import WorkflowPage from "./components/WorkflowPage.vue";
import { publicCases, workflowCases } from "./content/cases";
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

const publicCaseMap = {
  "/projects/ecommerce-redesign": publicCases.ecommerce,
  "/projects/design-system": publicCases.designSystem,
  "/projects/partners": publicCases.partners,
  "/projects/corporate-portal": publicCases.corporate,
  "/projects/freelance": publicCases.freelance,
  "/projects/bmc-group": publicCases.bmc,
};

const workflowCaseMap = {
  "/projects/ecommerce-redesign/workflow": workflowCases.ecommerce,
  "/projects/design-system/workflow": workflowCases.designSystem,
  "/projects/partners/workflow": workflowCases.partners,
  "/projects/corporate-portal/workflow": workflowCases.corporate,
  "/projects/freelance/workflow": workflowCases.freelance,
  "/projects/bmc-group/workflow": workflowCases.bmc,
};

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

const currentPublicCase = computed(() => publicCaseMap[route.value.pathname] ?? null);
const currentWorkflowCase = computed(() => workflowCaseMap[route.value.pathname] ?? null);
</script>

<template>
  <TopNav
    :theme="theme"
    :palette="palette"
    @update:theme="theme = $event"
    @update:palette="palette = $event"
  />

  <CasePage v-if="currentPublicCase" :case-data="currentPublicCase" />
  <WorkflowPage v-else-if="currentWorkflowCase" :workflow-case="currentWorkflowCase" />
  <CvPage v-else-if="route.pathname === '/cv'" />
  <BacklogPage v-else-if="route.pathname === '/backlog'" />
  <HomePage v-else />
</template>
