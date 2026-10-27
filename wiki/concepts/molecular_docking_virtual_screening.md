---
title: Molekulyar Dokinq və Virtual Dərman Skrininqi (Molecular Docking & Virtual Screening)
category: concept
type: computational method / drug design
tags: [docking, autodock-vina, virtual-screening, binding-affinity, gibbs-free-energy, pharmacophore, curriculum]
updated: 2026-10-28
sources: ["raw/club_curriculum_and_annual_plan.md"]
---

# 💊 Molekulyar Dokinq və Virtual Skrininq

**Molekulyar dokinq** — kiçik bir kimyəvi molekulun (liqand/dərman namizədi) hədəf makromolekulun (zülal və ya DNT) aktiv və ya allosterik cibinə ən əlverişli 3D istiqamətdə (*pose*) necə oturduğunu və hansı sərbəst enerji ilə bağlandığını hesablayan hesablama metodudur.

---

## ⚡ Əsas Mexanizm və Enerji Funksiyası

Dokinqin əsas məqsədi Gibbs sərbəst bağlanma enerjisini ($\Delta G_{\text{bind}}$) minimuma endirən ən stabil konformasiyanı tapmaqdır:

$$\Delta G_{\text{bind}} = \Delta G_{\text{vdw}} + \Delta G_{\text{hbond}} + \Delta G_{\text{elec}} + \Delta G_{\text{conform}} + \Delta G_{\text{tor}} - \Delta G_{\text{solv}}$$

1. **Axtarış Alqoritmləri (Search Algorithms):**
   * Qeyri-sabit rabitələrin (*torsion angles*) fırladılması: Monte Carlo simulyasiyaları, Genetik Alqoritmlər (LGA - Lamarckian Genetic Algorithm) və ya Broyden-Fletcher-Goldfarb-Shanno (BFGS) lokal axtarışı (**AutoDock Vina**).
2. **Xallama Funksiyası (Scoring Function):**
   * Minlərlə mümkün poza arasından ən real olanı seçmək üçün empirik və ya fizika əsaslı enerji hesablaması (kilo-kalori/mol: $\text{kcal/mol}$). Qiymət nə qədər çox mənfi olarsa (məsələn, $-9.5\text{ kcal/mol}$), bağlanma bir o qədər möhkəmdir.

---

## 🔄 Virtual Skrininq (Virtual Screening - VS)

* **Kitabxana Axtarışı:** Milyonlarla kimyəvi maddə (ZINC20, ChEMBL, PubChem) kompüterdə hədəf zülalın ([[pdb_4i8v_cyp1a1|CYP1A1]], [[pdb_4gv1_akt1|AKT1]]) aktiv cibinə dokinq olunur.
* **Filterləmə:** Lipinski 5 Qaydası (Ro5 - molekulyar kütlə $< 500\text{ Da}$, $\log P < 5$, H-donor $< 5$, H-akseptor $< 10$) və toksiklik filtrləri tətbiq olunaraq laboratoriya sınağı üçün ən perspektivli 10-20 namizəd seçilir.

---

## 🔗 Əlaqəli Səhifələr
* [[allosteric_kinase_inhibition]]
* [[pdb_4i8v_cyp1a1]]
* [[pdb_4gv1_akt1]]
* [[alphafold_and_ai_protein_folding]]
* [[annual_syllabus_breakdown]]
