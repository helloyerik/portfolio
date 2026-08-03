# Ecommerce — публичная версия: до / после

Ревью-док перед пушем. Паттерн как у [Izyanov / Yandex Realty](https://www.izyanov.com/cases/yandex-estate):

`Название фичи → 1–2 коротких абзаца → метрики с подписью`

Без `Goals` / `Actions` / `Tasks` / `Result:` / личных итогов в публичке. Процесс и длинные списки — в drafts.

Статус: **внесено в код** (`cases.js` / `cases-en.js`). Вырезанное — в `PROJECT_ECOMMERCE_DRAFT.md`.

---

## Предлагаемая структура публичной страницы

1. Hero + summary (коротко)
2. Context (1 абзац, опционально)
3. Case metrics (3 числа сверху)
4. Product page
5. Cart
6. Checkout
7. Order details
8. My orders *(можно склеить с Order details — см. ниже)*
9. Media: Figma overview

**Убрать с публички → оставить в drafts**

| Блок | Куда |
|---|---|
| Goals | уже в `PROJECT_ECOMMERCE_DRAFT.md` |
| Actions / Tasks | draft |
| Summary / Итог | draft или выкинуть |
| Personal takeaways / Личные итоги | draft |
| Длинные `problems` + `list` в каждом модуле | draft / workflow |
| Highlights «команда 20+» | draft или оставить 1 факт в context |

---

## 0. Meta / card

### EN — BEFORE
> A core redesign of the Mechta.kz shopping funnel for a 500k MAU retail product: product page, cart, checkout, order details, and order history. The work combined conversion optimization, legacy cleanup, and design-system rollout.

Metrics: Purchase conversion +NDA% · Checkout starts +NDA% · Support requests -NDA%

### EN — AFTER (proposal)
> Redesign of the Mechta.kz purchase funnel for a 500k MAU retail product: product page, cart, checkout, and post-purchase.

Metrics (same, clearer labels):
- `+NDA%` purchase conversion
- `+NDA%` cart → checkout
- `-NDA%` support requests

### RU — BEFORE
> Один из ключевых проектов внутри Mechta.kz — ритейлера Казахстана с аудиторией 500k MAU. Мы с командой пересобирали и оптимизировали ключевую часть воронки: страницу товара, корзину, оформление заказа, детали заказа и список заказов, а я отвечал за проектирование и детализацию этих сценариев.
>
> Проект был направлен на рост конверсии… Параллельно… дизайн-систему…

### RU — AFTER (proposal)
> Пересборка воронки покупки Mechta.kz (500k MAU): страница товара, корзина, оформление заказа и этап после покупки.

Метрики:
- `+NDA%` конверсия в покупку
- `+NDA%` переход из корзины в оформление
- `-NDA%` обращения в поддержку

**Заметка:** второй абзац про дизайн-систему — убрать из intro (это отдельный кейс / draft).

---

## 1. Context / My role

### EN — BEFORE
> I worked independently, and at the start also in collaboration with a lead designer, alongside a cross-functional team of analysts, product managers, and frontend/backend engineers. A large part of the job was reducing ambiguity: mapping dependencies, reviewing scenarios together, and turning a messy set of requirements into a cleaner product structure.

(+ отдельный блок Actions / Results / Tasks — много мусора)

### EN — AFTER (proposal)
> Worked independently, and at the start also with a lead designer, together with product, analytics, and engineering. Target metric for the funnel — purchase conversion; post-purchase also aimed at fewer support requests.

**Убрать с публички:** весь `actions`, `results` (дубль checkout), `tasks`.

### RU — BEFORE
> Работал самостоятельно, а на старте — также в связке с лид-дизайнером… Я отвечал за проектирование… согласовывали вместе с командой.

(+ Results + Tasks)

### RU — AFTER (proposal)
> Работал самостоятельно, на старте — также с лид-дизайнером, вместе с продуктом, аналитикой и разработкой. Целевая метрика воронки — конверсия в покупку; на этапе после покупки — меньше обращений в поддержку.

---

## 2. Product page

### EN — BEFORE
Paragraph + 4 problems + 7 list items + before/after media. Нет явной метрики модуля.

### EN — AFTER (proposal)
**Product page**

The product page was the most crowded step of the funnel: stock, fulfillment, discounts, financing, and the main CTA competed on the first screen. We rebuilt the structure so the key decision path reads faster — without cutting SEO-critical content.

*(keep before/after media)*

Metrics (если есть / placeholder):
- `+NDA%` product page conversion
- `-NDA%` time to primary CTA

*Problems/list → draft.*

### RU — AFTER (proposal)
**Страница товара**

Самый нагруженный шаг воронки: наличие, способ получения, скидки, кредит и CTA конкурировали на первом экране. Пересобрали структуру, чтобы решение читалось быстрее — без потери SEO-блоков.

*(before/after media)*

Метрики:
- `+NDA%` конверсия страницы товара
- `-NDA%` время до основного CTA

---

## 3. Cart

### EN — BEFORE
Paragraph + result paragraph + 4 list items + placeholder media.

### EN — AFTER (proposal)
**Cart**

Rebuilt the cart as a conversion module: fewer secondary elements, a sticky path to checkout, and relevant upsell (gifts, bonuses, accessories) without noise.

Metrics:
- `+NDA%` cart → checkout
- `-NDA%` cart exits *(если правда; иначе один metric)*

*List/result prose → draft.*

### RU — AFTER (proposal)
**Корзина**

Пересобрал корзину как модуль конверсии: меньше второстепенного, прямой переход к оформлению, апселл (подарки, бонусы, аксессуары) без шума.

Метрики:
- `+NDA%` переходы к оформлению
- `-NDA%` отказы из корзины

---

## 4. Checkout

### EN — BEFORE
Paragraph + resultList (3) + list (4) + placeholder media.  
Плюс сверху дублируются case-level `actions` / `results` почти тем же текстом.

### EN — AFTER (proposal)
**Checkout**

Checkout depended on delivery, pick-up, bonuses, promo codes, forms, and special cases like trade-in. We separated states and copy by fulfillment method so restrictions stopped breaking the main path.

Metrics:
- `+NDA%` next-step transition
- more stable delivery / pick-up completion *(если нет числа — одной фразой в тексте, без фейкового %)*

*List → draft. Case-level actions/results — удалить как дубль.*

### RU — AFTER (proposal)
**Оформление заказа**

Много зависимостей: доставка, самовывоз, бонусы, промокоды, формы, трейд-ин. Развели состояния и тексты по способу получения, чтобы спецусловия не ломали основной путь.

Метрики:
- `+NDA%` переход к следующему шагу

---

## 5. Order details

### EN — BEFORE
Paragraph + long result + 3 list items.

### EN — AFTER (proposal)
**Order details**

Post-purchase became the project’s starting point: statuses, promotions, line items, pickup timing, and service dependencies all met here. We standardized statuses and rebuilt the flow so users understand what happened and what to do next.

Metrics:
- `-NDA%` support requests after purchase  
  *(или «support requests dropped Nx» — как решите зафиксировать)*

### RU — AFTER (proposal)
**Детали заказа**

Старт проекта был с этапа после покупки: статусы, акции, состав, время получения и соседние сервисы. Стандартизировали статусы и собрали единый поток — чтобы статус и следующие шаги читались без звонка в поддержку.

Метрики:
- `-NDA%` обращения после покупки

---

## 6. My orders

### EN — BEFORE
1 short paragraph + 3 list items. Слабый блок сам по себе.

### Option A — merge with Order details (recommended)
Один блок **Post-purchase / Мои заказы и детали заказа**:

**EN AFTER**
> Post-purchase covers both the order list and order details. We connected list → details, simplified status navigation, and used the same status model across both screens.

Media: Figma overview (уже есть).

**RU AFTER**
> После покупки — список заказов и детали. Связали list → details, упростили навигацию по статусам и держали одну модель статусов на обоих экранах.

### Option B — keep separate, but shorter
**My orders** — one sentence + media only. No list.

---

## 7. Summary / Personal takeaways

### BEFORE
Отдельные секции «Summary / Итог» + «Personal takeaways / Личные итоги».

### AFTER (proposal)
**Убрать с публички полностью.**  
Перенести в `PROJECT_ECOMMERCE_DRAFT.md`.

Если очень нужен финальный аккорд — одна строка в конце context, не секция:
> Not a one-off screen redesign — a connected funnel rebuilt step by step.

---

## 8. Media block

### BEFORE
Отдельная секция «My orders / Order details» только с картинкой.

### AFTER (proposal)
Оставить media в конце (после Order details / merged post-purchase).  
Заголовок секции можно убрать или сделать нейтральным: без лишнего текста.

---

## Сводка: что рендерить в публичке

```
Hero
Summary (1 short para)
Context (1 short para)          // optional
Metrics (3)
── Product page                 // 1–2 paras + metrics + before/after
── Cart                         // 1 para + metrics
── Checkout                     // 1 para + metrics
── Post-purchase                // 1–2 paras + metrics + figma media
```

Убрать из `publicCases.ecommerce`:
- `goals` (уже)
- `actions`
- `tasks`
- `results` на уровне кейса (или оставить только top metrics)
- section `Summary` / `Итог`
- section `Personal takeaways` / `Личные итоги`
- `problems` + длинные `list` в модулях
- `result` / `resultList` как отдельные простыни — заменить на 1–2 метрики

---

## Чеклист ревью

Отметь по каждому блоку: **ok / правки / выкинуть**

- [ ] 0 Meta / card summary + metrics
- [ ] 1 Context / role
- [ ] 2 Product page
- [ ] 3 Cart
- [ ] 4 Checkout
- [ ] 5 Order details
- [ ] 6 My orders — merge (A) или separate (B)?
- [ ] 7 Summary + takeaways → draft
- [ ] 8 Figma media placement
- [ ] EN и RU держим 1:1 по структуре?

---

## Следующий шаг после ревью

1. Ты правишь формулировки в этом файле (прямо тут).
2. Я переношу approved-текст в `cases.js` / `cases-en.js`.
3. Вырезанное дописываю в `PROJECT_ECOMMERCE_DRAFT.md`.
4. Пуш — только после твоего «ок».
