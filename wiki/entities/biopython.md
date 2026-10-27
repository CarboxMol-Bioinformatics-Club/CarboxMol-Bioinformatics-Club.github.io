---
title: Biopython — Hesablama Biologiyası üçün Python Kitabxanası
category: entity
type: software / library
tags: [biopython, python, sequence-analysis, fasta, genbank, blast, alignment, curriculum]
updated: 2026-10-27
sources: ["raw/club_curriculum_and_annual_plan.md"]
---

# 🐍 Biopython: Genom və Molekulyar Ardıcıllıq Analiz Aləti

**Biopython** — bioinformatika və hesablama biologiyası üçün Python proqramlaşdırma dilində yazılmış ən nüfuzlu açıq mənbəli kitabxanalar toplusudur. [[carboxmol_bioinformatics_club|CarboxMol Bioinformatika Klubu]] tədris sillabusunun II modulunun əsas mühərrikidir.

* **Əsas Modulları:**
  * `Bio.Seq` & `Bio.SeqRecord`: DNT/RNT/Zülal ardıcıllıqlarının idarəsi, transkripsiya, tərcümə, komplementarlıq.
  * `Bio.SeqIO`: FASTA, GenBank, FASTQ, EMBL fayllarının yüksək sürətli oxunması və yazılması.
  * `Bio.PDB`: PDB/mmCIF atomik koordinatlarının oxunması, atom məsafələrinin və dielektrik bucaqların hesablanması.
  * `Bio.Blast`: NCBI serverlərinə avtomatlaşdırılmış uzaqdan sorğuların göndərilməsi (`qblast`) və XML nəticələrinin təhlili.
  * `Bio.Align` & `Bio.Phylo`: Cüt və çoxlu ardıcıllıq düzləndirilməsi (*sequence alignment*), filogenetik ağacların vizuallaşdırılması.

---

## 💻 Klub Sillabusundan Nümunə Kod:

```python
from Bio.Seq import Seq
from Bio import SeqIO

# DNT transkripsiyası və tərcüməsi
dna_seq = Seq("ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG")
mrna_seq = dna_seq.transcribe()
protein_seq = dna_seq.translate(to_stop=True)

print(f"mRNA: {mrna_seq}")
print(f"Zülal Ardıcıllığı: {protein_seq}")
print(f"GC Faizi: {100 * (dna_seq.count('G') + dna_seq.count('C')) / len(dna_seq):.2f}%")
```

---

## 🔗 Əlaqəli Səhifələr
* [[seqanalyzer_tool]]
* [[deseq2_bioconductor]]
* [[annual_syllabus_breakdown]]
