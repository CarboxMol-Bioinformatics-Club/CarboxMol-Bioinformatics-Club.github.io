/**
 * CarboxMol Bioinformatics Club - Scientific Library & Academic Resources
 * Curated digital collection of Molecular Biology, Genetics, and Bioinformatics textbooks
 * (Bilingual Azerbaijani & English with real-time search, field filtering, and interactive details)
 */

(function () {
  'use strict';

  var BOOKS_DATABASE = [
    // -------------------------------------------------------------
    // BIOINFORMATICS & COMPUTATIONAL BIOLOGY (ENGLISH & AZERBAIJANI)
    // -------------------------------------------------------------
    {
      id: "book-mount-bioinformatics",
      title_az: "Bioinformatika: Ardıcıllıq və Genom Analizi",
      title_en: "Bioinformatics: Sequence and Genome Analysis",
      author: "David W. Mount",
      edition: "2nd Edition",
      year: "2004",
      publisher: "Cold Spring Harbor Laboratory Press",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-teal-800 to-slate-900",
      accent: "teal",
      isbn: "978-087969687-0",
      pages: "692",
      description_az: "Hesablama biologiyasının və ardıcıllıq analitikasının qızıl standartı. BLAST, FASTA, Smith-Waterman alqoritmləri, filogenetik ağaclar və HMM ehtimal modelləri dərindən izah edilir.",
      description_en: "The classic reference in sequence analysis and genome analytics, covering pairwise alignments, BLAST, dynamic programming, Markov models, and evolutionary trees.",
      topics: ["Ardıcıllıq Düzləndirilməsi", "BLAST & FASTA", "Filogenetika", "HMM Modelləri", "Genom Xəritələnməsi"],
      topics_en: ["Sequence Alignment", "BLAST & FASTA", "Phylogenetics", "Hidden Markov Models", "Genome Mapping"],
      link: "https://www.cshlpress.com/default.tpl?action=full&--eqskudatarq=394",
      link_type: "Publisher / CSHL Press"
    },
    {
      id: "book-pevsner-genomics",
      title_az: "Bioinformatika və Funksional Genomika",
      title_en: "Bioinformatics and Functional Genomics",
      author: "Jonathan Pevsner",
      edition: "3rd Edition",
      year: "2015",
      publisher: "Wiley-Blackwell",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-cyan-800 to-blue-950",
      accent: "cyan",
      isbn: "978-111858178-0",
      pages: "1160",
      description_az: "Tələbələr və tədqiqatçılar üçün ən əhatəli və müasir dərslik. NCBI məlumat bazaları, NGS RNT-Seq analizi, mikromasivlər, proteomika və sistem biologiyası dərindən əhatə olunub.",
      description_en: "Comprehensive guide bridging biological questions with computational tools: NCBI tools, Next-Generation Sequencing (NGS), RNA-Seq, proteome maps, and systems biology.",
      topics: ["NCBI & Ensembl", "NGS Analizi", "RNT-Seq", "Funksional Genomika", "Proteomika"],
      topics_en: ["NCBI & Ensembl", "NGS Analysis", "RNA-Seq", "Functional Genomics", "Proteomics"],
      link: "https://www.wiley.com/en-us/Bioinformatics+and+Functional+Genomics%2C+3rd+Edition-p-9781118581780",
      link_type: "Wiley / Academic Reference"
    },
    {
      id: "book-bourne-structural-bioinfo",
      title_az: "Struktur Bioinformatika",
      title_en: "Structural Bioinformatics",
      author: "Jenny Gu, Philip E. Bourne",
      edition: "2nd Edition",
      year: "2009",
      publisher: "Wiley-Blackwell",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-indigo-800 to-slate-950",
      accent: "indigo",
      isbn: "978-047018105-8",
      pages: "1064",
      description_az: "3D zülal strukturları, koordinat sistemləri (PDB, mmCIF), molekulyar dokinq, zülal-zülal və zülal-liqand qarşılıqlı təsirləri üzrə təməl ensiklopedik vəsait.",
      description_en: "Definitive volume on macromolecular structure analysis, PDB architectures, homology modeling, drug discovery docking, and structural dynamics.",
      topics: ["PDB & mmCIF", "3D Zülal Strukturu", "Molekulyar Dokinq", "Homologiya Modelləşdirməsi", "Dərman Dizaynı"],
      topics_en: ["PDB & mmCIF", "3D Protein Structures", "Molecular Docking", "Homology Modeling", "Drug Design"],
      link: "https://onlinelibrary.wiley.com/doi/book/10.1002/9780470470855",
      link_type: "Wiley Online Library"
    },
    {
      id: "book-bassi-python-bioinfo",
      title_az: "Bioinformatika Üçün Python Proqramlaşdırması",
      title_en: "Python for Bioinformatics",
      author: "Sebastian Bassi",
      edition: "2nd Edition",
      year: "2017",
      publisher: "Chapman & Hall / CRC Press",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-emerald-800 to-teal-950",
      accent: "emerald",
      isbn: "978-113856667-5",
      pages: "584",
      description_az: "Bioloqlar üçün praktiki Python proqramlaşdırması: Biopython kitabxanası, FASTA/GenBank fayllarının oxunması, transkripsiya, translyasiya və veb skreyperinq.",
      description_en: "Hands-on programming guide tailored for biological data: Biopython, sequence parsing, REST APIs, and automated bioinformatics workflows.",
      topics: ["Python 3", "Biopython", "FASTA/GenBank Parsing", "Genetik Kod Analizi", "Avtomatlaşdırma"],
      topics_en: ["Python 3", "Biopython", "FASTA/GenBank Parsing", "Genetic Code Processing", "Automation"],
      link: "https://www.routledge.com/Python-for-Bioinformatics/Bassi/p/book/9781138566675",
      link_type: "CRC Press"
    },
    {
      id: "book-az-bioinfo-esaslari",
      title_az: "Bioinformatikanın Əsasları və Genom Texnologiyaları",
      title_en: "Fundamentals of Bioinformatics & Genome Technologies",
      author: "İ.Ə. Əhmədov, İ.M. Hüseynova və b.",
      edition: "Tədris Vəsaiti",
      year: "2019",
      publisher: "Bakı Universiteti Nəşriyyatı",
      category: "bioinformatics",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-emerald-900 to-slate-900",
      accent: "emerald",
      isbn: "978-9952-518-24-1",
      pages: "348",
      description_az: "Ali məktəblərin biologiya, biotexnologiya və tibb ixtisasları üçün Azərbaycan dilində yazılmış bioinformatika və genomika dərslik-vəsaiti. DNT verilənlər bazaları və alqoritmlər.",
      description_en: "Academic textbook in Azerbaijani language for university students covering computational genomics, biological databases, and sequence processing fundamentals.",
      topics: ["Bioinformatikaya Giriş", "Bioloji Verilənlər Bazası", "DNT Ardıcıllıqları", "Genomika", "Tələbə Vəsaiti"],
      topics_en: ["Introduction to Bioinformatics", "Biological Databases", "DNA Sequences", "Genomics", "Azerbaijani Coursebook"],
      link: "#resources",
      link_type: "Universitet Arxivi / Metodik Vəsait"
    },

    // -------------------------------------------------------------
    // MOLECULAR BIOLOGY & BIOCHEMISTRY (ENGLISH & AZERBAIJANI)
    // -------------------------------------------------------------
    {
      id: "book-alberts-mboc",
      title_az: "Hüceyrənin Molekulyar Biologiyası (MBoC)",
      title_en: "Molecular Biology of the Cell (MBoC)",
      author: "Bruce Alberts, Rebecca Heald, Alexander Johnson et al.",
      edition: "7th Edition",
      year: "2022",
      publisher: "W. W. Norton & Company / Garland Science",
      category: "molecular_biology",
      language: "en",
      lang_label: "English",
      cover_color: "from-blue-800 to-indigo-950",
      accent: "blue",
      isbn: "978-039388482-1",
      pages: "1552",
      description_az: "Dünyanın 1 nömrəli molekulyar biologiya klassiki. Hüceyrə strukturu, DNT replikasiyası, gen ifadəsinin tənzimlənməsi, zülal sintezi və siqnal kaskadları ən yüksək dəqiqliklə izah edilir.",
      description_en: "The quintessential molecular biology textbook globally. Details internal architecture of the cell, DNA repair, transcription networks, cell cycle, and intercellular communication.",
      topics: ["DNT Replikasiyası & Təmiri", "Transkripsiya & Translyasiya", "Zülal Nəqli", "Hüceyrə Dövrü", "Siqnal İntiqalı"],
      topics_en: ["DNA Replication & Repair", "Transcription & Translation", "Protein Sorting", "Cell Cycle", "Signal Transduction"],
      link: "https://wwnorton.com/books/9780393884821",
      link_type: "Official Norton Catalog"
    },
    {
      id: "book-lehninger-biochemistry",
      title_az: "Lehninger Biokimyanın Əsasları",
      title_en: "Lehninger Principles of Biochemistry",
      author: "David L. Nelson, Michael M. Cox",
      edition: "8th Edition",
      year: "2021",
      publisher: "Macmillan Learning / W. H. Freeman",
      category: "biochemistry",
      language: "en",
      lang_label: "English",
      cover_color: "from-amber-800 to-stone-950",
      accent: "amber",
      isbn: "978-131922800-2",
      pages: "1328",
      description_az: "Biokimyanın dünya miqyasında ən nüfuzlu tədris qaynağı. Amin turşuları, ferment kinetikası, metabolik yollar, bioenergetika və molekulyar mexanizmlər.",
      description_en: "The gold standard in biochemistry education, integrating clear metabolic pathway logic, enzyme kinetics, bioenergetics, and molecular structures.",
      topics: ["Zülallar & Fermentlər", "Qlikoliz & Krebs Dövrü", "Bioenergetika", "Lipidlər & Membranlar", "Nuklein Turşuları"],
      topics_en: ["Proteins & Enzymes", "Glycolysis & Krebs Cycle", "Bioenergetics", "Lipids & Membranes", "Nucleic Acids"],
      link: "https://www.macmillanlearning.com/college/us/product/Lehninger-Principles-of-Biochemistry/p/1319228003",
      link_type: "Macmillan Learning"
    },
    {
      id: "book-lodish-cell-biology",
      title_az: "Molekulyar Hüceyrə Biologiyası",
      title_en: "Molecular Cell Biology",
      author: "Harvey Lodish, Arnold Berk, Chris A. Kaiser et al.",
      edition: "9th Edition",
      year: "2021",
      publisher: "W. H. Freeman / Macmillan Learning",
      category: "molecular_biology",
      language: "en",
      lang_label: "English",
      cover_color: "from-sky-800 to-slate-950",
      accent: "sky",
      isbn: "978-131920852-3",
      pages: "1264",
      description_az: "Tədqiqat metodları və eksperimental dəlillər üzərində qurulmuş nüfuzlu elmi vəsait. Genom quruluşu, karsinogenez, immunologiya və mikroskopiya texnikaları.",
      description_en: "Focuses on experimental biology, genomics, stem cells, immunology, neurobiology, and molecular mechanisms behind human diseases.",
      topics: ["Molekulyar Genetika", "Hüceyrə Membranları", "Karsinogenez", "İmmunologiya", "Sitologiya"],
      topics_en: ["Molecular Genetics", "Cell Membranes", "Carcinogenesis", "Immunology", "Cytology"],
      link: "https://www.macmillanlearning.com/college/us/product/Molecular-Cell-Biology/p/1319208525",
      link_type: "Macmillan Learning"
    },
    {
      id: "book-az-mol-bio-esaslari",
      title_az: "Molekulyar Biologiya (Ali Məktəb Dərsliyi)",
      title_en: "Molecular Biology (University Textbook)",
      author: "İradə Hüseynova, Ə.İ. Əliyev və b.",
      edition: "Əsas Nəşr",
      year: "2016",
      publisher: "Bakı Dövlət Universiteti Nəşriyyatı & Elm Nəşriyyatı",
      category: "molecular_biology",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-teal-900 to-slate-900",
      accent: "teal",
      isbn: "978-9952-458-12-3",
      pages: "420",
      description_az: "Azərbaycan dilində molekulyar biologiyanın təməl prinsiplərini, DNT və RNT strukturunu, transkripsiya və translyasiya mexanizmlərini ətraflı şərh edən əsas akademik dərslik.",
      description_en: "Comprehensive university textbook in Azerbaijani, elucidating DNA/RNA conformation, genetic code, transcription, and translation mechanics.",
      topics: ["DNT & RNT Quruluşu", "Transkripsiya Mexanizmi", "Translyasiya", "Gen Ekspressiyası", "Azərbaycan Dərslikləri"],
      topics_en: ["DNA & RNA Architecture", "Transcription Mechanism", "Translation", "Gene Expression", "Azerbaijani Textbooks"],
      link: "#resources",
      link_type: "Elmi Kitabxana Fondu"
    },
    {
      id: "book-az-biokimya-quliyev",
      title_az: "Bioloji Kimya və Molekulyar Biologiya",
      title_en: "Biological Chemistry and Molecular Biology",
      author: "Ə.N. Quliyev, R.Ə. Həsənov",
      edition: "Yenilənmiş Nəşr",
      year: "2018",
      publisher: "Elm Nəşriyyatı, Bakı",
      category: "biochemistry",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-amber-900 to-slate-900",
      accent: "amber",
      isbn: "978-9952-441-35-4",
      pages: "480",
      description_az: "Azərbaycan dilində biokimya, fermentologiya, vitaminlər, karbohidrat və lipid mübadiləsi, molekulyar energetikanı əhatə edən təməl dərslik.",
      description_en: "Textbook covering biochemistry, enzymology, cellular metabolism, bioenergetics, and metabolic regulation in the Azerbaijani language.",
      topics: ["Fermentologiya", "Maddələr Mübadiləsi", "Bioenergetika", "Zülal Kimyası", "Metabolizm"],
      topics_en: ["Enzymology", "Metabolism", "Bioenergetics", "Protein Chemistry", "Metabolic Logic"],
      link: "#resources",
      link_type: "Elmi Nəşrlər Fondu"
    },

    // -------------------------------------------------------------
    // GENETICS & GENOMICS (ENGLISH & AZERBAIJANI)
    // -------------------------------------------------------------
    {
      id: "book-snustad-genetics",
      title_az: "Genetikanın Prinsipləri",
      title_en: "Principles of Genetics",
      author: "D. Peter Snustad, Michael J. Simmons",
      edition: "7th Edition",
      year: "2015",
      publisher: "John Wiley & Sons",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-purple-900 to-indigo-950",
      accent: "purple",
      isbn: "978-111914228-7",
      pages: "800",
      description_az: "Mendel irsiyyətindən molekulyar genomikaya qədər hər bir mövzunu kristal aydınlıqla izah edən qlobal dərslik. Xromosom xəritələnməsi, mutasiyalar və populyasiya genetikası.",
      description_en: "Classic genetics resource providing exceptional coverage of classical transmission genetics, molecular mapping, epigenetic inheritance, and population genomics.",
      topics: ["Mendel İrsiyyəti", "Xromosom Analizi", "DNT Mutasiyaları", "Epigenetika", "Populyasiya Genetikası"],
      topics_en: ["Mendelian Genetics", "Chromosome Mapping", "DNA Mutations", "Epigenetics", "Population Genetics"],
      link: "https://www.wiley.com/en-us/Principles+of+Genetics%2C+7th+Edition-p-9781119142287",
      link_type: "Wiley Academic"
    },
    {
      id: "book-krebs-lewins-genes",
      title_az: "Lewin's GENES XII",
      title_en: "Lewin's GENES XII",
      author: "Jocelyn E. Krebs, Elliott S. Goldstein, Stephen T. Kilpatrick",
      edition: "12th Edition",
      year: "2018",
      publisher: "Jones & Bartlett Learning",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-rose-900 to-slate-950",
      accent: "rose",
      isbn: "978-128410449-3",
      pages: "860",
      description_az: "Molekulyar genetikanın ən dərin və möhtəşəm dərsliklərindən biri. Xromatin arxitekturası, epigenetik modifikasiyalar, rekombinasiya və RNT müdaxiləsi (RNAi).",
      description_en: "The most authoritative and current text on molecular biology and molecular genetics, covering chromatin remodelers, epigenetics, and catalytic RNAs.",
      topics: ["Xromatin və Nukleosomlar", "Epigenetik Nəzarət", "RNT İnterferensiyası", "Rekombinasiya", "Gen Redaktəsi"],
      topics_en: ["Chromatin Remodeling", "Epigenetic Regulation", "RNA Interference", "Recombination", "Gene Editing"],
      link: "https://www.jblearning.com/catalog/productdetails/9781284104493",
      link_type: "Jones & Bartlett Learning"
    },
    {
      id: "book-brown-genomes",
      title_az: "Genomlar 5 (Genomes 5)",
      title_en: "Genomes 5",
      author: "Terence A. Brown",
      edition: "5th Edition",
      year: "2023",
      publisher: "Garland Science / CRC Press",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-fuchsia-900 to-slate-950",
      accent: "fuchsia",
      isbn: "978-081534508-4",
      pages: "544",
      description_az: "Müasir genom sekvenləşdirməsi, komparativ genomika, transkriptomika və genom evolyusiyası üzrə ən son 2023-cü il nəşri. Bioinformatika üçün ideal nəzəri baza.",
      description_en: "State-of-the-art textbook exploring genome sequencing, genome assembly, comparative genomics, transcriptomics, and synthetic genomics.",
      topics: ["Genom Sekvenləşdirməsi", "Komparativ Genomika", "Transkriptomika", "CRISPR-Cas", "Sintetik Biologiya"],
      topics_en: ["Genome Sequencing", "Comparative Genomics", "Transcriptomics", "CRISPR-Cas", "Synthetic Biology"],
      link: "https://www.routledge.com/Genomes-5/Brown/p/book/9780815345084",
      link_type: "CRC Press / Routledge"
    },
    {
      id: "book-az-genetika-esaslari",
      title_az: "Genetika və Seleksiyanın Əsasları",
      title_en: "Fundamentals of Genetics and Selection",
      author: "R.Ə. Əliyev, Ə.Q. Qasımov",
      edition: "Ali Məktəb Dərslik Nəşri",
      year: "2015",
      publisher: "Maarif Nəşriyyatı, Bakı",
      category: "genetics",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-purple-950 to-slate-900",
      accent: "purple",
      isbn: "978-9952-321-19-0",
      pages: "460",
      description_az: "Azərbaycan dilində klassik və molekulyar genetikanın əsaslarını, mutasiya nəzəriyyəsini, xromosom irsiyyətini və seleksiya prinsiplərini əhatə edən dərslik.",
      description_en: "University textbook in Azerbaijani presenting Mendelian inheritance, chromosome dynamics, mutation theory, and genetic selection fundamentals.",
      topics: ["Klassik Genetika", "Mutasiyalar", "Xromosom Nəzəriyyəsi", "Molekulyar Əsaslar", "Seleksiya"],
      topics_en: ["Classical Genetics", "Mutations", "Chromosome Theory", "Molecular Foundations", "Selection"],
      link: "#resources",
      link_type: "Universitet Dərslik Fondu"
    },
    {
      id: "book-az-tibbi-genetika",
      title_az: "Tibbi və Klinik Genetika",
      title_en: "Medical and Clinical Genetics",
      author: "Ə.T. Əzizov, S.Q. Babayeva",
      edition: "Tibb Tələbələri Üçün",
      year: "2017",
      publisher: "Təbib Nəşriyyatı / ATU, Bakı",
      category: "genetics",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-pink-950 to-slate-900",
      accent: "pink",
      isbn: "978-9952-814-11-8",
      pages: "390",
      description_az: "İnsan genetikası, irsi xəstəliklər, xromosom aberasiyaları, sitogenetika və müasir molekulyar diaqnostika metodları (PCR, NGS) Azərbaycan dilində şərh olunur.",
      description_en: "Azerbaijani-language textbook on human genetics, monogenic and polygenic diseases, cytogenetics, and modern clinical genomics (PCR, NGS).",
      topics: ["İnsan Genetikası", "İrsi Xəstəliklər", "Sitogenetika", "Molekulyar Diaqnostika", "Klinik Genomika"],
      topics_en: ["Human Genetics", "Hereditary Diseases", "Cytogenetics", "Molecular Diagnostics", "Clinical Genomics"],
      link: "#resources",
      link_type: "Tibb Elmləri Kitabxanası"
    }
  ];

  var currentCategory = 'all';
  var currentLanguage = 'all';
  var currentSearchQuery = '';

  function initResources() {
    renderResourcesGrid();
    setupListeners();
  }

  function setupListeners() {
    var searchInput = document.getElementById('resourcesSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        renderResourcesGrid();
      });
    }
  }

  function filterResources(category) {
    currentCategory = category;
    
    // Update active button classes
    var buttons = document.querySelectorAll('#resourcesCategoryFilters button');
    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-cat') === category) {
        btn.classList.add('bg-teal-500/20', 'text-teal-300', 'border-teal-500/40');
        btn.classList.remove('text-slate-400', 'border-slate-800');
      } else {
        btn.classList.remove('bg-teal-500/20', 'text-teal-300', 'border-teal-500/40');
        btn.classList.add('text-slate-400', 'border-slate-800');
      }
    });

    renderResourcesGrid();
  }

  function filterResourcesLang(lang) {
    currentLanguage = lang;

    var buttons = document.querySelectorAll('#resourcesLangFilters button');
    buttons.forEach(function (btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
        btn.classList.remove('text-slate-400', 'border-slate-800');
      } else {
        btn.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-500/40');
        btn.classList.add('text-slate-400', 'border-slate-800');
      }
    });

    renderResourcesGrid();
  }

  function renderResourcesGrid() {
    var container = document.getElementById('resourcesGrid');
    var countEl = document.getElementById('resourcesCountBadge');
    if (!container) return;

    var isEn = (window.CarboxMolI18n && window.CarboxMolI18n.getLanguage() === 'en');

    var filtered = BOOKS_DATABASE.filter(function (book) {
      // Category filter
      if (currentCategory !== 'all') {
        if (currentCategory === 'bioinformatics' && book.category !== 'bioinformatics') return false;
        if (currentCategory === 'molecular_biology' && book.category !== 'molecular_biology') return false;
        if (currentCategory === 'genetics' && book.category !== 'genetics') return false;
        if (currentCategory === 'biochemistry' && book.category !== 'biochemistry') return false;
      }

      // Language filter
      if (currentLanguage !== 'all') {
        if (book.language !== currentLanguage) return false;
      }

      // Search query
      if (currentSearchQuery) {
        var matchTitleAz = book.title_az.toLowerCase().indexOf(currentSearchQuery) !== -1;
        var matchTitleEn = book.title_en.toLowerCase().indexOf(currentSearchQuery) !== -1;
        var matchAuthor = book.author.toLowerCase().indexOf(currentSearchQuery) !== -1;
        var matchPublisher = book.publisher.toLowerCase().indexOf(currentSearchQuery) !== -1;
        var matchDescAz = book.description_az.toLowerCase().indexOf(currentSearchQuery) !== -1;
        var matchDescEn = book.description_en.toLowerCase().indexOf(currentSearchQuery) !== -1;
        var matchTopics = book.topics.some(function(t) { return t.toLowerCase().indexOf(currentSearchQuery) !== -1; });
        return matchTitleAz || matchTitleEn || matchAuthor || matchPublisher || matchDescAz || matchDescEn || matchTopics;
      }

      return true;
    });

    if (countEl) {
      countEl.textContent = isEn ? (filtered.length + ' Books') : (filtered.length + ' Dərslik və Vəsait');
    }

    if (filtered.length === 0) {
      container.innerHTML = '<div class="col-span-full py-16 text-center text-slate-400 space-y-3">' +
        '<div class="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 mx-auto flex items-center justify-center text-slate-500 text-2xl">' +
        '  <i class="fa-solid fa-book-skull"></i>' +
        '</div>' +
        '<p class="text-sm font-semibold">' + (isEn ? 'No books found matching your search criteria.' : 'Axtarışınıza uyğun dərslik və ya vəsait tapılmadı.') + '</p>' +
        '<button onclick="ResourcesEngine.resetFilters()" class="text-xs text-teal-400 hover:underline">' + (isEn ? 'Reset all filters' : 'Filtrləri sıfırla') + '</button>' +
        '</div>';
      return;
    }

    var html = '';
    filtered.forEach(function (book) {
      var title = isEn ? book.title_en : book.title_az;
      var desc = isEn ? book.description_en : book.description_az;
      var topics = isEn ? (book.topics_en || book.topics) : book.topics;

      var isAz = book.language === 'az';
      var langBadge = isAz 
        ? '<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">🇦🇿 AZ</span>'
        : '<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">🇬🇧 EN</span>';

      var catBadge = '';
      if (book.category === 'bioinformatics') {
        catBadge = '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/30">' + (isEn ? 'Bioinformatics' : 'Bioinformatika') + '</span>';
      } else if (book.category === 'molecular_biology') {
        catBadge = '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/30">' + (isEn ? 'Molecular Biology' : 'Molekulyar Biologiya') + '</span>';
      } else if (book.category === 'genetics') {
        catBadge = '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">' + (isEn ? 'Genetics & Genomics' : 'Genetika & Genomika') + '</span>';
      } else if (book.category === 'biochemistry') {
        catBadge = '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">' + (isEn ? 'Biochemistry' : 'Biokimya') + '</span>';
      }

      html += '<div class="glass-panel p-5 rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-teal-500/50 transition flex flex-col justify-between space-y-4 shadow-xl group">';
      
      // Top header with book visual mockup
      html += '  <div class="space-y-3.5">';
      html += '    <div class="flex gap-4 items-start">';
      
      // 3D-styled spine book cover
      html += '      <div class="w-20 h-28 sm:w-24 sm:h-32 rounded-lg bg-gradient-to-br ' + book.cover_color + ' p-2.5 flex flex-col justify-between shrink-0 shadow-lg border border-slate-700/60 relative overflow-hidden group-hover:scale-105 transition transform duration-300">';
      html += '        <div class="absolute inset-y-0 left-0 w-1.5 bg-white/20 shadow-inner"></div>';
      html += '        <div class="space-y-1 relative z-10 pl-1">';
      html += '          <span class="text-[7px] uppercase tracking-wider text-teal-300 font-bold block">' + book.year + '</span>';
      html += '          <h5 class="text-[9px] sm:text-[10px] font-extrabold text-white leading-tight line-clamp-3">' + title + '</h5>';
      html += '        </div>';
      html += '        <div class="relative z-10 pl-1">';
      html += '          <span class="text-[7.5px] text-slate-300 font-mono truncate block">' + book.author.split(',')[0] + '</span>';
      html += '        </div>';
      html += '      </div>';

      // Meta info
      html += '      <div class="space-y-1.5 min-w-0 flex-1">';
      html += '        <div class="flex items-center gap-1.5 flex-wrap">';
      html +=            langBadge;
      html +=            catBadge;
      html += '        </div>';
      html += '        <h4 class="text-sm sm:text-base font-extrabold text-white group-hover:text-teal-300 transition leading-snug line-clamp-2" title="' + title + '">' + title + '</h4>';
      html += '        <p class="text-xs text-slate-300 font-medium truncate"><i class="fa-solid fa-user-pen text-[10px] text-teal-400 mr-1"></i> ' + book.author + '</p>';
      html += '        <p class="text-[11px] text-slate-400 font-mono"><i class="fa-solid fa-building-columns text-[10px] text-slate-500 mr-1"></i> ' + book.publisher + ' • ' + book.edition + ' (' + book.year + ')</p>';
      html += '      </div>';
      html += '    </div>';

      // Description
      html += '    <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">' + desc + '</p>';

      // Topic Pills
      html += '    <div class="flex items-center gap-1.5 flex-wrap pt-1">';
      topics.slice(0, 3).forEach(function (topic) {
        html += '      <span class="px-2 py-0.5 rounded-md text-[10px] bg-slate-950 text-slate-300 border border-slate-800">' + topic + '</span>';
      });
      if (topics.length > 3) {
        html += '      <span class="text-[10px] text-slate-400">+' + (topics.length - 3) + '</span>';
      }
      html += '    </div>';
      html += '  </div>';

      // Footer Actions
      html += '  <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">';
      html += '    <button onclick="ResourcesEngine.openBookModal(\'' + book.id + '\')" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs flex items-center gap-1.5 transition">';
      html += '      <i class="fa-solid fa-circle-info text-xs"></i> <span>' + (isEn ? 'Overview' : 'Məzmun & Detallar') + '</span>';
      html += '    </button>';
      
      if (book.link && book.link !== '#resources') {
        html += '    <a href="' + book.link + '" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-sm">';
        html += '      <i class="fa-solid fa-up-right-from-square text-[10px]"></i> <span>' + (isEn ? 'Publisher' : 'Mənbəyə Keç') + '</span>';
        html += '    </a>';
      } else {
        html += '    <button onclick="ResourcesEngine.openBookModal(\'' + book.id + '\')" class="px-3 py-1.5 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs font-semibold flex items-center gap-1">';
        html += '      <i class="fa-solid fa-book-bookmark text-[10px]"></i> <span>' + (isEn ? 'Club Library' : 'Klub Fondu') + '</span>';
        html += '    </button>';
      }

      html += '  </div>';
      html += '</div>';
    });

    container.innerHTML = html;
  }

  function resetFilters() {
    currentCategory = 'all';
    currentLanguage = 'all';
    currentSearchQuery = '';
    var input = document.getElementById('resourcesSearchInput');
    if (input) input.value = '';
    filterResources('all');
    filterResourcesLang('all');
  }

  function openBookModal(bookId) {
    var book = BOOKS_DATABASE.find(function (b) { return b.id === bookId; });
    if (!book) return;

    var modal = document.getElementById('bookDetailModal');
    if (!modal) return;

    var isEn = (window.CarboxMolI18n && window.CarboxMolI18n.getLanguage() === 'en');
    var title = isEn ? book.title_en : book.title_az;
    var desc = isEn ? book.description_en : book.description_az;
    var topics = isEn ? (book.topics_en || book.topics) : book.topics;

    var modalTitle = document.getElementById('bookModalTitle');
    var modalAuthor = document.getElementById('bookModalAuthor');
    var modalMeta = document.getElementById('bookModalMeta');
    var modalDesc = document.getElementById('bookModalDesc');
    var modalTopics = document.getElementById('bookModalTopics');
    var modalLink = document.getElementById('bookModalLink');

    if (modalTitle) modalTitle.textContent = title;
    if (modalAuthor) modalAuthor.textContent = book.author;
    if (modalMeta) {
      modalMeta.textContent = book.publisher + ' • ' + book.edition + ' (' + book.year + ') • ' + (book.pages ? book.pages + (isEn ? ' pages' : ' səhifə') : '') + (book.isbn ? ' • ISBN: ' + book.isbn : '');
    }
    if (modalDesc) modalDesc.textContent = desc;

    if (modalTopics) {
      var tHtml = '';
      topics.forEach(function (t) {
        tHtml += '<span class="px-2.5 py-1 rounded-lg text-xs bg-slate-900 border border-slate-700 text-teal-300 font-mono">' + t + '</span>';
      });
      modalTopics.innerHTML = tHtml;
    }

    if (modalLink) {
      if (book.link && book.link !== '#resources') {
        modalLink.href = book.link;
        modalLink.classList.remove('hidden');
        modalLink.innerHTML = '<i class="fa-solid fa-up-right-from-square text-xs mr-1"></i> ' + (isEn ? 'Open Publisher / Reference' : 'Rəsmi Nəşriyyat / Mənbə Səhifəsi');
      } else {
        modalLink.href = 'mailto:suleyman.hacizade.232bioing@wcu.edu.az?subject=Kitabxana%20Müraciəti%20-%20' + encodeURIComponent(title);
        modalLink.classList.remove('hidden');
        modalLink.innerHTML = '<i class="fa-solid fa-envelope text-xs mr-1"></i> ' + (isEn ? 'Request Copy from Club Library' : 'Klub Kitabxanasından Nüsxə İstə');
      }
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeBookModal() {
    var modal = document.getElementById('bookDetailModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  window.addEventListener('carboxmol:languageChanged', function () {
    renderResourcesGrid();
  });

  document.addEventListener('DOMContentLoaded', function () {
    initResources();
  });

  window.ResourcesEngine = {
    init: initResources,
    filterResources: filterResources,
    filterResourcesLang: filterResourcesLang,
    renderResourcesGrid: renderResourcesGrid,
    resetFilters: resetFilters,
    openBookModal: openBookModal,
    closeBookModal: closeBookModal
  };

})();
