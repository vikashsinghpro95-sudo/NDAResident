/**
 * 3-STEP CONVERSATIONAL PROGRAMME FINDER WIDGET
 * Class -> Goal -> Timeline -> Matched Academy Pathway
 */

import { CONFIG } from '../../config.js';

export function initFinder() {
  const widget = document.getElementById('finder-widget');
  if (!widget) return;

  const steps = widget.querySelectorAll('.finder-step');
  const stepIndicators = document.querySelectorAll('.finder-step-indicator');
  const resultCard = document.getElementById('finder-result');
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');
  const resultDuration = document.getElementById('result-duration');
  const resultWhatsapp = document.getElementById('result-whatsapp');
  const restartBtn = document.getElementById('finder-restart');

  let selections = {
    class: '',
    goal: '',
    timeline: ''
  };

  function showStep(stepNumber) {
    steps.forEach((step, idx) => {
      step.classList.toggle('is-active', idx === stepNumber - 1);
    });

    stepIndicators.forEach((ind, idx) => {
      ind.classList.toggle('is-active', idx === stepNumber - 1);
      ind.classList.toggle('is-done', idx < stepNumber - 1);
    });

    if (resultCard) {
      resultCard.classList.remove('is-active');
    }
  }

  // Handle option button clicks
  widget.querySelectorAll('.finder-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stepEl = btn.closest('.finder-step');
      const stepNum = parseInt(stepEl.dataset.step, 10);
      const value = btn.dataset.value;

      // Unselect siblings
      stepEl.querySelectorAll('.finder-option').forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');

      if (stepNum === 1) {
        selections.class = value;
        setTimeout(() => showStep(2), 200);
      } else if (stepNum === 2) {
        selections.goal = value;
        setTimeout(() => showStep(3), 200);
      } else if (stepNum === 3) {
        selections.timeline = value;
        setTimeout(() => showResult(), 200);
      }
    });
  });

  // Handle back buttons
  widget.querySelectorAll('.finder-back').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = parseInt(btn.dataset.target, 10);
      showStep(targetStep);
    });
  });

  // Restart
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      widget.querySelectorAll('.finder-option').forEach(b => b.classList.remove('is-selected'));
      selections = { class: '', goal: '', timeline: '' };
      showStep(1);
    });
  }

  function showResult() {
    steps.forEach(s => s.classList.remove('is-active'));
    stepIndicators.forEach(i => {
      i.classList.remove('is-active');
      i.classList.add('is-done');
    });

    // Match appropriate course from CONFIG
    let matchedCourse = CONFIG.courses[0]; // Default NDA

    if (selections.goal === 'air-force') {
      matchedCourse = CONFIG.courses.find(c => c.id === 'afcat') || CONFIG.courses[0];
    } else if (selections.goal === 'navy-merchant') {
      matchedCourse = CONFIG.courses.find(c => c.id === 'imu-cet') || CONFIG.courses[0];
    } else if (selections.goal === 'engineering') {
      matchedCourse = CONFIG.courses.find(c => c.id === 'jee') || CONFIG.courses[0];
    } else if (selections.class === 'graduated') {
      matchedCourse = CONFIG.courses.find(c => c.id === 'cds') || CONFIG.courses[1];
    }

    if (resultTitle) resultTitle.textContent = matchedCourse.title;
    if (resultDesc) resultDesc.textContent = `Recommended for ${matchedCourse.target}. Focuses on ${matchedCourse.curriculum.slice(0, 3).join(', ')}.`;
    if (resultDuration) resultDuration.textContent = `Duration: ${matchedCourse.duration} · Exam: ${matchedCourse.exam}`;

    if (resultWhatsapp) {
      const text = encodeURIComponent(`Jai Hind Sir, I used the Programme Finder for ${matchedCourse.title} (${selections.class}). Please guide me on batch availability.`);
      resultWhatsapp.href = `https://wa.me/${CONFIG.contact.whatsapp}?text=${text}`;
    }

    if (resultCard) {
      resultCard.classList.add('is-active');
    }
  }
}

