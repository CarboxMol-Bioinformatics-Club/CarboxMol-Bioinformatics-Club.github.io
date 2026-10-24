// CarboxMol Bioinformatika Klubu - İlkin Verilənlər Bazası (Local DB)

const INITIAL_DATA = {
  clubInfo: {
    name: "CarboxMol Bioinformatika Klubu",
    englishName: "CarboxMol Bioinformatics Club",
    university: "Qərbi Kaspi Universiteti (Western Caspian University)",
    year: "2026/2027",
    president: "Süleyman Mehdi oğlu Hacızadə",
    presidentTitle: "Təsisçi və Klub Sədri | Bioinformatika Mütəxəssisi",
    presidentEducation: "Western Caspian University, Biologiya (İngilis dili), 2021–2026",
    presidentBio: "Qərbi Kaspi Universiteti Biologiya (İngilis dili) 2021–2026 (V kurs tələbəsi). Azərbaycan Elm və Təhsil Nazirliyi Molekulyar Biologiya İnstitutunun (IMB) Hesablama Struktur Biologiyası Laboratoriyasında Bioinformatika Mütəxəssisi. Holberton School Azerbaijan Kompüter Elmləri məzunu.",
    presidentPhoto: "assets/images/president.jpg",
    presidentGithub: "https://github.com/SuleimanHajizadeh",
    phones: ["+994 70 550 69 07", "+994 99 350 69 07"],
    contactEmail: "suleyman.hacizade.232bioing@wcu.edu.az",
    githubRepo: "https://github.com/SuleimanHajizadeh",
    meetingLocation: "Əhməd Rəcəbli korpusu, Kompüter və Bio-laboratoriya mərkəzi",
    registrationVideo: {
      title: "Kluba Üzvlük Qeydiyyatı Video Bələdçisi",
      duration: "00:36",
      quality: "360p",
      description: "Qeydiyyat anketini düzgün və səhvsiz doldurmaq üçün addım-addım 36 saniyəlik səsli video təlimat.",
      videoUrl: "https://www.youtube.com/watch?v=1O_b3W_6V-w",
      videoEmbed: "https://www.youtube.com/embed/1O_b3W_6V-w"
    }
  },

  documents: [
    {
      id: "03_struktur",
      title: "Təşkilati Struktur",
      subtitle: "Klub Sədri və Klub Üzvləri vəzifə bölgüsü",
      category: "Struktur",
      pdfUrl: "docs/03_Teshkilati_Struktur.pdf",
      docxUrl: "docs/03_Teshkilati_Struktur.docx",
      mdUrl: "docs/03_Teshkilati_Struktur.md",
      icon: "fa-sitemap",
      description: "Klub Sədri (Carbox & CarboxMol həmmüəllifi) və Klub Üzvlərinin vəzifə bölgüsü, 3D struktur laboratoriyalarında tədris rəhbərliyi."
    },
    {
      id: "04_plan",
      title: "İllik Fəaliyyət Planı və Sillabus",
      subtitle: "2 semestr (28 həftəlik) dərinləşdirilmiş akademik sillabus",
      category: "Tədris",
      pdfUrl: "docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.pdf",
      docxUrl: "docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.docx",
      mdUrl: "docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.md",
      icon: "fa-calendar-check",
      description: "Payız və Yaz semestrləri (28 həftə): Linux/Bash, Python, Biopython, BLAST, AlphaFold, PyMOL, ChimeraX, Coot, GemmiMol, Carbox & CarboxMol laboratoriyaları, R/Bioconductor, RNA-seq, ML və WCU Hakaton planı."
    }
  ],

  events: [
    {
      id: "ev-1",
      title: "Xüsusi Elmi Seminar: Bayes statistikası — Struktur biologiyaya tətbiqi",
      category: "Xüsusi Elmi Seminar",
      date: "20 Oktyabr 2026",
      time: "10:00 - 13:00",
      location: "WCU Təbiət Korpusu, Akt Zalı",
      badge: "Uğurla Keçirildi • 4 Foto",
      description: "Kembric Universitetinin professoru və MRC Molekulyar Biologiya Laboratoriyasının (MRC LMB, Cambridge, UK) Proqram Rəhbəri Prof. Qərib Mürşüdovun ustad dərsi və elmi seminarı. Klub üzvlərindən bəzi üzvlər aktiv iştirak etdilər, suallar verdilər və suallarına dünya şöhrətli alim tərəfindən ətraflı cavab aldılar.",
      speaker: "Prof. Qərib Mürşüdov (MRC LMB Cambridge) & Süleyman Hacızadə (Klub Sədri)",
      status: "completed",
      report: "Klub üzvlərindən bəzi üzvlər aktiv iştirak etdilər, suallar verdilər və suallarına cavab aldılar.",
      photos: [
        {
          src: "assets/images/events/garib_murshudov_seminar_group.jpg",
          title: "Böyük Qrup Xatirə Fotosu",
          caption: "Qərbi Kaspi Universiteti rəhbərliyi, tələbələr, klub üzvləri və Prof. Qərib Mürşüdov"
        },
        {
          src: "assets/images/events/garib_murshudov_seminar_president.jpg",
          title: "Klub Sədri və Qonaq Alim",
          caption: "CarboxMol Bioinformatika Klubunun Sədri Süleyman Hacızadə və Prof. Qərib Mürşüdov"
        },
        {
          src: "assets/images/events/garib_murshudov_seminar_member1.jpg",
          title: "Klub Üzvü ilə Görüş",
          caption: "Klub Üzvü, Sədr Süleyman Hacızadə və Prof. Qərib Mürşüdov (Sual-cavab sessiyası xatirəsi)"
        },
        {
          src: "assets/images/events/garib_murshudov_seminar_member2.jpg",
          title: "Klub Üzvü ilə Görüş",
          caption: "Klub Üzvü, Prof. Qərib Mürşüdov və Klub Sədri Süleyman Hacızadə"
        }
      ]
    },
    {
      id: "ev-2",
      title: "Vörkşop #1: Bioloji Məlumat Bazaları (NCBI, UniProt, PDB)",
      category: "Praktiki Laboratoriya",
      date: "24 Oktyabr 2026",
      time: "14:00 - 16:00",
      location: "Kompüter Laboratoriyası #304",
      badge: "Qeydiyyat Açıqdır",
      description: "NCBI Entrez vasitəsilə gen axtarışı, FASTA formatlarının yüklənməsi, BLAST aləti ilə ardıcıllıq oxşarlıqlarının təyini.",
      speaker: "Bioinformatika Təlimçisi",
      status: "upcoming"
    },
    {
      id: "ev-3",
      title: "Hands-on Təlim: Python və Biopython ilə DNT Analizi",
      category: "Kodlaşdırma Vörkşopu",
      date: "07 Noyabr 2026",
      time: "14:00 - 16:30",
      location: "Online / Laboratoriya Hibrid",
      badge: "Praktiki Kod",
      description: "Biopython quraşdırılması, DNT -> mRNT transkripsiyası, zülal translyasiyası və GC nisbətinin hesablanması.",
      speaker: "Klubun Texniki Mentorları",
      status: "upcoming"
    },
    {
      id: "ev-4",
      title: "Journal Club #1: CRISPR və Süni İntellekt Gen Redaktəsində",
      category: "Elmi Müzakirə",
      date: "21 Noyabr 2026",
      time: "15:30 - 17:00",
      location: "WCU Kitabxanası / Coworking",
      badge: "Məqalə Müzakirəsi",
      description: "Nature jurnalında dərc olunmuş ən son CRISPR qrafik modelləri haqqında məqalənin qrup şəklində təhlili və debatı.",
      speaker: "Klub Üzvləri Komandası",
      status: "upcoming"
    },
    {
      id: "ev-5",
      title: "Zülal Modelləşdirməsi: PyMOL, ChimeraX, Coot, Carbox & CarboxMol",
      category: "3D Modelləşdirmə",
      date: "05 Dekabr 2026",
      time: "14:00 - 16:00",
      location: "Laboratoriya #304",
      badge: "3D Strukturlar",
      description: "Zülalların kristalloqrafik məlumatlarının PDB-dən çəkilməsi, AlphaFold proqnozlarının 3D analizi, PyMOL, ChimeraX, Coot və klubumuzun yerli Carbox / CarboxMol proqramları ilə vizuallaşdırma və liqand birləşmə sahələri (hamısı tədris olunacaq).",
      speaker: "Struktur Biologiyası Mütəxəssisi (Süleyman Hacızadə)",
      status: "upcoming"
    }
  ],

  curriculumModules: [
    {
      semester: "I Semestr (Hissə A)",
      phase: "Bünövrə, Linux & Python Əsasları (Həftə 1–7)",
      weeks: "Oktyabr – Noyabr (7 Həftə)",
      topics: [
        {
          title: "Giriş və Orientasiya: Rəqəmsal Biologiya",
          tools: "Google Colab, GitHub, VS Code",
          details: "Mərkəzi Doqmanın rəqəmsal kodu, bioinformatikanın müasir səhiyyədə və fərdiləşdirilmiş tibbdə rolu.",
          icon: "fa-compass"
        },
        {
          title: "Linux Terminal & Bash Scripting",
          tools: "Bash, grep, awk, sed, cut, sort",
          details: "Böyük genom fayllarının süzülməsi, boru (pipe) xətləri və avtomatlaşdırılmış məlumat axınları.",
          icon: "fa-terminal"
        },
        {
          title: "Bioloji Bazalar və Fayl Formatları",
          tools: "NCBI Entrez, UniProt, FASTA, FASTQ, PDB, VCF",
          details: "Gen və zülal sekvenslərinin axtarışı, format konvertasiyası və annotasiyaların çıxarılması.",
          icon: "fa-database"
        },
        {
          title: "Python ilə Bioinformatikaya Giriş",
          tools: "Python 3, Lists, Dicts, Functions",
          details: "DNT ardıcıllığının uzunluğu, GC faizinin hesablanması, transkripsiya və fərdi skriptlər.",
          icon: "fa-code"
        },
        {
          title: "Biopython: Seq və SeqRecord Obyektləri",
          tools: "Biopython (Bio.Seq)",
          details: "Komplementar zəncir, kodon cədvəli əsasında translyasiya və açıq oxu çərçivələrinin (ORF) tapılması.",
          icon: "fa-dna"
        },
        {
          title: "Böyük Genom Fayllarının Emalı (SeqIO)",
          tools: "Biopython (Bio.SeqIO), Phred Scores",
          details: "Minlərlə sekvensi olan FASTQ fayllarının keyfiyyət süzgəcindən keçirilməsi və çeşidlənməsi.",
          icon: "fa-file-code"
        },
        {
          title: "Ardıcıllıq Hizalanması (Sequence Alignment)",
          tools: "Needleman-Wunsch, Smith-Waterman, BLOSUM62",
          details: "Dinamik proqramlaşdırma matrisləri, qlobal və lokal hizalama, mutasiyaların cütləşdirilməsi.",
          icon: "fa-align-left"
        }
      ]
    },
    {
      semester: "I Semestr (Hissə B)",
      phase: "BLAST, AlphaFold & 3D Struktur Biologiyası (Həftə 8–14)",
      weeks: "Noyabr – Dekabr (7 Həftə)",
      topics: [
        {
          title: "BLAST Alqoritmi və Hevristik Axtarış",
          tools: "NCBI BLAST+, blastn, blastp, E-value",
          details: "Statistik E-dəyəri, naməlum genlərin verilənlər bazasında ən yaxın homoloqlarının aşkarlanması.",
          icon: "fa-magnifying-glass"
        },
        {
          title: "Journal Club #1: CRISPR və Gen Redaktəsi",
          tools: "Nature Məqaləsi, Elmi Təqdimat",
          details: "CRISPR-Cas9 kompüter bələdçi RNT dizaynı və off-target mutasiya təhlili üzrə beynəlxalq müzakirə.",
          icon: "fa-newspaper"
        },
        {
          title: "Struktur Bioinformatikası: Zülal Mühəndisliyi",
          tools: "RCSB PDB, Bio.PDB, Ramachandran Plot",
          details: "Zülalların 1-ci, 2-ci və 3-cü dərəcəli konformasiyaları, hidrogen rabitələri və atom koordinatları.",
          icon: "fa-cubes"
        },
        {
          title: "3D Vizuallaşdırma və Struktur Laboratoriyası: PyMOL, ChimeraX, Coot, GemmiMol, Carbox & CarboxMol",
          tools: "PyMOL, UCSF ChimeraX, Coot, GemmiMol, Carbox, CarboxMol (Hamısı Tədris Ediləcək)",
          details: "Spike zülalı və ya İnsulinin 3D səth modelləri, elektrostatik potensial, kristalloqrafik elektron sıxlıqları və aktiv mərkəz sahələri; PyMOL, ChimeraX, Coot, GemmiMol və klubumuzun daxili elmi alətləri olan Carbox (həndəsi və koordinat analizi mühərriki) və CarboxMol (3D vizualizasiya aləti) proqramlarının praktiki tədrisi.",
          icon: "fa-cube"
        },
        {
          title: "AlphaFold & ESMFold AI Struktur İnqilabı",
          tools: "AlphaFold DB, ColabFold, pLDDT, PAE",
          details: "Dərin neyron şəbəkələri ilə zülalların 3D bükülməsinin proqnozlaşdırılması və etibarlılıq analizi.",
          icon: "fa-brain"
        },
        {
          title: "Filogenetika və Təkamül Ağacları",
          tools: "Clustal Omega, MEGA, Neighbor-Joining",
          details: "Çoxsaylı hizalama (MSA), filogenetik ağacların qurulması və növlərarası təkamülün modelləşdirilməsi.",
          icon: "fa-sitemap"
        },
        {
          title: "I Semestr Yekun Qiymətləndirməsi & Bio-Quiz",
          tools: "Bio-Quiz Platforması, Layihə Nümayişi",
          details: "Komanda miniproektlərinin təqdimatı, interaktiv bilik yarışması və fəal üzvlərin təltif edilməsi.",
          icon: "fa-trophy"
        }
      ]
    },
    {
      semester: "Qış Düşərgəsi",
      phase: "Genomics & Python Winter Bootcamp (İntensiv)",
      weeks: "Yanvar (3 Günlük İntensiv Marafon)",
      topics: [
        {
          title: "Rosalind Alqoritmik Həllər Marafonu",
          tools: "Rosalind.info, Python 3, GitHub",
          details: "Mürəkkəb bioinformatika proqramlaşdırma məsələlərinin canlı laboratoriya həlli və kod optimallaşdırması.",
          icon: "fa-laptop-code"
        },
        {
          title: "Komanda Git Repositoriyası İdarəçiliyi",
          tools: "Git branches, Pull Requests, Code Review",
          details: "Açıq mənbəli elmi kodların komanda halında GitHub üzərindən koordinasiyası və sınaqdan keçirilməsi.",
          icon: "fa-code-branch"
        }
      ]
    },
    {
      semester: "II Semestr (Hissə A)",
      phase: "R, Bioconductor & RNA-Seq Transkriptomika (Həftə 15–21)",
      weeks: "Fevral – Mart (7 Həftə)",
      topics: [
        {
          title: "R Dili və RStudio Ekosisteminə Giriş",
          tools: "RStudio, Tidyverse, dplyr, tidyr",
          details: "Vektorlaşdırılmış hesablama, böyük biologiya cədvəllərinin təmizlənməsi və statistik xülasəsi.",
          icon: "fa-r"
        },
        {
          title: "ggplot2 ilə Nəşr Səviyyəli Elmi Qrafiklər",
          tools: "ggplot2, Boxplot, PCA, Scatterplot",
          details: "Bioloji paylanmaların, gen ekspressiya dispersiyalarının yüksək dəqiqlikli vizuallaşdırılması.",
          icon: "fa-chart-simple"
        },
        {
          title: "Bioconductor və Genom Koordinatları",
          tools: "Bioconductor, GenomicRanges, GRanges",
          details: "Genom intervalları ilə iş, ekzon kəsişmələri və transkript annotasiyalarının avtomatlaşdırılması.",
          icon: "fa-diagram-project"
        },
        {
          title: "NGS Texnologiyaları & Keyfiyyət Nəzarəti",
          tools: "FastQC, Trimmomatic, MultiQC",
          details: "Next-Generation Sequencing ilkin xam oxunuşlarının adapterlərdən təmizlənməsi və keyfiyyət filtrləri.",
          icon: "fa-filter"
        },
        {
          title: "RNA-Seq: Oxunuşların Genoma Uyğunlaşdırılması",
          tools: "HISAT2, STAR, Samtools, BAM",
          details: "DNT/RNT oxunuşlarının insan referans genomuna (GRCh38) xəritələnməsi və sayım cədvəlləri.",
          icon: "fa-microchip"
        },
        {
          title: "Diferensial Gen İfadəsi (DGE Analizi)",
          tools: "DESeq2, edgeR, Read Counts",
          details: "Normal və xərçəng toxumaları arasında statistik əhəmiyyətli dərəcədə fərqlənən genlərin aşkarlanması.",
          icon: "fa-chart-line"
        },
        {
          title: "Qabaqcıl RNA-Seq: Volcano & Heatmap",
          tools: "EnhancedVolcano, ComplexHeatmap, pheatmap",
          details: "Volcano qrafiki ilə əsas genlərin vurğulanması və çoxsaylı nümunələrin klasterləşdirilmiş istilik xəritəsi.",
          icon: "fa-fire"
        }
      ]
    },
    {
      semester: "II Semestr (Hissə B)",
      phase: "Süni İntellekt, Dərman Dokinqi & WCU Hakaton (Həftə 22–28)",
      weeks: "Aprel – May (7 Həftə)",
      topics: [
        {
          title: "Funksional Zənginləşdirmə: GO & KEGG",
          tools: "clusterProfiler, STRING-DB, Pathway Analysis",
          details: "Fərqlənən genlərin hüceyrəvi prosesləri və biokimyəvi siqnal yolları üzrə statistik testləri (GSEA).",
          icon: "fa-network-wired"
        },
        {
          title: "Journal Club #2: Dəqiq Onkologiya",
          tools: "Cell / Nature Reviews Genetics Müzakirəsi",
          details: "Şəxsiləşdirilmiş xərçəng müalicəsində mutasiya profilləri və immunoterapiya biomarkerlərinin təhlili.",
          icon: "fa-book-open"
        },
        {
          title: "Molekulyar Dokinq və Kompüter Dərman Dizaynı",
          tools: "AutoDock Vina, PyMOL, UCSF ChimeraX, Carbox, CarboxMol (Tədris Ediləcək)",
          details: "Xərçəng hədəf zülalının aktiv cibi ilə kiçik molekullu dərman namizədinin virtual bağlanma enerjisi (ΔG); PyMOL, ChimeraX, Carbox və CarboxMol ilə komplekslərin konformasiya analizi.",
          icon: "fa-capsules"
        },
        {
          title: "Bioinformatikada Maşın Öyrənməsi (ML)",
          tools: "Scikit-Learn, Random Forest, SVM",
          details: "Xəstəliklərin klinik və genomik göstəriciləri əsasında diaqnostik təsnifat modellərinin qurulması.",
          icon: "fa-robot"
        },
        {
          title: "CarboxMol Bio-Data Hakatonu: Başlanğıc & Datasetlər",
          tools: "Kaggle, Real Klinik Datasetlər, GitHub",
          details: "Hakaton elanı: Tələbə komandalarına real anonimləşdirilmiş xəstəlik verilənlərinin təqdimi və hipotezlər.",
          icon: "fa-flag-checkered"
        },
        {
          title: "Hakaton: Komanda Tədqiqatı və Mentorluq",
          tools: "Mentor Dəstəyi, Kod Yoxlanışı",
          details: "Komandaların bioinformatik analizlərinin yekunlaşdırılması, elmi posterlərin və nəticələrin tərtibi.",
          icon: "fa-users"
        },
        {
          title: "İllik Elmi Sərgi, Konfrans & Sertifikatlaşdırma",
          tools: "WCU Böyük Konfrans Zalı, Poster Müdafiəsi",
          details: "Rektorluq və dəvət olunmuş alimlər qarşısında layihə müdafiəsi, qalib komandaların və məzunların mükafatlandırılması.",
          icon: "fa-award"
        }
      ]
    }
  ],

  tasks: [
    {
      id: "task-101",
      title: "Laboratoriya #1: Biopython ilə DNT Transkripsiyası və ORF Axtarışı",
      category: "Biopython & Kodlaşdırma",
      difficulty: "Başlanğıc / Orta",
      deadline: "15 Noyabr 2026",
      targetGroup: "Bütün Klub Üzvləri",
      status: "Aktiv",
      summary: "SARS-CoV-2 genomunun FASTA faylını oxuyaraq mRNT transkripsiyası, aminturşu translyasiyası və GC nisbətini hesablayan Biopython skripti hazırlayın.",
      imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "DNT ikili heliks modeli, translyasiya və hesablama biologiyası ardıcıllıq analizi",
      videoUrl: "https://www.youtube.com/watch?v=1O_b3W_6V-w",
      videoEmbed: "https://www.youtube.com/embed/1O_b3W_6V-w",
      videoTitle: "Biopython ilə DNT Analizi və FASTA Oxunması (360p İzahlı Dərslik)",
      videoDuration: "04:30",
      videoQuality: "360p",
      document: {
        name: "SARS_CoV_2_Spike_Reference.fasta",
        type: "fasta",
        size: "14.2 KB",
        url: "",
        rawContent: `>NC_045512.2_Spike_Glycoprotein_Region Severe acute respiratory syndrome coronavirus 2
ATGTTTGTTTTTCTTGTTTTATTGCCACTAGTCTCTAGTCAGTGTGTTAATCTTACAACCAGAACTCAATTACCCCCTGCATACACTAATTCTTTCACACGTGGTGTTTATTACCCTGACAAAGTTTTCAGATCCTCAGTTTTACATTCAACTCAGGACTTGTTCTTACCTTTCTTTTCCAATGTTACTTGGTTCCATGCTATACATGTCTCTGGGACCAATGGTACTAAGAGGTTTGATAACCCTGTCCTACCATTTAATGATGGTGTTTATTTTGCTTCCACTGAGAAGTCTAACATAATAAGAGGCTGGATTTTTGGTACTACTTTAGATTCGAAGACCCAGTCCCTACTTATTGTTAATAACGCTACTAATGTTGTTATTAAAGTCTGTGAATTTCAATTTTGTAATGATCCATTTTTGGGTGTTTATTACCACAAAAACAACAAAAGTTGGATGGAAAGTGAGTTCAGAGTTTATTCTAGTGCGAATAATTGCACTTTTGAATATGTCTCTCAGCCTTTTCTTATGGACCTTGAAGGAAAACAGGGTAATTTCAAAAATCTTAGGGAATTTGTGTTTAAGAATATTGATGGTTATTTTAAAATATATTCTAAGCACACGCCTATTAATTTAGTGCGTGATCTCCCTCAGGGTTTTTCGGCTTTAGAACCATTGGTAGATTTGCCAATAGGTATTAACATCACTAGGTTTCAAACTTTACTTGCTTTACATAGAAGTTATTTGACTCCTGGTGATTCTTCTTCAGGTTGGACAGCTGGTGCTGCAGCTTATTATGTGGGTTATCTTCAACCTAGGACTTTTCTATTAAAATATAATGAAAATGGAACCATTACAGATGCTGTAGACTGTGCACTTGACCCTCTCTCAGAAACAAAGTGTACGTTGAAATCCTTCACTGTAGAAAAAGGAATCTATCAAACTTCTAACTTTAGAGTCCAACCAACAGAATCTATTGTTAGATTTCCTAATATTACAAACTTGTGCCCTTTTGGTGAAGTTTTTAACGCCACCAGATTTGCATCTGTTTATGCTTGGAACAGGAAGAGAATCAGCAACTGTGTTGCTGATTATTCTGTCCTATATAATTCCGCATCATTTTCCACTTTTAAGTGTTATGGAGTGTCTCCTACTAAATTAAATGATCTCTGCTTTACTAATGTCTATGCAGATTCATTTGTAATTAGAGGTGATGAAGTCAGACAAATCGCTCCAGGGCAAACTGGAAAGATTGCTGATTATAATTATAAATTACCAGATGATTTTACAGGCTGCGTTATAGCTTGGAATTCTAACAATCTTGATTCTAAGGTTGGTGGTAATTATAATTACCTGTATAGATTGTTTAGGAAGTCTAATCTCAAACCTTTTGAGAGAGATATTTCAACTGAAATCTATCAGGCCGGTAGCACACCTTGTAATGGTGTTGAAGGTTTTAATTGTTACTTTCCTTTACAATCATATGGTTTCCAACCCACTAATGGTGTTGGTTACCAACCATACAGAGTAGTAGTACTTTCTTTTGAACTTCTACATGCACCAGCAACTGTTTGTGGACCTAAAAAGTCTACTAATTTGGTTAAAAACAAATGTGTCAATTTCAACTTCAATGGTTTAACAGGCACAGGTGTTCTTACTGAGTCTAACAAAAAGTTTCTGCCTTTCCAACAATTTGGCAGAGACATTGCTGACACTACTGATGCTGTCCGTGATCCACAGACACTTGAGATTCTTGACATTACACCATGTTCTTTTGGTGGTGTCAGTGTTATAACACCAGGAACAAATACTTCTAACCAGGTTGCTGTTCTTTATCAGGATGTTAACTGCACAGAAGTCCCTGTTGCTATTCATGCAGATCAACTTACTCCTACTTGGCGTGTTTATTCTACAGGTTCTAATGTTTTTCAAACACGTGCAGGCTGTTTAATAGGGGCTGAACATGTCAACAACTCATATGAGTGTGACATACCCATTGGTGCAGGTATATGCGCTAGTTATCAGACTCAGACTAATTCTCCTCGGCGGGCACGTAGTGTAGCTAGTCAATCCATCATTGCCTACACTATGTCACTTGGTGCAGAAAATTCAGTTGCTTACTCTAATAACTCTATTGCCATACCCACAAATTTTACTATTAGTGTTACCACAGAAATTCTACCAGTGTCTATGACCAAGACATCAGTAGATTGTACAATGTACATTTGTGGTGATTCAACTGAATGCAGCAATCTTTTGTTGCAATATGGCAGTTTTTGTACACAATTAAACCGTGCTTTAACTGGAATAGCTGTTGAACAAGACAAAAACACCCAAGAAGTTTTTGCACAAGTCAAACAAATTTACAAAACACCACCAATTAAAGATTTTGGTGGTTTTAATTTTTCACAAATATTACCAGATCCATCAAAACCAAGCAAGAGGTCATTTATTGAAGATCTACTTTTCAACAAAGTGACACTTGCAGATGCTGGCTTCATCAAACAATATGGTGATTGCCTTGGTGATATTGCTGCTAGAGACCTCATTTGTGCACAAAAGTTTAACGGCCTTACTGTTTTGCCACCTTTGCTCACAGATGAAATGATTGCTCAATACACTTCTGCACTGTTAGCGGGTACAATCACTTCTGGTTGGACCTTTGGTGCAGGTGCTGCATTACAAATACCATTTGCTATGCAAATGGCTTATAGGTTTAATGGTATTGGAGTTACACAGAATGTTCTCTATGAGAACCAAAAATTGATTGCCAACCAATTTAATAGTGCTATTGGCAAAATTCAAGACTCACTTTCTTCCACAGCAAGTGCACTTGGAAAACTTCAAGATGTGGTCAACCAAAATGCACAAGCTTTAAACACGCTTGTTAAACAACTTAGCTCCAATTTTGGTGCAATTTCAAGTGTTTTAAATGATATCCTTTCACGTCTTGACAAAGTTGAGGCTGAAGTGCAAATTGATAGGTTGATCACAGGCAGACTTCAAAGTTTGCAGACATATGTGACTCAACAATTAATTAGAGCTGCAGAAATCAGAGCTTCTGCTAATCTTGCTGCTACTAAAATGTCAGAGTGTGTACTTGGACAATCAAAAAGAGTTGATTTTTGTGGAAAGGGCTATCATCTTATGTCCTTCCCTCAGTCAGCACCTCATGGTGTAGTCTTCTTGCATGTGACTTATGTCCCTGCACAAGAAAAGAACTTCACAACTGCTCCTGCCATTTGTCATGATGGAAAAGCACACTTTCCTCGTGAAGGTGTCTTTGTTTCAAATGGCACACACTGGTTTGTAACACAAAGGAATTTTTATGAACCACAAATCATTACTACAGACAACACATTTGTGTCTGGTAACTGTGATGTTGTAATAGGAATTGTCAACAACACAGTTTATGATCCTTTGCAACCTGAATTAGACTCATTCAAGGAGGAGTTAGATAAATATTTTAAGAATCATACATCACCAGATGTTGATTTAGGTGACATCTCTGGCATTAATGCTTCAGTTGTAAACATTCAAAAAGAAATTGACCGCCTCAATGAGGTCGCCAAGAATTTAAATGAATCTCTCATCGATCTCCAAGAACTTGGAAAGTATGAGCAGTATATAAAATGGCCATGGTACATTTGGCTAGGTTTTATAGCTGGCTTGATTGCCATAGTAATGGTGACAATTATGCTTTGCTGTATGACCAGTTGCTGTAGTTGTCTCAAGGGCTGTTGTTCTTGTGGATCCTGCTGCAAATTTGATGAAGACGACTCTGAGCCAGTGCTCAAAGGAGTCAAATTACATTACACATAA`
      },
      instructions: `1. NCBI GenBank bazasından SARS-CoV-2 (Accession: NC_045512.2) FASTA sekvensini əldə edin və ya yuxarıdakı sənədi yükləmədən birbaşa tətbiq daxilində oxuyun.
2. Seq obyekti üzərində uzunluq, GC faizi və kodon tezliyini təyin edən funksiya yazın.
3. DNT zəncirini mRNT-yə transkripsiya edin və 6 mümkün oxu çərçivəsində (Open Reading Frame - ORF) zülallara translyasiya edin.
4. Spike (S) zülalına uyğun gələn ən uzun zülal seqmentini seçib nəticələrinizi Google Colab və ya GitHub repozitoriyasında saxlayaraq linki təhvil verin.`,
      starterCode: `# Biopython ilə Başlanğıc Nümunəsi
from Bio.Seq import Seq
from Bio import SeqIO

# Nümunə DNT ardıcıllığı
dna = Seq("ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG")
print("Orijinal DNT:", dna)
print("Komplementar zəncir:", dna.complement())
print("mRNT transkripsiyası:", dna.transcribe())
print("Zülal translyasiyası:", dna.translate())

# GC faizinin hesablanması
gc_content = 100 * float(dna.count("G") + dna.count("C")) / len(dna)
print(f"GC nisbəti: {gc_content:.2f}%")`,
      resourceLink: "https://colab.research.google.com",
      resourceName: "Google Colab-da Başla",
      submissions: []
    },
    {
      id: "task-102",
      title: "Laboratoriya #2: 3D Zülal Strukturu Analizi (PyMOL, ChimeraX, Coot, Carbox & CarboxMol)",
      category: "Struktur Biologiyası",
      difficulty: "Orta / İrəli",
      deadline: "28 Noyabr 2026",
      targetGroup: "Bütün Klub Üzvləri & Tədqiqat Komandası",
      status: "Aktiv",
      summary: "RCSB PDB bazasından Spike qlikoprotein (PDB ID: 6VXX) strukturunu yükləyərək PyMOL, UCSF ChimeraX, Coot, GemmiMol və klubumuzun yerli inkişaf etdirdiyi Carbox & CarboxMol proqramlarında ikincili strukturları, aktiv mərkəz sahələrini rəngləndirin və AlphaFold proqnozu ilə müqayisə edin (Bütün bu alətlər klubumuzun dərslərində praktiki tədris olunacaq).",
      imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "3D zülal kristalloqrafik modeli, elektron sıxlığı və alfa-spiral zəncirləri (PyMOL, ChimeraX, Coot, Carbox & CarboxMol)",
      videoUrl: "https://www.youtube.com/watch?v=FqB8Y_Qx4lI",
      videoEmbed: "https://www.youtube.com/embed/FqB8Y_Qx4lI",
      videoTitle: "3D Zülal Vizuallaşdırması və Liqand Analizi: PyMOL, ChimeraX, Coot, Carbox & CarboxMol (360p Dərslik)",
      videoDuration: "03:45",
      videoQuality: "360p",
      document: {
        name: "3D_Structural_Biology_Protocols.md",
        type: "markdown",
        size: "8.5 KB",
        url: "",
        rawContent: `# 3D Zülal Strukturu və Vizuallaşdırma Protokolu
## Məqsəd və Elmi Tələblər:
RCSB PDB bazasından Spike qlikoprotein (6VXX) strukturunun yüklənməsi, liqand sahələrinin seçilməsi, PyMOL, UCSF ChimeraX, Coot, GemmiMol və klubumuzun yerli inkişaf etdirdiyi Carbox / CarboxMol proqramları ilə müqayisəli qiymətləndirilməsi. Bu alətlərin hamısı CarboxMol Bioinformatika Klubunda dərslərdə praktiki olaraq keçiriləcəkdir.

### 1. PyMOL & CarboxMol Əmrləri:
\`\`\`bash
# PyMOL / CarboxMol interaktiv terminalı
fetch 6VXX
remove solvent
show cartoon, chain A
color cyan, ss h
color orange, ss s
select rbd, chain A and resi 319-541
show surface, rbd
color yellow, rbd
set ray_opaque_background, 0
png spike_rbd_render.png, dpi=300
\`\`\`

### 2. Carbox Mühərriki ilə Həndəsi Analiz:
- mmCIF/PDB koordinatlarının avtomatlaşdırılmış emalı
- Atomlararası rabitə bucaqları, dihedrallar və van-der-Vaals toqquşmaları
- Zülal-liqand qarşılıqlı təsir ciblərinin dəqiq koordinat xəritəsi

### 3. Coot & ChimeraX ilə Elektron Sıxlığı Təhlili:
- 2Fo-Fc və Fo-Fc fərq xəritələrində aminturşu rotamerlərinin real-space refinementi
- Krio-EM həcm sıxlığı və elektrostatik Kolomb potensial xəritələnməsi

### 4. AlphaFold pLDDT Təhlili:
- **pLDDT > 90**: Yüksək dəqiqlikli sahələr (Mavi)
- **70 < pLDDT < 90**: Yaxşı etibarlılıq (Açıq mavi)
- **50 < pLDDT < 70**: Aşağı etibarlılıq (Sarı)
- **pLDDT < 50**: Qeyri-müəyyən və ya nizamsız konformasiya (Narıncı/Qırmızı)`
      },
      instructions: `1. RCSB PDB-dən 6VXX strukturunu PyMOL və ya CarboxMol daxilində 'fetch 6VXX' əmri ilə yükləyin.
2. Su molekullarını (remove solvent) və lazımsız heterogen atomları təmizləyin.
3. Zülalı 'cartoon' rejimində göstərib ikincili strukturlara görə rəngləndirin (alfa-spirallar: firuzəyi, beta-qatlar: narıncı).
4. Reseptor birləşmə domenini (RBD: Chain A, 319-541 aminturşuları) seçərək 'surface' formatında göstərin və yüksək keyfiyyətli skrinşot çəkin.
5. Klubumuzun Carbox həndəsi analiz aləti və Coot/ChimeraX alətlərində eyni strukturu açıb fərqləri qeyd edin (Klub dərslərində hamısı keçiriləcək).
6. AlphaFold Database-dən (AF-P0DTC2-F1) pLDDT etibarlılıq xəritəsini çıxararaq müqayisəli qeyd yazın.`,
      starterCode: `# 3D Struktur Analizi və Skripti (PyMOL, ChimeraX, Carbox & CarboxMol)
fetch 6VXX
hide everything
show cartoon, chain A
color cyan, ss h
color orange, ss s
select rbd, chain A and resi 319-541
show surface, rbd
color yellow, rbd
set ray_opaque_background, 0
png spike_rbd_render.png, dpi=300`,
      resourceLink: "https://www.rcsb.org/structure/6VXX",
      resourceName: "RCSB PDB 6VXX Səhifəsi",
      submissions: []
    },
    {
      id: "task-103",
      title: "Laboratoriya #3: NCBI BLAST ilə Naməlum Sekvensin Təyini",
      category: "Genomika & Bazalar",
      difficulty: "Başlanğıc",
      deadline: "10 Dekabr 2026",
      targetGroup: "Bütün Klub Üzvləri",
      status: "Aktiv",
      summary: "Təqdim olunan naməlum DNT sekvensini NCBI Nucleotide BLAST (blastn) ilə axtararaq növü, gen ailəsini və E-value göstəricisini təyin edin.",
      imageUrl: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "NCBI GenBank və BLAST ardıcıllıq uyğunlaşdırma matrisi",
      videoUrl: "https://www.youtube.com/watch?v=jW_o3bZ8FmE",
      videoEmbed: "https://www.youtube.com/embed/jW_o3bZ8FmE",
      videoTitle: "NCBI BLAST İstifadə Qaydaları və Nəticələrin Təhlili (360p)",
      videoDuration: "04:50",
      videoQuality: "360p",
      document: {
        name: "Unknown_Sample_Query.fasta",
        type: "fasta",
        size: "1.8 KB",
        url: "",
        rawContent: `>Unknown_WCU_Sample_2026_Calmodulin_Like_Gene
ATGGCTGATCAACTGACTGAGGAGCAGATTGCAGAATTCAAGGAAGCATTCTCCCTATTT
GACAAGGATGGGGACGGCACTATCACAACAAAGGAGCTGGGCACTGTGATGCGGTCCCTG
GGACAGAACCCTACAGAAGCAGAGCTACAGGACATGATTAATGAAGTGGATGCTGATGGA
AATGGCACCATTGACTTCCCCGAATTTTTGACTATGATGGCTAGAAAAATGAAAGACACA
GACAGTGAAGAAGAAATTAGAGAAGCGTTCCGTGTGTTTGATAAGGATGGCAATGGCTAC`
      },
      instructions: `1. Aşağıdakı starter kod blokundakı naməlum FASTA ardıcıllığını kopyalayın və ya sənədi tətbiqdaxili baxışda incələyin.
2. NCBI BLAST (blastn) rəsmi platformasına daxil olaraq ardıcıllığı daxil edin və standart nr/nt bazası üzrə axtarış başladın.
3. Ən yüksək identiklik (Percent Identity) və 0-a yaxın E-value göstəricisinə malik ilk 3 nəticəni qeyd edin.
4. Bu genin canlı orqanizmdə hansı bioloji və fizioloji rola malik olduğunu 3-4 cümlə ilə izah edərək təhvil verin.`,
      starterCode: `>Unknown_WCU_Sample_2026
ATGGCTGATCAACTGACTGAGGAGCAGATTGCAGAATTCAAGGAAGCATTCTCCCTATTT
GACAAGGATGGGGACGGCACTATCACAACAAAGGAGCTGGGCACTGTGATGCGGTCCCTG
GGACAGAACCCTACAGAAGCAGAGCTACAGGACATGATTAATGAAGTGGATGCTGATGGA
AATGGCACCATTGACTTCCCCGAATTTTTGACTATGATGGCTAGAAAAATGAAAGACACA
GACAGTGAAGAAGAAATTAGAGAAGCGTTCCGTGTGTTTGATAAGGATGGCAATGGCTAC`,
      resourceLink: "https://blast.ncbi.nlm.nih.gov/Blast.cgi",
      resourceName: "NCBI BLAST Aləti",
      submissions: []
    }
  ],

  structuralTools: [
    {
      id: "tool-pymol",
      name: "PyMOL",
      badge: "Beynəlxalq Standart",
      category: "3D Molekulyar Qrafika",
      developer: "Schrödinger, Inc.",
      status: "Tədris Proqramına Daxildir (Keçiləcək)",
      description: "Zülal və nuklein turşusu makromolekullarının 3D renderi, elektron səthləri, zülal-liqand hidrogen rabitələri və nəşr səviyyəli illüstrasiyaların hazırlanması üçün dünyada ən çox istifadə olunan molekulyar qrafika sistemi.",
      syllabusWeek: "Həftə 11, Həftə 24",
      icon: "fa-cube"
    },
    {
      id: "tool-chimera",
      name: "UCSF Chimera / ChimeraX",
      badge: "Krio-EM & Komplekslər",
      category: "İnteraktiv Struktur Analizi",
      developer: "Resource for Biocomputing, UCSF",
      status: "Tədris Proqramına Daxildir (Keçiləcək)",
      description: "Böyük supramolekulyar komplekslərin, Krio-EM (Cryo-EM) sıxlıq xəritələrinin, ribosom və virus kapsidlərinin qabaqcıl vizuallaşdırılması və konformasiya analizləri üçün peşəkar proqram təminatı.",
      syllabusWeek: "Həftə 11, Həftə 24",
      icon: "fa-cubes"
    },
    {
      id: "tool-coot",
      name: "Coot (Crystallographic Object-Oriented Toolkit)",
      badge: "Kristalloqrafik Model Qurma",
      category: "Elektron Sıxlığı & Model İnşası",
      developer: "Paul Emsley & Kevin Cowtan",
      status: "Tədris Proqramına Daxildir (Keçiləcək)",
      description: "Makromolekulyar rentgen-kristalloqrafiyası və Krio-EM elektron sıxlığı xəritələrinə (electron density maps) atomik modellərin yerləşdirilməsi, rotamerlərin tənzimlənməsi və real-space refinement üçün qlobal standart alət.",
      syllabusWeek: "Həftə 11",
      icon: "fa-network-wired"
    },
    {
      id: "tool-gemmimol",
      name: "Gemmi / GemmiMol",
      badge: "Müasir C++ & Python Kitabxanası",
      category: "Makromolekulyar Koordinat Emalı",
      developer: "Marcin Wojdyr (CCP4 / Global Phasing)",
      status: "Tədris Proqramına Daxildir (Keçiləcək)",
      description: "Yeni nəsil mmCIF, PDB, MTZ və SF-convert fayllarının yüksək sürətlə oxunması, atomik həndəsənin, simmetriya əməliyyatlarının və kristalloqrafik məlumatların proqramlaşdırılması üçün müasir kitabxana.",
      syllabusWeek: "Həftə 11",
      icon: "fa-microchip"
    },
    {
      id: "tool-carbox",
      name: "Carbox",
      badge: "Daxili Elmi Workbench (Nəşr Edilməyib)",
      category: "Hesablama Struktur Biologiyası Mühərriki",
      developer: "Süleyman Hacızadə & Prof. Qərib Mürşüdov (Cambridge University, MRC LMB)",
      status: "Daxili Alət • Yalnız Süleyman və Qərib Müəllim İzah Edə Bilər",
      description: "PDB və mmCIF makromolekulyar koordinatlarının emalı, atomlararası rabitə bucaqları, dihedrallar, toqquşma analizi və zülal-liqand qarşılıqlı əlaqələrinin riyazi hesablanması üçün xüsusi mühərrik. Xüsusi Qeyd: Carbox hələ ki, rəsmi nəşr (publish) edilmədiyi üçün klubun daxili elmi aləti və workbench-i olaraq istifadə olunur və yalnız Süleyman Hacızadə və Prof. Qərib Mürşüdov tərəfindən izah edilə və tədris oluna bilər.",
      syllabusWeek: "Həftə 11, Həftə 24",
      icon: "fa-dna"
    },
    {
      id: "tool-carboxmol",
      name: "CarboxMol",
      badge: "Daxili Elmi Workbench (Nəşr Edilməyib)",
      category: "İnteraktiv 3D Biomolekulyar Vizualizator",
      developer: "Süleyman Hacızadə & Prof. Qərib Mürşüdov (Cambridge University, MRC LMB)",
      status: "Daxili Alət • Yalnız Süleyman və Qərib Müəllim İzah Edə Bilər",
      description: "İnteraktiv 3D biomolekulyar vizuallaşdırma və model render proqramı (PyMOL və ChimeraX analoqu): zülalların ikincili/üçüncülü strukturlarını (alfa-spiral, beta-qat), aktiv mərkəz ciblərini, elektrostatik səthləri və elektron sıxlıqlarını 3D mühitdə yüksək sürətlə vizuallaşdırmaq üçün daxili alət. Xüsusi Qeyd: CarboxMol hələ ki, rəsmi nəşr (publish) edilmədiyi üçün klubun daxili elmi aləti və workbench-i olaraq istifadə olunur və yalnız Süleyman Hacızadə və Prof. Qərib Mürşüdov tərəfindən izah edilə və tədris oluna bilər.",
      syllabusWeek: "Həftə 11, Həftə 24",
      icon: "fa-atom"
    }
  ],

  members: [
    {
      "id": "mem-fatima-01",
      "fullName": "Fatimə Piriyeva",
      "username": "fatimapirieva",
      "email": "fatimapirieva700@gmail.com",
      "phone": "+994 99 730 66 03",
      "password": "fatime2009",
      "role": "Klub Üzvü",
      "university": "Xəzər Universiteti",
      "faculty": "Xəzər Universiteti - Təbiət Elmləri",
      "major": "Biologiya müəllimliyi",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=fatimapirieva",
      "photo": "",
      "skills": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "motivation": "Bioinformatika sahəsində yeni bilik və bacarıqlara yiyələnmək istəyirəm.",
      "yearGoal": "Sərbəst şəkildə şəxsi elmi məqaləmi yazmaq.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-zehra-01",
      "fullName": "Zəhra Mehralizadə",
      "username": "zehra_mehralizade",
      "email": "zehramehralizade19@gmail.com",
      "phone": "+994 55 352 72 23",
      "password": "19122007Z",
      "role": "Klub Üzvü",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=zehra_mehralizade",
      "photo": "",
      "skills": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "motivation": "Texniki məlumatlarımı daha üst səviyyəyə qaldırıb biologiya ilə inteqrasiya etmək istəyirəm. CarboxMol Bioinformatika klubunun müasir standartları ilə özümü inkişaf etdirmək arzusundayam.",
      "yearGoal": "Şəxsi elmi məqaləmi hazırlamaq və beynəlxalq layihələrdə iştirak etmək.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-melek-01",
      "fullName": "Mələk Orucova",
      "username": "melek_08",
      "email": "melek.orucova@wcu.edu.az",
      "phone": "+994 50 712 34 56",
      "password": "MelekBio2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya (Biotexnologiya)",
      "course": "III Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=melek_08",
      "photo": "",
      "skills": [
        "Python",
        "Bioinformatika",
        "DNT Analizi",
        "NCBI"
      ],
      "motivation": "Biotexnologiya və molekulyar biologiya sahəsində nəzəri biliklərimi bioinformatika və DNT analizi ilə birləşdirmək.",
      "yearGoal": "Bioloji böyük verilənlər üzərində işləyərək mutasiyaların xəritələnməsi və zülal qarşılıqlı təsirlərini öyrənmək.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-nazryn-01",
      "fullName": "Nəzrin Məlikova",
      "username": "nazryn",
      "email": "nazryn.melikova@wcu.edu.az",
      "phone": "+994 50 445 12 34",
      "password": "NazrynBio2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nazryn",
      "photo": "",
      "skills": [
        "Python",
        "Biologiya",
        "Genom Analizi",
        "NCBI"
      ],
      "motivation": "Bioinformatika və genom analizlərində praktiki təcrübə qazanmaq və laboratoriya seminarlarında fəal iştirak etmək.",
      "yearGoal": "Genom sekvenslərinin analizi və Biopython ilə praktiki kodlaşdırma bacarığı qazanmaq.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-xadica-01",
      "fullName": "Xədicə Piriyeva",
      "username": "xadicapiriyeva",
      "email": "xadica.piriyeva2025@khazar.org",
      "phone": "+994 77 315 03 08",
      "password": "Doctor2025",
      "role": "Klub Üzvü",
      "university": "Xəzər Universiteti",
      "faculty": "Xəzər Universiteti - Həyat Elmləri",
      "major": "Biotexnologiya",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=xadicapiriyeva",
      "photo": "",
      "skills": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı"
      ],
      "motivation": "Bioinformatika öyrənmək, bu sahədə özümü təkmilləşdirmək istəyirəm.",
      "yearGoal": "Şəxsi elmi məqaləmdə bioinformatikanın yeniliklərindən faydalanaraq daha düzgün rəqəmlərlə iş hazırlamaq.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-sedef-01",
      "fullName": "Sədəf Süleyman",
      "username": "sedef",
      "email": "sedef.suleyman@wcu.edu.az",
      "phone": "+994 55 612 34 78",
      "password": "SedefBio2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "III Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=sedef",
      "photo": "",
      "skills": [
        "Genomika",
        "Bioinformatika",
        "DNT Analizi",
        "Python"
      ],
      "motivation": "Bioinformatika və molekulyar biologiya sahəsində elmi layihələrdə və laboratoriya tədqiqatlarında iştirak etmək.",
      "yearGoal": "Genom verilənlərinin emalı və BLAST alətləri ilə gen annotasiyası aparmaq.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-sebnem-01",
      "fullName": "Şəbnəm Kərimova",
      "username": "sebnemkerim",
      "email": "sebnemkerim@gmail.com",
      "phone": "+994 70 821 54 90",
      "password": "SebnemBio2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=sebnemkerim",
      "photo": "",
      "skills": [
        "Biotexnologiya",
        "Python",
        "Bioinformatika"
      ],
      "motivation": "Müasir bioinformatika texnologiyalarını mənimsəmək və elmi məqalələrin təhlilində ixtisaslaşmaq.",
      "yearGoal": "Python ilə bioloji məlumatların avtomatlaşdırılmış emalı və vizuallaşdırılması bacarıqlarını əldə etmək.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-gulshan-01",
      "fullName": "Gülşən Məhərrəmova",
      "username": "gulshan_bio",
      "email": "gulshan.maharramova@bdu.edu.az",
      "phone": "+994 51 987 65 43",
      "password": "GulshanBio2026!",
      "role": "Klub Üzvü",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "III Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=gulshan_bio",
      "photo": "",
      "skills": [
        "Genomika",
        "Struktur Biologiyası",
        "NCBI",
        "BLAST"
      ],
      "motivation": "Molekulyar biologiya və bioinformatikanın kəsişməsində innovativ layihələrdə çalışmaq.",
      "yearGoal": "3D zülal modelləşdirməsi, PyMOL və CarboxMol vasitəsilə zülal-liqand qarşılıqlı təsirlərini öyrənmək.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-xaqan-01",
      "fullName": "Xaqan Əliyev",
      "username": "xaqan",
      "email": "xaqan.aliyev@wcu.edu.az",
      "phone": "+994 50 334 56 78",
      "password": "XaqanWCU2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Mühəndislik Məktəbi",
      "major": "Kompüter Mühəndisliyi",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=xaqan",
      "photo": "",
      "skills": [
        "Python",
        "Linux / Bash",
        "C++",
        "Alqoritmlər"
      ],
      "motivation": "Hesablama alqoritmlərini və proqramlaşdırma vərdişlərini bioloji məlumatların analizinə yönəltmək.",
      "yearGoal": "DNT hizalanması alqoritmlərinin (Needleman-Wunsch) tətbiqi və optimallaşdırılması.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-anar-01",
      "fullName": "Anar Mirzəyev",
      "username": "themirzaew",
      "email": "themirzaew@gmail.com",
      "phone": "+994 55 901 23 45",
      "password": "MirzaewBio2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biotexnologiya",
      "course": "III Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=themirzaew",
      "photo": "",
      "skills": [
        "Python",
        "Git/GitHub",
        "Genom Analizi",
        "Biotexnologiya"
      ],
      "motivation": "Biotexnoloji proseslərin bioinformatik modelləşdirilməsi və klubun elmi tədqiqatlarında iştirak.",
      "yearGoal": "Böyük genom verilənləri üzərində hesablama analizləri aparmaq və elmi məqalə hazırlamaq.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-zaur-01",
      "fullName": "Zaur Əhmədov",
      "username": "zaur",
      "email": "zaur.ahmedov@bdu.edu.az",
      "phone": "+994 77 456 78 90",
      "password": "ZaurBio2026!",
      "role": "Klub Üzvü",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=zaur",
      "photo": "",
      "skills": [
        "Genomika",
        "Bioinformatika",
        "NCBI",
        "Python"
      ],
      "motivation": "Bioinformatika alətlərini öyrənmək, genetik xəstəliklərin molekulyar əsaslarını araşdırmaq.",
      "yearGoal": "NGS sekvens analizləri və mutasiyaların müəyyənləşdirilməsi metodologiyasını dərindən öyrənmək.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-farzaliyev-01",
      "fullName": "Fərzəliyev",
      "username": "rachemfrz",
      "email": "rachemfrz@gmail.com",
      "phone": "+994 50 678 19 02",
      "password": "RachemFrz2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biotexnologiya",
      "course": "II Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=rachemfrz",
      "photo": "",
      "skills": [
        "Python",
        "Biopython",
        "Linux Bash",
        "BLAST"
      ],
      "motivation": "Linux terminalı və Biopython ilə böyük bioloji faylların süzülməsi və emalı boru xətlərini qurmaq.",
      "yearGoal": "Biotexnoloji laboratoriya nəticələrinin hesablama bioinformatikası ilə birgə analizi.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-sakina-01",
      "fullName": "Səkinə Rüstəmova",
      "username": "sakina_rustamova",
      "email": "sakina.rustamova@wcu.edu.az",
      "phone": "+994 77 345 90 12",
      "password": "SakinaR2026!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya (İngilis dili)",
      "course": "III Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=sakina_rustamova",
      "photo": "",
      "skills": [
        "PyMOL",
        "CarboxMol",
        "AlphaFold",
        "3D Zülal Modelləşdirməsi",
        "Python"
      ],
      "motivation": "AlphaFold, PyMOL və CarboxMol vasitəsilə 3D zülal modelləşdirməsi və struktur bioinformatikası üzrə tədqiqatlar aparmaq.",
      "yearGoal": "Zülalların 3D strukturlarının təhlili və zülal-liqand qarşılıqlı təsirlərinin modelləşdirilməsi.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem-zeyn66632-01",
      "fullName": "Zeynəb Rzayeva",
      "username": "zeyn66632",
      "email": "zeynab.rzayeva@wcu.edu.az",
      "phone": "+994 55 412 88 34",
      "password": "Zeyn66632!",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "III Kurs",
      "joinDate": "11.10.2026",
      "registeredAt": "2026-10-11",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=zeyn66632",
      "photo": "",
      "skills": [
        "Python",
        "Git/GitHub",
        "Genom Analizi",
        "DNT Analizi"
      ],
      "motivation": "Genetik xəstəliklərin DNT sekvenslərində mutasiyalarını Python və bioinformatika alətləri ilə araşdırmaq.",
      "yearGoal": "DNT və RNT sekvenslərinin qlobal və lokal hizalanmasını dərindən öyrənmək.",
      "customTasks": [],
      "notes": []
    },
    {
      "id": "mem_sefanya_01",
      "fullName": "Sefanya Hacızadə",
      "username": "sefanyahajizadeh",
      "email": "sefanyahajizadeh@gmail.com",
      "phone": "+994 99 350 69 07",
      "password": "Sefanya993506907",
      "role": "Klub Üzvü",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya (İngilis dili)",
      "course": "III Kurs",
      "joinDate": "09.10.2026",
      "registeredAt": "2026-10-09",
      "status": "Aktiv",
      "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=sefanyahajizadeh",
      "photo": "",
      "skills": [
        "Python",
        "Genomika",
        "Bioinformatika",
        "DNT Analizi"
      ],
      "motivation": "Bioinformatika və genomika sahəsində praktiki təcrübə qazanmaq və laboratoriya layihələrində fəal iştirak etmək.",
      "yearGoal": "Python və Biopython ilə genom ardıcıllıqlarının avtomatlaşdırılmış analizi və NCBI bazaları ilə iş bacarığı qazanmaq.",
      "customTasks": [],
      "notes": []
    }
  ],

  applications: [
    {
      "id": "app-fatima-01",
      "memberId": "mem-fatima-01",
      "fullName": "Fatimə Piriyeva",
      "email": "fatimapirieva700@gmail.com",
      "phone": "+994 99 730 66 03",
      "username": "fatimapirieva",
      "password": "fatime2009",
      "university": "Xəzər Universiteti",
      "faculty": "Xəzər Universiteti - Təbiət Elmləri",
      "major": "Biologiya müəllimliyi",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Baza səviyyə",
      "tools": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "bioTools": [
        "NCBI",
        "UniProt"
      ],
      "researchTracks": [
        "Genomika",
        "Biotibb"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 2–4 saat",
      "motivation": "Bioinformatika sahəsində yeni bilik və bacarıqlara yiyələnmək istəyirəm.",
      "yearGoal": "Sərbəst şəkildə şəxsi elmi məqaləmi yazmaq.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-zehra-01",
      "memberId": "mem-zehra-01",
      "fullName": "Zəhra Mehralizadə",
      "email": "zehramehralizade19@gmail.com",
      "phone": "+994 55 352 72 23",
      "username": "zehra_mehralizade",
      "password": "19122007Z",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "gpa": "85.4",
      "programmingSkill": "Baza səviyyə",
      "tools": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "bioTools": [
        "NCBI",
        "PDB"
      ],
      "researchTracks": [
        "Genomika",
        "Struktur Biologiyası"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Texniki məlumatlarımı daha üst səviyyəyə qaldırıb biologiya ilə inteqrasiya etmək istəyirəm.",
      "yearGoal": "Şəxsi elmi məqaləmi hazırlamaq və beynəlxalq layihələrdə iştirak etmək.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-melek-01",
      "memberId": "mem-melek-01",
      "fullName": "Mələk Orucova",
      "email": "melek.orucova@wcu.edu.az",
      "phone": "+994 50 712 34 56",
      "username": "melek_08",
      "password": "MelekBio2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya (Biotexnologiya)",
      "course": "III Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "gpa": "89.5",
      "programmingSkill": "Orta səviyyə (Python)",
      "tools": [
        "Python",
        "Biopython",
        "Git/GitHub"
      ],
      "bioTools": [
        "NCBI",
        "UniProt",
        "Ensembl"
      ],
      "researchTracks": [
        "Genom Analizi",
        "Molekulyar Biotexnologiya"
      ],
      "roleInterest": "Aktiv Tələbə / Tədqiqatçı",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Biotexnologiya və molekulyar biologiya sahəsində nəzəri biliklərimi bioinformatika və DNT analizi ilə birləşdirmək.",
      "yearGoal": "Bioloji böyük verilənlər üzərində işləyərək mutasiyaların xəritələnməsi və zülal qarşılıqlı təsirlərini öyrənmək.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-nazryn-01",
      "memberId": "mem-nazryn-01",
      "fullName": "Nəzrin Məlikova",
      "email": "nazryn.melikova@wcu.edu.az",
      "phone": "+994 50 445 12 34",
      "username": "nazryn",
      "password": "NazrynBio2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Baza səviyyə (Python)",
      "tools": [
        "Python",
        "Biologiya",
        "Genom Analizi"
      ],
      "bioTools": [
        "NCBI",
        "UniProt"
      ],
      "researchTracks": [
        "Genom Analizi"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Bioinformatika və genom analizlərində praktiki təcrübə qazanmaq və laboratoriya seminarlarında fəal iştirak etmək.",
      "yearGoal": "Genom sekvenslərinin analizi və Biopython ilə praktiki kodlaşdırma bacarığı qazanmaq.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-xadica-01",
      "memberId": "mem-xadica-01",
      "fullName": "Xədicə Piriyeva",
      "email": "xadica.piriyeva2025@khazar.org",
      "phone": "+994 77 315 03 08",
      "username": "xadicapiriyeva",
      "password": "Doctor2025",
      "university": "Xəzər Universiteti",
      "faculty": "Xəzər Universiteti - Həyat Elmləri",
      "major": "Biotexnologiya",
      "course": "II Kurs",
      "studyLang": "İngilis bölməsi",
      "gpa": "87.42",
      "programmingSkill": "Baza səviyyə",
      "tools": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı"
      ],
      "bioTools": [
        "NCBI",
        "PDB"
      ],
      "researchTracks": [
        "Genomika",
        "Struktur Biologiyası"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 2–4 saat",
      "motivation": "Bioinformatika öyrənmək, bu sahədə özümü təkmilləşdirmək istəyirəm.",
      "yearGoal": "Şəxsi elmi məqaləmdə bioinformatikanın yeniliklərindən faydalanaraq daha düzgün rəqəmlərlə iş hazırlamaq.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-sedef-01",
      "memberId": "mem-sedef-01",
      "fullName": "Sədəf Süleyman",
      "email": "sedef.suleyman@wcu.edu.az",
      "phone": "+994 55 612 34 78",
      "username": "sedef",
      "password": "SedefBio2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "III Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Orta səviyyə (Python)",
      "tools": [
        "Genomika",
        "Bioinformatika",
        "DNT Analizi",
        "Python"
      ],
      "bioTools": [
        "NCBI",
        "BLAST"
      ],
      "researchTracks": [
        "Genomika",
        "Bioinformatika"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Bioinformatika və molekulyar biologiya sahəsində elmi layihələrdə və laboratoriya tədqiqatlarında iştirak etmək.",
      "yearGoal": "Genom verilənlərinin emalı və BLAST alətləri ilə gen annotasiyası aparmaq.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-sebnem-01",
      "memberId": "mem-sebnem-01",
      "fullName": "Şəbnəm Kərimova",
      "email": "sebnemkerim@gmail.com",
      "phone": "+994 70 821 54 90",
      "username": "sebnemkerim",
      "password": "SebnemBio2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Baza səviyyə (Python)",
      "tools": [
        "Biotexnologiya",
        "Python",
        "Bioinformatika"
      ],
      "bioTools": [
        "NCBI",
        "UniProt"
      ],
      "researchTracks": [
        "Biotexnologiya"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Müasir bioinformatika texnologiyalarını mənimsəmək və elmi məqalələrin təhlilində ixtisaslaşmaq.",
      "yearGoal": "Python ilə bioloji məlumatların avtomatlaşdırılmış emalı və vizuallaşdırılması bacarıqlarını əldə etmək.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-gulshan-01",
      "memberId": "mem-gulshan-01",
      "fullName": "Gülşən Məhərrəmova",
      "email": "gulshan.maharramova@bdu.edu.az",
      "phone": "+994 51 987 65 43",
      "username": "gulshan_bio",
      "password": "GulshanBio2026!",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "III Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Baza səviyyə",
      "tools": [
        "Genomika",
        "Struktur Biologiyası",
        "NCBI",
        "BLAST"
      ],
      "bioTools": [
        "NCBI",
        "PDB",
        "PyMOL",
        "CarboxMol"
      ],
      "researchTracks": [
        "Struktur Biologiyası"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Molekulyar biologiya və bioinformatikanın kəsişməsində innovativ layihələrdə çalışmaq.",
      "yearGoal": "3D zülal modelləşdirməsi, PyMOL və CarboxMol vasitəsilə zülal-liqand qarşılıqlı təsirlərini öyrənmək.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-xaqan-01",
      "memberId": "mem-xaqan-01",
      "fullName": "Xaqan Əliyev",
      "email": "xaqan.aliyev@wcu.edu.az",
      "phone": "+994 50 334 56 78",
      "username": "xaqan",
      "password": "XaqanWCU2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Mühəndislik Məktəbi",
      "major": "Kompüter Mühəndisliyi",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "İrəli (Python, C++, Linux)",
      "tools": [
        "Python",
        "Linux / Bash",
        "C++",
        "Alqoritmlər"
      ],
      "bioTools": [
        "BLAST",
        "NCBI"
      ],
      "researchTracks": [
        "Alqoritmlər",
        "Hesablama Modelləri"
      ],
      "roleInterest": "Texniki Mentor / Layihəçi",
      "weeklyTime": "Həftədə 6–8 saat",
      "motivation": "Hesablama alqoritmlərini və proqramlaşdırma vərdişlərini bioloji məlumatların analizinə yönəltmək.",
      "yearGoal": "DNT hizalanması alqoritmlərinin (Needleman-Wunsch) tətbiqi və optimallaşdırılması.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-anar-01",
      "memberId": "mem-anar-01",
      "fullName": "Anar Mirzəyev",
      "email": "themirzaew@gmail.com",
      "phone": "+994 55 901 23 45",
      "username": "themirzaew",
      "password": "MirzaewBio2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biotexnologiya",
      "course": "III Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Orta səviyyə (Python)",
      "tools": [
        "Python",
        "Git/GitHub",
        "Genom Analizi",
        "Biotexnologiya"
      ],
      "bioTools": [
        "NCBI",
        "UniProt"
      ],
      "researchTracks": [
        "Biotexnologiya",
        "Genom Analizi"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Biotexnoloji proseslərin bioinformatik modelləşdirilməsi və klubun elmi tədqiqatlarında iştirak.",
      "yearGoal": "Böyük genom verilənləri üzərində hesablama analizləri aparmaq və elmi məqalə hazırlamaq.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-zaur-01",
      "memberId": "mem-zaur-01",
      "fullName": "Zaur Əhmədov",
      "email": "zaur.ahmedov@bdu.edu.az",
      "phone": "+994 77 456 78 90",
      "username": "zaur",
      "password": "ZaurBio2026!",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Baza səviyyə (Python)",
      "tools": [
        "Genomika",
        "Bioinformatika",
        "NCBI",
        "Python"
      ],
      "bioTools": [
        "NCBI",
        "Ensembl"
      ],
      "researchTracks": [
        "Genomika"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Bioinformatika alətlərini öyrənmək, genetik xəstəliklərin molekulyar əsaslarını araşdırmaq.",
      "yearGoal": "NGS sekvens analizləri və mutasiyaların müəyyənləşdirilməsi metodologiyasını dərindən öyrənmək.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-farzaliyev-01",
      "memberId": "mem-farzaliyev-01",
      "fullName": "Fərzəliyev",
      "email": "rachemfrz@gmail.com",
      "phone": "+994 50 678 19 02",
      "username": "rachemfrz",
      "password": "RachemFrz2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biotexnologiya",
      "course": "II Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Orta səviyyə (Python, Linux Bash)",
      "tools": [
        "Python",
        "Biopython",
        "Linux Bash",
        "BLAST"
      ],
      "bioTools": [
        "NCBI GenBank",
        "BLAST",
        "PDB"
      ],
      "researchTracks": [
        "Biotexnologiya",
        "Struktur Biologiyası"
      ],
      "roleInterest": "Aktiv Klub Üzvü",
      "weeklyTime": "Həftədə 6–8 saat",
      "motivation": "Linux terminalı və Biopython ilə böyük bioloji faylların süzülməsi və emalı boru xətlərini qurmaq.",
      "yearGoal": "Biotexnoloji laboratoriya nəticələrinin hesablama bioinformatikası ilə birgə analizi.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-sakina-01",
      "memberId": "mem-sakina-01",
      "fullName": "Səkinə Rüstəmova",
      "email": "sakina.rustamova@wcu.edu.az",
      "phone": "+994 77 345 90 12",
      "username": "sakina_rustamova",
      "password": "SakinaR2026!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya (İngilis dili)",
      "course": "III Kurs",
      "studyLang": "İngilis bölməsi",
      "programmingSkill": "Başlanğıc (Python)",
      "tools": [
        "Python",
        "Google Colab",
        "Excel Data"
      ],
      "bioTools": [
        "AlphaFold DB",
        "UniProt",
        "RCSB PDB"
      ],
      "researchTracks": [
        "3D Struktur Biologiyası",
        "AlphaFold",
        "PyMOL",
        "CarboxMol"
      ],
      "roleInterest": "Aktiv Tələbə / Tədqiqatçı",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "AlphaFold, PyMOL və CarboxMol vasitəsilə 3D zülal modelləşdirməsi və struktur bioinformatikası üzrə tədqiqatlar aparmaq.",
      "yearGoal": "Zülalların 3D strukturlarının təhlili və zülal-liqand qarşılıqlı təsirlərinin modelləşdirilməsi.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-zeyn66632-01",
      "memberId": "mem-zeyn66632-01",
      "fullName": "Zeynəb Rzayeva",
      "email": "zeynab.rzayeva@wcu.edu.az",
      "phone": "+994 55 412 88 34",
      "username": "zeyn66632",
      "password": "Zeyn66632!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya",
      "course": "III Kurs",
      "studyLang": "Azərbaycan bölməsi",
      "programmingSkill": "Baza səviyyə (Python)",
      "tools": [
        "Python",
        "Git/GitHub",
        "VS Code"
      ],
      "bioTools": [
        "NCBI",
        "UniProt",
        "PubMed"
      ],
      "researchTracks": [
        "Molekulyar Genetika",
        "Genom Analizi"
      ],
      "roleInterest": "Aktiv Tələbə / Tədqiqatçı",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Genetik xəstəliklərin DNT sekvenslərində mutasiyalarını Python və bioinformatika alətləri ilə araşdırmaq.",
      "yearGoal": "DNT və RNT sekvenslərinin qlobal və lokal hizalanmasını dərindən öyrənmək.",
      "dateApplied": "2026-10-11",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
      "id": "app-sefanya-01",
      "memberId": "mem_sefanya_01",
      "fullName": "Sefanya Hacızadə",
      "email": "sefanyahajizadeh@gmail.com",
      "phone": "+994 99 350 69 07",
      "username": "sefanyahajizadeh",
      "password": "Sefanya993506907",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya (İngilis dili)",
      "course": "III Kurs",
      "studyLang": "İngilis bölməsi",
      "programmingSkill": "Orta səviyyə (Python)",
      "tools": [
        "Python",
        "Biopython",
        "Git/GitHub"
      ],
      "bioTools": [
        "NCBI",
        "UniProt",
        "PDB"
      ],
      "researchTracks": [
        "Struktur Bioinformatikası",
        "Genom Analizi"
      ],
      "roleInterest": "Aktiv Tələbə / İştirakçı",
      "weeklyTime": "Həftədə 4–6 saat",
      "motivation": "Bioinformatika və genomika sahəsində praktiki təcrübə qazanmaq və laboratoriya layihələrində fəal iştirak etmək.",
      "yearGoal": "Python və Biopython ilə genom ardıcıllıqlarının avtomatlaşdırılmış analizi və NCBI bazaları ilə iş bacarığı qazanmaq.",
      "dateApplied": "2026-10-09",
      "status": "Təsdiqləndi",
      "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    }
,
    {
      "id": "app-banugurbanzade",
      "memberId": "mem-banugurbanzade",
      "fullName": "Banu Qurbanzadə (Emin)",
      "email": "banugurbanzade@gmail.com",
      "phone": "+994503381571",
      "username": "banugurbanzade",
      "password": "623510100Bb!",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "IT )",
      "course": "Bakalavr (I kurs",
      "studyLang": "Rus bölməsi | GPA: 100",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Mənim üçün maraqlı və faydalı olacağını düşünürəm",
      "yearGoal": "Proqramlarla işləmək bacarığı",
      "dateApplied": "2026-10-19",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-nazrinahmadli",
      "memberId": "mem-nazrinahmadli",
      "fullName": "Nəzrin Əhmədli (Yaşar)",
      "email": "nazrinahmedli04@gmail.com",
      "phone": "+994555724718",
      "username": "nazrinahmadli",
      "password": "Nazrin2004",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Molekulyar biologiya",
      "course": "Magistratura",
      "studyLang": "İngilis bölməsi | GPA: Qeyd edilməyib",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "NCBI / BLAST"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML",
        "Filogenetika və Təkamül Ağacları"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/nazrin-ahmadli-ab94563a8?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      "motivation": "Bioinformatika sahəsində biliklərimi artırıb, bu sahədə inkişaf etmək istəyirəm.",
      "yearGoal": "Elmi məqalə hazırlaya bilmək, bioloji datalardan istifadə etmək və analiz etmək, həmçinin onların bazalara yüklənməsini bilmək, Python və R proqramlaşdırma dillərini bilmək.",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-ayt-kin",
      "memberId": "mem-ayt-kin",
      "fullName": "Aytəkin Namazova (Eldəniz)",
      "email": "namazovaaytekin474@gmail.com",
      "phone": "0514034124",
      "username": "aytəkin",
      "password": "Aytekin22",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Molekulyar biologiya",
      "course": "Magistratura",
      "studyLang": "Azərbaycan bölməsi | GPA: Bakalavr 86,5  magistratura ilk ilimdir.",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "NCBI / BLAST"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "macOS",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML",
        "Filogenetika və Təkamül Ağacları"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 6 saatdan çox",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Bu sahə bildiyimiz kimi ölkədə inkişaf etməyib, demək olar ki, bu bioinformatika sahəsində atılan ilk addımlardandır. Belə bir təşkilatın iştirakçısı olmaq mənim üçün əvəzedilməzdir. Bu sahədə yeni biliklər öyrənməyə açığam. Gələcək karyeram bu yöndə ola bilər.",
      "yearGoal": "Əldə edəcəyim biliklərə uyğun ən yaxşı layihələr hazırlamaq, öz məqaləmi yazmaq.",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-narmin-mmdva",
      "memberId": "mem-narmin-mmdva",
      "fullName": "Nərmin Məmmədova (Ceyhun)",
      "email": "narmin.mammadova2025@khazar.org",
      "phone": "+994514368667",
      "username": "narmin.mmdva",
      "password": "Nermin2007",
      "university": "Xəzər Universiteti",
      "faculty": "Xəzər Universiteti - Təbiət Elmləri və Mühəndislik",
      "major": "Biotexnologiya )",
      "course": "Bakalavr (II kurs",
      "studyLang": "İngilis bölməsi | GPA: 90.50/100",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/narmin-mammadova-784b2a3a8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "motivation": "Bu layihəni ilk dəfə gördüyüm üçün diqqətimi çəkdi və bioinformatika sahəsinə olan marağımı daha da artırdı. Hazırda bu sahədə biliklərim əsas səviyyədədir, lakin özümü inkişaf etdirmək, mövzunu daha dərindən öyrənmək və praktiki təcrübə qazanmaq istəyirəm. Düşünürəm ki, klub mənə həm yeni biliklər əldə etmək, həm də bu sahəyə marağı olan insanlarla ünsiyyət qurmaq üçün gözəl fürsət yaradacaq.",
      "yearGoal": "Bir il ərzində klubun fəaliyyətində davamlı iştirak etmək, hakatonlarda iştirak edib uğur qazanmaq və bioinformatika sahəsində biliklərimi daha da inkişaf etdirmək istəyirəm. Əsas hədəfim qazandığım bilikləri praktikada tətbiq edərək öz layihə ideyalarımı müstəqil şəkildə hazırlaya biləcək səviyyəyə çatmaqdır. Eyni zamanda, komanda ilə işləməyi və real problemlərə elmi və texnoloji həllər tapmağı öyrənmək istəyirəm.",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-lea-4ever",
      "memberId": "mem-lea-4ever",
      "fullName": "Əsma Mütəllimli (Ramil)",
      "email": "asmamutallimli@gmail.com",
      "phone": "+994 99 788 01 48",
      "username": "lea_4ever",
      "password": "welling10n",
      "university": "ADA Universiteti",
      "faculty": "ADA Universiteti",
      "major": "Qida Texnologiyaları )",
      "course": "Bakalavr (II kurs",
      "studyLang": "İngilis bölməsi | GPA: 75 /  100",
      "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
      "tools": [
        "Python"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Windows",
      "researchTracks": [
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML"
      ],
      "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Mənim ixtisasım qida texnologiyalarıdır  görə, mən əsasən profilimlə bağlı, yəni qida mühəndisliklə bağlı, çoxlu sayda hackathon larda, tədqiqat və layihələrdə böyük həvəslə iştirak etmək istəyirəm. Tapdığım hackathonlar sırf qida mühəndisliyə aid azdır və qida texnologiyaları biotexnologiya elmə də aiddir deyə, bu klubun layihələrində iştirak etmək arzulayıram.",
      "yearGoal": "Qida mühəndisliklə bağlı şəxsi 3D model proyektləri hazırlamaq planlaşdırıram",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-gulchin-m",
      "memberId": "mem-gulchin-m",
      "fullName": "Gülçin Məmmədli (Elçin)",
      "email": "gulchin.memmedli.234bioaz@wcu.edu.az",
      "phone": "+994503181924",
      "username": "gulchin_m",
      "password": "gulcin207",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya )",
      "course": "Bakalavr (III kurs",
      "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Windows",
      "researchTracks": [
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/gülçin-məmmədli-8735a3438?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "motivation": "Yeni şeylər öyrənmək istəyirəm, həmçinin bioinformatika barəsində məlumat almaq istəyirəm.",
      "yearGoal": "Qeyd edilməyib",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-rasim",
      "memberId": "mem-rasim",
      "fullName": "Rasim Abiyev (Oktay)",
      "email": "abiyev.rasim@gmail.com",
      "phone": "+994 51  554 92 59",
      "username": "rasim",
      "password": "Q1w2e3",
      "university": "Azərbaycan Dillər Universiteti (ADU)",
      "faculty": "Azərbaycan Dillər Universiteti (ADU)",
      "major": "Regionşünaslıq və Beynəlxalq Münasibətlər",
      "course": "Magistratura",
      "studyLang": "Azərbaycan bölməsi | GPA: 65",
      "programmingSkill": "İrəli (OOP, data analizi, alqoritmlər)",
      "tools": [
        "Python",
        "Linux / Bash",
        "Git & GitHub",
        "SQL"
      ],
      "bioTools": [
        "AlphaFold DB",
        "Ensembl"
      ],
      "bioKnowledge": "İT / Mühəndislik yönümlüyəm (Bioloji konseptləri sıfırdan öyrənmək istəyirəm)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı"
      ],
      "roleInterest": "Təşkilatçı Üzv (Tədbir təşkili, PR, Dizayn və Texniki dəstək)",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/rasimabiyev/",
      "motivation": "CarboxMol Bioinformatika Klubuna qoşulmaqda əsas məqsədim süni intellekt, maşın öyrənməsi və bioinformatikanın kəsişməsində biliklərimi genişləndirmək, bu sahədə aparılan tədqiqatlarla tanış olmaqdır. Xüsusilə, AI metodlarının bioloji məlumatların təhlilində, DNT ardıcıllıqlarının təsnifatında və mürəkkəb elmi problemlərin həllində tətbiqi məni maraqlandırır. Artıq süni intellekt və kvant maşın öyrənməsi istiqamətlərində öyrənmə və tədqiqat fəaliyyətim olduğuna görə, bioinformatika sahəsində də praktiki təcrübə qazanmaq, digər tələbələrlə bilik mübadiləsi aparmaq və gələcək elmi layihələrdə iştirak etmək istəyirəm. İnanıram ki, klub bu maraqları real layihələrə çevirmək və multidissiplinar tədqiqat bacarıqlarımı inkişaf etdirmək üçün uyğun mühitdir.",
      "yearGoal": "Bir il ərzində süni intellekt və bioinformatikanı birləşdirən, bioloji məlumatların təhlilinə yönəlmiş işlək bir layihə hazırlamaq istəyirəm. Konkret ideyam maşın öyrənməsi metodlarından istifadə etməklə DNT ardıcıllıqlarının təsnifatı və potensial risklərin müəyyənləşdirilməsi üçün eksperimental model qurmaqdır. Layihə çərçivəsində açıq bioloji məlumat dəstləri ilə işləməyi, modellərin nəticələrini müqayisə etməyi və onların dəqiqliyini elmi əsaslarla qiymətləndirməyi hədəfləyirəm. İlin sonunda nəticələri GitHub-da sənədləşdirilmiş, təkrarlana bilən kiçik bir tədqiqat layihəsi təqdim etmək və bioinformatika sahəsində gələcək araşdırmalar üçün möhkəm təməl formalaşdırmaq istəyirəm.",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-leyla-25",
      "memberId": "mem-leyla-25",
      "fullName": "Budagova (Leyla)",
      "email": "leylabudaqova073@gmail.com",
      "phone": "+994505761087",
      "username": "leyla_25",
      "password": "250921",
      "university": "ETN Molekulyar Biologiya İnstitutu",
      "faculty": "ETN Molekulyar Biologiya İnstitutu (MBİ / IMB - Institute of Molecular Biology)",
      "major": "Molekulyar Biologiya",
      "course": "Doktorantura",
      "studyLang": "Azərbaycan bölməsi | GPA: 93",
      "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
      "tools": [
        "Linux / Bash"
      ],
      "bioTools": [
        "NCBI / BLAST",
        "UniProt",
        "RCSB PDB",
        "PyMOL / ChimeraX / Coot / Carbox / CarboxMol",
        "AlphaFold DB",
        "Ensembl"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "I wanna improve Computational biology",
      "yearGoal": "Drug design with endemic plants in Azerbaijan",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-gunay",
      "memberId": "mem-gunay",
      "fullName": "Gunay Rustemova (Zakir)",
      "email": "g27837103@gmail.com",
      "phone": "0518578783",
      "username": "gunay",
      "password": "gunay1019",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya )",
      "course": "Bakalavr (III kurs",
      "studyLang": "Azərbaycan bölməsi | GPA: 72",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML",
        "Filogenetika və Təkamül Ağacları"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Mən həm WCU da oxuyuram həm də ixtisasım Biologiyadır. Gələcəkdə Bioinformatika ixtisasına yönəlmək istəyirəm. Bu səbəblə iştirak edib öncədən praktiki biliklərə yiyələnmək mənim üçün yaxşı olar deyə düşünürəm. Klubun fəaliyyətinində aktiv iştirak etmək və gələcək əməkdaşlarla tanış olma nailiyyətinə yiyələnmək istəyirəm.",
      "yearGoal": "Məqalə hazırlamaq, hakatonlarda iştirak etmək",
      "dateApplied": "2026-10-13",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-ayselhummetovva",
      "memberId": "mem-ayselhummetovva",
      "fullName": "Aysel Hümmətova (Hümmət)",
      "email": "aysel.hummetova.234bioaz@wcu.edu.az",
      "phone": "0707037032",
      "username": "ayselhummetovva",
      "password": "4716ays?",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "major": "Biologiya )",
      "course": "Bakalavr (III kurs",
      "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Python"
      ],
      "bioTools": [
        "NCBI / BLAST"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "Yalnız universitet laboratoriyası",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML",
        "Filogenetika və Təkamül Ağacları"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Bioi formatika haqqında heç olmaya əsas baza biliklərə yiyələnmək və gələcək karyeram üçün baza toplamaq. Məni cəlb edən məqam o durki mən həmişə proqramlaşdırmaya it sahəsonə maraqlı biriso olmuşam amma çətinliyinə görə heç vaxt öyrənmək üçün ilk addımı atmağa cəsarətim olmayıb amma artıq bu marağımın və həvəsimin arxasınca getmək istəyirəm.",
      "yearGoal": "Bioinformatika üzrə məlumatlarımı bacarıqlarımı artırmaq gələcəkdə bioinformatika üzrə yönəlmək üçün bilməli olduğum bazanı toplamaq. Və ən önəmlisi bir biolog olaraq ixtisasımın bioinformatika bölməsi haqqında da biliklənmək və biliklərimdən gələcək karyeramda da aktiv istifadə etmək",
      "dateApplied": "2026-10-12",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-mr-scientist",
      "memberId": "mem-mr-scientist",
      "fullName": "Anar Vəliyev (Farid)",
      "email": "veliyevanar750@gmail.com",
      "phone": "0557504342",
      "username": "mr.scientist",
      "password": "Believe in yourself",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya  (Bakalavr (III kurs))",
      "course": "tədris ingiliscə",
      "studyLang": "İngilis bölməsi | GPA: 84",
      "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "NCBI / BLAST",
        "UniProt",
        "RCSB PDB",
        "Ensembl"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq",
        "Süni İntellekt və Biotibb ML"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 4–6 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Düşünürəm ki ,  bu klubda bioinformatika biliklərimi inkişaf  etdirəcəyəm  və  bu yolda birlikdə inkişaf üçün biliklərimi sizinlə bölüşəcəm . Bu sahəyə marağım var idi  və  uzun zaman idi ki bu sahəyə marağı olan tələbələrlə görüşmək və onlarla elmi mübadilə aparmaq istəyirdim , buna görə də bu işdə əməyi olan hər kəsə təşəkkür edirəm.",
      "yearGoal": "1 illik fəaliyyətdən sonra çoxlu layihələr üzərində çalışmaq , yeni layihələrdə iştirak etmək və araşdırmalar nəticəsində sizinlə birlikdə  məqalələr yazmaq istərdim",
      "dateApplied": "2026-10-12",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-nuhov",
      "memberId": "mem-nuhov",
      "fullName": "Nicat Nuhov (Pərviz)",
      "email": "nicatnuhov389@gmail.com",
      "phone": "505035670",
      "username": "nuhov",
      "password": "1453",
      "university": "Sumqayıt Dövlət Universiteti (SDU)",
      "faculty": "Sumqayıt Dövlət Universiteti (SDU)",
      "major": "Kimya və biologiya müəllimliyi )",
      "course": "Bakalavr (III kurs",
      "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Süni İntellekt və Biotibb ML"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "Qeyd edilməyib",
      "motivation": "Biotexnologiya mənim üçün çox maraqlıdır",
      "yearGoal": "Şəxsi elmi məqalə hazırlamaq",
      "dateApplied": "2026-10-12",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-malikova-reyhan",
      "memberId": "mem-malikova-reyhan",
      "fullName": "Reyhan Malikova (Nadim)",
      "email": "r.malikova24@abdn.ac.uk",
      "phone": "+994509988838",
      "username": "malikova_reyhan",
      "password": "Reychik03",
      "university": "Digər Təhsil / Elmi Müəssisə",
      "faculty": "Digər Elmi Mərkəz və ya Universitet",
      "major": "Tədqiqat İnstitutu və ya Mərkəzi - Biotexnologiya ve Bioinformatika",
      "course": "Magistratura",
      "studyLang": "İngilis bölməsi | GPA: Qeyd edilməyib",
      "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
      "tools": [
        "Python"
      ],
      "bioTools": [
        "NCBI / BLAST",
        "UniProt"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 6 saatdan çox",
      "profileUrl": "https://www.linkedin.com/in/reyhan-malikova-337360329?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      "motivation": "Biotexnologiya sahəsində təhsil aldığım üçün molekulyar biologiya, genetika və bioinformatikaya xüsusi marağım var. Mənim üçün ən maraqlı məqamlardan biri bioloji məlumatların kompüter texnologiyaları vasitəsilə necə təhlil edildiyini öyrənməkdir. CarboxMol Bioinformatika Klubuna qoşulmaq istəyirəm, çünki burada nəzəri biliklərimi praktik bacarıqlarla inkişaf etdirmək, xüsusilə Python, Biopython və genomik məlumatların analizi üzrə təcrübə qazanmaq imkanım olacaq. Eyni zamanda, elmi layihələrdə iştirak etmək, yeni insanlarla tanış olmaq və komanda şəklində işləmək mənim üçün çox dəyərlidir.",
      "yearGoal": "Bir il ərzində əsas məqsədim bioinformatika sahəsində praktik biliklərimi inkişaf etdirmək və müstəqil şəkildə bioloji məlumatların analizini həyata keçirə bilməkdir. Xüsusilə Python və Biopython vasitəsilə DNT ardıcıllıqlarının müqayisəsi, genetik variasiyaların araşdırılması və əldə olunan nəticələrin vizuallaşdırılması üzərində işləmək istərdim. Gələcəkdə bu biliklərdən istifadə edərək genetika və molekulyar biologiya ilə bağlı kiçik bir tədqiqat layihəsi hazırlamaq və nəticələrimi elmi təqdimat şəklində paylaşmaq istəyirəm.",
      "dateApplied": "2026-10-12",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-minarataghiyeva",
      "memberId": "mem-minarataghiyeva",
      "fullName": "Minara Taghiyeva (Elkhan)",
      "email": "minara.taghiyeva@yuksekihtisas.edu.tr",
      "phone": "+994554895953",
      "username": "minarataghiyeva",
      "password": "Minara2020",
      "university": "Digər Təhsil / Elmi Müəssisə",
      "faculty": "Digər Elmi Mərkəz və ya Universitet",
      "major": "Tibbi Genetik",
      "course": "Magistratura",
      "studyLang": "Azərbaycan bölməsi | GPA: 3.5/4",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "macOS",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/minara-taghiyeva-25b118322?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      "motivation": "Biologiya üzrə bakalavr təhsilimi bitirmişəm və hazırda tibbi genetika üzrə magistr təhsili alıram. Genetika sahəsinə xüsusi marağım var və bu sahədə biliklərimi daha da artırmaq, yeni şeylər öyrənmək istəyirəm. Bioinformatikanın biologiya, genetika və texnologiyanı birləşdirməsi mənə çox maraqlı gəlir. Düşünürəm ki, bu klub mənə həm nəzəri biliklərimi praktikada tətbiq etmək, həm də yeni bacarıqlar qazanmaq üçün yaxşı imkan yaradacaq. Eyni zamanda, mənimlə oxşar maraqları olan insanlarla birlikdə işləmək, fərqli tədqiqat istiqamətləri ilə tanış olmaq və gələcəkdə elmi araşdırmalarda iştirak etmək istəyirəm.",
      "yearGoal": "Bir il ərzində bioinformatikanın əsaslarını öyrənmək və əldə etdiyim bilikləri tibbi genetika sahəsində tətbiq etmək istəyirəm. Xüsusilə genetik məlumatların analizi, xəstəliklərlə əlaqəli genetik dəyişikliklərin araşdırılması və DNT ardıcıllıqlarının öyrənilməsi mənə maraqlıdır. Əsas hədəfim bu istiqamətdə kiçik bir tədqiqat layihəsində iştirak etmək və gələcəkdə elmi məqalə hazırlamaq üçün təcrübə qazanmaqdır.",
      "dateApplied": "2026-10-12",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-fatimirzz",
      "memberId": "mem-fatimirzz",
      "fullName": "Mirzəyeva (Fatimə)",
      "email": "fatima.mirzayeva.david@bsu.edu.az",
      "phone": "+994709809089",
      "username": "fatimirzz",
      "password": "Mirzeyeva.999",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Molekulyar biologiya",
      "course": "Magistratura",
      "studyLang": "Azərbaycan bölməsi | GPA: 96",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
      "osType": "Windows",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı"
      ],
      "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/fatimə-mirzeyeva-b09268363?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      "motivation": "Bioinformatikaya sahəsinə giriş etmək istəyirəm. İnanıram ki bu platforma mənə bu prosesdə kömək edəcək.",
      "yearGoal": "Qeyd edilməyib",
      "dateApplied": "2026-10-16",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    },
    {
      "id": "app-fidan",
      "memberId": "mem-fidan",
      "fullName": "Fidan Verdiyeva (Malik)",
      "email": "fidanverdiyeva808@gmail.com",
      "phone": "0708870494",
      "username": "fidan",
      "password": "Rasengan25",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
      "major": "Biologiya",
      "course": "Magistratura",
      "studyLang": "Azərbaycan bölməsi | GPA: 87.34",
      "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
      "tools": [
        "Heç biri"
      ],
      "bioTools": [
        "Heç biri"
      ],
      "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
      "osType": "Yalnız universitet laboratoriyası",
      "researchTracks": [
        "Genomika və NGS Analizi",
        "Struktur Biologiyası və Dərman Dizaynı",
        "Transkriptomika və RNA-Seq"
      ],
      "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
      "weeklyTime": "Həftədə 2–4 saat",
      "profileUrl": "https://www.linkedin.com/in/fidan-verdiyeva-753bb92ba?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      "motivation": "Molekulyar biologiya və fitopatologiya sahəsində çalışdığım üçün bioinformatika biliklərimi inkişaf etdirmək istəyirəm. Xüsusilə DNT ardıcıllıqlarının analizi və Python-un bioloji tədqiqatlarda tətbiqi məni cəlb edir. Klubun praktiki fəaliyyətlərində iştirak edərək biliklərimi artırmağı və onları peşəkar fəaliyyətimdə tətbiq etməyi hədəfləyirəm.",
      "yearGoal": "Bir il ərzində Python və Biopython vasitəsilə bitki patogenlərinin DNT ardıcıllıqlarını analiz etmək bacarığı qazanmaq istəyirəm. Məqsədim müxtəlif patogenlərin ardıcıllıqlarını müqayisə edən və nəticələri təqdim edən kiçik bioinformatik layihə hazırlamaqdır.",
      "dateApplied": "2026-10-14",
      "status": "Gözləyir",
      "photo": "",
      "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət."
    }
  ],

  memberNotes: [],

  teachers: [
    {
      "id": "teacher-1",
      "fullName": "Dos. Dr. Rəşad İsmayılov",
      "title": "Dosent, Biologiya Elmləri Üzrə Fəlsəfə Doktoru",
      "academicDegree": "PhD / Dosent",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "department": "Təbiət Elmləri Kafedrası",
      "email": "rashad.ismayilov@wcu.edu.az",
      "phone": "+994 50 123 45 67",
      "username": "rashad_ismayilov",
      "password": "wcuTeacher2026",
      "photo": "",
      "specialties": [
        "Molekulyar Genetika",
        "Genom Analizi",
        "Biostatistika"
      ],
      "orcid": "0000-0002-1825-0097",
      "googleScholar": "https://scholar.google.com",
      "officeLocation": "Əhməd Rəcəbli korpusu, Otaq 312",
      "consultationHours": "Çərşənbə axşamı və Cümə: 14:00 - 16:00",
      "bio": "Bioinformatika və molekulyar biologiya sahəsində 12 illik elmi-pedaqoji təcrübə. Genom sekvenslənməsi və filogenetik təhlillər üzrə klubun akademik elmi məsləhətçisi və mentoru.",
      "status": "Aktiv",
      "registeredAt": "2026-10-10",
      "approvedAt": "2026-10-10",
      "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    }
  ],

  teacherApplications: [
    {
      "id": "teach-app-1",
      "teacherId": "teacher-1",
      "fullName": "Dos. Dr. Rəşad İsmayılov",
      "title": "Dosent, Biologiya Elmləri Üzrə Fəlsəfə Doktoru",
      "academicDegree": "PhD / Dosent",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "department": "Təbiət Elmləri Kafedrası",
      "email": "rashad.ismayilov@wcu.edu.az",
      "phone": "+994 50 123 45 67",
      "username": "rashad_ismayilov",
      "password": "wcuTeacher2026",
      "specialties": [
        "Molekulyar Genetika",
        "Genom Analizi",
        "Biostatistika"
      ],
      "orcid": "0000-0002-1825-0097",
      "officeLocation": "Əhməd Rəcəbli korpusu, Otaq 312",
      "consultationHours": "Çərşənbə axşamı və Cümə: 14:00 - 16:00",
      "bio": "Bioinformatika və molekulyar biologiya sahəsində 12 illik elmi-pedaqoji təcrübə. Genom sekvenslənməsi və filogenetik təhlillər üzrə klubun akademik elmi məsləhətçisi və mentoru.",
      "status": "Təsdiqləndi",
      "dateApplied": "2026-10-10",
      "adminNotes": "Sədr tərəfindən rəsmi akademik mentor olaraq təsdiqlənmişdir."
    }
  ],

  teacherAnnouncements: [
    {
      "id": "teach-ann-1",
      "teacherId": "teacher-1",
      "teacherName": "Dos. Dr. Rəşad İsmayılov",
      "teacherTitle": "Dosent / Elmi Məsləhətçi",
      "title": "NCBI BLAST və DNT Düzülüşü üzrə Praktiki Məsləhət Saatı",
      "category": "Məsləhət və Elmi Dəstək",
      "content": "Hörmətli klub üzvləri, NCBI BLAST alətində E-value statistikası və FASTA formatlarının düzgün parser edilməsi ilə bağlı sualları olan tələbələr üçün bu Cümə saat 15:00-da laboratoriyada və Zoom platformasında canlı açıq məsləhət saatı təşkil olunur.",
      "resourceLink": "https://blast.ncbi.nlm.nih.gov/Blast.cgi",
      "resourceLabel": "NCBI BLAST Rəsmi Portalı",
      "meetingInfo": "Otaq #304 & Zoom Linki",
      "createdAt": "2026-10-12",
      "badge": "Mühüm"
    }
  ]
};

const CURRENT_DATA_VERSION = "2026.10.24.v33_all_31_members_restored";

// Real-time Sinxronizasiya Mühərriki (Cross-Tab, PWA və Cihazlararası Canlı Əlaqə)
const SyncEngine = {
  channel: typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("wcu_bio_sync_channel") : null,
  broadcast(type, payload = {}) {
    let eventObj;
    if (typeof type === "object" && type !== null) {
      eventObj = { ...type, action: type.action || type.type, timestamp: type.timestamp || Date.now() };
    } else {
      eventObj = { type, payload, action: type, timestamp: Date.now() };
    }
    if (this.channel) {
      try {
        this.channel.postMessage(eventObj);
      } catch (e) {
        console.warn("SyncEngine broadcast error:", e);
      }
    }
    try {
      localStorage.setItem("wcu_bio_sync_last_event", JSON.stringify(eventObj));
    } catch (e) {}
  },
  listen(callback) {
    if (this.channel) {
      this.channel.onmessage = (event) => {
        if (event && event.data) callback(event.data);
      };
    }
    window.addEventListener("storage", (e) => {
      if (e.key === "wcu_bioinfo_club_data") {
        callback({ type: "STORAGE_UPDATED", timestamp: Date.now() });
      } else if ((e.key === "wcu_bio_sync_last_event" || e.key === "wcu_live_meeting_sync_event") && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue);
          callback(parsed);
        } catch (err) {}
      }
    });
  }
};
window.SyncEngine = SyncEngine;

// Təhlükəsiz təmizləmə süzgəci: Yalnız köhnə prototip uydurma ID-ləri təmizləyir, heç bir real və ya yeni müraciətə toxunmur!
function purgeMockData(data) {
  if (!data) return;
  const legacyPrototypeIds = ["app-dummy-proto-00", "mem-dummy-proto-00"];
  if (Array.isArray(data.applications)) {
    data.applications = data.applications.filter(app => app && !legacyPrototypeIds.includes(app.id));
  }
  if (Array.isArray(data.members)) {
    data.members = data.members.filter(mem => mem && !legacyPrototypeIds.includes(mem.id));
  }
  data.memberCustomTasks = data.memberCustomTasks || [];
  data.memberNotes = data.memberNotes || [];
}

// LocalStorage Helper və Avtomatik Data Sinxronizatoru
function getClubData() {
  let parsed;
  let hasStorageUpdates = false;
  const stored = localStorage.getItem("wcu_bioinfo_club_data");
  if (!stored) {
    parsed = JSON.parse(JSON.stringify(INITIAL_DATA));
    hasStorageUpdates = true;
  } else {
    try {
      parsed = JSON.parse(stored);
    } catch (e) {
      parsed = JSON.parse(JSON.stringify(INITIAL_DATA));
      hasStorageUpdates = true;
    }
  }

  try {

    // Saytda yalnız Təşkilati Struktur və İllik Fəaliyyət Planı və Sillabus sənədlərini göstər
    const siteDocIds = ["03_struktur", "04_plan"];
    if (parsed.documents && Array.isArray(parsed.documents)) {
      parsed.documents = parsed.documents.filter(d => siteDocIds.includes(d.id));
      if (parsed.documents.length !== siteDocIds.length) {
        parsed.documents = JSON.parse(JSON.stringify(INITIAL_DATA.documents));
      }
    } else {
      parsed.documents = JSON.parse(JSON.stringify(INITIAL_DATA.documents));
    }

    // Əgər data versiyası köhnədirsə və ya təmizlənməyibsə, mock dataları tam təmizlə
    if (parsed._dataVersion !== CURRENT_DATA_VERSION) {
      console.log("[Data Sync] Yeni təmiz versiya aktivləşdirilir və mock datalar silinir...");

      parsed.clubInfo = INITIAL_DATA.clubInfo;
      parsed.documents = INITIAL_DATA.documents;
      parsed.curriculum = INITIAL_DATA.curriculum;
      parsed.curriculumModules = INITIAL_DATA.curriculumModules;
      parsed.structuralTools = INITIAL_DATA.structuralTools;
      if (typeof INITIAL_PUBLISHED_PROJECTS !== "undefined") {
        parsed.publishedProjects = JSON.parse(JSON.stringify(INITIAL_PUBLISHED_PROJECTS));
      }
      if (typeof INITIAL_COLLABORATORS !== "undefined") {
        parsed.collaborators = JSON.parse(JSON.stringify(INITIAL_COLLABORATORS));
      }
      if (parsed.meetings && Array.isArray(parsed.meetings)) {
        parsed.meetings.forEach(m => {
          if (m.id === "meet-live-alphafold" && m.status === "live") {
            m.status = "scheduled";
          }
        });
      }
      parsed.events = INITIAL_DATA.events;

      // Mock dataları tam təmizlə
      purgeMockData(parsed);

      // Tapşırıqların standart siyahısını yenilə və mock həlləri sıfırla
      parsed.tasks = parsed.tasks || [];
      INITIAL_DATA.tasks.forEach((defTask) => {
        const existingIdx = parsed.tasks.findIndex((t) => t.id === defTask.id);
        if (existingIdx === -1) {
          parsed.tasks.push(JSON.parse(JSON.stringify(defTask)));
        } else {
          parsed.tasks[existingIdx].title = defTask.title;
          parsed.tasks[existingIdx].category = defTask.category;
          parsed.tasks[existingIdx].difficulty = defTask.difficulty;
          parsed.tasks[existingIdx].summary = defTask.summary;
          parsed.tasks[existingIdx].instructions = defTask.instructions;
          parsed.tasks[existingIdx].starterCode = defTask.starterCode;
          parsed.tasks[existingIdx].imageUrl = defTask.imageUrl;
          parsed.tasks[existingIdx].imageCaption = defTask.imageCaption;
          parsed.tasks[existingIdx].videoUrl = defTask.videoUrl;
          parsed.tasks[existingIdx].videoEmbed = defTask.videoEmbed;
          parsed.tasks[existingIdx].videoTitle = defTask.videoTitle;
          parsed.tasks[existingIdx].videoDuration = defTask.videoDuration || "04:30";
          parsed.tasks[existingIdx].videoQuality = defTask.videoQuality || "360p";
          parsed.tasks[existingIdx].document = defTask.document;
          parsed.tasks[existingIdx].resourceLink = defTask.resourceLink;
          parsed.tasks[existingIdx].resourceName = defTask.resourceName;
          parsed.tasks[existingIdx].submissions = (parsed.tasks[existingIdx].submissions || []).filter(
            s => !["sub-1", "sub-2", "sub-3"].includes(s.id)
          );
        }
      });

      parsed.members = parsed.members || [];
      parsed.memberCustomTasks = parsed.memberCustomTasks || [];
      parsed.memberNotes = parsed.memberNotes || [];

      parsed._dataVersion = CURRENT_DATA_VERSION;
      localStorage.setItem("wcu_bioinfo_club_data", JSON.stringify(parsed));
    } else {
      // Hər ehtimala qarşı təmizləməni yoxla
      purgeMockData(parsed);
    }

    parsed.members = parsed.members || [];
    parsed.applications = parsed.applications || [];
    parsed.memberCustomTasks = parsed.memberCustomTasks || [];
    parsed.memberNotes = parsed.memberNotes || [];
    parsed.deletedAppIds = parsed.deletedAppIds || [];
    parsed.deletedMemberIds = parsed.deletedMemberIds || [];
    parsed.deletedTeacherIds = parsed.deletedTeacherIds || [];

    // Silinmiş qeydləri dərhal təmizlə ki, heç bir bərpa onları geri qaytara bilməsin
    if (parsed.deletedAppIds.length > 0) {
      parsed.applications = parsed.applications.filter(a => !parsed.deletedAppIds.includes(a.id));
    }
    if (parsed.deletedMemberIds.length > 0) {
      parsed.members = parsed.members.filter(m => !parsed.deletedMemberIds.includes(m.id));
    }
    if (parsed.deletedTeacherIds.length > 0) {
      parsed.teachers = (parsed.teachers || []).filter(t => !parsed.deletedTeacherIds.includes(t.id));
      parsed.teacherApplications = (parsed.teacherApplications || []).filter(a => !parsed.deletedTeacherIds.includes(a.teacherId) && !parsed.deletedAppIds.includes(a.id));
    }

    if (!parsed.structuralTools || !Array.isArray(parsed.structuralTools) || parsed.structuralTools.length === 0) {
      parsed.structuralTools = INITIAL_DATA.structuralTools;
      hasStorageUpdates = true;
    }
    if (!parsed.curriculumModules || !Array.isArray(parsed.curriculumModules)) {
      parsed.curriculumModules = INITIAL_DATA.curriculumModules;
      hasStorageUpdates = true;
    }

    // 1. Status uyğunlaşdırılması: Bütün "Qəbul Edildi" statuslarını rəsmi "Təsdiqləndi" statusuna keçir
    parsed.applications.forEach((a) => {
      if (a.status === "Qəbul Edildi") {
        a.status = "Təsdiqləndi";
        hasStorageUpdates = true;
      }
    });

    // 2. Daimi təsdiqlənmiş ilkin üzvlərin (Seed Members) avtomatik qorunması və bərpası (Silinənlər istisna)
    if (Array.isArray(INITIAL_DATA.members)) {
      INITIAL_DATA.members.forEach((seedMem) => {
        if (parsed.deletedMemberIds.includes(seedMem.id)) return;
        const existingIdx = parsed.members.findIndex(
          (m) =>
            (m.username && m.username.toLowerCase() === seedMem.username.toLowerCase()) ||
            m.id === seedMem.id
        );
        if (existingIdx === -1) {
          parsed.members.unshift(JSON.parse(JSON.stringify(seedMem)));
          hasStorageUpdates = true;
        } else {
          // Əgər şifrə boşdursa və ya natamamdırsa, seed məlumatı ilə zəmanət ver
          if (!parsed.members[existingIdx].password) {
            parsed.members[existingIdx].password = seedMem.password;
            hasStorageUpdates = true;
          }
          if (!parsed.members[existingIdx].fullName) {
            parsed.members[existingIdx].fullName = seedMem.fullName;
            hasStorageUpdates = true;
          }
          if (seedMem.motivation && !parsed.members[existingIdx].motivation) {
            parsed.members[existingIdx].motivation = seedMem.motivation;
            hasStorageUpdates = true;
          }
          if (seedMem.yearGoal && !parsed.members[existingIdx].yearGoal) {
            parsed.members[existingIdx].yearGoal = seedMem.yearGoal;
            hasStorageUpdates = true;
          }
        }
      });
    }

    parsed.approvedAppIds = parsed.approvedAppIds || [];
    parsed.rejectedAppIds = parsed.rejectedAppIds || [];

    // 2. İlkin müraciətlərin (Seed Applications) zəmanətli bərpası və status qorunması
    // QAYDA: Əgər seedApp "Gözləyir" statusundadırsa və Sədr tərəfindən şəxsən təsdiqlənməyibsə, mütləq "Gözləyir" qalmalıdır!
    if (Array.isArray(INITIAL_DATA.applications)) {
      INITIAL_DATA.applications.forEach((seedApp) => {
        if (parsed.deletedAppIds.includes(seedApp.id)) return;
        const existingIdx = parsed.applications.findIndex(
          (a) => a.id === seedApp.id || (a.username && seedApp.username && a.username.toLowerCase() === seedApp.username.toLowerCase())
        );
        const isApprovedByPresident = parsed.approvedAppIds && parsed.approvedAppIds.includes(seedApp.id);
        const isRejectedByPresident = parsed.rejectedAppIds && parsed.rejectedAppIds.includes(seedApp.id);

        if (existingIdx === -1) {
          const freshApp = JSON.parse(JSON.stringify(seedApp));
          if (seedApp.status === "Gözləyir" && !isApprovedByPresident && !isRejectedByPresident) {
            freshApp.status = "Gözləyir";
          }
          parsed.applications.unshift(freshApp);
          hasStorageUpdates = true;
        } else {
          // Əgər seedApp ilkin olaraq "Gözləyir"dirsə və Sədr şəxsən təsdiq etməyibsə, statusu "Gözləyir" olaraq saxla!
          if (seedApp.status === "Gözləyir" && !isApprovedByPresident && !isRejectedByPresident) {
            if (parsed.applications[existingIdx].status !== "Gözləyir") {
              parsed.applications[existingIdx].status = "Gözləyir";
              hasStorageUpdates = true;
            }
          }
        }
      });
    }

    // 3. Fərdi Qalıcı Yaddaşdan (Permanent Registrations Storage) bərpa
    try {
      const permApps = JSON.parse(localStorage.getItem("carboxmol_permanent_applications") || "[]");
      if (Array.isArray(permApps)) {
        permApps.forEach((permApp) => {
          if (!permApp || !permApp.id) return;
          if (parsed.deletedAppIds.includes(permApp.id)) return;
          const exists = parsed.applications.some(
            (a) => a.id === permApp.id || (a.username && permApp.username && a.username.toLowerCase() === permApp.username.toLowerCase())
          );
          if (!exists) {
            parsed.applications.unshift(JSON.parse(JSON.stringify(permApp)));
            hasStorageUpdates = true;
          }
        });
      }
    } catch (e) {}

    // 4. Tələbə Hesabları və Müraciətlər arasında ikitərəfli zəmanətli sinxronizasiya
    // SƏDR QAYDASI: Kimsə qeydiyyatdan keçəndə Sədr qəbul edənə qədər həm müraciət, həm də üzv hesabı "Gözləyir" statusunda qalır!
    parsed.applications.forEach((app) => {
      if (parsed.deletedAppIds.includes(app.id)) return;
      const memIdx = parsed.members.findIndex(
        (m) =>
          (m.id && m.id === app.memberId) ||
          (m.username && app.username && m.username.toLowerCase() === app.username.toLowerCase()) ||
          (m.email && app.email && m.email.toLowerCase() === app.email.toLowerCase())
      );
      const isApproved = app.status === "Təsdiqləndi" || app.status === "Qəbul Edildi";
      const isRejected = app.status === "Rədd edildi";
      const targetMemberStatus = isApproved ? "Aktiv" : (isRejected ? "Rədd edildi" : "Gözləyir");

      if (memIdx === -1) {
        parsed.members.unshift({
          id: app.memberId || ("mem-" + Date.now()),
          fullName: app.fullName,
          username: app.username || (app.email ? app.email.split("@")[0] : "user"),
          email: app.email,
          phone: app.phone || "",
          photo: app.photo || "",
          password: app.password || ("wcu" + Math.floor(1000 + Math.random() * 9000)),
          role: "Klub Üzvü",
          faculty: app.faculty,
          major: app.major,
          course: app.course,
          joinDate: app.dateApplied || "2026-10-09",
          registeredAt: app.dateApplied || "2026-10-09",
          status: targetMemberStatus,
          skills: app.tools || ["Python", "Bioinformatika"],
          motivation: app.motivation || "",
          yearGoal: app.yearGoal || "",
          researchTracks: app.researchTracks || [],
          customTasks: [],
          notes: []
        });
        hasStorageUpdates = true;
      } else {
        // İkitərəfli status uyğunluğu: Əgər müraciət "Gözləyir"dirsə, üzv hesabı da "Gözləyir" olmalıdır
        if (app.status === "Gözləyir" && parsed.members[memIdx].status !== "Gözləyir") {
          parsed.members[memIdx].status = "Gözləyir";
          hasStorageUpdates = true;
        } else if (app.status === "Təsdiqləndi" && parsed.members[memIdx].status !== "Aktiv") {
          parsed.members[memIdx].status = "Aktiv";
          hasStorageUpdates = true;
        } else if (app.status === "Rədd edildi" && parsed.members[memIdx].status !== "Rədd edildi") {
          parsed.members[memIdx].status = "Rədd edildi";
          hasStorageUpdates = true;
        }

        if (app.password && !parsed.members[memIdx].password) {
          parsed.members[memIdx].password = app.password;
          hasStorageUpdates = true;
        }
        if (app.photo && !parsed.members[memIdx].photo) {
          parsed.members[memIdx].photo = app.photo;
          hasStorageUpdates = true;
        }
        if (app.motivation && !parsed.members[memIdx].motivation) {
          parsed.members[memIdx].motivation = app.motivation;
          hasStorageUpdates = true;
        }
        if (app.yearGoal && !parsed.members[memIdx].yearGoal) {
          parsed.members[memIdx].yearGoal = app.yearGoal;
          hasStorageUpdates = true;
        }
      }
    });


    // 4. Müəllim və Mentor Hesablarının və Müraciətlərinin Zəmanətli Sinxronizasiyası
    parsed.teachers = parsed.teachers || [];
    parsed.teacherApplications = parsed.teacherApplications || [];
    parsed.teacherAnnouncements = parsed.teacherAnnouncements || [];

    // İlkin seed müəllimlərinin qorunması
    if (Array.isArray(INITIAL_DATA.teachers)) {
      INITIAL_DATA.teachers.forEach((seedTeacher) => {
        const existingIdx = parsed.teachers.findIndex(
          (t) =>
            (t.username && t.username.toLowerCase() === seedTeacher.username.toLowerCase()) ||
            t.id === seedTeacher.id
        );
        if (existingIdx === -1) {
          parsed.teachers.push(JSON.parse(JSON.stringify(seedTeacher)));
          hasStorageUpdates = true;
        }
      });
    }

    if (Array.isArray(INITIAL_DATA.teacherApplications)) {
      INITIAL_DATA.teacherApplications.forEach((seedApp) => {
        const exists = parsed.teacherApplications.some(
          (a) => a.id === seedApp.id || (a.username && a.username.toLowerCase() === seedApp.username.toLowerCase())
        );
        if (!exists) {
          parsed.teacherApplications.push(JSON.parse(JSON.stringify(seedApp)));
          hasStorageUpdates = true;
        }
      });
    }

    if (Array.isArray(INITIAL_DATA.teacherAnnouncements)) {
      INITIAL_DATA.teacherAnnouncements.forEach((seedAnn) => {
        const exists = parsed.teacherAnnouncements.some((a) => a.id === seedAnn.id);
        if (!exists) {
          parsed.teacherAnnouncements.push(JSON.parse(JSON.stringify(seedAnn)));
          hasStorageUpdates = true;
        }
      });
    }

    // Müəllimlər və Müəllim Müraciətləri arasında ikitərəfli sinxronizasiya:
    parsed.teacherApplications.forEach((app) => {
      const teachIdx = parsed.teachers.findIndex(
        (t) =>
          (t.id && t.id === app.teacherId) ||
          (t.username && app.username && t.username.toLowerCase() === app.username.toLowerCase()) ||
          (t.email && app.email && t.email.toLowerCase() === app.email.toLowerCase())
      );
      const targetStatus = (app.status === "Təsdiqləndi" || app.status === "Aktiv") ? "Aktiv" : (app.status === "Rədd edildi" ? "Rədd edildi" : "Gözləyir");
      if (teachIdx === -1) {
        parsed.teachers.unshift({
          id: app.teacherId || ("teacher-" + Date.now()),
          fullName: app.fullName,
          title: app.title || "Müəllim / Mentor",
          academicDegree: app.academicDegree || "Müəllim",
          university: app.university || "Qərbi Kaspi Universiteti (WCU)",
          faculty: app.faculty || "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
          department: app.department || "Təbiət Elmləri Kafedrası",
          email: app.email,
          phone: app.phone || "",
          username: app.username,
          password: app.password,
          photo: app.photo || "",
          specialties: app.specialties || ["Bioinformatika", "Genom Analizi"],
          orcid: app.orcid || "",
          googleScholar: app.googleScholar || "",
          officeLocation: app.officeLocation || "",
          consultationHours: app.consultationHours || "",
          bio: app.bio || "",
          status: targetStatus,
          registeredAt: app.dateApplied || "2026-10-10",
          approvedAt: targetStatus === "Aktiv" ? (app.approvedAt || "2026-10-10") : null,
          approvedBy: targetStatus === "Aktiv" ? (app.approvedBy || "Süleyman Hacızadə (Klub Sədri)") : null
        });
        hasStorageUpdates = true;
      } else {
        if (parsed.teachers[teachIdx].status !== targetStatus) {
          parsed.teachers[teachIdx].status = targetStatus;
          hasStorageUpdates = true;
        }
        if (app.password && !parsed.teachers[teachIdx].password) {
          parsed.teachers[teachIdx].password = app.password;
          hasStorageUpdates = true;
        }
      }
    });

    parsed.teachers.forEach((t) => {
      const appExists = parsed.teacherApplications.some(
        (a) =>
          (a.teacherId && a.teacherId === t.id) ||
          (a.username && t.username && a.username.toLowerCase() === t.username.toLowerCase()) ||
          (a.email && t.email && a.email.toLowerCase() === t.email.toLowerCase())
      );
      if (!appExists) {
        parsed.teacherApplications.unshift({
          id: "teach-app-" + (t.id || Date.now()),
          teacherId: t.id,
          fullName: t.fullName,
          title: t.title || "Müəllim / Mentor",
          academicDegree: t.academicDegree || "Müəllim",
          university: t.university || "Qərbi Kaspi Universiteti (WCU)",
          faculty: t.faculty || "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
          department: t.department || "Təbiət Elmləri Kafedrası",
          email: t.email,
          phone: t.phone || "",
          username: t.username,
          password: t.password,
          photo: t.photo || "",
          specialties: t.specialties || ["Bioinformatika"],
          orcid: t.orcid || "",
          googleScholar: t.googleScholar || "",
          officeLocation: t.officeLocation || "",
          consultationHours: t.consultationHours || "",
          bio: t.bio || "",
          status: t.status === "Aktiv" ? "Təsdiqləndi" : t.status,
          dateApplied: t.registeredAt || "2026-10-10",
          adminNotes: "Sədr panelində qeydiyyat təsdiqi."
        });
        hasStorageUpdates = true;
      }
    });

    // Prof. Qərib Mürşüdov Elmi Seminarının fotoreportajı və məlumatlarının zəmanətli yenilənməsi
    if (Array.isArray(parsed.events)) {
      const ev1 = parsed.events.find(e => e.id === "ev-1");
      if (ev1) {
        ev1.time = "10:00 - 13:00";
        ev1.status = "completed";
        ev1.badge = "Uğurla Keçirildi • 4 Foto";
        if (!ev1.photos || ev1.photos.length === 0 || !ev1.description.includes("aktiv iştirak etdilər")) {
          ev1.description = "Kembric Universitetinin professoru və MRC Molekulyar Biologiya Laboratoriyasının (MRC LMB, Cambridge, UK) Proqram Rəhbəri Prof. Qərib Mürşüdovun ustad dərsi və elmi seminarı. Klub üzvlərindən bəzi üzvlər aktiv iştirak etdilər, suallar verdilər və suallarına dünya şöhrətli alim tərəfindən ətraflı cavab aldılar.";
          ev1.speaker = "Prof. Qərib Mürşüdov (MRC LMB Cambridge) & Süleyman Hacızadə (Klub Sədri)";
          ev1.report = "Klub üzvlərindən bəzi üzvlər aktiv iştirak etdilər, suallar verdilər və suallarına cavab aldılar.";
          ev1.photos = [
            {
              src: "assets/images/events/garib_murshudov_seminar_group.jpg",
              title: "Böyük Qrup Xatirə Fotosu",
              caption: "Qərbi Kaspi Universiteti rəhbərliyi, tələbələr, klub üzvləri və Prof. Qərib Mürşüdov"
            },
            {
              src: "assets/images/events/garib_murshudov_seminar_president.jpg",
              title: "Klub Sədri və Qonaq Alim",
              caption: "CarboxMol Bioinformatika Klubunun Sədri Süleyman Hacızadə və Prof. Qərib Mürşüdov"
            },
            {
              src: "assets/images/events/garib_murshudov_seminar_member1.jpg",
              title: "Klub Üzvü ilə Görüş",
              caption: "Klub Üzvü, Sədr Süleyman Hacızadə və Prof. Qərib Mürşüdov (Sual-cavab sessiyası xatirəsi)"
            },
            {
              src: "assets/images/events/garib_murshudov_seminar_member2.jpg",
              title: "Klub Üzvü ilə Görüş",
              caption: "Klub Üzvü, Prof. Qərib Mürşüdov və Klub Sədri Süleyman Hacızadə"
            }
          ];
          hasStorageUpdates = true;
        }
      }
    }

    // Recordings Arxivinin zəmanətli təminatı (Video & Audio Dərslər)
    if (!parsed.recordings || !Array.isArray(parsed.recordings) || parsed.recordings.length === 0) {
      parsed.recordings = [
        {
          id: "rec-garib-murshudov-seminar",
          title: "Prof. Qərib Mürşüdov Xüsusi Ustad Dərsi: Bayes Statistikası və Cryo-EM",
          room: "Beynəlxalq Alimlər & Qonaq Seminarı",
          roomId: "guest-seminars",
          hostName: "Prof. Qərib Mürşüdov & Süleyman Hacızadə",
          hostRole: "Fəxri Qonaq Alim & Klub Sədri",
          type: "video",
          duration: "01:25:40",
          sizeFormatted: "148.6 MB",
          date: "20 Oktyabr 2026",
          time: "10:30",
          timestamp: 1792488600000,
          tags: ["Struktur Biologiyası", "REFMAC5", "Cryo-EM"],
          summary: "Kembric Universitetinin professoru Prof. Qərib Mürşüdovun 3D atomar makromolekulyar zülal strukturları və Bayes yanaşması üzrə ustad dərsi."
        },
        {
          id: "rec-deseq2-rnaseq-lab",
          title: "Bioconductor DESeq2 ilə Diferensial Gen Ekspressiyası Praktikumu",
          room: "Bioconductor & Kodlaşdırma Laboratoriyası",
          roomId: "bioc-lab",
          hostName: "Tədris Mentoru & Bioinformatika Qrupu",
          hostRole: "Akademik Mentor",
          type: "video",
          duration: "00:48:15",
          sizeFormatted: "84.2 MB",
          date: "18 Oktyabr 2026",
          time: "14:00",
          timestamp: 1792327200000,
          tags: ["R", "Bioconductor", "DESeq2", "Volcano Plot"],
          summary: "RNA-seq sayım matrislərinin normallaşdırılması, p-value korreksiyası və canlı Volcano Plot vizualizasiyası."
        },
        {
          id: "rec-podcast-alphafold3",
          title: "Elmi Podkast #1: AlphaFold 3 və 2024 Kimya Nobel İnqilabı",
          room: "Journal Club & Elmi Debat Otağı",
          roomId: "journal-club",
          hostName: "Süleyman Hacızadə (Klub Sədri)",
          hostRole: "Klub Sədri",
          type: "audio",
          duration: "00:32:10",
          sizeFormatted: "18.5 MB",
          date: "15 Oktyabr 2026",
          time: "18:00",
          timestamp: 1792072800000,
          tags: ["Audio Podkast", "AlphaFold 3", "Nobel 2024"],
          summary: "Süni intellektin biomolekulyar bükülmədə tətbiqi, DNT-zülal komplekslərinin proqnozu və klub üzvlərinin sualları."
        }
      ];
      hasStorageUpdates = true;
    }

    // Ədalətli Görüşlər və Rezervasiyalar Sistemi (Meetings)
    if (!parsed.meetings || !Array.isArray(parsed.meetings) || parsed.meetings.length === 0) {
      parsed.meetings = [
        {
          id: "meet-live-alphafold",
          title: "Praktikum: AlphaFold 3 ilə Zülal Komplekslərinin Modelləşdirilməsi",
          room: "Bioconductor & Kodlaşdırma Laboratoriyası",
          roomId: "bioc-lab",
          meetingCode: "WCU-BIO-ALPHAFOLD-LAB",
          hostName: "Süleyman Hacızadə",
          hostRole: "Klub Sədri",
          hostBadge: "Klub Sədri",
          hostBadgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
          date: "24 Oktyabr 2026",
          startTime: "15:30",
          durationMinutes: 45,
          status: "scheduled",
          attendeesCount: 16,
          maxAttendees: 50,
          agenda: "AlphaFold 3 JSON strukturları, pLDDT/PAE metrikalarının təhlili və PyMOL, ChimeraX, Carbox & CarboxMol ilə vizualizasiyası (hamısı tədris ediləcək).",
          allowStudentMic: true,
          isRecorded: true,
          meetingType: "Praktiki Laboratoriya"
        },
        {
          id: "meet-sched-journal-club",
          title: "Journal Club: Nature 2026 — De Novo Peptid Dizaynı və Xərçəng İmmunoterapiyası",
          room: "Journal Club & Elmi Debat Otağı",
          roomId: "journal-club",
          meetingCode: "WCU-BIO-JOURNAL-CLUB-08",
          hostName: "Aytən Quliyeva",
          hostRole: "Klub Üzvü / Tələbə Moderator",
          hostBadge: "Klub Üzvü",
          hostBadgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/40",
          date: "22 Oktyabr 2026",
          startTime: "16:00",
          durationMinutes: 60,
          status: "scheduled",
          attendeesCount: 12,
          maxAttendees: 30,
          agenda: "David Baker laboratoriyasının son RoseTTAFold immunoterapiya dizayn məqaləsinin tələbə təqdimatı və debatı.",
          allowStudentMic: true,
          isRecorded: true,
          meetingType: "Tələbə Elmi Debatı"
        },
        {
          id: "meet-sched-rnaseq-workshop",
          title: "Akademik Dərs: Linux mühitində FASTQ Quality Control və Trimming",
          room: "Ümumi Elmi Mühazirə Zalı",
          roomId: "general-lecture",
          meetingCode: "WCU-BIO-NGS-QC-2026",
          hostName: "Bioinformatika Tədris Qrupu",
          hostRole: "Akademik Mentor",
          hostBadge: "Müəllim / Mentor",
          hostBadgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
          date: "24 Oktyabr 2026",
          startTime: "11:00",
          durationMinutes: 90,
          status: "scheduled",
          attendeesCount: 22,
          maxAttendees: 60,
          agenda: "FastQC, MultiQC və Trimmomatic alətlərinin Bash terminalında istifadəsi və NGS sekvens xətalarının təmizlənməsi.",
          allowStudentMic: true,
          isRecorded: true,
          meetingType: "Akademik Mühazirə"
        }
      ];
      hasStorageUpdates = true;
    }

    // Həmişə ən son 3D struktur alətlərinin və alimlərin məlumatlarını təmin et və saxta live görüşləri təmizlə
    parsed.structuralTools = INITIAL_DATA.structuralTools;
    if (typeof INITIAL_COLLABORATORS !== "undefined" && (!parsed.collaborators || parsed.collaborators.length !== INITIAL_COLLABORATORS.length || !parsed.collaborators.some(c => c.id === "suleyman-hajizadeh"))) {
      parsed.collaborators = JSON.parse(JSON.stringify(INITIAL_COLLABORATORS));
      hasStorageUpdates = true;
    }
    if (parsed.meetings && Array.isArray(parsed.meetings)) {
      parsed.meetings.forEach(m => {
        if (m.id === "meet-live-alphafold" && m.status === "live") {
          m.status = "scheduled";
          hasStorageUpdates = true;
        }
      });
    }

    if (hasStorageUpdates) {
      parsed._dataVersion = CURRENT_DATA_VERSION;
      localStorage.setItem("wcu_bioinfo_club_data", JSON.stringify(parsed));
    }

    return parsed;
  } catch (e) {
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
}

function saveClubData(data) {
  data._dataVersion = CURRENT_DATA_VERSION;
  localStorage.setItem("wcu_bioinfo_club_data", JSON.stringify(data));
  SyncEngine.broadcast("DATA_SAVED", { timestamp: Date.now() });
}

