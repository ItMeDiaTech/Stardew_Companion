import './shops.css';
import { ElectronAPI } from '@preload/index';
import { Shop, ShopItem, ShopItemCategory } from '@shared/types';
import { SHOPS } from '@shared/data/shops';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const shopsGrid = document.getElementById('shops-grid') as HTMLElement;
const shopCountEl = document.getElementById('shop-count') as HTMLElement;
const filterStatusEl = document.getElementById('filter-status') as HTMLElement;

// Window controls
const minimizeBtn = document.getElementById('minimize-btn') as HTMLButtonElement;
const maximizeBtn = document.getElementById('maximize-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

// Modal elements
const shopModal = document.getElementById('shop-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalShopName = document.getElementById('modal-shop-name') as HTMLElement;
const modalShopSubtitle = document.getElementById('modal-shop-subtitle') as HTMLElement;
const modalShopOwner = document.getElementById('modal-shop-owner') as HTMLElement;
const modalShopLocation = document.getElementById('modal-shop-location') as HTMLElement;
const modalShopHours = document.getElementById('modal-shop-hours') as HTMLElement;
const modalShopClosed = document.getElementById('modal-shop-closed') as HTMLElement;
const modalShopNotes = document.getElementById('modal-shop-notes') as HTMLElement;
const modalShopItems = document.getElementById('modal-shop-items') as HTMLElement;
const categoryFilter = document.getElementById('category-filter') as HTMLSelectElement;

// View toggle
const viewBtns = document.querySelectorAll('.view-btn');

// State
let currentView: 'grid' | 'list' = 'grid';
let currentFilter = '';
let currentShop: Shop | null = null;
let currentCategory: ShopItemCategory | 'all' = 'all';

// Initialize
function init() {
  setupWindowControls();
  displayShops(SHOPS);
  setupEventListeners();
  updateShopCount();
}

function setupWindowControls() {
  minimizeBtn.addEventListener('click', () => electronAPI.minimizeWindow());
  maximizeBtn.addEventListener('click', () => electronAPI.maximizeWindow());
  closeBtn.addEventListener('click', () => electronAPI.closeWindow());
}

function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    currentFilter = (e.target as HTMLInputElement).value;
    filterShops();
  });

  // View toggle
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.getAttribute('data-view') as 'grid' | 'list';
      shopsGrid.className = currentView === 'grid' ? 'shops-grid' : 'shops-list';
    });
  });

  // Modal close
  modalCloseBtn.addEventListener('click', closeModal);
  shopModal.addEventListener('click', (e) => {
    if (e.target === shopModal) closeModal();
  });

  // Category filter
  categoryFilter.addEventListener('change', (e) => {
    currentCategory = (e.target as HTMLSelectElement).value as ShopItemCategory | 'all';
    if (currentShop) {
      displayShopItems(currentShop);
    }
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && shopModal.style.display === 'flex') {
      closeModal();
    }
  });
}

function displayShops(shops: Shop[]) {
  shopsGrid.innerHTML = shops.map(shop => createShopCard(shop)).join('');

  // Add click handlers
  const shopCards = document.querySelectorAll('.shop-card');
  shopCards.forEach((card, index) => {
    card.addEventListener('click', () => openShopModal(shops[index]));
  });
}

function createShopCard(shop: Shop): string {
  const closedDays = shop.hours.closedDays.length > 0
    ? shop.hours.closedDays.join(', ')
    : 'Never';

  return `
    <div class="shop-card" data-shop-id="${shop.id}">
      <div class="shop-card-header">
        <h3>${shop.name}</h3>
        <span class="shop-owner">${shop.owner}</span>
      </div>
      <div class="shop-card-body">
        <div class="shop-info-row">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          <span>${shop.location}</span>
        </div>
        <div class="shop-info-row">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 4v4l3 2"/>
          </svg>
          <span>${shop.hours.openTime} - ${shop.hours.closeTime}</span>
        </div>
        <div class="shop-info-row">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3.5 10.1L10.1 12.5 8 10.4l-2.1 2.1-1.4-1.4L6.6 9 4.5 6.9l1.4-1.4L8 7.6l2.1-2.1 1.4 1.4L9.4 9l2.1 2.1z"/>
          </svg>
          <span class="closed-days">${closedDays}</span>
        </div>
        <div class="shop-item-count">${shop.items.length} items</div>
      </div>
    </div>
  `;
}

function openShopModal(shop: Shop) {
  currentShop = shop;
  currentCategory = 'all';
  categoryFilter.value = 'all';

  modalShopName.textContent = shop.name;
  modalShopSubtitle.textContent = shop.description || '';
  modalShopOwner.textContent = shop.owner;
  modalShopLocation.textContent = shop.location;
  modalShopHours.textContent = `${shop.hours.openTime} - ${shop.hours.closeTime}`;

  const closedDays = shop.hours.closedDays.length > 0
    ? shop.hours.closedDays.join(', ')
    : 'Never';
  modalShopClosed.textContent = closedDays;

  if (shop.hours.specialNotes) {
    modalShopNotes.innerHTML = `
      <div class="special-note">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 4v4M8 10h.01"/>
        </svg>
        <span>${shop.hours.specialNotes}</span>
      </div>
    `;
    modalShopNotes.style.display = 'block';
  } else {
    modalShopNotes.style.display = 'none';
  }

  displayShopItems(shop);
  shopModal.style.display = 'flex';
}

function displayShopItems(shop: Shop) {
  const items = currentCategory === 'all'
    ? shop.items
    : shop.items.filter(item => item.category === currentCategory);

  if (items.length === 0) {
    modalShopItems.innerHTML = '<p class="no-items">No items in this category</p>';
    return;
  }

  modalShopItems.innerHTML = `
    <div class="shop-items-grid">
      ${items.map(item => createShopItemCard(item)).join('')}
    </div>
  `;
}

function createShopItemCard(item: ShopItem): string {
  const availability = getAvailabilityText(item);
  const priceDisplay = item.price === 0 ? 'Free' : `${item.price.toLocaleString()}g`;

  return `
    <div class="shop-item-card">
      <div class="shop-item-header">
        <span class="shop-item-name">${item.name}</span>
        <span class="shop-item-price">${priceDisplay}</span>
      </div>
      ${item.description ? `<div class="shop-item-description">${item.description}</div>` : ''}
      ${availability ? `<div class="shop-item-availability">${availability}</div>` : ''}
      <div class="shop-item-category">
        <span class="category-badge category-${item.category}">${formatCategory(item.category)}</span>
      </div>
    </div>
  `;
}

function getAvailabilityText(item: ShopItem): string {
  if (!item.availability) return '';

  const parts: string[] = [];

  if (item.availability.seasons) {
    parts.push(`Seasons: ${item.availability.seasons.join(', ')}`);
  }

  if (item.availability.year) {
    parts.push(`Year ${item.availability.year}+`);
  }

  if (item.availability.condition) {
    parts.push(item.availability.condition);
  }

  return parts.join(' • ');
}

function formatCategory(category: ShopItemCategory): string {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function closeModal() {
  shopModal.style.display = 'none';
  currentShop = null;
}

function filterShops() {
  const term = currentFilter.toLowerCase();

  const filtered = SHOPS.filter(shop => {
    // Search in shop name, owner, location
    const shopMatch =
      shop.name.toLowerCase().includes(term) ||
      shop.owner.toLowerCase().includes(term) ||
      shop.location.toLowerCase().includes(term);

    // Search in items
    const itemMatch = shop.items.some(item =>
      item.name.toLowerCase().includes(term)
    );

    return shopMatch || itemMatch;
  });

  displayShops(filtered);
  updateFilterStatus(filtered.length);
}

function updateShopCount() {
  shopCountEl.textContent = `${SHOPS.length} shops available`;
}

function updateFilterStatus(count: number) {
  if (currentFilter) {
    filterStatusEl.textContent = `Showing: ${count} of ${SHOPS.length}`;
  } else {
    filterStatusEl.textContent = 'Showing: All';
  }
}

// Start the app
init();
