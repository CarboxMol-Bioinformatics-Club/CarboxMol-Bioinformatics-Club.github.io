// CarboxMol Bioinformatika Klubu - Brauzerdaxili Bioinformatika Laboratoriya Aləti
// SeqAnalyzer: DNT/RNT/Zülal Analizi və Translyasiya Mühərriki

const GENETIC_CODE = {
  'ATA':'I', 'ATC':'I', 'ATT':'I', 'ATG':'M',
  'ACA':'T', 'ACC':'T', 'ACG':'T', 'ACT':'T',
  'AAC':'N', 'AAT':'N', 'AAA':'K', 'AAG':'K',
  'AGC':'S', 'AGT':'S', 'AGA':'R', 'AGG':'R',
  'CTA':'L', 'CTC':'L', 'CTG':'L', 'CTT':'L',
  'CCA':'P', 'CCC':'P', 'CCG':'P', 'CCT':'P',
  'CAC':'H', 'CAT':'H', 'CAA':'Q', 'CAG':'Q',
  'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGT':'R',
  'GTA':'V', 'GTC':'V', 'GTG':'V', 'GTT':'V',
  'GCA':'A', 'GCC':'A', 'GCG':'A', 'GCT':'A',
  'GAC':'D', 'GAT':'D', 'GAA':'E', 'GAG':'E',
  'GGA':'G', 'GGC':'G', 'GGG':'G', 'GGT':'G',
  'TCA':'S', 'TCC':'S', 'TCG':'S', 'TCT':'S',
  'TTC':'F', 'TTT':'F', 'TTA':'L', 'TTG':'L',
  'TAC':'Y', 'TAT':'Y', 'TAA':'*', 'TAG':'*',
  'TGC':'C', 'TGT':'C', 'TGA':'*', 'TGG':'W',
};

const AMINO_ACID_NAMES = {
  'A': 'Ala (Alanin)', 'R': 'Arg (Arginin)', 'N': 'Asn (Asparagin)', 'D': 'Asp (Aspartat)',
  'C': 'Cys (Sistein)', 'Q': 'Gln (Qlutamin)', 'E': 'Glu (Qlutamat)', 'G': 'Gly (Qlisin)',
  'H': 'His (Histidin)', 'I': 'Ile (İzoleysin)', 'L': 'Leu (Leysin)', 'K': 'Lys (Lizin)',
  'M': 'Met (Metionin - Start)', 'F': 'Phe (Fenilalanin)', 'P': 'Pro (Prolin)', 'S': 'Ser (Serin)',
  'T': 'Thr (Treonin)', 'W': 'Trp (Triptofan)', 'Y': 'Tyr (Tirozin)', 'V': 'Val (Valin)',
  '*': 'STOP (Sonlanma)'
};

const SAMPLE_SEQUENCES = {
  insulin: {
    name: "İnsan İnsulin Geni (INS Fragment)",
    sequence: `>Homo_sapiens_insulin_CDS
ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAGCC
TTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTACCTAGTGTGCGGGGAACGAGGCTTC
TTCTACACACCCAAGACCCGCCGGGAGGCAGAGGACCTGCAGGTGGGGCAGGTGGAGCTGGGCG`
  },
  sarscov2: {
    name: "SARS-CoV-2 Spike Proteini (RBD Bağlanma Domeni Fraqmenti)",
    sequence: `>SARS-CoV-2_Spike_RBD_Fragment
AATATTACAAACTTGTGTCCTTTTGGAGAGGTTTTTAATGCTACTACATTCGCATCTGTT
TATGCATGGAATAGAAAAAGAATTAGTAACTGTGTAGCTGACTATTCCGTTCTTTATAAT
TCTGCATCATTTAGCACTTTTAAATGTTATGGAGTGTCTCCTACTAAATTAAATGATCTC`
  },
  hbb_normal: {
    name: "İnsan HBB Geni (Normal Beta-Globin)",
    sequence: `>Human_HBB_Normal_BetaGlobin_Exon1
ATGGTGCATCTGACTCCTGAGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAAC
GTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGCTGCTGGTGGTCTACCCTTGGACCCAG
AGGTTCTTTGAGTCCTTTGGGGATCTGTCCACTCCTGATGCTGTTATGGGCAACCCTAAG`
  },
  hbb_sickle: {
    name: "Oraqvari Hüceyrə Anemiyası Mutasiyası (HbS: GAG -> GTG)",
    sequence: `>Human_HBB_SickleCell_Mutation_HbS
ATGGTGCATCTGACTCCTGTGGAGAAGTCTGCCGTTACTGCCCTGTGGGGCAAGGTGAAC
GTGGATGAAGTTGGTGGTGAGGCCCTGGGCAGGCTGCTGGTGGTCTACCCTTGGACCCAG
AGGTTCTTTGAGTCCTTTGGGGATCTGTCCACTCCTGATGCTGTTATGGGCAACCCTAAG`
  }
};

class BioSequenceAnalyzer {
  static cleanSequence(rawText) {
    if (!rawText) return "";
    const lines = rawText.split('\n');
    let sequence = "";
    for (let line of lines) {
      line = line.trim();
      if (!line.startsWith('>') && !line.startsWith(';')) {
        sequence += line;
      }
    }
    // Remove whitespace, numbers and convert to uppercase
    return sequence.replace(/[^A-Za-z]/g, '').toUpperCase();
  }

  static analyze(rawDna) {
    const dna = this.cleanSequence(rawDna);
    if (!dna) {
      return null;
    }

    const length = dna.length;
    let counts = { A: 0, T: 0, G: 0, C: 0, others: 0 };
    for (let char of dna) {
      if (counts[char] !== undefined) {
        counts[char]++;
      } else {
        counts.others++;
      }
    }

    const gcCount = counts.G + counts.C;
    const atCount = counts.A + counts.T;
    const gcPercent = length > 0 ? ((gcCount / length) * 100).toFixed(2) : 0;
    const atPercent = length > 0 ? ((atCount / length) * 100).toFixed(2) : 0;

    // Molecular Weight approx (g/mol) for ssDNA: (An x 313.21) + (Tn x 304.2) + (Cn x 289.18) + (Gn x 329.21) - 61.96
    const mw = (
      (counts.A * 313.21) +
      (counts.T * 304.20) +
      (counts.C * 289.18) +
      (counts.G * 329.21) - 61.96
    ).toFixed(2);

    // Complementary
    const compMap = { 'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G', 'N': 'N', 'U': 'A' };
    let comp = "";
    for (let char of dna) {
      comp += compMap[char] || 'N';
    }

    // Reverse Complement
    const revComp = comp.split('').reverse().join('');

    // Transcription (DNA -> mRNA: T -> U)
    const mrna = dna.replace(/T/g, 'U');

    // Translation (DNA -> Protein in Frame 1)
    let protein = "";
    let codons = [];
    for (let i = 0; i < dna.length - 2; i += 3) {
      const codon = dna.slice(i, i + 3);
      const aa = GENETIC_CODE[codon] || '?';
      protein += aa;
      codons.push({
        codon: codon,
        aminoAcid: aa,
        fullName: AMINO_ACID_NAMES[aa] || 'Bilinməyən'
      });
    }

    return {
      cleanDna: dna,
      length: length,
      counts: counts,
      gcPercent: parseFloat(gcPercent),
      atPercent: parseFloat(atPercent),
      molecularWeight: parseFloat(mw),
      complementary: comp,
      reverseComplementary: revComp,
      mrna: mrna,
      protein: protein,
      codons: codons
    };
  }
}

// Window / Node export
if (typeof window !== "undefined") {
  window.BioSequenceAnalyzer = BioSequenceAnalyzer;
  window.SAMPLE_SEQUENCES = SAMPLE_SEQUENCES;
} else if (typeof global !== "undefined") {
  global.BioSequenceAnalyzer = BioSequenceAnalyzer;
  global.SAMPLE_SEQUENCES = SAMPLE_SEQUENCES;
}
