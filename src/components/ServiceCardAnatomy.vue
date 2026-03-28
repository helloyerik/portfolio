<script setup>
import { inject } from "vue";

const siteCopy = inject("siteCopy");
</script>

<template>
  <div class="anatomy-card">
    <div class="anatomy-card__section">
      <h3 class="anatomy-card__headline">Anatomy</h3>
      <div class="anatomy-card__rule" />
      <div class="anatomy-preview">
        <span class="anatomy-preview__label anatomy-preview__label--top-left">16</span>
        <span class="anatomy-preview__label anatomy-preview__label--top-mid">12</span>
        <span class="anatomy-preview__label anatomy-preview__label--top-right">16</span>
        <span class="anatomy-preview__label anatomy-preview__label--right">16</span>
        <div class="anatomy-preview__card">
          <div class="anatomy-preview__header">
            <div class="anatomy-preview__thumb" />
            <div class="anatomy-preview__header-text">
              <div class="anatomy-preview__title-row">
                <span class="anatomy-preview__title">Title</span>
                <span class="anatomy-preview__caret">›</span>
              </div>
              <span class="anatomy-preview__subtitle">Description</span>
            </div>
          </div>
          <div class="anatomy-preview__options">
            <span class="anatomy-preview__option anatomy-preview__option--active">Button</span>
            <span class="anatomy-preview__option">Button</span>
            <span class="anatomy-preview__option">Button</span>
          </div>
          <ul class="anatomy-preview__list">
            <li>Text</li>
            <li>Text</li>
            <li>Text</li>
          </ul>
          <div class="anatomy-preview__footer">
            <span class="anatomy-preview__price">Price</span>
            <button class="anatomy-preview__button" type="button">{{ siteCopy.addLabel }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="anatomy-card__section">
      <h3 class="anatomy-card__subhead">Header</h3>
      <div class="anatomy-card__rule" />
      <div class="anatomy-mini anatomy-mini--header">
        <div class="anatomy-preview__thumb" />
        <div class="anatomy-preview__header-text">
          <div class="anatomy-preview__title-row">
            <span class="anatomy-preview__title">Title</span>
            <span class="anatomy-preview__caret">›</span>
          </div>
          <span class="anatomy-preview__subtitle">Description</span>
        </div>
      </div>
    </div>

    <div class="anatomy-card__section">
      <h3 class="anatomy-card__subhead">ServiceOptions</h3>
      <div class="anatomy-card__rule" />
      <div class="anatomy-mini anatomy-mini--options">
        <span class="anatomy-preview__option anatomy-preview__option--active">Button</span>
        <span class="anatomy-preview__option">Button</span>
        <span class="anatomy-preview__option">Button</span>
      </div>
    </div>

    <div class="anatomy-card__section">
      <h3 class="anatomy-card__subhead">Body</h3>
      <div class="anatomy-card__rule" />
      <ul class="anatomy-mini anatomy-mini--list">
        <li>Text</li>
        <li>Text</li>
        <li>Text</li>
      </ul>
    </div>

    <div class="anatomy-card__section">
      <h3 class="anatomy-card__subhead">Footer</h3>
      <div class="anatomy-card__rule" />
      <div class="anatomy-mini anatomy-mini--footer">
        <span class="anatomy-preview__price">Price</span>
        <button class="anatomy-preview__button" type="button">{{ siteCopy.addLabel }}</button>
      </div>
    </div>
  </div>
</template>
