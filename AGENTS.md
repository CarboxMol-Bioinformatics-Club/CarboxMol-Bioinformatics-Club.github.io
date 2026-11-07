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
