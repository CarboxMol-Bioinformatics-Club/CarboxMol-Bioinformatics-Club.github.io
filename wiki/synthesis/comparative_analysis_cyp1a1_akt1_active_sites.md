---
title: Müqayisəli Sintez: CYP1A1 (4I8V) və AKT1 (4GV1) Aktiv Mərkəzləri və Dərman Dizaynı Strategiyaları
category: synthesis
type: comparative research synthesis
tags: [synthesis, cyp1a1, akt1, active-site, allosteric, heme, drug-design, carboxmol]
updated: 2026-10-27
sources: ["raw/club_curriculum_and_annual_plan.md"]
---

# 💡 Müqayisəli Sintez: CYP1A1 (4I8V) və AKT1 (4GV1) Aktiv Mərkəzlərinin Fərqi və Terapevtik Əhəmiyyəti

> **Məqsəd:** [[carboxmol_studio|CarboxMol 3D Studiyasında]] əsas nümayiş modelləri kimi seçilmiş iki mühüm terapevtik zülalın — [[pdb_4i8v_cyp1a1|Sitoxrom P450 1A1 (4I8V)]] və [[pdb_4gv1_akt1|AKT1 Kinazının (4GV1)]] — katalitik arxitekturasını, liqand bağlanma mexanizmini və dərman dizaynı prinsiplərini dərindən müqayisə etmək.

---

## 🔬 Müqayisə Cədvəli

| Parametr | Sitoxrom P450 1A1 ([[pdb_4i8v_cyp1a1]]) | AKT1 Kinazı ([[pdb_4gv1_akt1]]) |
| :--- | :--- | :--- |
| **Bioloji Sinif** | Monooksigenaza (Oksidoreduktaza) | Fosfotransferaza (Serin/Treonin Kinaz) |
| **Katalitik Nüvə** | Protoporfirin IX HEM qrupu + $Fe^{3+}$ | ATP-bağlayan cib + Maqnezium ($Mg^{2+}$) koordinasiyası |
| **Açar Katalitik Qalıqlar** | `Cys457` (tiolat liqandı), `Phe123`, `Phe258` | `Asp274` (DFG motivi), `Lys179`, `Glu198` |
| **Katalitik Hərəkət** | Oksigen molekulunun parçalanması və substratın hidroksilləşməsi | $\gamma$-fosfat qrupunun ATP-dən substrat zülalına köçürülməsi |
| **İnhibisiya Strategiyası** | Aktiv mərkəz daxilində HEM dəmirinin koordinativ bloklanması | **Allosterik:** PH və Kinaz domenləri arasında qapalı konformasiyanın dondurulması |
| **Kristalloqrafik Rezolyusiya** | $2.60\text{ \AA}$ | $1.49\text{ \AA}$ (Fövqəladə aydınlıq) |

---

## 🧠 Dərin Elmi Çıxarışlar

1. **Ksenobiotik Uyğunlaşma vs Kinaz Spesifikliyi:**
   * CYP1A1 cibi geniş çeşiddə yastı polisiklik aromatik karbohidrogenləri (PAH) qəbul edə biləcək şəkildə elastik və hidrofobdur. Bu səbəbdən onun inhibitorları (`BHF`) geniş aromatik səthə malikdir.
   * AKT1 isə hüceyrə siqnalının açar qovşağıdır; burada qeyri-spesifik bağlanma fəlakətli toksiklik yaradar. Buna görə `4GV1` strukturundakı allosterik inhibitor (`0XZ`) 500-dən çox kinaz arasından yalnız AKT izoformalarını yüksək seçiciliklə ayırd edir.

2. **Karboksil Dyadları ilə Əlaqə:**
   * AKT1 katalitik döngəsindəki aspartat qalıqları (`Asp274`, `Asp292`) fosforilləşmə zamanı koordinasiyada iştirak edərək [[catalytic_carboxyl_dyads|karboksil qruplarının]] protonlaşma və yük paylanmasının kinaz fəaliyyətində həlledici rol oynadığını göstərir.

---

## 🔗 Əlaqəli Səhifələr
* [[pdb_4i8v_cyp1a1]]
* [[pdb_4gv1_akt1]]
* [[carboxmol_studio]]
* [[catalytic_carboxyl_dyads]]
* [[macromolecular_crystallography]]
