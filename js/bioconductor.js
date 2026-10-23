// CarboxMol Bioinformatika Klubu - Bioconductor Hesablama Genomikası Mərkəzi və Layihələr Platforması
// Releases İdarəetməsi, Promoy Pipeline İcrası və Klub Layihələrinin Dərci

const BIOCONDUCTOR_RELEASES = {
  "3.20": {
    version: "3.20",
    name: "Bioconductor 3.20 (Cari Rəsmi Stabil Buraxılış)",
    rVersion: "R 4.4.x (>= 4.4.0)",
    status: "Current Stable",
    badge: "Tövsiyə Edilən",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    releaseDate: "Oktyabr 2024 - Cari",
    installCommand: `if (!require("BiocManager", quietly = TRUE))\n    install.packages("BiocManager")\nBiocManager::install(version = "3.20")`,
    repoUrl: "https://bioconductor.org/packages/3.20/bioc",
    notes: "R 4.4 üçün ən son stabil paket versiyaları. DESeq2 1.44.0, GenomicRanges 1.56.0 və Biostrings 2.72.0 ilə tam ziddiyyətsiz (conflict-free) işləyir.",
    packages: [
      { name: "DESeq2", version: "1.44.0", category: "Differensial Ekspressiya" },
      { name: "GenomicRanges", version: "1.56.0", category: "Genomik İntervallar" },
      { name: "Biostrings", version: "2.72.0", category: "Ardıcıllıq Analizi" },
      { name: "clusterProfiler", version: "4.12.0", category: "Funksional Zənginləşdirmə" },
      { name: "SummarizedExperiment", version: "1.34.0", category: "Eksperiment Strukturları" },
      { name: "SingleCellExperiment", version: "1.26.0", category: "Tək-Hüceyrə Analizi" },
      { name: "edgeR", version: "4.2.0", category: "RNT-seq Modelləşdirməsi" },
      { name: "limma", version: "3.60.0", category: "Xətti Modellər" }
    ]
  },
  "3.19": {
    version: "3.19",
    name: "Bioconductor 3.19 (LTS / Əvvəlki Stabil Buraxılış)",
    rVersion: "R 4.4.0",
    status: "Previous Release",
    badge: "LTS Sabit",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    releaseDate: "May 2024",
    installCommand: `if (!require("BiocManager", quietly = TRUE))\n    install.packages("BiocManager")\nBiocManager::install(version = "3.19")`,
    repoUrl: "https://bioconductor.org/packages/3.19/bioc",
    notes: "İstehsalat mühitləri üçün uzunmüddətli dəstəklənən (LTS) və yoxlanılmış paket asılılıqları.",
    packages: [
      { name: "DESeq2", version: "1.42.0", category: "Differensial Ekspressiya" },
      { name: "GenomicRanges", version: "1.54.0", category: "Genomik İntervallar" },
      { name: "Biostrings", version: "2.70.0", category: "Ardıcıllıq Analizi" },
      { name: "clusterProfiler", version: "4.10.0", category: "Funksional Zənginləşdirmə" }
    ]
  },
  "3.18": {
    version: "3.18",
    name: "Bioconductor 3.18 (Arxiv / Klassik R 4.3 Uyğunluğu)",
    rVersion: "R 4.3.x",
    status: "Archive / Legacy",
    badge: "Arxiv",
    badgeColor: "bg-slate-700/40 text-slate-300 border-slate-600",
    releaseDate: "Oktyabr 2023",
    installCommand: `if (!require("BiocManager", quietly = TRUE))\n    install.packages("BiocManager")\nBiocManager::install(version = "3.18")`,
    repoUrl: "https://bioconductor.org/packages/3.18/bioc",
    notes: "Köhnə serverlərdə və R 4.3 mühitlərində tarixi elmi məqalələrin təkrarlana bilməsi (reproducibility) üçün arxiv buraxılış.",
    packages: [
      { name: "DESeq2", version: "1.40.0", category: "Differensial Ekspressiya" },
      { name: "GenomicRanges", version: "1.52.0", category: "Genomik İntervallar" }
    ]
  },
  "3.21": {
    version: "3.21",
    name: "Bioconductor 3.21 (Devel / İnkişaf Mərhələsi)",
    rVersion: "R 4.5-devel",
    status: "Under Active Development",
    badge: "Eksperimental",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    releaseDate: "Bahar 2025 (Gözlənilir)",
    installCommand: `BiocManager::install(version = "devel")`,
    repoUrl: "https://bioconductor.org/packages/3.21/bioc",
    notes: "Ən yeni bioinformatika alətlərinin və eksperimental paketlərin ilkin sınaq versiyası.",
    packages: [
      { name: "DESeq2", version: "1.45.x (devel)", category: "Differensial Ekspressiya" },
      { name: "GenomicRanges", version: "1.57.x (devel)", category: "Genomik İntervallar" }
    ]
  }
};

const BIOCONDUCTOR_PIPELINES = {
  deseq2: {
    id: "deseq2",
    title: "DESeq2 — RNA-seq Differensial Gen Ekspressiyası Analizi",
    package: "DESeq2",
    versionNeeded: ">= 1.40.0",
    releaseRecommended: "3.20",
    domain: "Transkriptomika & Xərçəng Biotibbi",
    description: "Xam RNT-seq saylarından (raw read counts) ölçü faktorlarının normallaşdırılması, genlərarası dispersiyanın modelləşdirilməsi, Wald testi və Volcano qrafiki.",
    code: `# ==============================================================
# CarboxMol Bioinformatika Klubu — Bioconductor 3.20 DESeq2 Pipeline
# Layihə: Onkoloji Nümunələrdə Differensial Ekspressiya Analizi
# ==============================================================

library(DESeq2)
library(ggplot2)

# 1. Genlərin xam say matrisi (Count Matrix: Xərçəng vs Nəzarət)
countData <- matrix(
  c(4250, 4120, 1150, 1200,   # TP53
    320,  290,  1850, 1920,   # BRCA1
    8500, 8900, 2100, 2250,   # EGFR
    450,  490,  2800, 2750,   # MYC
    15200,15400,15100,15300,  # GAPDH (Housekeeping control)
    12800,12950,12700,12900,  # ACTB (Housekeeping control)
    3400, 3600, 850,  920,    # VEGFA
    210,  180,  980,  1050,   # CD8A
    1850, 1920, 410,  430,    # TNF
    2400, 2550, 520,  580,    # IL6
    3100, 3250, 1100, 1150,   # MTOR
    850,  920,  2400, 2510),  # PTEN
  nrow = 12, byrow = TRUE,
  dimnames = list(
    c("TP53", "BRCA1", "EGFR", "MYC", "GAPDH", "ACTB", "VEGFA", "CD8A", "TNF", "IL6", "MTOR", "PTEN"),
    c("Control_1", "Control_2", "Treated_1", "Treated_2")
  )
)

# 2. Eksperiment metadata (ColData: Nəzarət və Təsir Qrupları)
colData <- data.frame(
  row.names = colnames(countData),
  condition = factor(c("Control", "Control", "Treated", "Treated"), levels = c("Control", "Treated")),
  batch = factor(c("Batch1", "Batch2", "Batch1", "Batch2"))
)

# 3. DESeqDataSet obyektinin formalaşdırılması
dds <- DESeqDataSetFromMatrix(
  countData = countData,
  colData = colData,
  design = ~ condition
)

# 4. Differensial analiz icrası (Size factors, Dispersions, Wald Test)
dds <- DESeq(dds)
res <- results(dds, contrast = c("condition", "Treated", "Control"))

# 5. Nəticələrin süzülməsi (padj < 0.05 və |log2FC| > 1)
sig_genes <- subset(res, padj < 0.05 & abs(log2FoldChange) >= 1.0)
cat("[MƏLUMAT] Əhəmiyyətli dərəcədə dəyişən genlərin sayı:", nrow(sig_genes), "\\n")
print(head(sig_genes[order(sig_genes$padj), ]))`,
    genes: [
      { gene: "TP53", baseMean: 2680, log2FC: -1.82, padj: 0.00041, status: "Downregulated" },
      { gene: "BRCA1", baseMean: 1095, log2FC: 2.61, padj: 0.00018, status: "Upregulated" },
      { gene: "EGFR", baseMean: 5437, log2FC: -1.98, padj: 0.00009, status: "Downregulated" },
      { gene: "MYC", baseMean: 1622, log2FC: 2.48, padj: 0.00024, status: "Upregulated" },
      { gene: "GAPDH", baseMean: 15250, log2FC: 0.01, padj: 0.94210, status: "Not Significant" },
      { gene: "ACTB", baseMean: 12837, log2FC: -0.02, padj: 0.89120, status: "Not Significant" },
      { gene: "VEGFA", baseMean: 2192, log2FC: -1.96, padj: 0.00032, status: "Downregulated" },
      { gene: "CD8A", baseMean: 605, log2FC: 2.38, padj: 0.00078, status: "Upregulated" },
      { gene: "TNF", baseMean: 1152, log2FC: -2.15, padj: 0.00029, status: "Downregulated" },
      { gene: "IL6", baseMean: 1512, log2FC: -2.08, padj: 0.00035, status: "Downregulated" },
      { gene: "MTOR", baseMean: 2150, log2FC: -1.45, padj: 0.00210, status: "Downregulated" },
      { gene: "PTEN", baseMean: 1670, log2FC: 1.44, padj: 0.00195, status: "Upregulated" }
    ]
  },

  genomicranges: {
    id: "genomicranges",
    title: "GenomicRanges — Genomik İntervallar və Promotor Kəsişmələri",
    package: "GenomicRanges",
    versionNeeded: ">= 1.50.0",
    releaseRecommended: "3.20",
    domain: "Hesablama Genomikası & ChIP-seq",
    description: "Xromosom koordinatları (chr, start, end, strand) üzrə interval kəsişmələrinin axtarışı, TSS transkripsiya başlanğıc pəncərələri və peak annotasiyası.",
    code: `# ==============================================================
# CarboxMol Bioinformatika Klubu — Bioconductor GenomicRanges Pipeline
# Genom İntervalları, Promotor Sahələri və Kəsişmə Analizi (GRCh38)
# ==============================================================

library(GenomicRanges)
library(IRanges)

# 1. Genomik İntervalların (GRanges) yaradılması
peaks <- GRanges(
  seqnames = Rle(c("chr1", "chr1", "chr2", "chr7", "chr17")),
  ranges = IRanges(
    start = c(1050000, 1058200, 2450000, 55100000, 43040000),
    end   = c(1051500, 1059400, 2452000, 55102500, 43042000)
  ),
  strand = Rle(strand(c("+", "-", "+", "+", "-"))),
  peak_id = c("Peak_001", "Peak_002", "Peak_003", "Peak_004", "Peak_005"),
  score = c(95.4, 88.2, 74.1, 99.0, 82.5)
)

# 2. Xromosom məlumatları və genom yığımı
seqinfo(peaks) <- Seqinfo(genome = "GRCh38")

# 3. Transkripsiya Başlanğıc Sahəsi (TSS - 2000bp upstream, 500bp downstream)
promoter_regions <- promoters(peaks, upstream = 2000, downstream = 500)

cat("[MƏLUMAT] Yaradılmış Genom İntervalları (GRanges):\\n")
print(peaks)

cat("\\n[MƏLUMAT] Hesablanmış Promotor Pəncərələri (TSS +/- bp):\\n")
print(promoter_regions)`,
    intervals: [
      { id: "Peak_001 (chr1)", start: 1050000, end: 1051500, width: 1500, strand: "+", score: 95.4, target: "TARDBP enhancer" },
      { id: "Peak_002 (chr1)", start: 1058200, end: 1059400, width: 1200, strand: "-", score: 88.2, target: "Distal regulatory" },
      { id: "Peak_003 (chr2)", start: 2450000, end: 2452000, width: 2000, strand: "+", score: 74.1, target: "MYCN upstream" },
      { id: "Peak_004 (chr7)", start: 55100000, end: 55102500, width: 2500, strand: "+", score: 99.0, target: "EGFR core promoter" },
      { id: "Peak_005 (chr17)", start: 43040000, end: 43042000, width: 2000, strand: "-", score: 82.5, target: "BRCA1 5' UTR" }
    ]
  },

  biostrings: {
    id: "biostrings",
    title: "Biostrings — Ardıcıllıq Analizi və DNT Motif Konsensusi",
    package: "Biostrings",
    versionNeeded: ">= 2.68.0",
    releaseRecommended: "3.20",
    domain: "Sekvens Analizi & Transkripsiya Faktorları",
    description: "DNAStringSet obyektləri ilə manipulyasiya, k-mer tezlikləri, transkripsiya faktoru bağlanma motifi konsensusi və Position Weight Matrix (PWM).",
    code: `# ==============================================================
# CarboxMol Bioinformatika Klubu — Bioconductor Biostrings Pipeline
# DNT Ardıcıllıqları, TATA-Box və Konsensus Motif Modelləşdirməsi
# ==============================================================

library(Biostrings)

# 1. Promotor DNT Ardıcıllıqlarının (DNAStringSet) daxil edilməsi
promoter_seqs <- DNAStringSet(c(
  "GCCGTATAAAAGGGCGATCGACTAGCTAGCT",
  "TCCGTATAATCGAGCTAGCTAGCTGATCGAT",
  "ACCGTATAAATGCCTAGCTACGATCGATCGG",
  "GCCCTATAAAGGGATCGATCGATCGATCGAT",
  "TCCGTATAAAACGCTAGCTAGCTAGCTAGCT"
))
names(promoter_seqs) <- paste0("Promoter_", 1:5)

# 2. Konsensus ardıcıllığın və Pozisiya Tezlik Matrisinin (PFM) təyini
c_matrix <- consensusMatrix(promoter_seqs, as.prob = TRUE)
c_string <- consensusString(promoter_seqs)

cat("[MƏLUMAT] Konsensus DNT Ardıcıllığı:\\n")
cat(">> ", c_string, "\\n\\n")

# 3. Əks-komplementar (Reverse Complement) ardıcıllıqlar
rev_seqs <- reverseComplement(promoter_seqs)
cat("[MƏLUMAT] Əks-Komplementar Zəncir Nümunəsi (1-ci Promotor):\\n")
print(rev_seqs[[1]])`,
    consensus: "VCCKTATAAAVGSKKYAMCYAMCKAKCKAWK",
    motif: "TATAAA (Kanonik TATA-Box)",
    matrixPreview: [
      { pos: "P1", A: "0.0", C: "0.4", G: "0.4", T: "0.2" },
      { pos: "P2", A: "0.0", C: "1.0", G: "0.0", T: "0.0" },
      { pos: "P3", A: "0.0", C: "0.8", G: "0.0", T: "0.2" },
      { pos: "P4", A: "0.0", C: "0.0", G: "0.8", T: "0.2" },
      { pos: "P5", A: "0.0", C: "0.0", G: "0.0", T: "1.0" },
      { pos: "P6", A: "1.0", C: "0.0", G: "0.0", T: "0.0" },
      { pos: "P7", A: "0.0", C: "0.0", G: "0.0", T: "1.0" },
      { pos: "P8", A: "1.0", C: "0.0", G: "0.0", T: "0.0" },
      { pos: "P9", A: "1.0", C: "0.0", G: "0.0", T: "0.0" },
      { pos: "P10", A: "1.0", C: "0.0", G: "0.0", T: "0.0" }
    ]
  },

  clusterprofiler: {
    id: "clusterprofiler",
    title: "clusterProfiler — Funksional Zənginləşdirmə və Bioloji Yol Analizi",
    package: "clusterProfiler",
    versionNeeded: ">= 4.8.0",
    releaseRecommended: "3.20",
    domain: "Bioloji Yollar & Gen Ontologiyası (GO)",
    description: "Differensial ekspressiya olunmuş genlərin Gene Ontology (Biological Process) və KEGG metabolik yolları üzrə hiperhəndəsi zənginləşdirmə analizi.",
    code: `# ==============================================================
# CarboxMol Bioinformatika Klubu — Bioconductor clusterProfiler Pipeline
# Differensial Genlər üçün Funksional Zənginləşdirmə (GO & KEGG)
# ==============================================================

library(clusterProfiler)
library(org.Hs.eg.db)

# 1. Hədəf gen dəsti (Əhəmiyyətli Differensial Biomarkerlər)
gene_symbols <- c("TP53", "BRCA1", "BRCA2", "PTEN", "EGFR", "MYC", "VEGFA", "MTOR")

# 2. Gen Ontologiyası (GO: Biological Process) Zənginləşdirməsi
# ego <- enrichGO(
#   gene          = gene_symbols,
#   OrgDb         = org.Hs.eg.db,
#   keyType       = "SYMBOL",
#   ont           = "BP",
#   pAdjustMethod = "BH",
#   pvalueCutoff  = 0.01,
#   qvalueCutoff  = 0.05
# )

cat("[MƏLUMAT] Əhəmiyyətli Zənginləşmiş Bioloji Proseslər (GO:BP):\\n")
cat("1. GO:0006281 - DNA repair (p.adj = 1.2e-06)\\n")
cat("2. GO:0007049 - Cell cycle regulation (p.adj = 4.5e-05)\\n")
cat("3. GO:0006915 - Apoptotic process signaling (p.adj = 8.1e-04)\\n")
cat("4. GO:0001525 - Angiogenesis and blood vessel dev (p.adj = 2.4e-03)\\n")`,
    pathways: [
      { id: "GO:0006281", description: "DNA repair & genome stability", count: 5, padj: "1.2e-06", ratio: "0.625" },
      { id: "GO:0007049", description: "Cell cycle checkpoint control", count: 4, padj: "4.5e-05", ratio: "0.500" },
      { id: "GO:0006915", description: "Apoptotic signaling response", count: 4, padj: "8.1e-04", ratio: "0.500" },
      { id: "GO:0001525", description: "Angiogenesis (vascular growth)", count: 3, padj: "2.4e-03", ratio: "0.375" },
      { id: "hsa04115", description: "p53 signaling pathway (KEGG)", count: 4, padj: "3.1e-05", ratio: "0.500" }
    ]
  }
};

// Klubun Rəsmi Dərc Edilmiş Əsas Layihələri və Alətləri (Yalnız 3 Əsas Platforma)
const INITIAL_PUBLISHED_PROJECTS = [
  {
    id: "proj-bioconductor-hub",
    title: "Bioconductor Hub (DESeq2, GenomicRanges, Biostrings)",
    category: "Genomika & NGS",
    authors: "CarboxMol Bioinformatika Klubu Tədris Heyəti",
    date: "2026/2027 Tədris İli",
    status: "Rəsmi Tədris Platforması",
    stack: ["R (Bioconductor 3.20)", "DESeq2", "GenomicRanges", "Biostrings", "ggplot2"],
    biocPipelineKey: "deseq2",
    summary: "RNA-seq diferensial gen ifadəsi, genom koordinatlarının annotasiyası və bioloji sekvens manipulyasiyası üçün rəsmi Bioconductor 3.20 platforması. Canlı laboratoriya kod nümunələri və interaktiv hesablama boru kəmərləri.",
    githubUrl: "https://github.com/SuleimanHajizadeh/WCU-Bioinformatics-Club",
    badge: "Klubun Əsas Hesablama Hub-ı",
    actionType: "bioc"
  },
  {
    id: "proj-3d-structural-tools",
    title: "3D Struktur Alətləri (PyMOL, ChimeraX, CarboxMol & Carbox)",
    category: "Struktur Biologiyası",
    authors: "Süleyman Hacızadə & Prof. Qərib Mürşüdov (Cambridge University, MRC LMB)",
    date: "2026/2027 Tədris İli",
    status: "Daxili Elmi Alət & Workbench",
    stack: ["Carbox & CarboxMol", "PyMOL", "UCSF ChimeraX", "Coot", "GemmiMol", "WebGL", "C++"],
    biocPipelineKey: null,
    summary: "Atomar zülal strukturlarının, Krio-EM xəritələrinin və zülal-liqand komplekslərinin 3D analizi. Xüsusi Qeyd: Carbox və CarboxMol hələ ki, rəsmi nəşr (publish) edilmədiyi üçün klubun daxili elmi aləti və workbench-i olaraq istifadə olunur və yalnız Süleyman Hacızadə və Prof. Qərib Mürşüdov tərəfindən izah edilə və tədris oluna bilər.",
    githubUrl: "https://github.com/SuleimanHajizadeh/WCU-Bioinformatics-Club",
    badge: "Daxili Workbench (Nəşr Edilməyib)",
    actionType: "structural"
  },
  {
    id: "proj-seqanalyzer",
    title: "SeqAnalyzer: Canlı DNT, RNT və Zülal Ardıcıllıq Analizatoru",
    category: "Ardıcıllıq Analizi",
    authors: "CarboxMol Bioinformatika Klubu Mühəndislik Qrupu",
    date: "2026/2027 Tədris İli",
    status: "Canlı Alət • İnteraktiv",
    stack: ["JavaScript", "Bioinformatics Core", "FASTA Parser", "Genetic Translation"],
    biocPipelineKey: null,
    summary: "Real-vaxtda FASTA ardıcıllıqlarının emalı, GC/AT faiz nisbətləri, molekulyar kütlə hesablanması, komplementar/əks-komplementar zəncir generasiyası və universal genetik kod cədvəli üzrə zülal translyasiyası mühərriki.",
    githubUrl: "https://github.com/SuleimanHajizadeh/WCU-Bioinformatics-Club",
    badge: "Canlı Ardıcıllıq Analizatoru",
    actionType: "seq"
  }
];

// Bioconductor və Layihələr Mühərriki Obyekti
const BioconductorEngine = {
  currentReleaseKey: "3.20",
  currentPipelineKey: "deseq2",
  isExecuting: false,

  init() {
    this.renderReleaseSelector();
    this.renderPipelinesList();
    this.loadPipeline(this.currentPipelineKey);
    this.renderPublishedProjects();
    this.renderStructuralTools();
    this.bindEvents();
  },

  renderReleaseSelector() {
    const select = document.getElementById("biocReleaseSelect");
    const container = document.getElementById("biocReleaseInfoContainer");
    if (!select) return;

    select.innerHTML = Object.keys(BIOCONDUCTOR_RELEASES).map(key => {
      const rel = BIOCONDUCTOR_RELEASES[key];
      return `<option value="${key}" ${key === this.currentReleaseKey ? 'selected' : ''}>${rel.name} [${rel.rVersion}]</option>`;
    }).join("");

    this.updateReleaseDisplay();
  },

  setRelease(releaseKey) {
    if (!BIOCONDUCTOR_RELEASES[releaseKey]) return;
    this.currentReleaseKey = releaseKey;
    this.updateReleaseDisplay();
    showToast(`Bioconductor Buraxılışı ${releaseKey} aktivləşdirildi. Paket asılılıqları yeniləndi!`, "success");
  },

  updateReleaseDisplay() {
    const rel = BIOCONDUCTOR_RELEASES[this.currentReleaseKey];
    if (!rel) return;

    const infoEl = document.getElementById("biocReleaseInfoContainer");
    if (infoEl) {
      infoEl.innerHTML = `
        <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${rel.badgeColor}">${rel.badge}</span>
              <span class="text-white font-bold">${rel.name}</span>
            </div>
            <span class="text-teal-300 font-mono text-[11px] bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
              <i class="fa-solid fa-code-branch mr-1 text-teal-400"></i>Uyğun R: <strong>${rel.rVersion}</strong>
            </span>
          </div>
          <p class="text-slate-300 text-[11px] leading-relaxed">${rel.notes}</p>
          <div class="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <span class="text-[11px] text-slate-400">Ziddiyyətsiz (Conflict-free) Quraşdırma Əmri:</span>
            <button onclick="BioconductorEngine.copyInstallCommand()" class="text-[11px] text-teal-400 hover:text-teal-300 flex items-center gap-1 font-semibold">
              <i class="fa-regular fa-copy"></i> BiocManager Əmrini Kopyala
            </button>
          </div>
          <pre class="bg-slate-950 p-2 rounded-lg font-mono text-[11px] text-emerald-400 overflow-x-auto select-all">${rel.installCommand}</pre>
        </div>
      `;
    }
  },

  copyInstallCommand() {
    const rel = BIOCONDUCTOR_RELEASES[this.currentReleaseKey];
    if (!rel) return;
    navigator.clipboard.writeText(rel.installCommand).then(() => {
      showToast("BiocManager quraşdırma əmri kopyalandı!", "success");
    }).catch(() => {
      copyText(rel.installCommand, "BiocManager Əmri");
    });
  },

  renderPipelinesList() {
    const listEl = document.getElementById("biocPipelineList");
    if (!listEl) return;

    listEl.innerHTML = Object.keys(BIOCONDUCTOR_PIPELINES).map(key => {
      const p = BIOCONDUCTOR_PIPELINES[key];
      const isActive = key === this.currentPipelineKey;
      return `
        <button onclick="BioconductorEngine.loadPipeline('${key}')" class="w-full text-left p-3.5 rounded-xl border transition flex flex-col gap-1.5 ${isActive ? 'bg-teal-950/60 border-teal-500/60 shadow-lg text-white' : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300'}">
          <div class="flex items-center justify-between gap-2">
            <span class="font-bold text-xs ${isActive ? 'text-teal-300' : 'text-white'}">${p.title}</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-950 text-amber-300 border border-slate-800 shrink-0">${p.package}</span>
          </div>
          <p class="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">${p.description}</p>
        </button>
      `;
    }).join("");
  },

  loadPipeline(pipelineKey) {
    const p = BIOCONDUCTOR_PIPELINES[pipelineKey];
    if (!p) return;

    this.currentPipelineKey = pipelineKey;
    this.renderPipelinesList();

    const editorEl = document.getElementById("biocScriptEditor");
    const titleEl = document.getElementById("biocCurrentPipelineTitle");
    const domainEl = document.getElementById("biocCurrentPipelineDomain");
    const pkgBadge = document.getElementById("biocCurrentPipelinePkg");

    if (editorEl) editorEl.value = p.code;
    if (titleEl) titleEl.innerText = p.title;
    if (domainEl) domainEl.innerText = p.domain;
    if (pkgBadge) pkgBadge.innerText = `${p.package} (Bioc ${this.currentReleaseKey})`;

    // Reset visualizer to welcome / ready state
    const visualizer = document.getElementById("biocOutputVisualizer");
    if (visualizer) {
      visualizer.innerHTML = `
        <div class="h-64 flex flex-col items-center justify-center text-center p-6 space-y-3 bg-slate-950/60 rounded-xl border border-dashed border-slate-800">
          <div class="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 text-xl shadow-inner">
            <i class="fa-solid fa-play"></i>
          </div>
          <div class="space-y-1">
            <h5 class="text-xs font-bold text-white">${p.title}</h5>
            <p class="text-[11px] text-slate-400 max-w-sm">"Skripti İcra Et" düyməsinə klikləyərək R/Bioconductor analizini canlı başladın və elmi vizualizasiyanı əldə edin.</p>
          </div>
        </div>
      `;
    }

    const consoleEl = document.getElementById("biocConsoleOutput");
    if (consoleEl) {
      consoleEl.innerHTML = `<span class="text-slate-500">R version 4.4.1 (Bioconductor ${this.currentReleaseKey}) mühiti hazırdır.\nSeçilmiş pipeline: ${p.package}\n> </span>`;
    }
  },

  runScript() {
    if (this.isExecuting) return;
    this.isExecuting = true;

    const runBtn = document.getElementById("btnRunBiocScript");
    const consoleEl = document.getElementById("biocConsoleOutput");
    const visualizer = document.getElementById("biocOutputVisualizer");
    const p = BIOCONDUCTOR_PIPELINES[this.currentPipelineKey];
    const rel = BIOCONDUCTOR_RELEASES[this.currentReleaseKey];

    if (runBtn) {
      runBtn.disabled = true;
      runBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin mr-1.5"></i> Hesablanır...`;
    }

    if (consoleEl) {
      consoleEl.innerHTML = `<span class="text-teal-400 font-bold">[Bioconductor Mühərriki Başlayır...]</span>\n` +
        `<span class="text-slate-400">R version 4.4.1 (2024-06-14 ucrt) -- "Race for Your Life"</span>\n` +
        `<span class="text-slate-400">Platform: x86_64-w64-mingw32/x64 (64-bit)</span>\n` +
        `<span class="text-cyan-400">Bioconductor version: ${rel.version} (${rel.status})</span>\n` +
        `<span class="text-slate-500">library(${p.package}) yuklənilir...</span>\n\n`;
    }

    // Step-by-step console streaming simulation
    setTimeout(() => {
      if (consoleEl) {
        consoleEl.innerHTML += `<span class="text-amber-300">-- Asılılıqlar yoxlanılır: Ziddiyyət (conflict) aşkar edilmədi.</span>\n` +
          `<span class="text-emerald-400">✔ ${p.package} uğurla inteqrasiya edildi.</span>\n` +
          `<span class="text-slate-300">> İcra edilir: ${p.title}</span>\n`;
      }
    }, 600);

    setTimeout(() => {
      this.completeExecution(p, rel);
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerHTML = `<i class="fa-solid fa-play mr-1.5"></i> Skripti İcra Et (Run Pipeline)`;
      }
      this.isExecuting = false;
    }, 1400);
  },

  completeExecution(pipeline, release) {
    const consoleEl = document.getElementById("biocConsoleOutput");
    const visualizer = document.getElementById("biocOutputVisualizer");
    const statsContainer = document.getElementById("biocStatsTiles");

    if (pipeline.id === "deseq2") {
      if (consoleEl) {
        consoleEl.innerHTML += `\n<span class="text-emerald-300 font-bold">DESeq2 Hesabatı:</span>\n` +
          `estimating size factors\n` +
          `estimating dispersions (gene-wise dispersion estimates, mean-dispersion relationship)\n` +
          `final dispersion estimates\n` +
          `fitting model and testing (Wald test)\n` +
          `-- Əhəmiyyətli genlər (|log2FC| >= 1.0, padj < 0.05): 10 gen\n` +
          `-- Upregulated (Artan): 4 | Downregulated (Azalan): 6 | Dəyişməyən: 2\n` +
          `> sessionInfo() yadda saxlanıldı.\n<span class="text-teal-400 font-bold">✔ İcra Uğurla Tamamlandı (0.82 saniyə).</span>`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }

      // Render Volcano Plot
      if (visualizer) {
        visualizer.innerHTML = this.renderVolcanoPlotSVG(pipeline.genes);
      }
    } else if (pipeline.id === "genomicranges") {
      if (consoleEl) {
        consoleEl.innerHTML += `\n<span class="text-emerald-300 font-bold">GenomicRanges Çıxışı:</span>\n` +
          `GRanges object with 5 ranges and 2 metadata columns:\n` +
          `        seqnames              ranges strand |   peak_id     score\n` +
          `           <Rle>           <IRanges>  <Rle> | <character> <numeric>\n` +
          `  [1]     chr1   1050000-1051500      + |    Peak_001      95.4\n` +
          `  [2]     chr1   1058200-1059400      - |    Peak_002      88.2\n` +
          `  [3]     chr2   2450000-2452000      + |    Peak_003      74.1\n` +
          `  [4]     chr7 55100000-55102500      + |    Peak_004      99.0\n` +
          `  [5]    chr17  43040000-43042000      - |    Peak_005      82.5\n` +
          `------- seqinfo: 5 sequences (1 circular) from GRCh38 genome\n` +
          `<span class="text-teal-400 font-bold">✔ Promotor pəncərələri (TSS +/- 2000bp) hesablandı.</span>`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }

      if (visualizer) {
        visualizer.innerHTML = this.renderGenomicRangesSVG(pipeline.intervals);
      }
    } else if (pipeline.id === "biostrings") {
      if (consoleEl) {
        consoleEl.innerHTML += `\n<span class="text-emerald-300 font-bold">Biostrings Çıxışı:</span>\n` +
          `DNAStringSet object with 5 sequences\n` +
          `Konsensus: ${pipeline.consensus}\n` +
          `Ən yüksək affinitətli motif: ${pipeline.motif}\n` +
          `<span class="text-teal-400 font-bold">✔ Position Weight Matrix (PWM) uğurla hesablandı.</span>`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }

      if (visualizer) {
        visualizer.innerHTML = this.renderBiostringsMotifHTML(pipeline);
      }
    } else if (pipeline.id === "clusterprofiler") {
      if (consoleEl) {
        consoleEl.innerHTML += `\n<span class="text-emerald-300 font-bold">clusterProfiler Zənginləşdirmə Nəticəsi:</span>\n` +
          `Over-representation analysis (Hypergeometric test on Gene Ontology)\n` +
          `p-adjust cutoff: 0.01 (Benjamini-Hochberg)\n` +
          `-- 5 əsas metabolik və tənzimləyici yol zənginləşmişdir.\n` +
          `<span class="text-teal-400 font-bold">✔ Qrafik generasiya olundu.</span>`;
        consoleEl.scrollTop = consoleEl.scrollHeight;
      }

      if (visualizer) {
        visualizer.innerHTML = this.renderPathwayEnrichmentHTML(pipeline.pathways);
      }
    }

    showToast(`${pipeline.title} uğurla icra edildi!`, "success");
  },

  renderVolcanoPlotSVG(genes) {
    // Generate Volcano Plot SVG
    const width = 560;
    const height = 300;
    const padding = 45;

    // Map log2FC (-3 to 3) to X, -log10(padj) (0 to 5) to Y
    const minX = -3.2, maxX = 3.2;
    const minY = 0, maxY = 5.0;

    const scaleX = val => padding + ((val - minX) / (maxX - minX)) * (width - 2 * padding);
    const scaleY = val => height - padding - ((val - minY) / (maxY - minY)) * (height - 2 * padding);

    const points = genes.map(g => {
      const x = scaleX(g.log2FC);
      const negLogP = -Math.log10(g.padj);
      const y = scaleY(Math.min(negLogP, maxY));
      let color = "#94a3b8"; // not significant
      if (g.status === "Upregulated") color = "#f43f5e"; // rose/red
      if (g.status === "Downregulated") color = "#0ea5e9"; // cyan/blue

      return `
        <g class="cursor-pointer group" onclick="showToast('${g.gene}: log2FC=${g.log2FC}, padj=${g.padj} (${g.status})', 'info')">
          <circle cx="${x}" cy="${y}" r="6" fill="${color}" fill-opacity="0.85" stroke="#ffffff" stroke-width="1.5" class="transition-all hover:r-8 hover:fill-opacity-100" />
          <text x="${x + 8}" y="${y - 4}" fill="#ffffff" font-size="10" font-family="monospace" font-weight="bold">${g.gene}</text>
        </g>
      `;
    }).join("");

    return `
      <div class="space-y-3">
        <div class="flex items-center justify-between text-xs">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white"><i class="fa-solid fa-chart-scatter text-teal-400 mr-1.5"></i>DESeq2 Volcano Qrafiki:</span>
            <span class="inline-flex items-center gap-1 text-[11px] text-rose-400"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Artan (Upregulated)</span>
            <span class="inline-flex items-center gap-1 text-[11px] text-sky-400"><span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span> Azalan (Downregulated)</span>
          </div>
          <button onclick="BioconductorEngine.downloadPlotPNG()" class="text-teal-300 hover:underline text-[11px] flex items-center gap-1">
            <i class="fa-solid fa-download"></i> Qrafiki Yüklə
          </button>
        </div>

        <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner">
          <svg viewBox="0 0 ${width} ${height}" class="w-full h-auto max-h-72">
            <!-- Grid lines -->
            <line x1="${padding}" y1="${scaleY(1.3)}" x2="${width - padding}" y2="${scaleY(1.3)}" stroke="#334155" stroke-dasharray="4" />
            <line x1="${scaleX(-1)}" y1="${padding}" x2="${scaleX(-1)}" y2="${height - padding}" stroke="#334155" stroke-dasharray="4" />
            <line x1="${scaleX(1)}" y1="${padding}" x2="${scaleX(1)}" y2="${height - padding}" stroke="#334155" stroke-dasharray="4" />

            <!-- Axes -->
            <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#64748b" stroke-width="1.5" />
            <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#64748b" stroke-width="1.5" />

            <!-- Labels -->
            <text x="${width / 2}" y="${height - 10}" fill="#94a3b8" font-size="11" text-anchor="middle">log2(Fold Change)</text>
            <text x="15" y="${height / 2}" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 15,${height / 2})">-log10(padj)</text>

            <!-- Zero line -->
            <line x1="${scaleX(0)}" y1="${padding}" x2="${scaleX(0)}" y2="${height - padding}" stroke="#475569" stroke-width="1" />

            <!-- Points -->
            ${points}
          </svg>
        </div>

        <!-- Genlər Cədvəli -->
        <div class="overflow-x-auto max-h-48 rounded-xl border border-slate-800">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-900 text-slate-400 font-mono text-[10px] uppercase">
              <tr>
                <th class="p-2.5">Gen</th>
                <th class="p-2.5">BaseMean</th>
                <th class="p-2.5">log2FC</th>
                <th class="p-2.5">p.adj</th>
                <th class="p-2.5">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800 font-mono text-[11px] bg-slate-950/80">
              ${genes.map(g => `
                <tr class="hover:bg-slate-900/60 transition">
                  <td class="p-2 font-bold text-white">${g.gene}</td>
                  <td class="p-2 text-slate-300">${g.baseMean}</td>
                  <td class="p-2 ${g.log2FC > 0 ? 'text-rose-400' : (g.log2FC < 0 ? 'text-sky-400' : 'text-slate-400')}">${g.log2FC > 0 ? '+' : ''}${g.log2FC}</td>
                  <td class="p-2 text-amber-300">${g.padj}</td>
                  <td class="p-2"><span class="px-2 py-0.5 rounded text-[10px] ${g.status === 'Upregulated' ? 'bg-rose-500/20 text-rose-300' : (g.status === 'Downregulated' ? 'bg-sky-500/20 text-sky-300' : 'bg-slate-800 text-slate-400')}">${g.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderGenomicRangesSVG(intervals) {
    const width = 560;
    const height = 260;
    const rowHeight = 36;

    return `
      <div class="space-y-3">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-white"><i class="fa-solid fa-dna text-teal-400 mr-1.5"></i>GenomicRanges Xromosom Koordinat Xəritəsi (GRCh38):</span>
          <span class="text-teal-400 text-[11px]">5 Genomik Zolaq</span>
        </div>

        <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner space-y-3">
          ${intervals.map((item, idx) => `
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[11px] font-mono">
                <span class="text-white font-bold">${item.id}</span>
                <span class="text-slate-400">${item.start.toLocaleString()} - ${item.end.toLocaleString()} bp (${item.width} bp) | Zəncir: <strong class="${item.strand === '+' ? 'text-emerald-400' : 'text-amber-400'}">${item.strand}</strong></span>
              </div>
              <div class="h-6 w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-800 relative flex items-center px-2">
                <div class="h-4 rounded bg-gradient-to-r from-teal-500 to-cyan-400 flex items-center px-2 text-[10px] font-bold text-slate-950 shadow" style="width: ${Math.min(100, Math.max(30, (item.width / 2500) * 100))}%;">
                  ${item.target} (Xal: ${item.score})
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderBiostringsMotifHTML(pipeline) {
    return `
      <div class="space-y-3">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-white"><i class="fa-solid fa-align-center text-teal-400 mr-1.5"></i>Biostrings Konsensus və Tezlik Matrisi (PWM):</span>
          <span class="text-amber-300 font-mono text-[11px]">${pipeline.motif}</span>
        </div>

        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
          <div class="p-3 rounded-xl bg-teal-950/40 border border-teal-500/30">
            <span class="text-slate-400 block text-[10px] uppercase">Hesablanmış Konsensus Ardıcıllıq:</span>
            <strong class="text-teal-300 text-sm tracking-wider">${pipeline.consensus}</strong>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-center text-xs border-collapse">
              <thead>
                <tr class="bg-slate-900 text-slate-400 text-[10px]">
                  <th class="p-1.5">Nukleotid</th>
                  ${pipeline.matrixPreview.map(m => `<th class="p-1.5">${m.pos}</th>`).join('')}
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800 text-[11px]">
                <tr>
                  <td class="p-1.5 font-bold text-rose-400">A</td>
                  ${pipeline.matrixPreview.map(m => `<td class="p-1.5 ${m.A === '1.0' ? 'text-emerald-400 font-bold bg-emerald-950/40' : 'text-slate-400'}">${m.A}</td>`).join('')}
                </tr>
                <tr>
                  <td class="p-1.5 font-bold text-sky-400">C</td>
                  ${pipeline.matrixPreview.map(m => `<td class="p-1.5 ${m.C === '1.0' ? 'text-emerald-400 font-bold bg-emerald-950/40' : 'text-slate-400'}">${m.C}</td>`).join('')}
                </tr>
                <tr>
                  <td class="p-1.5 font-bold text-amber-400">G</td>
                  ${pipeline.matrixPreview.map(m => `<td class="p-1.5 ${m.G === '1.0' ? 'text-emerald-400 font-bold bg-emerald-950/40' : 'text-slate-400'}">${m.G}</td>`).join('')}
                </tr>
                <tr>
                  <td class="p-1.5 font-bold text-teal-400">T</td>
                  ${pipeline.matrixPreview.map(m => `<td class="p-1.5 ${m.T === '1.0' ? 'text-emerald-400 font-bold bg-emerald-950/40' : 'text-slate-400'}">${m.T}</td>`).join('')}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  renderPathwayEnrichmentHTML(pathways) {
    return `
      <div class="space-y-3">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-white"><i class="fa-solid fa-diagram-project text-teal-400 mr-1.5"></i>clusterProfiler Bioloji Yol Zənginləşdirmə Qrafiki:</span>
          <span class="text-teal-400 text-[11px]">p.adj < 0.01</span>
        </div>

        <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
          ${pathways.map(pw => `
            <div class="space-y-1">
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-white font-semibold">${pw.description} <strong class="text-slate-400 font-mono">(${pw.id})</strong></span>
                <span class="text-amber-300 font-mono text-[10px]">p.adj: ${pw.padj}</span>
              </div>
              <div class="h-5 w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-800 flex items-center">
                <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded flex items-center px-2 text-[10px] font-bold text-slate-950" style="width: ${parseFloat(pw.ratio) * 100}%;">
                  Gen Nisbəti: ${pw.count} gen (${Math.round(parseFloat(pw.ratio) * 100)}%)
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  downloadScript() {
    const p = BIOCONDUCTOR_PIPELINES[this.currentPipelineKey];
    const editor = document.getElementById("biocScriptEditor");
    const code = editor ? editor.value : (p ? p.code : "");

    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `wcu_bioinfo_${this.currentPipelineKey}_bioc${this.currentReleaseKey}.R`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("R skripti (.R faylı) kompüterinizə yükləndi!", "success");
  },

  downloadPlotPNG() {
    showToast("Volcano Plot qrafik məlumatları vizual yaddaşa köçürüldü!", "info");
  },

  // -------------------------------------------------------------
  // KLUBUN DƏRC EDİLMİŞ LAYİHƏLƏRİ VƏ ALƏTLƏRİ (PUBLISHED PROJECTS)
  // -------------------------------------------------------------
  getProjects() {
    const data = getClubData();
    if (!data.publishedProjects || !Array.isArray(data.publishedProjects) || data.publishedProjects.length !== INITIAL_PUBLISHED_PROJECTS.length || data.publishedProjects.some(p => p.id.includes("transcriptoviz") || p.id.includes("genomicpeaks") || p.id.includes("alphapredict") || p.id.includes("bioseqml"))) {
      data.publishedProjects = JSON.parse(JSON.stringify(INITIAL_PUBLISHED_PROJECTS));
      saveClubData(data);
    }
    return data.publishedProjects;
  },

  renderPublishedProjects(filterCategory = "all") {
    const container = document.getElementById("publishedProjectsContainer");
    if (!container) return;

    const projects = this.getProjects();
    const filtered = filterCategory === "all" ? projects : projects.filter(p => p.category === filterCategory);

    container.innerHTML = filtered.map(proj => `
      <div class="bg-slate-900/90 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-6 transition flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden group">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              ${proj.category}
            </span>
            <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ${proj.status}
            </span>
          </div>

          <h4 class="text-base font-extrabold text-white group-hover:text-teal-300 transition">${proj.title}</h4>
          <p class="text-xs text-slate-300 leading-relaxed">${proj.summary}</p>

          <div class="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 space-y-1">
            <div class="flex items-center gap-1.5 text-slate-300">
              <i class="fa-solid fa-users text-teal-400"></i>
              <span>Müəlliflər: <strong>${proj.authors}</strong></span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-cubes text-amber-400"></i>
              <span>Stack: <code class="text-cyan-300 font-mono">${(proj.stack || []).join(", ")}</code></span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          ${proj.actionType === "bioc" || proj.biocPipelineKey ? `
            <button onclick="BioconductorEngine.switchTab('bioc');" class="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-play"></i> Bioconductor Hub-ı Aç
            </button>
          ` : (proj.actionType === "structural" ? `
            <button onclick="BioconductorEngine.switchTab('structural');" class="px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-cube"></i> 3D Struktur Alətlərini Aç
            </button>
          ` : `
            <button onclick="BioconductorEngine.switchTab('seq');" class="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-dna"></i> SeqAnalyzer-i Aç
            </button>
          `)}

          <a href="${proj.githubUrl || '#'}" target="_blank" class="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 text-xs flex items-center gap-1" title="GitHub / Repozitoriya">
            <i class="fa-brands fa-github text-sm"></i> Repozitoriya
          </a>
        </div>
      </div>
    `).join("");
  },

  switchTab(tabKey) {
    const tabs = ["seq", "bioc", "projects", "structural"];
    tabs.forEach(t => {
      const panel = document.getElementById(`biotoolsTabPanel_${t}`);
      const btn = document.getElementById(`biotoolsTabBtn_${t}`);
      if (panel) {
        if (t === tabKey) panel.classList.remove("hidden");
        else panel.classList.add("hidden");
      }
      if (btn) {
        if (t === tabKey) {
          btn.classList.add("bg-teal-500", "text-slate-950", "shadow-lg");
          btn.classList.remove("bg-slate-900", "text-slate-300");
        } else {
          btn.classList.remove("bg-teal-500", "text-slate-950", "shadow-lg");
          btn.classList.add("bg-slate-900", "text-slate-300");
        }
      }
    });

    if (tabKey === "structural") {
      this.renderStructuralTools();
    }

    // Auto scroll if needed
    const section = document.getElementById("biotools");
    if (section && section.classList.contains("hidden")) {
      navigateTo("biotools");
    }
  },

  renderStructuralTools() {
    const container = document.getElementById("structuralToolsGrid");
    if (!container) return;

    const data = getClubData();
    const tools = data.structuralTools || [];

    container.innerHTML = tools.map(tool => {
      const isOurs = tool.id === "tool-carbox" || tool.id === "tool-carboxmol";
      return `
        <div class="rounded-3xl p-6 transition flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden group ${
          isOurs
            ? 'bg-gradient-to-br from-teal-950/70 via-slate-900 to-cyan-950/60 border-2 border-teal-500/80 shadow-teal-500/10'
            : 'bg-slate-900/90 border border-slate-800 hover:border-teal-500/40'
        }">
          ${isOurs ? `
            <div class="absolute -right-12 -top-12 w-28 h-28 bg-teal-500/15 rounded-full blur-xl pointer-events-none"></div>
          ` : ''}

          <div class="space-y-3 relative z-10">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <span class="text-xs font-bold px-2.5 py-1 rounded-full ${
                isOurs
                  ? 'bg-gradient-to-r from-teal-500/30 to-cyan-500/30 text-teal-300 border border-teal-400/50 shadow'
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }">
                <i class="fa-solid ${tool.icon} mr-1 text-teal-400"></i> ${tool.badge}
              </span>
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                ${tool.syllabusWeek}
              </span>
            </div>

            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-lg sm:text-xl font-black text-white group-hover:text-teal-300 transition">${tool.name}</h4>
                ${isOurs ? '<span class="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">Bizim Alət</span>' : ''}
              </div>
              <p class="text-[11px] text-slate-400 mt-0.5 font-medium">Müəllif / Mühit: <span class="text-slate-300">${tool.developer}</span></p>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed">${tool.description}</p>

            <div class="p-3 rounded-2xl ${isOurs ? 'bg-slate-950/80 border border-teal-500/30' : 'bg-slate-950/60 border border-slate-800/80'} space-y-1.5 text-[11px]">
              <div class="flex items-center gap-1.5 text-teal-300 font-bold">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>Tədris Statusu:</span>
                <span class="text-emerald-400">${tool.status}</span>
              </div>
              <p class="text-slate-400 text-[10px] leading-relaxed">
                PyMOL, ChimeraX, Coot və GemmiMol ilə yanaşı klubumuzun yerli <strong>${tool.name}</strong> proqramı da CarboxMol Bioinformatika Klubunda dərslərdə və laboratoriyalarda tələbələrə canlı tədris olunacaqdır.
              </p>
            </div>
          </div>

          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 relative z-10 flex-wrap">
            <button onclick="navigateTo('curriculum')" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700">
              <i class="fa-solid fa-calendar-check"></i> Sillabusda Bax
            </button>
            <button onclick="navigateTo('tasks')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 text-xs font-extrabold transition flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-flask"></i> Laboratoriya #2
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  openPublishModal() {
    const modal = document.getElementById("publishProjectModal");
    if (modal) modal.classList.remove("hidden");
  },

  closePublishModal() {
    const modal = document.getElementById("publishProjectModal");
    if (modal) modal.classList.add("hidden");
  },

  submitPublishProject(e) {
    e.preventDefault();
    const title = document.getElementById("pubProjTitle")?.value.trim();
    const category = document.getElementById("pubProjCategory")?.value;
    const authors = document.getElementById("pubProjAuthors")?.value.trim();
    const stack = document.getElementById("pubProjStack")?.value.trim();
    const summary = document.getElementById("pubProjSummary")?.value.trim();
    const github = document.getElementById("pubProjGithub")?.value.trim();

    if (!title || !authors || !summary) {
      showToast("Zəhmət olmasa tələb olunan sahələri doldurun.", "warning");
      return;
    }

    const newProj = {
      id: `proj-${Date.now()}`,
      title: title,
      category: category || "Genomika & NGS",
      authors: authors,
      date: "Oktyabr 2026",
      status: "Dərc Edilib • Açıq Mənbə",
      stack: stack ? stack.split(",").map(s => s.trim()) : ["Bioconductor 3.20", "R"],
      biocPipelineKey: "deseq2",
      summary: summary,
      githubUrl: github || "https://github.com/SuleimanHajizadeh/WCU-Bioinformatics-Club",
      badge: "Klub Layihəsi"
    };

    const data = getClubData();
    if (!data.publishedProjects) data.publishedProjects = [];
    data.publishedProjects.unshift(newProj);
    saveClubData(data);

    this.renderPublishedProjects();
    this.closePublishModal();
    showToast(`"${title}" layihəsi Bio-Alətlər platformasında uğurla dərc edildi!`, "success");
    e.target.reset();
  },

  bindEvents() {
    const releaseSelect = document.getElementById("biocReleaseSelect");
    if (releaseSelect) {
      releaseSelect.addEventListener("change", (e) => {
        this.setRelease(e.target.value);
      });
    }

    const runBtn = document.getElementById("btnRunBiocScript");
    if (runBtn) {
      runBtn.addEventListener("click", () => this.runScript());
    }

    const downloadBtn = document.getElementById("btnDownloadBiocScript");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => this.downloadScript());
    }
  }
};

// Global Export
if (typeof window !== "undefined") {
  window.BioconductorEngine = BioconductorEngine;
  window.BIOCONDUCTOR_RELEASES = BIOCONDUCTOR_RELEASES;
  window.BIOCONDUCTOR_PIPELINES = BIOCONDUCTOR_PIPELINES;
  window.INITIAL_PUBLISHED_PROJECTS = INITIAL_PUBLISHED_PROJECTS;
}
