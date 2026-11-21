// CarboxMol Bioinformatika Klubu - İlkin Verilənlər Bazası (Local DB)

const INITIAL_DATA = {
  clubInfo: {
    name: "CarboxMol Bioinformatika Klubu",
    englishName: "CarboxMol Bioinformatics Club",
    university: "Qərbi Kaspi Universiteti (Western Caspian University)",
    year: "2026/2027",
    president: "Süleyman Mehdi oğlu Hacızadə",
    presidentTitle: "Təsisçi və Klub Sədri | Böyük Laborant (ETN Molekulyar Biologiya İnstitutu)",
    presidentEducation: "Western Caspian University, Biologiya (İngilis dili), 2021–2026 | Holberton School Azerbaijan (Foundations of Computer Science, İyun 2025 – Aprel 2026) | Texnika və Texnologiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi (2020–2021) | 1 saylı Bakı Tibb Kolleci (Əczaçılıq, 2017–2020)",
    presidentBio: "Qərbi Kaspi Universiteti Biologiya (İngilis dili) 2021–2026 (V kurs tələbəsi). Elm və Təhsil Nazirliyi (ETN) Molekulyar Biologiya İnstitutunun Hesablama Struktur Biologiyası Laboratoriyasının böyük laborantı (laboratoriya müdiri Prof. Qərib Mürşüdov ilə birgə protonlaşmanı aşkar edən alqoritm/proqram inkişaf etdirir). Holberton School Azerbaijan (Foundations of Computer Science, İyun 2025 – Aprel 2026), Texnika və Texnologiyalar üzrə Bakı Dövlət Peşə Təhsil Mərkəzi (Kompüter Ustalığı / İT Dəstək, 1 illik təhsil, 2020–2021) və 1 saylı Bakı Tibb Kolleci (Əczaçılıq, 2017–2020, 6+ illik əczaçılıq təcrübəsi).",
    presidentPhoto: "assets/images/president.jpg",
    presidentGithub: "https://github.com/SuleimanHajizadeh",
    phones: ["+994 70 550 69 07", "+994 99 350 69 07"],
    contactEmail: "suleyman.hacizade.232bioing@wcu.edu.az",
    secondaryEmail: "suleyman.hacizade1@gmail.com",
    contactEmails: ["suleyman.hacizade.232bioing@wcu.edu.az", "suleyman.hacizade1@gmail.com"],
    officialLinks: {
      club: "https://carboxmol-bioinformatics-club.github.io/",
      biomeet: "https://carboxmol-bioinformatics-club.github.io/#biomeet",
      carbox: "https://project-carbox.github.io/",
      carboxDocs: "https://project-carbox.readthedocs.io/en/latest/",
      carboxmol: "https://carboxmol.github.io/",
      carboxmolDocs: "https://carboxmol.readthedocs.io/en/latest/"
    },
    circularRoadmap: [
      {
        step: 1,
        title: "28 Həftəlik Praktiki Bioinformatika Tədris Prosesi",
        description: "Əsasən onlayn (BioMeet üzərindən), bəzən isə fiziki formatda olmaqla Linux/Bash, Python, Biopython, R/Bioconductor, NGS sekvens analizi, struktur biologiyası və AlphaFold üzrə sistemli təlimlərin keçirilməsi; həmçinin Prof. Qərib Mürşüdov və növbəti mərhələlərdə digər mütəxəssislər tərəfindən xüsusi təlimlərin təşkili."
      },
      {
        step: 2,
        title: "İlk CarboxMol Bioinformatika Hakatonu",
        description: "Gələcək tədris prosesinin ilk məzunları arasında İlk CarboxMol Bioinformatika Hakatonunu təşkil etmək üçün əlimizdən gəldiyi qədər işlər görməyə çalışacağıq."
      },
      {
        step: 3,
        title: "Alimlərlə Birgə Elmi Məqalələrin Hazırlanması",
        description: "İlk məzun verəcəyimiz tələbə qruplarının alimlərlə birgə elmi məqalələrin yazılmasına hazırlığını başlatmağı planlaşdırırıq."
      },
      {
        step: 4,
        title: "Journal Club Sessiyaları (Son Mərhələ — Sirkulyar Davamlılıq)",
        description: "Ən son mərhələdə artıq müəyyən elmi məqalələr yazıldıqdan sonra Journal Club çərçivəsində elmi işçilərin, klub üzvlərinin və klub müəllimlərinin birgə müzakirə sessiyalarını təşkil etməyi planlaşdırırıq. Bu 4 mərhələli proses Azərbaycanda davamlı inkişaf üçün sirkulyar (dövri) olaraq davam edəcəkdir."
      }
    ],
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
      title: "Təşkilati Struktur və Akademik Heyət Reyestri",
      subtitle: "Klub Sədri, Koordinatorlar, Beynəlxalq Alimlər, Akademik Müəllimlər və Klub Üzvləri",
      category: "Struktur",
      pdfUrl: "docs/03_Teshkilati_Struktur.pdf",
      docxUrl: "docs/03_Teshkilati_Struktur.docx",
      mdUrl: "docs/03_Teshkilati_Struktur.md",
      icon: "fa-sitemap",
      description: "1 Sədr + 2 Koordinator modeli, Dəvətli Beynəlxalq Alimlər (Prof. Qərib Mürşüdov, Elbay Əliyev), Akademik Müəllimlər/Mentorlar (Fidan Məhərrəmova — ICL, Leyla Budaqova, Süsən Həsənova, Sefanya Hacızadə) və Klub Üzvlərinin rəsmi strukturu."
    },
    {
      id: "04_plan",
      title: "İllik Fəaliyyət Planı və Sillabus",
      subtitle: "2 semestr (28 həftə) + 4 mərhələli sirkulyar (dövri) elmi inkişaf planı",
      category: "Tədris",
      pdfUrl: "docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.pdf",
      docxUrl: "docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.docx",
      mdUrl: "docs/04_Illik_Fealiyyet_Plani_ve_Sillabus.md",
      icon: "fa-calendar-check",
      description: "28 həftəlik praktiki tədris (BioMeet onlayn və fiziki), İlk CarboxMol Bioinformatika Hakatonu, alimlərlə birgə elmi məqalə hazırlığı və Journal Club sessiyalarını əhatə edən sirkulyar akademik proqram."
    },
    {
      id: "06_elmi_koordinator",
      title: "Elm və Tədris Koordinatoru — Vəzifə Təlimatı",
      subtitle: "Sənəd İndeksi: CMBC-2026/VT-06 • Rəsmi Kargüzarlıq Təlimatı",
      category: "Koordinator",
      pdfUrl: "docs/06_Elm_ve_Tedris_Koordinatoru_Vezife_Telimati.pdf",
      docxUrl: "docs/06_Elm_ve_Tedris_Koordinatoru_Vezife_Telimati.docx",
      mdUrl: "docs/06_Elm_ve_Tedris_Koordinatoru_Vezife_Telimati.md",
      icon: "fa-graduation-cap",
      description: "28 həftəlik tədris cədvəli, BioMeet dərsləri, akademik müəllimlər və beynəlxalq alimlərlə koordinasiya, Klub Üzvlərinin tapşırıqları, hakaton, məqalə hazırlığı və Journal Club üzrə tam vəzifə təlimatı."
    },
    {
      id: "07_teshkilat_media_koordinatoru",
      title: "Təşkilat və Media Koordinatoru — Vəzifə Təlimatı",
      subtitle: "Sənəd İndeksi: CMBC-2026/VT-07 • Rəsmi Kargüzarlıq Təlimatı",
      category: "Koordinator",
      pdfUrl: "docs/07_Teshkilat_ve_Media_Koordinatoru_Vezife_Telimati.pdf",
      docxUrl: "docs/07_Teshkilat_ve_Media_Koordinatoru_Vezife_Telimati.docx",
      mdUrl: "docs/07_Teshkilat_ve_Media_Koordinatoru_Vezife_Telimati.md",
      icon: "fa-bullhorn",
      description: "Vizual dizayn və elmi afişalar (Canva/Figma), sosial media idarəçiliyi (LinkedIn, Instagram, Telegram), Klub Üzvləri ilə kommunikasiya, tədbir logistikası və universitetlərarası/tərəfdaşlıq əlaqələri üzrə tam vəzifə təlimatı."
    }
  ],

events: [
    {
      id: "ev-techbrains-2026",
      title: "TechBrains 2026: Hesablama Struktur Biologiyası və CarboxMol",
      category: "Bio / Longevity • Konfrans",
      date: "21–22 Noyabr 2026",
      time: "11:00 - 16:00",
      location: "Bakı • GOUP Tech Community (ADA Universiteti)",
      badge: "Uğurla Keçirildi • 7 Foto & Slayd",
      description: "21–22 Noyabr 2026 tarixində GOUP Baku Tech Community və CNCF Baku tərəfindən ADA Universiteti və İnnovasiya və Rəqəmsal İnkişaf Agentliyinin (İRİA) tərəfdaşlığı ilə keçirilən TechBrains 2026 konfransında (Bio / Longevity • Bioinformatics, Spiker 51/100) Azərbaycanda Tələbə Bioinformatika Ekosisteminin Yaradılması, zülalların 3D modelləşdirilməsi, makromolekulyar kristalloqrafiya (Carbox & CarboxMol), Python və R mövzularında rəsmi məruzə uğurla təqdim edildi.",
      speaker: "Süleyman Hacızadə (CarboxMol Bioinformatika Klubunun Sədri & ETN Molekulyar Biologiya İnstitutu, Böyük Laborant)",
      status: "completed",
      poster: "assets/images/announcements/techbrains-2026-speaker.jpg",
      report: "Məruzədə CarboxMol Bioinformatika Klubu, 7,230 PDB strukturunda (≤ 1.20 Å) anomal Asp/Glu protonasiyasını (ASH/GLH) və LBHB əlaqələrini aşkar edən Carbox alqoritmi və WebGL əsaslı CarboxMol 3D Protein Vizualizatoru təqdim olundu.",
      photos: [
        {
          src: "assets/images/events/techbrains_2026_stage_presentation.jpg",
          title: "TechBrains 2026 — Səhnə Çıxışı və Canlı Məruzə",
          caption: "Klub Sədri Süleyman Hacızadə TechBrains 2026 konfransında «Hesablama Struktur Biologiyası və CarboxMol» məruzəsini təqdim edərkən."
        },
        {
          src: "assets/images/events/techbrains_2026_speaker_badge.jpg",
          title: "Rəsmi Spiker Nişanı (Spiker 51/100)",
          caption: "Süleyman Hacızadə GOUP TechBrains 2026 konfransının rəsmi Spiker nişanı ilə."
        },
        {
          src: "assets/images/events/techbrains_2026_conference_hall.jpg",
          title: "ADA Universiteti Konfrans Zalı",
          caption: "TechBrains 2026 beynəlxalq konfrans zalında rəsmi spiker xatirə fotosu."
        },
        {
          src: "assets/images/events/techbrains_2026_banner_participants.jpg",
          title: "TechBrains 2026 Rəsmi Banneri Önündə",
          caption: "GOUP Baku Tech Community, CNCF Baku, ADA Universiteti və İRİA tərəfdaşlığı ilə keçirilən konfrans banneri önündə iştirakçılarla."
        },
        {
          src: "assets/images/events/techbrains_2026_group_campus.jpg",
          title: "Kampusda Qrup Xatirə Fotosu",
          caption: "TechBrains 2026 konfrans iştirakçıları və texnologiya icması üzvləri ilə xatirə fotosu."
        },
        {
          src: "assets/images/events/techbrains_2026_slide_speaker.jpg",
          title: "Təqdimat Slaydı 269 — BIO / LONGEVITY Spiker Profili",
          caption: "Süleyman Hacızadə: ETN Molekulyar Biologiya İnstitutu, CarboxMol Bioinformatika Klubu, Carbox (PDB Protonasiya Aşkarlama Alqoritmi) və CarboxMol (3D Zülal Vizualizatoru)."
        },
        {
          src: "assets/images/events/techbrains_2026_slide_carboxmol.jpg",
          title: "Təqdimat Slaydı 270 — Hesablama Struktur Biologiyası və CarboxMol",
          caption: "Azərbaycanda Hesablama Struktur Biologiyası və Bioinformatika Ekosistemi: 01 · Klub, 02 · Carbox Alqoritmi və 03 · CarboxMol 3D Studiya icmalı."
        }
      ]
    },
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

  tasks: [],

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
      badge: "Açıq Mənbəli Elmi Workbench (İnkişaf Mərhələsində)",
      category: "Hesablama Struktur Biologiyası & Protonlaşma Analizi Mühərriki",
      developer: "Süleyman Hacızadə (Böyük Laborant) & Prof. Qərib Mürşüdov (Lab Müdiri, ETN Molekulyar Biologiya İnstitutu & MRC LMB)",
      status: "Rəsmi Alət • https://project-carbox.github.io/",
      url: "https://project-carbox.github.io/",
      docsUrl: "https://project-carbox.readthedocs.io/en/latest/",
      description: "PDB və mmCIF makromolekulyar koordinatlarının emalı, zülal strukturlarında protonlaşmanı aşkar edən (detect edən) alqoritm, atomlararası rabitə bucaqları, dihedrallar və zülal-liqand qarşılıqlı əlaqələrinin hesablanması üçün inkişaf etdirilən açıq mənbəli mühərrik. Rəsmi sayt: https://project-carbox.github.io/",
      syllabusWeek: "Həftə 11, Həftə 24",
      icon: "fa-dna"
    },
    {
      id: "tool-carboxmol",
      name: "CarboxMol",
      badge: "Açıq Mənbəli (Open-Source) 3D Vizualizator",
      category: "İnteraktiv 3D Biomolekulyar Vizualizator",
      developer: "Süleyman Hacızadə (Böyük Laborant) & Prof. Qərib Mürşüdov (Lab Müdiri, ETN Molekulyar Biologiya İnstitutu & MRC LMB)",
      status: "Rəsmi Alət • https://carboxmol.github.io/",
      url: "https://carboxmol.github.io/",
      docsUrl: "https://carboxmol.readthedocs.io/en/latest/",
      description: "Açıq mənbəli (open-source) interaktiv 3D biomolekulyar vizuallaşdırma və model render proqramı: zülalların ikincili/üçüncülü strukturlarını, aktiv mərkəz ciblərini, protonlaşma vəziyyətlərini və elektron sıxlıqlarını 3D mühitdə yüksək sürətlə vizuallaşdırmaq üçün inkişaf etdirilir. Rəsmi sayt: https://carboxmol.github.io/",
      syllabusWeek: "Həftə 11, Həftə 24",
      icon: "fa-atom"
    },
    {
      id: "tool-openkbc-zscore",
      name: "OpenKBC Z-Score & Multi-Omics Engine",
      badge: "Elmi Tədqiqat Modulu (MIT)",
      category: "Gen Ekspressiyası & Siqnal Yolları",
      developer: "Junhee Yoon (OpenKBC) & CarboxMol Bioinformatics Club",
      status: "Tədris və Tədqiqat üçün Aktivləşdirilib",
      description: "Dağınıq Skleroz (Multiple Sclerosis) və xərçəng toxumalarında mikromassiv/RNA-Seq ekspressiyasından fenotipik siqnal yollarının aktivasiya Z-balını hesablayan riyazi mühərrik və Snakemake avtomatlaşdırılmış iş axını (workflow).",
      syllabusWeek: "Həftə 7, Həftə 15",
      icon: "fa-chart-line"
    }
  ],

  members: [

{
        "id": "mem-1794415625983",
        "fullName": "Sarukhanova Ulviyya (Arif)",
        "username": "u1yashko",
        "email": "u1yasarukhova@gmail.com",
        "phone": "+994103279832",
        "password": "u1yashmilashk0",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (Western Caspian University)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biology",
        "course": "Bakalavr (II kurs)",
        "joinDate": "11.11.2026",
        "registeredAt": "2026-11-11",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=u1yashko",
        "photo": "",
        "profileUrl": "https://www.linkedin.com/in/ulyashasarukhova7",
        "studyLang": "İngilis bölməsi",
        "gpa": "86/100",
        "skills": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Transkriptomika və RNA-Seq",
            "Süni İntellekt və Biotibb ML"
        ],
        "tools": [
            "Python",
            "R / RStudio",
            "Linux / Bash",
            "Git & GitHub",
            "C / C++",
            "SQL"
        ],
        "bioTools": [
            "NCBI / BLAST",
            "UniProt",
            "RCSB PDB",
            "PyMOL / ChimeraX / Coot / Carbox / CarboxMol",
            "AlphaFold DB",
            "Ensembl"
        ],
        "motivation": "Researching and learning new fields and build bright career",
        "yearGoal": "May be even if one research program and experience for adding and strengthening my CV",
        "customTasks": [],
        "notes": []
    },
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
    },
    {
        "id": "mem-banugurbanzade",
        "fullName": "Banu Qurbanzadə (Emin)",
        "username": "banugurbanzade",
        "email": "banugurbanzade@gmail.com",
        "phone": "+994503381571",
        "password": "623510100Bb!",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "IT",
        "course": "I Kurs",
        "joinDate": "19.10.2026",
        "registeredAt": "2026-10-19",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=banugurbanzade",
        "photo": "",
        "skills": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Python",
            "Bioinformatika"
        ],
        "motivation": "Mənim üçün maraqlı və faydalı olacağını düşünürəm",
        "yearGoal": "Proqramlarla işləmək bacarığı",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-nazrinahmadli",
        "fullName": "Nəzrin Əhmədli (Yaşar)",
        "username": "nazrinahmadli",
        "email": "nazrinahmedli04@gmail.com",
        "phone": "+994555724718",
        "password": "Nazrin2004",
        "role": "Klub Üzvü",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Molekulyar biologiya",
        "course": "Magistratura",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nazrinahmadli",
        "photo": "",
        "skills": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Transkriptomika və RNA-Seq",
            "Süni İntellekt və Biotibb ML",
            "Filogenetika və Təkamül Ağacları"
        ],
        "motivation": "Bioinformatika sahəsində biliklərimi artırıb, bu sahədə inkişaf etmək istəyirəm.",
        "yearGoal": "Elmi məqalə hazırlaya bilmək, bioloji datalardan istifadə etmək və analiz etmək, həmçinin onların bazalara yüklənməsini bilmək, Python və R proqramlaşdırma dillərini bilmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-ayt-kin",
        "fullName": "Aytəkin Namazova (Eldəniz)",
        "username": "aytəkin",
        "email": "namazovaaytekin474@gmail.com",
        "phone": "0514034124",
        "password": "Aytekin22",
        "role": "Klub Üzvü",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Molekulyar biologiya",
        "course": "Magistratura",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=aytekin",
        "photo": "",
        "skills": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Bioinformatika"
        ],
        "motivation": "Bioinformatikanı dərindən öyrənmək və molekulyar biologiya sahəsində tətbiq etmək.",
        "yearGoal": "Magistratura tədqiqatımda bioinformatik alətlərdən sərbəst istifadə etmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-narmin-mmdva",
        "fullName": "Nərmin Məmmədova (Ceyhun)",
        "username": "narmin.mmdva",
        "email": "narmin.mammadova2025@khazar.org",
        "phone": "+994514368667",
        "password": "Nermin2007",
        "role": "Klub Üzvü",
        "university": "Xəzər Universiteti",
        "faculty": "Xəzər Universiteti - Təbiət Elmləri",
        "major": "Biotexnologiya",
        "course": "II Kurs",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=narmin.mmdva",
        "photo": "",
        "skills": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Biotexnologiya"
        ],
        "motivation": "Biotexnologiya və bioinformatikanın kəsişməsində təcrübə qazanmaq.",
        "yearGoal": "Genetik və struktur analizləri mənimsəmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-lea-4ever",
        "fullName": "Əsma Mütəllimli (Ramil)",
        "username": "lea_4ever",
        "email": "asmamutallimli@gmail.com",
        "phone": "+994 99 788 01 48",
        "password": "welling10n",
        "role": "Klub Üzvü",
        "university": "Azərbaycan Dövlət Aqrar Universiteti (ADAU)",
        "faculty": "ADAU - Qida Mühəndisliyi",
        "major": "Qida Texnologiyaları",
        "course": "II Kurs",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=lea_4ever",
        "photo": "",
        "skills": [
            "Bioinformatika",
            "Genomika",
            "Qida Təhlükəsizliyi Analizi"
        ],
        "motivation": "Bioinformatikanın qida texnologiyalarına tətbiqini araşdırmaq.",
        "yearGoal": "Bioloji dataların təhlilini öyrənmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-gulchin-m",
        "fullName": "Gülçin Məmmədli (Elçin)",
        "username": "gulchin_m",
        "email": "gulchin.memmedli.234bioaz@wcu.edu.az",
        "phone": "+994503181924",
        "password": "gulcin207",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "III Kurs",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=gulchin_m",
        "photo": "",
        "skills": [
            "Genomika",
            "Bioinformatika",
            "Struktur Biologiyası"
        ],
        "motivation": "Universitetdə biologiya təhsilimi bioinformatika ilə zənginləşdirmək.",
        "yearGoal": "Struktur modelləşdirmə və elmi layihələrdə fəal iştirak.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-rasim",
        "fullName": "Rasim Abiyev (Oktay)",
        "username": "rasim",
        "email": "abiyev.rasim@gmail.com",
        "phone": "+994 51 554 92 59",
        "password": "Q1w2e3",
        "role": "Klub Üzvü",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Regionşünaslıq və Beynəlxalq Münasibətlər",
        "major": "Regionşünaslıq və Beynəlxalq Münasibətlər",
        "course": "Magistratura",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=rasim",
        "photo": "",
        "skills": [
            "Data Analizi",
            "Beynəlxalq Əməkdaşlıq",
            "Bioinformatika"
        ],
        "motivation": "Fənlərarası inteqrasiya və bioinformatika elmi siyasətini öyrənmək.",
        "yearGoal": "Bioinformatik layihələrin koordinasiyasında iştirak.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-leyla-25",
        "fullName": "Budagova Leyla",
        "username": "leyla_25",
        "email": "leylabudaqova073@gmail.com",
        "phone": "+994505761087",
        "password": "250921",
        "role": "Akademik Mentor & Doktorant",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Molekulyar Biologiya",
        "course": "Doktorantura",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=leyla_25",
        "photo": "",
        "skills": [
            "Molekulyar Biologiya",
            "Genomika",
            "Doktorantura Tədqiqatları"
        ],
        "motivation": "Doktorantura tədqiqatımda qabaqcıl bioinformatik metodları tətbiq etmək və klub üzvlərinə elmi mentorluq göstərmək.",
        "yearGoal": "Beynəlxalq indeksli jurnallarda elmi məqalə dərc etdirmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-gunay",
        "fullName": "Gunay Rustemova (Zakir)",
        "username": "gunay",
        "email": "g27837103@gmail.com",
        "phone": "0518578783",
        "password": "gunay1019",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "III Kurs",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=gunay",
        "photo": "",
        "skills": [
            "Biologiya",
            "Bioinformatika",
            "DNT Analizi"
        ],
        "motivation": "Bioinformatika biliklərimi artırmaq və praktiki alətlərlə işləmək.",
        "yearGoal": "Praktiki bacarıqlara yiyələnmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-ayselhummetovva",
        "fullName": "Aysel Hümmətova (Hümmət)",
        "username": "ayselhummetovva",
        "email": "aysel.hummetova.234bioaz@wcu.edu.az",
        "phone": "0707037032",
        "password": "4716ays?",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "III Kurs",
        "joinDate": "13.10.2026",
        "registeredAt": "2026-10-13",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=ayselhummetovva",
        "photo": "",
        "skills": [
            "Genomika",
            "Struktur Biologiyası",
            "Bioinformatika"
        ],
        "motivation": "Bioinformatika laboratoriyasında tədqiqatçı kimi formalaşmaq.",
        "yearGoal": "Fərdi tədqiqat layihəsi yekunlaşdırmaq.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-mr-scientist",
        "fullName": "Anar Vəliyev (Farid)",
        "username": "mr.scientist",
        "email": "veliyevanar750@gmail.com",
        "phone": "0557504342",
        "password": "Believe in yourself",
        "role": "Klub Üzvü",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Biologiya",
        "course": "III Kurs",
        "joinDate": "14.10.2026",
        "registeredAt": "2026-10-14",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=mr.scientist",
        "photo": "",
        "skills": [
            "Python",
            "Genomika",
            "Bioinformatika",
            "İngiliscə Elmi Tədqiqat"
        ],
        "motivation": "Beynəlxalq bioinformatika laboratoriyalarında tədqiqat aparmaq.",
        "yearGoal": "Kompüter genomikası üzrə praktiki bacarıqlar.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-nuhov",
        "fullName": "Nicat Nuhov (Pərviz)",
        "username": "nuhov",
        "email": "nicatnuhov389@gmail.com",
        "phone": "505035670",
        "password": "1453",
        "role": "Klub Üzvü",
        "university": "Azərbaycan Dövlət Pedaqoji Universiteti (ADPU)",
        "faculty": "ADPU - Kimya və Biologiya Fakültəsi",
        "major": "Kimya və biologiya müəllimliyi",
        "course": "III Kurs",
        "joinDate": "14.10.2026",
        "registeredAt": "2026-10-14",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nuhov",
        "photo": "",
        "skills": [
            "Kimya",
            "Biologiya",
            "Bioinformatika"
        ],
        "motivation": "Müasir biologiya tədrisində kompüter bioinformatikasını tətbiq etmək.",
        "yearGoal": "Klub çərçivəsində praktiki layihələr icra etmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-malikova-reyhan",
        "fullName": "Reyhan Malikova (Nadim)",
        "username": "malikova_reyhan",
        "email": "r.malikova24@abdn.ac.uk",
        "phone": "+994509988838",
        "password": "Reychik03",
        "role": "Klub Üzvü",
        "university": "University of Aberdeen",
        "faculty": "Tədqiqat İnstitutu və ya Mərkəzi - Biotexnologiya və Bioinformatika",
        "major": "Biotexnologiya və Bioinformatika",
        "course": "Magistratura",
        "joinDate": "14.10.2026",
        "registeredAt": "2026-10-14",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=malikova_reyhan",
        "photo": "",
        "skills": [
            "Genomika",
            "Biotexnologiya",
            "Bioinformatika",
            "NGS Analizi"
        ],
        "motivation": "Beynəlxalq magistratura təcrübəmi CarboxMol klubu ilə bölüşmək və birgə araşdırmalar aparmaq.",
        "yearGoal": "Klubla birgə elmi tədqiqat məqaləsi nəşr etmək.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-minarataghiyeva",
        "fullName": "Minara Taghiyeva (Elkhan)",
        "username": "minarataghiyeva",
        "email": "minara.taghiyeva@yuksekihtisas.edu.tr",
        "phone": "+994554895953",
        "password": "Minara2020",
        "role": "Klub Üzvü",
        "university": "Yüksek İhtisas Üniversitesi",
        "faculty": "Tibbi Genetik",
        "major": "Tibbi Genetik",
        "course": "Magistratura",
        "joinDate": "14.10.2026",
        "registeredAt": "2026-10-14",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=minarataghiyeva",
        "photo": "",
        "skills": [
            "Tibbi Genetik",
            "Genomika",
            "Klinik Bioinformatika"
        ],
        "motivation": "Tibbi genetik sahəsində klinik bioinformatik alətləri dərindən öyrənmək.",
        "yearGoal": "Xəstəliklərlə bağlı mutasiyaların in-silico analizi.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fatimirzz",
        "fullName": "Fatimə Mirzəyeva (David)",
        "username": "fatimirzz",
        "email": "fatima.mirzayeva.david@bsu.edu.az",
        "phone": "+994709809089",
        "password": "Mirzeyeva.999",
        "role": "Klub Üzvü",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Molekulyar biologiya",
        "course": "Magistratura",
        "joinDate": "14.10.2026",
        "registeredAt": "2026-10-14",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=fatimirzz",
        "photo": "",
        "skills": [
            "Molekulyar Biologiya",
            "Genomika",
            "Bioinformatika"
        ],
        "motivation": "Magistratura işimdə molekulyar biologiya və bioinformatikanı birləşdirmək.",
        "yearGoal": "Molekulyar modelləşdirmə və elmi nəşr.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-kenanbiotech",
        "fullName": "Kənan Heydərov (Fərail)",
        "username": "kenanbiotech",
        "email": "heyderofknan@gmail.com",
        "phone": "+994519549012",
        "password": "Kennan1245",
        "role": "Klub Üzvü",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Biotexnologiya",
        "course": "II Kurs",
        "joinDate": "24.10.2026",
        "registeredAt": "2026-10-24",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=kenanbiotech",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Ümumiyyətlə bioinformatika sahəsinə geniş marağım var və düşünürəm və inanıram ki CarboxMol Bioinformatika klubunda bunlara cavab tapacam.",
        "yearGoal": "Açığı hələki tam qərar verməmişəm duruma görə dəyişə bilər.",
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-1794979215352",
        "fullName": "Mehdi Fətullalı (Rafiq)",
        "email": "the.mehdidi@gmail.com",
        "phone": "+994773118757",
        "photo": "",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "Bakalavr (I kurs)",
        "role": "Klub Üzvü",
        "username": "the.mehdidi@gmail.com",
        "password": "Riyaziyyat5",
        "registeredAt": "2026-11-18",
        "status": "Aktiv",
        "customTasks": [],
        "notes": [],
        "motivation": "Gələcəkdə iş fəaliyyətimdə bioinformatik üzrə işləmək istəyirəm. Bu sahənin dərinliklərini  məhz indidən yiyələnmək isdəyirəm",
        "yearGoal": "1 illik fəaliyyətdən sonra bioinformatika üzrə  artıq yetərincə yaxşı yerlərə gəlmək, bu sahe üzrə təlim və tədbirlərdə rahatlıqla iştirak və işləyə bilmək. Daha sonra isə proqramlaşdırmanın dilini tamamilə başa düşmək isdəyirəm",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=the.mehdidi@gmail.com"
    },
    {
        "id": "mem-1794986793973",
        "fullName": "Nuray Cəlilli (Zaur)",
        "email": "nuraycalilli@gmail.com",
        "phone": "774158585",
        "photo": "",
        "faculty": "(WCU) - Biznes və İqtisadiyyat Məktəbi",
        "major": "Mühasibat",
        "course": "Bakalavr (I kurs)",
        "role": "Klub Üzvü",
        "username": "nuray",
        "password": "Nuray15",
        "registeredAt": "2026-11-18",
        "status": "Aktiv",
        "customTasks": [],
        "notes": [],
        "motivation": "Öyrenmek isteyirem",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nuray"
    },
    {
        "id": "mem-1794992829469",
        "fullName": "Nuray Mirzəyeva (Seymur)",
        "email": "mirzeyevanuray57@gmail.com",
        "phone": "+994514054487",
        "photo": "",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "Bakalavr (I kurs)",
        "role": "Klub Üzvü",
        "username": "nuray.mirzeyeva",
        "password": "19.06.08nurayyy",
        "registeredAt": "2026-11-18",
        "status": "Aktiv",
        "customTasks": [],
        "notes": [],
        "motivation": "Biologiya ixtisası üzrə təhsil aldığım üçün müasir biologiya və texnologiyanın kəsişdiyi bioinformatika sahəsi mənə çox maraqlıdır. Bu kluba qoşulmaqda əsas məqsədim yeni biliklər qazanmaq, proqramlaşdırmanı sıfırdan öyrənmək və biologiya sahəsində kompüter texnologiyalarının tətbiqini mənimsəməkdir. Xüsusilə genomika, molekulyar biologiya və zülalların 3D modelləşdirilməsi istiqamətləri məni cəlb edir. Təlimlərdə, seminarlarda və komanda layihələrində iştirak edərək həm nəzəri biliklərimi, həm də praktiki bacarıqlarımı inkişaf etdirmək istəyirəm.",
        "yearGoal": "Bir il ərzində Python proqramlaşdırmasının əsaslarını öyrənmək, genomika və molekulyar biologiya sahəsində biliklərimi genişləndirmək, bioloji məlumatların kompüter vasitəsilə analizini mənimsəmək istəyirəm. Gələcəkdə süni intellektdən istifadə edərək genetik məlumatların araşdırılması ilə bağlı kiçik bir bioinformatik layihədə iştirak etməyi hədəfləyirəm.",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nuray.mirzeyeva"
    },
    {
        "id": "mem-fs-nurus*",
        "fullName": "Nuray Məmmədzadə (Qədir)",
        "username": "nurus*",
        "email": "nurusmemmedzade@gmail.com",
        "phone": "0104202077",
        "password": "Qarabağ2020",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nurus*",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Fərqli maraq dairəm var.Bu klubu da sınamaq istədim.Mənə nələr qatacağı maraqlııdır.",
        "yearGoal": "Qeyd edilməyib",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-mahmudovas",
        "fullName": "Mahmudova Sahibə (Anar)",
        "username": "mahmudovas",
        "email": "sahibamahmudova666@gmail.com",
        "phone": "0557463675",
        "password": "Sahibe2008_S",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya/az (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=mahmudovas",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Daha çox biologiya haqqında öyrənmək və kompüterlərlə üzərində səlis işləmək",
        "yearGoal": "Artıq hər şeyi öyrənmiş olmaq kompüter vasitəsilə biologiya üzrə işləmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-faganaliyev",
        "fullName": "Fəqan Əliyev (Azər)",
        "username": "faganaliyev",
        "email": "faganaliyevvvv@gmail.com",
        "phone": "+994504832312",
        "password": "NF21122008?!nf",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Kompüter Elmləri (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=faganaliyev",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Salam,CarboxMol Bioinformatika Klubundan olan gözləntilərim olduqca böyükdür.İnanıram ki,Bu klubda  həyatımın bir parçası olan sahədə yeni məlumatlar,biliklər əldə edəcəm.Bununla yanaşı Bioloji konseptləridə öyrənməyə olduqca həvəsliyəm.",
        "yearGoal": "əldə etdiyim bacarəqları şəxsi lahiyələrimə entegre etmək,\nNetwork genişləndirmək,\nMüxtəlif hackathonlarda iştirak etmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-7tlqtsd",
        "fullName": "Rahide Abbasova (Səfail)",
        "username": "7tlqtsd",
        "email": "rahideabbasova21@gmail.com",
        "phone": "0103134808",
        "password": "250526",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Humanitar və Sosial Elmlər Məktəbi - Tarix (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=7tlqtsd",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Proqramlaşdırmanı öyrənmək istəyi",
        "yearGoal": "Kömpüterdən çətinlik çəkmədən istifadə etmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-saeid",
        "fullName": "Səid Cəmi (Vazeh)",
        "username": "saeid",
        "email": "saiddcmi@gmail.com",
        "phone": "+994507799221",
        "password": "csaid132008",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Kompüter Elmləri (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=saeid",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "AI/ML sahəsində biliklərimi real layihələrdə tətbiq etmək istəyirəm.\nBu klubda həm yeni texnologiyalar öyrənəcəyimə, həm də komanda ilə praktiki təcrübə qazanacağıma inanıram.",
        "yearGoal": "1 ilin sonunda ML alqoritmlərindən istifadə edərək bioloji dataları analiz edən kiçik bir layihə hazırlamaq və komanda ilə hakatonlarda iştirak etmək.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-seadetquliyeva",
        "fullName": "Səadət Quliyeva (Yusif)",
        "username": "seadetquliyeva",
        "email": "seadetquliyeva2009@gmail.com",
        "phone": "0702642383",
        "password": "19112009s",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biotexnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=seadetquliyeva",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Mən Biotexnologiya ixtisası üzrə təhsil alıram və gələcəkdə bu sahədə peşəkar mütəxəssis olmaq istəyirəm. CarboxMol Bioinformatika Klubuna qoşulmaqda əsas məqsədim bioinformatika sahəsində biliklərimi genişləndirmək, yeni elmi metodlarla tanış olmaq və praktiki təcrübə qazanmaqdır. Xüsusilə molekulyar biologiya, genetik analiz, protein strukturları və dərmanların modelləşdirilməsi kimi sahələr mənim üçün maraqlıdır.\n\nBundan əlavə, elmi məqalələrin hazırlanması, tədqiqat layihələrində iştirak etmək və seminarlar vasitəsilə biliklərimi inkişaf etdirmək istəyirəm. Düşünürəm ki, bu klub mənə həm fərdi, həm də komanda şəklində işləmək bacarığı qazandıracaq. Eyni zamanda, öyrəndiklərimi gələcək elmi fəaliyyətimdə tətbiq etməyi hədəfləyirəm.",
        "yearGoal": "Bir il ərzində bioinformatikanın əsaslarını öyrənmək, Python və digər bioinformatik analiz alətləri ilə işləmək bacarığı qazanmaq istəyirəm. Əsas hədəflərimdən biri kiçik elmi-tədqiqat layihəsində iştirak etmək və elmi məqalənin hazırlanması prosesində təcrübə qazanmaqdır. Xüsusilə protein strukturlarının analizi və dərman molekullarının modelləşdirilməsi istiqamətində araşdırma aparmaq istəyirəm. Gələcəkdə əldə etdiyim biliklər əsasında müstəqil tədqiqat layihəsi hazırlamağı hədəfləyirəm.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-quliyevathmin",
        "fullName": "Təhminə Quliyeva (Müzəddin)",
        "username": "quliyevathmin",
        "email": "quliyevathmin014@gmail.com",
        "phone": "0993706181",
        "password": "06082009t",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biotexnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=quliyevathmin",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "CarboxMol Bioinformatika Klubuna qoşulmaq istəməyimin əsas səbəbi biologiya və texnologiyanın birləşdiyi bioinformatika sahəsinə böyük maraq göstərməyimdir. Biotexnologiya ixtisası üzrə təhsil aldığım üçün canlı orqanizmlərin molekulyar quruluşunu, genetikanı və bioloji prosesləri daha dərindən öyrənmək istəyirəm.\n\nKlubda bioinformatikanın əsaslarını, DNT və zülal analizini, bioloji məlumatların kompüter vasitəsilə araşdırılmasını və süni intellektin biologiyada tətbiqini öyrənməyi hədəfləyirəm. Eyni zamanda, praktiki biliklər qazanmaq, yeni layihələrdə iştirak etmək, elmi araşdırma bacarıqlarımı inkişaf etdirmək və bu sahədə təcrübəli insanlarla fikir mübadiləsi aparmaq istəyirəm.\n\nMənim üçün bu klub yalnız yeni biliklər əldə etmək deyil, həm də gələcəkdə elmə faydalı ola biləcək layihələrdə iştirak etmək və özümü peşəkar istiqamətdə inkişaf etdirmək üçün bir fürsətdir. Öyrənməyə, araşdırmağa və yeni biliklər əldə etməyə həvəsliyəm.",
        "yearGoal": "1 illik fəaliyyət müddətindən sonra bioinformatika sahəsində ilkin biliklərə və praktiki bacarıqlara yiyələnməyi, bioloji məlumatların analizi və DNT ardıcıllıqlarının araşdırılması üzrə təcrübə qazanmağı hədəfləyirəm. Eyni zamanda, komanda ilə birlikdə kiçik bir elmi layihə həyata keçirmək və əldə etdiyim biliklər əsasında elmi araşdırma hazırlamaq istəyirəm. Gələcəkdə biotexnologiya və bioinformatika sahələrinin kəsişməsində çalışan, elmi yeniliklərə töhfə verən mütəxəssis olmağı qarşıma məqsəd qoymuşam.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-mtagiyevf",
        "fullName": "Musa Məmmədtağıyev (Məhəmməd)",
        "username": "mtagiyevf",
        "email": "m0557885852@gmail.com",
        "phone": "0557885852",
        "password": "musa2008",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Humanitar və Sosial Elmlər Məktəbi - Beynəlxalq münasibətlər (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=mtagiyevf",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Bu sahəni seçməyimin əsas səbəbi biologiya, kimya və rəqəmsal texnologiyaların qovşağında yerləşməsi və elmi araşdırmalara tamamilə yeni bir baxış bucağı gətirməsidir.",
        "yearGoal": "Qeyd edilməyib",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-denizp",
        "fullName": "deniz penahova (eldar)",
        "username": "denizp",
        "email": "panahovadeniz@gmail.com",
        "phone": "556010104",
        "password": "denrikobiko",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=denizp",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "umumi ixtisasim ve bioinformatika ile teze seyler oyrenmey",
        "yearGoal": "muxtelif lahiyelerde qalib gelmey",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-mesume2008",
        "fullName": "Məsumə Dumanlı (Qahir)",
        "username": "mesume2008",
        "email": "msmdumanli17@gmail.com",
        "phone": "+994517755938",
        "password": "Mesume2008",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya ing (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=mesume2008",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "İxtisasıma bağlı olaraq gələcəkdə inkişaf etmək istədiyim sahələri kəşf edə biləcəyimi düşünürəm",
        "yearGoal": "Özümü inkişaf etdirmək və gələcəkdə bu sahədə irəliləmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-lalə",
        "fullName": "Lalə Mərdiyeva (Azad)",
        "username": "lalə",
        "email": "lale.merdiyeva@wcu.edu.az",
        "phone": "0706887224",
        "password": "Laleelxan123",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Dizayn və Memarlıq Məktəbi - Dizayn (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=lalə",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Məni ən çox cəlb edən bu klubun mənim üçün yeni və fərqli bir sahə olmasıdır. Açığı, bioinformatika haqqında geniş məlumatım yoxdur, amma məhz bu sahə ilə tanış olmaq, yeni biliklər əldə etmək mənə maraqlı gəldi. Xüsusilə IT sahəsində biliklərimi artırmaq, yeni şeylər öyrənmək və bu istiqamətdə özümü sınamaq istəyirəm. Həmçinin yeni insanlarla tanış olmaq, komanda ilə işləmək və fərqli təcrübələr qazanmaq da mənim üçün önəmlidir. İnanıram ki, CarboxMol Bioinformatika Klubu mənə həm öyrənmək, həm də özümü inkişaf etdirmək üçün yaxşı imkan yaradacaq.",
        "yearGoal": "1 il ərzində əsas məqsədim bioinformatika və IT sahəsində ilkin biliklər əldə etmək, öyrəndiklərimi praktikada tətbiq etməyi bacarmaqdır. İstərdim ki, bu müddətin sonunda klubda öyrəndiklərim əsasında kiçik də olsa, öz layihəmi hazırlayım. Məsələn, biologiya ilə texnologiyanın əlaqəsini göstərən, məlumatların toplanması və təhlilinə əsaslanan sadə bir layihə üzərində işləmək maraqlı olardı. Eyni zamanda komanda işində təcrübə qazanmaq və klubun fəaliyyətində aktiv iştirak etmək istəyirəm. Mənim üçün əsas məqsəd bir il sonra kluba qoşulduğum ilk günlə müqayisədə daha çox bilik və bacarıq əldə etmiş olmaqdır.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-lenmara",
        "fullName": "Lenmara (Kriyakidi)",
        "username": "lenmara",
        "email": "l3nm1r1@gmail.com",
        "phone": "0503672896",
        "password": "212008",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - IT (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=lenmara",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Salam. Mən Qərbi Kaspi Universitetinin İnformasiya Texnologiyaları ixtisası üzrə 2-ci kurs tələbəsiyəm. Proqramlaşdırma və məlumatların analitikası sahəsində biliklərimi real layihələrdə tətbiq etmək və bioinformatika kimi sürətlə inkişaf edən multidissiplinar bir sahəni dərindən öyrənmək məqsədilə CarboxMol Bioinformatika Klubuna qoşulmaq istəyirəm.",
        "yearGoal": "1 illik fəaliyyətin sonunda əsas hədəfim Python və bioinformatik alətlərdən istifadə edərək açıq bioloji verilənlər bazaları (NCBI, Ensembl və s.) üzərində işləməyi öyrənmək və komanda ilə birlikdə konkret bir data analizi layihəsi hazırlamaqdır. Layihə ideyası olaraq, müxtəlif xəstəliklərə səbəb olan genetik mutasiyaların və ya DNT/RNT ardıcıllıqlarının statistik analizini aparan, nəticələri isə aydın qrafiklər şəklində vizuallaşdıran kiçik bir Python əsaslı analiz skripti və ya veb-alət (dashboard) yaratmaq istəyirəm.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-cingizyusifli",
        "fullName": "Yusifli (Çingiz)",
        "username": "cingizyusifli",
        "email": "cingizyusifli82@gmail.com",
        "phone": "+994104783472",
        "password": "a.0a.0",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - İnformasiya Texnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=cingizyusifli",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Çünki mən inşallah bir layihə üstündə kor insanların görə bilməsi üçün cihaz düzəldirəm bu cihaz üçün riyaziyyat və informatika təməlindən çox biologiya hissəsində öyrənərək problemə real həll yolu tapmaq istəyirəm və Tibb sahəsi üzrə çox böyük marağım var",
        "yearGoal": "Konkret layihə ideası kor insanların görə bilməsi üçün tibbi həll olmamiş xəstəlikləri IT bilikləri ilə birləşdirib aradan qaldırmaq istəyirəm 1 ildən sonra ilk ixtiranın kor insanların görə bilməsi üçün cihaz düzəltmək istəyirəm",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-rayyanhuseynli",
        "fullName": "Rayyan Hüseyinli (İlqar)",
        "username": "rayyanhuseynli",
        "email": "rayyanhuseyinli2@gmail.com",
        "phone": "0514353949",
        "password": "Rayyan2008",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=rayyanhuseynli",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Mən biologiya ixtisası üzrə 2-ci kurs tələbəsiyəm. Öz ixtisasımı sevirəm və bu sahədə daha çox şey öyrənmək, özümü inkişaf etdirmək istəyirəm. Düşünürəm ki, universitetdə yalnız dərslərdə öyrəndiklərimizlə kifayətlənmək düzgün deyil. Yeni təcrübələr qazanmaq, fərqli insanlarla tanış olmaq və öyrəndiklərimizi praktikada sınamaq da çox vacibdir.\n\nİndiyə qədər bir neçə könüllülük fəaliyyətində iştirak etmişəm. Həmçinin tibbi ekspertiza ilə bağlı təlimdə iştirak edərək sertifikat əldə etmişəm. Yeni şeylər öyrənməyi, araşdırma aparmağı və bilmədiyim mövzuları öyrənib anlamağı sevirəm.\n\nBu kluba qoşulmaq istəməyimin əsas səbəbi maraq göstərdiyim sahədə daha çox təcrübə qazanmaq və özümü sınamaqdır. Burada həm yeni biliklər əldə edəcəyimə, həm də komanda ilə işləməyi və fərqli layihələrdə iştirak etməyi öyrənəcəyimə inanıram. Eyni zamanda, mən də öz həvəsim və məsuliyyətimlə klubun fəaliyyətinə töhfə vermək istəyirəm.",
        "yearGoal": "Bir il ərzində özümü daha çox inkişaf etdirmək, yeni biliklər və təcrübələr qazanmaq istəyirəm. Ən böyük istəyim öyrəndiklərimi praktikada tətbiq edə bilmək və maraq göstərdiyim sahələrdə real layihələrdə iştirak etməkdir.\n\nXüsusilə genetika və insan sağlamlığı ilə bağlı mövzular mənə maraqlıdır. Gələcəkdə bu istiqamətdə kiçik bir layihədə iştirak etmək, araşdırma aparmaq və komanda ilə birlikdə yeni bir iş ortaya qoymaq istəyərdim.\n\nMənim üçün bu bir ilin ən böyük nəticəsi sadəcə sertifikat əldə etmək deyil, həqiqətən nələrisə öyrənmək, yeni bacarıqlar qazanmaq və gələcəkdə özümə güvənərək daha böyük işlərə başlaya bilmək olacaq.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-nraay_10",
        "fullName": "Talışinskaya (Nuray)",
        "username": "nraay_10",
        "email": "nuraytalisinskaya@gmail.com",
        "phone": "503388028",
        "password": "20080121nuray",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biotexnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nraay_10",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Maraq dairəmə aid mövzuların olması",
        "yearGoal": "Şəxsi məqalə hazırlıya bilmək, lazım olduqda konfrans verə bilmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-ibrahimovaf1",
        "fullName": "Fatimə İbrahimova (Rahim)",
        "username": "ibrahimovaf1",
        "email": "fatimeibrahimova1144@gmail.com",
        "phone": "0553437974",
        "password": "ibrahimovaf1",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=ibrahimovaf1",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Çünki biologiyanın qollarına böyük həvəsim var və CarboxMol Bioinformatika klubu əminəm ki mənə maraqlarım üzərə irəliləməyimə kömək olacaq",
        "yearGoal": "Şəxsi elmi məqalə hazırlamaq Alphafold ilə dərman modeli qurmaq həmçinin Hakatonda qalib gəlmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-fidanhesenova_2008",
        "fullName": "Fidan Həsənova (Səxavət)",
        "username": "fidanhesenova_2008",
        "email": "fidanhesenovaaa27@gmail.com",
        "phone": "0705052334",
        "password": "Btslijelibon2008!",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=fidanhesenova_2008",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Biologiya ixtisası üzrə təhsil alan bir tələbə olaraq bioinformatika sahəsinə marağım böyükdür. Biologiya və texnologiyanın birləşdiyi bu sahə haqqında daha çox öyrənmək, biliklərimi inkişaf etdirmək və yeni təcrübələr qazanmaq istəyirəm. Carboxmol klubuna qoşulmağı həm özümü inkişaf etdirmək, həm də maraqlı layihələrdə iştirak edərək komandaya töhfə vermək üçün yaxşı fürsət hesab edirəm. Öyrənməyə və yeniliklərə açığam.",
        "yearGoal": "Qeyd edilməyib",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-sh.nurana",
        "fullName": "Nuranə Şabılı (Şahin)",
        "username": "sh.nurana",
        "email": "sabilinurane7@gmail.com",
        "phone": "+994775959738",
        "password": "1234567nurane",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Genetika (Magistratura)",
        "course": "Magistratura",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=sh.nurana",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Bioinformatika üzrə təcrübələrimi genişləndirmək, hazırki iş şəraitimə olmasa da gələcək prioritetlərimə inteqrasiya etmək və PHD təhsilim üçün ölkəxaricinə lazım olacaq sənədlərimi genişləndirmək",
        "yearGoal": "Hakatonlarda və fərqli layihələrdə qalib gəlmək və həmin layihələri keçirmək genişmiqyaslı",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-ahumust",
        "fullName": "Ahu Mustafazadə",
        "username": "ahumust",
        "email": "ahuumust@gmail.com",
        "phone": "+994102120166",
        "password": "PrPc2.ahe34",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Humanitar və Sosial Elmlər Məktəbi - Psixologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=ahumust",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Məktəb vaxtlarından milli və beynəlxalq olimpiadalarda iştirak edən, həmçinin, texnalogiya ilə maraqlanan bir gənc kimi biotexnalogiya, bioinformatika və texnoloji inkişafların biologiya və tibb sahəsinə necə təsir etdiyi məni hər zaman maraqlandırmışdır. Bioinformatika anlayışı nəinki ətrafımda, Azərbaycanda da hələ geniş yayılmayıb və bu isə sahəyə maraq göstərən gənclərin öyrənmə prosesində müəyyən çətinliklərlə üzləşməsinə səbəb olur. prosesində çətinlik çəkməsinə səbəb olur. Məhz buna görə CarboxMol Bioinformatika klubunu ölkəmizdə bu istiqamətin formalaşmağına töhfə verən başlanğıcların biri olacağını düşünürəm. Klubdan əsas gözləntim bioinformatikanın əsas anlayışlarını və metodlarını öyrənmək, eyni məqsədə can atan həmfikir insanlarla birlikdə digər gəclərə də dəstək olmaqdır. Eyni zamanda qarşılıqlı rəy və fikir mübadiləsi aparmaqla bu sahədə inkişaf prosesinin sürətlənəcəyinə və öz təcrübəmi və səylərimi bu icmaya qataraq dəstək olacağıma inanıram.",
        "yearGoal": "Elmi məqalə hazırlamaq, gen xəritələnməsi ilə bağlı layihələr və təşəbbüslərə dəstək omaq, tədqiqat proqramlarında iştirak etmək.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-turangulieva",
        "fullName": "Turan Quliyeva (Haci)",
        "username": "turangulieva",
        "email": "turanquliyeva.in@icloud.com",
        "phone": "+994557146765",
        "password": "Tuti4481",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Genetika (Magistratura)",
        "course": "Magistratura",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=turangulieva",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Dissertasiya isi ucun arasdirma",
        "yearGoal": "Qeyd edilməyib",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-nigar jafar",
        "fullName": "Nigar Cəfərzadə (Ruslan)",
        "username": "nigar jafar",
        "email": "nigarnigar0608@gmail.com",
        "phone": "0507735578",
        "password": "152519",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nigar jafar",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Mən öz yolumu seçmek,hansı sahə üzrə irələləyəcəyimi müəyyənləşdirmək istəyirəm. Həmçinin də bioinformatikaya da çox həvəsim var. Bu sahə üzrə məni digərlərindən fərqləndirən bilgilərə sahib olmaq istəyirəm.",
        "yearGoal": "Fikrimdə hələki hər hansı bir layihə fikri yoxdur. Amma düşünürəm ki,buradakı fəaliyyətimi tamamladıqdan sonra üstün biliklərə sahib olub,o cümlədən marağımı cəlb edən  hər suala cavab tapacağam və bir layihə haqqında düşünəcəm.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-@xədicəsüleymanlı",
        "fullName": "Xədicə Süleymanlı (Rahib)",
        "username": "@xədicəsüleymanlı",
        "email": "xsuleyman359@gmail.com",
        "phone": "0517556992",
        "password": "Xədi2009",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=@xədicəsüleymanlı",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Universitetimizdə mövcud olan başqa bioinformatika klubu yoxdur. Bu bir ilkdir. Ona görə də yüksək səviyyədə olacağına inanıram.",
        "yearGoal": "Bioinformatika sahəsində magistr təhsili almaq",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-javidanhasanov",
        "fullName": "Cavidan Həsənov (Səfər)",
        "username": "javidanhasanov",
        "email": "cavidan56@proton.me",
        "phone": "+994 50 837 69 05",
        "password": "0508376905Ca.",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - İnformasiya Təhlükəsizliyi (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=javidanhasanov",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Öyrəndiyim programlaşdırma biliklərini praktikada istifadə etmək maraqlı gəlir.",
        "yearGoal": "Hakatonda qalib gəlmək",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-nuray_03",
        "fullName": "Nuray Mustafayeva (Cahid)",
        "username": "nuray_03",
        "email": "nuray.mustafayeva@wcu.edu.az",
        "phone": "0103212221",
        "password": "030809",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nuray_03",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Universitetimin  biz tələbələrin inkişafı üçün yaratdığı bu fəaillyətdə kömək etmələri məni cəlb edən səbəb oldu",
        "yearGoal": "Gələcəkdəki peşəmdə mütəxəssis olmaq üçün bu fəaliyyətdən yararlanaraq özümü inkişaf etdirməyə başlamaq ideyamdır. Hədəfim isə Genomika və NGS ardıcıllıq analinizini mənimsəməkdir.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-fuadgadirov",
        "fullName": "Fuad Gadirov (Faiq)",
        "username": "fuadgadirov",
        "email": "qedirovfuad3@gmail.com",
        "phone": "+994503062510",
        "password": "fdgdrv18",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=fuadgadirov",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Çünki hal-hazırda ölkə bu öz ixtisasımla əlaqəli keyfiyyətli fəaliyyətlər tapmaq çox çətindir, bu səbəbdən bu klubu seçmişəm həm öz inkişafım baxlmdan həm də klubun yanaşması baxlmından, təşəkkürlər",
        "yearGoal": "Əsasən daha çox praktiki bacarıqlar əldə etmək, laboratoroiyalarda rahat işləmək, elmi məqalələr yazıb çap etdirmək və s.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-mehrihssnv",
        "fullName": "Həsənova Mehriban (Aftandil)",
        "username": "mehrihssnv",
        "email": "mehrihssnv@mail.ru",
        "phone": "+994513469741",
        "password": "Murad555",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=mehrihssnv",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "İxtisasımla baölı belə bir klubun açıldığına çox sevindim. Yeni biliklər öyrənib, maraqlı insanlarla tanış olub, vaxtını səmərəli keçirəcəyimə əminəm",
        "yearGoal": "Şəxsi elmi məqalə hazırlamaq, biologiya sahəsində biliklərimi çoxaltmaq",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-sekine_eliyeva7",
        "fullName": "Səkinə Əliyeva (Sahib)",
        "username": "sekine_eliyeva7",
        "email": "sekineeliyeva390@gmail.com",
        "phone": "+994553809567",
        "password": "Sekine2007",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=sekine_eliyeva7",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Biologiyaya marağım var, amma müasir bioloji tədqiqatların artıq böyük verilənlər və proqramlaşdırma ilə aparıldığını görürəm. Klubun genomika, Python/R və AlphaFold kimi alətləri praktiki şəkildə öyrətməsi məni ən çox cəlb edir. Dərslərdən kənarda real layihələr üzərində işləmək, alimlərlə seminarlarda iştirak etmək və komanda ilə birlikdə öyrənmək istəyirəm. Gözləntim bioinformatika əsaslarını möhkəm öyrənmək və gələcək elmi karyeramda istifadə edəcəyim bacarıqlar qazanmaqdır.",
        "yearGoal": "1 il ərzində Python və R ilə bioloji verilənləri müstəqil təhlil edə bilmək, Linux/Bash-də rahat işləmək və klubda ən azı bir komanda layihəsini tamamlamaq istəyirəm. Son hədəfim AlphaFold və PyMOL ilə seçdiyim bir zülalın strukturunu modelləşdirib nəticələri kiçik elmi hesabat və ya poster şəklində təqdim etməkdir.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-mirzzadbagdagul",
        "fullName": "Bağdagül Mirzəzadə (Zaur)",
        "username": "mirzzadbagdagul",
        "email": "bagdagul.mirzzad@235bioing",
        "phone": "514431115",
        "password": "B12345678",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "joinDate": "2026-11-17",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=mirzzadbagdagul",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Maraqım var",
        "yearGoal": "Hələki yoxdur",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-nuray_mirzeyeva",
        "fullName": "Nuray Mirzəyeva (Seymur)",
        "username": "nuray_mirzeyeva",
        "email": "nuraymirzeyeva254@gmail.com",
        "phone": "+994514054487",
        "password": "19.06.08nurayy",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "joinDate": "2026-11-18",
        "registeredAt": "2026-11-18",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=nuray_mirzeyeva",
        "photo": "",
        "skills": [
            "Biotexnologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Biologiya ixtisası üzrə təhsil aldığım üçün müasir biologiya və texnologiyanın kəsişdiyi bioinformatika sahəsi mənə çox maraqlıdır. Bu kluba qoşulmaqda əsas məqsədim yeni biliklər qazanmaq, proqramlaşdırmanı sıfırdan öyrənmək və biologiya sahəsində kompüter texnologiyalarının tətbiqini mənimsəməkdir. Xüsusilə genomika, molekulyar biologiya və zülalların 3D modelləşdirilməsi istiqamətləri məni cəlb edir. Təlimlərdə, seminarlarda və komanda layihələrində iştirak edərək həm nəzəri biliklərimi, həm də praktiki bacarıqlarımı inkişaf etdirmək istəyirəm.",
        "yearGoal": "Bir il ərzində Python proqramlaşdırmasının əsaslarını öyrənmək, genomika və molekulyar biologiya sahəsində biliklərimi genişləndirmək, bioloji məlumatların kompüter vasitəsilə analizini mənimsəmək istəyirəm. Gələcəkdə süni intellektdən istifadə edərək genetik məlumatların araşdırılması ilə bağlı kiçik bir bioinformatik layihədə iştirak etməyi hədəfləyirəm.",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "customTasks": [],
        "notes": []
    },
    {
        "id": "mem-fs-napeleon",
        "fullName": "Gunay Rustemova (Zakir)",
        "username": "napeleon",
        "email": "g27837103@gmail.com",
        "phone": "+994501234567",
        "password": "Gunay2008",
        "role": "Klub Üzvü",
        "university": "Qərbi Kaspi Universiteti (Western Caspian University)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "Bakalavr (I kurs)",
        "joinDate": "17.11.2026",
        "registeredAt": "2026-11-17",
        "status": "Aktiv",
        "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=napeleon",
        "photo": "",
        "skills": [
            "Biologiya",
            "Genomika və NGS Analizi"
        ],
        "motivation": "Bioinformatika sahəsində biliklərimi artırmaq və klubun elmi tədqiqatlarında iştirak etmək istəyirəm.",
        "yearGoal": "1 il ərzində bioinformatika alətlərini mənimsəmək və elmi məqalə hazırlamaq.",
        "customTasks": [],
        "notes": []
    }
  ],

  applications: [
{
        "id": "app-1794415625983",
        "memberId": "mem-1794415625983",
        "teacherId": null,
        "isTeacher": false,
        "fullName": "Sarukhanova Ulviyya (Arif)",
        "email": "u1yasarukhova@gmail.com",
        "phone": "+994103279832",
        "photo": "",
        "profileUrl": "https://www.linkedin.com/in/ulyashasarukhova7",
        "university": "Qərbi Kaspi Universiteti (Western Caspian University)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biology",
        "course": "Bakalavr (II kurs)",
        "studyLang": "İngilis bölməsi",
        "gpa": "86/100",
        "username": "u1yashko",
        "password": "u1yashmilashk0",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Python",
            "R / RStudio",
            "Linux / Bash",
            "Git & GitHub",
            "C / C++",
            "SQL"
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
        "osType": "Yalnız universitet laboratoriyası",
        "researchTracks": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Transkriptomika və RNA-Seq",
            "Süni İntellekt və Biotibb ML"
        ],
        "weeklyTime": "Həftədə 4–6 saat",
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "motivation": "Researching and learning new fields and build bright career",
        "yearGoal": "May be even if one research program and experience for adding and strengthening my CV",
        "dateApplied": "2026-11-11",
        "status": "Təsdiqləndi",
        "adminNotes": "Sədr tərəfindən rəsmi təsdiqlənmiş Qərbi Kaspi Universiteti üzvü.",
        "approvedAt": "2026-11-12",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
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
    },
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
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
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "Rəsmi təsdiqlənmiş klub üzvü."
    },
    {
        "id": "app-kenanbiotech",
        "memberId": "mem-kenanbiotech",
        "fullName": "Kənan Heydərov (Fərail)",
        "email": "heyderofknan@gmail.com",
        "phone": "+994519549012",
        "username": "kenanbiotech",
        "password": "Kennan1245",
        "university": "Bakı Dövlət Universiteti (BDU)",
        "faculty": "Bakı Dövlət Universiteti (BDU) - Biologiya Fakültəsi",
        "major": "Biotexnologiya",
        "course": "Bakalavr (II kurs)",
        "studyLang": "İngilis bölməsi | GPA: 82.4",
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
        "motivation": "Ümumiyyətlə bioinformatika sahəsinə geniş marağım var və düşünürəm və inanıram ki CarboxMol Bioinformatika klubunda bunlara cavab tapacam.",
        "yearGoal": "Açığı hələki tam qərar verməmişəm duruma görə dəyişə bilər.",
        "dateApplied": "2026-10-24",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən daxil olmuş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-1794979215352",
        "memberId": "mem-1794979215352",
        "teacherId": null,
        "isTeacher": false,
        "fullName": "Mehdi Fətullalı (Rafiq)",
        "email": "the.mehdidi@gmail.com",
        "phone": "+994773118757",
        "photo": "",
        "profileUrl": "https://www.linkedin.com/in/mehdi-fatullali-9a01b7365?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "Bakalavr (I kurs)",
        "studyLang": "Azərbaycan bölməsi",
        "gpa": "",
        "username": "the.mehdidi@gmail.com",
        "password": "Riyaziyyat5",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Python",
            "R / RStudio"
        ],
        "bioTools": [],
        "bioKnowledge": "Orta səviyyədə anlayışım var (Ümumi universitet biologiyası)",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Transkriptomika və RNA-Seq",
            "Süni İntellekt və Biotibb ML"
        ],
        "weeklyTime": "Həftədə 4–6 saat",
        "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
        "motivation": "Gələcəkdə iş fəaliyyətimdə bioinformatik üzrə işləmək istəyirəm. Bu sahənin dərinliklərini  məhz indidən yiyələnmək isdəyirəm",
        "yearGoal": "1 illik fəaliyyətdən sonra bioinformatika üzrə  artıq yetərincə yaxşı yerlərə gəlmək, bu sahe üzrə təlim və tədbirlərdə rahatlıqla iştirak və işləyə bilmək. Daha sonra isə proqramlaşdırmanın dilini tamamilə başa düşmək isdəyirəm",
        "dateApplied": "2026-11-18",
        "status": "Təsdiqləndi",
        "adminNotes": "",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-1794986793973",
        "memberId": "mem-1794986793973",
        "fullName": "Nuray Cəlilli (Zaur)",
        "email": "nuraycalilli@gmail.com",
        "phone": "774158585",
        "photo": "",
        "profileUrl": "",
        "faculty": "(WCU) - Biznes və İqtisadiyyat Məktəbi",
        "major": "Mühasibat",
        "course": "Bakalavr (I kurs)",
        "studyLang": "Azərbaycan bölməsi",
        "gpa": "93.7",
        "username": "nuray",
        "password": "Nuray15",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [],
        "bioTools": [],
        "bioKnowledge": "İT / Mühəndislik yönümlüyəm (Bioloji konseptləri sıfırdan öyrənmək istəyirəm)",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı"
        ],
        "weeklyTime": "Həftədə 2–4 saat",
        "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
        "motivation": "Öyrenmek isteyirem",
        "yearGoal": "",
        "dateApplied": "2026-11-18",
        "status": "Təsdiqləndi",
        "adminNotes": "",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-1794992829469",
        "memberId": "mem-1794992829469",
        "teacherId": null,
        "isTeacher": false,
        "fullName": "Nuray Mirzəyeva (Seymur)",
        "email": "mirzeyevanuray57@gmail.com",
        "phone": "+994514054487",
        "photo": "",
        "profileUrl": "",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "Bakalavr (I kurs)",
        "studyLang": "Azərbaycan bölməsi",
        "gpa": "",
        "username": "nuray.mirzeyeva",
        "password": "19.06.08nurayyy",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [],
        "bioTools": [],
        "bioKnowledge": "Güclü biologiya bazam var (Genetika, Molekulyar biologiya)",
        "osType": "Yalnız universitet laboratoriyası",
        "researchTracks": [
            "Genomika və NGS Analizi",
            "Struktur Biologiyası və Dərman Dizaynı",
            "Transkriptomika və RNA-Seq",
            "Süni İntellekt və Biotibb ML",
            "Filogenetika və Təkamül Ağacları"
        ],
        "weeklyTime": "Həftədə 2–4 saat",
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "motivation": "Biologiya ixtisası üzrə təhsil aldığım üçün müasir biologiya və texnologiyanın kəsişdiyi bioinformatika sahəsi mənə çox maraqlıdır. Bu kluba qoşulmaqda əsas məqsədim yeni biliklər qazanmaq, proqramlaşdırmanı sıfırdan öyrənmək və biologiya sahəsində kompüter texnologiyalarının tətbiqini mənimsəməkdir. Xüsusilə genomika, molekulyar biologiya və zülalların 3D modelləşdirilməsi istiqamətləri məni cəlb edir. Təlimlərdə, seminarlarda və komanda layihələrində iştirak edərək həm nəzəri biliklərimi, həm də praktiki bacarıqlarımı inkişaf etdirmək istəyirəm.",
        "yearGoal": "Bir il ərzində Python proqramlaşdırmasının əsaslarını öyrənmək, genomika və molekulyar biologiya sahəsində biliklərimi genişləndirmək, bioloji məlumatların kompüter vasitəsilə analizini mənimsəmək istəyirəm. Gələcəkdə süni intellektdən istifadə edərək genetik məlumatların araşdırılması ilə bağlı kiçik bir bioinformatik layihədə iştirak etməyi hədəfləyirəm.",
        "dateApplied": "2026-11-18",
        "status": "Təsdiqləndi",
        "adminNotes": "",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-nurus*",
        "memberId": "mem-fs-nurus*",
        "fullName": "Nuray Məmmədzadə (Qədir)",
        "email": "nurusmemmedzade@gmail.com",
        "phone": "0104202077",
        "username": "nurus*",
        "password": "Qarabağ2020",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Fərqli maraq dairəm var.Bu klubu da sınamaq istədim.Mənə nələr qatacağı maraqlııdır.",
        "yearGoal": "Qeyd edilməyib",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-mahmudovas",
        "memberId": "mem-fs-mahmudovas",
        "fullName": "Mahmudova Sahibə (Anar)",
        "email": "sahibamahmudova666@gmail.com",
        "phone": "0557463675",
        "username": "mahmudovas",
        "password": "Sahibe2008_S",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya/az (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Daha çox biologiya haqqında öyrənmək və kompüterlərlə üzərində səlis işləmək",
        "yearGoal": "Artıq hər şeyi öyrənmiş olmaq kompüter vasitəsilə biologiya üzrə işləmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-faganaliyev",
        "memberId": "mem-fs-faganaliyev",
        "fullName": "Fəqan Əliyev (Azər)",
        "email": "faganaliyevvvv@gmail.com",
        "phone": "+994504832312",
        "username": "faganaliyev",
        "password": "NF21122008?!nf",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Kompüter Elmləri (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "İngilis bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "İrəli (OOP, data analizi, alqoritmlər)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Salam,CarboxMol Bioinformatika Klubundan olan gözləntilərim olduqca böyükdür.İnanıram ki,Bu klubda  həyatımın bir parçası olan sahədə yeni məlumatlar,biliklər əldə edəcəm.Bununla yanaşı Bioloji konseptləridə öyrənməyə olduqca həvəsliyəm.",
        "yearGoal": "əldə etdiyim bacarəqları şəxsi lahiyələrimə entegre etmək,\nNetwork genişləndirmək,\nMüxtəlif hackathonlarda iştirak etmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-7tlqtsd",
        "memberId": "mem-fs-7tlqtsd",
        "fullName": "Rahide Abbasova (Səfail)",
        "email": "rahideabbasova21@gmail.com",
        "phone": "0103134808",
        "username": "7tlqtsd",
        "password": "250526",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Humanitar və Sosial Elmlər Məktəbi - Tarix (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Proqramlaşdırmanı öyrənmək istəyi",
        "yearGoal": "Kömpüterdən çətinlik çəkmədən istifadə etmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-saeid",
        "memberId": "mem-fs-saeid",
        "fullName": "Səid Cəmi (Vazeh)",
        "email": "saiddcmi@gmail.com",
        "phone": "+994507799221",
        "username": "saeid",
        "password": "csaid132008",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Kompüter Elmləri (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Orta (Python/R skriptləri yaza bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "AI/ML sahəsində biliklərimi real layihələrdə tətbiq etmək istəyirəm.\nBu klubda həm yeni texnologiyalar öyrənəcəyimə, həm də komanda ilə praktiki təcrübə qazanacağıma inanıram.",
        "yearGoal": "1 ilin sonunda ML alqoritmlərindən istifadə edərək bioloji dataları analiz edən kiçik bir layihə hazırlamaq və komanda ilə hakatonlarda iştirak etmək.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-seadetquliyeva",
        "memberId": "mem-fs-seadetquliyeva",
        "fullName": "Səadət Quliyeva (Yusif)",
        "email": "seadetquliyeva2009@gmail.com",
        "phone": "0702642383",
        "username": "seadetquliyeva",
        "password": "19112009s",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biotexnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Mən Biotexnologiya ixtisası üzrə təhsil alıram və gələcəkdə bu sahədə peşəkar mütəxəssis olmaq istəyirəm. CarboxMol Bioinformatika Klubuna qoşulmaqda əsas məqsədim bioinformatika sahəsində biliklərimi genişləndirmək, yeni elmi metodlarla tanış olmaq və praktiki təcrübə qazanmaqdır. Xüsusilə molekulyar biologiya, genetik analiz, protein strukturları və dərmanların modelləşdirilməsi kimi sahələr mənim üçün maraqlıdır.\n\nBundan əlavə, elmi məqalələrin hazırlanması, tədqiqat layihələrində iştirak etmək və seminarlar vasitəsilə biliklərimi inkişaf etdirmək istəyirəm. Düşünürəm ki, bu klub mənə həm fərdi, həm də komanda şəklində işləmək bacarığı qazandıracaq. Eyni zamanda, öyrəndiklərimi gələcək elmi fəaliyyətimdə tətbiq etməyi hədəfləyirəm.",
        "yearGoal": "Bir il ərzində bioinformatikanın əsaslarını öyrənmək, Python və digər bioinformatik analiz alətləri ilə işləmək bacarığı qazanmaq istəyirəm. Əsas hədəflərimdən biri kiçik elmi-tədqiqat layihəsində iştirak etmək və elmi məqalənin hazırlanması prosesində təcrübə qazanmaqdır. Xüsusilə protein strukturlarının analizi və dərman molekullarının modelləşdirilməsi istiqamətində araşdırma aparmaq istəyirəm. Gələcəkdə əldə etdiyim biliklər əsasında müstəqil tədqiqat layihəsi hazırlamağı hədəfləyirəm.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-quliyevathmin",
        "memberId": "mem-fs-quliyevathmin",
        "fullName": "Təhminə Quliyeva (Müzəddin)",
        "email": "quliyevathmin014@gmail.com",
        "phone": "0993706181",
        "username": "quliyevathmin",
        "password": "06082009t",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biotexnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "CarboxMol Bioinformatika Klubuna qoşulmaq istəməyimin əsas səbəbi biologiya və texnologiyanın birləşdiyi bioinformatika sahəsinə böyük maraq göstərməyimdir. Biotexnologiya ixtisası üzrə təhsil aldığım üçün canlı orqanizmlərin molekulyar quruluşunu, genetikanı və bioloji prosesləri daha dərindən öyrənmək istəyirəm.\n\nKlubda bioinformatikanın əsaslarını, DNT və zülal analizini, bioloji məlumatların kompüter vasitəsilə araşdırılmasını və süni intellektin biologiyada tətbiqini öyrənməyi hədəfləyirəm. Eyni zamanda, praktiki biliklər qazanmaq, yeni layihələrdə iştirak etmək, elmi araşdırma bacarıqlarımı inkişaf etdirmək və bu sahədə təcrübəli insanlarla fikir mübadiləsi aparmaq istəyirəm.\n\nMənim üçün bu klub yalnız yeni biliklər əldə etmək deyil, həm də gələcəkdə elmə faydalı ola biləcək layihələrdə iştirak etmək və özümü peşəkar istiqamətdə inkişaf etdirmək üçün bir fürsətdir. Öyrənməyə, araşdırmağa və yeni biliklər əldə etməyə həvəsliyəm.",
        "yearGoal": "1 illik fəaliyyət müddətindən sonra bioinformatika sahəsində ilkin biliklərə və praktiki bacarıqlara yiyələnməyi, bioloji məlumatların analizi və DNT ardıcıllıqlarının araşdırılması üzrə təcrübə qazanmağı hədəfləyirəm. Eyni zamanda, komanda ilə birlikdə kiçik bir elmi layihə həyata keçirmək və əldə etdiyim biliklər əsasında elmi araşdırma hazırlamaq istəyirəm. Gələcəkdə biotexnologiya və bioinformatika sahələrinin kəsişməsində çalışan, elmi yeniliklərə töhfə verən mütəxəssis olmağı qarşıma məqsəd qoymuşam.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-mtagiyevf",
        "memberId": "mem-fs-mtagiyevf",
        "fullName": "Musa Məmmədtağıyev (Məhəmməd)",
        "email": "m0557885852@gmail.com",
        "phone": "0557885852",
        "username": "mtagiyevf",
        "password": "musa2008",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Humanitar və Sosial Elmlər Məktəbi - Beynəlxalq münasibətlər (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Bu sahəni seçməyimin əsas səbəbi biologiya, kimya və rəqəmsal texnologiyaların qovşağında yerləşməsi və elmi araşdırmalara tamamilə yeni bir baxış bucağı gətirməsidir.",
        "yearGoal": "Qeyd edilməyib",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-denizp",
        "memberId": "mem-fs-denizp",
        "fullName": "deniz penahova (eldar)",
        "email": "panahovadeniz@gmail.com",
        "phone": "556010104",
        "username": "denizp",
        "password": "denrikobiko",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "İngilis bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "umumi ixtisasim ve bioinformatika ile teze seyler oyrenmey",
        "yearGoal": "muxtelif lahiyelerde qalib gelmey",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-mesume2008",
        "memberId": "mem-fs-mesume2008",
        "fullName": "Məsumə Dumanlı (Qahir)",
        "email": "msmdumanli17@gmail.com",
        "phone": "+994517755938",
        "username": "mesume2008",
        "password": "Mesume2008",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya ing (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "İxtisasıma bağlı olaraq gələcəkdə inkişaf etmək istədiyim sahələri kəşf edə biləcəyimi düşünürəm",
        "yearGoal": "Özümü inkişaf etdirmək və gələcəkdə bu sahədə irəliləmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-lalə",
        "memberId": "mem-fs-lalə",
        "fullName": "Lalə Mərdiyeva (Azad)",
        "email": "lale.merdiyeva@wcu.edu.az",
        "phone": "0706887224",
        "username": "lalə",
        "password": "Laleelxan123",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Dizayn və Memarlıq Məktəbi - Dizayn (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Məni ən çox cəlb edən bu klubun mənim üçün yeni və fərqli bir sahə olmasıdır. Açığı, bioinformatika haqqında geniş məlumatım yoxdur, amma məhz bu sahə ilə tanış olmaq, yeni biliklər əldə etmək mənə maraqlı gəldi. Xüsusilə IT sahəsində biliklərimi artırmaq, yeni şeylər öyrənmək və bu istiqamətdə özümü sınamaq istəyirəm. Həmçinin yeni insanlarla tanış olmaq, komanda ilə işləmək və fərqli təcrübələr qazanmaq da mənim üçün önəmlidir. İnanıram ki, CarboxMol Bioinformatika Klubu mənə həm öyrənmək, həm də özümü inkişaf etdirmək üçün yaxşı imkan yaradacaq.",
        "yearGoal": "1 il ərzində əsas məqsədim bioinformatika və IT sahəsində ilkin biliklər əldə etmək, öyrəndiklərimi praktikada tətbiq etməyi bacarmaqdır. İstərdim ki, bu müddətin sonunda klubda öyrəndiklərim əsasında kiçik də olsa, öz layihəmi hazırlayım. Məsələn, biologiya ilə texnologiyanın əlaqəsini göstərən, məlumatların toplanması və təhlilinə əsaslanan sadə bir layihə üzərində işləmək maraqlı olardı. Eyni zamanda komanda işində təcrübə qazanmaq və klubun fəaliyyətində aktiv iştirak etmək istəyirəm. Mənim üçün əsas məqsəd bir il sonra kluba qoşulduğum ilk günlə müqayisədə daha çox bilik və bacarıq əldə etmiş olmaqdır.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-lenmara",
        "memberId": "mem-fs-lenmara",
        "fullName": "Lenmara (Kriyakidi)",
        "email": "l3nm1r1@gmail.com",
        "phone": "0503672896",
        "username": "lenmara",
        "password": "212008",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - IT (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "İngilis bölməsi | GPA: 76.71",
        "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Salam. Mən Qərbi Kaspi Universitetinin İnformasiya Texnologiyaları ixtisası üzrə 2-ci kurs tələbəsiyəm. Proqramlaşdırma və məlumatların analitikası sahəsində biliklərimi real layihələrdə tətbiq etmək və bioinformatika kimi sürətlə inkişaf edən multidissiplinar bir sahəni dərindən öyrənmək məqsədilə CarboxMol Bioinformatika Klubuna qoşulmaq istəyirəm.",
        "yearGoal": "1 illik fəaliyyətin sonunda əsas hədəfim Python və bioinformatik alətlərdən istifadə edərək açıq bioloji verilənlər bazaları (NCBI, Ensembl və s.) üzərində işləməyi öyrənmək və komanda ilə birlikdə konkret bir data analizi layihəsi hazırlamaqdır. Layihə ideyası olaraq, müxtəlif xəstəliklərə səbəb olan genetik mutasiyaların və ya DNT/RNT ardıcıllıqlarının statistik analizini aparan, nəticələri isə aydın qrafiklər şəklində vizuallaşdıran kiçik bir Python əsaslı analiz skripti və ya veb-alət (dashboard) yaratmaq istəyirəm.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-cingizyusifli",
        "memberId": "mem-fs-cingizyusifli",
        "fullName": "Yusifli (Çingiz)",
        "email": "cingizyusifli82@gmail.com",
        "phone": "+994104783472",
        "username": "cingizyusifli",
        "password": "a.0a.0",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - İnformasiya Texnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "İngilis bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Çünki mən inşallah bir layihə üstündə kor insanların görə bilməsi üçün cihaz düzəldirəm bu cihaz üçün riyaziyyat və informatika təməlindən çox biologiya hissəsində öyrənərək problemə real həll yolu tapmaq istəyirəm və Tibb sahəsi üzrə çox böyük marağım var",
        "yearGoal": "Konkret layihə ideası kor insanların görə bilməsi üçün tibbi həll olmamiş xəstəlikləri IT bilikləri ilə birləşdirib aradan qaldırmaq istəyirəm 1 ildən sonra ilk ixtiranın kor insanların görə bilməsi üçün cihaz düzəltmək istəyirəm",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-rayyanhuseynli",
        "memberId": "mem-fs-rayyanhuseynli",
        "fullName": "Rayyan Hüseyinli (İlqar)",
        "email": "rayyanhuseyinli2@gmail.com",
        "phone": "0514353949",
        "username": "rayyanhuseynli",
        "password": "Rayyan2008",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "İngilis bölməsi | GPA: 79",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Mən biologiya ixtisası üzrə 2-ci kurs tələbəsiyəm. Öz ixtisasımı sevirəm və bu sahədə daha çox şey öyrənmək, özümü inkişaf etdirmək istəyirəm. Düşünürəm ki, universitetdə yalnız dərslərdə öyrəndiklərimizlə kifayətlənmək düzgün deyil. Yeni təcrübələr qazanmaq, fərqli insanlarla tanış olmaq və öyrəndiklərimizi praktikada sınamaq da çox vacibdir.\n\nİndiyə qədər bir neçə könüllülük fəaliyyətində iştirak etmişəm. Həmçinin tibbi ekspertiza ilə bağlı təlimdə iştirak edərək sertifikat əldə etmişəm. Yeni şeylər öyrənməyi, araşdırma aparmağı və bilmədiyim mövzuları öyrənib anlamağı sevirəm.\n\nBu kluba qoşulmaq istəməyimin əsas səbəbi maraq göstərdiyim sahədə daha çox təcrübə qazanmaq və özümü sınamaqdır. Burada həm yeni biliklər əldə edəcəyimə, həm də komanda ilə işləməyi və fərqli layihələrdə iştirak etməyi öyrənəcəyimə inanıram. Eyni zamanda, mən də öz həvəsim və məsuliyyətimlə klubun fəaliyyətinə töhfə vermək istəyirəm.",
        "yearGoal": "Bir il ərzində özümü daha çox inkişaf etdirmək, yeni biliklər və təcrübələr qazanmaq istəyirəm. Ən böyük istəyim öyrəndiklərimi praktikada tətbiq edə bilmək və maraq göstərdiyim sahələrdə real layihələrdə iştirak etməkdir.\n\nXüsusilə genetika və insan sağlamlığı ilə bağlı mövzular mənə maraqlıdır. Gələcəkdə bu istiqamətdə kiçik bir layihədə iştirak etmək, araşdırma aparmaq və komanda ilə birlikdə yeni bir iş ortaya qoymaq istəyərdim.\n\nMənim üçün bu bir ilin ən böyük nəticəsi sadəcə sertifikat əldə etmək deyil, həqiqətən nələrisə öyrənmək, yeni bacarıqlar qazanmaq və gələcəkdə özümə güvənərək daha böyük işlərə başlaya bilmək olacaq.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-nraay_10",
        "memberId": "mem-fs-nraay_10",
        "fullName": "Talışinskaya (Nuray)",
        "email": "nuraytalisinskaya@gmail.com",
        "phone": "503388028",
        "username": "nraay_10",
        "password": "20080121nuray",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biotexnologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: 21.5",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Maraq dairəmə aid mövzuların olması",
        "yearGoal": "Şəxsi məqalə hazırlıya bilmək, lazım olduqda konfrans verə bilmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-ibrahimovaf1",
        "memberId": "mem-fs-ibrahimovaf1",
        "fullName": "Fatimə İbrahimova (Rahim)",
        "email": "fatimeibrahimova1144@gmail.com",
        "phone": "0553437974",
        "username": "ibrahimovaf1",
        "password": "ibrahimovaf1",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "İngilis bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Çünki biologiyanın qollarına böyük həvəsim var və CarboxMol Bioinformatika klubu əminəm ki mənə maraqlarım üzərə irəliləməyimə kömək olacaq",
        "yearGoal": "Şəxsi elmi məqalə hazırlamaq Alphafold ilə dərman modeli qurmaq həmçinin Hakatonda qalib gəlmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-fidanhesenova_2008",
        "memberId": "mem-fs-fidanhesenova_2008",
        "fullName": "Fidan Həsənova (Səxavət)",
        "email": "fidanhesenovaaa27@gmail.com",
        "phone": "0705052334",
        "username": "fidanhesenova_2008",
        "password": "Btslijelibon2008!",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "İngilis bölməsi | GPA: 87.2",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Biologiya ixtisası üzrə təhsil alan bir tələbə olaraq bioinformatika sahəsinə marağım böyükdür. Biologiya və texnologiyanın birləşdiyi bu sahə haqqında daha çox öyrənmək, biliklərimi inkişaf etdirmək və yeni təcrübələr qazanmaq istəyirəm. Carboxmol klubuna qoşulmağı həm özümü inkişaf etdirmək, həm də maraqlı layihələrdə iştirak edərək komandaya töhfə vermək üçün yaxşı fürsət hesab edirəm. Öyrənməyə və yeniliklərə açığam.",
        "yearGoal": "Qeyd edilməyib",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-sh.nurana",
        "memberId": "mem-fs-sh.nurana",
        "fullName": "Nuranə Şabılı (Şahin)",
        "email": "sabilinurane7@gmail.com",
        "phone": "+994775959738",
        "username": "sh.nurana",
        "password": "1234567nurane",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Genetika (Magistratura)",
        "course": "Magistratura",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Bioinformatika üzrə təcrübələrimi genişləndirmək, hazırki iş şəraitimə olmasa da gələcək prioritetlərimə inteqrasiya etmək və PHD təhsilim üçün ölkəxaricinə lazım olacaq sənədlərimi genişləndirmək",
        "yearGoal": "Hakatonlarda və fərqli layihələrdə qalib gəlmək və həmin layihələri keçirmək genişmiqyaslı",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-ahumust",
        "memberId": "mem-fs-ahumust",
        "fullName": "Ahu Mustafazadə",
        "email": "ahuumust@gmail.com",
        "phone": "+994102120166",
        "username": "ahumust",
        "password": "PrPc2.ahe34",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Humanitar və Sosial Elmlər Məktəbi - Psixologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "İngilis bölməsi | GPA: 97.56",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Tədqiqatçı / Layihə və Hakaton Komandası Üzvü",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Məktəb vaxtlarından milli və beynəlxalq olimpiadalarda iştirak edən, həmçinin, texnalogiya ilə maraqlanan bir gənc kimi biotexnalogiya, bioinformatika və texnoloji inkişafların biologiya və tibb sahəsinə necə təsir etdiyi məni hər zaman maraqlandırmışdır. Bioinformatika anlayışı nəinki ətrafımda, Azərbaycanda da hələ geniş yayılmayıb və bu isə sahəyə maraq göstərən gənclərin öyrənmə prosesində müəyyən çətinliklərlə üzləşməsinə səbəb olur. prosesində çətinlik çəkməsinə səbəb olur. Məhz buna görə CarboxMol Bioinformatika klubunu ölkəmizdə bu istiqamətin formalaşmağına töhfə verən başlanğıcların biri olacağını düşünürəm. Klubdan əsas gözləntim bioinformatikanın əsas anlayışlarını və metodlarını öyrənmək, eyni məqsədə can atan həmfikir insanlarla birlikdə digər gəclərə də dəstək olmaqdır. Eyni zamanda qarşılıqlı rəy və fikir mübadiləsi aparmaqla bu sahədə inkişaf prosesinin sürətlənəcəyinə və öz təcrübəmi və səylərimi bu icmaya qataraq dəstək olacağıma inanıram.",
        "yearGoal": "Elmi məqalə hazırlamaq, gen xəritələnməsi ilə bağlı layihələr və təşəbbüslərə dəstək omaq, tədqiqat proqramlarında iştirak etmək.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-turangulieva",
        "memberId": "mem-fs-turangulieva",
        "fullName": "Turan Quliyeva (Haci)",
        "email": "turanquliyeva.in@icloud.com",
        "phone": "+994557146765",
        "username": "turangulieva",
        "password": "Tuti4481",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Genetika (Magistratura)",
        "course": "Magistratura",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Dissertasiya isi ucun arasdirma",
        "yearGoal": "Qeyd edilməyib",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-nigar jafar",
        "memberId": "mem-fs-nigar jafar",
        "fullName": "Nigar Cəfərzadə (Ruslan)",
        "email": "nigarnigar0608@gmail.com",
        "phone": "0507735578",
        "username": "nigar jafar",
        "password": "152519",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: 82",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Mən öz yolumu seçmek,hansı sahə üzrə irələləyəcəyimi müəyyənləşdirmək istəyirəm. Həmçinin də bioinformatikaya da çox həvəsim var. Bu sahə üzrə məni digərlərindən fərqləndirən bilgilərə sahib olmaq istəyirəm.",
        "yearGoal": "Fikrimdə hələki hər hansı bir layihə fikri yoxdur. Amma düşünürəm ki,buradakı fəaliyyətimi tamamladıqdan sonra üstün biliklərə sahib olub,o cümlədən marağımı cəlb edən  hər suala cavab tapacağam və bir layihə haqqında düşünəcəm.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-@xədicəsüleymanlı",
        "memberId": "mem-fs-@xədicəsüleymanlı",
        "fullName": "Xədicə Süleymanlı (Rahib)",
        "email": "xsuleyman359@gmail.com",
        "phone": "0517556992",
        "username": "@xədicəsüleymanlı",
        "password": "Xədi2009",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Bilmirəm",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Universitetimizdə mövcud olan başqa bioinformatika klubu yoxdur. Bu bir ilkdir. Ona görə də yüksək səviyyədə olacağına inanıram.",
        "yearGoal": "Bioinformatika sahəsində magistr təhsili almaq",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-javidanhasanov",
        "memberId": "mem-fs-javidanhasanov",
        "fullName": "Cavidan Həsənov (Səfər)",
        "email": "cavidan56@proton.me",
        "phone": "+994 50 837 69 05",
        "username": "javidanhasanov",
        "password": "0508376905Ca.",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - İnformasiya Təhlükəsizliyi (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Öyrəndiyim programlaşdırma biliklərini praktikada istifadə etmək maraqlı gəlir.",
        "yearGoal": "Hakatonda qalib gəlmək",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-nuray_03",
        "memberId": "mem-fs-nuray_03",
        "fullName": "Nuray Mustafayeva (Cahid)",
        "email": "nuray.mustafayeva@wcu.edu.az",
        "phone": "0103212221",
        "username": "nuray_03",
        "password": "030809",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Universitetimin  biz tələbələrin inkişafı üçün yaratdığı bu fəaillyətdə kömək etmələri məni cəlb edən səbəb oldu",
        "yearGoal": "Gələcəkdəki peşəmdə mütəxəssis olmaq üçün bu fəaliyyətdən yararlanaraq özümü inkişaf etdirməyə başlamaq ideyamdır. Hədəfim isə Genomika və NGS ardıcıllıq analinizini mənimsəməkdir.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-fuadgadirov",
        "memberId": "mem-fs-fuadgadirov",
        "fullName": "Fuad Gadirov (Faiq)",
        "email": "qedirovfuad3@gmail.com",
        "phone": "+994503062510",
        "username": "fuadgadirov",
        "password": "fdgdrv18",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Çünki hal-hazırda ölkə bu öz ixtisasımla əlaqəli keyfiyyətli fəaliyyətlər tapmaq çox çətindir, bu səbəbdən bu klubu seçmişəm həm öz inkişafım baxlmdan həm də klubun yanaşması baxlmından, təşəkkürlər",
        "yearGoal": "Əsasən daha çox praktiki bacarıqlar əldə etmək, laboratoroiyalarda rahat işləmək, elmi məqalələr yazıb çap etdirmək və s.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-mehrihssnv",
        "memberId": "mem-fs-mehrihssnv",
        "fullName": "Həsənova Mehriban (Aftandil)",
        "email": "mehrihssnv@mail.ru",
        "phone": "+994513469741",
        "username": "mehrihssnv",
        "password": "Murad555",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: 84",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "İxtisasımla baölı belə bir klubun açıldığına çox sevindim. Yeni biliklər öyrənib, maraqlı insanlarla tanış olub, vaxtını səmərəli keçirəcəyimə əminəm",
        "yearGoal": "Şəxsi elmi məqalə hazırlamaq, biologiya sahəsində biliklərimi çoxaltmaq",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-sekine_eliyeva7",
        "memberId": "mem-fs-sekine_eliyeva7",
        "fullName": "Səkinə Əliyeva (Sahib)",
        "email": "sekineeliyeva390@gmail.com",
        "phone": "+994553809567",
        "username": "sekine_eliyeva7",
        "password": "Sekine2007",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Biologiyaya marağım var, amma müasir bioloji tədqiqatların artıq böyük verilənlər və proqramlaşdırma ilə aparıldığını görürəm. Klubun genomika, Python/R və AlphaFold kimi alətləri praktiki şəkildə öyrətməsi məni ən çox cəlb edir. Dərslərdən kənarda real layihələr üzərində işləmək, alimlərlə seminarlarda iştirak etmək və komanda ilə birlikdə öyrənmək istəyirəm. Gözləntim bioinformatika əsaslarını möhkəm öyrənmək və gələcək elmi karyeramda istifadə edəcəyim bacarıqlar qazanmaqdır.",
        "yearGoal": "1 il ərzində Python və R ilə bioloji verilənləri müstəqil təhlil edə bilmək, Linux/Bash-də rahat işləmək və klubda ən azı bir komanda layihəsini tamamlamaq istəyirəm. Son hədəfim AlphaFold və PyMOL ilə seçdiyim bir zülalın strukturunu modelləşdirib nəticələri kiçik elmi hesabat və ya poster şəklində təqdim etməkdir.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-mirzzadbagdagul",
        "memberId": "mem-fs-mirzzadbagdagul",
        "fullName": "Bağdagül Mirzəzadə (Zaur)",
        "email": "bagdagul.mirzzad@235bioing",
        "phone": "514431115",
        "username": "mirzzadbagdagul",
        "password": "B12345678",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (II kurs))",
        "course": "Bakalavr (II kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: 77/100",
        "programmingSkill": "Başlanğıc (Təməl sintaksisi bilirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Maraqım var",
        "yearGoal": "Hələki yoxdur",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-nuray_mirzeyeva",
        "memberId": "mem-fs-nuray_mirzeyeva",
        "fullName": "Nuray Mirzəyeva (Seymur)",
        "email": "nuraymirzeyeva254@gmail.com",
        "phone": "+994514054487",
        "username": "nuray_mirzeyeva",
        "password": "19.06.08nurayy",
        "university": "Qərbi Kaspi Universiteti (WCU)",
        "faculty": "(WCU)",
        "major": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi - Biologiya (Bakalavr (I kurs))",
        "course": "Bakalavr (I kurs",
        "studyLang": "Azərbaycan bölməsi | GPA: Qeyd edilməyib",
        "programmingSkill": "Heç biri (Sıfırdan öyrənmək istəyirəm)",
        "tools": [
            "Heç biri"
        ],
        "bioTools": [
            "Heç biri"
        ],
        "bioKnowledge": "Orta səviyyə",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "weeklyTime": "Həftədə 2–4 saat",
        "motivation": "Biologiya ixtisası üzrə təhsil aldığım üçün müasir biologiya və texnologiyanın kəsişdiyi bioinformatika sahəsi mənə çox maraqlıdır. Bu kluba qoşulmaqda əsas məqsədim yeni biliklər qazanmaq, proqramlaşdırmanı sıfırdan öyrənmək və biologiya sahəsində kompüter texnologiyalarının tətbiqini mənimsəməkdir. Xüsusilə genomika, molekulyar biologiya və zülalların 3D modelləşdirilməsi istiqamətləri məni cəlb edir. Təlimlərdə, seminarlarda və komanda layihələrində iştirak edərək həm nəzəri biliklərimi, həm də praktiki bacarıqlarımı inkişaf etdirmək istəyirəm.",
        "yearGoal": "Bir il ərzində Python proqramlaşdırmasının əsaslarını öyrənmək, genomika və molekulyar biologiya sahəsində biliklərimi genişləndirmək, bioloji məlumatların kompüter vasitəsilə analizini mənimsəmək istəyirəm. Gələcəkdə süni intellektdən istifadə edərək genetik məlumatların araşdırılması ilə bağlı kiçik bir bioinformatik layihədə iştirak etməyi hədəfləyirəm.",
        "dateApplied": "2026-11-18",
        "status": "Təsdiqləndi",
        "photo": "",
        "adminNotes": "FormSubmit bulud arxivindən avtomatik çəkilmiş rəsmi müraciət.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
        "id": "app-fs-napeleon",
        "memberId": "mem-fs-napeleon",
        "teacherId": null,
        "isTeacher": false,
        "fullName": "Gunay Rustemova (Zakir)",
        "email": "g27837103@gmail.com",
        "phone": "+994501234567",
        "photo": "",
        "university": "Qərbi Kaspi Universiteti (Western Caspian University)",
        "faculty": "(WCU) - Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
        "major": "Biologiya",
        "course": "Bakalavr (I kurs)",
        "studyLang": "Azərbaycan bölməsi",
        "gpa": "",
        "username": "napeleon",
        "password": "Gunay2008",
        "programmingSkill": "Başlanğıc səviyyə",
        "tools": [
            "Python"
        ],
        "bioTools": [
            "NCBI / BLAST"
        ],
        "bioKnowledge": "Orta biologiya bazam var",
        "osType": "Windows",
        "researchTracks": [
            "Genomika və NGS Analizi"
        ],
        "weeklyTime": "Həftədə 4–6 saat",
        "roleInterest": "Aktiv Tələbə / Təlim və Seminar İştirakçısı",
        "motivation": "Bioinformatika sahəsində biliklərimi artırmaq və klubun elmi tədqiqatlarında iştirak etmək istəyirəm.",
        "yearGoal": "1 il ərzində bioinformatika alətlərini mənimsəmək və elmi məqalə hazırlamaq.",
        "dateApplied": "2026-11-17",
        "status": "Təsdiqləndi",
        "adminNotes": "Sədr tərəfindən rəsmi təsdiqlənmiş Qərbi Kaspi Universiteti üzvü.",
        "approvedAt": "2026-11-18",
        "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    }
  ],

  memberNotes: [],

  teachers: [
    {
      "id": "teacher-sefanya",
      "fullName": "Sefanya Hacızadə",
      "title": "Akademik Mentor & Tədqiqatçı",
      "academicDegree": "Mentor",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "department": "Təbiət Elmləri Kafedrası",
      "email": "sefanyahajizadeh@gmail.com",
      "phone": "+994 99 350 69 07",
      "username": "sefanyamuellim",
      "password": "Sefanya993506907",
      "photo": "",
      "specialties": [
        "Bioinformatika",
        "Genomika",
        "DNT Analizi",
        "Python"
      ],
      "orcid": "",
      "googleScholar": "",
      "bio": "Bioinformatika və molekulyar biologiya sahəsində tələbələrə elmi rəhbərlik və laboratoriya mentorluğu göstərir.",
      "status": "Aktiv",
      "registeredAt": "2026-10-10",
      "approvedAt": "2026-10-10",
      "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
      "id": "teacher-fidan-m",
      "fullName": "Fidan Məhərrəmova (MRes)",
      "title": "Akademik Müəllim & Mentor (Imperial College London məzunu)",
      "academicDegree": "MRes Bioinformatika & BSc Biokimya (ICL)",
      "university": "Imperial College London (ICL)",
      "faculty": "Department of Life Sciences",
      "department": "Bioinformatics and Theoretical Systems Biology",
      "email": "fidan.maharramova1@gmail.com",
      "phone": "+447394415024",
      "username": "fidan_m",
      "password": "Imperial123:)",
      "photo": "",
      "specialties": [
        "Bioinformatics and Theoretical Systems Biology",
        "Biokimya",
        "Genomika və NGS Analizi",
        "Python & R"
      ],
      "orcid": "",
      "googleScholar": "",
      "bio": "Imperial College London (ICL) Bakalavr (BSc Biokimya) və Magistratura (MRes Bioinformatics and Theoretical Systems Biology) məzunu; bioinformatika üzrə tədqiqatçı və CarboxMol Bioinformatika Klubunun akademik müəllimi və mentoru.",
      "status": "Aktiv",
      "registeredAt": "2026-10-27",
      "approvedAt": "2026-10-27",
      "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
      "id": "teacher-susan",
      "fullName": "Süsən Həsənova",
      "title": "Müəllim / Akademik Mentor",
      "academicDegree": "Müəllim",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Biotexnologiya Fakültəsi",
      "department": "Biotexnologiya Kafedrası",
      "email": "hasanovaa.ssssss@gmail.com",
      "phone": "+994 50 761 40 64",
      "username": "hasanovasusan",
      "password": "Susan2005",
      "photo": "https://api.dicebear.com/7.x/identicon/svg?seed=hasanovasusan",
      "specialties": [
        "Biotexnologiya",
        "Genomika",
        "Molekulyar Biologiya"
      ],
      "orcid": "",
      "googleScholar": "",
      "bio": "Bakı Dövlət Universiteti (BDU) məzunu, BDU Biotexnologiya Kafedrasının müəllimi və CarboxMol Bioinformatika Klubunun akademik müəllimi və mentoru.",
      "status": "Aktiv",
      "registeredAt": "2026-11-03",
      "approvedAt": "2026-11-03",
      "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    },
    {
      "id": "teacher-leyla-25",
      "fullName": "Leyla Budaqova",
      "title": "Müəllim (WCU) & Doktorant (ETN Molekulyar Biologiya İnstitutu)",
      "academicDegree": "Doktorant / Müəllim",
      "university": "Qərbi Kaspi Universiteti (WCU) & ETN Molekulyar Biologiya İnstitutu",
      "faculty": "Təbiət Elmləri Kafedrası / ETN Molekulyar Biologiya İnstitutu",
      "department": "Molekulyar Biologiya",
      "email": "leylabudaqova073@gmail.com",
      "phone": "+994 50 576 10 87",
      "username": "leyla_25",
      "password": "250921",
      "photo": "https://api.dicebear.com/7.x/bottts/svg?seed=leyla_25",
      "specialties": [
        "Molekulyar Biologiya",
        "Genomika",
        "Doktorantura Tədqiqatları",
        "Struktur Biologiyası"
      ],
      "orcid": "",
      "googleScholar": "",
      "bio": "Bakı Dövlət Universiteti məzunu, Qərbi Kaspi Universitetinin (WCU) Təbiət Elmləri Kafedrasının müəllimi, ETN Molekulyar Biologiya İnstitutunun Molekulyar Biologiya üzrə doktorant-tədqiqatçısı və CarboxMol Bioinformatika Klubunun akademik müəllimi və mentoru.",
      "status": "Aktiv",
      "registeredAt": "2026-11-03",
      "approvedAt": "2026-11-03",
      "approvedBy": "Süleyman Hacızadə (Klub Sədri)"
    }
  ],

  teacherApplications: [
    {
      "id": "teach-app-sefanya",
      "teacherId": "teacher-sefanya",
      "fullName": "Sefanya Hacızadə",
      "title": "Akademik Mentor & Tədqiqatçı",
      "academicDegree": "Mentor",
      "university": "Qərbi Kaspi Universiteti (WCU)",
      "faculty": "Yüksək Texnologiyalar və Təbiət Elmləri Məktəbi",
      "department": "Təbiət Elmləri Kafedrası",
      "email": "sefanyahajizadeh@gmail.com",
      "phone": "+994 99 350 69 07",
      "username": "sefanyamuellim",
      "password": "Sefanya993506907",
      "specialties": [
        "Bioinformatika",
        "Genomika",
        "DNT Analizi",
        "Python"
      ],
      "orcid": "",
      "bio": "Bioinformatika və molekulyar biologiya sahəsində tələbələrə elmi rəhbərlik və laboratoriya mentorluğu göstərir.",
      "status": "Təsdiqləndi",
      "dateApplied": "2026-10-10",
      "adminNotes": "Sədr tərəfindən rəsmi akademik mentor olaraq təsdiqlənmişdir."
    },
    {
      "id": "teach-app-fidan-m",
      "teacherId": "teacher-fidan-m",
      "fullName": "Fidan Məhərrəmova",
      "title": "Akademik Mentor & Tədqiqatçı",
      "academicDegree": "MSc Bioinformatika",
      "university": "Digər Elmi-Tədqiqat İnstitutu və ya Mərkəzi",
      "faculty": "Bioinformatika Fakültəsi",
      "department": "Bioinformatika və Hesablama Biologiyası",
      "email": "fidan.maharramova1@gmail.com",
      "phone": "+447394415024",
      "username": "fidan_m",
      "password": "Imperial123:)",
      "specialties": [
        "Bioinformatika",
        "Genomika və NGS Analizi",
        "Struktur Biologiyası",
        "Python & R"
      ],
      "orcid": "",
      "bio": "Bioinformatika (Magistratura) üzrə tədqiqatçı və CarboxMol klubunun akademik mentoru.",
      "status": "Təsdiqləndi",
      "dateApplied": "2026-10-27",
      "adminNotes": "Sədr tərəfindən rəsmi akademik mentor olaraq təsdiqlənmişdir."
    },
    {
      "id": "teach-app-susan",
      "teacherId": "teacher-susan",
      "fullName": "Süsən Həsənova (Müəllim)",
      "title": "Müəllim / Akademik Mentor",
      "academicDegree": "Müəllim",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Biotexnologiya Fakültəsi",
      "department": "Biotexnologiya",
      "email": "hasanovaa.ssssss@gmail.com",
      "phone": "+994 50 761 40 64",
      "username": "hasanovasusan",
      "password": "Susan2005",
      "specialties": [
        "Biotexnologiya",
        "Genomics"
      ],
      "orcid": "",
      "bio": "Bakı Dövlət Universiteti (BDU) Biotexnologiya kafedrası üzrə müəllim və CarboxMol klubunun akademik mentoru.",
      "status": "Təsdiqləndi",
      "dateApplied": "2026-11-03",
      "adminNotes": "Sədr tərəfindən rəsmi akademik mentor olaraq təsdiqlənmişdir."
    },
    {
      "id": "teach-app-leyla-25",
      "teacherId": "teacher-leyla-25",
      "fullName": "Leyla Budaqova (Doktorant)",
      "title": "Doktorant & Akademik Mentor",
      "academicDegree": "Doktorant",
      "university": "Bakı Dövlət Universiteti (BDU)",
      "faculty": "Biologiya Fakültəsi / ETN Molekulyar Biologiya İnstitutu",
      "department": "Molekulyar Biologiya",
      "email": "leylabudaqova073@gmail.com",
      "phone": "+994 50 576 10 87",
      "username": "leyla_25",
      "password": "250921",
      "specialties": [
        "Molekulyar Biologiya",
        "Genomika",
        "Doktorantura Tədqiqatları"
      ],
      "orcid": "",
      "bio": "Bakı Dövlət Universiteti və MBİ-də Molekulyar Biologiya üzrə doktorantura tədqiqatçısı və CarboxMol klubunun akademik mentoru.",
      "status": "Təsdiqləndi",
      "dateApplied": "2026-11-03",
      "adminNotes": "Sədr tərəfindən rəsmi akademik mentor olaraq təsdiqlənmişdir."
    }
  ],

  teacherAnnouncements: [
    {
      "id": "teach-ann-1",
      "teacherId": "teacher-sefanya",
      "teacherName": "Sefanya Hacızadə",
      "teacherTitle": "Akademik Mentor & Tədqiqatçı",
      "title": "Struktur Bioinformatikası: PyMOL və AlphaFold Praktikası",
      "category": "Akademik Tövsiyə",
      "content": "Əziz klub tələbələri, bu həftəki laboratoriya dərsimizdə zülalların 3D bükülməsi, PDB fayllarının analizi və AlphaFold 3 modelləri ilə işləyəcəyik. Kompüterlərinizdə PyMOL və ChimeraX proqramlarının quraşdırıldığından əmin olun.",
      "resourceLink": "https://www.rcsb.org",
      "resourceLabel": "RCSB PDB Bazası",
      "meetingInfo": "Otaq #304 & Zoom Linki",
      "createdAt": "2026-10-18",
      "badge": "Mühüm"
    }
  ]
};

const CURRENT_DATA_VERSION = "2026.11.22.v67_techbrains_2026_completed";

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
  const legacyPrototypeIds = [
    "app-dummy-proto-00", 
    "mem-dummy-proto-00", 
    "teacher-1", 
    "teach-app-1", 
    "rashad_ismayilov"
  ];
  // Fidan Məhərrəmova yalnız Akademik Mentor / Müəllimdir - tələbə üzvlüyü və müraciətindən tam çıxarılır
  if (Array.isArray(data.applications)) {
    data.applications = data.applications.filter(app => app && !legacyPrototypeIds.includes(app.id) && app.id !== "app-fidan" && app.memberId !== "mem-fidan" && (app.username || "").toLowerCase() !== "fidan");
  }
  if (Array.isArray(data.members)) {
    data.members = data.members.filter(mem => mem && !legacyPrototypeIds.includes(mem.id) && mem.id !== "mem-fidan" && (mem.username || "").toLowerCase() !== "fidan");
  }
  // Bütün köhnə və ya mock tapşırıqlar təmizlənir - laboratoriya tapşırıqları yalnız müəllim və ya sədr tərəfindən manual təyin edilir
  const mockTaskIds = ["task-101", "task-102", "task-103", "task-wcu-01", "task-wcu-02", "task-wcu-03"];
  if (Array.isArray(data.tasks)) {
    data.tasks = data.tasks.filter(t => t && !mockTaskIds.includes(t.id));
    data.tasks.forEach(t => {
      if (Array.isArray(t.submissions)) {
        t.submissions = t.submissions.filter(s => s && s.id !== "sub-wcu-01-u1yashko" && s.id !== "sub-wcu-02-fatima" && !String(s.id).startsWith("sub-wcu-"));
      }
    });
  }
  // Tələbə üzvlərinin (Fatimə Piriyeva, Xaqan Əliyev, Nicat Nuhov və s.) səhvən müəllim bazasına düşməsini təmizlə:
  const studentUserSet = new Set([
    "fatimapirieva", "fatimapiriyeva", "xaqan", "nuhov", "anar_aliyev", "gunay", "elmir_m", "kenan_bio", "fatimirzz", "nuray", "nigar"
  ]);
  const studentEmailSet = new Set([
    "fatimapirieva700@gmail.com", "fatima.babayeva2026@khazar.org", "xaqan.aliyev@wcu.edu.az", "nicatnuhov389@gmail.com"
  ]);
  const isStudentMember = (item) => {
    if (!item) return false;
    const u = (item.username || "").toLowerCase().replace(/^@/, "").trim();
    const em = (item.email || "").toLowerCase().trim();
    const fn = (item.fullName || "").toLowerCase();
    if (studentUserSet.has(u) || studentEmailSet.has(em)) return true;
    if (fn.includes("fatimə piriyeva") || fn.includes("fatima piriyeva") || fn.includes("xaqan əliyev") || fn.includes("nicat nuhov")) return true;
    return false;
  };

  if (Array.isArray(data.teachers)) {
    data.teachers = data.teachers.filter(t => {
      if (!t || isStudentMember(t)) return false;
      return t.id !== "teacher-1" && t.id !== "teacher-fidan" && (t.username || "").toLowerCase() !== "rashad_ismayilov" && (t.username || "").toLowerCase() !== "fidan" && (t.email || "").toLowerCase() !== "fidanverdiyeva808@gmail.com";
    });
    const hasSefanya = data.teachers.some(t => t && ((t.username || "").toLowerCase() === "sefanyamuellim" || t.id === "teacher-sefanya"));
    const isSefanyaDeleted = data.deletedTeacherIds && (data.deletedTeacherIds.includes("teacher-sefanya") || data.deletedTeacherIds.includes("sefanyamuellim"));
    if (!hasSefanya && !isSefanyaDeleted && Array.isArray(INITIAL_DATA.teachers) && INITIAL_DATA.teachers.length > 0) {
      data.teachers.unshift(JSON.parse(JSON.stringify(INITIAL_DATA.teachers[0])));
    }
  }
  if (Array.isArray(data.teacherApplications)) {
    data.teacherApplications = data.teacherApplications.filter(a => {
      if (!a || isStudentMember(a)) return false;
      return a.id !== "teach-app-1" && a.id !== "teach-app-fidan" && a.teacherId !== "teacher-fidan" && (a.username || "").toLowerCase() !== "rashad_ismayilov" && (a.username || "").toLowerCase() !== "fidan" && (a.email || "").toLowerCase() !== "fidanverdiyeva808@gmail.com";
    });
    const hasSefanyaApp = data.teacherApplications.some(a => a && ((a.username || "").toLowerCase() === "sefanyamuellim" || a.id === "teach-app-sefanya"));
    const isSefanyaAppDeleted = data.deletedTeacherIds && (data.deletedTeacherIds.includes("teacher-sefanya") || data.deletedTeacherIds.includes("sefanyamuellim"));
    if (!hasSefanyaApp && !isSefanyaAppDeleted && Array.isArray(INITIAL_DATA.teacherApplications) && INITIAL_DATA.teacherApplications.length > 0) {
      data.teacherApplications.unshift(JSON.parse(JSON.stringify(INITIAL_DATA.teacherApplications[0])));
    }
  }
  if (Array.isArray(data.applications)) {
    data.applications.forEach(a => {
      if (!a) return;
      if (isStudentMember(a)) {
        delete a.isTeacher;
        delete a.teacherId;
      }
    });
  }
  if (Array.isArray(data.members)) {
    data.members.forEach(m => {
      if (!m) return;
      if (isStudentMember(m)) {
        m.role = "Klub Üzvü";
      }
    });
  }
  if (Array.isArray(data.events)) {
    data.events = data.events.filter(e => e && !["ev-2", "ev-3", "ev-4", "ev-5"].includes(e.id));
  }
  data.memberCustomTasks = data.memberCustomTasks || [];
  data.memberNotes = data.memberNotes || [];
  if (Array.isArray(data.publishedProjects)) {
    data.publishedProjects.forEach(p => {
      if (p && p.id === "proj-3d-structural-tools") {
        p.title = "3D Struktur Alətləri (Carbox & CarboxMol)";
        p.stack = ["Carbox & CarboxMol"];
      }
    });
  }
  if (Array.isArray(data.teachers)) {
    data.teachers.forEach(t => {
      if (t) {
        delete t.officeLocation;
        delete t.consultationHours;
      }
    });
  }
  if (Array.isArray(data.teacherApplications)) {
    data.teacherApplications.forEach(a => {
      if (a) {
        delete a.officeLocation;
        delete a.consultationHours;
      }
    });
  }
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

    // Saytda göstərilən rəsmi sənədlər (Təşkilati Struktur, İllik Plan/Sillabus və 2 Koordinator Vəzifə Təlimatı)
    const siteDocIds = ["03_struktur", "04_plan", "06_elmi_koordinator", "07_teshkilat_media_koordinatoru"];
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
      // Qərib Mürşüdov tədbirini və TechBrains 2026 tədbirini yenilə və qoru, Sədrin əlavə etdiyi xüsusi tədbirləri heç vaxt silmə!
      parsed.events = (parsed.events || []).filter(e => e && !["ev-2", "ev-3", "ev-4", "ev-5"].includes(e.id));
      INITIAL_DATA.events.forEach(defEv => {
        const existingIdx = parsed.events.findIndex(e => e.id === defEv.id);
        if (existingIdx !== -1) {
          parsed.events[existingIdx] = JSON.parse(JSON.stringify(defEv));
        } else {
          parsed.events.unshift(JSON.parse(JSON.stringify(defEv)));
        }
      });

      // Mock dataları tam təmizlə
      purgeMockData(parsed);

      // Tapşırıqlar: Bütün köhnə/avtomatik mock tapşırıqlar tam təmizlənir (yalnız manual təyin edilmiş real tapşırıqlar saxlanılır)
      const mockTaskIds = ["task-101", "task-102", "task-103", "task-wcu-01", "task-wcu-02", "task-wcu-03"];
      parsed.tasks = (parsed.tasks || []).filter(t => t && !mockTaskIds.includes(t.id));
      parsed.tasks.forEach(t => {
        if (Array.isArray(t.submissions)) {
          t.submissions = t.submissions.filter(s => s && s.id !== "sub-wcu-01-u1yashko" && s.id !== "sub-wcu-02-fatima" && !String(s.id).startsWith("sub-wcu-"));
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
          // Əgər seedMem rəsmi təsdiqlənibsə (Aktiv), statusu mütləq "Aktiv" et!
          if (seedMem.status === "Aktiv" && parsed.members[existingIdx].status !== "Aktiv") {
            parsed.members[existingIdx].status = "Aktiv";
            hasStorageUpdates = true;
          }
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

    // Sədr tərəfindən verilən qərarların (Təsdiq / İmtina) qalıcı yaddaşdan oxunması
    try {
      const storedApproved = JSON.parse(localStorage.getItem("carboxmol_approved_app_ids") || "[]");
      if (Array.isArray(storedApproved)) {
        parsed.approvedAppIds = Array.from(new Set([...(parsed.approvedAppIds || []), ...storedApproved]));
      }
      const storedRejected = JSON.parse(localStorage.getItem("carboxmol_rejected_app_ids") || "[]");
      if (Array.isArray(storedRejected)) {
        parsed.rejectedAppIds = Array.from(new Set([...(parsed.rejectedAppIds || []), ...storedRejected]));
      }
    } catch (e) {}

    // 2. İlkin müraciətlərin (Seed Applications) zəmanətli bərpası və status qorunması
    // QAYDA: Heç vaxt Sədrin təsdiqlədiyi müraciəti yenidən "Gözləyir" statusuna qaytarma!
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
          if (isApprovedByPresident) {
            freshApp.status = "Təsdiqləndi";
          } else if (isRejectedByPresident) {
            freshApp.status = "Rədd edildi";
          }
          parsed.applications.push(freshApp);
          hasStorageUpdates = true;
        } else {
          // Əgər saxlanmış müraciət artıq təsdiqlənibsə və ya Sədr qərar veribsə, statusu qoru
          if ((seedApp.status === "Təsdiqləndi" || isApprovedByPresident) && parsed.applications[existingIdx].status !== "Təsdiqləndi") {
            parsed.applications[existingIdx].status = "Təsdiqləndi";
            if (seedApp.approvedAt) parsed.applications[existingIdx].approvedAt = seedApp.approvedAt;
            if (seedApp.approvedBy) parsed.applications[existingIdx].approvedBy = seedApp.approvedBy;
            hasStorageUpdates = true;
          } else if (isRejectedByPresident && parsed.applications[existingIdx].status !== "Rədd edildi") {
            parsed.applications[existingIdx].status = "Rədd edildi";
            hasStorageUpdates = true;
          }
          // Çatışmayan sahələri tamamla
          if (!parsed.applications[existingIdx].password && seedApp.password) {
            parsed.applications[existingIdx].password = seedApp.password;
            hasStorageUpdates = true;
          }
          if (!parsed.applications[existingIdx].phone && seedApp.phone) {
            parsed.applications[existingIdx].phone = seedApp.phone;
            hasStorageUpdates = true;
          }
          if (!parsed.applications[existingIdx].email && seedApp.email) {
            parsed.applications[existingIdx].email = seedApp.email;
            hasStorageUpdates = true;
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
      const isRejected = app.status === "Rədd edildi" || (parsed.rejectedAppIds && parsed.rejectedAppIds.includes(app.id));
      const targetMemberStatus = isRejected ? "Rədd edildi" : "Aktiv";

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
        // İkitərəfli status uyğunluğu: Yalnız rəsmi rədd edilmişlər deaktiv qalır, digər bütün üzvlər aktivdir
        if (app.status === "Rədd edildi" || (parsed.rejectedAppIds && parsed.rejectedAppIds.includes(app.id))) {
          if (parsed.members[memIdx].status !== "Rədd edildi") {
            parsed.members[memIdx].status = "Rədd edildi";
            hasStorageUpdates = true;
          }
        } else {
          if (parsed.members[memIdx].status !== "Aktiv") {
            parsed.members[memIdx].status = "Aktiv";
            hasStorageUpdates = true;
          }
          if (app.status !== "Təsdiqləndi") {
            app.status = "Təsdiqləndi";
            hasStorageUpdates = true;
          }
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
    parsed.deletedTeacherIds = parsed.deletedTeacherIds || [];
    parsed.deletedAppIds = parsed.deletedAppIds || [];

    // Fərdi qalıcı silinmişlər reyestrindən (tombstone) bərpa
    try {
      const storedTeacherTombs = JSON.parse(localStorage.getItem("carboxmol_deleted_teacher_ids") || "[]");
      if (Array.isArray(storedTeacherTombs) && storedTeacherTombs.length > 0) {
        parsed.deletedTeacherIds = Array.from(new Set([...parsed.deletedTeacherIds, ...storedTeacherTombs]));
      }
    } catch (e) {}

    const isTeacherDeleted = (item) => {
      if (!item) return false;
      const delSet = new Set((parsed.deletedTeacherIds || []).map(x => String(x).toLowerCase()));
      const delApps = new Set(parsed.deletedAppIds || []);
      if (item.id && (delSet.has(String(item.id).toLowerCase()) || delApps.has(item.id))) return true;
      if (item.teacherId && delSet.has(String(item.teacherId).toLowerCase())) return true;
      if (item.username && delSet.has(item.username.toLowerCase())) return true;
      if (item.email && delSet.has(item.email.toLowerCase())) return true;
      return false;
    };

    // İlkin seed müəllimlərinin qorunması (YALNIZ Sədr tərəfindən silinməyibsə!)
    if (Array.isArray(INITIAL_DATA.teachers)) {
      INITIAL_DATA.teachers.forEach((seedTeacher) => {
        if (isTeacherDeleted(seedTeacher)) return;
        const existingIdx = parsed.teachers.findIndex(
          (t) =>
            (t.username && seedTeacher.username && t.username.toLowerCase() === seedTeacher.username.toLowerCase()) ||
            (t.email && seedTeacher.email && t.email.toLowerCase() === seedTeacher.email.toLowerCase()) ||
            t.id === seedTeacher.id
        );
        if (existingIdx === -1) {
          parsed.teachers.push(JSON.parse(JSON.stringify(seedTeacher)));
          hasStorageUpdates = true;
        } else {
          if (!parsed.teachers[existingIdx].password && seedTeacher.password) {
            parsed.teachers[existingIdx].password = seedTeacher.password;
            hasStorageUpdates = true;
          }
          if (!parsed.teachers[existingIdx].department && seedTeacher.department) {
            parsed.teachers[existingIdx].department = seedTeacher.department;
            hasStorageUpdates = true;
          }
        }
      });
    }

    if (Array.isArray(INITIAL_DATA.teacherApplications)) {
      INITIAL_DATA.teacherApplications.forEach((seedApp) => {
        if (isTeacherDeleted(seedApp)) return;
        const existingAppIdx = parsed.teacherApplications.findIndex(
          (a) =>
            a.id === seedApp.id ||
            (a.username && seedApp.username && a.username.toLowerCase() === seedApp.username.toLowerCase()) ||
            (a.email && seedApp.email && a.email.toLowerCase() === seedApp.email.toLowerCase())
        );
        if (existingAppIdx === -1) {
          parsed.teacherApplications.push(JSON.parse(JSON.stringify(seedApp)));
          hasStorageUpdates = true;
        } else {
          if (!parsed.teacherApplications[existingAppIdx].password && seedApp.password) {
            parsed.teacherApplications[existingAppIdx].password = seedApp.password;
            hasStorageUpdates = true;
          }
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

    // Müəllimlər və Müəllim Müraciətləri arasında ikitərəfli sinxronizasiya (Silinmişlər dərhal kənarlaşdırılır):
    parsed.teacherApplications.forEach((app) => {
      if (isTeacherDeleted(app)) return;
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
      if (isTeacherDeleted(t)) return;
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

    // 5. Tələbə üzvlərinin (Fatimə Piriyeva, Xaqan Əliyev, Nicat Nuhov və s.) müəllim bazasından tam təcrid edilməsi və qorunması:
    const studentUsernames = new Set([
      "fatimapirieva", "fatimapiriyeva", "xaqan", "nuhov", "anar_aliyev", "gunay", "elmir_m", "kenan_bio", "fatimirzz", "nuray", "nigar"
    ]);

    if (Array.isArray(parsed.teachers)) {
      const prevTCount = parsed.teachers.length;
      parsed.teachers = parsed.teachers.filter(t => {
        if (!t) return false;
        const u = (t.username || "").toLowerCase().replace(/^@/, "");
        return !studentUsernames.has(u);
      });
      if (parsed.teachers.length !== prevTCount) hasStorageUpdates = true;
    }

    if (Array.isArray(parsed.teacherApplications)) {
      const prevTACount = parsed.teacherApplications.length;
      parsed.teacherApplications = parsed.teacherApplications.filter(ta => {
        if (!ta) return false;
        const u = (ta.username || "").toLowerCase().replace(/^@/, "");
        return !studentUsernames.has(u);
      });
      if (parsed.teacherApplications.length !== prevTACount) hasStorageUpdates = true;
    }

    if (Array.isArray(parsed.applications)) {
      parsed.applications.forEach(app => {
        if (!app) return;
        const u = (app.username || "").toLowerCase().replace(/^@/, "");
        if (studentUsernames.has(u)) {
          delete app.isTeacher;
          delete app.teacherId;
          hasStorageUpdates = true;
        }
      });
    }

    if (Array.isArray(parsed.members)) {
      parsed.members.forEach(m => {
        if (!m) return;
        const u = (m.username || "").toLowerCase().replace(/^@/, "");
        if (studentUsernames.has(u)) {
          if (m.role !== "Klub Üzvü") {
            m.role = "Klub Üzvü";
            hasStorageUpdates = true;
          }
        }
      });
    }

    // Yekun süzgəc: Sədr tərəfindən silinmiş qeydlərin bazada qalmasına qətiyyən icazə verilmir
    if (parsed.deletedTeacherIds && parsed.deletedTeacherIds.length > 0) {
      const delSet = new Set(parsed.deletedTeacherIds.map(x => String(x).toLowerCase()));
      const delApps = new Set(parsed.deletedAppIds || []);
      const prevTeachCount = parsed.teachers.length;
      const prevAppCount = parsed.teacherApplications.length;

      parsed.teachers = parsed.teachers.filter(t => 
        !delSet.has(String(t.id).toLowerCase()) &&
        !delSet.has(String(t.username || '').toLowerCase()) &&
        !delSet.has(String(t.email || '').toLowerCase())
      );

      parsed.teacherApplications = parsed.teacherApplications.filter(a => 
        !delApps.has(a.id) &&
        !delSet.has(String(a.id).toLowerCase()) &&
        !delSet.has(String(a.teacherId || '').toLowerCase()) &&
        !delSet.has(String(a.username || '').toLowerCase()) &&
        !delSet.has(String(a.email || '').toLowerCase())
      );

      if (parsed.teachers.length !== prevTeachCount || parsed.teacherApplications.length !== prevAppCount) {
        hasStorageUpdates = true;
      }
    }

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
          hostRole: "Laboratoriya Müdiri (Təlimçi Alim) & Klub Sədri",
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

    // Tapşırıqlar yalnız rəhbərlik (Müəllim və ya Sədr) tərəfindən manual təyin edilir, heç bir avtomatik mock təyin olunmur
    const mockTaskIdsEnd = ["task-101", "task-102", "task-103", "task-wcu-01", "task-wcu-02", "task-wcu-03"];
    parsed.tasks = (parsed.tasks || []).filter(t => t && !mockTaskIdsEnd.includes(t.id));
    parsed.tasks.forEach(t => {
      if (Array.isArray(t.submissions)) {
        t.submissions = t.submissions.filter(s => s && s.id !== "sub-wcu-01-u1yashko" && s.id !== "sub-wcu-02-fatima" && !String(s.id).startsWith("sub-wcu-"));
      }
    });

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
  if (typeof SyncEngine !== "undefined" && SyncEngine.broadcast) {
    SyncEngine.broadcast("DATA_SAVED", { timestamp: Date.now() });
  }
}

if (typeof window !== "undefined") {
  window.INITIAL_DATA = INITIAL_DATA;
  window.getClubData = getClubData;
  window.saveClubData = saveClubData;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { INITIAL_DATA, getClubData, saveClubData };
}

