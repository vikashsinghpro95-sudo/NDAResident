/**
 * ADMISSION ENQUIRY FORM & WHATSAPP FALLBACK
 * Form validation, honeypot protection, and instant WhatsApp link builder
 */

import { CONFIG } from '../../config.js';

export function initForms() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  const phoneInput = form.querySelector('input[type="tel"]');

  // Format phone to 10 digits
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 10) val = val.substring(0, 10);
      e.target.value = val;
    });
  }

  form.addEventListener('submit', (e) => {
    // If Netlify handles this standard POST, let it submit, but validate first
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const honeypot = form.querySelector('input[name="bot-field"]');

    if (honeypot && honeypot.value !== '') {
      e.preventDefault();
      return;
    }

    if (phone.length !== 10) {
      e.preventDefault();
      alert('Please enter a valid 10-digit mobile number.');
      if (phoneInput) phoneInput.focus();
      return;
    }

    // Prefill fallback: if user wants to send directly via WhatsApp
    const nameInput = form.querySelector('input[name="cadet-name"]');
    const courseSelect = form.querySelector('select[name="course"]');

    const cadetName = nameInput ? nameInput.value : 'Aspirant';
    const course = courseSelect ? courseSelect.value : 'NDA Programme';

    // Update any fallback WhatsApp links with filled data
    const waFallback = document.getElementById('whatsapp-form-fallback');
    if (waFallback) {
      const waMsg = encodeURIComponent(`Jai Hind Sir, I am submitting admission enquiry for cadet ${cadetName} interested in ${course}. Phone: ${phone}.`);
      waFallback.href = `https://wa.me/${CONFIG.contact.whatsapp}?text=${waMsg}`;
    }
  });
}

