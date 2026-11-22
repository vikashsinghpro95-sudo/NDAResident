/**
 * ============================================================================
 * EX-RISALDAR MAJOR M. K. PAWAR NDA & DEFENCE ACADEMY
 * Shared Layout & Navigation Helper
 * ============================================================================
 */

(function () {
  'use strict';

  const config = window.ACADEMY_CONFIG || {};

  document.addEventListener('DOMContentLoaded', initLayout);

  function initLayout() {
    initActiveNavLinks();
    initAnnouncementBar();
  }

  /* --------------------------------------------------------------------------
   * 1. Synchronize Active State on Desktop Nav and Mobile Drawer
   * -------------------------------------------------------------------------- */
  function initActiveNavLinks() {
    const rawPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentFile = rawPath.split('?')[0].split('#')[0] || 'index.html';

    const links = document.querySelectorAll('.site-nav a, .mobile-nav-list a, .drawer-nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const targetFile = href.split('?')[0].split('#')[0];

      if (targetFile === currentFile) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else if (currentFile !== 'index.html' && targetFile === 'index.html') {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 2. Top Announcement Ribbon
   * -------------------------------------------------------------------------- */
  function initAnnouncementBar() {
    if (!config.announcement || !config.announcement.text) return;

    const storageKey = `announcement_dismissed_${config.announcement.id || 'default'}`;
    if (config.announcement.dismissible && localStorage.getItem(storageKey) === 'true') {
      return;
    }

    // Check if announcement already exists in DOM
    if (document.getElementById('siteAnnouncementBar')) return;

    const banner = document.createElement('div');
    banner.id = 'siteAnnouncementBar';
    banner.className = 'site-announcement-banner';
    banner.innerHTML = `
      <div class="container announcement-inner">
        <div class="announcement-msg">
          <span class="announcement-pill">ADMISSIONS 2025–26</span>
          <a href="${config.announcement.link || 'admissions-contact.html'}" class="announcement-link">
            ${config.announcement.text} &rarr;
          </a>
        </div>
        ${config.announcement.dismissible ? '<button type="button" class="announcement-dismiss" aria-label="Dismiss Notification">&times;</button>' : ''}
      </div>
    `;

    // Insert before header
    const header = document.querySelector('.site-header');
    if (header) {
      header.parentNode.insertBefore(banner, header);
    } else {
      document.body.insertBefore(banner, document.body.firstChild);
    }

    const dismissBtn = banner.querySelector('.announcement-dismiss');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        banner.remove();
        localStorage.setItem(storageKey, 'true');
      });
    }
  }
})();
