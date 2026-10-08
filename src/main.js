/**
 * Hukam Labs — Master Interactive Controller
 * Dynamic catalog filtering, interactive before/after slider, and mobile navigation.
 */

import { PROJECTS, CATEGORIES } from './data/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  initProjectCatalog();
  initBeforeAfterSlider();
  initMobileNavigation();
});

/* ==========================================================================
   1. Dynamic Project Catalog & Real-time Filtering
   ========================================================================== */
function initProjectCatalog() {
  const container = document.getElementById('catalog-container');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('project-search');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderProjects() {
    if (!container) return;

    const filtered = PROJECTS.filter(project => {
      const matchesCategory = (currentCategory === 'all' || project.category === currentCategory);
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inName = project.name.toLowerCase().includes(q);
      const inTagline = project.tagline.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inTech = project.tech && project.tech.some(t => t.toLowerCase().includes(q));

      return inName || inTagline || inDesc || inTech;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-secondary); background: var(--bg-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-md);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" style="margin-bottom: 12px;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 6px;">No projects found</h4>
          <p style="font-size: 0.9rem;">No tools match "${escapeHtml(searchQuery)}" in this category. Try adjusting your search term.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => {
      const statusClass = p.status === 'Active' ? 'active' : (p.status === 'In Development' ? 'dev' : 'complete');
      
      const techHtml = (p.tech || []).slice(0, 4).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('');
      
      const releaseBtn = p.releaseUrl ? `
        <a href="${p.releaseUrl}" target="_blank" rel="noopener noreferrer" class="card-link" style="font-size: 0.8rem;">
          <span>Releases</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
      ` : '';

      return `
        <article class="catalog-card">
          <div>
            <div class="catalog-card-header">
              <span class="brand-badge" style="font-size: 0.65rem;">${escapeHtml(p.badge || p.categoryLabel)}</span>
              <span class="status-badge ${statusClass}">${escapeHtml(p.status)}${p.version ? ` &middot; ${p.version}` : ''}</span>
            </div>
            <h4 class="catalog-card-title">${escapeHtml(p.name)}</h4>
            <p class="catalog-card-desc">${escapeHtml(p.tagline || p.description)}</p>
          </div>

          <div class="catalog-card-meta">
            <div class="tech-tag-group" style="margin-bottom: 12px;">
              ${techHtml}
            </div>

            <div class="catalog-card-actions">
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-github" style="font-size: 0.8rem; padding: 6px 12px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              ${releaseBtn}
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Handle category clicks
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentCategory = tab.dataset.filter || 'all';
      renderProjects();
    });
  });

  // Handle real-time search input
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
  const container = document.getElementById('before-after-slider');
  const divider = document.getElementById('slider-divider');
  const handle = document.getElementById('slider-handle');
  const afterImg = document.getElementById('slider-after-img');

  if (!container || !divider || !handle || !afterImg) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let offsetX = x - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    divider.style.left = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    afterImg.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
  }

  // Pointer / Mouse events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch events for mobile/tablet
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    if (e.touches[0]) setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches[0]) setSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Set default 50% state
  divider.style.left = '50%';
  handle.style.left = '50%';
  afterImg.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
}

/* ==========================================================================
   3. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close when clicking nav links
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
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
