/**
 * CarboxMol Bioinformatics Club - Scientific Library & Academic Resources
 * Curated digital collection of verified open-access textbooks in Bioinformatics,
 * Molecular Biology, Biochemistry, and Genetics (English & Azerbaijani direct verified PDF links)
 */

(function () {
  'use strict';

  var BOOKS_DATABASE = [
    // -------------------------------------------------------------
    // BIOINFORMATICS & COMPUTATIONAL BIOLOGY (ENGLISH OPEN-ACCESS PDFs)
    // -------------------------------------------------------------
    {
      id: "book-kellis-comp-biology",
      title_az: "Hesablama Biologiyası: Genomlar, Şəbəkələr və Təkamül",
      title_en: "Computational Biology: Genomes, Networks, and Evolution",
      author: "Manolis Kellis et al.",
      edition: "MIT 6.047 / Open PDF",
      year: "2021",
      publisher: "Massachusetts Institute of Technology (MIT) / Biology LibreTexts",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-teal-800 to-slate-900",
      accent: "teal",
      isbn: "",
      pages: "563",
      description_az: "MIT-nin rəsmi açıq hesablama biologiyası dərsliyi: ardıcıllıq düzləndirilməsi, dinamik proqramlaşdırma, Gizli Markov Modelləri (HMM), RNT-Seq, epigenomika, gen tənzimləyici şəbəkələri və xərçəng genomikası.",
      description_en: "Official MIT open-access textbook covering sequence alignment, dynamic programming, Hidden Markov Models, RNA folding, RNA-Seq, epigenomics, gene networks, phylogenetics, and cancer genomics.",
      topics: ["Ardıcıllıq Düzləndirilməsi", "HMM & Genomika", "RNT-Seq & Epigenomika", "Şəbəkə Biologiyası", "MIT Open PDF"],
      topics_en: ["Sequence Alignment", "HMM & Genomics", "RNA-Seq & Epigenomics", "Network Biology", "MIT Open PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-40877/Full.pdf",
      link_type: "MIT / LibreTexts (Birbaşa PDF)"
    },
    {
      id: "book-oneil-primer-bioinfo",
      title_az: "Hesablama Biologiyasına Giriş (Unix, Python & R)",
      title_en: "A Primer for Computational Biology",
      author: "Shawn T. O'Neil",
      edition: "Open Textbook PDF",
      year: "2021",
      publisher: "Oregon State University / Biology LibreTexts",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-cyan-800 to-blue-950",
      accent: "cyan",
      isbn: "",
      pages: "201",
      description_az: "Bioloqlar və tələbələr üçün praktiki hesablama bələdçisi: Linux/Unix əmr sətri, Python ilə bioloji ardıcıllıq analizi, Biopython/scriptinq və R mühitində statistika.",
      description_en: "Practical university primer teaching life scientists the Unix command line, Python scripting for biological sequences, and statistical programming in R.",
      topics: ["Linux & Bash", "Python Biologiya Üçün", "R Statistika", "Ardıcıllıq Analizi", "OSU Open PDF"],
      topics_en: ["Linux & Bash", "Python for Biology", "R Statistics", "Sequence Analysis", "OSU Open PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-40832/Full.pdf",
      link_type: "Oregon State / LibreTexts (Birbaşa PDF)"
    },
    {
      id: "book-feenstra-structural-bioinfo",
      title_az: "Struktur Bioinformatikaya Giriş (Fəsil İcmalı və Keçidlər)",
      title_en: "Introduction to Structural Bioinformatics",
      author: "K. Anton Feenstra, Sanne Abeln",
      edition: "CC BY 4.0 Book Hub",
      year: "2023",
      publisher: "Vrije Universiteit Amsterdam (IBIVU) / arXiv",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-indigo-800 to-slate-950",
      accent: "indigo",
      isbn: "",
      pages: "9",
      description_az: "Vrije Universiteit Amsterdam alimlərinin zülal strukturu, struktur müqayisəsi, struktur proqnozlaşdırması, molekulyar dinamika və Monte Karlo simulyasiyaları üzrə CC BY 4.0 açıq dərsliyinin kliklənən fəsil PDF bələdçisi.",
      description_en: "CC BY 4.0 open book overview & clickable chapter index PDF from Vrije Universiteit Amsterdam covering protein structure comparison, homology modeling, and molecular dynamics.",
      topics: ["3D Zülal Strukturu", "Struktur Proqnozlaşdırma", "Molekulyar Dinamika", "Struktur Düzləndirmə", "arXiv Open PDF"],
      topics_en: ["3D Protein Structure", "Structure Prediction", "Molecular Dynamics", "Structural Alignment", "arXiv Open PDF"],
      link: "https://arxiv.org/pdf/1801.09442",
      link_type: "VU Amsterdam / arXiv (Birbaşa PDF)"
    },
    {
      id: "book-coghlan-r-bioinfo",
      title_az: "Bioinformatika Üçün R Bələdçisi",
      title_en: "A Little Book of R for Bioinformatics",
      author: "Avril Coghlan",
      edition: "Release 0.1",
      year: "2017",
      publisher: "Wellcome Sanger Institute / Read the Docs",
      category: "bioinformatics",
      language: "en",
      lang_label: "English",
      cover_color: "from-emerald-800 to-teal-950",
      accent: "emerald",
      isbn: "",
      pages: "193",
      description_az: "Bioinformatikada R və Bioconductor paketləri (`SeqinR`) ilə iş üzrə açıq praktiki kitab: DNT/zülal statistikası, cütləşdirilmiş və çoxlu ardıcıllıq düzləndirməsi, filogenetik ağaclar və HMM-lər.",
      description_en: "Open-access practical guide using R and Bioconductor/SeqinR for DNA and protein sequence statistics, pairwise and multiple alignments, phylogenetic trees, and HMMs.",
      topics: ["R & Bioconductor", "SeqinR Paketi", "DNT & Zülal Statistikası", "Filogenetik Ağaclar", "Open PDF"],
      topics_en: ["R & Bioconductor", "SeqinR Package", "DNA & Protein Stats", "Phylogenetic Trees", "Open PDF"],
      link: "https://app.readthedocs.org/projects/a-little-book-of-r-for-bioinformatics/downloads/pdf/latest/",
      link_type: "Wellcome Sanger / Read the Docs (Birbaşa PDF)"
    },

    // -------------------------------------------------------------
    // MOLECULAR BIOLOGY & BIOCHEMISTRY (ENGLISH OPEN-ACCESS PDFs)
    // -------------------------------------------------------------
    {
      id: "book-openstax-biology-2e",
      title_az: "Biologiya 2e (Molekulyar Biologiya & Genetika)",
      title_en: "Biology 2e (OpenStax)",
      author: "Mary Ann Clark, Matthew Douglas, Jung Choi",
      edition: "2nd Edition (Open PDF)",
      year: "2018",
      publisher: "OpenStax (Rice University)",
      category: "molecular_biology",
      language: "en",
      lang_label: "English",
      cover_color: "from-blue-800 to-indigo-950",
      accent: "blue",
      isbn: "978-1-947172-52-4",
      pages: "1447",
      description_az: "Rice Universitetinin CC BY 4.0 lisenziyalı fundamental dərsliyi: hüceyrə quruluşu, biomolekullar, DNT strukturu və replikasiyası, transkripsiya, gen ifadəsi, biotexnologiya və genomika.",
      description_en: "Peer-reviewed CC BY 4.0 textbook from OpenStax (Rice University) detailing macromolecule chemistry, cell biology, DNA replication, gene regulation, biotechnology, and genomics.",
      topics: ["Makromolekullar", "Hüceyrə Biologiyası", "Gen İfadəsi", "Biotexnologiya & Genomika", "OpenStax PDF"],
      topics_en: ["Macromolecules", "Cell Biology", "Gene Expression", "Biotechnology & Genomics", "OpenStax PDF"],
      link: "https://assets.openstax.org/oscms-prodcms/media/documents/Biology-2e_-_WEB.pdf",
      link_type: "OpenStax / Rice University (Birbaşa PDF)"
    },
    {
      id: "book-ahern-biochemistry-free",
      title_az: "Biokimya Hamı Üçün (Biochemistry Free For All)",
      title_en: "Biochemistry Free For All",
      author: "Kevin Ahern, Indira Rajagopal, Taralyn Tan",
      edition: "Open Textbook PDF",
      year: "2021",
      publisher: "Oregon State University / Biology LibreTexts",
      category: "biochemistry",
      language: "en",
      lang_label: "English",
      cover_color: "from-amber-800 to-stone-950",
      accent: "amber",
      isbn: "",
      pages: "506",
      description_az: "Oregon Dövlət Universitetinin açıq biokimya dərsliyi: su və buferlər, amin turşuları, zülal qatlanması, hemoproteinlər, ferment kinetikası, bioenergetika, metabolizm və siqnal ötürülməsi.",
      description_en: "Open-access Oregon State University textbook covering amino acids, protein folding, enzyme kinetics, allosteric regulation, bioenergetics, metabolic pathways, and signaling.",
      topics: ["Amin Turşuları & Zülallar", "Ferment Kinetikası", "Metabolik Yollar", "Bioenergetika", "OSU Open PDF"],
      topics_en: ["Amino Acids & Proteins", "Enzyme Kinetics", "Metabolic Pathways", "Bioenergetics", "OSU Open PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-7800/Full.pdf",
      link_type: "Oregon State / LibreTexts (Birbaşa PDF)"
    },
    {
      id: "book-bergtrom-cell-mol",
      title_az: "Əsas Hüceyrə və Molekulyar Biologiya",
      title_en: "Basic Cell and Molecular Biology",
      author: "Gerald Bergtrom",
      edition: "Open Textbook PDF",
      year: "2025",
      publisher: "University of Wisconsin-Milwaukee / Biology LibreTexts",
      category: "molecular_biology",
      language: "en",
      lang_label: "English",
      cover_color: "from-sky-800 to-slate-950",
      accent: "sky",
      isbn: "",
      pages: "406",
      description_az: "Viskonsin-Miluoki Universitetinin molekulyar biologiya dərsliyi: eksperimental kəşflər işığında zülal strukturu, xromatin, replikasiya, transkripsiya, gen tənzimlənməsi və rekombinant DNT.",
      description_en: "CC BY 4.0 university textbook from UW-Milwaukee examining macromolecules, bioenergetics, replication, transcription, gene regulation, cytoskeleton, and recombinant DNA.",
      topics: ["Molekulyar Mexanizmlər", "Xromatin & Gen Nəzarəti", "Transkripsiya & Translyasiya", "Rekombinant DNT", "UWM Open PDF"],
      topics_en: ["Molecular Mechanisms", "Chromatin & Regulation", "Transcription & Translation", "Recombinant DNA", "UWM Open PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-16407/Full.pdf",
      link_type: "UW-Milwaukee / LibreTexts (Birbaşa PDF)"
    },
    {
      id: "book-wong-cells-mechanisms",
      title_az: "Hüceyrələr: Molekullar və Mexanizmlər",
      title_en: "Cells: Molecules and Mechanisms",
      author: "E. V. Wong",
      edition: "Open Textbook PDF",
      year: "2021",
      publisher: "Axolotl Academica Publishing / Biology LibreTexts",
      category: "molecular_biology",
      language: "en",
      lang_label: "English",
      cover_color: "from-cyan-900 to-slate-950",
      accent: "cyan",
      isbn: "",
      pages: "302",
      description_az: "Hüceyrənin molekulyar biologiyası və bioenergetikası: üzvi biomolekullar, ferment termodinamikası, membran nəqli, qlikoliz, elektron nəqli zənciri və hüceyrə dövrü.",
      description_en: "Molecular cell biology and bioenergetics textbook covering biomolecular interactions, enzyme thermodynamics, membrane transport, metabolism, DNA replication, and cell cycle.",
      topics: ["Biomolekullar", "Ferment Termodinamikası", "Membran Biologiyası", "Gen İfadəsi", "LibreTexts Open PDF"],
      topics_en: ["Biomolecules", "Enzyme Thermodynamics", "Membrane Biology", "Gene Expression", "LibreTexts Open PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-16085/Full.pdf",
      link_type: "LibreTexts (Birbaşa PDF)"
    },

    // -------------------------------------------------------------
    // GENETICS & GENOMICS (ENGLISH OPEN-ACCESS PDFs)
    // -------------------------------------------------------------
    {
      id: "book-hardison-molecular-genetics",
      title_az: "Molekulyar Genetika ilə İş",
      title_en: "Working with Molecular Genetics",
      author: "Ross C. Hardison",
      edition: "Open Textbook PDF",
      year: "2021",
      publisher: "The Pennsylvania State University / Biology LibreTexts",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-purple-900 to-indigo-950",
      accent: "purple",
      isbn: "",
      pages: "356",
      description_az: "Penn State Universitetinin molekulyar genetika dərsliyi: nuklein turşularının strukturu, klonlaşdırma, replikasiya, DNT zədələnməsi və bərpası, rekombinasiya, transpozonlar və transkripsiya nəzarəti.",
      description_en: "Penn State University textbook detailing DNA structure, cloning & genomics, replication, repair, homologous recombination, transposition, and transcriptional regulation.",
      topics: ["DNT Strukturu & Replikasiya", "DNT Bərpası & Rekombinasiya", "Transpozonlar", "Transkripsiya Tənzimlənməsi", "Penn State PDF"],
      topics_en: ["DNA Structure & Replication", "DNA Repair & Recombination", "Transposition", "Transcriptional Control", "Penn State PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-290/Full.pdf",
      link_type: "Penn State / LibreTexts (Birbaşa PDF)"
    },
    {
      id: "book-klymkowsky-biofundamentals",
      title_az: "Biofundamentals 2e: Təkamül, Molekulyar və Hüceyrə Biologiyası",
      title_en: "Biofundamentals 2e: Evolutionary, Molecular & Cellular Biology",
      author: "Michael W. Klymkowsky, Melanie M. Cooper",
      edition: "2nd Edition (Open PDF)",
      year: "2025",
      publisher: "University of Colorado Boulder & Michigan State University / LibreTexts",
      category: "genetics",
      language: "en",
      lang_label: "English",
      cover_color: "from-fuchsia-900 to-slate-950",
      accent: "fuchsia",
      isbn: "",
      pages: "342",
      description_az: "Kolorado-Boulder və Miçiqan Dövlət Universitetlərinin molekulyar genetika və təkamül prinsipləri dərsliyi: mutasiyalar, təbii seçmə, Mendel irsiyyəti, gen axını və genom təkamülü.",
      description_en: "Open-access textbook from CU Boulder & Michigan State connecting molecular biology, genetic variation, mutations, Mendelian inheritance, and evolutionary genomics.",
      topics: ["Genetik Dəyişkənlik", "Mutasiya & Təkamül", "Mendel İrsiyyəti", "Molekulyar Mexanizmlər", "LibreTexts Open PDF"],
      topics_en: ["Genetic Variation", "Mutation & Evolution", "Mendelian Inheritance", "Molecular Mechanisms", "LibreTexts Open PDF"],
      link: "https://batch.libretexts.org/print/Letter/Finished/bio-181609/Full.pdf",
      link_type: "CU Boulder & MSU / LibreTexts (Birbaşa PDF)"
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
      
      var linkBtnLabel = isEn ? 'Open PDF' : 'PDF-i Aç';
      var linkIcon = 'fa-file-pdf';
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
        modalLink.innerHTML = '<i class="fa-solid fa-file-pdf text-xs mr-1"></i> ' + (isEn ? 'Open Verified Open-Access PDF' : 'Rəsmi Açıq PDF-i Aç') + ' (' + book.link_type + ')';
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
