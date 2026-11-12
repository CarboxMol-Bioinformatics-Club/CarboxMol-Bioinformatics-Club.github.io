/**
 * CarboxMol Bioinformatics Club - Automated SEO & Responsive Device Adaptation Engine
 * Architect-level system ensuring 100% responsiveness across all OS, devices & display modes (Web & PWA),
 * and automatic SEO synchronization (Schema.org JSON-LD, OpenGraph, Twitter, canonical, breadcrumbs, i18n meta).
 */

(function () {
  'use strict';

  var SEO_METADATA = {
    home: {
      path: "",
      title_az: "CarboxMol Bioinformatika Klubu | Hesablama Biologiyası, Genomika & Süni İntellekt Mərkəzi",
      title_en: "CarboxMol Bioinformatics Club | Computational Biology, Genomics & AI Center",
      desc_az: "Qərbi Kaspi Universiteti və AR ETN Molekulyar Biologiya İnstitutu (IMB) əməkdaşlığı ilə hesablama struktur biologiyası, AlphaFold, PyMOL, Python, R və multi-omiks tədqiqat və tədris platforması.",
      desc_en: "Official student research and education platform by Western Caspian University & Institute of Molecular Biology (IMB) for computational structural biology, AlphaFold, PyMOL, and multi-omics.",
      keywords: "CarboxMol, bioinformatika, hesablama biologiyası, computational biology, genomics, structural biology, AlphaFold, PyMOL, WCU, IMB, Süleyman Hacızadə, Qərib Mürşüdov",
      breadcrumb_az: "Ana Səhifə",
      breadcrumb_en: "Home"
    },
    documents: {
      path: "documents/",
      title_az: "Rəsmi Sənədlər, Əsasnamə və Tədris Paketi | CarboxMol Bioinformatika Klubu",
      title_en: "Official Documents, Bylaws & Curriculum Package | CarboxMol Bioinformatics Club",
      desc_az: "Qərbi Kaspi Universiteti Bioinformatika Klubunun rəsmi nizamnaməsi, əsasnaməsi, illik 28 həftəlik fəaliyyət planı və təşkilati struktur sənədləri paketi (PDF & DOCX).",
      desc_en: "Official bylaws, organizational structure, 28-week annual activity plan, and syllabus documents for the Western Caspian University Bioinformatics Club (PDF & DOCX).",
      keywords: "CarboxMol sənədlər, klub əsasnaməsi, nizamnamə, illik fəaliyyət planı, bioinformatika sillabus, WCU tələbə klubu sənədləri",
      breadcrumb_az: "Rəsmi Sənədlər",
      breadcrumb_en: "Official Documents"
    },
    curriculum: {
      path: "curriculum/",
      title_az: "28 Həftəlik Akademik Tədris Planı & Laboratoriya Sillabusu | CarboxMol Bioinformatika Klubu",
      title_en: "28-Week Academic Curriculum & Laboratory Syllabus | CarboxMol Bioinformatics Club",
      desc_az: "Python, Biopython, R Bioconductor, DESeq2, Linux/Bash, zülalların 3D modelləşdirilməsi (AlphaFold, PyMOL, ChimeraX, Carbox & CarboxMol) və maşın öyrənməsi üzrə 2 semestrlik tədris proqramı.",
      desc_en: "Comprehensive 2-semester academic program covering Python, Biopython, R Bioconductor, DESeq2, Linux/Bash, 3D macromolecular modelling (AlphaFold, PyMOL, CarboxMol), and machine learning.",
      keywords: "bioinformatika kurrikulum, sillabus, Python biologiya, R Bioconductor, DESeq2, AlphaFold tədrisi, struktur biologiya dərsləri",
      breadcrumb_az: "Tədris Planı (Sillabus)",
      breadcrumb_en: "Curriculum (Syllabus)"
    },
    biotools: {
      path: "biotools/",
      title_az: "Canlı Bio-Alətlər, Bioconductor Hub & OpenKBC Z-Balı | CarboxMol Bioinformatika Klubu",
      title_en: "Live Bio-Tools, Bioconductor Hub & OpenKBC Z-Score | CarboxMol Bioinformatics Club",
      desc_az: "İnteraktiv bioinformatika platforması: OpenKBC Dağınıq Skleroz Z-balı mühərriki, Snakemake 6-mərhələli boru kəməri, DNT SeqAnalyzer və 3D makromolekulyar vizualizator.",
      desc_en: "Interactive bioinformatics suite featuring OpenKBC Multiple Sclerosis activation Z-score calculator, Snakemake 6-stage pipeline, DNA SeqAnalyzer, and 3D molecular viewer.",
      keywords: "OpenKBC Z-score, Dağınıq Skleroz analizi, Bioconductor paketləri, SeqAnalyzer, DNT transkripsiya, Snakemake pipeline",
      breadcrumb_az: "Bio-Alətlər və Tədqiqat Mərkəzi",
      breadcrumb_en: "Bio-Tools & Research Center"
    },
    resources: {
      path: "resources/",
      title_az: "Elmi Resurslar və Rəqəmsal Kitabxana | CarboxMol Bioinformatika Klubu",
      title_en: "Scientific Resources & Digital Library | CarboxMol Bioinformatics Club",
      desc_az: "Bioinformatika, Molekulyar Biologiya, Biokimya və Genetika üzrə qlobal və yerli akademik dərsliklər, vəsaitlər və metodik bazası.",
      desc_en: "Digital scientific library offering curated textbooks, references, and publications across Bioinformatics, Molecular Biology, Biochemistry, and Genetics in English and Azerbaijani.",
      keywords: "bioinformatika dərslikləri, molekulyar biologiya kitabları, Alberts MBoC, Lehninger biokimya, genetika vəsaitləri, Qərbi Kaspi Universiteti kitabxana",
      breadcrumb_az: "Elmi Resurslar və Kitabxana",
      breadcrumb_en: "Resources & Digital Library"
    },
    events: {
      path: "events/",
      title_az: "Elmi Seminarlar, Vorkşoplar və Journal Club | CarboxMol Bioinformatika Klubu",
      title_en: "Academic Seminars, Workshops & Journal Club | CarboxMol Bioinformatics Club",
      desc_az: "Prof. Qərib Mürşüdov (Cambridge MRC LMB) və beynəlxalq alimlərin iştirakı ilə elmi seminarlar, laboratoriya vörkşopları, Journal Club və tələbə hakatonları.",
      desc_en: "Scientific seminars, laboratory workshops, Journal Club meetings, and student hackathons with international scientists including Prof. Garib Murshudov (Cambridge MRC LMB).",
      keywords: "bioinformatika seminarları, Qərib Mürşüdov mühazirə, Journal Club, beynəlxalq elmi vorkşop, hakaton 2026",
      breadcrumb_az: "Tədbirlər və Seminarlar",
      breadcrumb_en: "Events & Seminars"
    },
    collaborators: {
      path: "collaborators/",
      title_az: "Beynəlxalq və Yerli Alimlər Şəbəkəsi | CarboxMol Bioinformatika Klubu",
      title_en: "International & Local Scientists Network | CarboxMol Bioinformatics Club",
      desc_az: "Cambridge Universiteti MRC LMB, Oxford Universiteti, AR Elm və Təhsil Nazirliyinin Molekulyar Biologiya İnstitutu və Qərbi Kaspi Universiteti alimləri ilə birgə elmi şəbəkə.",
      desc_en: "Academic collaboration network connecting scientists from Cambridge University MRC LMB, Oxford University, Institute of Molecular Biology, and Western Caspian University.",
      keywords: "Cambridge MRC LMB, Oxford bioinformatika, elmi əməkdaşlar, beynəlxalq mentorlar, Molekulyar Biologiya İnstitutu",
      breadcrumb_az: "Alimlər və Əməkdaşlar",
      breadcrumb_en: "Scientists & Collaborators"
    },
    biomeet: {
      path: "biomeet/",
      title_az: "CarboxMol BioMeet: Canlı Studiya və Dərs Zalı | CarboxMol Bioinformatika Klubu",
      title_en: "CarboxMol BioMeet: Live Studio & Virtual Classroom | CarboxMol Bioinformatics Club",
      desc_az: "Tələbə və alimlər üçün inteqrasiya olunmuş WebRTC canlı video konfrans, virtual seminar zalları, ekran paylaşımı və laboratoriya qeydləri arxivi.",
      desc_en: "Integrated WebRTC live video room, virtual lecture halls, screen sharing, and laboratory session recordings archive for bioinformatics students and researchers.",
      keywords: "BioMeet, canlı dərs zalı, bioinformatika vebinar, WebRTC studiya, virtual laboratoriya otağı",
      breadcrumb_az: "BioMeet Studiya",
      breadcrumb_en: "BioMeet Studio"
    },
    register: {
      path: "register/",
      title_az: "Kluba Üzvlük və Qeydiyyat Forması | CarboxMol Bioinformatika Klubu",
      title_en: "Club Membership & Registration Application | CarboxMol Bioinformatics Club",
      desc_az: "Qərbi Kaspi Universiteti və respublikanın bütün ali məktəb tələbələri üçün CarboxMol Bioinformatika Klubuna rəsmi qeydiyyat və üzvlük müraciət forması.",
      desc_en: "Official membership registration and application portal for students of Western Caspian University and universities across Azerbaijan.",
      keywords: "bioinformatika klubuna qeydiyyat, tələbə üzvlük forması, WCU qeydiyyat, bioinformatika təhsili",
      breadcrumb_az: "Kluba Üzvlük",
      breadcrumb_en: "Club Membership"
    },
    "members-portal": {
      path: "#members-portal",
      title_az: "Tələbə Üzv Şəxsi Kabineti & Tapşırıqlar Portalı | CarboxMol Bioinformatika Klubu",
      title_en: "Student Member Portal & Laboratory Tasks | CarboxMol Bioinformatics Club",
      desc_az: "Klub üzvləri üçün fərdi laboratoriya tapşırıqları, elmi müzakirələr, irəliləyiş göstəriciləri və nailiyyət sertifikatları daxili idarəetmə kabineti.",
      desc_en: "Internal student member dashboard for individual laboratory tasks, scientific discussions, progress tracking, and certificates.",
      keywords: "tələbə kabineti, üzv portalı, laboratoriya tapşırıqları, CarboxMol üzvlük",
      breadcrumb_az: "Üzvlər Paneli",
      breadcrumb_en: "Members Portal"
    },
    "teacher-portal": {
      path: "#teacher-portal",
      title_az: "Müəllim və Mentor İdarəetmə Paneli | CarboxMol Bioinformatika Klubu",
      title_en: "Teacher & Mentor Management Portal | CarboxMol Bioinformatics Club",
      desc_az: "Müəllim və mentorlar üçün tələbə qiymətləndirməsi, laboratoriya tapşırıqlarının yoxlanılması və kurrikulum tədris qeydləri mərkəzi.",
      desc_en: "Mentor and instructor portal for grading student assignments, reviewing laboratory code, and monitoring curriculum delivery.",
      keywords: "müəllim paneli, mentor portalı, laboratoriya qiymətləndirmə, tədris idarəçiliyi",
      breadcrumb_az: "Müəllim Paneli",
      breadcrumb_en: "Mentor Portal"
    },
    "president-portal": {
      path: "#president-portal",
      title_az: "Klub Sədri Rəhbərlik Paneli | CarboxMol Bioinformatika Klubu",
      title_en: "Club President Leadership Portal | CarboxMol Bioinformatics Club",
      desc_az: "Klub Sədri Süleyman Hacızadə üçün rəsmi tələbə müraciətlərinin təsdiqi, tələbə və müəllim heyətinin idarə edilməsi və bulud sinxronizasiyası.",
      desc_en: "Presidential portal for founder Suleyman Hajizadeh to review applications, manage member and faculty rosters, and supervise cloud data sync.",
      keywords: "sədr paneli, klub idarəetmə, rəhbərlik kabineti, müraciətlərin təsdiqi",
      breadcrumb_az: "Sədr Paneli",
      breadcrumb_en: "President Portal"
    }
  };

  var BASE_URL = "https://carboxmol-bioinformatics-club.github.io/";
  var currentRoute = "home";
  var deviceInfo = {};

  // Device & OS Diagnostic Engine
  function detectEnvironment() {
    var width = window.innerWidth || document.documentElement.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight;
    var ua = navigator.userAgent || "";
    var isPwa = window.matchMedia('(display-mode: standalone)').matches ||
                 navigator.standalone === true ||
                 document.referrer.includes('android-app://');

    // Categorize device
    var device = "desktop";
    if (width < 640) device = "mobile";
    else if (width < 1024) device = "tablet";
    else if (width < 1440) device = "laptop";
    else device = "desktop";

    // Detect OS
    var os = "other";
    if (/iPhone|iPad|iPod/i.test(ua)) os = "ios";
    else if (/Android/i.test(ua)) os = "android";
    else if (/Macintosh|Mac OS X/i.test(ua)) os = "macos";
    else if (/Windows NT/i.test(ua)) os = "windows";
    else if (/Linux/i.test(ua)) os = "linux";

    var orientation = width > height ? "landscape" : "portrait";
    var hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    deviceInfo = {
      width: width,
      height: height,
      device: device,
      os: os,
      isPwa: isPwa,
      orientation: orientation,
      hasTouch: hasTouch,
      dpr: window.devicePixelRatio || 1
    };

    // Apply attributes to root for CSS responsive styling
    var root = document.documentElement;
    root.setAttribute('data-device', device);
    root.setAttribute('data-os', os);
    root.setAttribute('data-display', isPwa ? 'standalone' : 'browser');
    root.setAttribute('data-orientation', orientation);
    root.setAttribute('data-touch', hasTouch ? 'true' : 'false');

    // Notify listeners
    window.dispatchEvent(new CustomEvent('app:responsiveUpdate', { detail: deviceInfo }));

    return deviceInfo;
  }

  // Schema.org Dynamic JSON-LD Updater
  function updateStructuredData(route, lang) {
    var meta = SEO_METADATA[route] || SEO_METADATA.home;
    var currentTitle = lang === 'en' ? meta.title_en : meta.title_az;
    var currentDesc = lang === 'en' ? meta.desc_en : meta.desc_az;
    var fullUrl = BASE_URL + meta.path;

    var breadcrumbsList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": lang === 'en' ? "Home" : "Ana Səhifə",
          "item": BASE_URL
        }
      ]
    };

    if (route !== "home") {
      breadcrumbsList.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": lang === 'en' ? meta.breadcrumb_en : meta.breadcrumb_az,
        "item": fullUrl
      });
    }

    var schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        breadcrumbsList,
        {
          "@type": "WebPage",
          "@id": fullUrl,
          "url": fullUrl,
          "name": currentTitle,
          "description": currentDesc,
          "inLanguage": lang === 'en' ? "en" : "az",
          "isPartOf": {
            "@type": "WebSite",
            "@id": BASE_URL + "#website",
            "name": "CarboxMol Bioinformatics Club",
            "url": BASE_URL
          }
        }
      ]
    };

    // Update or insert script
    var existingSchema = document.getElementById('dynamicSeoSchema');
    if (!existingSchema) {
      existingSchema = document.createElement('script');
      existingSchema.id = 'dynamicSeoSchema';
      existingSchema.type = 'application/ld+json';
      document.head.appendChild(existingSchema);
    }
    existingSchema.textContent = JSON.stringify(schemaGraph, null, 2);
  }

  // SEO Synchronization Routine
  function syncSeo(route) {
    if (!route) route = "home";
    currentRoute = route;

    var lang = (window.CarboxMolI18n && window.CarboxMolI18n.getLanguage()) || localStorage.getItem('carboxmol_lang') || 'az';
    var meta = SEO_METADATA[route] || SEO_METADATA.home;

    var title = lang === 'en' ? meta.title_en : meta.title_az;
    var description = lang === 'en' ? meta.desc_en : meta.desc_az;
    var canonicalUrl = BASE_URL + meta.path;

    // 1. Title
    document.title = title;

    // 2. Meta Description & Keywords
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', meta.keywords);

    // 3. OpenGraph tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:locale', lang === 'en' ? 'en_US' : 'az_AZ');

    // 4. Twitter tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 5. Canonical Link
    var canon = document.querySelector('link[rel="canonical"]');
    if (!canon) {
      canon = document.createElement('link');
      canon.rel = 'canonical';
      document.head.appendChild(canon);
    }
    canon.href = canonicalUrl;

    // 6. Alternate Hreflang
    setHreflang('az', canonicalUrl);
    setHreflang('en', canonicalUrl);
    setHreflang('x-default', canonicalUrl);

    // 7. Structured JSON-LD
    updateStructuredData(route, lang);
  }

  function setMetaTag(attrName, attrValue, content) {
    var el = document.querySelector('meta[' + attrName + '="' + attrValue + '"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function setHreflang(lang, url) {
    var el = document.querySelector('link[rel="alternate"][hreflang="' + lang + '"]');
    if (!el) {
      el = document.createElement('link');
      el.rel = 'alternate';
      el.hreflang = lang;
      document.head.appendChild(el);
    }
    el.href = url;
  }

  // Setup Responsive Listeners
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(detectEnvironment, 100);
  });

  window.addEventListener('orientationchange', function () {
    setTimeout(detectEnvironment, 150);
  });

  window.addEventListener('carboxmol:languageChanged', function (e) {
    syncSeo(currentRoute);
  });

  window.addEventListener('hashchange', function () {
    var hash = (window.location.hash || '#home').replace('#', '');
    syncSeo(hash);
  });

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    detectEnvironment();
    var initialRoute = (window.location.hash || '#home').replace('#', '');
    syncSeo(initialRoute);
  });

  window.SeoResponsiveEngine = {
    detectEnvironment: detectEnvironment,
    getDeviceInfo: function () { return deviceInfo; },
    syncSeo: syncSeo,
    getCurrentRoute: function () { return currentRoute; },
    SEO_METADATA: SEO_METADATA
  };
})();
