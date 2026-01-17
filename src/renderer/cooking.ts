import './cooking.css';
import { ElectronAPI } from '@preload/index';
import { COOKING_RECIPES, CookingRecipe, CookingBuff } from '@shared/data/cooking';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

type UnlockMethod = 'default' | 'queen_of_sauce' | 'friendship' | 'purchase' | 'skill' | 'special';
type SortOption = 'name' | 'energy' | 'price' | 'ingredients';

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const unlockFilter = document.getElementById('unlock-filter') as HTMLSelectElement;
const buffFilter = document.getElementById('buff-filter') as HTMLSelectElement;
const sortSelect = document.getElementById('sort-select') as HTMLSelectElement;
const recipesGrid = document.getElementById('recipes-grid') as HTMLElement;
const recipeCountEl = document.getElementById('recipe-count') as HTMLElement;
const filterStatusEl = document.getElementById('filter-status') as HTMLElement;

// Modal elements
const recipeModal = document.getElementById('recipe-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalRecipeName = document.getElementById('modal-recipe-name') as HTMLElement;
const modalRecipeDescription = document.getElementById('modal-recipe-description') as HTMLElement;
const modalRecipeIcon = document.getElementById('modal-recipe-icon') as HTMLElement;
const modalEnergy = document.getElementById('modal-energy') as HTMLElement;
const modalHealth = document.getElementById('modal-health') as HTMLElement;
const modalSellPrice = document.getElementById('modal-sell-price') as HTMLElement;
const modalBuffsSection = document.getElementById('modal-buffs-section') as HTMLElement;
const modalBuffs = document.getElementById('modal-buffs') as HTMLElement;
const modalRecipeUnlock = document.getElementById('modal-recipe-unlock') as HTMLElement;
const modalRecipeIngredients = document.getElementById('modal-recipe-ingredients') as HTMLElement;
const modalGiftSection = document.getElementById('modal-gift-section') as HTMLElement;
const modalGiftInfo = document.getElementById('modal-gift-info') as HTMLElement;

// State
let currentFilter = '';
let currentUnlockMethod: UnlockMethod | 'all' = 'all';
let currentBuffFilter = 'all';
let currentSort: SortOption = 'name';

// Initialize
function init() {
  setupSidebar();
  setupWindowControls();
  setupEventListeners();
  displayRecipes(getSortedRecipes(COOKING_RECIPES));
  updateRecipeCount();
}

function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', () => {
    currentFilter = searchInput.value;
    filterRecipes();
  });

  // Unlock method filter
  unlockFilter.addEventListener('change', () => {
    currentUnlockMethod = unlockFilter.value as UnlockMethod | 'all';
    filterRecipes();
  });

  // Buff filter
  buffFilter.addEventListener('change', () => {
    currentBuffFilter = buffFilter.value;
    filterRecipes();
  });

  // Sort
  sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value as SortOption;
    filterRecipes();
  });

  // Modal close button
  modalCloseBtn.addEventListener('click', closeRecipeModal);

  // Close modal on background click
  recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) closeRecipeModal();
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && recipeModal.style.display === 'flex') {
      closeRecipeModal();
    }
  });
}

function getSortedRecipes(recipes: CookingRecipe[]): CookingRecipe[] {
  const sorted = [...recipes];

  switch (currentSort) {
    case 'energy':
      sorted.sort((a, b) => b.energy - a.energy);
      break;
    case 'price':
      sorted.sort((a, b) => b.sellPrice - a.sellPrice);
      break;
    case 'ingredients':
      sorted.sort((a, b) => a.ingredients.length - b.ingredients.length);
      break;
    case 'name':
    default:
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return sorted;
}

function displayRecipes(recipes: CookingRecipe[]) {
  recipesGrid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');

  // Add click handlers
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach((card, index) => {
    card.addEventListener('click', () => openRecipeModal(recipes[index]));
  });
}

function createRecipeCard(recipe: CookingRecipe): string {
  const iconPath = getRecipeIconPath(recipe);
  const iconHtml = iconPath
    ? `<img src="${iconPath}" alt="${recipe.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<svg width=\\'24\\' height=\\'24\\' viewBox=\\'0 0 16 16\\' fill=\\'currentColor\\'><path d=\\'M8 1c-2.2 0-4 1.8-4 4 0 1.4.7 2.6 1.8 3.3L5 14h6l-.8-5.7c1.1-.7 1.8-1.9 1.8-3.3 0-2.2-1.8-4-4-4z\\'/></svg>';" />`
    : `<svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1c-2.2 0-4 1.8-4 4 0 1.4.7 2.6 1.8 3.3L5 14h6l-.8-5.7c1.1-.7 1.8-1.9 1.8-3.3 0-2.2-1.8-4-4-4z"/></svg>`;

  return `
    <div class="recipe-card" data-recipe-id="${recipe.id}">
      <div class="recipe-card-header">
        <div class="recipe-card-icon">
          ${iconHtml}
        </div>
        <div class="recipe-card-title">
          <h3>${recipe.name}</h3>
          <span class="unlock-badge unlock-${recipe.unlockMethod}">${getUnlockLabel(recipe.unlockMethod)}</span>
        </div>
      </div>

      <div class="recipe-card-stats">
        <div class="recipe-stat energy">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9 0L4 8h4l-1 8 6-10H9l2-6z"/>
          </svg>
          <span>${recipe.energy}</span>
        </div>
        <div class="recipe-stat health">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 14s-6-4.35-6-8.5C2 3.02 4.02 1 6.5 1c1.4 0 2.74.81 3.5 2 .76-1.19 2.1-2 3.5-2C15.98 1 18 3.02 18 5.5 18 9.65 12 14 12 14H8z" transform="scale(0.9)"/>
          </svg>
          <span>${recipe.health}</span>
        </div>
        <div class="recipe-stat price">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
          </svg>
          <span>${recipe.sellPrice}g</span>
        </div>
      </div>

      <div class="recipe-card-ingredients">
        ${recipe.ingredients.slice(0, 3).map(ing =>
          `<span class="ingredient-chip">${ing.quantity}x ${ing.item}</span>`
        ).join('')}
        ${recipe.ingredients.length > 3 ? `<span class="more-ingredients">+${recipe.ingredients.length - 3} more</span>` : ''}
      </div>

      ${recipe.buffs && recipe.buffs.length > 0 ? `
        <div class="recipe-card-buffs">
          ${recipe.buffs.map(buff =>
            `<span class="buff-chip buff-${buff.type.toLowerCase().replace(' ', '-')}">${getBuffIcon(buff.type)} +${buff.value} ${buff.type}</span>`
          ).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function getRecipeIconPath(recipe: CookingRecipe): string | null {
  // Convert recipe name to filename format
  const filename = recipe.name.toLowerCase().replace(/'/g, '').replace(/\s+/g, '_') + '.png';
  return `assets/items/cooking/${filename}`;
}

function getUnlockLabel(method: UnlockMethod): string {
  switch (method) {
    case 'default': return 'Starter';
    case 'queen_of_sauce': return 'Queen of Sauce';
    case 'friendship': return 'Friendship';
    case 'purchase': return 'Purchase';
    case 'skill': return 'Skill';
    case 'special': return 'Special';
    default: return method;
  }
}

function getUnlockIcon(method: UnlockMethod): string {
  switch (method) {
    case 'default':
      return `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z"/></svg>`;
    case 'queen_of_sauce':
      return `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1L6 5l-4 1 3 3-1 4 4-2 4 2-1-4 3-3-4-1-2-4z"/></svg>`;
    case 'friendship':
      return `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 14s-6-4.35-6-8.5C2 3.02 4.02 1 6.5 1c1.4 0 2.74.81 3.5 2 .76-1.19 2.1-2 3.5-2C15.98 1 18 3.02 18 5.5 18 9.65 12 14 12 14H8z" transform="scale(0.9)"/></svg>`;
    case 'purchase':
      return `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`;
    case 'skill':
      return `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 14V2h2v12H2zm4 0V6h2v8H6zm4 0V4h2v10h-2zm4 0V8h2v6h-2z"/></svg>`;
    case 'special':
      return `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z"/></svg>`;
    default:
      return '';
  }
}

function getBuffIcon(buffType: string): string {
  const type = buffType.toLowerCase();
  if (type.includes('farm')) return '+';
  if (type.includes('min')) return '+';
  if (type.includes('fish')) return '+';
  if (type.includes('forag')) return '+';
  if (type.includes('luck')) return '+';
  if (type.includes('speed')) return '+';
  if (type.includes('def')) return '+';
  if (type.includes('attack')) return '+';
  return '+';
}

function openRecipeModal(recipe: CookingRecipe) {
  // Name and description
  modalRecipeName.textContent = recipe.name;
  modalRecipeDescription.textContent = recipe.description;

  // Icon
  const iconPath = getRecipeIconPath(recipe);
  if (iconPath) {
    modalRecipeIcon.innerHTML = `<img src="${iconPath}" alt="${recipe.name}" onerror="this.style.display='none';" />`;
  } else {
    modalRecipeIcon.innerHTML = `<svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1c-2.2 0-4 1.8-4 4 0 1.4.7 2.6 1.8 3.3L5 14h6l-.8-5.7c1.1-.7 1.8-1.9 1.8-3.3 0-2.2-1.8-4-4-4z"/></svg>`;
  }

  // Stats
  modalEnergy.textContent = recipe.energy.toString();
  modalHealth.textContent = recipe.health.toString();
  modalSellPrice.textContent = recipe.sellPrice + 'g';

  // Buffs
  if (recipe.buffs && recipe.buffs.length > 0) {
    modalBuffsSection.style.display = 'block';
    modalBuffs.innerHTML = recipe.buffs.map(buff => `
      <div class="buff-item buff-${buff.type.toLowerCase().replace(/\s+/g, '-')}">
        <div class="buff-item-icon">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z"/>
          </svg>
        </div>
        <div class="buff-item-details">
          <span class="buff-item-name">${buff.type}</span>
          <span class="buff-item-value">+${buff.value}</span>
          <span class="buff-item-duration">${buff.duration}m duration</span>
        </div>
      </div>
    `).join('');
  } else {
    modalBuffsSection.style.display = 'none';
  }

  // Unlock info
  modalRecipeUnlock.innerHTML = `
    <div class="unlock-method">
      <span class="unlock-badge-large unlock-${recipe.unlockMethod}">
        ${getUnlockIcon(recipe.unlockMethod)}
        ${getUnlockLabel(recipe.unlockMethod)}
      </span>
      <p class="unlock-details-text">${recipe.unlockDetails}</p>
    </div>
  `;

  // Ingredients
  modalRecipeIngredients.innerHTML = recipe.ingredients.map(ing => `
    <div class="ingredient-item">
      <span class="ingredient-quantity">${ing.quantity}x</span>
      <span class="ingredient-name">${ing.item}</span>
    </div>
  `).join('');

  // Gift info
  if ((recipe.lovedBy && recipe.lovedBy.length > 0) || (recipe.likedBy && recipe.likedBy.length > 0)) {
    modalGiftSection.style.display = 'block';
    let giftHtml = '';

    if (recipe.lovedBy && recipe.lovedBy.length > 0) {
      giftHtml += `
        <div class="gift-category">
          <span class="gift-category-label loved">Loved by</span>
          <span class="gift-villagers">${recipe.lovedBy.join(', ')}</span>
        </div>
      `;
    }

    if (recipe.likedBy && recipe.likedBy.length > 0) {
      giftHtml += `
        <div class="gift-category">
          <span class="gift-category-label liked">Liked by</span>
          <span class="gift-villagers">${recipe.likedBy.join(', ')}</span>
        </div>
      `;
    }

    modalGiftInfo.innerHTML = giftHtml;
  } else {
    modalGiftSection.style.display = 'none';
  }

  recipeModal.style.display = 'flex';
}

function closeRecipeModal() {
  recipeModal.style.display = 'none';
}

function filterRecipes() {
  let filtered = COOKING_RECIPES;

  // Filter by unlock method
  if (currentUnlockMethod !== 'all') {
    filtered = filtered.filter(r => r.unlockMethod === currentUnlockMethod);
  }

  // Filter by buff
  if (currentBuffFilter !== 'all') {
    if (currentBuffFilter === 'has_buff') {
      filtered = filtered.filter(r => r.buffs && r.buffs.length > 0);
    } else if (currentBuffFilter === 'no_buff') {
      filtered = filtered.filter(r => !r.buffs || r.buffs.length === 0);
    } else {
      // Specific buff type
      filtered = filtered.filter(r =>
        r.buffs && r.buffs.some(b =>
          b.type.toLowerCase().includes(currentBuffFilter.toLowerCase())
        )
      );
    }
  }

  // Filter by search term
  if (currentFilter) {
    const term = currentFilter.toLowerCase();
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(term) ||
      r.description.toLowerCase().includes(term) ||
      r.ingredients.some(ing => ing.item.toLowerCase().includes(term))
    );
  }

  // Sort
  filtered = getSortedRecipes(filtered);

  displayRecipes(filtered);
  updateFilterStatus(filtered.length);
}

function updateRecipeCount() {
  recipeCountEl.textContent = `${COOKING_RECIPES.length} cooking recipes`;
}

function updateFilterStatus(count: number) {
  const parts = [];
  if (currentUnlockMethod !== 'all') parts.push(getUnlockLabel(currentUnlockMethod));
  if (currentBuffFilter !== 'all') parts.push(formatBuffFilter(currentBuffFilter));
  if (currentFilter) parts.push(`Search: "${currentFilter}"`);

  if (parts.length > 0) {
    filterStatusEl.textContent = `Showing: ${count} of ${COOKING_RECIPES.length} (${parts.join(', ')})`;
  } else {
    filterStatusEl.textContent = 'Showing: All';
  }
}

function formatBuffFilter(filter: string): string {
  switch (filter) {
    case 'has_buff': return 'Has Buffs';
    case 'no_buff': return 'No Buffs';
    default: return filter.charAt(0).toUpperCase() + filter.slice(1) + ' Buff';
  }
}

// Start the app
init();
