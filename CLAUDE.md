# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # start Vite dev server at http://localhost:5173
npm run build            # production build
npm run preview          # preview production build
npm run optimize:images  # compress _raw/assets → src/assets WebP (also runs as predeploy)
```

No lint or test scripts exist.

### Images

- Put originals in `_raw/assets/` mirroring `src/assets/` paths (gitignored).
- Run `npm run optimize:images` before push/deploy — writes WebP into `src/assets/` (max width 1920, quality 80).
- App imports only from `src/assets/*.webp`. Do not commit `_raw/`.

## Stack

Vue 3 (Composition API, `<script setup>`) + Vite + SCSS. No router — routing is manual via `window.history.pushState` / `popstate`. No Pinia or Vuex.

Design system components (`Tag`, etc.) come from `@yerik/yedesign-system` (private GitHub package, installed from tarball). Path alias `@` resolves to `./src`.

## Architecture

### Routing

`src/lib/navigation.js` owns all routing logic. `readRoute()` parses `window.location` into `{ pathname, hash, locale }`. The Russian locale is path-prefixed (`/ru/...`). Navigation happens by calling `navigate(event, href)` which pushes to history and fires a synthetic `popstate`. `App.vue` listens to `popstate` and re-reads the route.

`App.vue` resolves the current view by matching `route.pathname` against two maps built from content:
- `publicCaseMap` — slug → case object, renders `<CasePage>`
- `workflowCaseMap` — slug → workflow case, renders `<WorkflowPage>`
- `/cv` → `<CvPage>`, `/backlog` → `<BacklogPage>`, else → `<HomePage>`

### Content

All portfolio content lives in `src/content/`:
- `cases.js` — Russian content (main). Exports `publicCases`, `workflowCases`, `caseOrder`, `mechtaProjects`, `freelanceProjects`, `bmcProjects`, `backlogSections`, `cvData`.
- `cases-en.js` — English mirror of the same exports.
- `site.js` — UI copy strings keyed by locale (`en` / `ru`).
- `index.js` — `getLocalizedCases(locale)` and `getSiteCopy(locale)` switch between the two.

`locale` and `siteCopy` are provided via `provide`/`inject` from `App.vue` down to all components.

### Case data shape

Each case object in `publicCases` has:
- `slug` — URL path (e.g. `/projects/ecommerce-product-page`)
- `title`, `kind`, `period`, `cover`
- `summary`, `highlights`, `metrics` — shown on `ProjectCard`
- `sections[]` — main body of `CasePage`; each section has `title`, `paragraphs[]`, optional `list[]`, `media[]`, `component`
- `moduleCase: true` — marks it as an e-commerce sub-case; affects `HomePage` grid grouping and `CasePage` header style
- `showSummary`, `hiddenOnHome`, `preview` — display flags

`caseOrder[]` drives prev/next navigation inside `CasePage`.

### Key components

- `CasePage.vue` — renders a full case. Detects structured overview mode (`context`/`goals`/`actions` arrays) vs. legacy mode (`myRole`/`tasks`). Merges consecutive "Итог"+"Личные итоги" sections via `mergeLearningSections`.
- `HomePage.vue` — splits `mechtaProjects` into `ecommerceModules` (`moduleCase: true`) rendered in a dedicated grid and `otherMechtaProjects`.
- `ProjectCard.vue` — card for home page. Shows `metrics` as overlay tags (with ↑/↓ markers) when present; otherwise shows `highlights`. `preview: true` renders a non-linked article.
- `WorkflowPage.vue` — internal process layer for cases with `workflowCases` entries.
- `RevealBlock.vue` — scroll-reveal wrapper; takes an `order` prop for staggered animation.

### Metrics / NDA values

Metric strings use `+NDA%` / `-NDA%` placeholders for confidential numbers. `src/lib/metricMarkers.js` exports `isPositiveNdaMetric(value)` which detects positive achievements by regex patterns (arrows, keywords in RU/EN) — used to pick ↑/↓ marker direction.

### Theming

`src/theme.css` holds CSS custom properties for the design system. Two palettes (default, Gruvbox) × two modes (light, dark). Theme is toggled via class on `<html>` and persisted to `localStorage`.
