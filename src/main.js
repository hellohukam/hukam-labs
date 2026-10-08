/**
 * Hukam Labs — Master Interactive Controller
 * Light / White Architectural Design
 * Google Labs / Apple level interaction polish
 */

import { PROJECTS, CATEGORIES, LAB_STAGES, FOUNDER_INFO } from './data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroInteractiveCanvas();
  initFlowQueueSimulator();
  initBeforeAfterSlider();
  initVectorToggle();
  initForensicRepairDemo();
  initProjectCatalog();
  initRepoInspector();
  initMobileNavigation();
  initCodeCopyButtons();
});

/* ==========================================================================
   1. HERO POINTER-REACTIVE CANVAS (Subtle ambient field with damping)
   ========================================================================== */
function initHeroInteractiveCanvas() {
  const canvas = document.getElementById('hero-interactive-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Respect user preference for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width = 0;
  let height = 0;
  let animationFrameId = null;

  // Pointer state with momentum
  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    radius: 180,
    active: false
  };

  const nodeCount = 38;
  const nodes = [];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    if (nodes.length === 0) {
      createNodes();
    }
  }

  function createNodes() {
    nodes.length = 0;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius: Math.random() * 1.5 + 1.2,
        color: i % 4 === 0 ? 'rgba(37, 99, 235, ' : 'rgba(15, 23, 42, '
      });
    }
  }

  function handleMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.targetX = e.clientX - rect.left;
    mouse.targetY = e.clientY - rect.top;
    mouse.active = true;
  }

  function handleMouseLeave() {
    mouse.active = false;
    mouse.targetX = -1000;
    mouse.targetY = -1000;
  }

  window.addEventListener('resize', resize);
  const heroSection = canvas.parentElement;
  if (heroSection) {
    heroSection.addEventListener('mousemove', handleMouseMove, { passive: true });
    heroSection.addEventListener('mouseleave', handleMouseLeave, { passive: true });
  }

  resize();

  if (prefersReducedMotion) {
    // Static calm rendering for users with vestibular sensitivity
    drawStaticFrame();
    return;
  }

  function drawStaticFrame() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.baseRadius, 0, Math.PI * 2);
      ctx.fillStyle = `${n.color}0.18)`;
      ctx.fill();
    }
  }

  let isVisible = true;
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible && !animationFrameId) {
      render();
    }
  }, { threshold: 0.05 });
  observer.observe(heroSection);

  function render() {
    if (!isVisible) {
      animationFrameId = null;
      return;
    }

    // Smooth mouse lerping
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    ctx.clearRect(0, 0, width, height);

    // Update & draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      node.x += node.vx;
      node.y += node.vy;

      // Soft boundary bounce
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      // Mouse proximity deflection
      if (mouse.active) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 0.8;
          node.x -= (dx / dist) * force;
          node.y -= (dy / dist) * force;
        }
      }

      // Draw node point
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.baseRadius, 0, Math.PI * 2);
      ctx.fillStyle = `${node.color}0.35)`;
      ctx.fill();

      // Connective filaments to neighboring nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const nodeB = nodes[j];
        const dx = node.x - nodeB.x;
        const dy = node.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 125) {
          const alpha = (1 - dist / 125) * 0.12;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.strokeStyle = `rgba(15, 23, 42, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. HUKAM FLOW QUEUE SIMULATOR (Flagship 1)
   ========================================================================== */
function initFlowQueueSimulator() {
  const container = document.getElementById('flow-simulator');
  if (!container) return;

  const btnRun = document.getElementById('flow-sim-run');
  const btnReset = document.getElementById('flow-sim-reset');
  const logTerminal = document.getElementById('flow-sim-terminal');
  const steps = [
    { el: document.getElementById('flow-step-1'), stateEl: document.getElementById('flow-state-1') },
    { el: document.getElementById('flow-step-2'), stateEl: document.getElementById('flow-state-2') },
    { el: document.getElementById('flow-step-3'), stateEl: document.getElementById('flow-state-3') },
    { el: document.getElementById('flow-step-4'), stateEl: document.getElementById('flow-state-4') }
  ];

  if (!btnRun || !steps[0].el) return;

  let isRunning = false;
  let timerId = null;

  function resetSteps() {
    clearTimeout(timerId);
    isRunning = false;
    btnRun.disabled = false;
    btnRun.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      <span>Run Batch Demo</span>
    `;

    steps.forEach((s, idx) => {
      if (!s.el || !s.stateEl) return;
      s.el.className = 'queue-step-item';
      s.stateEl.className = 'step-state waiting';
      s.stateEl.textContent = 'WAITING';
    });

    if (logTerminal) {
      logTerminal.innerHTML = `<span class="terminal-comment">// Idle. Click "Run Batch Demo" to simulate Chrome Side Panel queue.</span>`;
    }
  }

  function setStepState(index, state, text) {
    const s = steps[index];
    if (!s || !s.el || !s.stateEl) return;
    s.el.className = `queue-step-item ${state}`;
    s.stateEl.className = `step-state ${state}`;
    s.stateEl.textContent = text;
  }

  function appendLog(line) {
    if (!logTerminal) return;
    logTerminal.innerHTML += `<br>${line}`;
    logTerminal.scrollTop = logTerminal.scrollHeight;
  }

  btnRun.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    btnRun.disabled = true;
    btnRun.innerHTML = `<span>Executing Batch...</span>`;

    if (logTerminal) {
      logTerminal.innerHTML = `<span class="terminal-info">[SidePanel] Initializing Tab #241 Session (flow.google.com)...</span>`;
    }

    // Step 1: Hook Injection
    setStepState(0, 'running', 'INJECTING');
    appendLog(`<span class="terminal-cmd">&gt; window.__hukam_flow_hook__ injected into MAIN world</span>`);

    timerId = setTimeout(() => {
      setStepState(0, 'done', 'HOOKED');
      appendLog(`<span class="terminal-success">&check; Angular Event Listener Registered (bypass validation)</span>`);

      // Step 2: Prompt Dispatch
      setStepState(1, 'running', 'DISPATCHING');
      appendLog(`<span class="terminal-cmd">&gt; Dispatching prompt: "Cyberpunk neon street at dusk, cinematic 8k"</span>`);

      timerId = setTimeout(() => {
        setStepState(1, 'done', 'DISPATCHED');
        appendLog(`<span class="terminal-success">&check; Angular form input updated; Generate click synthesized</span>`);

        // Step 3: Network Interception
        setStepState(2, 'running', 'LISTENING');
        appendLog(`<span class="terminal-cmd">&gt; webRequest listening for /batchexecute response...</span>`);

        timerId = setTimeout(() => {
          setStepState(2, 'done', 'INTERCEPTED');
          appendLog(`<span class="terminal-success">&check; 200 OK batchexecute intercepted. Image media payload parsed.</span>`);

          // Step 4: Auto-download
          setStepState(3, 'running', 'DOWNLOADING');
          appendLog(`<span class="terminal-cmd">&gt; chrome.downloads.download({ url, filename: "flow_01_cyberpunk.png" })</span>`);

          timerId = setTimeout(() => {
            setStepState(3, 'done', 'COMPLETED');
            appendLog(`<span class="terminal-success">&check; [Queue 01/01 Complete] Jitter delay set: 3450ms.</span>`);
            isRunning = false;
            btnRun.disabled = false;
            btnRun.innerHTML = `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Batch Complete (Click to Rerun)</span>
            `;
          }, 900);
        }, 900);
      }, 900);
    }, 800);
  });

  if (btnReset) {
    btnReset.addEventListener('click', resetSteps);
  }
}

/* ==========================================================================
   3. BEFORE / AFTER SPLIT SLIDER (Flagship 2: Hukam AI Upscaler Pro)
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('interactive-slider');
  const divider = document.getElementById('slider-divider');
  const handle = document.getElementById('slider-handle');
  const afterImg = document.getElementById('slider-after-img');

  if (!container || !divider || !handle || !afterImg) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    let offset = clientX - rect.left;
    if (offset < 0) offset = 0;
    if (offset > rect.width) offset = rect.width;

    const pct = (offset / rect.width) * 100;
    divider.style.left = `${pct}%`;
    handle.style.left = `${pct}%`;
    afterImg.style.clipPath = `polygon(0 0, ${pct}% 0, ${pct}% 100%, 0 100%)`;
  }

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Keyboard accessibility
  container.tabIndex = 0;
  container.addEventListener('keydown', (e) => {
    const currentLeft = parseFloat(divider.style.left) || 50;
    if (e.key === 'ArrowLeft') {
      const newPct = Math.max(0, currentLeft - 5);
      divider.style.left = `${newPct}%`;
      handle.style.left = `${newPct}%`;
      afterImg.style.clipPath = `polygon(0 0, ${newPct}% 0, ${newPct}% 100%, 0 100%)`;
    } else if (e.key === 'ArrowRight') {
      const newPct = Math.min(100, currentLeft + 5);
      divider.style.left = `${newPct}%`;
      handle.style.left = `${newPct}%`;
      afterImg.style.clipPath = `polygon(0 0, ${newPct}% 0, ${newPct}% 100%, 0 100%)`;
    }
  });

  // Initialize at 50%
  divider.style.left = '50%';
  handle.style.left = '50%';
  afterImg.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
}

/* ==========================================================================
   4. SVG MAGIC CLEANER VECTOR / RASTER INTERACTIVE TOGGLE (Flagship 3)
   ========================================================================== */
function initVectorToggle() {
  const btnRaster = document.getElementById('toggle-raster-mode');
  const btnVector = document.getElementById('toggle-vector-mode');
  const previewSvg = document.getElementById('vector-preview-graphic');
  const statusBadge = document.getElementById('vector-mode-status');

  if (!btnRaster || !btnVector || !previewSvg) return;

  btnRaster.addEventListener('click', () => {
    btnRaster.classList.add('active');
    btnVector.classList.remove('active');
    previewSvg.classList.remove('mode-vector');
    previewSvg.classList.add('mode-raster');
    if (statusBadge) {
      statusBadge.textContent = 'Raster Mode · Transparent PNG (briaai/RMBG-1.4)';
    }
  });

  btnVector.addEventListener('click', () => {
    btnVector.classList.add('active');
    btnRaster.classList.remove('active');
    previewSvg.classList.remove('mode-raster');
    previewSvg.classList.add('mode-vector');
    if (statusBadge) {
      statusBadge.textContent = 'Vector Mode · 42 Bezier Curves · Scalable SVG';
    }
  });
}

/* ==========================================================================
   5. AI FORENSIC REPAIR BINARY HEADER INSPECTOR (Flagship 4)
   ========================================================================== */
function initForensicRepairDemo() {
  const btnInspect = document.getElementById('forensic-run-repair');
  const hexDisplay = document.getElementById('forensic-hex-display');
  const statusLine = document.getElementById('forensic-status-line');

  if (!btnInspect || !hexDisplay || !statusLine) return;

  let isRepaired = false;

  btnInspect.addEventListener('click', () => {
    isRepaired = !isRepaired;

    if (isRepaired) {
      btnInspect.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
        <span>Reset Corrupted State</span>
      `;
      btnInspect.classList.remove('btn-primary');
      btnInspect.classList.add('btn-secondary');

      hexDisplay.innerHTML = `
<span style="color: var(--accent-emerald); font-weight: 700;">89 50 4E 47 0D 0A 1A 0A</span>  <span style="color: var(--text-muted);">&middot; PNG ISO Magic Signature (OK)</span>
00 00 00 0D 49 48 44 52  <span style="color: var(--text-muted);">&middot; IHDR Chunk Length 13 bytes</span>
00 00 04 00 00 00 04 00  <span style="color: var(--text-muted);">&middot; Width: 1024px &times; Height: 1024px</span>
08 06 00 00 00 <span style="color: var(--accent-emerald); font-weight: 700;">8E 93 4B 2F</span>  <span style="color: var(--text-muted);">&middot; Valid BitDepth 8, RGBA + CRC32 Validated</span>
00 00 00 09 70 48 59 73  <span style="color: var(--text-muted);">&middot; Synthesized pHYs Resolution Chunk</span>
      `.trim();

      statusLine.className = 'forensic-status success';
      statusLine.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Header Rebuilt: 100% Compatible with Adobe Illustrator &amp; InDesign</span>
      `;
    } else {
      btnInspect.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Run Lossless Forensic Repair</span>
      `;
      btnInspect.classList.remove('btn-secondary');
      btnInspect.classList.add('btn-primary');

      hexDisplay.innerHTML = `
<span style="color: var(--accent-rose); font-weight: 700;">00 00 00 00 00 00 00 00</span>  <span style="color: var(--text-muted);">&middot; NULL Padding / Missing Magic Signature</span>
49 48 44 52 00 00 00 00  <span style="color: var(--accent-rose);">&middot; Truncated IHDR chunk descriptor</span>
?? ?? ?? ?? ?? ?? ?? ??  <span style="color: var(--accent-rose);">&middot; Unsynchronized pixel buffer markers</span>
00 00 00 00 00 00 00 00  <span style="color: var(--text-muted);">&middot; Missing pHYs / Corrupted color profile</span>
      `.trim();

      statusLine.className = 'forensic-status error';
      statusLine.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <span>Error: Adobe Illustrator throws "File format cannot be placed"</span>
      `;
    }
  });
}

/* ==========================================================================
   6. GOOGLE LABS-STYLE PROJECT DIRECTORY & LIVE SEARCH FILTER
   ========================================================================== */
function initProjectCatalog() {
  const container = document.getElementById('projects-masonry-grid') || document.getElementById('catalog-grid');
  if (!container) return;

  const filterBtns = document.querySelectorAll('.catalog-filter-btn, .filter-btn');
  const searchInput = document.getElementById('catalog-search');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderProjects() {
    const filtered = PROJECTS.filter(project => {
      const matchesCategory = (currentCategory === 'all' || project.category === currentCategory);
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inName = project.name.toLowerCase().includes(q);
      const inTagline = project.tagline.toLowerCase().includes(q);
      const inProblem = project.problem && project.problem.toLowerCase().includes(q);
      const inSolution = project.solution && project.solution.toLowerCase().includes(q);
      const inTech = project.tech && project.tech.some(t => t.toLowerCase().includes(q));

      return inName || inTagline || inProblem || inSolution || inTech;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 56px 24px; text-align: center; background: #ffffff; border: 1px dashed var(--border-medium); border-radius: var(--radius-md);">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">No Repositories Found</div>
          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 460px; margin: 0 auto;">
            No tools match "${escapeHtml(searchQuery)}" in this domain. Try clearing your search query or selecting "All Projects".
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => {
      const statusClass = p.status === 'Active' ? 'active' : (p.status === 'In Development' ? 'dev' : 'complete');
      const techChips = (p.tech || []).slice(0, 3).map(t => `<span class="tech-tag-chip">${escapeHtml(t)}</span>`).join('');

      return `
        <article class="project-card-variant" data-category="${p.category}" data-status="${p.status}">
          <div class="card-top-meta">
            <div class="card-logo-container" title="${escapeHtml(p.name)}">
              ${p.logoSvg || `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"></rect></svg>`}
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="badge-tag">${escapeHtml(p.badge || p.categoryLabel)}</span>
              <span class="status-indicator ${statusClass}">${escapeHtml(p.status)}${p.version ? ` &middot; ${p.version}` : ''}</span>
            </div>
          </div>

          <h3 class="card-title-text">
            <a href="${p.projectRoute}" style="color: inherit; text-decoration: none;">${escapeHtml(p.name)}</a>
          </h3>

          <p class="card-tagline-text">${escapeHtml(p.tagline)}</p>

          ${p.problem ? `
            <div style="background: var(--bg-surface-subtle); border-left: 2px solid var(--border-medium); padding: 8px 12px; margin-bottom: 16px; border-radius: 0 var(--radius-xs) var(--radius-xs) 0; font-size: 0.82rem; color: var(--text-secondary);">
              <strong style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 2px;">Solves:</strong>
              ${escapeHtml(p.problem)}
            </div>
          ` : ''}

          <div class="tech-tag-row" style="margin-bottom: 16px;">
            ${techChips}
          </div>

          <div class="card-bottom-bar">
            <a href="${p.projectRoute}" class="card-link-btn">
              <span>Explore Architecture</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); display: flex; align-items: center; gap: 4px; font-size: 0.8rem;" title="View Source on GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter || 'all';
      renderProjects();
    });
  });

  // Real-time Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProjects();
    });
  }

  // Initial render
  renderProjects();
}

/* ==========================================================================
   7. OPEN SOURCE REPOSITORY INSPECTOR (Built to Be Used Section)
   ========================================================================== */
function initRepoInspector() {
  const tabsList = document.getElementById('repo-tabs-list');
  const displayContainer = document.getElementById('repo-inspector-display');

  if (!tabsList || !displayContainer) return;

  const keyRepos = [
    {
      id: "hukam-flow",
      name: "hellohukam / hukam-flow",
      lang: "JavaScript (MV3)",
      license: "MIT License",
      target: "Chromium Desktop (Extensions)",
      telemetry: "0 KB (Zero Telemetry)",
      clone: "git clone https://github.com/hellohukam/hukam-flow.git",
      desc: "Manifest V3 Side Panel queue runner & batchexecute API interceptor for flow.google.com."
    },
    {
      id: "hukam-ai-upscaler",
      name: "hellohukam / hukam-ai-upscaler",
      lang: "Python / Vulkan NCNN C++",
      license: "MIT License",
      target: "Windows x64 Native (.EXE)",
      telemetry: "0 KB (Offline On-Device)",
      clone: "git clone https://github.com/hellohukam/hukam-ai-upscaler.git",
      desc: "Hardware-accelerated Real-ESRGAN super-resolution standalone 55MB application."
    },
    {
      id: "svg-magic-cleaner",
      name: "hellohukam / svg-magic-cleaner",
      lang: "TypeScript / React 18 / WebGPU",
      license: "MIT License",
      target: "Modern Web Browsers (WebGPU)",
      telemetry: "0 KB (Private In-Browser)",
      clone: "git clone https://github.com/hellohukam/svg-magic-cleaner.git",
      desc: "Client-side neural background removal (RMBG-1.4) and vector path generation."
    },
    {
      id: "ai-image-forensic-repair",
      name: "hellohukam / ai-image-forensic-repair",
      lang: "Python / Pillow / Struct",
      license: "MIT License",
      target: "Windows x64 CLI & Desktop",
      telemetry: "0 KB (Offline Binary Parser)",
      clone: "git clone https://github.com/hellohukam/ai-image-forensic-repair.git",
      desc: "Lossless pixel container reconstructor fixing corrupt PNG headers for Adobe Illustrator."
    },
    {
      id: "vector-craft-studio",
      name: "hellohukam / vector-craft-studio",
      lang: "TypeScript / HTML5 Canvas / WASM",
      license: "MIT License",
      target: "Web & Cross-Platform",
      telemetry: "0 KB (Client Execution)",
      clone: "git clone https://github.com/hellohukam/vector-craft-studio.git",
      desc: "Precision vector node editor with bezier curve editing and clean SVG export."
    }
  ];

  function selectRepo(repo) {
    displayContainer.innerHTML = `
      <div style="margin-bottom: 20px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 8px;">
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-pure); margin: 0;">${escapeHtml(repo.name)}</h4>
          <span class="badge-tag">${escapeHtml(repo.license)}</span>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0;">${escapeHtml(repo.desc)}</p>
      </div>

      <div class="repo-details-display" style="margin-bottom: 24px;">
        <div class="repo-metric-cell">
          <span class="repo-metric-label">Primary Stack</span>
          <span class="repo-metric-val">${escapeHtml(repo.lang)}</span>
        </div>
        <div class="repo-metric-cell">
          <span class="repo-metric-label">Runtime Target</span>
          <span class="repo-metric-val">${escapeHtml(repo.target)}</span>
        </div>
        <div class="repo-metric-cell">
          <span class="repo-metric-label">Network Telemetry</span>
          <span class="repo-metric-val" style="color: var(--accent-emerald);">${escapeHtml(repo.telemetry)}</span>
        </div>
        <div class="repo-metric-cell">
          <span class="repo-metric-label">Open Source License</span>
          <span class="repo-metric-val">${escapeHtml(repo.license)}</span>
        </div>
      </div>

      <div style="background: var(--bg-surface-subtle); border: 1px solid var(--border-medium); border-radius: var(--radius-xs); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <code style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-pure);">${escapeHtml(repo.clone)}</code>
        <button class="btn btn-secondary copy-cmd-btn" data-copy-text="${escapeHtml(repo.clone)}" style="font-size: 0.78rem; padding: 6px 12px;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy Clone Command</span>
        </button>
      </div>
    `;

    // Reattach copy listener for dynamically inserted button
    const btn = displayContainer.querySelector('.copy-cmd-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        navigator.clipboard.writeText(repo.clone).then(() => {
          const original = btn.innerHTML;
          btn.innerHTML = `<span style="color: var(--accent-emerald); font-weight: 600;">Copied!</span>`;
          setTimeout(() => { btn.innerHTML = original; }, 2000);
        });
      });
    }
  }

  // Populate tabs
  tabsList.innerHTML = keyRepos.map((r, i) => `
    <button class="repo-tab-item ${i === 0 ? 'active' : ''}" data-repo-id="${r.id}">
      ${escapeHtml(r.id)}
    </button>
  `).join('');

  tabsList.querySelectorAll('.repo-tab-item').forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabsList.querySelectorAll('.repo-tab-item').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectRepo(keyRepos[index]);
    });
  });

  // Select initial repo
  selectRepo(keyRepos[0]);
}

/* ==========================================================================
   8. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   9. ONE-CLICK CODE & COMMAND COPYING
   ========================================================================== */
function initCodeCopyButtons() {
  document.querySelectorAll('.copy-cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.dataset.copyText || btn.previousElementSibling?.textContent;
      if (!targetText) return;

      navigator.clipboard.writeText(targetText.trim()).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<span style="color: var(--accent-emerald); font-weight: 600;">Copied!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 2000);
      });
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
