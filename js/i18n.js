/**
 * CarboxMol Bioinformatics Club - Internationalization (i18n) Engine
 * Supported Languages: Azerbaijani (az - Default) & English (en)
 * Pure bilingual academic architecture.
 */

(function () {
  'use strict';

  var translations = {
    az: {
      site_title: "CarboxMol Bioinformatika Klubu | Hesablama Struktur Biologiyası və Genomika",
      lang_name: "Azərbaycan dili",
      lang_toggle_btn: "EN",
      nav_home: "Ana Səhifə",
      nav_documents: "Sənədlər",
      nav_curriculum: "Tədris Planı",
      nav_biotools: "Bio-Alət",
      nav_analysis: "Z-Bal Analizi",
      nav_events: "Tədbirlər",
      nav_collaborators: "Alimlər",
      nav_biomeet: "BioMeet",
      nav_announcements: "Elanlar",
      nav_register: "Kluba Üzvlük",
      nav_member_login: "Üzv Giriş",
      nav_teacher_login: "Müəllim Giriş",
      nav_president_login: "Sədr Giriş",
      nav_logout: "Çıxış",
      nav_install_app: "Yüklə",
      nav_access: "Access",
      hero_badge: "Qərbi Kaspi Universiteti • Rəsmi Tələbə Klubu",
      hero_title: "Hesablama Biologiyası və Genomikanın Gələcəyini Birlikdə Quraq",
      hero_desc: "Zülalların 3D modelləşdirilməsi, multi-omiks analizi, maşın öyrənməsi və bioinformatika alətlərinin praktiki tətbiqi üzrə tədqiqat və tədris platforması.",
      hero_btn_explore: "Tədris Planını İncələ",
      hero_btn_join: "Klub Üzvü Ol",
      quick_stats_modules: "Həftəlik Tədris Modulu",
      quick_stats_tools: "İnteqrasiya Edilmiş Alət",
      quick_stats_projects: "Beynəlxalq Layihə",
      quick_stats_events: "Elmi Seminar & Hakaton",
      analysis_title: "Multi-Omiks Gen Dəstinin Aktivasiya Z-Balı Analizi",
      analysis_badge: "OpenKBC Tədqiqat Modulu • Dağınıq Skleroz (MS) Modeli",
      analysis_desc: "Mikromassiv və RNA-Seq gen ekspressiyası verilənlərindən istifadə edərək fenotipik bioloji siqnal yollarının aktivasiya dərəcəsini Junhee Yoon (OpenKBC) alqoritmi əsasında hesablayın.",
      analysis_btn_calc: "Aktivasiya Z-Balını Hesabla",
      analysis_btn_sample: "Nümunə MS Dəstini Yüklə",
      analysis_btn_export: "CSV Kimi İxrac Et",
      announcements_modal_title: "Klub Elanları və Bildirişlər",
      announcements_badge_live: "Aktiv Elanlar",
      rsvp_btn_attending: "Qeydiyyatdan Keçdim",
      rsvp_btn_join: "Tədbirə Qatıl (RSVP)",
      footer_rights: "Bütün hüquqlar qorunur.",
      footer_bilingual_note: "Sayt yalnız Azərbaycan və İngilis dillərində təqdim olunur."
    },
    en: {
      site_title: "CarboxMol Bioinformatics Club | Computational Structural Biology & Genomics",
      lang_name: "English",
      lang_toggle_btn: "AZ",
      nav_home: "Home",
      nav_documents: "Documents",
      nav_curriculum: "Curriculum",
      nav_biotools: "Bio-Tools",
      nav_analysis: "Z-Score Analysis",
      nav_events: "Events",
      nav_collaborators: "Scientists",
      nav_biomeet: "BioMeet",
      nav_announcements: "Announcements",
      nav_register: "Membership",
      nav_member_login: "Member Login",
      nav_teacher_login: "Mentor Login",
      nav_president_login: "President",
      nav_logout: "Logout",
      nav_install_app: "Install",
      nav_access: "Access",
      hero_badge: "Western Caspian University • Official Student Club",
      hero_title: "Shaping the Future of Computational Biology & Genomics",
      hero_desc: "A hands-on research and educational platform for 3D protein modelling, multi-omics data analysis, machine learning, and advanced bioinformatics pipelines.",
      hero_btn_explore: "Explore Curriculum",
      hero_btn_join: "Become a Member",
      quick_stats_modules: "Weekly Modules",
      quick_stats_tools: "Integrated Tools",
      quick_stats_projects: "International Projects",
      quick_stats_events: "Seminars & Hackathons",
      analysis_title: "Multi-Omics Gene Set Activation Z-Score Analysis",
      analysis_badge: "OpenKBC Research Module • Multiple Sclerosis Model",
      analysis_desc: "Calculate phenotypic pathway activation scores from microarray and RNA-Seq gene expression matrices using Junhee Yoon's (OpenKBC) validated Z-score algorithm.",
      analysis_btn_calc: "Compute Activation Z-Score",
      analysis_btn_sample: "Load Sample MS Profile",
      analysis_btn_export: "Export to CSV",
      announcements_modal_title: "Club Announcements & Bulletins",
      announcements_badge_live: "Active Bulletins",
      rsvp_btn_attending: "Registered / Attending",
      rsvp_btn_join: "RSVP to Event",
      footer_rights: "All rights reserved.",
      footer_bilingual_note: "This platform is exclusively provided in Azerbaijani and English."
    }
  };

  var currentLang = localStorage.getItem('carboxmol_lang') || 'az';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'az';
    currentLang = lang;
    localStorage.setItem('carboxmol_lang', lang);
    document.documentElement.lang = lang;

    // Update toggle buttons text
    var labelEls = document.querySelectorAll('.lang-toggle-label');
    labelEls.forEach(function (el) {
      el.textContent = lang === 'az' ? 'EN' : 'AZ';
    });

    var badgeEls = document.querySelectorAll('.lang-active-badge');
    badgeEls.forEach(function (el) {
      el.textContent = lang.toUpperCase();
    });

    // Update elements with data-i18n
    var translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update placeholders with data-i18n-ph
    var placeholders = document.querySelectorAll('[data-i18n-ph]');
    placeholders.forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Update title tags
    if (translations[lang].site_title && location.hash === '' || location.hash === '#home') {
      document.title = translations[lang].site_title;
    }

    // Dispatch global event for other components
    window.dispatchEvent(new CustomEvent('carboxmol:languageChanged', {
      detail: { lang: lang, dict: translations[lang] }
    }));
  }

  function toggleLanguage() {
    var nextLang = currentLang === 'az' ? 'en' : 'az';
    applyLanguage(nextLang);
  }

  // Initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage(currentLang);
  });

  // Expose to window
  window.CarboxMolI18n = {
    getLanguage: function () { return currentLang; },
    setLanguage: applyLanguage,
    toggleLanguage: toggleLanguage,
    t: function (key) {
      return (translations[currentLang] && translations[currentLang][key]) || key;
    },
    translations: translations
  };

  window.toggleLanguage = toggleLanguage;
  window.setLanguage = applyLanguage;
})();
