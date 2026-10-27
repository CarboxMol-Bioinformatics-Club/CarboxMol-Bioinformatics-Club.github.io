---
title: PWA və Oflayn Arxitektura (Progressive Web Application)
category: concept
type: software architecture
tags: [pwa, service-worker, offline-sync, cache-api, localstorage, web-engineering]
updated: 2026-10-27
sources: ["raw/club_bylaws_and_constitution.md"]
---

# 📱 PWA və Oflayn Arxitektura: CarboxMol Portalının Mühəndisliyi

[[carboxmol_bioinformatics_club|CarboxMol Bioinformatika Klubu]] portalı standart bir veb-sayt deyil, tam hüquqlu **Progressive Web App (PWA)** arxitekturasıdır. Bu o deməkdir ki, istifadəçi internet bağlantısı olmadığı və ya universitet laboratoriyasında şəbəkə kəsildiyi halda belə portaldan tam gücü ilə istifadə edə bilər.

---

## 🏗️ Əsas Texnoloji Komponentlər

1. **Service Worker (`sw.js`):**
   * Brauzer arxa planında işləyən xüsusi proqram skriptidir. Şəbəkə sorğularını (*fetch events*) tutur və qabaqcadan keşlənmiş resurslarla cavablayır.
   * **Strateqiya:** *Cache-First with Network Fallback* (HTML, CSS, JS, şriftlər və 3D kətan resursları dərhal yerli keşdən açılır).
2. **Oflayn Sinxronizasiya Növbəsi (`js/pwa.js`):**
   * İstifadəçi oflayn ikən üzvlük və ya müəllim qeydiyyatı formasını doldurduqda müraciət itmir.
   * `addToOfflineQueue({ type: 'application', data: ... })` çağırılır və məlumat `localStorage: wcu_offline_sync_queue` massivinə yazılır.
   * Cihaz yenidən internetə bağlandıqda (`window.addEventListener('online', ...)`), növbədəki bütün müraciətlər avtomatik olaraq FormSubmit API-yə və bulud bazasına göndərilir.
3. **Web App Manifest (`manifest.webmanifest`):**
   * Saytın iOS, Android, macOS və Windows sistemlərində "Tətbiq kimi quraşdır" (*Install as standalone app*) imkanını təmin edir.

---

## 🔗 Əlaqəli Səhifələr
* [[system_architecture]]
* [[club_security_and_auth_architecture]]
* [[carboxmol_studio]]
