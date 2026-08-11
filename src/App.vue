<script setup>
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from "vue";
import BacklogPage from "./components/BacklogPage.vue";
import CasePage from "./components/CasePage.vue";
import CvPage from "./components/CvPage.vue";
import HomePage from "./components/HomePage.vue";
import TopNav from "./components/TopNav.vue";
import WorkflowPage from "./components/WorkflowPage.vue";
import { getLocalizedCases, getSiteCopy } from "./content";
import { startKeyboardShortcuts } from "./lib/keyboardShortcuts";
import { localizeHref, navigate, readRoute } from "./lib/navigation";
import { startBackgroundMediaPreload } from "./lib/preloadMedia";
import { startSmoothScroll } from "./lib/smoothScroll";
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
let smoothScroll = null;

provide("scrollToTop", () => {
  if (smoothScroll) {
    smoothScroll.scrollTo(0);
    return;
  }
  window.scrollTo(0, 0);
});

// Experimental single-key shortcuts (see lib/keyboardShortcuts.js).
const navigateTo = (href) => {
  navigate({ preventDefault: () => {} }, localizeHref(href, locale.value));
};

const nextCaseSlug = () => {
  const order = localizedCases.value.caseOrder ?? [];
  const index = order.findIndex((item) => item.slug === route.value.pathname);
  if (index < 0) return null;
  return order[(index + 1) % order.length].slug;
};

let stopShortcuts = null;

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
  smoothScroll = startSmoothScroll();
  window.addEventListener("popstate", syncRoute);
  stopShortcuts = startKeyboardShortcuts({
    KeyH: () => navigateTo("/"),
    KeyV: () => navigateTo("/cv"),
    KeyD: () => {
      theme.value = theme.value === "dark" ? "light" : "dark";
    },
    KeyG: () => window.open(siteCopy.value.telegramHref, "_blank", "noopener,noreferrer"),
    KeyC: () => window.open(siteCopy.value.telegramHref, "_blank", "noopener,noreferrer"),
    KeyT: () => {
      if (smoothScroll) {
        smoothScroll.scrollTo(0);
        return;
      }
      window.scrollTo(0, 0);
    },
    KeyN: () => {
      const next = nextCaseSlug();
      if (next) navigateTo(next);
    },
  });
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
  stopShortcuts?.();
  stopShortcuts = null;
  smoothScroll?.stop();
  smoothScroll = null;
});

watch(
  () => [route.value.pathname, route.value.hash],
  ([pathname, hash]) => {
    if (hash) {
      requestAnimationFrame(() => {
        if (smoothScroll) {
          smoothScroll.scrollTo(hash);
          return;
        }
        document.querySelector(hash)?.scrollIntoView({ block: "start" });
      });
      return;
    }

    if (pathname) {
      if (smoothScroll) {
        smoothScroll.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
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
