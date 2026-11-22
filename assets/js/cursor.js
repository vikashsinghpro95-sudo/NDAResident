/**
 * COMPASS-ROSE TACTICAL CURSOR FOLLOWER
 * Desktop fine-pointer devices only. Disabled under prefers-reduced-motion.
 */

export function initCustomCursor() {
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isFinePointer || prefersReduced) return;

  const cursorEl = document.createElement('div');
  cursorEl.className = 'custom-cursor';
  cursorEl.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cursorEl);

  let mouseX = -100;
  let mouseY = -100;
  let currentX = -100;
  let currentY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function render() {
    // Smooth lerp (0.18 ease)
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;
    cursorEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  // Add hover state for interactive elements
  const hoverSelector = 'a, button, input, select, textarea, .btn, .rubber-stamp, [tabindex="0"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) {
      cursorEl.classList.add('is-hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) {
      cursorEl.classList.remove('is-hovering');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursorEl.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorEl.style.opacity = '1';
  });
}
