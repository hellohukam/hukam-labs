/**
 * Hukam Labs — Master Interactive Controller
 * Dynamic catalog filtering, interactive before/after slider, and code copying.
 */

import { PROJECTS, CATEGORIES, STATUS_LIST } from './data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initProjectCatalog();
  initBeforeAfterSlider();
  initMobileNavigation();
  initCodeCopyButtons();
});

/* ==========================================================================
   1. Dynamic Project Catalog & Real-time Filter
   ========================================================================== */
function initProjectCatalog() {
  const container = document.getElementById('catalog-grid');
  if (!container) return;

  const filterBtns = document.querySelectorAll('.filter-btn');
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
        <div style="grid-column: 1 / -1; padding: 48px 24px; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-contrast); border-radius: var(--radius-sm);">
          <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">No Repositories Found</div>
          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 460px; margin: 0 auto;">
            No tools match "${escapeHtml(searchQuery)}" in this domain. Try broadening your search query or reset the filter.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => {
      const statusClass = p.status === 'Active' ? 'active' : (p.status === 'In Development' ? 'dev' : 'complete');
      const techChips = (p.tech || []).slice(0, 3).map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('');

      return `
        <article class="catalog-item-card" data-category="${p.category}" data-status="${p.status}">
          <div>
            <div class="item-top">
              <span class="badge-tag">${escapeHtml(p.badge || p.categoryLabel)}</span>
              <span class="status-indicator ${statusClass}">${escapeHtml(p.status)}${p.version ? ` &middot; ${p.version}` : ''}</span>
            </div>

            <h3 class="item-title">
              <a href="${p.projectRoute}">${escapeHtml(p.name)}</a>
            </h3>

            <p class="item-tagline">${escapeHtml(p.tagline)}</p>

            ${p.problem ? `
              <div style="background: rgba(255,255,255,0.02); border-left: 2px solid var(--border-hairline); padding: 8px 12px; margin-bottom: 16px; font-size: 0.82rem; color: var(--text-muted);">
                <strong style="color: var(--text-secondary); display: block; font-size: 0.72rem; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 2px;">Solves:</strong>
                ${escapeHtml(p.problem)}
              </div>
            ` : ''}
          </div>

          <div class="item-footer">
            <div class="tech-pill-list" style="margin-bottom: 0;">
              ${techChips}
            </div>

            <div style="display: flex; align-items: center; gap: 12px;">
              <a href="${p.projectRoute}" class="item-link-primary">
                <span>Details</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); font-size: 0.82rem;" title="View on GitHub">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Filter tab events
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter || 'all';
      renderProjects();
    });
  });

  // Search input events
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
   2. Interactive Before/After Split Slider
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

  // Touch support for mobile / tablet
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

  // Initial 50% split
  divider.style.left = '50%';
  handle.style.left = '50%';
  afterImg.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
}

/* ==========================================================================
   3. Mobile Navigation Drawer
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
   4. One-Click Code / CLI Copying
   ========================================================================== */
function initCodeCopyButtons() {
  document.querySelectorAll('.copy-cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.dataset.copyText || btn.previousElementSibling?.textContent;
      if (!targetText) return;

      navigator.clipboard.writeText(targetText.trim()).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = `<span style="color: var(--color-emerald);">Copied!</span>`;
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
