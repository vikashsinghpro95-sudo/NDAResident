/**
 * MAIN ENTRANCE ES MODULE: "THE SERVICE FILE"
 * Ex-Risaldar Major M. K. Pawar NDA & Defence Academy
 */

import { CONFIG } from '../../config.js';
import { initNavigation } from './nav.js';
import { initCustomCursor } from './cursor.js';
import { initReveal } from './reveal.js';
import { initStory } from './story.js';
import { initClock } from './clock.js';
import { initFinder } from './finder.js';
import { initForms } from './forms.js';
import { initLightbox } from './lightbox.js';
import { initFaq } from './faq.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & Cursor
  initNavigation();
  initCustomCursor();

  // 2. Interactive Page Sections
  initReveal();
  initStory();
  initClock();
  initFinder();
  initForms();
  initLightbox();
  initFaq();

  // 3. Live 05:30 Reveille IST Clock
  initReveilleClock();

  // 4. Magnetic Buttons (Desktop)
  initMagneticButtons();

  // 5. Parallax for topographic contour lines in Hero
  initContourParallax();
});

/**
 * Live 05:30 Reveille Clock
 */
function initReveilleClock() {
  const clockTimeEl = document.querySelector('.clock-chip-time');
  if (!clockTimeEl) return;

  function updateClock() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const timeFormatter = new Intl.DateTimeFormat('en-GB', options);
    const timeParts = timeFormatter.format(now);
    clockTimeEl.textContent = `${timeParts} IST`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * Magnetic Buttons for Desktop
 */
function initMagneticButtons() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const magneticBtns = document.querySelectorAll('.btn--magnetic, .btn-primary, .btn--primary');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

/**
 * Subtle parallax for topographic contour background in Hero
 */
function initContourParallax() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const contourEl = document.querySelector('.hero-contour-overlay');
  if (!contourEl) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      contourEl.style.transform = `translateY(${scrollY * 0.18}px)`;
    }
  }, { passive: true });
}
