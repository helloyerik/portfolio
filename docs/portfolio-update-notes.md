# Portfolio update notes

Decision log for the ~Aug 3–9, 2026 polish pass (ecommerce + Internal Tools + media/theme/type). Not a novel — for future-you and agents.

Related older notes still in `content/` (`CASE_STRUCTURE_NOTES.md`, drafts). Deleted: `content/THEME_ARCHITECTURE.md` (gruvbox/palette axis removed).

---

## Stack & architecture (unchanged principles)

- Vue 3 Composition API + Vite + SCSS; Cloudflare Workers deploy (`@cloudflare/vite-plugin` + wrangler).
- No Vue Router — manual history via `src/lib/navigation.js`; `App.vue` maps pathname → Home / Case / Workflow / CV / Backlog.
- Content: `src/content/cases.js` (RU) + `cases-en.js` (EN); UI strings in `site.js`; locale via provide/inject.
- Design system: `@yerik/yedesign-system` (private package). Semantic theme tokens in `src/theme.css`; layout/type in `src/styles.css`.
- Dev: Vite on `:9999` via launchd KeepAlive (`npm run dev:keep`), not disposable agent shells.

---

## Content structure

### Internal Tools (`/projects/internal-tools`)

- Tried merging Partners / Prices / OMS into one narrative; **reverted to three named modules**.
- Module block order: **description → result bullets → media**.
- Shared intro at top; removed generic Goals / Actions / Results that duplicated per-module copy.
- **OMS first** among the three modules (and as homepage card cover).
- Results: concrete ops outcomes (not placeholder metrics); Partners emphasizes DS reuse / ship in ~1 month under constraints; Prices framed as store price-tag printing vs 1C lag (errors, fines, reputation); team voice (“мы”) where appropriate.

### Ecommerce (`/projects/ecommerce`)

- Funnel sections: Главная → Поиск → Страница товара → … with before/after media where assets exist.
- Snippet / gift-card demos as inline videos in the relevant section.
- Module separation: **~2× spacing above section titles** so vertical rhythm marks module boundaries without per-screen tweaks.

### Before / after

- `kind: "before-after"` in content; slider UI with smaller/hidden center handle icon; light theme divider uses gray (not black).
- **Open:** Главная still uses a single “до” image — `главная после` asset was requested but not wired (unlike Поиск / PDP / cart / checkout).

---

## Theming

- Removed **gruvbox** palette axis and theme modal; only `data-theme="light" | "dark"`.
- Header: theme **toggle on the right**; nav links left-aligned.
- Theme switch uses dissolve sync (`--theme-dissolve-duration`); early script in `index.html` sets theme before paint to avoid flash.
- Fix: headings no longer disappear on theme change (token/mapping polish).

---

## Typography

- Base size path: **15 → 17 → 20px**; line-height tracked upward (~+4 then to **~30px** article body).
- Overrides DS body-2 tokens in `styles.css` (`--mi-font-size-body-2: 20px`, article line-height 30px).
- Body / muted copy at **70%** opacity (`--palette-fg-body` / muted); **headings, company names, certificate titles at 100%** (ListItem title override restored after body tokens bled into titles).
- Font: **ABC Diatype** variable TTF (`src/assets/fonts/ABCDiatypeCyrillicVariable.ttf`), `font-display: swap`.

---

## Media

- **WebP pipeline:** originals in `_raw/assets/` → `npm run optimize:images` (Sharp, max width 1920, q80) → `src/assets/*.webp`. App imports WebP only; `_raw` gitignored; `predeploy` runs optimize.
- Image **borders removed**; media sits on **`--color-media-backdrop` = #AAAAAA @ 8%** (tried 5%, then 8%) so light/dark screenshots read consistently.
- Result “card” experiment for Partners bullets (5% → 10% padded containers + circled checkmarks) — **reverted**; Partners uses the same plain bullet list pattern as other modules.
- Demos: H.264 mp4s (CRF ~20, 60fps, compressed offline); **posters** = first-frame WebP for every demo (OMS, snippet, gift-card, partners).
- Videos: default **controls hidden**; `preload="auto"` on visible players; homepage Internal Tools cover = **OMS demo video** + poster.
- Case pages: **no leading hero/preview cover** under the title — first content is sections.

### Preload (`src/lib/preloadMedia.js`)

After idle: warm **posters → interior images → mp4s** (image concurrency 4, video 2). Cancel on unmount. Covers homepage LCP-ish posters without racing first paint as hard as eager video download.

---

## Homepage

- Cover hover: image-in-frame zoom felt wrong → briefly explored whole-card scale (~2–3%) → **cover zoom removed** (current: no cover scale on hover).
- Internal Tools card: video cover (OMS) with poster fallback until `playing`.
- Metric markers (↑/↓ / NDA helpers) on cards when `metrics` present.

---

## Case page layout

- Structured overview vs legacy role/tasks modes unchanged in spirit; Internal Tools uses per-module sections.
- Section title spacing (+40px top on major headings) for module separation.
- Partners (and siblings): bullets without result cards.
- Sticky / muted header nav polish; page enter/leave transition ~280ms.

---

## Performance decisions

**Already in place**

- WebP pipeline; compressed mp4s; video posters; idle background preload (posters → images → video).
- `font-display: swap`; theme FOUC guard in `index.html`.
- Vite production build; Cloudflare edge deploy.

**Worth next (when touching perf again)**

1. **Font:** variable TTF is ~1.2MB in the bundle — convert to **woff2** (biggest single static win after videos).
2. **Videos:** still ~4–7MB each; further CRF/length trim or CDN range requests if Lighthouse complains; posters already cover perceived load.
3. **Code split:** `App.vue` eagerly imports all page components + both locale case bundles — `defineAsyncComponent` for Case/Workflow/CV/Backlog would shrink initial JS (~243KB / ~76KB gzip today, fine but not split).
4. **Dev-only weight:** `agentation` (+ React) and Figma `html-to-design/capture.js` in `index.html` — gate behind `import.meta.env.DEV` for production if shipping publicly.
5. Avoid competing with LCP: keep video preload **after** idle/posters (already done); don’t add eager `<link rel=preload>` for all mp4s.

**Not worth it now**

- Full router migration just for lazy routes.
- Aggressive image CDN / responsive `srcset` for this asset count.
- Service worker caching until metrics show a problem.
- More preload concurrency — would fight homepage bandwidth.

**Verdict:** fine to ship; next real win is woff2 + optionally stripping agentation/Figma capture from prod.

---

## Open / follow-ups

- [ ] Ecommerce **Главная after** image (`главная после`) — still missing; section is single-frame “до”.
- [ ] Optional: restore subtle homepage cover hover (card-level, ~2%) if desired — currently none.
- [ ] Optional: woff2 font + prod-only agentation/Figma script.
- [ ] Prices / Partners copy may still get small wording passes; treat content files as source of truth.
