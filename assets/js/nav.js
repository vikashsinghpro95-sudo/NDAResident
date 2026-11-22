/**
 * NAVIGATION & SCROLL CONTROLLER
 * Ex-Risaldar Major M. K. Pawar NDA & Defence Academy
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.header-progress-bar');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav-modal');
  const mobileBottomBar = document.querySelector('.mobile-bottom-bar');
  const navLinks = document.querySelectorAll('.mobile-nav-links a');

  // 1. Scroll Progress & Sticky Header Enhancements
  function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Progress bar width
    if (progressBar && docHeight > 0) {
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // Mobile bottom bar visibility (appears after 260px)
    if (mobileBottomBar) {
      if (scrollTop > 260) {
        mobileBottomBar.classList.add('is-visible');
      } else {
        mobileBottomBar.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Mobile Menu Modal Toggle
  const menuToggles = document.querySelectorAll('.menu-toggle');
  if (menuToggles.length > 0 && mobileNav) {
    let isOpen = false;

    function toggleMenu(state) {
      isOpen = typeof state === 'boolean' ? state : !isOpen;
      menuToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', String(isOpen));
        if (toggle.classList.contains('hamburger')) {
          if (isOpen) {
            toggle.classList.add('is-open');
          } else {
            toggle.classList.remove('is-open');
          }
        }
      });
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
      
      if (isOpen) {
        mobileNav.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        const firstLink = mobileNav.querySelector('a');
        if (firstLink) firstLink.focus();
      } else {
        mobileNav.classList.remove('is-open');
        document.body.style.overflow = '';
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) hamburger.focus();
      }
    }

    menuToggles.forEach(toggle => {
      toggle.addEventListener('click', () => toggleMenu());
    });

    // Close on navigation link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu(false);
      }
    });
  }
}
