# CarboxMol Bioinformatika Klubu — Universal Responsive & SEO Architecture Standards

Bu sənəd CarboxMol Bioinformatika Klubu veb-platformasının (**CarboxMol Bioinformatics Club**) bütün cihazlarda (Mobile, Tablet, Laptop, Desktop, 4K Ultrawide), əməliyyat sistemlərində (iOS, Android, macOS, Windows, Linux) və tətbiq mühitlərində (Brauzer, PWA / Standalone App) həm **100% responsiv və qüsursuz vizual təcrübə**, həm də **dünya səviyyəli avtomatlaşdırılmış SEO & Axtarış Motoru Optimallaşdırması (Search Engine Optimization)** təmin etməsi üçün müəyyən edilmiş memarlıq standartları və dəyişməz qaydalar toplusudur.

Gələcəkdə layihə üzərində işləyən bütün süni intellekt köməkçiləri (AI Agents) və proqram təminatı mühəndisləri bu qaydaları dəqiq şəkildə izləməli və tətbiq etməlidirlər.

---

## 1. Universal Responsivlik Standartları (Viewport & Device Matrix)

Platforma aşağıdakı əsas ekran breakpoint-ləri və cihaz təbəqələri üçün xüsusi olaraq optimallaşdırılmışdır:

| Cihaz Kateqoriyası | Ekran Ölçüsü | Naviqasiya Rejimi | Şrift və Boşluqlar | Tətbiq Davranışı |
| :--- | :--- | :--- | :--- | :--- |
| **Kompakt Mobil (Phones)** | `< 640px` (iPhone SE, Galaxy S, mini) | Mobil Üst Panel + 2-Sütunlu Tam Ekran Drawer + Mobil Alt Dok Barı | `text-xs`, yığcam düymələr (min 38x38px toxunma sahəsi) | Əsas brend sub-başlığı qısaldılır; Dil düyməsi (`AZ/EN`), Elanlar və Qeydiyyat birbaşa görünür. |
| **Geniş Mobil & Kiçik Planşet** | `640px – 767px` (iPhone Pro Max, Fold) | Üst Panel + Mobil Menyu Drawer | Balanslı şriftlər, dinamik təhlükəsiz zonalar | `safe-area-inset-top` və `safe-area-inset-bottom` aktivdir. |
| **Planşet (Tablets & iPads)** | `768px – 1023px` (iPad 10.2", iPad Air, iPad Mini) | Yığcam Üst Panel + Mobil Drawer Menyu | 2 və 3 sütunlu torlar | Həm sensor (touch), həm də trackpad/klaviatura naviqasiyasını dəstəkləyir. |
| **Noutbuk (Laptops & Airs)** | `1024px – 1439px` (MacBook Air 13", MacBook Pro 14", Ultrabooks) | Geniş Desktop Navbar (`lg:flex`) | Bütün 7 əsas keçid linki + Rəhbərlik Paneli (`hidden 2xl:inline` qorunması ilə) | Düymə mətnləri daşmanın qarşısını almaq üçün səliqəli şəkildə adaptivləşir. |
| **Geniş Ekran (Desktops & 4K)** | `>= 1440px` (iMac 24", 27", 32", 4K Displays) | Tam Genişləndirilmiş Desktop Navbar | Tam mətn etiketləri, geniş boşluqlar (`px-8`), 1920px maksimal konteyner | Bütün status göstəriciləri, xarici keçidlər və portallar tam aydın görünür. |

### 1.1 Mobil və Planşet Üst Paneli (`lg:hidden`) Qaydası
Mobil və planşet ölçülərində istifadəçinin tez-tez istifadə etdiyi əsas funksiyalar gizli menyu arxasında saxlanılmamalı, birbaşa görünməlidir:
1. **Elanlar Düyməsi (`openAnnouncementsModal()`):** Canlı bildiriş nöqtəsi ilə birbaşa əlçatandır.
2. **Dil Dəyişdirici (`toggleLanguage()`):** `AZ | EN` birbaşa üst paneldə yerləşir.
3. **Qeydiyyat Düyməsi (`data-target="register"`):** Yeni tələbələrin kluba dərhal üzv olması üçün nəzərəçarpan düymə.
4. **Menyu Açarı (`#mobileMenuToggle`):** Toxunmağa rahat (minimum 40x40px) hamburger düyməsi.

### 1.2 Mobil Naviqasiya Çəkməcəsi (`#mobileMenu` Drawer)
Mobil menyu açıldıqda bütün 8 əsas modul 2 sütunlu müasir tətbiq toru (app grid) şəklində təqdim edilir:
* Ana Səhifə, Sənədlər, Tədris Planı, Bio-Alət (CarboxMol), Tədbirlər, Alimlər, BioMeet, Qeydiyyat.
* Aşağı hissədə xüsusi rollar üçün portallar: Tələbə Üzv Portalı, Tədqiqatçı/Müəllim Portalı, Rəhbərlik Portalı (Sədr Girişi).
* Sistem sazlamaları: PWA quraşdırma düyməsi və Məxfilik/Status məlumatı.

### 1.3 PWA və Mobil OS Uyğunluğu
* **iOS (Safari / Standalone):** `env(safe-area-inset-top)` və `env(safe-area-inset-bottom)` nəzərə alınaraq Dynamic Island və ya Notch sahələrində elementlərin kəsilməsi tam əngəllənir.
* **Android (Chrome / Standalone):** `display-mode: standalone` rejimində `html[data-display="pwa"]` atributu aktivləşərək xüsusi yerli tətbiq (native app) görünüşü təmin edilir.

---

## 2. Avtomatlaşdırılmış Real-Time SEO Mühərriki (`seo-responsive-engine.js`)

Platforma `js/seo-responsive-engine.js` modulu vasitəsilə dinamik tək-səhifəli tətbiq (SPA) və statik çox-səhifəli arxitekturanın hər ikisini dəstəkləyən real-time SEO sinxronizasiyasına malikdir.

### 2.1 Avtomatik Sinxronizasiya Tetikləyiciləri
SEO məlumatları aşağıdakı hadisələr baş verdikdə heç bir səhifə yenilənməsinə ehtiyac olmadan dərhal yenilənir:
1. **Bölmə Dəyişikliyi (`navigateTo(sectionId)` və ya `hashchange`):** Yeni səhifəyə keçdikdə `<title>`, `<meta name="description">`, OpenGraph başlıq/təsvir, Twitter Card məlumatları həmin bölməyə uyğunlaşır.
2. **Dil Dəyişməsi (`carboxmol:languageChanged`):** İstifadəçi Azərbaycan və ya İngilis dilini seçdikdə meta təsvirləri, açar sözlər və sosial şəbəkə başlıqları dərhal seçilmiş dildə sinxronizasiya edilir.
3. **Ekran/Cihaz Dəyişikliyi (`resize`, `orientationchange`):** Cihaz diaqnostikası aparılaraq `<html>` teqinə `data-device`, `data-os`, `data-display`, `data-orientation` atributları təyin olunur.

### 2.2 Schema.org JSON-LD Dinamik Strukturu
`#dynamicSeoSchema` skript blokunda Google və digər axtarış motorları üçün 3 əsas struktur məlumatı daim aktual saxlanılır:
1. `WebSite`: Layihənin əsas axtarış indeksi və URL strukturu.
2. `BreadcrumbList`: Hazırda aktiv olan bölmənin naviqasiya yolu (məsələn: Ana Səhifə > Bio-Alət və ya Home > Bio-Tools).
3. `WebPage`: Səhifənin dəqiq URL-i, son dəyişiklik tarixi, dili (`az` və ya `en`) və ətraflı elmi təsviri.

### 2.3 Standart Meta Qaydaları
Hər bir keçiddə:
* `link[rel="canonical"]` hazırkı aktiv bölmənin dəqiq URL-nə işarələyir (`https://carboxmol-bioinformatics-club.github.io/#<sectionId>`).
* `meta[property="og:url"]` və `meta[name="twitter:url"]` aktiv bölmə ilə sinxronlaşır.
* Çoxdilli axtarış indeksləməsi üçün `link[rel="alternate"][hreflang="az"]` və `link[rel="alternate"][hreflang="en"]` mövcudluğu təmin edilir.

---

## 3. Süni İntellekt və Tərtibatçılar üçün Əsas Qaydalar

Gələcək dəyişikliklər zamanı bu tələbləri pozmaq QƏTİ QADAĞANDIR:

1. **Navbar Bütövlüyü:** Navbar kodunu dəyişərkən heç bir düyməni (Elanlar, Dil seçimi, Qeydiyyat, Menyu) mobil və planşet ekranlarından silmək və ya gizlətmək olmaz.
2. **Yalnız İki Dil (AZ & EN):** Bütün yeni funksiyalar və ya mətnlər sırf təmiz Azərbaycan dilində və tam İngilis dilində olmalı, `js/i18n.js` lüğətinə əlavə edilməlidir.
3. **Sinxron Repozitoriya Qaydası:** Əsas repozitoriyada (`CarboxMol-Bioinformatics-Club.github.io`) edilən hər bir dəyişiklik mütləq şəkildə qardaş repozitoriyaya (`CarboxMol-Bioinformatics-Club`) kopyalanmalı, hər iki repozitoriyada həm `main`, həm də `master` budaqlarına göndərilməlidir (push edilməlidir).
4. **PWA Kəş Versiyası:** Əsas JS və ya HTML fayllarında dəyişiklik edildikdə `version.json` və `sw.js` daxilindəki keş versiyası (`CACHE_VERSION`) bir vahid artırılmalıdır.
