# CarboxMol Bioinformatics Club — Universal AI & Developer Architecture Mandate

> **IMPORTANT NOTICE FOR ALL AI AGENTS & DEVELOPERS**  
> This file contains the strict, non-negotiable architectural mandates of the **CarboxMol Bioinformatics Club** platform (`CarboxMol-Bioinformatics-Club.github.io`).  
> Whenever you read, modify, or extend this codebase, you **MUST** strictly adhere to these three core pillars: **Universal Responsiveness**, **Bilingual Parity (AZ ↔ EN)**, and **Continuous SEO Optimization**.

---

## 1. Universal Responsiveness & Zero-Overflow Architecture (Mobile, Tablet, Laptop, Desktop, PWA)

1. **Zero Horizontal Overflow (`overflow-x: clip / hidden`):**
   - No component, navbar, modal, table, or container may ever cause horizontal scroll or push elements outside the viewport boundary on ANY screen resolution from **320px (iPhone SE)** up to **4K+ Displays**.
   - Always ensure flex and grid children have `min-w-0` to prevent text truncation issues.

2. **Top Navigation Bar Rules:**
   - The desktop navigation bar (`nav.glass-nav`) must comfortably host the Logo, 7 Core Nav Links, and the Right-Hand Actions Suite (Bulletins, Language Switcher, Membership CTA, Portal Segmented Control, and Logout).
   - **Responsive Label Strategy:**
     - Below `2xl` (< 1536px), utility pills like Announcements (`#navAnnouncementsBtn`) and PWA Install (`#pwaInstallBtn`) must render as compact icon pills (`[📢 •]`, `[📥]`), expanding to full text (`Elanlar`, `Yüklə`) only on `2xl+`.
     - In the Portal Capsule (`#navPortalLoginCapsule`), button labels must be `hidden xl:inline` (e.g. icon-only on tablet/small laptop `1024px–1279px`, expanding to `Üzv / Member`, `Müəllim / Mentor`, `Sədr / President` on `1280px+`).
     - The active session button for President (`#navPresidentPortalBtn`) must remain INSIDE the segmented capsule, displaying `👑 Sədr` (AZ) / `👑 President` (EN), never a 16-character string like "President Portal" that blows out navbar width.
     - The Logout button (`#navPresidentLogoutBtn`, `#navMemberLogoutBtn`, `#navTeacherLogoutBtn`) must sit directly beside the capsule with `shrink-0` and safe margin, guaranteeing it is **100% visible with zero clipping** on all laptops (e.g. 1280px MacBook Air M2).

3. **Element Display Control in JavaScript:**
   - When toggling authentication UI in `updateAuthUI()`, never rely solely on adding `.hidden` to elements that have `.flex` or `.inline-flex` classes (Tailwind class order precedence issue).
   - Always pair `classList.toggle('hidden', ...)` with direct inline style management:
     ```javascript
     el.style.display = isVisible ? 'inline-flex' : 'none';
     ```

---

## 2. Strict Bilingual Parity (Azerbaijani & English)

1. **100% Dual-Language Support:**
   - Every text element in the platform must support both **Azerbaijani (AZ)** and **English (EN)**.
   - All newly introduced UI strings must be cataloged in `js/i18n.js` `DICTIONARY`.

2. **Visual & Geometric Balance:**
   - English phrases naturally tend to be longer than Azerbaijani phrases (e.g., "Membership" vs "Üzvlük", "President" vs "Sədr", "Curriculum" vs "Tədris Planı").
   - When authoring translations, pick concise, elegant English terms (e.g., `Join` or `Membership` with compact tracking; `President` instead of `President Portal` inside tight navbar buttons).
   - Switching languages must NEVER alter the layout grid or cause sudden horizontal expansion that pushes buttons off-screen.

3. **Synchronization Event:**
   - Every language change dispatches `carboxmol:languageChanged`. The SEO engine listens to this event and updates document metadata, hreflang, OpenGraph, and JSON-LD schema immediately.

---

## 3. Continuous Automated SEO & Metadata Synchronization

1. **`SeoResponsiveEngine` (`js/seo-responsive-engine.js`):**
   - The engine automatically maintains route-specific SEO titles, descriptions, canonical tags, and OpenGraph/Twitter card attributes for all 10 core routes:
     `home`, `documents`, `curriculum`, `biotools`, `events`, `collaborators`, `biomeet`, `register`, `members-portal`, `teacher-portal`, `president-portal`.
   - When adding a new view or route, you **MUST** register its bilingual metadata inside `SEO_METADATA` in `js/seo-responsive-engine.js`.

2. **Hreflang & Schema.org JSON-LD:**
   - Alternate links for `az`, `en`, and `x-default` are dynamically kept synchronized with the current route.
   - `BreadcrumbList` and `WebPage` structured data are dynamically updated in `#dynamicSeoSchema`.

---

## 4. BioMeet & Portal Security Integrity

1. **Multi-Participant WebRTC Conference Engine:**
   - BioMeet uses native peer-to-peer WebRTC Mesh with cross-window/tab `BroadcastChannel` signaling and STUN fallback.
   - All 3 portals (Member, Teacher, President) must retain their independent meeting launchers and live presence broadcasting.

2. **Teacher & Student Segregation:**
   - Registered student members (e.g. Fatimə Piriyeva, Xaqan Əliyev, Nicat Nuhov) must remain strictly in `members` / `applications`.
   - The Teacher Portal and President teacher management table must exclusively list approved faculty / academic mentors.

3. **Multi-Repo Synchronization:**
   - All modifications to `CarboxMol-Bioinformatics-Club.github.io` must be mirrored identically to the sister repo `CarboxMol-Bioinformatics-Club` and pushed to both `main` and `master` branches.
