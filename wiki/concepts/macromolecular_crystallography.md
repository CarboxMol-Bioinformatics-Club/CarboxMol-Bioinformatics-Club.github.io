---
title: Makromolekulyar Rentgen Kristalloqrafiyası (Macromolecular X-ray Crystallography)
category: concept
type: experimental and computational method
tags: [crystallography, x-ray, electron-density, structure-determination, pdb, refmac5]
updated: 2026-10-27
sources: ["raw/garib_murshudov_seminar_oct2026.md", "raw/club_curriculum_and_annual_plan.md"]
---

# 💎 Makromolekulyar Rentgen Kristalloqrafiyası

**Makromolekulyar rentgen kristalloqrafiyası (MX)** — zülalların, nuklein turşularının və onların komplekslərinin atomik rezolyusiyada 3D strukturunu təyin etmək üçün istifadə olunan əsas eksperimental və hesablama metodudur.

---

## 🔄 Kristalloqrafik Boru Kəməri (Pipeline)

1. **Kristallaşma:** Təmizlənmiş makromolekulun nizamlı 3D kristal şəbəkəsinin əldə edilməsi.
2. **Difraksiya Ölçülməsi:** Sinxrotron və ya rentgen mənbəyindən istifadə edərək difraksiya ləkələrinin (Braqq əksolunmalarının) qeydə alınması.
3. **Faza Problemi (Phase Problem):** Yalnız intensivliklər ($|F_{obs}|^2$) ölçülür, fazalar ($\alpha$) itir. Molekulyar əvəzetmə (*Molecular Replacement*) və ya eksperimental fazalaşdırma (SAD/MAD) tətbiq olunur.
4. **Elektron Sıxlığı Xəritəsi:** $2F_o - F_c$ və $F_o - F_c$ Furye sintezi xəritələrinin hesablanması.
5. **Model Refinement (Dəqiqləşdirmə):** [[bayesian_statistics_in_structural_biology|Bayes statistikası və Maximum Likelihood]] metodları (xüsusən [[garib_murshudov|Prof. Qərib Mürşüdov]]un **REFMAC5** aləti) vasitəsilə atom koordinatlarının xəritəyə ən dəqiq şəkildə oturdulması.

---

## 🔗 Əlaqəli Səhifələr
* [[bayesian_statistics_in_structural_biology]]
* [[garib_murshudov]]
* [[catalytic_carboxyl_dyads]]
* [[carboxmol_studio]]
