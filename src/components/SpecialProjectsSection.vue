<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import confetti from "canvas-confetti";
import { Button } from "@yerik/yedesign-system";

const specialProjectHeroImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.meme-arsenal.com%2Fmemes%2F875d6d71564727fa28f6823024fe5979.jpg&f=1&nofb=1&ipt=516ba4d2a64fa2e7d982e8f765cf109294bc55706d64eb984f0ebad126046e1c";

const birthdayOpen = ref(false);
const canvasRef = ref(null);

const onKeyDown = (event) => {
  if (event.key === "Escape") {
    birthdayOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeyDown);
});

const stopOverflow = () => {
  document.body.style.overflow = "";
};

const openModal = () => {
  birthdayOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  birthdayOpen.value = false;
  stopOverflow();
};

let rafId = 0;

const fireModalConfetti = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const rootStyles = window.getComputedStyle(document.documentElement);
  const fire = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  const colors = [
    rootStyles.getPropertyValue("--color-text").trim(),
    rootStyles.getPropertyValue("--color-text-muted").trim(),
    "#e61771",
    "#67c587",
    "#f4a23a",
  ].filter(Boolean);

  const animationEnd = Date.now() + 1400;

  const shoot = (particleCount) => {
    fire({
      particleCount,
      angle: 60 + Math.random() * 240,
      spread: 85,
      startVelocity: 26,
      ticks: 220,
      gravity: 0.6,
      origin: { x: Math.random(), y: Math.random() },
      scalar: 1,
      colors,
    });
  };

  shoot(25);

  const frame = () => {
    shoot(4);
    if (Date.now() < animationEnd) {
      rafId = window.requestAnimationFrame(frame);
    }
  };

  rafId = window.requestAnimationFrame(frame);
};

onBeforeUnmount(() => {
  if (rafId) window.cancelAnimationFrame(rafId);
  stopOverflow();
});

watch(birthdayOpen, async (isOpen) => {
  if (!isOpen) return;
  await nextTick();
  fireModalConfetti();
});
</script>

<template>
  <section class="special-projects">
    <h2 class="section-title">Спец проекты</h2>
    <Button label="Нажми меня" variant="outline" size="M" @click="openModal" />
  </section>

  <Teleport to="body">
    <div v-if="birthdayOpen" class="birthday-modal" role="dialog" aria-modal="true" aria-label="Поздравление">
      <button
        type="button"
        aria-label="Закрыть поздравление"
        class="birthday-modal__backdrop"
        @click="closeModal"
      />
      <canvas ref="canvasRef" class="birthday-modal__canvas" aria-hidden="true" />
      <div class="birthday-modal__viewport">
        <div class="birthday-modal__card">
          <div class="birthday-modal__hero">
            <img class="birthday-modal__hero-image" :src="specialProjectHeroImage" alt="" />
          </div>
          <div class="birthday-modal__content">
            <div class="birthday-modal__copy">
              <p class="project-card__title">Пусть все желания сбудутся!</p>
              <p>
                Вдохновленные мечтой, раскрываем потенциал и делаем жизнь людей ярче, а быт
                комфортнее.
              </p>
            </div>
            <Button label="Спасибо" variant="primary" size="M" width="full" @click="closeModal" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
