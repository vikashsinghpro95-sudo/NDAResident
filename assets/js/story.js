/**
 * THREE GENERATIONS REGIMENTAL DOSSIER SHOWCASE
 * Smooth, accessible, tabbed & next/prev dossier navigation
 * Replaces scroll-hijacking with instantaneous user-controlled transitions.
 */

export function initStory() {
  const tabs = document.querySelectorAll('.story-tab');
  const panels = document.querySelectorAll('.story-panel');
  const nextBtns = document.querySelectorAll('.story-next-btn');
  const prevBtns = document.querySelectorAll('.story-prev-btn');

  if (!tabs.length || !panels.length) return;

  function switchChapter(targetIndex) {
    const targetStr = String(targetIndex);

    // Update tabs
    tabs.forEach(tab => {
      const isMatch = tab.getAttribute('data-target') === targetStr;
      tab.classList.toggle('is-active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // Update panels
    panels.forEach(panel => {
      const isMatch = panel.getAttribute('data-chapter') === targetStr;
      panel.classList.toggle('is-active', isMatch);
    });
  }

  // Tab click listeners
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      if (target) {
        switchChapter(target);
      }
    });
  });

  // Next button listeners
  nextBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const next = btn.getAttribute('data-next');
      if (next && next !== 'enquiry') {
        e.preventDefault();
        switchChapter(next);
        // Gently scroll to dossier top if user was scrolled down inside the section
        const storySection = document.getElementById('story');
        if (storySection) {
          const rect = storySection.getBoundingClientRect();
          if (rect.top < -50) {
            storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });

  // Previous button listeners
  prevBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const prev = btn.getAttribute('data-prev');
      if (prev) {
        e.preventDefault();
        switchChapter(prev);
        const storySection = document.getElementById('story');
        if (storySection) {
          const rect = storySection.getBoundingClientRect();
          if (rect.top < -50) {
            storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    });
  });
}
