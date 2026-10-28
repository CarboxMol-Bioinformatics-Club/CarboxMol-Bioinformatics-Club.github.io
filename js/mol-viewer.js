/**
 * CarboxMol - Macromolecular Crystallographic Studio Engine
 * High-Precision 3D WebGL Visualization: DNT (1BNA), CYP1A1 (4I8V), AKT1 (4GV1)
 * Powered by CarboxMol Engine
 */

(function () {
  'use strict';

  // CarboxMol Benchmark Molecule Knowledge Base
  const MOLECULES = {
    dna: {
      id: 'dna',
      name: 'B-DNT (Cüt Spiral)',
      badge: 'DNT Heliks',
      pdbId: '1BNA',
      classification: 'Genetik Material / Nuklein Turşusu',
      organism: 'B-DNT Dodekamer (Dickerson-Drew)',
      resolution: '1.9 Å',
      method: 'X-RAY DIFFRACTION',
      description: 'Klassik B-formalı qoşa DNT spiralı. Qələvi cütləri (A-T və G-C), hidrogen rabitələri və antiparalel fosfodiester onurğa zənciri.',
      file: 'assets/models/1bna_dna.pdb',
      fallbackPdb: '1BNA',
      defaultStyle: 'cartoon',
      applyStyle: function (viewer, styleMode) {
        if (styleMode === 'stick') {
          viewer.setStyle({}, { stick: { radius: 0.22, colorscheme: 'Jmol' } });
        } else if (styleMode === 'sphere') {
          viewer.setStyle({}, { sphere: { scale: 0.75, colorscheme: 'Jmol' } });
        } else if (styleMode === 'surface') {
          viewer.setStyle({}, { cartoon: { color: 'spectrum', ribbon: true, thickness: 0.3 } });
          try {
            viewer.removeAllSurfaces();
            viewer.addSurface($3Dmol.SurfaceType.VDW, { opacity: 0.65, color: '#06b6d4' });
          } catch (e) {}
        } else {
          // CarboxMol signature: phosphodiester ribbon + base pair rungs
          viewer.setStyle({}, {
            cartoon: { color: 'spectrum', ribbon: true, thickness: 0.38 },
            stick: { radius: 0.18, colorscheme: 'Jmol' }
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
      method: 'X-RAY DIFFRACTION',
      description: 'İnsan Sitoxrom P450 1A1 fermenti. Dərman metabolizmi və kanserogenezdə iştirak edir. Aktiv mərkəzində Hem b (HEM) və alfa-naftoflavon (BHF) inhibitor kompleksi yerləşir.',
      file: 'assets/models/4i8v_cyp1a1.pdb',
      fallbackPdb: '4I8V',
      defaultStyle: 'cartoon',
      applyStyle: function (viewer, styleMode) {
        if (styleMode === 'stick') {
          viewer.setStyle({}, { stick: { radius: 0.2, colorscheme: 'element' } });
        } else if (styleMode === 'sphere') {
          viewer.setStyle({}, { sphere: { scale: 0.72, colorscheme: 'amino' } });
        } else if (styleMode === 'surface') {
          viewer.setStyle({ hetflag: false }, { cartoon: { color: 'spectrum' } });
          viewer.setStyle({ resn: 'HEM' }, { stick: { radius: 0.42, colorscheme: 'element' } });
          try {
            viewer.removeAllSurfaces();
            viewer.addSurface($3Dmol.SurfaceType.MS, { opacity: 0.6, color: '#0d9488' });
          } catch (e) {}
        } else {
          // CarboxMol precision secondary structure
          viewer.setStyle({ hetflag: false }, {
            cartoon: { color: 'spectrum', style: 'oval' }
          });
          // Heme b cofactor (red/iron center)
          viewer.setStyle({ resn: 'HEM' }, {
            stick: { radius: 0.42, colorscheme: 'element' }
          });
          viewer.setStyle({ elem: 'FE' }, {
            sphere: { radius: 0.95, color: '#ef4444' }
          });
          // Drug inhibitor (BHF - alpha-naphthoflavone)
          viewer.setStyle({ resn: 'BHF' }, {
            stick: { radius: 0.45, color: '#f59e0b' }
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
      method: 'X-RAY DIFFRACTION',
      description: 'İnsan AKT1 (PKB alpha) serin/treonin kinaza domeni. Hüceyrə sağ qalması, böyüməsi və xərçəng siqnal yollarının (PI3K/AKT/mTOR) əsas tənzimləyicisidir. Kompleksində allosterik inhibitor (0XZ) mövcuddur.',
      file: 'assets/models/4gv1_akt1.pdb',
      fallbackPdb: '4GV1',
      defaultStyle: 'cartoon',
      applyStyle: function (viewer, styleMode) {
        if (styleMode === 'stick') {
          viewer.setStyle({}, { stick: { radius: 0.2, colorscheme: 'element' } });
        } else if (styleMode === 'sphere') {
          viewer.setStyle({}, { sphere: { scale: 0.72, colorscheme: 'amino' } });
        } else if (styleMode === 'surface') {
          viewer.setStyle({ hetflag: false }, { cartoon: { color: 'spectrum' } });
          viewer.setStyle({ resn: '0XZ' }, { stick: { radius: 0.45, color: '#ec4899' } });
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
            stick: { radius: 0.45, color: '#ec4899' }
          });
          // Phosphorylated threonine (TPO)
          viewer.setStyle({ resn: 'TPO' }, {
            stick: { radius: 0.38, colorscheme: 'element' }
          });
        }
      }
    }
  };

  let viewer = null;
  let currentMolecule = 'dna';
  let currentStyle = 'cartoon';
  let isSpinning = false;
  let modelCache = {};
  const initialViews = {}; // Stores canonical initial crystallographic view for each molecule

  // ─── CarboxMol Dynamic Gesture-Driven Rotation Engine ────────────────
  let spinAxis = { vx: 0, vy: 1, vz: 0 }; // View-space rotation axis
  let spinSpeed = 0.65; // Base rotation speed in degrees per frame
  let isPointerDown = false;
  let lastPointerX = 0;
  let lastPointerY = 0;
  let lastPointerTime = 0;
  let dragMovements = [];
  let spinAnimFrame = null;

  // ─── CarboxMol 3D Orientation Tripod Indicator ───────────────────────
  function updateOrientationTripod() {
    const canvas = document.getElementById('studio-orientation-tripod');
    if (!canvas || !viewer) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const armLen = 20;

    let qx = 0, qy = 0, qz = 0, qw = 1;
    try {
      if (viewer.rotationGroup && viewer.rotationGroup.quaternion) {
        const q = viewer.rotationGroup.quaternion;
        qx = q.x; qy = q.y; qz = q.z; qw = q.w;
      } else {
        const v = viewer.getView();
        if (Array.isArray(v) && v.length >= 8) {
          qx = v[4]; qy = v[5]; qz = v[6]; qw = v[7];
        }
      }
    } catch (e) {}

    function rotateVector(vx, vy, vz) {
      const rx = qx, ry = qy, rz = qz, rw = qw;
      const tx = 2 * (ry * vz - rz * vy + rw * vx);
      const ty = 2 * (rz * vx - rx * vz + rw * vy);
      const tz = 2 * (rx * vy - ry * vx + rw * vz);
      return {
        x: vx + (ry * tz - rz * ty),
        y: vy + (rz * tx - rx * tz),
        z: vz + (rx * ty - ry * tx)
      };
    }

    const axes = [
      { name: 'X', color: '#ef4444', dir: rotateVector(1, 0, 0) },
      { name: 'Y', color: '#10b981', dir: rotateVector(0, 1, 0) },
      { name: 'Z', color: '#06b6d4', dir: rotateVector(0, 0, 1) }
    ];

    axes.sort((a, b) => a.dir.z - b.dir.z);

    axes.forEach(axis => {
      const endX = cx + axis.dir.x * armLen;
      const endY = cy - axis.dir.y * armLen;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = axis.color;
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.stroke();

      ctx.fillStyle = axis.color;
      ctx.font = 'bold 9px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const lx = cx + axis.dir.x * (armLen + 6);
      const ly = cy - axis.dir.y * (armLen + 6);
      ctx.fillText(axis.name, lx, ly);
    });

    ctx.beginPath();
    ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }

  // ─── CarboxMol Viewer Initialization ─────────────────────────────────
  function initMolViewer() {
    const container = document.getElementById('molViewerContainer');
    if (!container) return;

    if (typeof $3Dmol === 'undefined') {
      console.warn('3Dmol library not loaded yet, retrying...');
      setTimeout(initMolViewer, 200);
      return;
    }

    try {
      // Create WebGL viewer instance with CarboxMol deep space background
      container.innerHTML = '';
      const config = {
        backgroundColor: '#090d16',
        antialias: true,
        preserveDrawingBuffer: true,
        powerPreference: 'high-performance'
      };
      viewer = $3Dmol.createViewer(container, config);

      try {
        if (typeof viewer.enableFog === 'function') viewer.enableFog(true);
        if (viewer.config) viewer.config.disableFog = false;
        viewer.fogStart = 0.22;
      } catch (e) {}

      // Wrap render to update orientation tripod synchronously
      const origRender = viewer.render.bind(viewer);
      viewer.render = function () {
        origRender();
        updateOrientationTripod();
      };

      // Mouse drag tripod tracker
      container.addEventListener('pointermove', function () {
        updateOrientationTripod();
      }, { passive: true });

      loadMolecule('dna');

      // Bind controls
      setupUIEventListeners();
      setupGestureTracking(container);
      startSpinLoop();

      // Window resize listener
      window.addEventListener('resize', handleResize, { passive: true });
      if (window.ResizeObserver) {
        new ResizeObserver(handleResize).observe(container);
      }
    } catch (err) {
      console.error('Error initializing CarboxMol viewer:', err);
      showFallback2D();
    }
  }

  function handleResize() {
    if (viewer) {
      viewer.resize();
      viewer.render();
      updateOrientationTripod();
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

  // ─── Continuous Smooth Directional Rotation Loop ───────────────────
  function startSpinLoop() {
    if (spinAnimFrame) cancelAnimationFrame(spinAnimFrame);

    function loop() {
      if (isSpinning && !isPointerDown && viewer) {
        try {
          // Rotate around gesture-derived view-space axis
          viewer.rotate(spinSpeed, spinAxis);
          updateOrientationTripod();
        } catch (e) {}
      }
      spinAnimFrame = requestAnimationFrame(loop);
    }

    spinAnimFrame = requestAnimationFrame(loop);
  }

  // ─── User Gesture Direction Tracker (Mouse & Touch) ──────────────────
  function setupGestureTracking(container) {
    if (!container) return;

    container.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      isPointerDown = true;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastPointerTime = performance.now();
      dragMovements = [];
    });

    window.addEventListener('pointermove', function (e) {
      if (!isPointerDown) return;
      const now = performance.now();
      const dx = e.clientX - lastPointerX;
      const dy = e.clientY - lastPointerY;
      const dt = Math.max(1, now - lastPointerTime);

      if (Math.hypot(dx, dy) >= 1) {
        dragMovements.push({ dx, dy, dt });
        if (dragMovements.length > 8) dragMovements.shift();

        // Convert mouse drag gesture to view-space rotation vector:
        // Moving cursor right (dx > 0) -> rotates around vertical screen Y axis (vy > 0)
        // Moving cursor left (dx < 0) -> rotates around vertical screen Y axis (vy < 0)
        // Moving cursor down (dy > 0) -> tilts around horizontal screen X axis (vx > 0)
        // Moving cursor up (dy < 0) -> tilts around horizontal screen X axis (vx < 0)
        const len = Math.hypot(dx, dy);
        if (len > 0.5) {
          spinAxis = {
            vx: dy / len,
            vy: dx / len,
            vz: 0
          };
        }
      }

      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      lastPointerTime = now;
      updateOrientationTripod();
    }, { passive: true });

    window.addEventListener('pointerup', function () {
      if (!isPointerDown) return;
      isPointerDown = false;

      // Extract smooth release velocity and direction vector from recent movements
      if (dragMovements.length > 0) {
        let totalDx = 0;
        let totalDy = 0;
        let totalDt = 0;
        for (let i = 0; i < dragMovements.length; i++) {
          totalDx += dragMovements[i].dx;
          totalDy += dragMovements[i].dy;
          totalDt += dragMovements[i].dt;
        }
        const len = Math.hypot(totalDx, totalDy);
        if (len > 2) {
          spinAxis = {
            vx: totalDy / len,
            vy: totalDx / len,
            vz: 0
          };
          // Dynamic flick speed between 0.45 and 1.35
          const calculatedSpeed = (len / totalDt) * 12;
          spinSpeed = Math.min(1.35, Math.max(0.45, calculatedSpeed));
        }
      }
      updateOrientationTripod();
    }, { passive: true });

    window.addEventListener('pointercancel', function () {
      isPointerDown = false;
    }, { passive: true });
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

      // Store pristine initial crystallographic view for this molecule
      initialViews[mol.id] = viewer.getView();

      // Reset spin axis for new molecule to standard horizontal turn
      spinAxis = { vx: 0, vy: 1, vz: 0 };
      spinSpeed = 0.65;

      // Ensure 3Dmol internal spin interval is stopped
      try { viewer.spin(false); } catch (e) {}

      updateOrientationTripod();
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
      updateOrientationTripod();
      updateActiveStyleButtons(styleName);
    }
  }

  function toggleSpin() {
    if (!viewer) return;
    isSpinning = !isSpinning;
    try { viewer.spin(false); } catch (e) {} // Ensure 3Dmol native interval never runs

    const spinBtn = document.getElementById('molSpinBtn');
    if (spinBtn) {
      spinBtn.innerHTML = isSpinning
        ? '<i class="fa-solid fa-pause text-xs text-cyan-400"></i> <span class="hidden sm:inline">Pauza</span>'
        : '<i class="fa-solid fa-play text-xs text-cyan-400"></i> <span class="hidden sm:inline">Fırlat</span>';
      if (isSpinning) {
        spinBtn.classList.add('ring-1', 'ring-cyan-400');
      } else {
        spinBtn.classList.remove('ring-1', 'ring-cyan-400');
      }
    }
  }

  function resetView() {
    if (!viewer) return;
    try {
      viewer.spin(false);
    } catch (e) {}

    // Restore the canonical initial crystallographic view regardless of how the user rotated it
    if (initialViews[currentMolecule]) {
      viewer.setView(initialViews[currentMolecule]);
    } else if (viewer.rotationGroup && viewer.rotationGroup.quaternion) {
      viewer.rotationGroup.quaternion.set(0, 0, 0, 1);
    }
    viewer.zoomTo();
    viewer.render();

    // Reset spin axis and speed to pristine default
    spinAxis = { vx: 0, vy: 1, vz: 0 };
    spinSpeed = 0.65;

    updateOrientationTripod();

    // Visual button ripple feedback
    const resetBtn = document.getElementById('molResetBtn');
    if (resetBtn) {
      resetBtn.classList.add('ring-2', 'ring-cyan-400');
      setTimeout(() => resetBtn.classList.remove('ring-2', 'ring-cyan-400'), 350);
    }
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
        btn.classList.add('active');
        btn.setAttribute('data-active', 'true');
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('data-active');
      }
    });
  }

  function updateActiveStyleButtons(styleName) {
    document.querySelectorAll('.mol-style-btn').forEach(btn => {
      const s = btn.getAttribute('data-style');
      if (s === styleName) {
        btn.classList.add('active');
        btn.setAttribute('data-active', 'true');
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('data-active');
      }
    });
  }

  function updateInfoBadge(mol) {
    const titleEl = document.getElementById('molInfoTitle');
    const subtitleEl = document.getElementById('molInfoSubtitle');
    const badgeEl = document.getElementById('molInfoBadge');
    const descEl = document.getElementById('molInfoDesc');

    if (titleEl) titleEl.textContent = mol.name;
    if (subtitleEl) subtitleEl.textContent = `${mol.pdbId} • ${mol.resolution} • ${mol.method}`;
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
    const container = document.getElementById('molViewerContainer');
    if (container) {
      container.innerHTML = '<div class="p-6 text-center text-slate-400 font-semibold text-xs">WebGL 3D dəstəklənmir.</div>';
    }
  }

  // Academic Reference Copy Helper
  function copyCarboxMolReference(btnEl) {
    const citationText = 'Hajizadeh, S. M., & Murshudov, G. N. (2026). CarboxMol: Macromolecular Crystallography & Structural Bioinformatics Workbench. Official Web Platform: https://carboxmol.github.io';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(citationText).catch(() => {});
    } else {
      const ta = document.createElement('textarea');
      ta.value = citationText;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
    }

    if (btnEl) {
      const origHtml = btnEl.innerHTML;
      btnEl.innerHTML = '<i class="fa-solid fa-check text-[10px]"></i> <span>Kopyalandı</span>';
      setTimeout(() => {
        btnEl.innerHTML = origHtml;
      }, 2000);
    }

    if (typeof window.showToast === 'function') {
      window.showToast('CarboxMol akademik istinadı (Reference) mübadilə buferinə kopyalandı!', 'success');
    }
  }

  window.copyCarboxMolReference = copyCarboxMolReference;

  // Public API
  window.CarboxMolStudio = {
    loadMolecule,
    setStyle,
    toggleSpin,
    resetView,
    toggleFullscreen,
    copyReference: copyCarboxMolReference,
    init: initMolViewer
  };

  // Auto-init on DOMContentLoaded or immediate if ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMolViewer);
  } else {
    initMolViewer();
  }
})();
