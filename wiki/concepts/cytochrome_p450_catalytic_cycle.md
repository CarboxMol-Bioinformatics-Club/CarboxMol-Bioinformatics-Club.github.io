---
title: Sitoxrom P450 Katalitik Tsikli (Cytochrome P450 Catalytic Cycle)
category: concept
type: biochemical mechanism
tags: [cytochrome-p450, catalytic-cycle, cyp1a1, heme, compound-i, oxidation, hydroxylation, 4i8v]
updated: 2026-10-28
sources: ["raw/club_curriculum_and_annual_plan.md"]
---

# ⚙️ Sitoxrom P450 Katalitik Tsikli (Cytochrome P450 Catalytic Cycle)

Sitoxrom P450 (CYP) fermentləri (məsələn, [[pdb_4i8v_cyp1a1|CYP1A1]]) molekulyar oksigen ($O_2$) və NADPH-dən gələn 2 elektron hesabına hidrofob substratların $C-H$ rabitəsini qıraraq ora bir oksigen atomu daxil edir (monooksigenaza reaksiyası):

$$\text{R-H} + \text{O}_2 + \text{NADPH} + \text{H}^+ \longrightarrow \text{R-OH} + \text{H}_2\text{O} + \text{NADP}^+$$

---

## 🔄 8 Mərhələli Katalitik Tsikl

```mermaid
flowchart TD
    S1["1. Sərbəst Ferment [Fe³⁺ - H₂O]"] -->|Substrat (R-H) Bağlanır| S2["2. Substrat Kompleksi [Fe³⁺ - RH] (High-spin)"]
    S2 -->|+ 1-ci Elektron (NADPH / CPR)| S3["3. Reduksiya Olunmuş Ferment [Fe²⁺ - RH]"]
    S3 -->|+ Molekulyar O₂| S4["4. Oksi-P450 Kompleksi [Fe²⁺ - O₂ - RH] ↔ [Fe³⁺ - O₂•⁻ - RH]"]
    S4 -->|+ 2-ci Elektron (CPR / Cyt b₅)| S5["5. Peroksi Kompleksi [Fe³⁺ - O₂²⁻ - RH]"]
    S5 -->|+ H⁺ (Protonlaşma)| S6["6. Hidroperoksi Kompleksi [Fe³⁺ - OOH - RH] (Compound 0)"]
    S6 -->|+ H⁺ & - H₂O| S7["7. Reaktiv Oksigen Nüvəsi [Fe⁴⁺ = O]•⁺ (Compound I)"]
    S7 -->|Oksigen Sıçrayışı (Oxygen Rebound)| S8["8. Məhsul Kompleksi [Fe³⁺ - ROH]"]
    S8 -->|- Hidroksilləşmiş Məhsul (R-OH)| S1
```

---

## 🔬 Açar Kimyəvi Varlıq: "Compound I"

* **Quruluş:** Oksiferril porfirin kation radikalı ($[\text{Fe}^{IV}=\text{O}]^{\bullet+}$).
* **Fəaliyyət:** Təbiətdəki ən güclü bioloji oksidləşdiricilərdən biridir. Energetik cəhətdən çox sabit olan alifatik və aromatik $C-H$ rabitələrindən hidrogen atomunu qoparır (*hydrogen abstraction*), sərbəst radikal yaradır və dərhal oksigeni ora köçürür (*oxygen rebound*).
* **Toksikoloji Nəticə:** [[pdb_4i8v_cyp1a1|CYP1A1]] bu güclü reaktivliklə benzo[a]piren kimi maddələri epoksidləşdirərək hüceyrə DNT-sini zədələyən mutasiyalara yol aça bilir.

---

## 🔗 Əlaqəli Səhifələr
* [[pdb_4i8v_cyp1a1]]
* [[macromolecular_crystallography]]
* [[comparative_analysis_cyp1a1_akt1_active_sites]]
* [[carboxmol_studio]]
