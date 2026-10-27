---
title: Sintez: Bayes Refinement Prinsiplərinin CarboxMol Katalitik Dyad Modelləşdirməsinə Tətbiqi
category: synthesis
type: research synthesis
tags: [synthesis, bayesian-refinement, carboxyl-dyads, carboxmol, protonation, refmac5]
updated: 2026-10-27
sources: ["raw/garib_murshudov_seminar_oct2026.md", "raw/club_curriculum_and_annual_plan.md"]
---

# 💡 Sintez: Bayes Refinement Prinsiplərinin CarboxMol Katalitik Dyad Modelləşdirməsinə Tətbiqi

> **Sintez Məqsədi:** [[garib_murshudov|Prof. Qərib Mürşüdov]]un [[bayesian_statistics_in_structural_biology|Bayes statistikası və Maximum Likelihood refinement]] yanaşması ilə [[carboxmol_studio|CarboxMol]] tədqiqat layihəsinin əsasını təşkil edən [[catalytic_carboxyl_dyads|katalitik karboksil dyadlarının]] dəqiq protonlaşma analizi arasındakı metodoloji körpünü formalaşdırmaq.

---

## 🔬 Problem: Kristalloqrafiyada Görünməyən Proton

Makromolekulyar rentgen kristalloqrafiyasında $1.5\text{ \AA}$ rezolyusiyadan zəif məlumatlarda hidrogen atomunun tək elektronu rentgen şüalarını kifayət qədər səpmir. Nəticədə fermentlərin aktiv mərkəzindəki Aspartat/Qlutamat dyadında:
* Hansı oksigen atomunun proton daşıdığı ($-\text{C-O-H}$),
* Hansı oksigen atomunun isə deprotonlaşmış karbonil ($-\text{C=O}$) və ya karboksilat ($-\text{COO}^-$) olduğu birbaşa $2F_o - F_c$ elektron sıxlığında görünmür.

---

## 📐 Bayes Həlli: Prior və Likelihood Sintezi

[[garib_murshudov|Prof. Qərib Mürşüdov]]un təqdim etdiyi Bayes formulunu bu problemə tətbiq etdikdə:

1. **Prior Biliyi ($P(\text{Model})$):**
   * Neytron difraksiyası və yüksək dəqiqlikli kvant mexaniki (DFT) hesablamalarından məlum olan $\text{C-O}$ və $\text{C=O}$ rabitə uzunluqları paylanması ($\text{C-OH} \approx 1.30\text{ \AA}$, $\text{C=O} \approx 1.21\text{ \AA}$).
   * Qonşu amin turşularının elektrostatik mühiti və hidrogen rabitəsi donor/akseptor həndəsəsi.
2. **Likelihood ($P(\text{Data} \mid \text{Model})$):**
   * Oksigen atomlarının anizotropik B-faktorları və elektron sıxlığının asimmetriyası.
3. **Posterior Nəticə ($P(\text{Model} \mid \text{Data})$):**
   * [[carboxmol_studio|CarboxMol]] aləti üçün protonun dyad daxilində yerləşmə ehtimalının 0–100% şkalasında hesablanması.

---

## 🚀 CarboxMol Klubu Tələbələri üçün Praktiki Nəticə

Bu sintez göstərir ki, CarboxMol layihəsi yalnız vizual 3D alət deyil, eyni zamanda [[mrc_lmb_cambridge|Kembric MRC LMB]] məktəbinin statistik prinsiplərinə əsaslanan dərin elmi tədqiqat boru kəməridir.

---

## 🔗 Əlaqəli Səhifələr
* [[garib_murshudov]]
* [[bayesian_statistics_in_structural_biology]]
* [[catalytic_carboxyl_dyads]]
* [[carboxmol_studio]]
* [[macromolecular_crystallography]]
* [[suleyman_hajizadeh]]
