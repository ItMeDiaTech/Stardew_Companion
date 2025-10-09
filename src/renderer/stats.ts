import './stats.css';
import { ElectronAPI } from '@preload/index';
import { Stat, StatCategory } from '@shared/types';
import { STATS, getAllStats, getStatsByCategory, searchStats, getLevelableStats, getStatsWithMisconceptions, getStatById } from '@shared/data/stats';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
const levelableOnlyCheckbox = document.getElementById('levelable-only') as HTMLInputElement;
const misconceptionsOnlyCheckbox = document.getElementById('misconceptions-only') as HTMLInputElement;
const statsGrid = document.getElementById('stats-grid') as HTMLElement;
const statCountEl = document.getElementById('stat-count') as HTMLElement;
const filterStatusEl = document.getElementById('filter-status') as HTMLElement;

// Window controls
const minimizeBtn = document.getElementById('minimize-btn') as HTMLButtonElement;
const maximizeBtn = document.getElementById('maximize-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

// Stat Modal elements
const statModal = document.getElementById('stat-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalStatName = document.getElementById('modal-stat-name') as HTMLElement;
const modalStatCategory = document.getElementById('modal-stat-category') as HTMLElement;
const modalStatLevelable = document.getElementById('modal-stat-levelable') as HTMLElement;
const modalStatDescription = document.getElementById('modal-stat-description') as HTMLElement;
const modalBaseValue = document.getElementById('modal-base-value') as HTMLElement;
const modalBaseValueText = document.getElementById('modal-base-value-text') as HTMLElement;
const modalMaxLevel = document.getElementById('modal-max-level') as HTMLElement;
const modalMaxLevelText = document.getElementById('modal-max-level-text') as HTMLElement;
const modalLeveling = document.getElementById('modal-leveling') as HTMLElement;
const modalLevelingMethod = document.getElementById('modal-leveling-method') as HTMLElement;
const modalLevelingBenefits = document.getElementById('modal-leveling-benefits') as HTMLElement;
const modalProfessions = document.getElementById('modal-professions') as HTMLElement;
const modalProfessionsContent = document.getElementById('modal-professions-content') as HTMLElement;
const modalEffects = document.getElementById('modal-effects') as HTMLElement;
const modalEffectsContent = document.getElementById('modal-effects-content') as HTMLElement;
const modalBuffs = document.getElementById('modal-buffs') as HTMLElement;
const modalBuffsContent = document.getElementById('modal-buffs-content') as HTMLElement;
const modalMisconceptions = document.getElementById('modal-misconceptions') as HTMLElement;
const modalMisconceptionsContent = document.getElementById('modal-misconceptions-content') as HTMLElement;
const modalRelated = document.getElementById('modal-related') as HTMLElement;
const modalRelatedContent = document.getElementById('modal-related-content') as HTMLElement;

// State
let currentFilter = '';
let currentCategory: StatCategory | 'all' = 'all';
let levelableOnly = false;
let misconceptionsOnly = false;

// Initialize
function init() {
  setupWindowControls();
  setupEventListeners();
  displayStats(STATS);
  updateStatCount();
}

function setupWindowControls() {
  minimizeBtn.addEventListener('click', () => electronAPI.minimizeWindow());
  maximizeBtn.addEventListener('click', () => electronAPI.maximizeWindow());
  closeBtn.addEventListener('click', () => electronAPI.closeWindow());
}

function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', () => {
    currentFilter = searchInput.value;
    filterStats();
  });

  // Category filter
  categoryFilter.addEventListener('change', () => {
    currentCategory = categoryFilter.value as StatCategory | 'all';
    filterStats();
  });

  // Levelable only checkbox
  levelableOnlyCheckbox.addEventListener('change', () => {
    levelableOnly = levelableOnlyCheckbox.checked;
    filterStats();
  });

  // Misconceptions only checkbox
  misconceptionsOnlyCheckbox.addEventListener('change', () => {
    misconceptionsOnly = misconceptionsOnlyCheckbox.checked;
    filterStats();
  });

  // Modal close button
  modalCloseBtn.addEventListener('click', closeStatModal);

  // Close modal on background click
  statModal.addEventListener('click', (e) => {
    if (e.target === statModal) closeStatModal();
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && statModal.style.display === 'flex') {
      closeStatModal();
    }
  });
}

function displayStats(stats: Stat[]) {
  statsGrid.innerHTML = stats.map(stat => createStatCard(stat)).join('');

  // Add click handlers
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.addEventListener('click', () => openStatModal(stats[index]));
  });
}

function createStatCard(stat: Stat): string {
  return `
    <div class="stat-card" data-stat-id="${stat.id}">
      <div class="stat-card-header">
        <h3>${stat.name}</h3>
        <div class="stat-badges">
          <span class="category-badge category-${stat.category}">${formatCategory(stat.category)}</span>
          ${stat.isLevelable ? `<span class="levelable-badge">Levelable (0-${stat.maxLevel})</span>` : ''}
          ${stat.misconceptions && stat.misconceptions.length > 0 ? '<span class="misconception-badge">⚠️ Has Misconceptions</span>' : ''}
        </div>
      </div>
      <p class="stat-card-description">${stat.description}</p>
      <div class="stat-card-footer">
        ${stat.baseValue ? `<span class="base-value">Base: ${stat.baseValue}</span>` : ''}
        <span class="view-details">View Details →</span>
      </div>
    </div>
  `;
}

function formatCategory(category: StatCategory): string {
  const categoryNames: Record<StatCategory, string> = {
    'skill': 'Skill',
    'combat': 'Combat',
    'attribute': 'Attribute',
    'special': 'Special'
  };
  return categoryNames[category] || category;
}

function filterStats() {
  let filtered = STATS;

  // Apply search filter
  if (currentFilter) {
    filtered = searchStats(currentFilter);
  }

  // Apply category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(stat => stat.category === currentCategory);
  }

  // Apply levelable only filter
  if (levelableOnly) {
    filtered = filtered.filter(stat => stat.isLevelable);
  }

  // Apply misconceptions only filter
  if (misconceptionsOnly) {
    filtered = filtered.filter(stat => stat.misconceptions && stat.misconceptions.length > 0);
  }

  displayStats(filtered);
  updateStatCount(filtered.length);
  updateFilterStatus();
}

function updateStatCount(count?: number) {
  const total = count !== undefined ? count : STATS.length;
  statCountEl.textContent = `${total} stat${total !== 1 ? 's' : ''}`;
}

function updateFilterStatus() {
  const filters: string[] = [];

  if (currentCategory !== 'all') {
    filters.push(formatCategory(currentCategory));
  }
  if (levelableOnly) {
    filters.push('Levelable');
  }
  if (misconceptionsOnly) {
    filters.push('With Misconceptions');
  }
  if (currentFilter) {
    filters.push(`"${currentFilter}"`);
  }

  filterStatusEl.textContent = filters.length > 0
    ? `Showing: ${filters.join(', ')}`
    : 'Showing: All';
}

function openStatModal(stat: Stat) {
  // Set header info
  modalStatName.textContent = stat.name;
  modalStatCategory.textContent = formatCategory(stat.category);
  modalStatCategory.className = `stat-category-badge category-${stat.category}`;

  // Show levelable badge if applicable
  if (stat.isLevelable && stat.maxLevel) {
    modalStatLevelable.textContent = `Levelable (0-${stat.maxLevel})`;
    modalStatLevelable.style.display = 'inline-block';
  } else {
    modalStatLevelable.style.display = 'none';
  }

  // Set description
  modalStatDescription.textContent = stat.description;

  // Set base value
  if (stat.baseValue) {
    modalBaseValueText.textContent = stat.baseValue;
    modalBaseValue.style.display = 'flex';
  } else {
    modalBaseValue.style.display = 'none';
  }

  // Set max level
  if (stat.isLevelable && stat.maxLevel) {
    modalMaxLevelText.textContent = stat.maxLevel.toString();
    modalMaxLevel.style.display = 'flex';
  } else {
    modalMaxLevel.style.display = 'none';
  }

  // Leveling information
  if (stat.levelingInfo) {
    modalLevelingMethod.textContent = stat.levelingInfo.method;

    // Benefits
    if (stat.levelingInfo.benefits && stat.levelingInfo.benefits.length > 0) {
      modalLevelingBenefits.innerHTML = `
        <ul class="benefits-list">
          ${stat.levelingInfo.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
      `;
    }

    modalLeveling.style.display = 'block';
  } else {
    modalLeveling.style.display = 'none';
  }

  // Professions
  if (stat.levelingInfo?.professions && stat.levelingInfo.professions.length > 0) {
    const level5Profs = stat.levelingInfo.professions.filter(p => p.level === 5);
    const level10Profs = stat.levelingInfo.professions.filter(p => p.level === 10);

    let professionsHTML = '';

    if (level5Profs.length > 0) {
      professionsHTML += '<div class="profession-tier"><h4>Level 5 Professions</h4>';
      professionsHTML += level5Profs.map(prof => `
        <div class="profession-card">
          <div class="profession-name">${prof.name}</div>
          <div class="profession-description">${prof.description}</div>
        </div>
      `).join('');
      professionsHTML += '</div>';
    }

    if (level10Profs.length > 0) {
      professionsHTML += '<div class="profession-tier"><h4>Level 10 Professions</h4>';
      professionsHTML += level10Profs.map(prof => `
        <div class="profession-card">
          <div class="profession-name">${prof.name}</div>
          ${prof.prerequisite ? `<div class="profession-prereq">Requires: ${prof.prerequisite}</div>` : ''}
          <div class="profession-description">${prof.description}</div>
        </div>
      `).join('');
      professionsHTML += '</div>';
    }

    modalProfessionsContent.innerHTML = professionsHTML;
    modalProfessions.style.display = 'block';
  } else {
    modalProfessions.style.display = 'none';
  }

  // Gameplay effects
  if (stat.gameplayEffects && stat.gameplayEffects.length > 0) {
    modalEffectsContent.innerHTML = stat.gameplayEffects.map(effect => `
      <div class="effect-item">
        <div class="effect-description">${effect.description}</div>
        ${effect.formula ? `<div class="effect-formula">Formula: <code>${effect.formula}</code></div>` : ''}
        ${effect.examples && effect.examples.length > 0 ? `
          <ul class="effect-examples">
            ${effect.examples.map(example => `<li>${example}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('');
    modalEffects.style.display = 'block';
  } else {
    modalEffects.style.display = 'none';
  }

  // Buffs
  if (stat.buffs && stat.buffs.length > 0) {
    modalBuffsContent.innerHTML = stat.buffs.map(buff => `
      <div class="buff-item">
        <div class="buff-source">${buff.source}</div>
        <div class="buff-effect">${buff.effect}</div>
        ${buff.duration ? `<div class="buff-duration">Duration: ${buff.duration}</div>` : ''}
        ${buff.stackable !== undefined ? `<div class="buff-stackable">${buff.stackable ? '✓ Stackable' : '✗ Does not stack'}</div>` : ''}
      </div>
    `).join('');
    modalBuffs.style.display = 'block';
  } else {
    modalBuffs.style.display = 'none';
  }

  // Misconceptions
  if (stat.misconceptions && stat.misconceptions.length > 0) {
    modalMisconceptionsContent.innerHTML = stat.misconceptions.map(misc => `
      <div class="misconception-item">
        <div class="misconception-myth">
          <span class="myth-label">❌ Myth:</span>
          <span class="myth-text">${misc.myth}</span>
        </div>
        <div class="misconception-reality">
          <span class="reality-label">✅ Reality:</span>
          <span class="reality-text">${misc.reality}</span>
        </div>
        ${misc.explanation ? `
          <div class="misconception-explanation">
            <span class="explanation-label">📖 Explanation:</span>
            <span class="explanation-text">${misc.explanation}</span>
          </div>
        ` : ''}
      </div>
    `).join('');
    modalMisconceptions.style.display = 'block';
  } else {
    modalMisconceptions.style.display = 'none';
  }

  // Related stats
  if (stat.relatedStats && stat.relatedStats.length > 0) {
    const relatedStatObjects = stat.relatedStats
      .map(id => getStatById(id))
      .filter((s): s is Stat => s !== undefined);

    if (relatedStatObjects.length > 0) {
      modalRelatedContent.innerHTML = relatedStatObjects.map(relatedStat => `
        <div class="related-stat-item" data-stat-id="${relatedStat.id}">
          <span class="related-stat-name">${relatedStat.name}</span>
          <span class="related-stat-category category-badge category-${relatedStat.category}">${formatCategory(relatedStat.category)}</span>
        </div>
      `).join('');

      // Add click handlers for related stats
      const relatedItems = modalRelatedContent.querySelectorAll('.related-stat-item');
      relatedItems.forEach((item) => {
        item.addEventListener('click', () => {
          const statId = item.getAttribute('data-stat-id');
          if (statId) {
            const clickedStat = getStatById(statId);
            if (clickedStat) {
              openStatModal(clickedStat);
            }
          }
        });
      });

      modalRelated.style.display = 'block';
    } else {
      modalRelated.style.display = 'none';
    }
  } else {
    modalRelated.style.display = 'none';
  }

  // Show modal
  statModal.style.display = 'flex';
}

function closeStatModal() {
  statModal.style.display = 'none';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
