# Architecture & Coding Rules for Coding Agents (Antigravity, Claude, Copilot, ChatGPT)

Welcome to the CarboxMol Bioinformatics Club project repository.
Before proposing or making any code changes, read `PROJECT_AI_RULES.md` and comply with the following mandatory constraints:

1. **Top Navbar Zero-Overflow Mandate:**
   - The Exit / Logout button (`#navPresidentLogoutBtn`, `#navMemberLogoutBtn`, `#navTeacherLogoutBtn`) must remain 100% visible inside the right viewport edge across all devices, including MacBook Air M2 (1280px) and iPads (1024px).
   - In the `#navPortalLoginCapsule`, active buttons must display compact labels (`👑 Sədr` / `👑 President`) rather than oversized strings.
   - When updating authentication state in `updateAuthUI()`, always pair `classList.toggle('hidden', ...)` with `style.display` assignment to prevent Tailwind `.flex` overrides.

2. **Bilingual Parity:**
   - Both Azerbaijani (AZ) and English (EN) must look identical in layout proportions and line counts.
   - All text additions must have entries in `js/i18n.js`.

3. **SEO & Device Diagnosis:**
   - Maintain `js/seo-responsive-engine.js`. It updates canonical links, hreflang alternates, OpenGraph, Twitter metadata, and Schema.org JSON-LD dynamically.

4. **Repository Parity:**
   - Always replicate committed changes to the mirror repository `/Users/macbookairm2/Documents/GitHub/CarboxMol-Bioinformatics-Club` and push to both `main` and `master`.

5. **CRITICAL: Strict Ban on Fabricating Dates/Days in Announcements & Events:**
   - **NEVER** invent, guess, or generate fake dates, days, or schedules for any announcement, event, seminar, workshop, or project.
   - When preparing or adding any announcement or event, the AI **MUST ALWAYS** ask the user first for the exact date and details.
   - If a specific date has not been explicitly provided and confirmed by the user, the AI must strictly default the date to `"Tezliklə"` (AZ) / `"Coming Soon"` (EN).

6. **CRITICAL: Official Logo, Products & Automatic Favicon Mandate (`robots.txt` Compliance):**
   - For the club, all its software/scientific products (`Carbox`, `CarboxMol`, `Studio Engine`, `VirtuLab`, `BioMeet`, `BioTools`, `OpenKBC`), and **every** new or existing HTML page, subpage, or JS template, **MUST** exclusively use the current official CarboxMol Bioinformatics Club logo (`assets/images/carboxmol_bioclub_logo.png`) and its official favicon set (`favicon-32x32.png`, `favicon-16x16.png`, `favicon.ico`, `apple-touch-icon.png`, `assets/icons/icon-192.png`, `assets/icons/icon-512.png`).
   - Legacy logo/favicon files (`favicon.svg`, `assets/favicon.svg`, `assets/images/carboxmol_logo.png`) are permanently retired and **MUST NEVER** be referenced anywhere.
   - Always load `js/seo-responsive-engine.js` (or `../js/seo-responsive-engine.js`) on every HTML page so `SeoResponsiveEngine.enforceOfficialFavicons()` automatically maintains official favicons and logos everywhere.
