---
title: REFMAC5 — Makromolekulyar Dəqiqləşdirmə Proqram Təminatı
category: entity
type: software / scientific pipeline
tags: [refmac5, ccp4, crystallography, cryo-em, garib-murshudov, maximum-likelihood]
updated: 2026-10-27
sources: ["raw/garib_murshudov_seminar_oct2026.md"]
---

# 💻 REFMAC5: Makromolekulyar Struktur Refinement Proqramı

**REFMAC5** — [[mrc_lmb_cambridge|MRC Laboratory of Molecular Biology]] alimi [[garib_murshudov|Prof. Qərib Mürşüdov]] və həmkarları tərəfindən hazırlanmış, CCP4 (*Collaborative Computational Project No. 4*) paketinin əsas kristalloqrafik və Cryo-EM dəqiqləşdirmə mühərrikidir.

* **Əsas Təyinatı:** Təcrübi difraksiya amplitudaları və ya Cryo-EM 3D xəritələri əsasında atom koordinatlarını ($x, y, z$), atomik yerdəyişmə parametrlərini ($B$-faktorları) və doluluq dərəcələrini (*occupancy*) qlobal minimuma çatdırmaq.
* **Metodologiya:** [[bayesian_statistics_in_structural_biology|Maksimum Oxşarlıq (Maximum Likelihood)]] hədəf funksiyası və Bayes stereokimyəvi Prior məhdudiyyətləri.

---

## ⚙️ REFMAC5-in Əsas Riyazi Mexanizmləri

1. **Hədəf Funksiyası (Target Function):**
   $$Q = -\ln L_{\text{X-ray}} + w_{\text{geom}} \cdot E_{\text{geom}}$$
   Burada $L_{\text{X-ray}}$ təcrübi məlumatların ehtimal paylanması, $E_{\text{geom}}$ kimyəvi rabitələrin idealdan meyl enerjisi, $w_{\text{geom}}$ isə çəki əmsalıdır.
2. **TLS (Translation-Libration-Screw) Modelləşdirməsi:**
   Domenlərin bütöv bir bərk cisim kimi termal rəqslərini bir neçə parametr ilə ifadə edərək parametrlərin sayını kəskin azaldır və modelin over-fitting olmasını önləyir.
3. **Twin və Anomaliya Korreksiyası:**
   Kristal əkizləşməsi (*crystal twinning*) olan mürəkkəb hallarda difraksiya intensivliklərini avtomatik ayırır.

---

## 🔗 Əlaqəli Səhifələr
* [[garib_murshudov]]
* [[bayesian_statistics_in_structural_biology]]
* [[macromolecular_crystallography]]
* [[electron_density_maps]]
