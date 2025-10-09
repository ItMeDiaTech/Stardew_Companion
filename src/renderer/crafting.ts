import './crafting.css';
import { ElectronAPI } from '@preload/index';
import { CraftingRecipe, MaterialSource, CraftingCategory, UnlockMethod } from '@shared/types';
import { CRAFTING_RECIPES, getRecipesByCategory, getRecipesByMaterial } from '@shared/data/crafting';
import { MATERIALS, getMaterialById } from '@shared/data/materials';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
const unlockFilter = document.getElementById('unlock-filter') as HTMLSelectElement;
const recipesGrid = document.getElementById('recipes-grid') as HTMLElement;
const recipeCountEl = document.getElementById('recipe-count') as HTMLElement;
const filterStatusEl = document.getElementById('filter-status') as HTMLElement;

// Recipe Modal elements
const recipeModal = document.getElementById('recipe-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalRecipeName = document.getElementById('modal-recipe-name') as HTMLElement;
const modalRecipeCategory = document.getElementById('modal-recipe-category') as HTMLElement;
const modalRecipeDescription = document.getElementById('modal-recipe-description') as HTMLElement;
const modalRecipeUnlock = document.getElementById('modal-recipe-unlock') as HTMLElement;
const modalRecipeMaterials = document.getElementById('modal-recipe-materials') as HTMLElement;
const modalCraftingStation = document.getElementById('modal-crafting-station') as HTMLElement;
const modalStationName = document.getElementById('modal-station-name') as HTMLElement;
const modalOutputInfo = document.getElementById('modal-output-info') as HTMLElement;
const modalOutputText = document.getElementById('modal-output-text') as HTMLElement;

// Material Modal elements
const materialModal = document.getElementById('material-modal') as HTMLElement;
const materialCloseBtn = document.getElementById('material-close-btn') as HTMLButtonElement;
const materialName = document.getElementById('material-name') as HTMLElement;
const materialTypes = document.getElementById('material-types') as HTMLElement;
const materialDescription = document.getElementById('material-description') as HTMLElement;
const materialForage = document.getElementById('material-forage') as HTMLElement;
const materialForageList = document.getElementById('material-forage-list') as HTMLElement;
const materialMining = document.getElementById('material-mining') as HTMLElement;
const materialMiningList = document.getElementById('material-mining-list') as HTMLElement;
const materialShops = document.getElementById('material-shops') as HTMLElement;
const materialShopsList = document.getElementById('material-shops-list') as HTMLElement;
const materialFarming = document.getElementById('material-farming') as HTMLElement;
const materialFarmingText = document.getElementById('material-farming-text') as HTMLElement;
const materialMonsters = document.getElementById('material-monsters') as HTMLElement;
const materialMonstersList = document.getElementById('material-monsters-list') as HTMLElement;
const materialRecipes = document.getElementById('material-recipes') as HTMLElement;
const materialRecipeCount = document.getElementById('material-recipe-count') as HTMLElement;
const materialRecipesList = document.getElementById('material-recipes-list') as HTMLElement;

// State
let currentFilter = '';
let currentCategory: CraftingCategory | 'all' = 'all';
let currentUnlockMethod: UnlockMethod | 'all' = 'all';

// Initialize
function init() {
  setupSidebar();
  setupWindowControls();
  setupEventListeners();
  displayRecipes(CRAFTING_RECIPES);
  updateRecipeCount();
}

function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', () => {
    currentFilter = searchInput.value;
    filterRecipes();
  });

  // Category filter
  categoryFilter.addEventListener('change', () => {
    currentCategory = categoryFilter.value as CraftingCategory | 'all';
    filterRecipes();
  });

  // Unlock method filter
  unlockFilter.addEventListener('change', () => {
    currentUnlockMethod = unlockFilter.value as UnlockMethod | 'all';
    filterRecipes();
  });

  // Modal close buttons
  modalCloseBtn.addEventListener('click', closeRecipeModal);
  materialCloseBtn.addEventListener('click', closeMaterialModal);

  // Close modals on background click
  recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) closeRecipeModal();
  });
  materialModal.addEventListener('click', (e) => {
    if (e.target === materialModal) closeMaterialModal();
  });

  // ESC key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (recipeModal.style.display === 'flex') closeRecipeModal();
      if (materialModal.style.display === 'flex') closeMaterialModal();
    }
  });
}

function displayRecipes(recipes: CraftingRecipe[]) {
  recipesGrid.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');

  // Add click handlers
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach((card, index) => {
    card.addEventListener('click', () => openRecipeModal(recipes[index]));
  });
}

function createRecipeCard(recipe: CraftingRecipe): string {
  return `
    <div class="recipe-card" data-recipe-id="${recipe.id}">
      <div class="recipe-card-header">
        <h3>${recipe.name}</h3>
        <span class="category-badge category-${recipe.category}">${formatCategory(recipe.category)}</span>
      </div>
      <div class="recipe-card-body">
        <p class="recipe-short-desc">${recipe.description}</p>

        <div class="recipe-materials-preview">
          <span class="materials-label">Materials:</span>
          ${recipe.materials.slice(0, 3).map(m =>
            `<span class="material-chip">${m.quantity}x ${m.itemName}</span>`
          ).join('')}
          ${recipe.materials.length > 3 ? `<span class="more-materials">+${recipe.materials.length - 3} more</span>` : ''}
        </div>

        <div class="recipe-unlock-preview">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.6 0 0 1.8 0 4v8c0 2.2 3.6 4 8 4s8-1.8 8-4V4c0-2.2-3.6-4-8-4zm0 2c3.3 0 6 1.3 6 2s-2.7 2-6 2-6-1.3-6-2 2.7-2 6-2z"/>
          </svg>
          <span>${getUnlockLabel(recipe.unlock.method, recipe.unlock.condition)}</span>
        </div>
      </div>
    </div>
  `;
}

function formatCategory(category: CraftingCategory): string {
  return category.split('_').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function getUnlockLabel(method: UnlockMethod, condition?: string): string {
  if (method === 'starter') return 'Starter Recipe';
  if (method === 'skill' && condition) return condition;
  if (method === 'friendship' && condition) return condition;
  if (method === 'purchase' && condition) return `Purchase: ${condition}`;
  return method.charAt(0).toUpperCase() + method.slice(1);
}

function openRecipeModal(recipe: CraftingRecipe) {
  modalRecipeName.textContent = recipe.name;
  modalRecipeCategory.textContent = formatCategory(recipe.category);
  modalRecipeCategory.className = `recipe-category-badge category-${recipe.category}`;
  modalRecipeDescription.textContent = recipe.description;

  // Unlock info
  modalRecipeUnlock.innerHTML = `
    <div class="unlock-method">
      <span class="unlock-badge unlock-${recipe.unlock.method}">${getUnlockLabel(recipe.unlock.method, recipe.unlock.condition)}</span>
      ${recipe.unlock.details ? `<p class="unlock-details-text">${recipe.unlock.details}</p>` : ''}
    </div>
  `;

  // Materials list (clickable)
  modalRecipeMaterials.innerHTML = recipe.materials.map(mat => `
    <div class="material-item" data-material-id="${mat.itemId}">
      <span class="material-quantity">${mat.quantity}x</span>
      <span class="material-name-clickable">${mat.itemName}</span>
    </div>
  `).join('');

  // Add click handlers to materials
  const materialItems = modalRecipeMaterials.querySelectorAll('.material-item');
  materialItems.forEach(item => {
    item.addEventListener('click', () => {
      const materialId = item.getAttribute('data-material-id');
      if (materialId) {
        const material = getMaterialById(materialId);
        if (material) {
          openMaterialModal(material);
        }
      }
    });
  });

  // Crafting station
  if (recipe.craftingStation && recipe.craftingStation !== 'none') {
    modalCraftingStation.style.display = 'block';
    modalStationName.textContent = recipe.craftingStation;
  } else {
    modalCraftingStation.style.display = 'none';
  }

  // Output info
  if (recipe.output && recipe.output > 1) {
    modalOutputInfo.style.display = 'flex';
    modalOutputText.textContent = `Produces ${recipe.output} items`;
  } else {
    modalOutputInfo.style.display = 'none';
  }

  recipeModal.style.display = 'flex';
}

function closeRecipeModal() {
  recipeModal.style.display = 'none';
}

function openMaterialModal(material: MaterialSource) {
  materialName.textContent = material.name;

  // Material types
  materialTypes.innerHTML = material.type.map(type =>
    `<span class="material-type-badge type-${type}">${formatMaterialType(type)}</span>`
  ).join('');

  materialDescription.textContent = material.description || '';

  // Forage locations
  if (material.forageLocations && material.forageLocations.length > 0) {
    materialForage.style.display = 'block';
    materialForageList.innerHTML = material.forageLocations.map(loc => `
      <div class="source-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5z"/>
        </svg>
        <div>
          <span class="source-name">${loc.area}</span>
          ${loc.season ? `<span class="season-info">${loc.season.join(', ')}</span>` : ''}
          ${loc.condition ? `<span class="condition-info">${loc.condition}</span>` : ''}
        </div>
      </div>
    `).join('');
  } else {
    materialForage.style.display = 'none';
  }

  // Mining locations
  if (material.miningLocations && material.miningLocations.length > 0) {
    materialMining.style.display = 'block';
    materialMiningList.innerHTML = material.miningLocations.map(loc => `
      <div class="source-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M3 5l5-4 5 4v9H3V5z"/>
        </svg>
        <span class="source-name">${loc}</span>
      </div>
    `).join('');
  } else {
    materialMining.style.display = 'none';
  }

  // Shops
  if (material.shops && material.shops.length > 0) {
    materialShops.style.display = 'block';
    materialShopsList.innerHTML = material.shops.map(shop => `
      <div class="source-item shop-item">
        <div class="shop-info">
          <span class="shop-name">${shop.shopName}</span>
          <span class="shop-price">${shop.price.toLocaleString()}g</span>
        </div>
        ${shop.availability ? `
          <div class="shop-availability">
            ${shop.availability.seasons ? `Seasons: ${shop.availability.seasons.join(', ')}` : ''}
            ${shop.availability.condition ? shop.availability.condition : ''}
          </div>
        ` : ''}
      </div>
    `).join('');
  } else {
    materialShops.style.display = 'none';
  }

  // Farming info
  if (material.farmingInfo) {
    materialFarming.style.display = 'block';
    materialFarmingText.textContent = material.farmingInfo;
  } else {
    materialFarming.style.display = 'none';
  }

  // Monster drops
  if (material.monsterDrops && material.monsterDrops.length > 0) {
    materialMonsters.style.display = 'block';
    materialMonstersList.innerHTML = material.monsterDrops.map(monster => `
      <div class="source-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1L6 5l-4 1 3 3-1 4 4-2 4 2-1-4 3-3-4-1-2-4z"/>
        </svg>
        <span class="source-name">${monster}</span>
      </div>
    `).join('');
  } else {
    materialMonsters.style.display = 'none';
  }

  // Used in recipes
  const recipesUsingMaterial = getRecipesByMaterial(material.id);
  if (recipesUsingMaterial.length > 0) {
    materialRecipes.style.display = 'block';
    materialRecipeCount.textContent = recipesUsingMaterial.length.toString();
    materialRecipesList.innerHTML = recipesUsingMaterial.map(recipe => `
      <div class="recipe-using-item" data-recipe-id="${recipe.id}">
        <span class="recipe-name">${recipe.name}</span>
        <span class="category-badge-small category-${recipe.category}">${formatCategory(recipe.category)}</span>
      </div>
    `).join('');

    // Add click handlers to recipe items
    const recipeItems = materialRecipesList.querySelectorAll('.recipe-using-item');
    recipeItems.forEach(item => {
      item.addEventListener('click', () => {
        const recipeId = item.getAttribute('data-recipe-id');
        const recipe = CRAFTING_RECIPES.find(r => r.id === recipeId);
        if (recipe) {
          closeMaterialModal();
          openRecipeModal(recipe);
        }
      });
    });
  } else {
    materialRecipes.style.display = 'none';
  }

  materialModal.style.display = 'flex';
}

function closeMaterialModal() {
  materialModal.style.display = 'none';
}

function formatMaterialType(type: string): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

function filterRecipes() {
  let filtered = CRAFTING_RECIPES;

  // Filter by category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(r => r.category === currentCategory);
  }

  // Filter by unlock method
  if (currentUnlockMethod !== 'all') {
    filtered = filtered.filter(r => r.unlock.method === currentUnlockMethod);
  }

  // Filter by search term
  if (currentFilter) {
    const term = currentFilter.toLowerCase();
    filtered = filtered.filter(r =>
      r.name.toLowerCase().includes(term) ||
      r.description.toLowerCase().includes(term) ||
      r.materials.some(m => m.itemName.toLowerCase().includes(term))
    );
  }

  displayRecipes(filtered);
  updateFilterStatus(filtered.length);
}

function updateRecipeCount() {
  recipeCountEl.textContent = `${CRAFTING_RECIPES.length} craftable items`;
}

function updateFilterStatus(count: number) {
  const parts = [];
  if (currentCategory !== 'all') parts.push(formatCategory(currentCategory));
  if (currentUnlockMethod !== 'all') parts.push(getUnlockLabel(currentUnlockMethod));
  if (currentFilter) parts.push(`Search: "${currentFilter}"`);

  if (parts.length > 0) {
    filterStatusEl.textContent = `Showing: ${count} of ${CRAFTING_RECIPES.length} (${parts.join(', ')})`;
  } else {
    filterStatusEl.textContent = 'Showing: All';
  }
}

// Start the app
init();
