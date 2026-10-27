---
title: DESeq2 & Bioconductor — Transkriptomika və Diferensial Ekspressiya
category: entity
type: software / scientific framework
tags: [deseq2, bioconductor, r-project, rna-seq, differential-expression, transcriptomics, curriculum]
updated: 2026-10-27
sources: ["raw/club_curriculum_and_annual_plan.md"]
---

# 📊 DESeq2 & Bioconductor: R ilə Diferensial Gen Ekspressiyası

**DESeq2** — R proqramlaşdırma dili və **Bioconductor** ekosistemi daxilində RNA-seq oxunuş sayları (*read count data*) əsasında genlərin iki və ya daha çox qrup arasında (məsələn, Xərçəng toxuması vs Sağlam toxuma) diferensial ekspressiyasını müəyyən edən qlobal standart paketdir.

* **Əsas Müəlliflər:** Michael I. Love, Wolfgang Huber, Simon Anders (2014)
* **Klub Əlaqəsi:** [[carboxmol_bioinformatics_club|CarboxMol Klubu]] III tədris modulunun əsas praktiki nüvəsidir.

---

## 🔬 Statistik Modeli: Mənfi Binomial Paylanma (Negative Binomial)

RNA-seq məlumatlarında gen oxunuş sayları Poisson paylanmasına uyğun gəlmir, çünki bioloji replikatlar arasında variasiya (dispersion) orta qiymətdən çox yüksək olur (*overdispersion*):

$$K_{ij} \sim \text{NB}(\mu_{ij}, \alpha_i)$$

* $K_{ij}$: $i$-ci genin $j$-ci nümunədəki xam oxunuş sayı.
* $\mu_{ij}$: Gözlənilən orta qiymət.
* $\alpha_i$: Genin dispersiya parametri.

### DESeq2-nin Əsas Addımları:
1. **Ölçü Əmsalı ilə Normallaşdırma (Median of Ratios):** Fərqli sekvensləmə dərinliyini (*sequencing depth*) və kitabxana tərkibini kompensasiya edir.
2. **Dispersiya Təxmini (Empirical Bayes Shrinkage):** Genin dispersiyasını bütün genlərin orta tendensiyasına doğru sıxaraq (*shrinkage*) kiçik nümunə saylarında ($n=3$) saxta pozitivləri aradan qaldırır.
3. **Qrup Müqayisəsi (Wald Test & LRT):** $p$-dəyərləri və $\log_2(\text{Fold Change})$ hesablayır, Benjamini-Hochberg FDR ilə korreksiya edir.

---

## 💻 R Kod Nümunəsi:

```R
library(DESeq2)

# Nümunə təcrübi matrisinin yaradılması
dds <- DESeqDataSetFromMatrix(countData = counts,
                              colData = colData,
                              design = ~ condition)

# Diferensial analizin aparılması
dds <- DESeq(dds)
res <- results(dds, contrast=c("condition", "tumor", "normal"))
resSig <- subset(res, padj < 0.05 & abs(log2FoldChange) > 1)
```

---

## 🔗 Əlaqəli Səhifələr
* [[rna_seq_differential_expression]]
* [[biopython]]
* [[annual_syllabus_breakdown]]
