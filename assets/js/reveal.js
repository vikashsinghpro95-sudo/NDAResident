/**
 * REVEAL & SCROLL ANIMATIONS CONTROLLER
 * IntersectionObserver for .reveal elements, pledge word reveals, and roadmap animation
 */

export function initReveal() {
  // 1. General .reveal elements
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show immediately
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // 2. Pledge Quote Word-by-Word Scroll Reveal
  const pledgeQuote = document.querySelector('.pledge-quote');
  if (pledgeQuote) {
    const words = pledgeQuote.querySelectorAll('.word');
    if ('IntersectionObserver' in window) {
      const pledgeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add('is-visible');
              }, index * 140);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      pledgeObserver.observe(pledgeQuote);
    } else {
      words.forEach(w => w.classList.add('is-visible'));
    }
  }

  // 3. Roadmap SVG Path Draw & Waypoints
  const roadmapSection = document.querySelector('.roadmap-section');
  if (roadmapSection) {
    const path = roadmapSection.querySelector('.roadmap-path');
    const waypoints = roadmapSection.querySelectorAll('.roadmap-waypoint');
    const labels = roadmapSection.querySelectorAll('.roadmap-label');

    if ('IntersectionObserver' in window && path) {
      const roadmapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            path.classList.add('is-drawn');
            waypoints.forEach((wp, i) => {
              setTimeout(() => {
                wp.classList.add('is-active');
                if (labels[i]) labels[i].classList.add('is-active');
              }, (i + 1) * 260);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });
      roadmapObserver.observe(roadmapSection);
    }
  }

  // 4. Bento Tiles expandable interaction (tap/click to toggle expanded)
  const bentoTiles = document.querySelectorAll('.bento-tile');
  bentoTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      tile.classList.toggle('is-expanded');
    });
    // Keyboard accessibility
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('role', 'button');
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tile.classList.toggle('is-expanded');
      }
    });
  });
}

