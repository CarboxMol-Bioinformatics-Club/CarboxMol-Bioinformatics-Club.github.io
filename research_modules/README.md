# CarboxMol Bioinformatika Klubu — Açıq Mənbəli Tədqiqat və Tədris Resursları
# CarboxMol Bioinformatics Club — Open Source Research & Learning Benchmarks

Bu qovluq CarboxMol Bioinformatika Klubunun elmi araşdırma, tədris laboratoriyaları və platforma inkişafı məqsədilə öyrəndiyi və inteqrasiya etdiyi açıq mənbəli layihələri ehtiva edir. Bütün müəllif hüquqları və lisenziyalar orijinal müəlliflərinə aiddir və akademik/təhsil məqsədləri üçün istifadə olunur.

This directory contains open-source research and club architecture modules curated and benchmarked by the CarboxMol Bioinformatics Club for educational, research, and platform enhancement purposes. All original intellectual property and open-source licenses are preserved.

---

## 1. OpenKBC Dağınıq Skleroz (Multiple Sclerosis) Multi-Omics Platforması
* **Orijinal Müəllif:** Junhee Yoon (OpenKBC, 2021–2022)
* **Lisenziya:** MIT License
* **Qovluq:** `research_modules/openkbc_multiple_sclerosis/`
* **Məzmun və Tədqiqat Modulları:**
  1. `activation-score-batch-image/`: Gen ekspressiyası verilənlərindən gen dəstlərinin aktivasiya Z-balının (Z-Score) hesablanması alqoritmi (`get_zscore.py`).
  2. `deg-pipeline-batch-image/`: Diferensial Gen İfadəsi (DEG) və DESeq2 R boru xətti.
  3. `feature-extraction-batch-image/`: DESeq2 normallaşdırılması və xüsusiyyətlərin çıxarılması (`deseq2_norm.R`).
  4. `snakemake-gui-controller/`: Snakemake əsaslı hesablama boru xətlərinin GUI idarəetməsi.
  5. `snakemake-gui-controller-image/`: REST API və icra mühiti nəzarətçisi.
  6. `multiple_sclerosis_AWSmodule/`: Bulud hesablama (AWS Batch, Lambda, SageMaker) arxitekturası.
  7. `multiple_sclerosis_proj/`: Dağınıq skleroz üzrə inteqrasiya olunmuş multi-omics tədqiqat layihəsi.
  8. `multiple_sclerosis_proj_notebook/`: Jupyter tədris dəftərləri (R və Python ilə DEG, Volcano plot, istilik xəritələri).
* **CarboxMol İnteqrasiyası:**
  - CarboxMol BioTools daxilində interaktiv **"Gen Ekspressiyası Z-Balı və Diferensial Analiz Workbench-i" (Gene Expression Z-Score & DEG Workbench)**.
  - 28 Həftəlik Akademik Sillabusun II Semestrində (Həftə 19–23) **Dağınıq Skleroz (Multiple Sclerosis) Multi-Omics Case Study** kimi tədris olunması.

---

## 2. CampusClubs — Tələbə Klubu İdarəetmə Memarlığı
* **Orijinal Müəlliflər:** Muhammed Oguz & Süleyman Gölbol (Gebze Texniki Universiteti / Gebze Technical University, 2023)
* **Lisenziya:** MIT License
* **Qovluq:** `research_modules/campusclubs_architecture/CampusClubs/`
* **Məzmun və Modullar:**
  - `client/`: Next.js / TypeScript əsaslı tələbə klubu idarəetmə interfeysi.
  - `server/`: .NET Core REST API, klub tədbirləri, üzv qeydiyyatı və bildiriş arxitekturası.
* **CarboxMol İnteqrasiyası:**
  - CarboxMol Bioinformatika Klubunun daxili **Canlı Elanlar və Bildirişlər Paneli (Live Club Announcements & Notice Board)**.
  - **Tədbirə Qeydiyyat və İştirakçı Təsdiqi (Event RSVP & Attendance Tracking)**.
  - Akademik mentor / məsləhətçi və tələbə əlaqələndirmə mexanizmləri.

---

## Müəllif Hüquqları və Etik Bəyannamə / Copyright & Ethical Statement
Bu modullar kommersiya məqsədi daşımır, yalnız Qərbi Kaspi Universiteti və digər universitetlərin biologiya, biotexnologiya və İT tələbələrinə müasir hesablama biologiyası boru xətlərini və tələbə elmi təşkilatçılığını praktiki şəkildə aşılamaq məqsədilə tədqiq edilmiş və klub platformasına inteqrasiya olunmuşdur.

These modules are utilized strictly for non-commercial educational, scientific benchmarking, and academic training purposes within the CarboxMol Bioinformatics Club at Western Caspian University and partner institutions.
