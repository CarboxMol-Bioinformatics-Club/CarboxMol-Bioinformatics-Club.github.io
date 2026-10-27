---
title: CarboxMol Bioinformatika Klubu — İllik Tədris Sillabusu və Modul Bölgüsü
category: curriculum
type: academic syllabus
tags: [curriculum, syllabus, modules, biopython, deseq2, crystallography, alphafold, research]
updated: 2026-10-27
sources: ["raw/club_curriculum_and_annual_plan.md"]
---

# 📚 CarboxMol Bioinformatika Klubu: 1 İllik Akademik Tədris Sillabusu

CarboxMol Bioinformatika Klubunun tədris proqramı tələbələri və gənc tədqiqatçıları ilkin bioloji/proqramlaşdırma bazasından başlayaraq beynəlxalq səviyyədə elmi məqalə hazırlaya biləcək səviyyəyə çatdırmaq üçün 4 semestr və 12 modul üzrə dizayn edilmişdir.

---

## 🗓️ Semestrlər və Modullar

### I Semestr: Bioinformatika Əsasları və Hesablama Alətləri
* **Modul 1: Linux Terminalı və Bio-Hesablama Mühiti**
  * Bash əmrləri, fayl sistemləri, grep/sed/awk ilə böyük mətn fayllarının (FASTA/FASTQ) emalı, Git & GitHub versiya nəzarəti.
* **Modul 2: Python və Biopython Proqramlaşdırması**
  * Python əsasları, `Bio.Seq`, `Bio.SeqIO`, DNT/RNT transkripsiyası, tərcüməsi, ORF axtarışı, cüt ardıcıllıq düzləndirilməsi (Needleman-Wunsch, Smith-Waterman).
* **Modul 3: Bioloji Verilənlər Bazaları və Avtomatlaşdırma**
  * NCBI (GenBank, BLAST), UniProt (zülal domenləri), Ensembl, UCSC Genome Browser, REST API ilə avtomatik data çəkilməsi.

### II Semestr: Genomika və Yüksək Məhsuldarlıqlı Transkriptomika
* **Modul 4: NGS (Next-Generation Sequencing) Məlumatlarının Emalı**
  * Illumina sekvensləmə arxitekturası, FASTQ keyfiyyət nəzarəti (FastQC, Trimmomatic).
* **Modul 5: Referens Genoma Düzləndirmə və Sayım**
  * STAR və HISAT2 ilə splaysinq düzləndirilməsi, SAM/BAM formatları, SAMtools, featureCounts.
* **Modul 6: R və Bioconductor ilə [[deseq2_bioconductor|DESeq2]] Diferensial Ekspressiya**
  * Mənfi binomial paylanma, dispersiya sıxılması, Volcano plot, PCA, p-adj korreksiyaları, Gene Ontology (GO) və KEGG pathway zənginləşdirməsi.

### III Semestr: Hesablama Struktur Biologiyası və Kristalloqrafiya
* **Modul 7: 3D Zülal Strukturları və PDB/mmCIF Formatları**
  * Rentgen kristalloqrafiyası və Cryo-EM prinsipləri, ikili və üçlü strukturlar, Ramachandran sahələri.
* **Modul 8: [[bayesian_statistics_in_structural_biology|Bayes Statistikası]] və Model Refinement ([[refmac5|REFMAC5]])**
  * [[garib_murshudov|Prof. Qərib Mürşüdov]]un metodologiyası: faza problemi, maksimum oxşarlıq, $2F_o-F_c$ və $F_o-F_c$ elektron sıxlıq xəritələrinin oxunması, Coot proqramında model quruculuğu.
* **Modul 9: [[catalytic_carboxyl_dyads|Katalitik Karboksil Dyadları]] və [[carboxmol_studio|CarboxMol]] Studiyası**
  * Asp/Glu dyadlarında hidrogen rabitəsi şəbəkələri, protonlaşma asimmetriyası, allosterik kinaz (`4GV1`) və sitoxrom (`4I8V`) aktiv mərkəz analizləri.

### IV Semestr: Süni İntellekt, Zülal Qatlanması və Elmi Tədqiqat
* **Modul 10: Zülal Qatlanması və Süni İntellekt (AlphaFold & ESMFold)**
  * MSA (Multiple Sequence Alignment) təkamül məlumatları, transformasiya blokları, pLDDT etibarlılıq metrikləri, PAE (Predicted Aligned Error) matrisləri.
* **Modul 11: Molekulyar Dokinq və Virtual Skrininq**
  * AutoDock Vina, liqand-hədəf qarşılıqlı təsirləri, bağlanma enerjisi ($\Delta G$), farmakofor modelləşdirməsi.
* **Modul 12: Beynəlxalq Elmi Məqalə Hazırlığı və Layihə Müdafiəsi**
  * Tələbə tədqiqat qruplarının formalaşması, Q1/Q2 jurnalları üçün məqalə strukturu, beynəlxalq hakaton və müsabiqələrdə iştirak.

---

## 🔗 Əlaqəli Səhifələr
* [[biopython]]
* [[deseq2_bioconductor]]
* [[macromolecular_crystallography]]
* [[bayesian_statistics_in_structural_biology]]
* [[carboxmol_studio]]
