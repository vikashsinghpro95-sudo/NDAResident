/**
 * 05:30 REVEILLE & 24-HOUR CADET CADENCE TIMELINE CONTROLLER
 * Ultra-smooth natural scroll tracker, sticky telemetry clock HUD,
 * and interactive phase jumpers.
 */

export function initClock() {
  const section = document.querySelector('.timeline-section');
  const items = document.querySelectorAll('.cadence-item');
  const clockEl = document.getElementById('cadence-clock');
  const phaseTitleEl = document.getElementById('cadence-phase-title');
  const phaseCatEl = document.getElementById('cadence-phase-cat');
  const progressFillEl = document.getElementById('cadence-progress-fill');
  const progressPctEl = document.getElementById('cadence-progress-pct');
  const lineFillEl = document.getElementById('cadence-line-fill');
  const jumpChips = document.querySelectorAll('.cadence-chip');

  if (!section || items.length === 0) return;

  let activeIndex = 0;
  let ticking = false;

  function updateCadenceUI(index) {
    if (index === activeIndex && clockEl && clockEl.textContent === items[index].getAttribute('data-time')) {
      return;
    }
    activeIndex = index;

    // Update active classes
    items.forEach((item, i) => {
      item.classList.toggle('is-active', i === index);
    });

    const activeItem = items[index];
    const time = activeItem.getAttribute('data-time') || '05:00';
    const cat = activeItem.getAttribute('data-cat') || 'REGIMENTAL ROUTINE';
    const titleEl = activeItem.querySelector('.cadence-card-title');
    const title = titleEl ? titleEl.textContent.trim() : 'Cadet Routine';

    // Update Clock Face with subtle digital flip effect
    if (clockEl) {
      if (clockEl.textContent !== time) {
        clockEl.style.transform = 'scale(0.96)';
        setTimeout(() => {
          clockEl.textContent = time;
          clockEl.style.transform = 'scale(1)';
        }, 60);
      }
    }

    // Update Phase Box
    if (phaseTitleEl) phaseTitleEl.textContent = title;
    if (phaseCatEl) phaseCatEl.textContent = cat;

    // Update Progress
    const total = items.length;
    const pct = Math.round((index / (total - 1)) * 100);
    if (progressFillEl) progressFillEl.style.width = `${pct}%`;
    if (progressPctEl) progressPctEl.textContent = `${pct}%`;
  }

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        const triggerY = window.innerHeight * 0.42;
        let closestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, i) => {
          const rect = item.getBoundingClientRect();
          // Distance from item top to trigger line
          const dist = Math.abs(rect.top - triggerY);
          if (rect.top <= triggerY + 120 && dist < minDistance) {
            minDistance = dist;
            closestIndex = i;
          }
        });

        updateCadenceUI(closestIndex);

        // Update vertical line fill height based on active item
        if (lineFillEl && items.length > 0) {
          const firstNode = items[0].querySelector('.cadence-node');
          const lastNode = items[items.length - 1].querySelector('.cadence-node');
          const activeNode = items[closestIndex].querySelector('.cadence-node');

          if (firstNode && lastNode && activeNode) {
            const firstY = firstNode.getBoundingClientRect().top;
            const lastY = lastNode.getBoundingClientRect().top;
            const activeY = activeNode.getBoundingClientRect().top;
            const totalH = lastY - firstY;

            if (totalH > 0) {
              const fillPct = Math.min(100, Math.max(0, ((activeY - firstY) / totalH) * 100));
              lineFillEl.style.height = `${fillPct}%`;
            }
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  }

  // Scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  handleScroll();

  // Item click to smoothly focus
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateCadenceUI(index);
      const navOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      const targetY = item.getBoundingClientRect().top + window.scrollY - navOffset - 100;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    });
  });

  // Quick phase chip jump listeners
  jumpChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTime = chip.getAttribute('data-jump');
      if (!targetTime) return;

      const matchedItem = Array.from(items).find(el => el.getAttribute('data-time') === targetTime);
      if (matchedItem) {
        const navOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        const targetY = matchedItem.getBoundingClientRect().top + window.scrollY - navOffset - 100;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });
}
