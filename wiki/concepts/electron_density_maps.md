---
title: Elektron Sıxlığı Xəritələri: 2Fo-Fc və Fo-Fc Fərq Xəritələri
category: concept
type: scientific theory / crystallographic analysis
tags: [crystallography, electron-density, 2fo-fc, fo-fc, fourier-transform, coot, refmac5]
updated: 2026-10-27
sources: ["raw/garib_murshudov_seminar_oct2026.md"]
---

# 🌐 Elektron Sıxlığı Xəritələri: $2F_o - F_c$ və $F_o - F_c$

Rentgen kristalloqrafiyasında rentgen şüaları atom nüvələri tərəfindən deyil, atomları əhatə edən elektron buludları tərəfindən səpilir. Difraksiya məlumatlarının tərs Furye çevrilməsi (*inverse Fourier transform*) birbaşa hüceyrədaxili elektron sıxlığını $\rho(x, y, z)$ verir:

$$\rho(x, y, z) = \frac{1}{V} \sum_{hkl} |F(hkl)| \exp[-2\pi i (hx + ky + lz) + i\alpha(hkl)]$$

---

## 🔬 İki Əsas Xəritə Növü

### 1. $2F_o - F_c$ Xəritəsi (Əsas Struktur Xəritəsi):
* **Riyazi Quruluş:** Təcrübi amplitudaların iki mislindən modelin hesablanmış amplitudasının çıxılması ($2|F_o| - |F_c|$) ilə hesablanır.
* **Məqsəd:** Molekulun real formasını, polipeptid skeletini və yan zəncirlərini göstərir.
* **Konturlama (Contour Level):** Adətən $1.0\sigma - 1.5\sigma$ səviyyəsində konturlanır (mavi tor kimi).
* **Niyə $2F_o - F_c$?** Yalnız $F_o$ götürüldükdə model xətaları güclənir; $2F_o - F_c$ modeli korreksiya edir və faza meylini (*model bias*) minimuma endirir.

### 2. $F_o - F_c$ Fərq Xəritəsi (Difference Map):
* **Riyazi Quruluş:** Təcrübə ilə cari model arasındakı birbaşa fərq ($|F_o| - |F_c|$).
* **Yaşıl Pik ($+3\sigma$):** Təcrübədə olan, lakin modeldə hələ qoyulmamış atomlar (məsələn, unudulmuş su molekulu, kofaktor, liqand və ya yan zəncirin səhv konformasiyası).
* **Qırmızı Pik ($-3\sigma$):** Modeldə olan, lakin təcrübədə mövcud olmayan atomlar (artıq qoyulmuş atom, boşluq).

---

## 📊 Dəqiqlik Metrikaları: $R_{\text{work}}$ və $R_{\text{free}}$

$$R = \frac{\sum ||F_o| - |F_c||}{\sum |F_o|}$$

* **$R_{\text{work}}$:** Modelin qurulmasında istifadə olunan difraksiya ləkələri üzrə xəta (ideal: $< 0.20$).
* **$R_{\text{free}}$:** Model qurularkən tam kənara qoyulmuş (kor rejimdə saxlanılan 5-10% ləkələr) üzrə xəta. $R_{\text{free}}$ və $R_{\text{work}}$ arasındakı fərq $0.05$-dən böyük olmamalıdır; əks halda modeldə *overfitting* var. [[garib_murshudov|Prof. Qərib Mürşüdov]]un [[refmac5|REFMAC5]] aləti Bayes stereokimyəvi məhdudiyyətləri vasitəsilə $R_{\text{free}}$-ni aşağı salmağın əsas vasitəsidir.

---

## 🔗 Əlaqəli Səhifələr
* [[macromolecular_crystallography]]
* [[bayesian_statistics_in_structural_biology]]
* [[refmac5]]
* [[catalytic_carboxyl_dyads]]
