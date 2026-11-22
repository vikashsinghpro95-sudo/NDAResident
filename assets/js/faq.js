/**
 * ACCESSIBLE FAQ ACCORDION
 * For FAQ sections across NDA/SSB and Admissions pages
 */

export function initFaq() {
  const triggers = document.querySelectorAll('.faq-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const targetId = trigger.getAttribute('aria-controls');
      const targetPanel = document.getElementById(targetId);

      // Toggle current
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (targetPanel) {
        targetPanel.classList.toggle('is-open', !isExpanded);
      }
    });
  });
}

