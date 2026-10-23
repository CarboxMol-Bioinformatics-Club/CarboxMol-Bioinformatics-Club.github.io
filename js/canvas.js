// CarboxMol Bioinformatika Klubu - İnteraktiv 3D DNT Qrafik Animasiyası (Canvas Helix)

(function () {
  const canvas = document.getElementById("dnaCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let numPairs = 42;
  let angle = 0;
  let mouseX = 0;
  let mouseY = 0;
  let targetAngleSpeed = 0.015;
  let currentAngleSpeed = 0.015;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth;
    height = canvas.height = canvas.parentElement.clientHeight || 380;
    initHelix();
  }

  function initHelix() {
    particles = [];
    const spacing = height / (numPairs - 2);
    for (let i = 0; i < numPairs; i++) {
      particles.push({
        y: i * spacing,
        baseAngle: (i * 0.28),
        strand1Color: i % 2 === 0 ? "#10b981" : "#06b6d4", // Emerald & Cyan
        strand2Color: i % 2 === 0 ? "#3b82f6" : "#6366f1", // Blue & Indigo
        basePairType: i % 4 // 0: A-T, 1: T-A, 2: G-C, 3: C-G
      });
    }
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("orientationchange", () => setTimeout(resize, 100), { passive: true });

  if (window.ResizeObserver && canvas.parentElement) {
    try {
      new ResizeObserver(() => resize()).observe(canvas.parentElement);
    } catch (e) {}
  }

  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) - width / 2;
    mouseY = (e.clientY - rect.top) - height / 2;
    targetAngleSpeed = 0.015 + (mouseX / width) * 0.02;
  });

  // Mobil və Sensorlu Ekranlar üçün Toxunma (Touch) İdarəetməsi
  canvas.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseX = (touch.clientX - rect.left) - width / 2;
      mouseY = (touch.clientY - rect.top) - height / 2;
      targetAngleSpeed = 0.015 + (mouseX / width) * 0.03;
    }
  }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    currentAngleSpeed += (targetAngleSpeed - currentAngleSpeed) * 0.05;
    angle += currentAngleSpeed;

    const centerX = width / 2;
    const radius = Math.min(width * 0.28, 140);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const theta = p.baseAngle + angle;

      // 3D coordinates projection
      const x1 = centerX + Math.cos(theta) * radius;
      const z1 = Math.sin(theta); // -1 to 1 depth
      const scale1 = (z1 + 2) / 3; // depth scale

      const x2 = centerX + Math.cos(theta + Math.PI) * radius;
      const z2 = Math.sin(theta + Math.PI);
      const scale2 = (z2 + 2) / 3;

      // Base pair hydrogen bond connector (rung)
      const avgZ = (z1 + z2) / 2;
      const rungAlpha = Math.max(0.15, (avgZ + 1.2) / 2.4 * 0.4);

      ctx.beginPath();
      ctx.moveTo(x1, p.y);
      ctx.lineTo(x2, p.y);

      // Color rungs by base pair type
      let rungColor = "#06b6d4";
      if (p.basePairType === 0) rungColor = "#10b981"; // A-T (green)
      else if (p.basePairType === 1) rungColor = "#38bdf8"; // T-A (cyan)
      else if (p.basePairType === 2) rungColor = "#818cf8"; // G-C (indigo)
      else rungColor = "#ec4899"; // C-G (pink)

      ctx.strokeStyle = `rgba(148, 163, 184, ${rungAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Nucleotide center marker
      const midX = (x1 + x2) / 2;
      ctx.beginPath();
      ctx.arc(midX, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${rungAlpha * 1.5})`;
      ctx.fill();

      // Draw Strand 1 Node (Phosphate-sugar backbone)
      const r1 = Math.max(2, 4.5 * scale1);
      ctx.beginPath();
      ctx.arc(x1, p.y, r1, 0, Math.PI * 2);
      ctx.fillStyle = p.strand1Color;
      ctx.shadowColor = p.strand1Color;
      ctx.shadowBlur = z1 > 0 ? 12 : 0;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Strand 2 Node
      const r2 = Math.max(2, 4.5 * scale2);
      ctx.beginPath();
      ctx.arc(x2, p.y, r2, 0, Math.PI * 2);
      ctx.fillStyle = p.strand2Color;
      ctx.shadowColor = p.strand2Color;
      ctx.shadowBlur = z2 > 0 ? 12 : 0;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    requestAnimationFrame(draw);
  }

  // Initialize
  resize();
  draw();
})();
