# AI CONTEXT & PROJECT DOSSIER

> **Project:** Ex-Risaldar Major M. K. Pawar NDA & Defence Academy  
> **Repository:** `https://github.com/vikashsinghpro95-sudo/NDAResident.git` (`main` branch)  
> **Workspace Paths:**  
> - Primary: `/Users/macbookpro/Developement/NDA Project ` (with trailing space)  
> - Counterpart: `/Users/macbookpro/Developement/NDA Project`  
> **Last Updated:** November 2026  

---

## 1. Project Overview & Institutional Profile

The **Ex-Risaldar Major M. K. Pawar NDA & Defence Academy** is a premier residential defence and STEM preparatory academy located in Pune / Lonavala foothills, Maharashtra, India. 

### Core Leadership & Three-Generation Lineage
1. **First Generation (The Great War Sapper):** Bombay Engineering Group (BEG). Gallant military engineering service recognized with an award of 85 acres in Sangli district by the British Indian Government.
2. **Second Generation (The Cavalryman):** Ex-Risaldar Major M. K. Pawar. 32 years of decorated active service in **Skinner's Horse** (1st Duke of York's Own Lancers) and **The President's Bodyguard (PBG)**.
3. **Third Generation (The Academic Director):** Prof. Ravindra Pawar. 17+ years leading premier STEM & defence coaching (Director, Kota Rankers Point, Pune). Bridges competitive science instruction with regimental discipline.

---

## 2. Technology Stack & Architecture

- **Architecture:** Static Web Architecture (Zero dependencies, fast load time, high accessibility).
- **Frontend Core:** Semantic HTML5, Vanilla CSS3 (Custom Properties & Design Tokens), Vanilla ES6+ JavaScript.
- **Typography:** Self-hosted web fonts (`assets/fonts/` and `Fonts/`):
  - Primary Sans: `Inter` (UI, body, data chips, tables)
  - Display / Editorial Serif: `Fraunces` / `Mileast` / `Transcity` (Regimental titles, hero titles, archival headers)
- **Deployment & Hosting:**
  - GitHub Actions Pages workflow (`.github/workflows/static.yml`)
  - Netlify hosting configs (`netlify.toml`, `_headers`)
  - SEO artifacts (`sitemap.xml`, `robots.txt`)

---

## 3. Design System & UI/UX Standards

### Color Tokens & Theme (`assets/css/tokens.css`, `variables.css`)
- **Backgrounds:**
  - Header & Navigation: Clean White (`#ffffff`)
  - Footer: Clean White (`#ffffff`) with Yellow highlights, Black text, and Yellow CTA buttons
  - Surface Primary: `#ffffff`
  - Surface Secondary: Muted parchment/warm regimental neutral (`#f8f9fa`, `#f4f5f7`)
  - Accent Gold/Yellow: `#f59e0b` / `#fbbf24` / `#f3b23e`
  - Brand Navy / Deep Black: `#0a0e17` / `#000000` / `#111827`
- **Buttons & Badges:**
  - Yellow background, 2px solid black stroke/border (`border: 2px solid #000`), bold black text, subtle 2px–3px offset box-shadow for tactical contrast.
- **Card Styling:**
  - Clean borders, purposeful spacing scale (8, 16, 24, 32, 48px), responsive fluid layouts with CSS Grid and Flexbox.

### Key Section Implementations (`index.html`)
- **Header / Navigation:**
  - Sticky white navbar with regimental badge, quick anchors, admissions pill, and mobile drawer.
- **Hero Section (File 00):**
  - Left column: Headline (`BUILD YOUR FUTURE IN THE ARMED FORCES`), admissions open alert, mission briefing, primary & secondary CTAs.
  - Right column: Cadet portrait in military tactical frame with subtle sunrise mist plate.
- **Three Generations (File 01):**
  - Interactive, accessible Regimental Dossier tabs (`GEN 01`, `GEN 02`, `GEN 03`) allowing seamless switching without slow scroll-hijack.
- **Cadet Cadence (File 02):**
  - Live Command Station HUD with a digital synchronized 24-hr clock, active formation tracker, day progress meter, quick filter chips (Dawn, Classes, Drill, Taps), and a clean vertical cadence timeline stream.
- **Accredited Programmes (File 03):**
  - 7 Structured cards with curated imagery, eligibility criteria, duration, and direct syllabus links.

---

## 4. Website Page Inventory

| File | Purpose / Contents |
|---|---|
| `index.html` | Flagship landing page: Hero, Dossiers, Cadet Cadence, Programmes, Campus brief, Enquiry form. |
| `about.html` | Regimental lineage, BEG, Skinner's Horse, Kota academic leadership, Vision, Advisory Council. |
| `courses.html` | Complete program catalog (NDA Foundation, SSB Guidance, CDS, AFCAT, IMU-CET, JEE TES, MHT-CET). |
| `campus-training.html` | Sahyadri campus, drill square, obstacle grounds, nutrition mess, dorms, daily cadence. |
| `nda-ssb.html` | Written exam blueprint (Maths + GAT), full 5-day SSB Board breakdown, GTO obstacles. |
| `achievements-gallery.html` | Cadets Hall of Fame, NDA passing out parade records, SSB selections, sports, regimental archives. |
| `admissions-contact.html` | Admission criteria, medical standards, online application form, campus location & route map. |
| `privacy-policy.html` | Data privacy, student record handling, compliance terms. |
| `terms.html` | Academy rules of conduct, fee guidelines, enrollment terms. |
| `thank-you.html` | Submission success confirmation and verification guidance. |
| `404.html` | Regimental-themed 404 error page with quick recovery routes. |
| `Website Contente.txt` | Complete verbatim text extraction across all 11 pages (81k+ characters). |

---

## 5. Curated Media Assets (`assets/img/`)

All images are optimized in modern `.webp` format with `-800.webp` responsive variants:
- **Hero & Mist:** `hero-mist-sunrise.webp`, `hero-crack-nda.jpg`
- **Lineage & History:** `archival-beg-sapper.webp`, `archival-skinners-horse.webp`, `archival-skinners-horse-portrait.webp`, `ravindra-pawar-academic.webp`
- **Cadet Training:** `cadet-group-run.webp`, `cross-country-running.webp`, `obstacle-course-climb.webp`, `teamwork-ssb-task.webp`
- **Academic & Courses:** `classroom-study.webp`, `nda-blackboard-math.webp`, `course-cds-campus.webp`, `course-afcat-plane.webp`, `course-imucet-ship.webp`, `course-cet-math-notes.webp`
- **Campus & Environment:** `western-ghats-hills.webp`, `maharashtra-sahyadri-landscape.webp`, `dormitory-cadet-beds.webp`, `topographic-map-texture.webp`

---

## 6. Git & Remote Workflow

- **Remote Origin:** `https://github.com/vikashsinghpro95-sudo/NDAResident.git`
- **Default Branch:** `main`
- **Syncing Counterparts:**
  The project exists in two sibling paths on the local machine:
  1. `/Users/macbookpro/Developement/NDA Project ` (active git repository)
  2. `/Users/macbookpro/Developement/NDA Project` (counterpart directory)
  Whenever updates are committed, sync using:
  ```bash
  rsync -av --delete --exclude='.git' "/Users/macbookpro/Developement/NDA Project /" "/Users/macbookpro/Developement/NDA Project/"
  ```

---

## 7. Guidelines for AI Assistants & Developers

1. **Maintain Design Cohesion:** Never introduce external CSS heavy frameworks (e.g. Bootstrap/Tailwind CDN) that conflict with the established tokens.
2. **Preserve Contrast & Layout Rules:** Always maintain the clean white background for navigation and footer, black text, and yellow action buttons with black borders.
3. **Responsive Mobile-First:** Check that tables, cadence cards, and forms work on viewports 360px–430px (mobile) through 1440px (desktop).
4. **No Broken Links:** Ensure internal links reference the correct `.html` files and maintain ID anchors.
