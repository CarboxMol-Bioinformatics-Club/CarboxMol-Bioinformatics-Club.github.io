---
title: Bayes Statistikası: Struktur Biologiyaya Tətbiqi
category: concept
type: scientific theory / statistical method
tags: [bayesian-statistics, structural-biology, crystallography, cryo-em, maximum-likelihood, refmac5]
updated: 2026-10-27
sources: ["raw/garib_murshudov_seminar_oct2026.md"]
---

# 📐 Bayes Statistikası: Struktur Biologiyaya Tətbiqi

**Bayes statistikası** — rentgen kristalloqrafiyası və Cryo-EM-də makromolekulların 3D atomik modellərinin həlli zamanı qeyri-müəyyənliklərin ehtimallar nəzəriyyəsi ilə riyazi idarə olunması metodudur.

$$P(\text{Model} \mid \text{Məlumat}) = \frac{P(\text{Məlumat} \mid \text{Model}) \cdot P(\text{Model})}{P(\text{Məlumat})}$$

* **$P(\text{Model})$ (Prior Ehtimal):** Əvvəlcədən məlum olan stereokimyəvi qanunauyğunluqlar (rabitə uzunluqları, bucaqlar, Ramachandran sahələri, van der Waals təmasları).
* **$P(\text{Məlumat} \mid \text{Model})$ (Likelihood / Oxşarlıq):** Cari atomik modelin təcrübi difraksiya amplitudaları və ya Cryo-EM sıxlığı ilə nə dərəcədə uzlaşması.
* **$P(\text{Model} \mid \text{Məlumat})$ (Posterior Ehtimal):** Bütün məlumatlar işığında ən optimal və real 3D molekulyar struktur.

---

## 🔬 Niyə Klassik Xətti Metodlardan Üstündür?

1. **Faza Probleminin (Phase Problem) Həlli:** Rentgen kristalloqrafiyasında təcrübə zamanı yalnız intensivliklər (amplitudalar) ölçülür, fazalar isə itir. Bayes yanaşması itirilmiş faza məlumatının ehtimal paylanmasını qurur.
2. **Həddindən Artıq Uyğunlaşmanın (Overfitting) Qarşısının Alınması:** Zəif rezolyusiyalı məlumatlarda atomların sərbəst hərəkət edib səs-küyə (noise) uyğunlaşmasını stereokimyəvi Prior vasitəsilə məhdudlaşdırır.
3. **REFMAC5 Əlaqəsi:** [[garib_murshudov|Prof. Qərib Mürşüdov]] bu prinsipləri **REFMAC5** mühərrikinə inteqrasiya edərək dünya kristalloqrafiyasının əsas standartına çevirmişdir.

---

## 🔗 Əlaqəli Səhifələr
* [[garib_murshudov]]
* [[macromolecular_crystallography]]
* [[catalytic_carboxyl_dyads]]
* [[mrc_lmb_cambridge]]
* [[summary_garib_murshudov_seminar_oct2026]]
