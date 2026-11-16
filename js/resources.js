/**
 * CarboxMol Bioinformatics Club - Scientific Library & Academic Resources
 * Curated digital collection of verified textbooks in Bioinformatics, Molecular Biology,
 * Biochemistry, and Genetics (English & Azerbaijani with direct publisher / university PDF links)
 */

(function () {
  'use strict';

  var BOOKS_DATABASE = [
    // -------------------------------------------------------------
    // BIOINFORMATICS & COMPUTATIONAL BIOLOGY (ENGLISH)
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
      isbn: "978-0879697129",
      pages: "692",
      description_az: "Hesablama biologiyasının və ardıcıllıq analitikasının klassik tədris vəsaiti. BLAST, FASTA, Smith-Waterman alqoritmləri, filogenetik ağaclar və HMM ehtimal modelləri dərindən izah edilir.",
      description_en: "Classic reference in sequence analysis and genome analytics covering pairwise alignments, BLAST, dynamic programming, Hidden Markov Models, and evolutionary trees.",
      topics: ["Ardıcıllıq Düzləndirilməsi", "BLAST & FASTA", "Filogenetika", "HMM Modelləri", "Genom Xəritələnməsi"],
      topics_en: ["Sequence Alignment", "BLAST & FASTA", "Phylogenetics", "Hidden Markov Models", "Genome Mapping"],
      link: "https://books.google.com/books/about/Bioinformatics.html?id=bvY21DGa1OwC",
      link_type: "Google Books / CSHL Press"
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
      isbn: "978-1118581780",
      pages: "1168",
      description_az: "Tələbələr və tədqiqatçılar üçün əhatəli dərslik. NCBI məlumat bazaları, NGS RNT-Seq analizi, proteomika və sistem biologiyası izah olunur.",
      description_en: "Comprehensive guide bridging biological questions with computational tools: NCBI tools, Next-Generation Sequencing (NGS), RNA-Seq, proteome maps, and systems biology.",
      topics: ["NCBI & Ensembl", "NGS Analizi", "RNT-Seq", "Funksional Genomika", "Proteomika"],
      topics_en: ["NCBI & Ensembl", "NGS Analysis", "RNA-Seq", "Functional Genomics", "Proteomics"],
      link: "https://www.wiley.com/en-us/Bioinformatics+and+Functional+Genomics%2C+3rd+Edition-p-9781118581780",
      link_type: "Wiley Academic"
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
      isbn: "978-0470181058",
      pages: "1072",
      description_az: "3D zülal strukturları, koordinat sistemləri (PDB, mmCIF), molekulyar dokinq, zülal-zülal və zülal-liqand qarşılıqlı təsirləri üzrə əsas vəsait.",
      description_en: "Definitive reference on macromolecular structure analysis, PDB architectures, homology modeling, drug discovery docking, and structural dynamics.",
      topics: ["PDB & mmCIF", "3D Zülal Strukturu", "Molekulyar Dokinq", "Homologiya Modelləşdirməsi", "Dərman Dizaynı"],
      topics_en: ["PDB & mmCIF", "3D Protein Structures", "Molecular Docking", "Homology Modeling", "Drug Design"],
      link: "https://www.wiley.com/en-us/Structural+Bioinformatics%2C+2nd+Edition-p-9780470181058",
      link_type: "Wiley Academic"
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
      isbn: "978-1138035263",
      pages: "452",
      description_az: "Bioloqlar üçün praktiki Python proqramlaşdırması: Biopython kitabxanası, FASTA/GenBank fayllarının oxunması, transkripsiya, translyasiya və avtomatlaşdırma.",
      description_en: "Hands-on programming guide tailored for biological data: Biopython, sequence parsing, REST APIs, and automated bioinformatics workflows.",
      topics: ["Python 3", "Biopython", "FASTA/GenBank Parsing", "Genetik Kod Analizi", "Avtomatlaşdırma"],
      topics_en: ["Python 3", "Biopython", "FASTA/GenBank Parsing", "Genetic Code Processing", "Automation"],
      link: "https://www.routledge.com/Python-for-Bioinformatics/Bassi/p/book/9781138035263",
      link_type: "Routledge / CRC Press"
    },

    // -------------------------------------------------------------
    // MOLECULAR BIOLOGY & BIOCHEMISTRY (ENGLISH)
    // -------------------------------------------------------------
    {
      id: "book-alberts-mboc",
      title_az: "Hüceyrənin Molekulyar Biologiyası (MBoC)",
      title_en: "Molecular Biology of the Cell (MBoC)",
      author: "Bruce Alberts, Rebecca Heald, Alexander Johnson, David Morgan, Martin Raff, Keith Roberts, Peter Walter",
      edition: "7th Edition",
      year: "2022",
      publisher: "W. W. Norton & Company",
      category: "molecular_biology",
      language: "en",
      lang_label: "English",
      cover_color: "from-blue-800 to-indigo-950",
      accent: "blue",
      isbn: "978-0393884821",
      pages: "1552",
      description_az: "Molekulyar biologiyanın fundamental dərsliyi. Hüceyrə strukturu, DNT replikasiyası, gen ifadəsinin tənzimlənməsi, zülal sintezi və siqnal kaskadları ətraflı izah edilir.",
      description_en: "Fundamental molecular biology textbook detailing internal cell architecture, DNA repair, transcription networks, cell cycle, and intercellular communication.",
      topics: ["DNT Replikasiyası & Təmiri", "Transkripsiya & Translyasiya", "Zülal Nəqli", "Hüceyrə Dövrü", "Siqnal İntiqalı"],
      topics_en: ["DNA Replication & Repair", "Transcription & Translation", "Protein Sorting", "Cell Cycle", "Signal Transduction"],
      link: "https://wwnorton.com/books/9780393884821",
      link_type: "W. W. Norton"
    },
    {
      id: "book-lehninger-biochemistry",
      title_az: "Lehninger Biokimyanın Əsasları",
      title_en: "Lehninger Principles of Biochemistry",
      author: "David L. Nelson, Michael M. Cox, Aaron A. Hoskins",
      edition: "8th Edition",
      year: "2021",
      publisher: "W. H. Freeman / Macmillan Learning",
      category: "biochemistry",
      language: "en",
      lang_label: "English",
      cover_color: "from-amber-800 to-stone-950",
      accent: "amber",
      isbn: "978-1319228002",
      pages: "1248",
      description_az: "Biokimyanın klassik tədris qaynağı: amin turşuları, ferment kinetikası, metabolik yollar, bioenergetika və molekulyar mexanizmlər.",
      description_en: "Standard in biochemistry education integrating metabolic pathway logic, enzyme kinetics, bioenergetics, and macromolecular structures.",
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
      isbn: "978-1319208523",
      pages: "1264",
      description_az: "Eksperimental dəlillər üzərində qurulmuş akademik dərslik: genom quruluşu, karsinogenez, immunologiya və molekulyar texnikalar.",
      description_en: "Focuses on experimental biology, genomics, stem cells, immunology, neurobiology, and molecular mechanisms behind human diseases.",
      topics: ["Molekulyar Genetika", "Hüceyrə Membranları", "Karsinogenez", "İmmunologiya", "Sitologiya"],
      topics_en: ["Molecular Genetics", "Cell Membranes", "Carcinogenesis", "Immunology", "Cytology"],
      link: "https://www.macmillanlearning.com/college/us/product/Molecular-Cell-Biology/p/1319208525",
      link_type: "Macmillan Learning"
    },

    // -------------------------------------------------------------
    // GENETICS & GENOMICS (ENGLISH)
    // -------------------------------------------------------------
    {
      id: "book-snustad-genetics",
      title_az: "Genetikanın Prinsipləri",
      title_en: "Principles of Genetics",
      author: "D. Peter Snustad, Michael J. Simmons",
      edition: "7th Edition",
      year: "2016",
      publisher: "John Wiley & Sons",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-purple-900 to-indigo-950",
      accent: "purple",
      isbn: "978-1119142287",
      pages: "648",
      description_az: "Mendel irsiyyətindən molekulyar genomikaya qədər genetikanın prinsipləri: xromosom xəritələnməsi, mutasiyalar və populyasiya genetikası.",
      description_en: "Comprehensive coverage of transmission genetics, molecular mapping, mutation mechanisms, epigenetic inheritance, and population genomics.",
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
      isbn: "978-1284104493",
      pages: "838",
      description_az: "Molekulyar genetikanın əsas tədris kitabı: xromatin arxitekturası, epigenetik modifikasiyalar, rekombinasiya və RNT interferensiyası.",
      description_en: "Authoritative text on molecular genetics covering chromatin remodelers, epigenetic control, recombination, and non-coding RNAs.",
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
      publisher: "CRC Press / Taylor & Francis",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-fuchsia-900 to-slate-950",
      accent: "fuchsia",
      isbn: "978-0367674076",
      pages: "548",
      description_az: "Müasir genom sekvenləşdirməsi, komparativ genomika, transkriptomika, CRISPR və genom evolyusiyası üzrə müasir nəşr.",
      description_en: "Up-to-date textbook covering genome sequencing, genome anatomies, transcriptomics, CRISPR-Cas9, and comparative genomics.",
      topics: ["Genom Sekvenləşdirməsi", "Komparativ Genomika", "Transkriptomika", "CRISPR-Cas9", "GWAS"],
      topics_en: ["Genome Sequencing", "Comparative Genomics", "Transcriptomics", "CRISPR-Cas9", "GWAS"],
      link: "https://www.routledge.com/Genomes-5/Brown/p/book/9780367674076",
      link_type: "Routledge / CRC Press"
    },

    // -------------------------------------------------------------
    // REAL VERIFIED AZERBAIJANI UNIVERSITY TEXTBOOKS (BDU, SDU, ADAU)
    // -------------------------------------------------------------
    {
      id: "book-az-qenberov-mikro-genetika",
      title_az: "Mikroorqanizmlərin genetikası",
      title_en: "Genetics of Microorganisms (Azerbaijani)",
      author: "Xudaverdi Qənbərov, Mirmusa Cəfərov, Sənəm Hüseynova",
      edition: "Dərslik",
      year: "2024",
      publisher: "Bakı: «Elm» (BDU Elmi Kitabxanası)",
      category: "genetics",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-purple-900 to-slate-900",
      accent: "purple",
      isbn: "",
      pages: "236",
      description_az: "Bakı Dövlət Universitetinin 06.03.2024 tarixli əmri ilə dərslik kimi təsdiq edilib. Bakteriya və virusların genomu, dəyişkənlik və mikroorqanizmlərin irsiyyəti haqqında Azərbaycan dilində dərslik.",
      description_en: "Official Azerbaijani university textbook (Baku: Elm, 2024) covering bacterial and viral genomes, mutation variability, and microbial genetics.",
      topics: ["Bakteriya Genomu", "Virus Genomu", "Dəyişkənlik", "Mikrob Genetikası", "BDU PDF"],
      topics_en: ["Bacterial Genome", "Viral Genome", "Variability", "Microbial Genetics", "BSU Open PDF"],
      link: "http://elibrary.bsu.edu.az/files/biologiya/Mikroorqanizmlerin_genetikasi.pdf",
      link_type: "BDU Elektron Kitabxanası (Birbaşa PDF)"
    },
    {
      id: "book-az-hesenova-genetika-2014",
      title_az: "Genetika (Dərs vəsaiti)",
      title_en: "Genetics (University Coursebook, Azerbaijani)",
      author: "S.Q. Həsənova, A.Q. Qarayeva, Ə.H. Qədimov, M.R. Şəfiyeva",
      edition: "Dərs vəsaiti",
      year: "2014",
      publisher: "Sumqayıt Dövlət Universiteti (BDU Elektron Kitabxanası)",
      category: "genetics",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-violet-900 to-slate-900",
      accent: "purple",
      isbn: "",
      pages: "245",
      description_az: "Sumqayıt Dövlət Universitetinin tədris proqramına əsasən hazırlanmış, AR Təhsil Nazirliyi Elmi-Metodiki Şurasının tövsiyə etdiyi Azərbaycan dilində genetika dərs vəsaiti.",
      description_en: "University textbook in Azerbaijani covering classical and molecular foundations of heredity and variability (Sumgayit State University, 2014).",
      topics: ["İrsiyyət & Dəyişkənlik", "Mendel Qanunları", "Genetik İnformasiya", "SDU / BDU PDF"],
      topics_en: ["Heredity & Variability", "Mendelian Laws", "Genetic Information", "Open PDF"],
      link: "http://elibrary.bsu.edu.az/files/110/N_40.pdf",
      link_type: "BDU Elektron Kitabxanası (Birbaşa PDF)"
    },
    {
      id: "book-az-seyideliyev-genetika-2010",
      title_az: "Genetika, seleksiya və toxumçuluq",
      title_en: "Genetics, Breeding & Seed Science (Azerbaijani)",
      author: "Nizami Y. Seyidəliyev",
      edition: "Dərslik / Dərs vəsaiti",
      year: "2010",
      publisher: "Azərbaycan Dövlət Aqrar Universiteti (ADAU)",
      category: "genetics",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-emerald-900 to-slate-900",
      accent: "emerald",
      isbn: "",
      pages: "262",
      description_az: "Azərbaycan Dövlət Aqrar Universiteti üçün hazırlanmış dərslik: irsiyyətin qanunları, molekulyar mexanizmlər, xromosom nəzəriyyəsi, mutagenez və transgen bitkilər.",
      description_en: "Azerbaijani university textbook (ADAU, 2010) covering laws of inheritance, chromosome theory, mutagenesis, molecular mechanisms, and transgenic plants.",
      topics: ["Xromosom Nəzəriyyəsi", "Molekulyar Mexanizmlər", "Mutagenez", "Transgen Bitkilər", "ADAU PDF"],
      topics_en: ["Chromosome Theory", "Molecular Mechanisms", "Mutagenesis", "Transgenic Plants", "ADAU PDF"],
      link: "https://www.adau.edu.az/images/ms_kitabxana/05_08_2021_12_29_46_201_7283701_GENET%C4%B0KA,%20seleksiya%20v%C9%99%20toxum%C3%A7uluq.%20D%C6%8FRSL%C4%B0K%20YEN%C4%B0%20FORMA.pdf",
      link_type: "ADAU Rəsmi Kitabxana (Birbaşa PDF)"
    },
    {
      id: "book-az-quliyev-statika-2004",
      title_az: "Bioloji kimya (statika) — I cild",
      title_en: "Biological Chemistry: Statics, Vol. I (Azerbaijani)",
      author: "A.Ə. Quliyev, T.H. Həsənov, S.Q. Güləhmədov",
      edition: "I cild • Dərslik",
      year: "2004",
      publisher: "Bakı Dövlət Universiteti",
      category: "biochemistry",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-amber-900 to-slate-900",
      accent: "amber",
      isbn: "",
      pages: "490",
      description_az: "AR Təhsil Nazirliyi tərəfindən (07.06.2003, №901) təsdiq edilmiş fundamental dərslik. Amin turşuları, peptidlər, zülalların quruluşu, fermentlər, vitaminlər və nuklein turşuları şərh olunur.",
      description_en: "Ministry-approved university biochemistry textbook in Azerbaijani covering amino acids, peptides, protein structure, enzymes, and biological macromolecules (Baku State University, 2004).",
      topics: ["Amin Turşuları & Zülallar", "Peptid Rabitəsi", "Fermentlər", "Nuklein Turşuları", "BDU PDF"],
      topics_en: ["Amino Acids & Proteins", "Peptide Bond", "Enzymes", "Nucleic Acids", "BSU Open PDF"],
      link: "http://elibrary.bsu.edu.az/files/books_aysel/N_362.pdf",
      link_type: "BDU Elektron Kitabxanası (Birbaşa PDF)"
    },
    {
      id: "book-az-quliyev-enzimologiya-2010",
      title_az: "Enzimologiyanın əsasları",
      title_en: "Fundamentals of Enzymology (Azerbaijani)",
      author: "A.Ə. Quliyev, S.N. Ömərova",
      edition: "Dərslik",
      year: "2010",
      publisher: "Bakı (AR Təhsil Nazirliyi Qrifli Nəşr)",
      category: "biochemistry",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-orange-900 to-slate-900",
      accent: "amber",
      isbn: "",
      pages: "280",
      description_az: "AR Təhsil Nazirliyinin 07.12.2009 tarixli 1351 saylı əmri ilə təsdiq olunmuş dərslik. Bioloji katalizatorların — fermentlərin quruluşu, kinetikası, təsir mexanizmləri və tənzimlənməsi.",
      description_en: "Official university textbook in Azerbaijani detailing enzyme structure, catalytic kinetics, active sites, and regulation of enzyme synthesis.",
      topics: ["Ferment Kinetikası", "Bioloji Kataliz", "Aktiv Mərkəzlər", "pH & Termostabillik", "BDU PDF"],
      topics_en: ["Enzyme Kinetics", "Biocatalysis", "Active Sites", "Allosteric Regulation", "BSU Open PDF"],
      link: "http://elibrary.bsu.edu.az/files/books_aysel/N_-78.pdf",
      link_type: "BDU Elektron Kitabxanası (Birbaşa PDF)"
    },
    {
      id: "book-az-yusifov-bioloji-kimya-2012",
      title_az: "Bioloji kimya (Ali məktəblər üçün dərslik)",
      title_en: "Biological Chemistry (University Textbook, Azerbaijani)",
      author: "N.M. Yusifov, K.Ş. Daşdəmirov",
      edition: "Dərslik",
      year: "2012",
      publisher: "Bakı: «MBM» / ADAU",
      category: "biochemistry",
      language: "az",
      lang_label: "Azərbaycan dili",
      cover_color: "from-yellow-900 to-slate-900",
      accent: "amber",
      isbn: "",
      pages: "400",
      description_az: "Latın qrafikası ilə ali məktəblər üçün hazırlanmış dərslik. Statik və dinamik biokimya: karbohidrat, lipid, zülal, nuklein turşuları və enerji mübadiləsi.",
      description_en: "University textbook in Azerbaijani covering static and dynamic biochemistry: proteins, nucleic acids, vitamins, bioenergetics, and intermediary metabolism (Baku, 2012).",
      topics: ["Statik & Dinamik Biokimya", "Maddələr Mübadiləsi", "Nuklein Turşuları", "Enerji Mübadiləsi", "BDU PDF"],
      topics_en: ["Static & Dynamic Biochemistry", "Metabolism", "Nucleic Acids", "Bioenergetics", "BSU Open PDF"],
      link: "http://elibrary.bsu.edu.az/files/books_aysel/N_361.pdf",
      link_type: "BDU Elektron Kitabxanası (Birbaşa PDF)"
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
      if (currentCategory !== 'all') {
        if (currentCategory === 'bioinformatics' && book.category !== 'bioinformatics') return false;
        if (currentCategory === 'molecular_biology' && book.category !== 'molecular_biology') return false;
        if (currentCategory === 'genetics' && book.category !== 'genetics') return false;
        if (currentCategory === 'biochemistry' && book.category !== 'biochemistry') return false;
      }

      if (currentLanguage !== 'all') {
        if (book.language !== currentLanguage) return false;
      }

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
      countEl.textContent = isEn ? (filtered.length + ' Verified Books') : (filtered.length + ' Təsdiqlənmiş Dərslik');
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
        catBadge = '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">' + (isEn ? 'Genetics' : 'Genetika') + '</span>';
      } else if (book.category === 'biochemistry') {
        catBadge = '<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">' + (isEn ? 'Biochemistry' : 'Biokimya') + '</span>';
      }

      html += '<div class="glass-panel p-5 rounded-2xl border border-slate-800 bg-slate-900/70 hover:border-teal-500/50 transition flex flex-col justify-between space-y-4 shadow-xl group">';
      
      html += '  <div class="space-y-3.5">';
      html += '    <div class="flex gap-4 items-start">';
      
      html += '      <div class="w-20 h-28 sm:w-24 sm:h-32 rounded-lg bg-gradient-to-br ' + book.cover_color + ' p-2.5 flex flex-col justify-between shrink-0 shadow-lg border border-slate-700/60 relative overflow-hidden group-hover:scale-105 transition transform duration-300">';
      html += '        <div class="absolute inset-y-0 left-0 w-1.5 bg-white/20 shadow-inner"></div>';
      html += '        <div class="space-y-1 relative z-10 pl-1">';
      html += '          <span class="text-[7px] uppercase tracking-wider font-bold block" style="color:#5eead4 !important">' + book.year + '</span>';
      html += '          <h5 class="text-[9px] sm:text-[10px] font-extrabold leading-tight line-clamp-3" style="color:#ffffff !important">' + title + '</h5>';
      html += '        </div>';
      html += '        <div class="relative z-10 pl-1">';
      html += '          <span class="text-[7.5px] font-mono truncate block" style="color:#cbd5e1 !important">' + book.author.split(',')[0] + '</span>';
      html += '        </div>';
      html += '      </div>';

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

      html += '    <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">' + desc + '</p>';

      html += '    <div class="flex items-center gap-1.5 flex-wrap pt-1">';
      topics.slice(0, 3).forEach(function (topic) {
        html += '      <span class="px-2 py-0.5 rounded-md text-[10px] bg-slate-950 text-slate-300 border border-slate-800">' + topic + '</span>';
      });
      if (topics.length > 3) {
        html += '      <span class="text-[10px] text-slate-400">+' + (topics.length - 3) + '</span>';
      }
      html += '    </div>';
      html += '  </div>';

      html += '  <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">';
      html += '    <button onclick="ResourcesEngine.openBookModal(\'' + book.id + '\')" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs flex items-center gap-1.5 transition">';
      html += '      <i class="fa-solid fa-circle-info text-xs"></i> <span>' + (isEn ? 'Overview' : 'Məzmun & Detallar') + '</span>';
      html += '    </button>';
      
      var linkBtnLabel = isAz ? (isEn ? 'Open PDF' : 'PDF-i Aç') : (isEn ? 'Publisher' : 'Rəsmi Mənbə');
      var linkIcon = isAz ? 'fa-file-pdf' : 'fa-up-right-from-square';
      html += '    <a href="' + book.link + '" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition shadow-sm">';
      html += '      <i class="fa-solid ' + linkIcon + ' text-[10px]"></i> <span>' + linkBtnLabel + '</span>';
      html += '    </a>';

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
      modalLink.href = book.link;
      modalLink.classList.remove('hidden');
      if (book.language === 'az') {
        modalLink.innerHTML = '<i class="fa-solid fa-file-pdf text-xs mr-1"></i> ' + (isEn ? 'Open Verified University PDF' : 'Rəsmi Universitet PDF-ini Aç') + ' (' + book.link_type + ')';
      } else {
        modalLink.innerHTML = '<i class="fa-solid fa-up-right-from-square text-xs mr-1"></i> ' + (isEn ? 'Open Official Publisher Page' : 'Rəsmi Nəşriyyat Səhifəsini Aç');
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
