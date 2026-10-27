# 🧬 CarboxMol Bioinformatics Club — LLM Wiki Schema & Operating Protocol

> **Sənəd Növü:** Wiki Konstitusiyası və Əməliyyat Təlimatı (Schema)  
> **Təyinatı:** CarboxMol Bioinformatika Klubu və Hesablama Struktur Biologiyası üzrə davamlı bilik bazasının (Persistent Compounding Knowledge Base) idarə edilməsi.  
> **Hədəf Mühit:** Obsidian (vizual interfeys/qraf) + Git (versiya nəzarəti) + LLM Agent (avtonom kurator və tədqiqat köməkçisi).

---

## 1. 🏛️ Üç Qatlı Arxitektura (Three Layers)

1. **`raw/` (Toxunulmaz Mənbələr / Immutable Sources):**
   * Elmi məqalələr (PDF, Markdown), seminar stenoqramları, laboratoriya qeydləri, tədris materialları, PDB məlumat faylları.
   * **Qayda:** LLM bu qovluqdakı sənədləri heç vaxt redaktə etmir və silmir. Bu, mütləq həqiqət mənbəyidir (Ground Truth).

2. **`wiki/` (Canlı Bilik Şəbəkəsi / Compounding Knowledge Artifact):**
   * LLM tərəfindən idarə olunan, çarpaz linklərlə zənginləşdirilmiş Markdown faylları toplusu:
     * `entities/` — Alimlər, institutlar, zülallar, genlər, proqramlar, laboratoriyalar.
     * `concepts/` — Elmi nəzəriyyələr, alqoritmlər, riyazi-statistik metodologiyalar.
     * `summaries/` — Hər bir mənbənin strukturlaşdırılmış icmalı.
     * `synthesis/` — Dərin müqayisələr, kəsişmələr, müzakirələr və yeni fərziyyələr.
   * `index.md` — Vikinin tam məzmun xəritəsi.
   * `log.md` — Append-only xronoloji fəaliyyət jurnalı.

3. **`AGENTS.md` (Bu Sənəd / The Schema):**
   * Agentin viki üzərində hərəkət qaydaları, stil standartları və iş axınları.

---

## 2. ⚡ Əsas Əməliyyat Protokolları (Workflows)

### A. Ingest (Yeni Mənbənin Daxil Edilməsi)
1. **Oxu və Dekonstruksiya et:** Yeni mənbə `raw/` qovluğuna qoyulduqda agent onu dərindən oxuyur.
2. **Xülasə Yaz:** `wiki/summaries/` daxilində mənbənin elmi xülasəsini yaradaraq xam mənbəyə istinad edir.
3. **Varlığı və Konseptləri Yenilə:** 
   * Mənbədə adı keçən zülallar, alimlər və ya alətlər üçün `wiki/entities/` səhifələrini açır və ya mövcud səhifələrə yeni faktları əlavə edir.
   * Müzakirə olunan nəzəriyyələr üçün `wiki/concepts/` səhifələrini zənginləşdirir.
   * Əgər yeni mənbə əvvəlki məlumatlarla ziddiyyət təşkil edirsə, bunu dərhal qeyd edir (`> [!WARNING] Ziddiyyət Qeydi`).
4. **İndeksi və Jurnalı Yenilə:** `wiki/index.md` və `wiki/log.md` fayllarına müvafiq qeydləri əlavə edir.

### B. Query & Compound (Sorğu və Biliyin Toplanması)
1. İstifadəçi elmi və ya klub fəaliyyəti ilə bağlı dərin sual verdikdə:
   * Agent əvvəlcə `wiki/index.md` vasitəsilə əlaqəli səhifələri müəyyənləşdirir və oxuyur.
   * Dərin, elmi cəhətdən əsaslandırılmış və çarpaz istinadlı cavab hazırlayır.
2. Əgər sual və cavab yeni bir elmi müqayisə, sintez və ya təlimat yaradırsa:
   * **Bu cavab çata atılıb itirilmir!**
   * `wiki/synthesis/` daxilində daimi səhifə kimi qeyd edilir (məsələn: `[[crystallographic_bayesian_refinement_in_carboxmol]]`).
   * İndeksə və jurnala daxil edilir.

### C. Lint (Sağlamlıq və Bütövlük Yoxlanışı)
Agent vaxtaşırı viki üzərində analiz aparır:
* **Orphan səhifələr:** Heç bir başqa səhifədən link verilməyən qeydlər.
* **Dead links:** Mövcud olmayan səhifələrə verilmiş keçidlər.
* **Elmi Ziddiyyətlər:** Fərqli mənbələrdən gələn ziddiyyətli iddialar.
* **Bilik Boşluqları:** Çox adı çəkilən, lakin hələ ayrıca səhifəsi olmayan vacib zülallar/konseptlər.

---

## 3. 📝 Format və Əlaqələndirmə Standartları

* **Wikilinks:** Obsidian və Markdown qraf dəstəyi üçün daxili linklər standart fayl adı formatında yazılır (məsələn: `[[garib_murshudov]]`, `[[bayesian_statistics_in_structural_biology]]`).
* **YAML Frontmatter:** Hər viki səhifəsinin başında meta-verilənlər yer alır:
  ```yaml
  ---
  title: Səhifə Başlığı
  category: entity | concept | summary | synthesis
  tags: [bioinformatics, crystallography, wcu]
  updated: YYYY-MM-DD
  sources: ["raw/..."]
  ---
  ```
* **Dil:** Əsas elmi terminlər beynəlxalq standartlara uyğun (ingiliscə terminlərlə yanaşı Azərbaycan dilində izahatla) təqdim olunur.
