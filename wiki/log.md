# 📜 CarboxMol Bioinformatics Club — Wiki Fəaliyyət Jurnalı (Log)

> Bu sənəd viki üzərində icra olunan bütün əməliyyatların (ingest, query/synthesis, lint) append-only xronoloji jurnalıdır. Format unix alətləri ilə asan axtarış (`grep "^## \[" log.md`) üçün standartlaşdırılmışdır.

---

## [2026-10-27] init | CarboxMol Bioinformatics Club Wiki İnfrastrukturu Quruldu
- **Əməliyyat:** Wiki bazasının və üç qatlı arxitekturanın (`raw/`, `wiki/`, `AGENTS.md`) təsis edilməsi.
- **Yaradılan Sənədlər:**
  - `wiki/AGENTS.md` (Əməliyyat sxemi və qaydalar)
  - `wiki/index.md` (Məzmun kataloqu)
  - `wiki/log.md` (Fəaliyyət jurnalı)
- **Toxunulmaz Mənbələr:** `raw/garib_murshudov_seminar_oct2026.md`, `raw/club_bylaws_and_constitution.md`, `raw/club_curriculum_and_annual_plan.md`.

## [2026-10-27] ingest | Prof. Qərib Mürşüdovun Qərbi Kaspi Universiteti Seminarı
- **Mənbə:** `raw/garib_murshudov_seminar_oct2026.md`
- **Xülasə:** `wiki/summaries/summary_garib_murshudov_seminar_oct2026.md`
- **Toxunulan Varlıqlar:** `wiki/entities/garib_murshudov.md`, `wiki/entities/mrc_lmb_cambridge.md`, `wiki/entities/western_caspian_university.md`.
- **Toxunulan Konseptlər:** `wiki/concepts/bayesian_statistics_in_structural_biology.md`, `wiki/concepts/macromolecular_crystallography.md`.

## [2026-10-27] synthesis | Bayes Refinement Prinsiplərinin CarboxMol Katalitik Dyad Modelləşdirməsinə Tətbiqi
- **Nəticə:** `wiki/synthesis/crystallographic_bayesian_refinement_in_carboxmol.md`
- **Əhatə:** Kembric MRC LMB Bayes statistikası ilə CarboxMol karboksil dyad protonlaşma analizi arasındakı elmi əlaqə quruldu.

## [2026-10-27] ingest | PDB Modelləri və Kristalloqrafik Koordinatların Dərin Təhlili
- **Mənbələr:** `raw/club_curriculum_and_annual_plan.md`, PDB verilənlər bazası (1BNA, 4I8V, 4GV1)
- **Toxunulan Varlıqlar:**
  - `wiki/entities/pdb_1bna_bdna.md` (Drew-Dickerson B-DNT dodekameri, Watson-Crick hidrogen rabitələri, şırımlar)
  - `wiki/entities/pdb_4i8v_cyp1a1.md` (CYP1A1 monooksigenaza, HEM Fe kofaktoru, ksenobiotik aktivasiyası, BHF inhibitoru)
  - `wiki/entities/pdb_4gv1_akt1.md` (İnsan AKT1 Kinazı, PI3K/AKT/mTOR xərçəng siqnalı, 0XZ allosterik inhibitoru)
  - `wiki/entities/refmac5.md` (REFMAC5 Maximum Likelihood kristalloqrafik refinement mühərriki)

## [2026-10-27] ingest | Genomika, Transkriptomika və Platforma Alətləri
- **Toxunulan Varlıqlar və Alətlər:**
  - `wiki/entities/biopython.md` (Biopython ekosistemi, SeqIO, alignment)
  - `wiki/entities/deseq2_bioconductor.md` (R Bioconductor DESeq2, Mənfi Binomial model)
  - `wiki/entities/biomeet_platform.md` (WebRTC və Canvas əsaslı canlı seminar və video-yazı modulu)
  - `wiki/entities/seqanalyzer_tool.md` (Brauzerdaxili sekvens analizi, transkripsiya və ORF tapıcısı)

## [2026-10-27] expand | Dərin Elmi Konseptlər və Proqramlaşdırma Mühəndisliyi
- **Toxunulan Konseptlər və Arxitektura:**
  - `wiki/concepts/electron_density_maps.md` ($2F_o-F_c$ və $F_o-F_c$ fərq xəritələri, R-factor, R-free, sigma konturlama)
  - `wiki/concepts/rna_seq_differential_expression.md` (FASTQ-dan Volcano plot-a qədər tam RNA-seq boru kəməri)
  - `wiki/concepts/pwa_offline_architecture.md` (Service Worker, oflayn keşləmə və sinxronizasiya növbəsi)
  - `wiki/concepts/club_security_and_auth_architecture.md` (Anti-bot honeypot, rate limiting, dual FormSubmit bildirişi)
  - `wiki/architecture/system_architecture.md` (Platformanın tam sistem diaqramı, SPA və WebGL mühəndisliyi)
  - `wiki/curriculum/annual_syllabus_breakdown.md` (4 semestr, 12 modul üzrə 1 illik dərin tədris sillabusu)

## [2026-10-28] expand | Təşkilat Profili, Süni İntellekt Modelləri və Mühəndislik
- **Yaradılan Əsas Sənədlər:**
  - `wiki/entities/carboxmol_bioinformatics_club.md` (Klubun tam təşkilati konstitusiyası və idarəetmə strukturu)
  - `wiki/concepts/allosteric_kinase_inhibition.md` (AKT1 kinom selektivliyi və PH domeni allosterik blokadası)
  - `wiki/concepts/cytochrome_p450_catalytic_cycle.md` (CYP1A1 Compound I və 8 mərhələli monooksigenaza tsikli)
  - `wiki/concepts/alphafold_and_ai_protein_folding.md` (Transformer, Evoformer, IPA, pLDDT və PAE)
  - `wiki/concepts/molecular_docking_virtual_screening.md` (AutoDock Vina, $\Delta G_{\text{bind}}$ və Lipinski 5 qaydası)
  - `wiki/curriculum/journal_club_framework.md` (20 dəqiqəlik elmi məqalə təhlil və tənqid çərçivəsi)
  - `wiki/architecture/database_and_state_management.md` (Local-first state, IndexedDB, localStorage, BroadcastChannel)
  - `wiki/architecture/molstar_webgl_rendering_pipeline.md` (Mol* WebGL şeyderləri, dərinlik dumanı, orientasiya tripodu)
  - `wiki/synthesis/integrating_computational_biology_into_undergraduate_curriculum.md` (Bakalavr təhsilinə 4 mərhələli inteqrasiya modeli)

## [2026-10-28] lint | Tam Qraf Bütövlüyü və 100% Keçid Doğrulaması
- **Nəticə:** Bütün 40 Markdown sənədi yoxlanıldı. 0 xətalı/ölü link (0 dead links), 0 yetim səhifə (0 orphan pages). 100% bütövlük təmin edildi.
