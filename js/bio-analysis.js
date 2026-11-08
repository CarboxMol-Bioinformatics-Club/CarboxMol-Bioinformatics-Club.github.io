/**
 * CarboxMol Bioinformatics Club - Multi-Omics Gene Set Activation Engine
 * Based on OpenKBC Multiple Sclerosis Project (Junhee Yoon, 2021)
 * Algorithms: Z-Score Gene Set Activation Analysis (get_zscore.py) & Snakemake Workflow
 * License: MIT License (Educational & Research Integration)
 */

(function () {
  'use strict';

  // Benchmark datasets modeled after OpenKBC Multiple Sclerosis microarray & RNA-Seq experiments
  var MS_PATHWAYS = {
    neuroinflammation: {
      name_az: "Neyro-iltihab Siqnal Yolu (Neuroinflammation)",
      name_en: "Neuroinflammation Pathway",
      description_az: "MS xəstəliyində mərkəzi sinir sistemində iltihab yaradan sitokin və transkripsiya faktorları.",
      description_en: "Pro-inflammatory cytokines and transcription factors active in MS neurolesions.",
      genes: ["TNF", "IL6", "IFNG", "STAT1", "CXCL10", "NFKB1", "IL1B", "CCL2", "NOS2", "TLR4"],
      reference_mean: 5.42,
      reference_std: 1.18,
      phenotypes: {
        ms_active: { name: "MS Aktiv Kəskin Ocaq (Active Lesion)", expression: [8.9, 9.4, 7.8, 8.2, 9.1, 7.5, 8.8, 8.0, 7.1, 7.9] },
        ms_chronic: { name: "MS Xroniki Ocaq (Chronic Lesion)", expression: [6.8, 6.5, 5.9, 6.4, 7.0, 6.2, 6.1, 5.8, 5.9, 6.0] },
        control: { name: "Sağlam Nəzarət (Healthy Control)", expression: [5.2, 5.1, 4.9, 5.3, 5.0, 5.5, 4.8, 5.2, 5.1, 5.4] }
      }
    },
    myelin_integrity: {
      name_az: "Mielin Təbəqəsinin Bütövlüyü və Remielinizasiya",
      name_en: "Myelin Integrity & Remyelination",
      description_az: "Akson örtüyü zülalları və oliqodendrosit differensiasiyası markerləri.",
      description_en: "Axonal sheath structural proteins and oligodendrocyte differentiation markers.",
      genes: ["MBP", "MOG", "PLP1", "MOBP", "MAG", "SOX10", "OLIG2", "CNP"],
      reference_mean: 7.85,
      reference_std: 1.35,
      phenotypes: {
        ms_active: { name: "MS Aktiv Kəskin Ocaq (Demielinizasiya)", expression: [3.1, 2.8, 3.4, 2.9, 3.2, 4.0, 4.2, 3.8] },
        ms_chronic: { name: "MS Xroniki Dəyişikliklər", expression: [4.9, 4.5, 5.1, 4.8, 4.6, 5.5, 5.2, 5.0] },
        control: { name: "Sağlam Mielin Toxuması", expression: [8.1, 7.9, 8.4, 7.8, 8.0, 7.6, 7.7, 8.2] }
      }
    },
    bbb_permeability: {
      name_az: "Qan-Beyin Səddi (BBB) Keçiriciliyi və Endotel Adheziyası",
      name_en: "Blood-Brain Barrier (BBB) Permeability & Adhesion",
      description_az: "Qan-beyin səddinin tamlığını və leykosit ekstravazasiyasını tənzimləyən genlər.",
      description_en: "Regulators of blood-brain barrier permeability and endothelial cell extravasation.",
      genes: ["MMP9", "VCAM1", "ICAM1", "PECAM1", "CLDN5", "OCLN", "CDH5"],
      reference_mean: 6.10,
      reference_std: 1.05,
      phenotypes: {
        ms_active: { name: "MS Aktiv Vaskulyar İltihab", expression: [9.2, 8.7, 8.5, 7.9, 4.1, 4.3, 5.0] },
        ms_chronic: { name: "MS Xroniki Vaskulopatiya", expression: [7.2, 7.0, 6.8, 6.5, 5.2, 5.5, 5.8] },
        control: { name: "İntakt Qan-Beyin Səddi", expression: [5.8, 5.9, 6.0, 6.2, 7.5, 7.3, 7.1] }
      }
    },
    tcell_autoimmunity: {
      name_az: "T-Hüceyrəli Autoimmun İnfiltrasiya",
      name_en: "T-Cell Mediated Autoimmunity",
      description_az: "Mərkəzi sinir sisteminə hücum edən patogen T-limfosit reseptorları və tənzimləyicilər.",
      description_en: "T-lymphocyte markers and checkpoint receptors infiltrating the CNS.",
      genes: ["CD4", "CD8A", "IL2RA", "FOXP3", "PTPRC", "CTLA4", "PDCD1"],
      reference_mean: 4.80,
      reference_std: 0.95,
      phenotypes: {
        ms_active: { name: "MS Kəskin T-Hüceyrə İnfiltrasiyası", expression: [8.4, 7.9, 8.6, 5.2, 8.8, 7.4, 7.1] },
        ms_chronic: { name: "MS Rezidual İnfiltrat", expression: [6.1, 5.8, 6.3, 4.9, 6.5, 5.6, 5.4] },
        control: { name: "Norma / İmmun Homestaz", expression: [4.7, 4.6, 4.8, 5.1, 4.9, 4.5, 4.8] }
      }
    }
  };

  /**
   * Junhee Yoon's get_zscore.py mathematical logic:
   * Z = (mean(gene_set) - background_mean) / (background_std / sqrt(len(gene_set)))
   */
  function calculateZScore(expressionVector, backgroundMean, backgroundStd) {
    if (!expressionVector || expressionVector.length === 0) return { z: 0, p: 1, mean: 0 };
    var n = expressionVector.length;
    var sum = expressionVector.reduce(function (a, b) { return a + b; }, 0);
    var mean = sum / n;
    var sem = backgroundStd / Math.sqrt(n);
    var z = (mean - backgroundMean) / sem;
    var p = 2 * (1 - normalCdf(Math.abs(z)));
    return {
      z: parseFloat(z.toFixed(3)),
      p: parseFloat(p.toFixed(5)),
      mean: parseFloat(mean.toFixed(3)),
      sem: parseFloat(sem.toFixed(3)),
      n: n
    };
  }

  // Standard Normal Cumulative Distribution Function (Hastings approximation)
  function normalCdf(x) {
    var b1 = 0.319381530;
    var b2 = -0.356563782;
    var b3 = 1.781477937;
    var b4 = -1.821255978;
    var b5 = 1.330274429;
    var p = 0.2316419;
    var c2 = 0.39894228;
    if (x >= 0.0) {
      var t = 1.0 / (1.0 + p * x);
      return (1.0 - c2 * Math.exp(-x * x / 2.0) * t *
        (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
    } else {
      var t = 1.0 / (1.0 - p * x);
      return (c2 * Math.exp(-x * x / 2.0) * t *
        (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
    }
  }

  // Render SVG Bar Chart of individual gene expression
  function renderExpressionChart(containerId, genes, expression, refMean) {
    var container = document.getElementById(containerId);
    if (!container) return;
    
    var maxVal = Math.max.apply(null, expression.concat([refMean, 10]));
    var barHeight = 24;
    var gap = 8;
    var svgHeight = genes.length * (barHeight + gap) + 40;
    var svgWidth = 500;
    var chartWidth = 320;
    var startX = 90;

    var svgHtml = '<svg viewBox="0 0 ' + svgWidth + ' ' + svgHeight + '" class="w-full h-auto text-xs font-mono select-none">';
    
    // Background Reference Line
    var refX = startX + (refMean / maxVal) * chartWidth;
    svgHtml += '<line x1="' + refX + '" y1="10" x2="' + refX + '" y2="' + (svgHeight - 20) + '" stroke="#14b8a6" stroke-width="1.5" stroke-dasharray="4" />';
    svgHtml += '<text x="' + (refX + 4) + '" y="20" fill="#2dd4bf" font-size="10" font-weight="bold">Ref \u03BC=' + refMean.toFixed(1) + '</text>';

    for (var i = 0; i < genes.length; i++) {
      var gene = genes[i];
      var val = expression[i] || 0;
      var y = 30 + i * (barHeight + gap);
      var w = Math.max(4, (val / maxVal) * chartWidth);
      var isHigh = val >= refMean;
      var barColor = isHigh ? '#0d9488' : '#6366f1';
      var textVal = val.toFixed(2);

      svgHtml += '<text x="' + (startX - 10) + '" y="' + (y + 16) + '" text-anchor="end" fill="#cbd5e1" font-weight="bold" font-size="11">' + gene + '</text>';
      svgHtml += '<rect x="' + startX + '" y="' + y + '" width="' + w + '" height="' + barHeight + '" rx="5" fill="' + barColor + '" class="transition-all duration-300 hover:brightness-125" />';
      svgHtml += '<text x="' + (startX + w + 8) + '" y="' + (y + 16) + '" fill="#94a3b8" font-size="11">' + textVal + '</text>';
    }

    svgHtml += '</svg>';
    container.innerHTML = svgHtml;
  }

  // Main UI Handler
  function updateAnalysis() {
    var pathwayKey = document.getElementById('analysisPathwaySelect') ? document.getElementById('analysisPathwaySelect').value : 'neuroinflammation';
    var phenotypeKey = document.getElementById('analysisPhenotypeSelect') ? document.getElementById('analysisPhenotypeSelect').value : 'ms_active';
    var pathway = MS_PATHWAYS[pathwayKey] || MS_PATHWAYS.neuroinflammation;
    var phenotype = pathway.phenotypes[phenotypeKey] || pathway.phenotypes.ms_active;

    var result = calculateZScore(phenotype.expression, pathway.reference_mean, pathway.reference_std);

    // Update Result DOM
    var zScoreValEl = document.getElementById('analysisZScoreValue');
    var pValueEl = document.getElementById('analysisPValue');
    var statusBadgeEl = document.getElementById('analysisStatusBadge');
    var meanValEl = document.getElementById('analysisMeanValue');

    if (zScoreValEl) zScoreValEl.textContent = (result.z > 0 ? '+' : '') + result.z;
    if (pValueEl) pValueEl.textContent = result.p < 0.0001 ? '< 0.0001' : result.p;
    if (meanValEl) meanValEl.textContent = result.mean;

    if (statusBadgeEl) {
      if (result.z >= 1.96) {
        statusBadgeEl.className = "px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40 inline-flex items-center gap-1.5";
        statusBadgeEl.innerHTML = '<i class="fa-solid fa-arrow-trend-up"></i> Yüksək Aktivləşmə (Activated, Z \u2265 1.96)';
      } else if (result.z <= -1.96) {
        statusBadgeEl.className = "px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 inline-flex items-center gap-1.5";
        statusBadgeEl.innerHTML = '<i class="fa-solid fa-arrow-trend-down"></i> Baskılanma / Süstləşmə (Downregulated, Z \u2264 -1.96)';
      } else {
        statusBadgeEl.className = "px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700 inline-flex items-center gap-1.5";
        statusBadgeEl.innerHTML = '<i class="fa-solid fa-minus"></i> Dəyişməyən / Neytral (Baseline)';
      }
    }

    renderExpressionChart('analysisChartContainer', pathway.genes, phenotype.expression, pathway.reference_mean);
  }

  function exportAnalysisCsv() {
    var pathwayKey = document.getElementById('analysisPathwaySelect').value;
    var phenotypeKey = document.getElementById('analysisPhenotypeSelect').value;
    var pathway = MS_PATHWAYS[pathwayKey] || MS_PATHWAYS.neuroinflammation;
    var phenotype = pathway.phenotypes[phenotypeKey] || pathway.phenotypes.ms_active;
    var result = calculateZScore(phenotype.expression, pathway.reference_mean, pathway.reference_std);

    var rows = [
      ["Gene", "Expression (log2)", "Reference Mean", "Reference SD"],
    ];
    for (var i = 0; i < pathway.genes.length; i++) {
      rows.push([pathway.genes[i], phenotype.expression[i], pathway.reference_mean, pathway.reference_std]);
    }
    rows.push([]);
    rows.push(["Summary Metric", "Value"]);
    rows.push(["Gene Set Mean", result.mean]);
    rows.push(["Composite Z-Score", result.z]);
    rows.push(["P-Value (Two-Tailed)", result.p]);
    rows.push(["Number of Genes", result.n]);
    rows.push(["Phenotype", phenotype.name]);
    rows.push(["Citation", "OpenKBC Multiple Sclerosis Project (Junhee Yoon, 2021)"]);

    var csvContent = "data:text/csv;charset=utf-8," + rows.map(function (e) { return e.join(","); }).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "CarboxMol_ZScore_" + pathwayKey + "_" + phenotypeKey + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // CampusClubs-inspired Announcement and Event RSVP State
  var currentAnnFilter = 'all';

  var INITIAL_ANNOUNCEMENTS = [
    {
      id: "ann_recruitment_2026",
      category: "recruitment",
      badge_az: "🔥 Aktiv Seçim • İdarə Heyəti",
      badge_en: "🔥 Active Hiring • Executive Board",
      title_az: "CarboxMol İdarə Heyətinə 2 Koordinator Seçimi (1 Sədr + 2 Koordinator Modeli)",
      title_en: "CarboxMol Executive Board: 2 Coordinators Recruitment (1 President + 2 Coordinators)",
      date: "2026-11-09",
      image: "assets/images/announcements/coordinator-recruitment.png",
      content_az: "Azərbaycanın ilk ixtisaslaşmış Hesablama Struktur Biologiyası və Bioinformatika Tələbə Klubu ölkə miqyasında inkişaf məqsədilə 2 tələbə koordinator (1. Elm və Tədris, 2. Təşkilat, PR və Media) axtarır. Beynəlxalq alimlərlə əməkdaşlıq, real bio-layihələrdə liderlik və akademik inkişaf imkanları.",
      content_en: "Azerbaijan's premier Computational Structural Biology & Bioinformatics Student Club is recruiting 2 student coordinators (1. Science & Academic Curriculum, 2. Operations, PR & Visual Media). Global research networking, hands-on project leadership, and career growth opportunities."
    },
    {
      id: "ann_01",
      category: "academic",
      badge_az: "Elmi Seminar",
      badge_en: "Academic Seminar",
      title_az: "Oxford & IMB Tədqiqat Perspektivləri: Hesablama Biologiyası və Genomika",
      title_en: "Oxford & IMB Research Perspectives: Computational Biology & Genomics",
      date: "2026-11-15",
      image: "",
      content_az: "Oxford Universiteti və Elm və Təhsil Nazirliyinin Molekulyar Biologiya İnstitutu (IMB) tədqiqatçısı Gülnar Abdullayeva ilə bioinformatika və xərçəng genomikası üzrə xüsusi onlayn elmi seminar.",
      content_en: "Special academic seminar on bioinformatics and cancer genomics with Gülnar Abdullayeva (Oxford University & Institute of Molecular Biology)."
    },
    {
      id: "ann_02",
      category: "tools",
      badge_az: "Yeni Alət",
      badge_en: "New Pipeline Tool",
      title_az: "OpenKBC Dağınıq Skleroz Z-Balı Analiz Mühərriki İnteqrasiya Olundu",
      title_en: "OpenKBC Multiple Sclerosis Z-Score Engine Integrated",
      date: "2026-11-06",
      image: "",
      content_az: "Junhee Yoon tərəfindən hazırlanmış çoxpilləli Snakemake və Z-balı aktivasiya alqoritmi klub platformamızda tələbələrin sərəncamına verildi.",
      content_en: "Multi-omics Snakemake workflow and Z-score activation engine by Junhee Yoon has been integrated into our club web platform."
    },
    {
      id: "ann_03",
      category: "academic",
      badge_az: "Respublika Müsabiqəsi",
      badge_en: "National Contest",
      title_az: "2026 Bioinformatika və Struktur Biologiyası Tələbə Hakatonu",
      title_en: "2026 Bioinformatics & Structural Biology Student Hackathon",
      date: "2026-12-01",
      image: "",
      content_az: "Qərbi Kaspi Universiteti Bioinformatika Klubu komandalarının beynəlxalq və respublika səviyyəli hakatonlara hazırlığı üzrə qeydiyyat davam edir.",
      content_en: "Registration is open for WCU Bioinformatics Club teams preparing for national and international computational biology hackathons."
    }
  ];

  function openAnnouncementsModal() {
    var modal = document.getElementById('announcementsModal');
    if (!modal) return;
    renderAnnouncementsList();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeAnnouncementsModal() {
    var modal = document.getElementById('announcementsModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function filterAnnouncements(category) {
    currentAnnFilter = category || 'all';
    
    // Update button visual styles
    var filterBtns = ['all', 'recruitment', 'academic', 'tools'];
    filterBtns.forEach(function (key) {
      var btn = document.getElementById('annFilter-' + key);
      if (btn) {
        if (key === currentAnnFilter) {
          btn.className = "px-3 py-1.5 rounded-lg text-xs font-bold text-teal-300 bg-teal-500/20 transition whitespace-nowrap";
        } else {
          btn.className = "px-3 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition whitespace-nowrap";
        }
      }
    });

    // Toggle visibility of featured card
    var featured = document.querySelector('.announcement-item.featured-announcement');
    if (featured) {
      if (currentAnnFilter === 'all' || currentAnnFilter === 'recruitment') {
        featured.classList.remove('hidden');
      } else {
        featured.classList.add('hidden');
      }
    }

    renderAnnouncementsList();
  }
  window.filterAnnouncements = filterAnnouncements;

  function renderAnnouncementsList() {
    var lang = (window.CarboxMolI18n && window.CarboxMolI18n.getLanguage()) || 'az';

    // 1. Modal Container List
    var modalContainer = document.getElementById('announcementsListContainer');
    if (modalContainer) {
      var modalHtml = '';
      INITIAL_ANNOUNCEMENTS.forEach(function (ann) {
        var badge = lang === 'en' ? ann.badge_en : ann.badge_az;
        var title = lang === 'en' ? ann.title_en : ann.title_az;
        var content = lang === 'en' ? ann.content_en : ann.content_az;

        modalHtml += '<div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 hover:border-teal-500/50 transition">';
        modalHtml += '  <div class="flex items-center justify-between gap-2">';
        modalHtml += '    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40">' + badge + '</span>';
        modalHtml += '    <span class="text-[11px] font-mono text-slate-400">' + ann.date + '</span>';
        modalHtml += '  </div>';
        modalHtml += '  <h4 class="text-sm font-bold text-white">' + title + '</h4>';
        modalHtml += '  <p class="text-xs text-slate-300 leading-relaxed">' + content + '</p>';
        modalHtml += '</div>';
      });
      modalContainer.innerHTML = modalHtml;
    }

    // 2. Full-page Announcements Grid (#announcementsPageGrid)
    var pageGrid = document.getElementById('announcementsPageGrid');
    if (pageGrid) {
      var filteredList = INITIAL_ANNOUNCEMENTS.filter(function (ann) {
        if (currentAnnFilter === 'all') return true;
        return ann.category === currentAnnFilter;
      });

      if (filteredList.length === 0) {
        pageGrid.innerHTML = '<div class="col-span-full py-10 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-slate-800">' +
          '<i class="fa-solid fa-bullhorn text-2xl text-slate-600 mb-2 block"></i>' +
          '<p class="text-xs font-semibold">' + (lang === 'en' ? 'No announcements found in this category.' : 'Bu kateqoriyada elan tapılmadı.') + '</p>' +
          '</div>';
        return;
      }

      var gridHtml = '';
      filteredList.forEach(function (ann) {
        var badge = lang === 'en' ? ann.badge_en : ann.badge_az;
        var title = lang === 'en' ? ann.title_en : ann.title_az;
        var content = lang === 'en' ? ann.content_en : ann.content_az;

        gridHtml += '<div class="glass-panel p-5 rounded-2xl border border-slate-800 bg-slate-900/80 hover:border-teal-500/50 transition flex flex-col justify-between space-y-4 shadow-lg group">';
        gridHtml += '  <div class="space-y-3">';
        
        if (ann.image) {
          gridHtml += '    <div class="relative overflow-hidden rounded-xl border border-slate-800 aspect-video bg-slate-950">';
          gridHtml += '      <img src="' + ann.image + '" alt="' + title + '" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />';
          gridHtml += '    </div>';
        }

        gridHtml += '    <div class="flex items-center justify-between gap-2">';
        gridHtml += '      <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">' + badge + '</span>';
        gridHtml += '      <span class="text-[11px] font-mono text-slate-400">' + ann.date + '</span>';
        gridHtml += '    </div>';
        gridHtml += '    <h4 class="text-sm sm:text-base font-extrabold text-white group-hover:text-teal-300 transition leading-snug">' + title + '</h4>';
        gridHtml += '    <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">' + content + '</p>';
        gridHtml += '  </div>';

        gridHtml += '  <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">';
        if (ann.category === 'recruitment') {
          gridHtml += '    <button onclick="navigateTo(\'register\')" class="px-3.5 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition">';
          gridHtml += '      <i class="fa-solid fa-user-plus text-xs"></i> <span>' + (lang === 'en' ? 'Join the Club' : 'Kluba Üzv Ol') + '</span>';
          gridHtml += '    </button>';
        } else if (ann.category === 'tools') {
          gridHtml += '    <button onclick="navigateTo(\'biotools\')" class="px-3.5 py-1.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 font-bold text-xs flex items-center gap-1.5 transition">';
          gridHtml += '      <i class="fa-solid fa-flask-vial text-xs"></i> <span>' + (lang === 'en' ? 'Try Bio-Tool' : 'Bio-Alətə Keç') + '</span>';
          gridHtml += '    </button>';
        } else {
          gridHtml += '    <button onclick="navigateTo(\'events\')" class="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs flex items-center gap-1.5 transition">';
          gridHtml += '      <i class="fa-solid fa-calendar-check text-xs text-teal-400"></i> <span>' + (lang === 'en' ? 'View Event' : 'Tədbirə Bax') + '</span>';
          gridHtml += '    </button>';
        }
        gridHtml += '    <span class="text-[11px] font-mono text-slate-500">#' + ann.id + '</span>';
        gridHtml += '  </div>';
        gridHtml += '</div>';
      });

      pageGrid.innerHTML = gridHtml;
    }
  }

  window.addEventListener('carboxmol:languageChanged', function () {
    renderAnnouncementsList();
  });

  // Event RSVP functionality inspired by CampusClubs
  function toggleRsvp(eventId) {
    var rsvps = JSON.parse(localStorage.getItem('carboxmol_rsvps') || '{}');
    var isRsvped = !rsvps[eventId];
    rsvps[eventId] = isRsvped;
    localStorage.setItem('carboxmol_rsvps', JSON.stringify(rsvps));

    var btn = document.getElementById('rsvpBtn_' + eventId);
    var countEl = document.getElementById('rsvpCount_' + eventId);
    var lang = (window.CarboxMolI18n && window.CarboxMolI18n.getLanguage()) || 'az';

    if (btn) {
      if (isRsvped) {
        btn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        btn.classList.remove('bg-slate-900', 'text-teal-300');
        btn.innerHTML = '<i class="fa-solid fa-check"></i> ' + (lang === 'en' ? 'Registered' : 'Qeydiyyatdan Keçdiniz');
      } else {
        btn.classList.remove('bg-emerald-600', 'text-white', 'border-emerald-500');
        btn.classList.add('bg-slate-900', 'text-teal-300');
        btn.innerHTML = '<i class="fa-solid fa-calendar-plus"></i> ' + (lang === 'en' ? 'RSVP' : 'Qatılacağam');
      }
    }

    if (countEl) {
      var base = parseInt(countEl.getAttribute('data-base') || '18', 10);
      countEl.textContent = base + (isRsvped ? 1 : 0);
    }
  }

  // Initialize on load
  document.addEventListener('DOMContentLoaded', function () {
    var calcBtn = document.getElementById('analysisComputeBtn');
    if (calcBtn) calcBtn.addEventListener('click', updateAnalysis);

    var exportBtn = document.getElementById('analysisExportBtn');
    if (exportBtn) exportBtn.addEventListener('click', exportAnalysisCsv);

    var pathwaySelect = document.getElementById('analysisPathwaySelect');
    if (pathwaySelect) pathwaySelect.addEventListener('change', updateAnalysis);

    var phenotypeSelect = document.getElementById('analysisPhenotypeSelect');
    if (phenotypeSelect) phenotypeSelect.addEventListener('change', updateAnalysis);

    // Initial calculation if container is present
    if (document.getElementById('analysisChartContainer')) {
      updateAnalysis();
    }

    renderAnnouncementsList();
  });

  // Export functions
  window.BioAnalysisEngine = {
    calculateZScore: calculateZScore,
    updateAnalysis: updateAnalysis,
    exportAnalysisCsv: exportAnalysisCsv,
    openAnnouncementsModal: openAnnouncementsModal,
    closeAnnouncementsModal: closeAnnouncementsModal,
    toggleRsvp: toggleRsvp
  };

  window.openAnnouncementsModal = openAnnouncementsModal;
  window.closeAnnouncementsModal = closeAnnouncementsModal;
  window.toggleRsvp = toggleRsvp;
})();
