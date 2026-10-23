// CarboxMol Bioinformatika Klubu - Beynəlxalq Alimlər, Əməkdaşlar və Gənc Tədqiqatçılar Şəbəkəsi
// Tanınmış Bioinformatika, Struktur və Hesablama Biologiyası Alimləri ilə Əməkdaşlıq Sistemi

const INITIAL_COLLABORATORS = [
  {
    id: "garib-murshudov",
    name: "Prof. Qərib Mürşüdov (Garib Murshudov)",
    title: "Programme Leader (Group Leader), Computational Structural Biology Group",
    institution: "MRC Laboratory of Molecular Biology (LMB), Cambridge University",
    location: "Kembric, Böyük Britaniya (UK)",
    field: "Struktur Biologiyası",
    specialty: "Makromolekulyar Kristalloqrafiya, REFMAC5, Bayes Statistikası, Cryo-EM Xəritə Refinement, Servalcat, ProSMART",
    keySoftware: "REFMAC5, ProSMART, Servalcat, CCP4 Suite",
    keyPublications: "Refinement of macromolecular structures by the maximum-likelihood method (Acta Cryst D 2011, >12,000 sitat); Cryo-EM refinement (Nature Methods 2020)",
    badge: "Fəxri Qonaq Alim • Kembric LMB",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
    avatar: "assets/images/events/garib_murshudov_seminar_president.jpg",
    email: "garib@mrc-lmb.cam.ac.uk",
    labUrl: "https://www2.mrc-lmb.cam.ac.uk/group-leaders/m-to-o/g-murshudov/",
    scholarUrl: "https://scholar.google.com/citations?user=Y7qW4sEAAAAJ",
    orcid: "0000-0001-8314-1785",
    clubStatus: "Aktiv Əməkdaşlıq & Elmi Məsləhətçi (20 Oktyabr 2026 seminarı keçirildi)",
    bio: "Kembric Universitetinin professoru, dünya şöhrətli azərbaycanlı alim. Zülal və RNT-lərin 3D atomar strukturunun dəqiq təyini üçün qlobal standart olan REFMAC5 proqramının və Bayes statistikası alətlərinin müəllifidir. Klubumuzun fəxri elmi seminar qonağı olmuşdur.",
    cooperationAreas: [
      "Struktur biologiyası və krio-elektron mikroskopiyası (Cryo-EM) ustad dərsləri",
      "REFMAC5 və makromolekulyar zülal-liqand koordinatlarının dəqiqləşdirilməsi",
      "Tələbələrin beynəlxalq elmi məqalə və tədqiqat layihələrinə rəy və mentorluq"
    ]
  },
  {
    id: "suleyman-hajizadeh",
    name: "Süleyman Hacızadə (Suleyman Hajizadeh)",
    title: "CarboxMol Bioinformatika Klubunun Təsisçisi və Sədri, Hesablama Struktur Biologiyası Gənc Tədqiqatçısı",
    institution: "Western Caspian University & AR ETN MBİ (IMB - Institute of Molecular Biology) Hesablama Struktur Biologiyası Laboratoriyası",
    location: "Bakı, Azərbaycan",
    field: "Gənc Tədqiqatçılar",
    specialty: "Hesablama Struktur Biologiyası, PDB/mmCIF koordinat emalı, Carbox (həndəsi analiz) və CarboxMol (3D vizualizasiya), Python/C++ bioinformatikası",
    keySoftware: "Carbox, CarboxMol, SeqAnalyzer, BioMeet WebRTC Engine",
    keyPublications: "Carbox: Macromolecular Coordinate and Geometry Engine (Daxili Layihə); CarboxMol Bioinformatika Kurrikulumu və Laboratoriya Sillabusu (2026)",
    badge: "Klub Sədri & Gənc Tədqiqatçı",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/40",
    avatar: "assets/images/suleyman_hajizadeh.jpg",
    email: "suleyman.hacizade.232bioing@wcu.edu.az",
    labUrl: "https://carboxmol-bioinformatics-club.github.io/",
    scholarUrl: "https://scholar.google.com/",
    githubUrl: "https://github.com/SuleimanHajizadeh",
    orcid: "0009-0000-0000-0000",
    clubStatus: "Təsisçi & Rəhbər (Daxili Tədqiqatçı)",
    bio: "Qərbi Kaspi Universiteti Bioinformatika Klubunun təsisçisi və sədri, AR ETN Molekulyar Biologiya İnstitutunun (MBİ / IMB - Institute of Molecular Biology) Hesablama Struktur Biologiyası Laboratoriyasında tədqiqatçı. Prof. Qərib Mürşüdovla birlikdə Carbox və CarboxMol daxili struktur biologiyası layihələri üzərində çalışır.",
    cooperationAreas: [
      "Klubun illik tədris sillabusunun rəhbərliyi və tələbə komandalarının mentorluğu",
      "Carbox və CarboxMol alətlərinin praktiki laboratoriya dərslərində nümayişi",
      "Universitetdə və respublika səviyyəsində bioinformatika hakatonlarının təşkili"
    ]
  },
  {
    id: "sergey-ovchinnikov",
    name: "Dr. Sergey Ovchinnikov (PhD)",
    title: "John Harvard Distinguished Science Fellow, Assistant Professor",
    institution: "Harvard University & Massachusetts Institute of Technology (MIT)",
    location: "Kembric, Massaçusets, ABŞ",
    field: "Gənc Tədqiqatçılar",
    specialty: "Zülal Qatlanması, ColabFold, AfDesign, ESMFold, Ko-təkamül (co-evolutionary analysis), AlphaFold Bulud İnfrastrukturu",
    keySoftware: "ColabFold, AfDesign, ColabDesign, MMseqs2-AlphaFold",
    keyPublications: "ColabFold: making protein folding accessible to all (Nature Methods 2022, >3,500 sitat); De novo protein design using AlphaFold (Nature 2022)",
    badge: "ColabFold Banisi • Harvard Fellow",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sergeyovchinnikov",
    email: "so@fas.harvard.edu",
    labUrl: "https://colabfold.com",
    scholarUrl: "https://scholar.google.com/citations?user=V9uV_j8AAAAJ",
    githubUrl: "https://github.com/sokrypton",
    clubStatus: "Açıq Tədris İnfrastrukturu Tərəfdaşı",
    bio: "Gənc hesablama bioloqu, Harvard Universiteti tədqiqatçısı. Bütün dünyada tələbələrin və alimlərin superkompüterlər olmadan Google Colab üzərində pulsuz AlphaFold və ESMFold hesablamaları aparmasına imkan verən ColabFold layihəsinin yaradıcısıdır.",
    cooperationAreas: [
      "ColabFold bulud mühitində zülal kompleksi proqnozu vorkşopları",
      "AfDesign ilə tələbələrin süni zülal modelləşdirməsi təlimləri",
      "Böyük zülal verilənlər dəstlərinin MMseqs2 ilə sürətli qruplaşdırılması"
    ]
  },
  {
    id: "david-baker",
    name: "Prof. David Baker (Nobel Laureatı 2024)",
    title: "Director of Institute for Protein Design (IPD), Professor of Biochemistry",
    institution: "University of Washington & Howard Hughes Medical Institute (HHMI)",
    location: "Sietl, ABŞ (USA)",
    field: "Struktur Biologiyası",
    specialty: "Hesablama Zülal Dizaynı, Rosetta, RoseTTAFold, RFdiffusion, De Novo Zülal Sintezi",
    keySoftware: "Rosetta, RoseTTAFold, RFdiffusion, ProteinMPNN",
    keyPublications: "De novo design of protein structure and function with RFdiffusion (Nature 2023); Accurate prediction of protein structures using RoseTTAFold (Science 2021)",
    badge: "Nobel Laureatı 2024 • Kimya",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=davidbaker",
    email: "dabaker@uw.edu",
    labUrl: "https://www.bakerlab.org/",
    scholarUrl: "https://scholar.google.com/citations?user=aWn3h3sAAAAJ",
    orcid: "0000-0001-7896-6217",
    clubStatus: "Qlobal Elmi Resurs & Əməkdaşlıq Dəvəti",
    bio: "2024-cü il Kimya üzrə Nobel Mükafatı laureatı. Təbiətdə heç vaxt mövcud olmayan tamamilə yeni zülalların kompüterdə dizaynı (Rosetta & RoseTTAFold) texnologiyasının banisi və Institute for Protein Design direktoru.",
    cooperationAreas: [
      "RoseTTAFold və de novo zülal dizaynı sillabusları",
      "Tələbələrin Rosetta commons tədris resurslarına inteqrasiyası",
      "Xərçəng və viruslara qarşı süni peptidlərin modelləşdirilməsi"
    ]
  },
  {
    id: "demis-john-deepmind",
    name: "Dr. Demis Hassabis & Dr. John Jumper (Nobel Laureatları 2024)",
    title: "CEO (Hassabis) & Lead AI Scientist (Jumper), AlphaFold Development Group",
    institution: "Google DeepMind",
    location: "London, Böyük Britaniya (UK)",
    field: "Süni İntellekt & AlphaFold",
    specialty: "Dərin Neyron Şəbəkələri, AlphaFold 2/3, Zülal-Nuklein Turşusu-Liqand Kompleksləri",
    keySoftware: "AlphaFold 2, AlphaFold 3, AlphaFold Protein Structure Database",
    keyPublications: "Highly accurate protein structure prediction with AlphaFold (Nature 2021, >25,000 sitat); Structure prediction of biomolecular interactions with AlphaFold 3 (Nature 2024)",
    badge: "Nobel Laureatı 2024 • AI",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=alphafolddeepmind",
    email: "alphafold@deepmind.com",
    labUrl: "https://deepmind.google/technologies/alphafold/",
    scholarUrl: "https://scholar.google.com/citations?user=2vGg6gUAAAAJ",
    clubStatus: "Texnoloji Resurs & Tədris İnteqrasiyası",
    bio: "2024-cü il Kimya üzrə Nobel Mükafatı laureatları. 50 illik zülal qatlanması problemini həll edərək 200 milyondan çox zülalın strukturunu proqnozlaşdıran AlphaFold AI modelinin memarları.",
    cooperationAreas: [
      "AlphaFold Database API inteqrasiyası və praktiki laboratoriya dərsləri",
      "AlphaFold 3 ilə zülal-DNT və zülal-liqand qarşılıqlı təsirlərinin analizi",
      "Süni intellektin biotibbi kəşflərdə tətbiqi mühazirələri"
    ]
  },
  {
    id: "paul-emsley",
    name: "Dr. Paul Emsley",
    title: "Scientific Computing Officer, Author of Coot",
    institution: "MRC Laboratory of Molecular Biology (LMB), Cambridge University",
    location: "Kembric, Böyük Britaniya (UK)",
    field: "Struktur Biologiyası",
    specialty: "Makromolekulyar Qrafika, Coot, Cryo-EM Elektron Sıxlığı Xəritələri, Atomik Model Qurulması, Real-Space Refinement",
    keySoftware: "Coot (Crystallographic Object-Oriented Toolkit)",
    keyPublications: "Coot: model-building tools for molecular graphics (Acta Cryst D 2004 & 2010, >32,000 sitat)",
    badge: "Coot Müəllifi • Cambridge LMB",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=paulemsley",
    email: "pemsley@mrc-lmb.cam.ac.uk",
    labUrl: "https://www2.mrc-lmb.cam.ac.uk/personal/pemsley/coot/",
    scholarUrl: "https://scholar.google.com/citations?user=pGcLKqYAAAAJ",
    clubStatus: "Tədris Proqramı Tərəfdaşı (Həftə 11 Mövzusu)",
    bio: "Makromolekulyar kristalloqrafiya və Krio-EM sahəsində qlobal standart olan Coot proqramının rəhbər müəllifi. Kembric MRC LMB institutunda çalışır və zülalların elektron sıxlığına görə 3D modelinin inşası texnologiyasının əsas memarıdır.",
    cooperationAreas: [
      "Klubun Həftə 11 '3D Vizuallaşdırma və Struktur Laboratoriyası' çərçivəsində Coot təlimi",
      "Elektron sıxlığı xəritələri ilə atom koordinatlarının əlaqələndirilməsi",
      "Tələbələr üçün Kembric LMB açıq resursları və təlim materialları"
    ]
  },
  {
    id: "marcin-wojdyr",
    name: "Dr. Marcin Wojdyr",
    title: "Senior Scientific Software Developer, Author of Gemmi",
    institution: "Global Phasing Ltd & CCP4 (Collaborative Computational Project No. 4)",
    location: "Kembric, Böyük Britaniya (UK)",
    field: "Struktur Biologiyası",
    specialty: "Gemmi Kitabxanası, mmCIF və PDB Formatları, C++ və Python Kristalloqrafik Alətləri, Simmetriya Əməliyyatları",
    keySoftware: "Gemmi, GemmiMol, Fable, CCP4 tools",
    keyPublications: "GEMMI: a library for structural biology (Journal of Open Source Software 2022); Handling macromolecular data with modern C++",
    badge: "Gemmi Müəllifi • CCP4",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=marcinwojdyr",
    email: "marcin.wojdyr@gmail.com",
    labUrl: "https://gemmi.readthedocs.io/",
    githubUrl: "https://github.com/project-gemmi/gemmi",
    scholarUrl: "https://scholar.google.com/citations?user=Q0qjQWAAAAAJ",
    clubStatus: "Tədris Proqramı Tərəfdaşı (Həftə 11 Mövzusu)",
    bio: "Müasir hesablama struktur biologiyasında mmCIF, PDB və MTZ fayllarını C++ və Python dillərində ən yüksək sürətlə oxuyan və emal edən məşhur Gemmi kitabxanasının müəllifi. Kembricdə yerləşən Global Phasing təşkilatında çalışır.",
    cooperationAreas: [
      "Gemmi və GemmiMol ilə PDB/mmCIF koordinatlarının proqramlaşdırılması",
      "Klubun Carbox mühərriki ilə Gemmi alqoritmlərinin inteqrasiyası",
      "Tələbələr üçün C++ və Python ilə atomik həndəsə dərsləri"
    ]
  },
  {
    id: "jeffrey-ruffolo",
    name: "Dr. Jeffrey Ruffolo (PhD)",
    title: "Postdoctoral Fellow, Computational Biology & Antibody Design",
    institution: "Stanford University & Profluent Bio",
    location: "Stenford, Kaliforniya, ABŞ",
    field: "Gənc Tədqiqatçılar",
    specialty: "İmmuno-informatika, Zülal Generativ Modelləri, Antitellərin Kompüter Dizaynı (IgLM, AntiBERTy), Dərin Öyrənmə",
    keySoftware: "AntiFold, IgFold, AntiBERTy, IgLM",
    keyPublications: "Antibody structure prediction using deep learning (Patterns 2023); Deciphering antibody affinity maturation with language models (Nature 2023)",
    badge: "İmmunoinformatika • Stanford",
    badgeColor: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=jeffreyruffolo",
    email: "jruffolo@stanford.edu",
    labUrl: "https://jeffreyruffolo.github.io/",
    githubUrl: "https://github.com/jeffreyruffolo",
    scholarUrl: "https://scholar.google.com/citations?user=3G9ZlEAAAAAJ",
    clubStatus: "Qlobal Əlaqə & Mentorluq",
    bio: "Gənc bioinformatik alim, Stenford Universitetinin tədqiqatçısı. Zülal dil modelləri (Protein Language Models) vasitəsilə antitel zəncirlərinin və peyvəndlərin kompüterdə generasiyası üzrə qabaqcıl metodların müəllifidir.",
    cooperationAreas: [
      "Antitellərin 3D strukturunun maşın öyrənməsi ilə proqnozu",
      "Biotibb və immunoterapiya üçün generativ zülal modelləri",
      "Tələbələr üçün GitHub açıq kod təlimləri"
    ]
  },
  {
    id: "rafael-irizarry",
    name: "Prof. Rafael A. Irizarry",
    title: "Chair of Department of Data Science, Professor of Biostatistics",
    institution: "Harvard T.H. Chan School of Public Health & Dana-Farber Cancer Institute",
    location: "Boston, ABŞ (USA)",
    field: "Hesablama & Bioconductor",
    specialty: "Bioconductor Layihəsinin Banisi, Genomik Data Science, R Statistikası, Microarray və RNA-seq Normalizasiyası",
    keySoftware: "Bioconductor Core, RMA (affy), minfi",
    keyPublications: "Exploration, normalization, and summaries of high density oligonucleotide array data (Biostatistics 2003, >15,000 sitat); Orchestrating high-throughput genomic analysis with Bioconductor (Nature Methods 2015)",
    badge: "Bioconductor Banisi • Harvard",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=rafaelirizarry",
    email: "rafa@jimmy.harvard.edu",
    labUrl: "https://rafalab.dfci.harvard.edu/",
    scholarUrl: "https://scholar.google.com/citations?user=b4V83VAAAAAJ",
    clubStatus: "Bioconductor Tədris Mentorluğu",
    bio: "Genomika üzrə ən böyük açıq mənbəli platforma olan Bioconductor layihəsinin yaradıcılarından biri və Harvard Universitetinin biostatistika kafedrasının müdiridir.",
    cooperationAreas: [
      "WCU Bioconductor Hub-ın inkişafı və R genomik dərsləri",
      "Genomik verilənlər elmi və statistik bioinformatika metodları",
      "Böyük ölçülü omics verilənlərinin təmizlənməsi və normalizasiyası"
    ]
  },
  {
    id: "michael-love",
    name: "Prof. Michael Love",
    title: "Associate Professor of Biostatistics and Genetics",
    institution: "University of North Carolina at Chapel Hill",
    location: "Çapel Hill, Şimali Karolina, ABŞ",
    field: "Hesablama & Bioconductor",
    specialty: "DESeq2 Baş Müəllifi, RNA-seq Kəmiyyət Analizi, tximeta, Diferensial Gen Ekspressiyası",
    keySoftware: "DESeq2, tximeta, fishpond, Alpine",
    keyPublications: "Moderated estimation of fold change and dispersion for RNA-seq data with DESeq2 (Genome Biology 2014, >45,000 sitat); Tximeta: Reference sequence provenance for transcriptomics (PLoS Comp Bio 2020)",
    badge: "DESeq2 Müəllifi • UNC",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=michaellove",
    email: "milove@email.unc.edu",
    labUrl: "https://mikelove.github.io/",
    scholarUrl: "https://scholar.google.com/citations?user=Y0j2_YcAAAAJ",
    githubUrl: "https://github.com/mikelove",
    clubStatus: "DESeq2 Alət Mentorluğu",
    bio: "Dünyada yüz minlərlə laboratoriya tərəfindən hər gün istifadə edilən əsas transkriptomika diferensial analiz proqramı olan DESeq2 paketinin baş müəllifi və Şimali Karolina Universitetinin professorudur.",
    cooperationAreas: [
      "DESeq2 və R ilə diferensial gen ifadəsi (DGE) ustad dərsləri",
      "Klubumuzun canlı Bioconductor modulunda DESeq2 boru kəmərinin təkmilləşdirilməsi",
      "Tələbələrin onkoloji RNA-seq tədqiqatlarına metodoloji rəy"
    ]
  },
  {
    id: "aviv-regev",
    name: "Prof. Aviv Regev (PhD)",
    title: "Head of Genentech Research, Core Member of Broad Institute of MIT & Harvard",
    institution: "Genentech & Broad Institute of MIT and Harvard",
    location: "San Fransisko / Boston, ABŞ",
    field: "Genomika & NGS",
    specialty: "Single-Cell RNA-seq (scRNA-seq), Human Cell Atlas Həmsədri, Tənzimləyici Genetik Şəbəkələr, Xərçəng Heterogenliyi",
    keySoftware: "Kallisto/Bustools, Seurat pipelines, Cell Ranger",
    keyPublications: "The Human Cell Atlas (eLife 2017, >2,800 sitat); Single-cell RNA-seq reveals new types of human blood dendritic cells and progenitors (Science 2017)",
    badge: "Single-Cell Qabaqcılı • MIT",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=avivregev",
    email: "regev.aviv@gene.com",
    labUrl: "https://www.broadinstitute.org/bios/aviv-regev",
    scholarUrl: "https://scholar.google.com/citations?user=Y4hT7HAAAAAJ",
    clubStatus: "Elmi Şəbəkə & İlham Mənbəyi",
    bio: "Tək-hüceyrəli genomika (single-cell genomics) və beynəlxalq Human Cell Atlas konsorsiumunun banisi. Hüceyrələrarası gen ifadəsi fərqlərini və xərçəng mikromühitini kompüter alqoritmləri ilə xəritələndirən lider alimdir.",
    cooperationAreas: [
      "Single-cell RNA-seq (scRNA-seq) analiz metodologiyaları",
      "Kompüter biologiyasında hüceyrə atlası məlumat bazalarından istifadə",
      "Qadın alimlərin bioinformatika elmində rolunun artırılması təşəbbüsləri"
    ]
  },
  {
    id: "ewan-birney",
    name: "Prof. Ewan Birney (CBE, FRS)",
    title: "Deputy Director General of EMBL, Director of EMBL-EBI",
    institution: "European Bioinformatics Institute (EMBL-EBI)",
    location: "Kembric, Böyük Britaniya (UK)",
    field: "Genomika & NGS",
    specialty: "Hesablama Genomikası, ENCODE Konsorsiumu, Ensembl Bazasının Banisi, Böyük Genomik Məlumatlar (Big Data)",
    keySoftware: "Ensembl, Wise2 (GeneWise), ENCODE pipelines",
    keyPublications: "An integrated encyclopedia of DNA elements in the human genome (Nature 2012, ENCODE, >18,000 sitat); Initial sequencing and analysis of the human genome (Nature 2001)",
    badge: "EMBL-EBI Direktoru • UK",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ewanbirney",
    email: "birney@ebi.ac.uk",
    labUrl: "https://www.ebi.ac.uk/about/people/ewan-birney",
    scholarUrl: "https://scholar.google.com/citations?user=G66b7o0AAAAJ",
    clubStatus: "Qlobal Əməkdaşlıq Dəvəti",
    bio: "Avropa Bioinformatika İnstitutunun (EMBL-EBI) direktoru, İnsan Genomu Layihəsi və ENCODE konsorsiumunun əsas rəhbərlərindən biri. Bioinformatikada Ensembl verilənlər bazasının və qlobal genom standartlarının memarıdır.",
    cooperationAreas: [
      "EMBL-EBI açıq təhsil resursları və laboratoriya proqramları",
      "Böyük genomik verilənlərin analizi və Ensembl REST API təlimləri",
      "Bioinformatika gənclər təşəbbüslərinə beynəlxalq institusional dəstək"
    ]
  },
  {
    id: "ismayil-zulfugarov",
    name: "Dr. İsmayıl Zülfüqarov (İsmayil Zulfugarov)",
    title: "Professor & Baş Elmi İşçi, Hesablama Biofizikası və Struktur Biologiyası",
    institution: "AR ETN Molekulyar Biologiya İnstitutu (MBİ / IMB) & Pusan National University",
    location: "Bakı, Azərbaycan / Pusan, Cənubi Koreya",
    field: "Struktur Biologiyası",
    specialty: "Fotosintetik Membran Zülal Kompleksləri, Spektroskopiya, Zülalların Biofiziki Dinamikası və Həndəsi Modelləşdirmə",
    keySoftware: "Biophysical Modeling, Kinetic Spectral Analysis",
    keyPublications: "Structural dynamics and photoprotective mechanisms in photosynthetic complexes (BBA); Macromolecular organization of thylakoid membranes",
    badge: "Beynəlxalq Tədqiqatçı • MBİ / IMB",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ismayilzulfugarov",
    email: "ismayil.zulfugarov@pusan.ac.kr",
    labUrl: "http://www.imbb.science.az/",
    scholarUrl: "https://scholar.google.com/citations?user=2xTf_L4AAAAJ",
    clubStatus: "Aktiv Elmi Məsləhətçi",
    bio: "Akademik Cəlal Əliyev məktəbinin yetirməsi, Cənubi Koreya və Azərbaycanda çalışan tanınmış biofizik və struktur bioloqu. Zülal komplekslərinin energetikası və elektron daşınması mexanizmlərini tədqiq edir.",
    cooperationAreas: [
      "Fotosistem zülallarının 3D struktur və biofiziki xüsusiyyətlərinin analizi",
      "Tələbələrin beynəlxalq laboratoriyalarda təcrübə və təqaüd imkanları",
      "Zülal spektral verilənlərinin bioinformatik emalı"
    ]
  },
  {
    id: "samir-mammadov",
    name: "Dr. Samir Məmmədov & ETN MBİ Tədqiqat Qrupu",
    title: "Aparıcı Elmi İşçi, Hesablama Genomikası və Bioinformatika Qrupu",
    institution: "AR ETN Molekulyar Biologiya İnstitutu (MBİ / IMB - Institute of Molecular Biology)",
    location: "Bakı, Azərbaycan",
    field: "Genomika & NGS",
    specialty: "Yerli Biomüxtəliflik, Kənd Təsərrüfatı Genomikası, NGS Filogenetika, Quraqlıq və Şoranlıq Stress Genləri",
    keySoftware: "NGS Pipeline, BLAST local clusters, MEGA, BioEdit",
    keyPublications: "Genome-wide identification and expression profiling of stress-responsive genes in Azerbaijani wheat cultivars; Phylogenetic analysis using NGS barcode markers",
    badge: "Milli Tərəfdaş • ETN MBİ / IMB",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=samirmammadov",
    email: "samir.mammadov@imbb.science.az",
    labUrl: "http://www.imbb.science.az/",
    scholarUrl: "https://scholar.google.com/",
    clubStatus: "Aktiv Yerli Tərəfdaşlıq (MBİ / IMB)",
    bio: "AR ETN Molekulyar Biologiya İnstitutunun (MBİ / IMB) qabaqcıl hesablama biologiyası qrupu. Azərbaycanın kənd təsərrüfatı bitkilərinin və endemik növlərinin DNT/RNT səviyyəsində sekvens analizi ilə məşğuldur.",
    cooperationAreas: [
      "Azərbaycan biomüxtəlifliyi üzrə birgə NGS sekvens və mutasiya analizi",
      "Klub üzvü olan tələbələrin institut laboratoriyalarında praktiki elmi təcrübəsi",
      "Respublika qrant layihələri çərçivəsində gənc tədqiqatçıların cəlb olunması"
    ]
  },
  {
    id: "mbi-young-scientists",
    name: "ETN MBİ Gənc Tədqiqatçılar Qrupu",
    title: "Gənc Alim və Mütəxəssislər Şurası (GAMS), Bioinformatika & Struktur Qrupu",
    institution: "AR ETN Molekulyar Biologiya İnstitutu (MBİ / IMB - Institute of Molecular Biology)",
    location: "Bakı, Azərbaycan",
    field: "Gənc Tədqiqatçılar",
    specialty: "DNT Ştrixkodlaşdırma (DNA Barcoding), Zülal Sekvenslənməsi, De Novo Kloroplast Genomu Yığılması, Filogenetik Ağaclar",
    keySoftware: "MEGA, FastQC, SPAdes, Unipro UGENE, Biopython",
    keyPublications: "Molecular characterization of local grapevine and cereal landraces; Comparative genomics of endemic species",
    badge: "Gənc Alimlər Şurası • MBİ / IMB",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=mbiyoungresearchers",
    email: "gams@imbb.science.az",
    labUrl: "http://www.imbb.science.az/az/pages/council-of-young-scientists.html",
    scholarUrl: "https://scholar.google.com/",
    clubStatus: "Həmyaşıd Gənc Tədqiqatçı Şəbəkəsi",
    bio: "MBİ-nin (IMB) gənc doktorant və magistrantlarından ibarət tədqiqat komandası. CarboxMol Bioinformatika Klubu ilə sıx elmi ünsiyyətdə olaraq gənc kadrların tədqiqat layihələrinə cəlb olunmasına və təcrübə mübadiləsinə dəstək verirlər.",
    cooperationAreas: [
      "Gənc tədqiqatçılar arasında seminar və laboratoriya təcrübə mübadiləsi",
      "Journal Club elmi müzakirələrində birgə məqalə təqdimatları",
      "Magistrant və bakalavrların birgə məqalə yazılışında iştirakı"
    ]
  }
];

// Collaborators Manager Engine
const CollaboratorsEngine = {
  currentFilter: "all",
  searchQuery: "",
  selectedCollaborator: null,

  init() {
    this.renderCollaborators();
    this.bindSearchAndFilter();
  },

  getCollaborators() {
    const data = getClubData();
    if (
      !data.collaborators ||
      !Array.isArray(data.collaborators) ||
      data.collaborators.length !== INITIAL_COLLABORATORS.length ||
      !data.collaborators.some(c => c.id === "suleyman-hajizadeh") ||
      !data.collaborators.some(c => c.id === "sergey-ovchinnikov")
    ) {
      data.collaborators = JSON.parse(JSON.stringify(INITIAL_COLLABORATORS));
      saveClubData(data);
    }
    return data.collaborators;
  },

  renderCollaborators() {
    const container = document.getElementById("collaboratorsGrid");
    if (!container) return;

    let list = this.getCollaborators();

    // Filter by field
    if (this.currentFilter !== "all") {
      list = list.filter(c => c.field === this.currentFilter);
    }

    // Search query
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.institution.toLowerCase().includes(q) ||
        c.specialty.toLowerCase().includes(q) ||
        c.field.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        (c.keySoftware && c.keySoftware.toLowerCase().includes(q))
      );
    }

    const countEl = document.getElementById("collaboratorsCountBadge");
    if (countEl) countEl.innerText = `${list.length} Alim & Tədqiqatçı`;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full p-12 text-center bg-slate-900/60 rounded-3xl border border-slate-800 space-y-3">
          <i class="fa-solid fa-user-slash text-slate-500 text-3xl"></i>
          <h4 class="text-base font-bold text-white">Heç bir alim və ya tədqiqatçı tapılmadı</h4>
          <p class="text-xs text-slate-400">Axtarış sözünü dəyişin və ya yeni alim təklif edin.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(c => `
      <div class="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl hover:shadow-2xl hover:shadow-teal-500/10 group relative overflow-hidden">
        <div class="space-y-3.5">
          
          <!-- Header: Avatar + Name + Badges -->
          <div class="flex items-start gap-3.5">
            <div class="w-14 h-14 rounded-2xl bg-slate-800 border border-teal-500/40 p-0.5 shrink-0 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 relative">
              <img src="${c.avatar}" alt="${c.name}" class="w-full h-full object-cover object-top rounded-[14px]" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(c.name)}'" />
              <span class="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950"></span>
            </div>

            <div class="space-y-1 min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-1.5">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${c.badgeColor || 'bg-teal-500/20 text-teal-300 border-teal-500/30'}">
                  ${c.badge || c.field}
                </span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  <i class="fa-solid fa-location-dot text-rose-400 mr-1"></i>${c.location}
                </span>
              </div>
              <h4 class="text-base font-extrabold text-white group-hover:text-teal-300 transition truncate">${c.name}</h4>
              <p class="text-xs text-teal-400 font-medium truncate">${c.title}</p>
              <p class="text-[11px] text-slate-400 truncate">${c.institution}</p>
            </div>
          </div>

          <!-- Specialty & Tools -->
          <div class="space-y-2 text-xs">
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <span class="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">Tədqiqat Sahəsi & Metodlar:</span>
              <span class="text-slate-200 font-mono text-[11px] leading-relaxed">${c.specialty}</span>
            </div>

            ${c.keySoftware ? `
              <div class="flex flex-wrap items-center gap-1 pt-0.5">
                <span class="text-[10px] font-bold text-indigo-400 mr-1"><i class="fa-solid fa-code text-[9px]"></i> Alətlər:</span>
                ${c.keySoftware.split(',').map(s => `<span class="px-1.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-mono text-indigo-300">${s.trim()}</span>`).join('')}
              </div>
            ` : ''}

            <p class="text-slate-300 text-[11px] leading-relaxed line-clamp-3">${c.bio}</p>
          </div>

          <!-- Key Publications -->
          ${c.keyPublications ? `
            <div class="p-2 rounded-xl bg-slate-950/60 border border-slate-800/60 text-[10px] text-slate-300 space-y-0.5">
              <div class="font-bold text-amber-400 flex items-center gap-1">
                <i class="fa-solid fa-book-bookmark text-[9px]"></i> Əsas Nəşrlər & Sitatlar:
              </div>
              <p class="text-slate-400 line-clamp-2 italic">${c.keyPublications}</p>
            </div>
          ` : ''}

          <!-- Cooperation Areas -->
          ${c.cooperationAreas && c.cooperationAreas.length > 0 ? `
            <div class="space-y-1 pt-1">
              <span class="text-[10px] font-bold uppercase text-teal-400 flex items-center gap-1">
                <i class="fa-solid fa-handshake"></i> Klubla Əməkdaşlıq:
              </span>
              <ul class="text-[11px] text-slate-300 space-y-0.5 pl-3 list-disc">
                ${c.cooperationAreas.slice(0, 2).map(area => `<li>${area}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

        </div>

        <!-- Action Buttons -->
        <div class="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-1.5 flex-wrap">
            ${c.labUrl ? `
              <a href="${c.labUrl}" target="_blank" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 text-xs flex items-center gap-1" title="Laboratoriya / Veb Səhifə">
                <i class="fa-solid fa-globe text-cyan-400"></i> <span class="hidden sm:inline text-[11px]">Vebsayt</span>
              </a>
            ` : ''}
            ${c.scholarUrl ? `
              <a href="${c.scholarUrl}" target="_blank" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 text-xs flex items-center gap-1" title="Google Scholar Məqalələri">
                <i class="fa-solid fa-graduation-cap text-amber-400"></i> <span class="hidden sm:inline text-[11px]">Məqalələr</span>
              </a>
            ` : ''}
            ${c.githubUrl ? `
              <a href="${c.githubUrl}" target="_blank" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 text-xs flex items-center gap-1" title="GitHub Repozitoriyası">
                <i class="fa-brands fa-github text-slate-200"></i> <span class="hidden sm:inline text-[11px]">Kod</span>
              </a>
            ` : ''}
            ${c.email ? `
              <button onclick="CollaboratorsEngine.copyCustomEmail('${c.email}')" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-teal-300 transition border border-slate-800 text-xs flex items-center gap-1" title="E-poçtu Kopyala: ${c.email}">
                <i class="fa-solid fa-envelope text-indigo-400"></i>
              </button>
            ` : ''}
          </div>

          <button onclick="CollaboratorsEngine.openInviteModal('${c.id}')" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition transform active:scale-95">
            <i class="fa-solid fa-paper-plane text-xs"></i> <span>Əlaqə & Dəvət</span>
          </button>
        </div>
      </div>
    `).join("");
  },

  setFilter(filterKey) {
    this.currentFilter = filterKey;
    document.querySelectorAll(".collab-filter-btn").forEach(btn => {
      const isMatch = btn.getAttribute("data-filter") === filterKey;
      btn.classList.toggle("bg-teal-500", isMatch);
      btn.classList.toggle("text-slate-950", isMatch);
      btn.classList.toggle("shadow-md", isMatch);
      btn.classList.toggle("bg-slate-800", !isMatch);
      btn.classList.toggle("text-slate-300", !isMatch);
    });
    this.renderCollaborators();
  },

  copyCustomEmail(email) {
    if (!email) return;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`${email} kopyalandı!`, "success");
    });
  },

  openInviteModal(collaboratorId) {
    const list = this.getCollaborators();
    const collab = list.find(c => c.id === collaboratorId);
    if (!collab) return;

    this.selectedCollaborator = collab;
    const modal = document.getElementById("collabInviteModal");
    if (!modal) return;

    const nameEl = document.getElementById("inviteCollabName");
    const instEl = document.getElementById("inviteCollabInst");
    const emailEl = document.getElementById("inviteCollabEmail");
    const avatarEl = document.getElementById("inviteCollabAvatar");
    const subjectEl = document.getElementById("inviteSubjectInput");
    const bodyEl = document.getElementById("inviteBodyTextarea");
    const linksEl = document.getElementById("inviteCollabLinks");
    const sciDetailsEl = document.getElementById("inviteCollabScientificDetails");

    if (nameEl) nameEl.innerText = collab.name;
    if (instEl) instEl.innerText = `${collab.title} • ${collab.institution} (${collab.location})`;
    if (emailEl) emailEl.innerText = collab.email || "Əlaqə rəsmi vebsayt vasitəsilə";
    if (avatarEl) avatarEl.src = collab.avatar;

    // Render external links in modal
    if (linksEl) {
      let linksHtml = '';
      if (collab.labUrl) {
        linksHtml += `<a href="${collab.labUrl}" target="_blank" class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-cyan-300 hover:text-white flex items-center gap-1.5 transition"><i class="fa-solid fa-globe"></i> Vebsayt</a>`;
      }
      if (collab.scholarUrl) {
        linksHtml += `<a href="${collab.scholarUrl}" target="_blank" class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-amber-300 hover:text-white flex items-center gap-1.5 transition"><i class="fa-solid fa-graduation-cap"></i> Google Scholar</a>`;
      }
      if (collab.githubUrl) {
        linksHtml += `<a href="${collab.githubUrl}" target="_blank" class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[11px] text-slate-200 hover:text-white flex items-center gap-1.5 transition"><i class="fa-brands fa-github"></i> GitHub</a>`;
      }
      if (collab.orcid) {
        linksHtml += `<span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-1.5"><i class="fa-brands fa-orcid"></i> ORCID: ${collab.orcid}</span>`;
      }
      linksEl.innerHTML = linksHtml;
    }

    // Render scientific details box
    if (sciDetailsEl) {
      sciDetailsEl.classList.remove("hidden");
      sciDetailsEl.innerHTML = `
        <div class="flex flex-wrap items-center gap-1.5">
          <span class="font-bold text-indigo-400">Tədqiqat Sahəsi:</span>
          <span class="text-slate-200 font-mono text-[11px]">${collab.specialty}</span>
        </div>
        ${collab.keySoftware ? `
          <div class="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span class="font-bold text-teal-400">Alətlər & Proqramlar:</span>
            <span class="text-teal-200 font-mono text-[11px]">${collab.keySoftware}</span>
          </div>
        ` : ''}
        ${collab.keyPublications ? `
          <div class="pt-0.5 text-slate-400 italic text-[11px]">
            <span class="font-bold text-amber-400 not-italic">Əsas Nəşr:</span> ${collab.keyPublications}
          </div>
        ` : ''}
      `;
    }

    // Tailored Subject & Body (Azerbaijani vs English)
    const isLocalOrDiaspora = collab.location.includes("Azərbaycan") || collab.id === "garib-murshudov" || collab.id === "suleyman-hajizadeh";

    let defaultSubject = "";
    let defaultBody = "";

    if (isLocalOrDiaspora) {
      defaultSubject = `[CarboxMol Bioinformatika Klubu] Elmi Əməkdaşlıq, Qonaq Mühazirə və Mentorluq Təklifi`;
      defaultBody = `Hörmətli ${collab.name},

Qərbi Kaspi Universiteti (Western Caspian University, Bakı) Bioinformatika Klubu adından Sizi dərin hörmət və ehtiramla salamlayırıq.

Sizin ${collab.specialty} sahəsində apardığınız fundamental tədqiqatları, elmi nəşrləri və gənc mütəxəssislərin yetişdirilməsindəki xidmətlərinizi klubumuzun üzvləri və gənc tədqiqatçıları böyük maraq və fəxrlə izləyirlər.

Universitetimizin bioinformatika, struktur biologiyası, genomika və biotibb ixtisasları üzrə təhsil alan tələbələri və gənc elmi işçiləri üçün Sizinlə:
1. Klubumuzun CarboxMol BioMeet platformasında və ya əyani laboratoriyamızda qonaq seminar/ustad dərsi (Guest Lecture),
2. Tələbə tədqiqat layihələrinə və beynəlxalq müsabiqələrə elmi rəy/mentorluq,
3. Birgə elmi məqalə və hesablama biologiyası qrantları çərçivəsində tərəfdaşlıq etmək bizim üçün ən böyük şərəf olardı.

Tədbir formatı və tarixi Sizin sıx elmi qrafikinizə tam uyğunlaşdırıla bilər.

Əməkdaşlıq təklifimizi nəzərdən keçirdiyiniz üçün Sizə öncədən dərin minnətdarlığımızı bildiririk.

Hörmət və ehtiramla,
Süleyman Mehdi oğlu Hacızadə
Qərbi Kaspi Universiteti Bioinformatika Klubunun Sədri
AR ETN MBİ (IMB - Institute of Molecular Biology) Hesablama Struktur Biologiyası Laboratoriyasında Tədqiqatçı
E-poçt: suleyman.hacizade.232bioing@wcu.edu.az
Vebsayt: https://carboxmol-bioinformatics-club.github.io/`;
    } else {
      defaultSubject = `[CarboxMol Bioinformatics Club] Scientific Collaboration & Guest Lecture Proposal: ${collab.name}`;
      defaultBody = `Dear ${collab.name},

Greetings from the Western Caspian University (WCU) Bioinformatics Club in Baku, Azerbaijan.

Our student research community and young computational biologists actively follow and study your pioneering contributions in ${collab.specialty}. Your groundbreaking work and software tools (${collab.keySoftware || 'computational biology tools'}) form a core inspiration for our annual curriculum and student research projects.

We would be deeply honored to invite you for an online guest lecture (via our interactive CarboxMol BioMeet platform) or to explore potential academic collaboration with our young researchers in:
- Computational structural biology, molecular modeling, and genomics data science
- Feedback and mentorship on student research papers and open-source bio-tools
- Collaborative student exchange and scientific webinars

We would gladly accommodate any date and schedule that best fits your availability.

Thank you very much for your time, consideration, and leadership in advancing open computational life sciences.

Warm regards,
Suleyman Hajizadeh
President & Founder, CarboxMol Bioinformatics Club
Researcher, Computational Structural Biology Laboratory, Institute of Molecular Biology (IMB / MBİ)
Western Caspian University, Baku, Azerbaijan
Email: suleyman.hacizade.232bioing@wcu.edu.az
Portal: https://carboxmol-bioinformatics-club.github.io/`;
    }

    if (subjectEl) subjectEl.value = defaultSubject;
    if (bodyEl) bodyEl.value = defaultBody;

    modal.classList.remove("hidden");
  },

  closeInviteModal() {
    const modal = document.getElementById("collabInviteModal");
    if (modal) modal.classList.add("hidden");
  },

  copyInviteEmail() {
    if (!this.selectedCollaborator || !this.selectedCollaborator.email) {
      showToast("E-poçt ünvanı mövcud deyil.", "warning");
      return;
    }
    navigator.clipboard.writeText(this.selectedCollaborator.email).then(() => {
      showToast(`${this.selectedCollaborator.email} kopyalandı!`, "success");
    });
  },

  copyInviteBody() {
    const bodyEl = document.getElementById("inviteBodyTextarea");
    if (!bodyEl) return;
    navigator.clipboard.writeText(bodyEl.value).then(() => {
      showToast("Dəvət məktubu mətni kopyalandı!", "success");
    });
  },

  openMailClient() {
    if (!this.selectedCollaborator || !this.selectedCollaborator.email) {
      showToast("E-poçt ünvanı mövcud deyil.", "warning");
      return;
    }
    const subject = encodeURIComponent(document.getElementById("inviteSubjectInput")?.value || "");
    const body = encodeURIComponent(document.getElementById("inviteBodyTextarea")?.value || "");
    window.open(`mailto:${this.selectedCollaborator.email}?subject=${subject}&body=${body}`, "_blank");
  },

  // Propose New Collaborator
  openProposeModal() {
    const modal = document.getElementById("collabProposeModal");
    if (modal) modal.classList.remove("hidden");
  },

  closeProposeModal() {
    const modal = document.getElementById("collabProposeModal");
    if (modal) modal.classList.add("hidden");
  },

  submitNewCollaborator(e) {
    e.preventDefault();
    const name = document.getElementById("propCollabName")?.value.trim();
    const title = document.getElementById("propCollabTitle")?.value.trim();
    const institution = document.getElementById("propCollabInstitution")?.value.trim();
    const location = document.getElementById("propCollabLocation")?.value.trim();
    const field = document.getElementById("propCollabField")?.value;
    const specialty = document.getElementById("propCollabSpecialty")?.value.trim();
    const email = document.getElementById("propCollabEmail")?.value.trim();
    const website = document.getElementById("propCollabWebsite")?.value.trim();
    const bio = document.getElementById("propCollabBio")?.value.trim();

    if (!name || !institution || !specialty) {
      showToast("Zəhmət olmasa tələb olunan məlumatları doldurun.", "warning");
      return;
    }

    const newCollab = {
      id: `collab-${Date.now()}`,
      name: name,
      title: title || "Tədqiqatçı Alim",
      institution: institution,
      location: location || "Beynəlxalq",
      field: field || "Struktur Biologiyası",
      specialty: specialty,
      badge: "Yeni Əməkdaş Təklifi",
      badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`,
      email: email || "",
      labUrl: website || "",
      scholarUrl: "",
      clubStatus: "Tələbə/Müəllim tərəfindən təklif edilib",
      bio: bio || `${institution} müəssisəsində ${specialty} üzrə çalışan mütəxəssis.`,
      cooperationAreas: ["Klub üzvləri ilə elmi görüş və mentorluq"]
    };

    const data = getClubData();
    if (!data.collaborators) data.collaborators = [];
    data.collaborators.unshift(newCollab);
    saveClubData(data);

    this.renderCollaborators();
    this.closeProposeModal();
    showToast(`${name} əməkdaşlar şəbəkəsinə uğurla əlavə edildi!`, "success");
    e.target.reset();
  },

  bindSearchAndFilter() {
    const searchInput = document.getElementById("collaboratorsSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderCollaborators();
      });
    }
  }
};

// Global Export
if (typeof window !== "undefined") {
  window.CollaboratorsEngine = CollaboratorsEngine;
  window.INITIAL_COLLABORATORS = INITIAL_COLLABORATORS;
}
