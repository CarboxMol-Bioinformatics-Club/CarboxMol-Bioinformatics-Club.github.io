---
title: Təhlükəsizlik və Avtorizasiya Arxitekturası (ClubSecurity & Portals)
category: concept
type: software security
tags: [security, anti-bot, honeypot, rate-limiting, sha256, role-based-access, formsubmit]
updated: 2026-10-27
sources: ["raw/club_bylaws_and_constitution.md"]
---

# 🛡️ Təhlükəsizlik və Avtorizasiya Arxitekturası: CarboxMol Portalı

Klub portalı açıq internet üzərində yerləşdiyindən kiberhücumlara, botlara, zərərli skriptlərə (XSS) və fırıldaqçı qeydiyyatlara qarşı çoxpilləli müdafiə sistemi (`window.ClubSecurity`) ilə qorunur.

---

## 🔒 Təhlükəsizlik Mexanizmləri

1. **Anti-Bot Honeypot və Dwell-Time Nəzarəti:**
   * Formalarda istifadəçiyə görünməyən gizli xanalar (`tRegHoneypot`, `appHoneypot`) yerləşdirilir. Botlar formanı avtomatik doldurarkən bu xanaları doldurur və dərhal bloklanır.
   * Dwell-time: Formanın açılması ilə göndərilməsi arasındakı vaxt yoxlanılır (insan 2 saniyədən tez bütün formanı doldura bilməz).
2. **Anti-Brute-Force Rate Limiting:**
   * Eyni cihazdan və ya sessiyadan 1 dəqiqə ərzində 3-dən çox uğursuz cəhd edildikdə giriş 3 dəqiqəlik tam bloklanır (`checkRateLimit`).
3. **Məlumatların Təmizlənməsi (Sanitization & XSS Protection):**
   * Bütün istifadəçi daxiletmələri `sanitizeText` və `sanitizeUsername` filtrlərindən keçirilərək HTML injection və script icrasının qarşısı alınır.
4. **Üç Pilləli Rol və Qeydiyyat Təsdiq Modeli:**
   * **Tələbə Portalı:** Qeydiyyatdan keçən tələbələr dərhal qəbul olunmur; statusları "Gözləyir" qalır.
   * **Müəllim / Mentor Portalı:** Yalnız Klub Sədrinin təsdiqindən sonra aktivləşir.
   * **Sədr Portalı (President Portal):** Şifrələnmiş giriş, müraciətləri təsdiq/rədd etmə, toplu e-poçt idarəsi və ehtiyat nüsxə çıxarma səlahiyyəti.
5. **İkiqat E-poçt Xəbərdarlığı (Dual FormSubmit Dispatch):**
   * İstər tələbə, istərsə də müəllim qeydiyyatdan keçdikdə FormSubmit vasitəsilə eyni anda həm əsas korporativ e-poçta (`suleyman.hacizade.232bioing@wcu.edu.az`), həm də ehtiyat Gmail ünvanına (`suleyman.hacizade1@gmail.com`) şifrə və anket məlumatları cədvəl şəklində daxil olur.

---

## 🔗 Əlaqəli Səhifələr
* [[system_architecture]]
* [[pwa_offline_architecture]]
* [[suleyman_hajizadeh]]
