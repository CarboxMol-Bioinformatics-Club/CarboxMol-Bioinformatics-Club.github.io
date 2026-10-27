# QƏRBİ KASPİ UNİVERSİTETİ (WESTERN CASPIAN UNIVERSITY)
## "WCU BIOINFORMATICS CLUB" (WCU BİOİNFORMATİKA KLUBU)
### 2026/2027 TƏDRİS İLİ ÜÇÜN İLLİK FƏALİYYƏT PLANI VƏ GENİŞLƏNDİRİLMİŞ TƏDRİS SİLLABUSU

---

### I. KURS HAQQINDA ÜMUMİ MƏLUMAT VƏ TƏDRİS KONSEPSİYASI

* **Təşkilatçı:** Qərbi Kaspi Universiteti Bioinformatika Klubu
* **Elmi Rəhbər və Təlimçi:** Süleyman Mehdi oğlu Hacızadə (Western Caspian University, Biologiya 2021–2026, V kurs / Azərbaycan Respublikası Elm və Təhsil Nazirliyinin Molekulyar Biologiya İnstitutunun (MBİ / IMB - Institute of Molecular Biology) Hesablama Struktur Biologiyası Laboratoriyasında Bioinformatika Mütəxəssisi)
* **Müddət:** 2 Semestr (28 Həftəlik Akademik Təqvim + 1 Həftəlik Qış İntensiv Məktəbi)
* **Tədris Formatı:** Hibrid (Universitet Kompüter Laboratoriyasında əyani vorkşoplar, interaktiv seminar dərsləri və GitHub/Google Colab üzərindən praktiki kodlaşdırma)
* **İş Formatı və Metodologiya:** **Komanda İşi (Teamwork & Pair-Programming)** — Bütün fəaliyyət planı üzrə praktiki tapşırıqlar, alqoritmik kodlaşdırma və elmi layihələr tələbə komandaları şəklində birgə icra ediləcəkdir.
* **Hədəf Auditoriyası:** Biologiya, Biotexnologiya, Kompüter Elmləri, İnformasiya Texnologiyaları və əlaqəli ixtisasların bakalavr və magistr tələbələri.
* **İlkin Tələblər:** İlkin proqramlaşdırma təcrübəsi tələb olunmur. Biologiya tələbələri üçün sıfırdan proqramlaşdırma, İT tələbələri üçün isə təməl molekulyar biologiya konseptləri paralel tədris olunur.

---

### II. TƏLİM NƏTİCƏLƏRİ VƏ ƏLDƏ OLUNACAQ BACARIQLAR (LEARNING OUTCOMES)

Bu proqramı uğurla tamamlayan klub üzvləri aşağıdakı bilik və səriştələrə yiyələnəcəklər:
1. **Bioinformatik Alqoritmlər və Skriptləşdirmə:** Python və R proqramlaşdırma dillərində bioloji verilənlər dəstlərini müstəqil şəkildə təmizləmək, analiz etmək və avtomatlaşdırmaq;
2. **Omics Məlumat Bazaları ilə Peşəkar İş:** NCBI, Ensembl, UniProt, PDB və TCGA platformalarından genetik və zülal məlumatlarını proqram təminatı vasitəsilə sorğulamaq;
3. **Ardıcıllıq və Genom Analizi:** DNT/RNT sekvenslərinin qlobal və lokal hizalanması (Needleman-Wunsch, Smith-Waterman, BLAST), NGS ardıcıllıqlarının ilkin keyfiyyət analizi və mutasiya aşkarlanması;
4. **Struktur Biologiyası və Dərman Dizaynı:** AlphaFold və ESMFold ilə zülalların 3D modellərini proqnozlaşdırmaq, PyMOL, UCSF ChimeraX, Coot, GemmiMol və klubumuzun yerli inkişaf etdirdiyi **Carbox / CarboxMol** proqramları ilə zülal-liqand qarşılıqlı təsirlərini, kristalloqrafik koordinatları və 3D biomolekulyar konformasiyaları vizuallaşdırmaq, AutoDock Vina ilə molekulyar dokinq həyata keçirmək (Xüsusi Qeyd: Carbox və CarboxMol proqramlarının müəllifləri **Süleyman Hacızadə** və **Prof. Qərib Mürşüdovdur**; hələ ki, rəsmi nəşr edilmədiyi üçün klubun daxili elmi aləti və workbench-i olaraq istifadə olunur və yalnız Süleyman Hacızadə və Prof. Qərib Mürşüdov tərəfindən izah edilə və tədris oluna bilər);
5. **Transkriptomika və Diferensial Ekspressiya:** R/Bioconductor və DESeq2 vasitəsilə RNA-seq məlumatlarını analiz edərək Volcano plot, istilik xəritələri (Heatmaps) və PCA qrafikləri qurmaq;
6. **Süni İntellekt və Biotibb:** Scikit-learn kitabxanası ilə xərçəng və genetik xəstəliklərin biomarkerlərini aşkar edən maşın öyrənməsi (ML) modellərini qurmaq;
7. **Elmi Tədqiqat və Komanda Hakatonu:** Real kliniki/bioloji məlumatlar üzərində komanda şəklində layihə işləmək, beynəlxalq "Journal Club" məqalələrini təhlil etmək və elmi nəticələri poster şəklində müdafiə etmək.

---

### III. I SEMESTR (PAYIZ): "Foundations of Computational Biology & Structural Genomics"
**Fokus:** Nəzəri təməl, Linux əmrləri, Python/Biopython proqramlaşdırması və zülalların 3D struktur analizi.

| Həftə | Mövzu və Modul | Nəzəri Məzmun | Praktiki Laboratoriya və Tapşırıq | İstifadə Olunan Alətlər |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Böyük Açılış və Məlumat Sessiyası (Info-Session)** | Bioinformatika nədir? Müasir genomika, fərdiləşdirilmiş tibb və rəqəmsal biologiyanın gələcəyi. | Tələbə qeydiyyatlarının təsdiqi, fərdi inkişaf hədəflərinin müəyyənləşdirilməsi. | Google Colab, GitHub |
| **02** | **Linux Terminalı və Bash Scripting** | Əməliyyat sistemləri, fayl strukturları, axınların yönləndirilməsi (pipes) və avtomatlaşdırma məntiqi. | Böyük bioloji fayllarla iş: `grep`, `awk`, `sed`, `sort`, `uniq`, `cut` əmrləri ilə FASTA süzgəci. | Ubuntu/WSL, Bash terminal |
| **03** | **Bioloji Verilənlər Bazaları və Formatlar** | GenBank, RefSeq, UniProt, PDB. Əsas fayl standartları: FASTA, FASTQ, SAM/BAM, GFF3, VCF. | NCBI Entrez axtarış sistemi, UniProt-dan funksional annotasiyaların çıxarılması. | NCBI Nucleotide, UniProtKB |
| **04** | **Python ilə Bioinformatikaya Giriş** | Python sintaksisi, dəyişənlər, şərtlər, dövrlər, funksiyalar və siyahılar (Lists, Dictionaries). | DNT ardıcıllığının uzunluğu, GC faizinin hesablanması və transkripsiya skriptinin yazılması. | Python 3, VS Code / Colab |
| **05** | **Biopython Kitabxanası: Əsas Modullar** | `Bio.Seq`, `Bio.SeqRecord` obyektləri. Komplementar zəncir, kodon cədvəli və translyasiya. | Naməlum DNT fraqmentindən 6 oxuma çərçivəsində (Reading Frames) açıq oxu çərçivələrinin (ORF) tapılması. | Biopython (`Bio.Seq`) |
| **06** | **Fayl Emalı və FASTA Parserləri** | `Bio.SeqIO` modulu ilə böyük genom fayllarının emalı. FASTQ keyfiyyət xalları (Phred score). | Çoxsaylı gen sekvenslərini ehtiva edən faylların süzülməsi və GC faizinə görə çeşidlənməsi. | Biopython (`Bio.SeqIO`) |
| **07** | **Ardıcıllıqların Hizalanması (Alignment)** | Qlobal və lokal hizalama nəzəriyyəsi. Needleman-Wunsch və Smith-Waterman alqoritmləri. | Dinamik proqramlaşdırma matrislərinin qurulması, əvəzetmə matrisləri (BLOSUM62, PAM250). | Python, EMBOSS Needle/Water |
| **08** | **BLAST Alqoritmi və Verilənlər Axtarışı** | Hevristik axtarış, E-value statistikası, Bit-score. `blastn`, `blastp`, `blastx`, `tblastn`. | `Bio.Blast.NCBIWWW` ilə avtomatlaşdırılmış mutasiyalı gen axtarışı və homoloqların tapılması. | NCBI BLAST+, Biopython |
| **09** | **Journal Club #1: Elmi Müzakirə** | CRISPR-Cas9 gen redaktəsində kompüter alətlərinin rolu və off-target mutasiyaların proqnozu. | Beynəlxalq Nature/Science məqaləsinin tələbələr tərəfindən slaydlarla tənqidi təhlili. | Elmi Məqalə Təqdimatı |
| **10** | **Struktur Bioinformatikası Əsasları** | Zülalların 1-ci, 2-ci və 3-cü dərəcəli quruluşu. Peptid rabitələri, Ramachandran sahəsi. | RCSB PDB bazasından koordinat fayllarının oxunması və `Bio.PDB` modulu ilə atom məsafələri. | RCSB PDB, `Bio.PDB` |
| **11** | **3D Vizuallaşdırma və Struktur Laboratoriyası (PyMOL, ChimeraX, Coot, GemmiMol, Carbox & CarboxMol)** | Struktur vizuallaşdırma prinsipləri, hidrogen rabitələri, elektrostatik səthlər, elektron sıxlığı və aktiv mərkəz. Beynəlxalq proqramlar (PyMOL, ChimeraX, Coot, GemmiMol) və klubumuzun yerli elmi inkişafı olan **Carbox** (makromolekulyar koordinat və həndəsi analiz mühərriki) və **CarboxMol** (interaktiv 3D biomolekulyar vizualizator) alətlərinin iş prinsipləri və tədrisi (Müəlliflər: Süleyman Hacızadə və Prof. Qərib Mürşüdov; daxili workbench statusunda yalnız onlar tərəfindən izah olunur). | SARS-CoV-2 Spike zülalı və ya insan insulininin 3D vizuallaşdırılması, mutasiyaların rənglənməsi; PyMOL, ChimeraX, Coot, GemmiMol, Carbox və CarboxMol vasitəsilə koordinatların təhlili. | PyMOL, UCSF ChimeraX, Coot, GemmiMol, Carbox, CarboxMol (Hamısı tədris ediləcək) |
| **12** | **AlphaFold & AI Struktur İnqilabı** | Dərin neyron şəbəkələri ilə zülal bükülməsinin proqnozu. pLDDT etibarlılıq və PAE qrafikləri. | AlphaFold Protein Structure Database-dən modellərin endirilməsi və eksperimental PDB ilə tutuşdurulması. | AlphaFold DB, ColabFold |
| **13** | **Filogenetik Analiz və Təkamül Ağacları** | Çoxsaylı hizalama (MSA), Clustal Omega, MUSCLE. UPGMA və Neighbor-Joining ağacqurma metodları. | Fərqli növlərin hemoqlobin zülalları əsasında filogenetik təkamül ağacının qurulması. | Clustal Omega, MEGA, FigTree |
| **14** | **Semestr Sonu Qiymətləndirməsi və Bio-Quiz** | I Semestrdə keçilmiş bütün modulların təkrarı, komanda layihələrinin ilkin hesabatı. | İnteraktiv "Bio-Quiz" bilik yarışması, ən fəal tələbələrin rəsmi sertifikatla mükafatlandırılması. | Kahoot / Bio-Quiz Platforması |

---

### IV. QIŞ FASİLƏSİ İNTENSİV MƏKTƏBİ (WINTER INTENSIVE CAMP)
* **Tədbir:** "Genomics & Python Winter Coding Camp" (Yanvar ayının son həftəsi)
* **Format:** 3 günlük laboratoriya marafonu (gündə 3 saat).
* **Məzmun:** Rosalind.info bioinformatika alqoritmik məsələlərinin canlı həlli, GitHub anbarının idarə olunması və komanda layihələrinin git budaqları üzərində kodlanması.

---

### V. II SEMESTR (YAZ): "Applied Omics Data Science, AI & Student Research Hackathon"
**Fokus:** R/Bioconductor, RNA-seq transkriptomikası, maşın öyrənməsi, molekulyar dokinq və illik Hakaton.

| Həftə | Mövzu və Modul | Nəzəri Məzmun | Praktiki Laboratoriya və Tapşırıq | İstifadə Olunan Alətlər |
| :---: | :--- | :--- | :--- | :--- |
| **15** | **R Dili və RStudio Ekosisteminə Giriş** | R dilinin xüsusiyyətləri, vektorlaşdırılmış əməliyyatlar, Data Frame, `dplyr` və `tidyr` paketləri. | Bioloji ölçmə cədvəllərinin təmizlənməsi, filtrlənməsi və statistik xülasəsi. | RStudio, Tidyverse |
| **16** | **R qrafikləri və ggplot2 ilə Vizuallaşdırma** | Qrafiklərin qrammatikası (Grammar of Graphics). Nəşr səviyyəli elmi illüstrasiyaların hazırlanması. | Gen ifadə paylanmaları üçün Boxplot, Scatterplot və Density qrafiklərinin tərtibi. | R, `ggplot2` |
| **17** | **Bioconductor və Genomik İnfrastruktur** | Bioconductor arxitekturası, `GenomicRanges`, `SummarizedExperiment` obyektləri. | Genom koordinatları ilə iş, ekzon və gen annotasiyalarının kəsişdirilməsi. | R Bioconductor, `GRanges` |
| **18** | **NGS Texnologiyaları və Keyfiyyət Nəzarəti** | İkinci və üçüncü nəsil sekvensləmə (Illumina, Oxford Nanopore). FASTQ fayl keyfiyyəti. | `FastQC` ilə keyfiyyət analizi və `Trimmomatic` ilə adaptor ardıcıllıqlarının təmizlənməsi. | FastQC, Trimmomatic, MultiQC |
| **19** | **RNA-Seq: Oxunuşların Genoma Uyğunlaşdırılması** | Referans genom, indeksləmə, splice-aware hizalama alqoritmləri (STAR, HISAT2). | DNT oxunuşlarının (reads) insan xromosomuna uyğunlaşdırılması və BAM fayllarının əldə edilməsi. | HISAT2 / STAR, Samtools |
| **20** | **Diferensial Gen İfadəsi (DGE Analizi)** | Sayım məlumatları (Read Counts), normallaşdırma metodları (TPM, FPKM, DESeq2 median of ratios). | Normal və xərçəng toxumaları arasında əhəmiyyətli dərəcədə fərqlənən genlərin aşkarlanması. | `DESeq2`, `edgeR` |
| **21** | **Qabaqcıl RNA-Seq Vizuallaşdırması** | Çoxölçülü məlumatların reduksiyası (PCA). P-dəyəri və Fold Change nisbəti. | Volcano plot (əhəmiyyətli genlərin vurğulanması) və Clustered Heatmap (istilik xəritəsi) qurulması. | `EnhancedVolcano`, `pheatmap` |
| **22** | **Funksional Zənginləşdirmə: GO & KEGG** | Gen Ontologiyası (Bioloji Proses, Molekulyar Funksiya, Hüceyrə Komponenti), Siqnal yolları. | Diferensial genlərin hansı bioloji yollarda zənginləşdiyinin statistik analizi (Over-representation test). | `clusterProfiler`, STRING-DB |
| **23** | **Journal Club #2: Dəqiq Onkologiya** | Xərçəng genomikası, mutasiya yüklənməsi (TMB) və immunoterapiya biomarkerləri. | "Cell" və ya "Lancet Oncology" jurnalından bioinformatik tədqiqat məqaləsinin müzakirəsi. | Elmi Müzakirə Paneli |
| **24** | **Molekulyar Dokinq və Dərman Dizaynı** | Zülal-liqand qarşılıqlı təsirləri, rabitə enerjisi ($\Delta G$), aktiv mərkəz şəbəkəsi. | Məlum inhibitor liqandın hədəf xərçəng zülalına virtual dokinqi və bağlanma enerjisinin təhlili; PyMOL, ChimeraX, Carbox və CarboxMol ilə komplekslərin konformasiya analizi. | AutoDock Vina, PyMOL, UCSF ChimeraX, Carbox, CarboxMol |
| **25** | **Bioinformatikada Maşın Öyrənməsi (ML)** | Supervised / Unsupervised learning, təsnifat (Classification) və klasterləşmə alqoritmləri. | Xərçəng xəstələrinin gen ekspressiyası profilinə əsasən Random Forest və SVM ilə təsnifatı. | Python `scikit-learn` |
| **26** | **WCU Bio-Data Hackathon: Start və Təlimat** | Hakatonun elanı: Tələbə komandalarına real anonimləşdirilmiş xəstəlik verilənlər dəstlərinin təqdimi. | Komandaların formalaşdırılması, iş bölgüsü, hipotezlərin qurulması və məlumatların təmizlənməsi. | Kaggle / GitHub Classroom |
| **27** | **Hakaton: Mentorluq və Layihə İnkişafı** | Mentor saatları: Klub Sədri və dəvət olunmuş elmi tədqiqatçılar tərəfindən komandalara bələdçilik. | Tələbə komandalarının analiz skriptlərinin tamamlanması, elmi nəticələrin və posterlərin hazırlanması. | Kod Yoxlanışı və Mentorluq |
| **28** | **İllik Elmi Sərgi, Təqdimatlar və Müdafiə** | Klubun İllik Yekun Konfransı. Universitet rəhbərliyi, dekanlıq və TGT qarşısında poster müdafiəsi. | Ən yaxşı 3 layihə komandasının mükafatlandırılması, bütün aktiv məzunlara rəsmi sertifikatların təqdimi. | Qərbi Kaspi Universiteti Konfrans Zalı |

---

### VI. TÖVSİYƏ OLUNAN ƏDƏBİYYAT VƏ RESURSLAR

1. **Kitablar:**
   - Compeau, P., & Pevzner, P. (2018). *Bioinformatics Algorithms: An Active Learning Approach*. Active Learning Publishers.
   - Bassi, S. (2017). *Python for Bioinformatics*. CRC Press.
   - Wickham, H., & Grolemund, G. (2017). *R for Data Science*. O'Reilly Media.
   - Mount, D. W. (2004). *Bioinformatics: Sequence and Genome Analysis*. Cold Spring Harbor Laboratory Press.
2. **Onlayn Təhsil Platformaları:**
   - Rosalind (Bioinformatics Track) – https://rosalind.info
   - NCBI Educational Resources – https://www.ncbi.nlm.nih.gov/home/learn/
   - EMBL-EBI Training – https://www.ebi.ac.uk/training/
   - Biostars (Bioinformatics Community) – https://www.biostars.org

---

**Tərtib etdi və Təsdiq üçün təqdim etdi:**  
Təsisçi və Klub Sədri: **Süleyman Mehdi oğlu Hacızadə**  
İmza: _______________________  
Tarix: ____ / ____ / 2026-cı il
