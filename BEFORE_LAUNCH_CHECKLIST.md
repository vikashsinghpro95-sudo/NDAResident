# PRE-LAUNCH AUDIT & VERIFICATION CHECKLIST
**Ex-Risaldar Major M. K. Pawar NDA & Defence Academy, Pune**  
*Domain:* https://mkpawarnda.com  
*Audit Date:* 21 November 2026  
*Status:* Ready for Client Review & Staging Deployment

---

## 1. Statutory Disclaimers & Ethics Compliance (Verified ✅)
- [x] **No Selection Guarantees:** Strict statutory disclaimers are prominently displayed across the index footer, course dossiers, SSB section, admissions page, and terms of service. Selection is explicitly stated as solely determined by UPSC, SSBs, and Armed Forces Medical Boards.
- [x] **No Fabricated Results / Testimonials:** Pure honest empty states implemented on `achievements-gallery.html` ("Verified selection records will be published here upon official release"). Zero fake names or ratings.
- [x] **Honesty Flags on Internal Records:** Unverified internal service records (such as conflicting military service durations) remain strictly hidden and unpublished.

---

## 2. Institutional Placeholders to Confirm Before Production
The following items are marked with **`TO CONFIRM`** stamps in the UI and need final administrative confirmation by Prof. Ravindra Pawar:

| Item | Current State / Code | Action Required |
| :--- | :--- | :--- |
| **Email Address** | Currently empty string (`""`) | Provide official domain email (e.g., `admissions@mkpawarnda.com`) |
| **Exact Campus Street Address** | "Narhe Campus, Pune, Maharashtra" | Provide exact survey/plot number and pin code |
| **Google Maps Embed URL** | Placeholder in config | Generate official Google Maps location iframe embed |
| **Fee Structure** | "Contact admissions office" | Review if fee slabs should remain private or published |
| **24-Hour Routine Times** | 05:00 to 22:00 schedule with `TO CONFIRM` | Confirm muster and study block timings |
| **Facility Specs** | All flagged `TO CONFIRM` | Confirm specific dormitory capacities and obstacle names |
| **Social Media Profiles** | Currently empty | Provide official Instagram, YouTube, and Telegram handles |

---

## 3. Font & Asset Licensing
- [ ] **Mileast Font Commercial License:**  
  The site uses the custom serif font **Mileast** (`Mileast.otf`, `Mileast Italic.otf` converted to `Mileast.woff2`) across all pages for editorial headlines, dossier titles, and brand typography. Please verify commercial web licensing terms for production deployment at `mkpawarnda.com`.
- [x] **Self-Hosted Fallbacks:** Self-hosted open-source WOFF2 fallbacks (`Plus Jakarta Sans`, `Cinzel`) configured.
- [x] **Hero Image:** Responsive WebP (`hero-crack-nda-1200.webp`, `hero-crack-nda-800.webp`, `hero-crack-nda-480.webp`) integrated with high-priority preloading.
- [x] **Stock Images:** Currently using high-resolution documentary stock WebP files in `assets/img/`. These should be replaced with live photography of the Narhe campus and cadets once batches commence.

---

## 4. Mobile & Performance Audit
- [x] **390px iPhone Mobile Viewport:** Zero horizontal scroll. Header brand typography scales smoothly. 40px touch-friendly hamburger button. Fixed bottom action bar with Call, Enrol, and WhatsApp triggers.
- [x] **1440px Desktop Viewport:** Full-bleed regimental rhythm, live 05:30 IST reveille ticker, interactive bento mosaic, horizontal pinned scroll story, and SVG roadmap.
- [x] **Form Handlers:** Netlify Forms (`data-netlify="true"`, honeypot spam protection) + direct prefilled WhatsApp fallback (`wa.me/918669099430`).
- [x] **SEO & Security:** Valid `sitemap.xml`, `robots.txt`, `netlify.toml`, `_headers` with strict CSP and security headers.

