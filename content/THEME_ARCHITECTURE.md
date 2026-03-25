# Theme Architecture

## Goal

Поддерживать несколько визуальных режимов без дублирования всего `styles.css`:

- `theme`: `light | dark`
- `palette`: `default | gruvbox`

Это повторяет логику Figma variables modes, где структура ролей остается общей, а меняются только значения.

## Principle

Тема собрана в два слоя:

1. `palette tokens`
   Это базовые цвета режима: фон, текст, muted, border, brand, surface, overlay, shadow.

2. `semantic tokens`
   Это роли интерфейса, которыми пользуется весь сайт:
   `--color-bg`, `--color-text`, `--color-border`, `--color-panel-tint`, `--color-brand` и т.д.

Сайт работает только через semantic-токены. При смене режима меняются только palette-токены.

## Files

- `src/theme.css`
  Содержит palette-токены и их маппинг в semantic-токены.
- `src/styles.css`
  Содержит layout, типографику, spacing и использование semantic-токенов.
- `src/App.jsx`
  Управляет двумя осями состояния:
  `theme` и `palette`.
- `index.html`
  Проставляет `data-theme` и `data-palette` до загрузки React, чтобы не было мигания.

## Data Attributes

На `html` используются два атрибута:

- `data-theme="light" | "dark"`
- `data-palette="default" | "gruvbox"`

Это дает четыре комбинации без копирования всей темы:

- default dark
- default light
- gruvbox dark
- gruvbox light

## Why this is scalable

- Не нужно дублировать весь `styles.css` под каждый режим.
- Новая палитра добавляется в одном месте.
- Компоненты не знают про конкретную тему, они знают только semantic-роли.
- Можно постепенно переводить локальные hardcoded-цвета в semantic-токены без полного переписывания сайта.

## Rule for future work

Если появляется новый компонент или новый цветовой сценарий:

1. Сначала выбрать semantic-роль.
2. Если роли не хватает, добавить новую semantic-переменную.
3. Только потом связать ее с palette-токенами в `theme.css`.

Не добавлять прямые `hex` и `rgba` в компоненты, если это не временный прототип.
