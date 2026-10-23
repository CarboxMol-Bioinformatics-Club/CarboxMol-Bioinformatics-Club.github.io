/**
 * CarboxMol Bioinformatika Klubu - 3D Real Biomolekulyar Studio
 * DNT (1BNA), CYP1A1 (4I8V) və AKT1 (4GV1) 3D WebGL Vizualizasiyası
 */

(function () {
  'use strict';

  // Molekul məlumat bazası
  const MOLECULES = {
    dna: {
      id: 'dna',
      name: 'B-DNT (Cüt Spiral)',
      badge: 'DNT Heliks',
      pdbId: '1BNA',
      classification: 'Genetik Material / Nuklein Turşusu',
      organism: 'B-DNT Dodekamer (Dickerson-Drew)',
      resolution: '1.9 Å',
      description: 'Klassik B-formalı qoşa DNT spiralı. Qələvi cütləri (A-T və G-C), hidrogen rabitələri və antiparalel fosfodiester onurğa zənciri.',
      file: 'assets/models/1bna_dna.pdb',
      fallbackPdb: '1BNA',
      defaultStyle: 'cartoon',
      applyStyle: function (viewer, styleMode) {
        if (styleMode === 'stick') {
          viewer.setStyle({}, { stick: { radius: 0.2, colorscheme: 'Jmol' } });
        } else if (styleMode === 'sphere') {
          viewer.setStyle({}, { sphere: { scale: 0.75, colorscheme: 'Jmol' } });
        } else if (styleMode === 'surface') {
          viewer.setStyle({}, { cartoon: { color: 'spectrum', ribbon: true } });
          try {
            viewer.removeAllSurfaces();
            viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.65, color: '#06b6d4' });
          } catch (e) {}
        } else {
          // Cartoon + Stick rungs
          viewer.setStyle({}, {
            cartoon: { color: 'spectrum', ribbon: true, thickness: 0.35 },
            stick: { radius: 0.16, colorscheme: 'Jmol' }
          });
        }
      }
    },

    cyp1a1: {
      id: 'cyp1a1',
      name: 'CYP1A1 (Sitoxrom P450)',
      badge: 'Metabolik Ferment',
      pdbId: '4I8V',
      classification: 'Oksidoreduktaza / Hemoprotein',
      organism: 'Homo sapiens (İnsan)',
      resolution: '2.6 Å',
      description: 'İnsan Sitoxrom P450 1A1 fermenti. Dərman metabolizmi və kanserogenezdə iştirak edir. Aktiv mərkəzində Hem b (HEM) və alfa-naftoflavon (BHF) inhibitor kompleksi yerləşir.',
      file: 'assets/models/4i8v_cyp1a1.pdb',
      fallbackPdb: '4I8V',
      defaultStyle: 'cartoon',
      applyStyle: function (viewer, styleMode) {
        if (styleMode === 'stick') {
          viewer.setStyle({}, { stick: { radius: 0.18, colorscheme: 'element' } });
        } else if (styleMode === 'sphere') {
          viewer.setStyle({}, { sphere: { scale: 0.7, colorscheme: 'amino' } });
        } else if (styleMode === 'surface') {
          viewer.setStyle({ hetflag: false }, { cartoon: { color: 'spectrum' } });
          viewer.setStyle({ resn: 'HEM' }, { stick: { radius: 0.4, colorscheme: 'element' } });
          try {
            viewer.removeAllSurfaces();
            viewer.addSurface($3Dmol.SurfaceType.MS, { opacity: 0.6, color: '#0d9488' });
          } catch (e) {}
        } else {
          // Cartoon secondary structure
          viewer.setStyle({ hetflag: false }, {
            cartoon: { color: 'spectrum', style: 'oval' }
          });
          // Heme b cofactor (red/iron center)
          viewer.setStyle({ resn: 'HEM' }, {
            stick: { radius: 0.38, colorscheme: 'element' }
          });
          viewer.setStyle({ elem: 'FE' }, {
            sphere: { radius: 0.9, color: '#dc2626' }
          });
          // Drug inhibitor (BHF - alpha-naphthoflavone)
          viewer.setStyle({ resn: 'BHF' }, {
            stick: { radius: 0.4, color: '#f59e0b' }
          });
        }
      }
    },

    akt1: {
      id: 'akt1',
      name: 'AKT1 (Zülal Kinaza B)',
      badge: 'Siqnal Kinazası',
      pdbId: '4GV1',
      classification: 'Transferaza / Onkologiya Hədəfi',
      organism: 'Homo sapiens (İnsan)',
      resolution: '1.99 Å',
      description: 'İnsan AKT1 (PKB alpha) serin/treonin kinaza domeni. Hüceyrə sağ qalması, böyüməsi və xərçəng siqnal yollarının (PI3K/AKT/mTOR) əsas tənzimləyicisidir. Kompleksində allosterik inhibitor (0XZ) mövcuddur.',
      file: 'assets/models/4gv1_akt1.pdb',
      fallbackPdb: '4GV1',
      defaultStyle: 'cartoon',
      applyStyle: function (viewer, styleMode) {
        if (styleMode === 'stick') {
          viewer.setStyle({}, { stick: { radius: 0.18, colorscheme: 'element' } });
        } else if (styleMode === 'sphere') {
          viewer.setStyle({}, { sphere: { scale: 0.7, colorscheme: 'amino' } });
        } else if (styleMode === 'surface') {
          viewer.setStyle({ hetflag: false }, { cartoon: { color: 'spectrum' } });
          viewer.setStyle({ resn: '0XZ' }, { stick: { radius: 0.4, color: '#ec4899' } });
          try {
            viewer.removeAllSurfaces();
            viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.6, color: '#6366f1' });
          } catch (e) {}
        } else {
          // Kinase secondary structure
          viewer.setStyle({ hetflag: false }, {
            cartoon: { color: 'spectrum' }
          });
          // Allosteric inhibitor AZD5363 (0XZ)
          viewer.setStyle({ resn: '0XZ' }, {
            stick: { radius: 0.42, color: '#ec4899' }
          });
          // Phosphorylated threonine (TPO)
          viewer.setStyle({ resn: 'TPO' }, {
            stick: { radius: 0.35, colorscheme: 'element' }
          });
        }
      }
    }
  };

  let viewer = null;
  let currentMolecule = 'dna';
  let currentStyle = 'cartoon';
  let isSpinning = true;
  let modelCache = {};

  function initMolViewer() {
    const container = document.getElementById('molViewerContainer');
    if (!container) return;

    if (typeof $3Dmol === 'undefined') {
      console.warn('3Dmol library not loaded yet, retrying...');
      setTimeout(initMolViewer, 200);
      return;
    }

    try {
      // Create WebGL viewer instance with pure white background
      container.innerHTML = '';
      const config = {
        backgroundColor: '#ffffff',
        antialias: true
      };
      viewer = $3Dmol.createViewer(container, config);
      loadMolecule('dna');

      // Bind controls
      setupUIEventListeners();

      // Window resize listener
      window.addEventListener('resize', handleResize, { passive: true });
      if (window.ResizeObserver) {
        new ResizeObserver(handleResize).observe(container);
      }
    } catch (err) {
      console.error('Error initializing 3Dmol viewer:', err);
      showFallback2D();
    }
  }

  function handleResize() {
    if (viewer) {
      viewer.resize();
      viewer.render();
    }
  }

  function loadMolecule(molId) {
    if (!viewer || !MOLECULES[molId]) return;
    currentMolecule = molId;
    const mol = MOLECULES[molId];

    updateActiveTabs(molId);
    updateInfoBadge(mol);
    showLoader(true);

    if (modelCache[molId]) {
      renderModelData(modelCache[molId], mol);
    } else {
      // First try local PDB, then fallback to RCSB
      fetch(mol.file)
        .then(res => {
          if (!res.ok) throw new Error('Local PDB not accessible');
          return res.text();
        })
        .then(pdbData => {
          modelCache[molId] = pdbData;
          renderModelData(pdbData, mol);
        })
        .catch(() => {
          // Fallback to direct RCSB PDB download
          const rcsbUrl = `https://files.rcsb.org/download/${mol.fallbackPdb}.pdb`;
          fetch(rcsbUrl)
            .then(r => r.text())
            .then(pdbData => {
              modelCache[molId] = pdbData;
              renderModelData(pdbData, mol);
            })
            .catch(e => {
              console.error('Failed to load PDB from RCSB fallback:', e);
              showLoader(false);
            });
        });
    }
  }

  function renderModelData(pdbData, mol) {
    if (!viewer) return;
    try {
      viewer.clear();
      viewer.removeAllSurfaces();
      viewer.addModel(pdbData, 'pdb');
      mol.applyStyle(viewer, currentStyle);
      viewer.zoomTo();
      viewer.render();

      if (isSpinning) {
        viewer.spin('y', 0.8);
      } else {
        viewer.spin(false);
      }
      showLoader(false);
    } catch (err) {
      console.error('Render error:', err);
      showLoader(false);
    }
  }

  function setStyle(styleName) {
    currentStyle = styleName;
    const mol = MOLECULES[currentMolecule];
    if (viewer && mol) {
      viewer.removeAllSurfaces();
      mol.applyStyle(viewer, currentStyle);
      viewer.render();
      updateActiveStyleButtons(styleName);
    }
  }

  function toggleSpin() {
    if (!viewer) return;
    isSpinning = !isSpinning;
    if (isSpinning) {
      viewer.spin('y', 0.8);
    } else {
      viewer.spin(false);
    }
    const spinBtn = document.getElementById('molSpinBtn');
    if (spinBtn) {
      spinBtn.innerHTML = isSpinning
        ? '<i class="fa-solid fa-pause text-xs text-teal-600"></i> <span class="hidden sm:inline">Pauza</span>'
        : '<i class="fa-solid fa-play text-xs text-teal-600"></i> <span class="hidden sm:inline">Fırlat</span>';
    }
  }

  function resetView() {
    if (!viewer) return;
    viewer.zoomTo();
    viewer.render();
  }

  function toggleFullscreen() {
    const wrapper = document.getElementById('molStudioWrapper');
    if (!wrapper) return;
    if (!document.fullscreenElement) {
      if (wrapper.requestFullscreen) wrapper.requestFullscreen();
      else if (wrapper.webkitRequestFullscreen) wrapper.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  function updateActiveTabs(molId) {
    document.querySelectorAll('.mol-tab-btn').forEach(btn => {
      const target = btn.getAttribute('data-mol');
      if (target === molId) {
        btn.classList.add('bg-white', 'text-teal-700', 'shadow-sm', 'border-teal-500/40', 'font-bold');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100', 'border-transparent');
      } else {
        btn.classList.remove('bg-white', 'text-teal-700', 'shadow-sm', 'border-teal-500/40', 'font-bold');
        btn.classList.add('text-slate-600', 'hover:bg-slate-100', 'border-transparent');
      }
    });
  }

  function updateActiveStyleButtons(styleName) {
    document.querySelectorAll('.mol-style-btn').forEach(btn => {
      const s = btn.getAttribute('data-style');
      if (s === styleName) {
        btn.classList.add('bg-teal-50', 'text-teal-800', 'border-teal-300', 'font-bold');
        btn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
      } else {
        btn.classList.remove('bg-teal-50', 'text-teal-800', 'border-teal-300', 'font-bold');
        btn.classList.add('bg-white', 'text-slate-600', 'border-slate-200');
      }
    });
  }

  function updateInfoBadge(mol) {
    const titleEl = document.getElementById('molInfoTitle');
    const subtitleEl = document.getElementById('molInfoSubtitle');
    const badgeEl = document.getElementById('molInfoBadge');
    const descEl = document.getElementById('molInfoDesc');

    if (titleEl) titleEl.textContent = mol.name;
    if (subtitleEl) subtitleEl.textContent = `${mol.pdbId} • ${mol.organism}`;
    if (badgeEl) badgeEl.textContent = mol.badge;
    if (descEl) descEl.textContent = mol.description;
  }

  function showLoader(show) {
    const loader = document.getElementById('molLoader');
    if (loader) {
      if (show) loader.classList.remove('hidden');
      else loader.classList.add('hidden');
    }
  }

  function setupUIEventListeners() {
    // Molecule selector tabs
    document.querySelectorAll('.mol-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const molId = btn.getAttribute('data-mol');
        if (molId && molId !== currentMolecule) {
          loadMolecule(molId);
        }
      });
    });

    // Style selector buttons
    document.querySelectorAll('.mol-style-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const style = btn.getAttribute('data-style');
        if (style) setStyle(style);
      });
    });

    // Control buttons
    const spinBtn = document.getElementById('molSpinBtn');
    if (spinBtn) spinBtn.addEventListener('click', toggleSpin);

    const resetBtn = document.getElementById('molResetBtn');
    if (resetBtn) resetBtn.addEventListener('click', resetView);

    const fsBtn = document.getElementById('molFullscreenBtn');
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);

    const infoToggleBtn = document.getElementById('molInfoToggleBtn');
    const infoModal = document.getElementById('molInfoDrawer');
    if (infoToggleBtn && infoModal) {
      infoToggleBtn.addEventListener('click', () => {
        infoModal.classList.toggle('hidden');
      });
    }
  }

  function showFallback2D() {
    const fallbackCanvas = document.getElementById('dnaCanvas');
    if (fallbackCanvas) fallbackCanvas.classList.remove('hidden');
  }

  // Public API
  window.CarboxMolStudio = {
    loadMolecule,
    setStyle,
    toggleSpin,
    resetView,
    toggleFullscreen,
    init: initMolViewer
  };

  // Auto-init on DOMContentLoaded or immediate if ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMolViewer);
  } else {
    initMolViewer();
  }
})();
