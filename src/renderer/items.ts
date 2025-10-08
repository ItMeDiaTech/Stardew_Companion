import './items.css';
import { ElectronAPI } from '@preload/index';
import { Item, ItemCategory, Season } from '@shared/types';
import { ITEMS, getItemsByCategory, getItemsBySeason, getItemsBySource, searchItems } from '@shared/data/items';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;
const sourceFilter = document.getElementById('source-filter') as HTMLSelectElement;
const seasonFilter = document.getElementById('season-filter') as HTMLSelectElement;
const itemsGrid = document.getElementById('items-grid') as HTMLElement;
const itemCountEl = document.getElementById('item-count') as HTMLElement;
const filterStatusEl = document.getElementById('filter-status') as HTMLElement;

// Window controls
const minimizeBtn = document.getElementById('minimize-btn') as HTMLButtonElement;
const maximizeBtn = document.getElementById('maximize-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

// Item Modal elements
const itemModal = document.getElementById('item-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalItemName = document.getElementById('modal-item-name') as HTMLElement;
const modalItemCategory = document.getElementById('modal-item-category') as HTMLElement;
const modalItemRarity = document.getElementById('modal-item-rarity') as HTMLElement;
const modalItemDescription = document.getElementById('modal-item-description') as HTMLElement;
const modalSellPrice = document.getElementById('modal-sell-price') as HTMLElement;
const modalSellPriceValue = document.getElementById('modal-sell-price-value') as HTMLElement;
const modalEdibility = document.getElementById('modal-edibility') as HTMLElement;
const modalEdibilityValue = document.getElementById('modal-edibility-value') as HTMLElement;
const modalForage = document.getElementById('modal-forage') as HTMLElement;
const modalForageList = document.getElementById('modal-forage-list') as HTMLElement;
const modalFishing = document.getElementById('modal-fishing') as HTMLElement;
const modalFishingList = document.getElementById('modal-fishing-list') as HTMLElement;
const modalMining = document.getElementById('modal-mining') as HTMLElement;
const modalMiningList = document.getElementById('modal-mining-list') as HTMLElement;
const modalMonsters = document.getElementById('modal-monsters') as HTMLElement;
const modalMonstersList = document.getElementById('modal-monsters-list') as HTMLElement;
const modalShops = document.getElementById('modal-shops') as HTMLElement;
const modalShopsList = document.getElementById('modal-shops-list') as HTMLElement;
const modalFarming = document.getElementById('modal-farming') as HTMLElement;
const modalFarmingText = document.getElementById('modal-farming-text') as HTMLElement;
const modalArtisan = document.getElementById('modal-artisan') as HTMLElement;
const modalArtisanText = document.getElementById('modal-artisan-text') as HTMLElement;
const modalUsedIn = document.getElementById('modal-used-in') as HTMLElement;
const modalUsedInList = document.getElementById('modal-used-in-list') as HTMLElement;
const modalGiftInfo = document.getElementById('modal-gift-info') as HTMLElement;
const modalGiftInfoContent = document.getElementById('modal-gift-info-content') as HTMLElement;

// State
let currentFilter = '';
let currentCategory: ItemCategory | 'all' = 'all';
let currentSource: string = 'all';
let currentSeason: Season | 'all' = 'all';

// Initialize
function init() {
  setupWindowControls();
  setupEventListeners();
  displayItems(ITEMS);
  updateItemCount();
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
    filterItems();
  });

  // Category filter
  categoryFilter.addEventListener('change', () => {
    currentCategory = categoryFilter.value as ItemCategory | 'all';
    filterItems();
  });

  // Source filter
  sourceFilter.addEventListener('change', () => {
    currentSource = sourceFilter.value;
    filterItems();
  });

  // Season filter
  seasonFilter.addEventListener('change', () => {
    currentSeason = seasonFilter.value as Season | 'all';
    filterItems();
  });

  // Modal close button
  modalCloseBtn.addEventListener('click', closeItemModal);

  // Close modal on background click
  itemModal.addEventListener('click', (e) => {
    if (e.target === itemModal) closeItemModal();
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && itemModal.style.display === 'flex') {
      closeItemModal();
    }
  });
}

function displayItems(items: Item[]) {
  itemsGrid.innerHTML = items.map(item => createItemCard(item)).join('');

  // Add click handlers
  const itemCards = document.querySelectorAll('.item-card');
  itemCards.forEach((card, index) => {
    card.addEventListener('click', () => openItemModal(items[index]));
  });
}

function createItemCard(item: Item): string {
  const sources = getItemSources(item);
  const sourcesPreview = sources.slice(0, 2).join(', ');
  const moreSourcesCount = sources.length > 2 ? sources.length - 2 : 0;

  return `
    <div class="item-card" data-item-id="${item.id}">
      <div class="item-card-header">
        <h3>${item.name}</h3>
        <div class="item-badges">
          <span class="category-badge category-${item.category}">${formatCategory(item.category)}</span>
          ${item.rarity ? `<span class="rarity-badge rarity-${item.rarity}">${formatRarity(item.rarity)}</span>` : ''}
        </div>
      </div>
      <div class="item-card-body">
        <p class="item-short-desc">${truncateText(item.description, 80)}</p>

        <div class="item-price">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C5.8 0 4 1.8 4 4c0 1.1.5 2.1 1.2 2.8L4 14h8l-1.2-7.2C11.5 6.1 12 5.1 12 4c0-2.2-1.8-4-4-4z"/>
          </svg>
          <span>${item.sellPrice}g</span>
        </div>

        ${sources.length > 0 ? `
          <div class="item-sources-preview">
            <span class="sources-label">Sources:</span>
            <span class="sources-text">${sourcesPreview}</span>
            ${moreSourcesCount > 0 ? `<span class="more-sources">+${moreSourcesCount} more</span>` : ''}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function getItemSources(item: Item): string[] {
  const sources: string[] = [];
  if (item.forageLocations && item.forageLocations.length > 0) sources.push('Foraging');
  if (item.fishingLocations && item.fishingLocations.length > 0) sources.push('Fishing');
  if (item.miningLocations && item.miningLocations.length > 0) sources.push('Mining');
  if (item.monsterDrops && item.monsterDrops.length > 0) sources.push('Monsters');
  if (item.shops && item.shops.length > 0) sources.push('Shops');
  if (item.farmingInfo) sources.push('Farming');
  if (item.craftingRecipe) sources.push('Crafting');
  if (item.artisanSource) sources.push('Artisan');
  return sources;
}

function formatCategory(category: ItemCategory): string {
  return category.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

function formatRarity(rarity: string): string {
  return rarity.charAt(0).toUpperCase() + rarity.slice(1);
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

function openItemModal(item: Item) {
  modalItemName.textContent = item.name;
  modalItemCategory.textContent = formatCategory(item.category);
  modalItemCategory.className = `item-category-badge category-${item.category}`;
  modalItemDescription.textContent = item.description;

  // Rarity badge
  if (item.rarity) {
    modalItemRarity.textContent = formatRarity(item.rarity);
    modalItemRarity.className = `item-rarity-badge rarity-${item.rarity}`;
    modalItemRarity.style.display = 'inline-block';
  } else {
    modalItemRarity.style.display = 'none';
  }

  // Sell price
  modalSellPriceValue.textContent = `${item.sellPrice}g`;

  // Edibility
  if (item.edibility !== undefined && item.edibility !== -300) {
    modalEdibility.style.display = 'flex';
    const energy = item.edibility;
    const health = Math.floor(energy * 0.45);
    modalEdibilityValue.textContent = `+${energy} Energy / +${health} Health`;
  } else {
    modalEdibility.style.display = 'none';
  }

  // Forage locations
  if (item.forageLocations && item.forageLocations.length > 0) {
    modalForage.style.display = 'block';
    modalForageList.innerHTML = item.forageLocations.map(loc => `
      <div class="source-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5z"/>
        </svg>
        <div>
          <span class="source-name">${loc.area}</span>
          ${loc.season ? `<span class="season-info">${loc.season.join(', ')}</span>` : ''}
          ${loc.weather ? `<span class="weather-info">${formatWeather(loc.weather)}</span>` : ''}
          ${loc.timeOfDay ? `<span class="time-info">${loc.timeOfDay}</span>` : ''}
          ${loc.condition ? `<span class="condition-info">${loc.condition}</span>` : ''}
        </div>
      </div>
    `).join('');
  } else {
    modalForage.style.display = 'none';
  }

  // Fishing locations
  if (item.fishingLocations && item.fishingLocations.length > 0) {
    modalFishing.style.display = 'block';
    modalFishingList.innerHTML = item.fishingLocations.map(loc => `
      <div class="source-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M13 3c-1.1 0-2 .9-2 2 0 .4.1.7.3 1L8 9.3V6c0-.6-.4-1-1-1s-1 .4-1 1v3.3L2.7 6c.2-.3.3-.6.3-1 0-1.1-.9-2-2-2"/>
        </svg>
        <div>
          <span class="source-name">${loc.area}</span>
          ${loc.season ? `<span class="season-info">${loc.season.join(', ')}</span>` : ''}
          ${loc.weather ? `<span class="weather-info">${formatWeather(loc.weather)}</span>` : ''}
          ${loc.timeOfDay ? `<span class="time-info">${loc.timeOfDay}</span>` : ''}
          ${loc.condition ? `<span class="condition-info">${loc.condition}</span>` : ''}
        </div>
      </div>
    `).join('');
  } else {
    modalFishing.style.display = 'none';
  }

  // Mining locations
  if (item.miningLocations && item.miningLocations.length > 0) {
    modalMining.style.display = 'block';
    modalMiningList.innerHTML = item.miningLocations.map(loc => `
      <div class="source-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M3 5l5-4 5 4v9H3V5z"/>
        </svg>
        <span class="source-name">${loc}</span>
      </div>
    `).join('');
  } else {
    modalMining.style.display = 'none';
  }

  // Monster drops
  if (item.monsterDrops && item.monsterDrops.length > 0) {
    modalMonsters.style.display = 'block';
    modalMonstersList.innerHTML = item.monsterDrops.map(drop => `
      <div class="source-item monster-drop-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1L6 5l-4 1 3 3-1 4 4-2 4 2-1-4 3-3-4-1-2-4z"/>
        </svg>
        <div class="monster-drop-info">
          <span class="monster-name">${drop.monsterName}</span>
          <span class="drop-rate">${drop.dropRate}</span>
          ${drop.floors ? `<span class="floor-info">Floors ${drop.floors}</span>` : ''}
        </div>
      </div>
    `).join('');
  } else {
    modalMonsters.style.display = 'none';
  }

  // Shops
  if (item.shops && item.shops.length > 0) {
    modalShops.style.display = 'block';
    modalShopsList.innerHTML = item.shops.map(shop => `
      <div class="source-item shop-item">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M14 2H2L1 6v1c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6l-1-4zM2 9v6h12V9H2z"/>
        </svg>
        <div class="shop-info">
          <span class="shop-name">${shop.shopName}</span>
          <span class="shop-price">${shop.price.toLocaleString()}g</span>
        </div>
        ${shop.availability ? `
          <div class="shop-availability">
            ${shop.availability.seasons ? `Seasons: ${shop.availability.seasons.join(', ')}` : ''}
            ${shop.availability.year ? `Year ${shop.availability.year}+` : ''}
            ${shop.availability.condition ? shop.availability.condition : ''}
          </div>
        ` : ''}
      </div>
    `).join('');
  } else {
    modalShops.style.display = 'none';
  }

  // Farming info
  if (item.farmingInfo) {
    modalFarming.style.display = 'block';
    modalFarmingText.textContent = item.farmingInfo;
  } else {
    modalFarming.style.display = 'none';
  }

  // Artisan/Crafting source
  const artisanText = item.artisanSource || (item.craftingRecipe ? `Crafted using ${item.craftingRecipe} recipe` : '');
  if (artisanText) {
    modalArtisan.style.display = 'block';
    modalArtisanText.textContent = artisanText;
  } else {
    modalArtisan.style.display = 'none';
  }

  // Used in (bundles and recipes)
  const usedIn: string[] = [];
  if (item.usedInBundles) usedIn.push(...item.usedInBundles.map(b => `Bundle: ${b}`));
  if (item.usedInRecipes) usedIn.push(...item.usedInRecipes.map(r => `Recipe: ${r}`));

  if (usedIn.length > 0) {
    modalUsedIn.style.display = 'block';
    modalUsedInList.innerHTML = usedIn.map(use => `
      <div class="used-in-item">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="2"/>
        </svg>
        <span>${use}</span>
      </div>
    `).join('');
  } else {
    modalUsedIn.style.display = 'none';
  }

  // Gift info
  if (item.giftInfo && (item.giftInfo.lovedBy || item.giftInfo.likedBy)) {
    modalGiftInfo.style.display = 'block';
    let giftHtml = '';

    if (item.giftInfo.lovedBy && item.giftInfo.lovedBy.length > 0) {
      giftHtml += `
        <div class="gift-preference-group">
          <h4 class="gift-preference-label love">❤️ Loved By:</h4>
          <p class="gift-villagers">${item.giftInfo.lovedBy.join(', ')}</p>
        </div>
      `;
    }

    if (item.giftInfo.likedBy && item.giftInfo.likedBy.length > 0) {
      giftHtml += `
        <div class="gift-preference-group">
          <h4 class="gift-preference-label like">👍 Liked By:</h4>
          <p class="gift-villagers">${item.giftInfo.likedBy.join(', ')}</p>
        </div>
      `;
    }

    modalGiftInfoContent.innerHTML = giftHtml;
  } else {
    modalGiftInfo.style.display = 'none';
  }

  itemModal.style.display = 'flex';
}

function closeItemModal() {
  itemModal.style.display = 'none';
}

function formatWeather(weather: string): string {
  return weather.charAt(0).toUpperCase() + weather.slice(1);
}

function filterItems() {
  let filtered = ITEMS;

  // Filter by category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(item => item.category === currentCategory);
  }

  // Filter by source
  if (currentSource !== 'all') {
    filtered = filtered.filter(item => {
      const sources = getItemSources(item).map(s => s.toLowerCase());
      return sources.includes(currentSource.toLowerCase());
    });
  }

  // Filter by season
  if (currentSeason !== 'all') {
    filtered = filtered.filter(item => {
      // Check forage locations
      if (item.forageLocations) {
        const hasSeasonForage = item.forageLocations.some(loc =>
          loc.season && loc.season.includes(currentSeason as Season)
        );
        if (hasSeasonForage) return true;
      }
      // Check fishing locations
      if (item.fishingLocations) {
        const hasSeasonFishing = item.fishingLocations.some(loc =>
          loc.season && loc.season.includes(currentSeason as Season)
        );
        if (hasSeasonFishing) return true;
      }
      return false;
    });
  }

  // Filter by search term
  if (currentFilter) {
    const term = currentFilter.toLowerCase();
    filtered = filtered.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  }

  displayItems(filtered);
  updateFilterStatus(filtered.length);
}

function updateItemCount() {
  itemCountEl.textContent = `${ITEMS.length} items`;
}

function updateFilterStatus(count: number) {
  const parts = [];
  if (currentCategory !== 'all') parts.push(formatCategory(currentCategory));
  if (currentSource !== 'all') parts.push(currentSource);
  if (currentSeason !== 'all') parts.push(currentSeason);
  if (currentFilter) parts.push(`Search: "${currentFilter}"`);

  if (parts.length > 0) {
    filterStatusEl.textContent = `Showing: ${count} of ${ITEMS.length} (${parts.join(', ')})`;
  } else {
    filterStatusEl.textContent = 'Showing: All';
  }
}

// Start the app
init();
