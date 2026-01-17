import './fishing.css';
import { ElectronAPI } from '@preload/index';
import { Fish, FishLocationType, Season } from '@shared/types';
import { FISH, getAllFish, getLegendaryFish, getCrabPotFish, getStandardFish, searchFish, getFishStats } from '@shared/data/fish';
import { FISHING_RODS, BAITS, TACKLES, FISHING_PROFESSIONS, FISHING_TIPS } from '@shared/data/fishing-equipment';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements - Tabs
const tabBtns = document.querySelectorAll('.tab-btn') as NodeListOf<HTMLButtonElement>;
const fishTab = document.getElementById('fish-tab') as HTMLElement;
const equipmentTab = document.getElementById('equipment-tab') as HTMLElement;
const tipsTab = document.getElementById('tips-tab') as HTMLElement;
const fishCountSpan = document.getElementById('fish-count') as HTMLElement;

// DOM Elements - Fish Tab
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const locationFilter = document.getElementById('location-filter') as HTMLSelectElement;
const seasonFilter = document.getElementById('season-filter') as HTMLSelectElement;
const weatherFilter = document.getElementById('weather-filter') as HTMLSelectElement;
const difficultyFilter = document.getElementById('difficulty-filter') as HTMLSelectElement;
const typeFilter = document.getElementById('type-filter') as HTMLSelectElement;
const fishGrid = document.getElementById('fish-grid') as HTMLElement;
const fishStatus = document.getElementById('fish-status') as HTMLElement;
const filterStatus = document.getElementById('filter-status') as HTMLElement;

// DOM Elements - Equipment Tab
const rodsGrid = document.getElementById('rods-grid') as HTMLElement;
const baitGrid = document.getElementById('bait-grid') as HTMLElement;
const tackleGrid = document.getElementById('tackle-grid') as HTMLElement;
const professionsGrid = document.getElementById('professions-grid') as HTMLElement;

// DOM Elements - Tips Tab
const tipsContainer = document.getElementById('tips-container') as HTMLElement;

// DOM Elements - Modal
const fishModal = document.getElementById('fish-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalFishName = document.getElementById('modal-fish-name') as HTMLElement;
const modalFishBehavior = document.getElementById('modal-fish-behavior') as HTMLElement;
const modalFishLegendary = document.getElementById('modal-fish-legendary') as HTMLElement;
const modalFishCrabpot = document.getElementById('modal-fish-crabpot') as HTMLElement;
const modalFishDescription = document.getElementById('modal-fish-description') as HTMLElement;
const modalSellPrice = document.getElementById('modal-sell-price') as HTMLElement;
const modalDifficulty = document.getElementById('modal-difficulty') as HTMLElement;
const modalSize = document.getElementById('modal-size') as HTMLElement;
const modalLevelReqContainer = document.getElementById('modal-level-req-container') as HTMLElement;
const modalLevelReq = document.getElementById('modal-level-req') as HTMLElement;
const modalDifficultyFill = document.getElementById('modal-difficulty-fill') as HTMLElement;
const modalDifficultyValue = document.getElementById('modal-difficulty-value') as HTMLElement;
const modalLocations = document.getElementById('modal-locations') as HTMLElement;
const modalTipSection = document.getElementById('modal-tip-section') as HTMLElement;
const modalCatchTip = document.getElementById('modal-catch-tip') as HTMLElement;
const modalBundlesSection = document.getElementById('modal-bundles-section') as HTMLElement;
const modalBundles = document.getElementById('modal-bundles') as HTMLElement;
const modalRecipesSection = document.getElementById('modal-recipes-section') as HTMLElement;
const modalRecipes = document.getElementById('modal-recipes') as HTMLElement;
const modalTrapBobber = document.getElementById('modal-trap-bobber') as HTMLElement;

// State
let currentSearchTerm = '';
let currentLocation: FishLocationType | 'all' = 'all';
let currentSeason: Season | 'all' = 'all';
let currentWeather: 'sunny' | 'rainy' | 'all' = 'all';
let currentDifficulty: 'easy' | 'medium' | 'hard' | 'legendary' | 'all' = 'all';
let currentType: 'standard' | 'legendary' | 'crabpot' | 'all' = 'all';
let displayedFish: Fish[] = [];

// Initialize
function init() {
  setupSidebar();
  setupWindowControls();
  setupEventListeners();

  // Initial displays
  displayFish(FISH);
  displayEquipment();
  displayTips();
  updateFishCount();
}

function setupEventListeners() {
  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab as string));
  });

  // Fish filters
  searchInput.addEventListener('input', () => {
    currentSearchTerm = searchInput.value;
    filterFish();
  });

  locationFilter.addEventListener('change', () => {
    currentLocation = locationFilter.value as FishLocationType | 'all';
    filterFish();
  });

  seasonFilter.addEventListener('change', () => {
    currentSeason = seasonFilter.value as Season | 'all';
    filterFish();
  });

  weatherFilter.addEventListener('change', () => {
    currentWeather = weatherFilter.value as 'sunny' | 'rainy' | 'all';
    filterFish();
  });

  difficultyFilter.addEventListener('change', () => {
    currentDifficulty = difficultyFilter.value as 'easy' | 'medium' | 'hard' | 'legendary' | 'all';
    filterFish();
  });

  typeFilter.addEventListener('change', () => {
    currentType = typeFilter.value as 'standard' | 'legendary' | 'crabpot' | 'all';
    filterFish();
  });

  // Modal
  modalCloseBtn.addEventListener('click', closeFishModal);
  fishModal.addEventListener('click', (e) => {
    if (e.target === fishModal) closeFishModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fishModal.style.display === 'flex') {
      closeFishModal();
    }
  });
}

// Tab switching
function switchTab(tabName: string) {
  // Update button states
  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Update tab content visibility
  fishTab.classList.toggle('active', tabName === 'fish');
  equipmentTab.classList.toggle('active', tabName === 'equipment');
  tipsTab.classList.toggle('active', tabName === 'tips');
}

// Fish Display
function displayFish(fish: Fish[]) {
  displayedFish = fish;

  if (fish.length === 0) {
    fishGrid.innerHTML = '<div class="no-results">No fish match your filters</div>';
    return;
  }

  fishGrid.innerHTML = fish.map(f => createFishCard(f)).join('');

  // Handle broken images - hide them gracefully
  const icons = document.querySelectorAll('.fish-icon') as NodeListOf<HTMLImageElement>;
  icons.forEach(img => {
    img.onerror = function() {
      (this as HTMLImageElement).style.display = 'none';
    };
  });

  // Add click handlers
  const fishCards = document.querySelectorAll('.fish-card');
  fishCards.forEach((card, index) => {
    card.addEventListener('click', () => openFishModal(fish[index]));
  });

  updateFilterStatus(fish.length);
}

function createFishCard(fish: Fish): string {
  const difficultyClass = getDifficultyClass(fish.difficulty);
  const difficultyPercent = Math.min(100, (fish.difficulty / 110) * 100);
  const locations = fish.locations.map(l => l.area).slice(0, 2).join(', ');
  const seasons = getSeasonDisplay(fish);
  const iconPath = fish.icon || `./assets/fish/${fish.id}.png`;

  return `
    <div class="fish-card ${fish.isLegendary ? 'legendary' : ''} ${fish.isCrabPot ? 'crabpot' : ''}" data-fish-id="${fish.id}">
      <div class="fish-card-header">
        <div class="fish-title-row">
          <img src="${iconPath}" alt="${fish.name}" class="fish-icon">
          <h3>${fish.name}</h3>
        </div>
        <div class="fish-badges">
          ${fish.isLegendary ? '<span class="badge badge-legendary">Legendary</span>' : ''}
          ${fish.isCrabPot ? '<span class="badge badge-crabpot">Crab Pot</span>' : ''}
          <span class="badge badge-behavior behavior-${fish.behavior}">${formatBehavior(fish.behavior)}</span>
        </div>
      </div>
      <div class="fish-card-body">
        <div class="fish-info-row">
          <span class="fish-info-icon">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C5 0 3 2 3 4c0 3 5 10 5 10s5-7 5-10c0-2-2-4-5-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
          </span>
          <span class="fish-info-text">${locations}</span>
        </div>
        <div class="fish-info-row">
          <span class="fish-info-icon">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 1v1H2v12h12V2h-2V1h-2v1H6V1H4z"/>
            </svg>
          </span>
          <span class="fish-info-text">${seasons}</span>
        </div>
        ${!fish.isCrabPot ? `
        <div class="fish-difficulty">
          <span class="difficulty-label">Difficulty:</span>
          <div class="difficulty-bar-small">
            <div class="difficulty-fill-small ${difficultyClass}" style="width: ${difficultyPercent}%"></div>
          </div>
          <span class="difficulty-number">${fish.difficulty}</span>
        </div>
        ` : ''}
        <div class="fish-card-footer">
          <span class="fish-price">${fish.sellPrice}g</span>
          <span class="fish-size">${fish.minSize}-${fish.maxSize}"</span>
        </div>
      </div>
    </div>
  `;
}

function getDifficultyClass(difficulty: number): string {
  if (difficulty <= 40) return 'easy';
  if (difficulty <= 70) return 'medium';
  if (difficulty <= 100) return 'hard';
  return 'legendary';
}

function formatBehavior(behavior: string): string {
  return behavior.charAt(0).toUpperCase() + behavior.slice(1);
}

function getSeasonDisplay(fish: Fish): string {
  const allSeasons = new Set<string>();
  fish.locations.forEach(loc => {
    if (loc.seasons === 'all') {
      allSeasons.add('All Seasons');
    } else {
      loc.seasons.forEach(s => allSeasons.add(s));
    }
  });

  if (allSeasons.has('All Seasons')) return 'All Seasons';
  return Array.from(allSeasons).join(', ');
}

// Fish Filtering
function filterFish() {
  let results = FISH;

  // Search filter
  if (currentSearchTerm) {
    results = results.filter(fish =>
      fish.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      fish.description.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
  }

  // Location filter
  if (currentLocation !== 'all') {
    results = results.filter(fish =>
      fish.locations.some(loc => loc.locationType === currentLocation)
    );
  }

  // Season filter
  if (currentSeason !== 'all') {
    results = results.filter(fish =>
      fish.locations.some(loc =>
        loc.seasons === 'all' || loc.seasons.includes(currentSeason as Season)
      )
    );
  }

  // Weather filter
  if (currentWeather !== 'all') {
    results = results.filter(fish =>
      fish.locations.some(loc =>
        loc.weather === 'any' || loc.weather === currentWeather
      )
    );
  }

  // Difficulty filter
  if (currentDifficulty !== 'all') {
    results = results.filter(fish => {
      switch (currentDifficulty) {
        case 'easy': return fish.difficulty <= 40;
        case 'medium': return fish.difficulty > 40 && fish.difficulty <= 70;
        case 'hard': return fish.difficulty > 70 && fish.difficulty <= 100;
        case 'legendary': return fish.difficulty > 100;
        default: return true;
      }
    });
  }

  // Type filter
  if (currentType !== 'all') {
    results = results.filter(fish => {
      switch (currentType) {
        case 'legendary': return fish.isLegendary === true;
        case 'crabpot': return fish.isCrabPot === true;
        case 'standard': return !fish.isLegendary && !fish.isCrabPot;
        default: return true;
      }
    });
  }

  displayFish(results);
}

function updateFilterStatus(count: number) {
  const filters = [];
  if (currentLocation !== 'all') filters.push(currentLocation);
  if (currentSeason !== 'all') filters.push(currentSeason);
  if (currentWeather !== 'all') filters.push(currentWeather);
  if (currentDifficulty !== 'all') filters.push(currentDifficulty);
  if (currentType !== 'all') filters.push(currentType);

  const filterText = filters.length > 0 ? filters.join(', ') : 'All Fish';
  filterStatus.textContent = `Showing: ${filterText}`;
  fishStatus.textContent = `${count} fish found`;
}

function updateFishCount() {
  const stats = getFishStats();
  fishCountSpan.textContent = stats.total.toString();
}

// Fish Modal
function openFishModal(fish: Fish) {
  modalFishName.textContent = fish.name;
  modalFishDescription.textContent = fish.description;
  modalSellPrice.textContent = `${fish.sellPrice}g`;
  modalDifficulty.textContent = fish.difficulty.toString();
  modalSize.textContent = `${fish.minSize}" - ${fish.maxSize}"`;

  // Behavior badge
  modalFishBehavior.textContent = formatBehavior(fish.behavior);
  modalFishBehavior.className = `behavior-badge behavior-${fish.behavior}`;

  // Legendary/Crabpot badges
  modalFishLegendary.style.display = fish.isLegendary ? 'inline-block' : 'none';
  modalFishCrabpot.style.display = fish.isCrabPot ? 'inline-block' : 'none';

  // Required level
  if (fish.requiredFishingLevel) {
    modalLevelReqContainer.style.display = 'block';
    modalLevelReq.textContent = `Level ${fish.requiredFishingLevel}`;
  } else {
    modalLevelReqContainer.style.display = 'none';
  }

  // Difficulty bar
  const difficultyPercent = Math.min(100, (fish.difficulty / 110) * 100);
  modalDifficultyFill.style.width = `${difficultyPercent}%`;
  modalDifficultyFill.className = `difficulty-fill ${getDifficultyClass(fish.difficulty)}`;
  modalDifficultyValue.textContent = fish.difficulty.toString();

  // Locations
  modalLocations.innerHTML = fish.locations.map(loc => `
    <div class="location-entry">
      <div class="location-name">${loc.area}</div>
      <div class="location-details">
        <span class="location-season">${loc.seasons === 'all' ? 'All Seasons' : loc.seasons.join(', ')}</span>
        <span class="location-time">${loc.timeOfDay}</span>
        <span class="location-weather">${formatWeather(loc.weather)}</span>
        ${loc.condition ? `<span class="location-condition">${loc.condition}</span>` : ''}
      </div>
    </div>
  `).join('');

  // Catch tip
  if (fish.catchTip) {
    modalTipSection.style.display = 'block';
    modalCatchTip.textContent = fish.catchTip;
  } else {
    modalTipSection.style.display = 'none';
  }

  // Bundles
  if (fish.usedInBundles && fish.usedInBundles.length > 0) {
    modalBundlesSection.style.display = 'block';
    modalBundles.innerHTML = fish.usedInBundles.map(b => `<span class="bundle-tag">${b}</span>`).join('');
  } else {
    modalBundlesSection.style.display = 'none';
  }

  // Recipes
  if (fish.usedInRecipes && fish.usedInRecipes.length > 0) {
    modalRecipesSection.style.display = 'block';
    modalRecipes.innerHTML = fish.usedInRecipes.map(r => `<span class="recipe-tag">${r}</span>`).join('');
  } else {
    modalRecipesSection.style.display = 'none';
  }

  // Trap Bobber recommendation
  modalTrapBobber.style.display = fish.trapBobberRecommended ? 'flex' : 'none';

  fishModal.style.display = 'flex';
}

function closeFishModal() {
  fishModal.style.display = 'none';
}

function formatWeather(weather: string): string {
  switch (weather) {
    case 'any': return 'Any Weather';
    case 'sunny': return 'Sunny Only';
    case 'rainy': return 'Rain Only';
    default: return weather;
  }
}

// Equipment Display
function displayEquipment() {
  // Rods
  rodsGrid.innerHTML = FISHING_RODS.map(rod => `
    <div class="equipment-card rod-card">
      <div class="equipment-header">
        <h3>${rod.name}</h3>
        <span class="equipment-cost">${typeof rod.cost === 'number' ? rod.cost + 'g' : rod.cost}</span>
      </div>
      <p class="equipment-desc">${rod.description}</p>
      <div class="equipment-details">
        <div class="detail-row">
          <span class="detail-label">Requirement:</span>
          <span class="detail-value">${rod.requirement}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Bait:</span>
          <span class="detail-value ${rod.canUseBait ? 'yes' : 'no'}">${rod.canUseBait ? 'Yes' : 'No'}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Tackle:</span>
          <span class="detail-value ${rod.canUseTackle ? 'yes' : 'no'}">${rod.canUseTackle ? (rod.tackleSlots ? rod.tackleSlots + ' slot(s)' : 'Yes') : 'No'}</span>
        </div>
        ${rod.notes ? `<p class="equipment-notes">${rod.notes}</p>` : ''}
      </div>
    </div>
  `).join('');

  // Bait
  baitGrid.innerHTML = BAITS.map(bait => `
    <div class="equipment-card bait-card">
      <div class="equipment-header">
        <h3>${bait.name}</h3>
        <span class="equipment-effect">${bait.biteTimeReduction}</span>
      </div>
      <p class="equipment-desc">${bait.description}</p>
      <div class="equipment-details">
        <div class="detail-row">
          <span class="detail-label">Effect:</span>
          <span class="detail-value">${bait.effect}</span>
        </div>
        ${bait.craftingRecipe ? `
        <div class="detail-row">
          <span class="detail-label">Craft:</span>
          <span class="detail-value">${bait.craftingRecipe}</span>
        </div>
        ` : ''}
        ${bait.purchaseLocation && bait.purchasePrice ? `
        <div class="detail-row">
          <span class="detail-label">Buy:</span>
          <span class="detail-value">${bait.purchasePrice}g at ${bait.purchaseLocation}</span>
        </div>
        ` : ''}
      </div>
    </div>
  `).join('');

  // Tackle
  tackleGrid.innerHTML = TACKLES.map(tackle => `
    <div class="equipment-card tackle-card ${tackle.bestFor?.includes('HIGHLY RECOMMENDED') ? 'recommended' : ''}">
      <div class="equipment-header">
        <h3>${tackle.name}</h3>
        ${tackle.purchasePrice ? `<span class="equipment-cost">${tackle.purchasePrice}g</span>` : ''}
      </div>
      <p class="equipment-desc">${tackle.description}</p>
      <div class="equipment-details">
        <div class="detail-row">
          <span class="detail-label">Effect:</span>
          <span class="detail-value">${tackle.effect}</span>
        </div>
        ${tackle.bestFor ? `
        <div class="detail-row best-for">
          <span class="detail-label">Best For:</span>
          <span class="detail-value">${tackle.bestFor}</span>
        </div>
        ` : ''}
        ${tackle.craftingRecipe ? `
        <div class="detail-row">
          <span class="detail-label">Craft:</span>
          <span class="detail-value">${tackle.craftingRecipe}</span>
        </div>
        ` : ''}
        ${tackle.durability ? `
        <div class="detail-row">
          <span class="detail-label">Uses:</span>
          <span class="detail-value">${tackle.durability}</span>
        </div>
        ` : ''}
      </div>
    </div>
  `).join('');

  // Professions
  const level5Profs = FISHING_PROFESSIONS.filter(p => p.level === 5);
  const level10Profs = FISHING_PROFESSIONS.filter(p => p.level === 10);

  professionsGrid.innerHTML = `
    <div class="profession-tree">
      <div class="profession-level">
        <h3>Level 5</h3>
        <div class="profession-choices">
          ${level5Profs.map(p => `
            <div class="profession-card" data-profession="${p.id}">
              <h4>${p.name}</h4>
              <p class="profession-desc">${p.description}</p>
              <p class="profession-effect">${p.effect}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="profession-level">
        <h3>Level 10</h3>
        <div class="profession-paths">
          ${level5Profs.map(p5 => {
            const related10 = level10Profs.filter(p => p.prerequisite === p5.name);
            return `
              <div class="profession-path" data-prerequisite="${p5.id}">
                <div class="path-label">From ${p5.name}:</div>
                <div class="profession-choices">
                  ${related10.map(p => `
                    <div class="profession-card">
                      <h4>${p.name}</h4>
                      <p class="profession-desc">${p.description}</p>
                      <p class="profession-effect">${p.effect}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// Tips Display
function displayTips() {
  tipsContainer.innerHTML = FISHING_TIPS.map(category => `
    <div class="tips-category">
      <h2>${category.category}</h2>
      <ul class="tips-list">
        ${category.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// Initialize on load
init();
