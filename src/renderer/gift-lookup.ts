import './gift-lookup.css';
import { ElectronAPI } from '@preload/index';
import { VILLAGERS } from '@shared/data/villagers';
import { ITEMS } from '@shared/data/items';
import { lookupGiftPreference, GiftLookupResult } from '@shared/data/giftLookup';
import { Villager } from '@shared/types';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

// DOM Elements
const itemSearch = document.getElementById('item-search') as HTMLInputElement;
const itemSelect = document.getElementById('item-select') as HTMLSelectElement;
const itemSuggestions = document.getElementById('item-suggestions') as HTMLElement;
const selectedItemDisplay = document.getElementById('selected-item') as HTMLElement;
const villagerGrid = document.getElementById('villager-grid') as HTMLElement;
const resultContainer = document.getElementById('result-container') as HTMLElement;
const resultPortrait = document.getElementById('result-portrait') as HTMLImageElement;
const resultVillagerName = document.getElementById('result-villager-name') as HTMLElement;
const resultPreference = document.getElementById('result-preference') as HTMLElement;
const resultItemName = document.getElementById('result-item-name') as HTMLElement;
const resultPoints = document.getElementById('result-points') as HTMLElement;
const resultReason = document.getElementById('result-reason') as HTMLElement;

// State
let selectedItemName = '';
let allItems: string[] = [];

// Initialize
function init() {
  setupSidebar();
  setupWindowControls();
  populateItems();
  renderVillagerGrid();
  setupEventListeners();
}

// Populate items list and dropdown
function populateItems() {
  const itemNames = ITEMS.map(item => item.name);
  allItems = [...new Set(itemNames)].sort((a, b) => a.localeCompare(b));

  // Populate dropdown
  allItems.forEach(itemName => {
    const option = document.createElement('option');
    option.value = itemName;
    option.textContent = itemName;
    itemSelect.appendChild(option);
  });
}

// Render villager grid with mini portraits
function renderVillagerGrid() {
  villagerGrid.innerHTML = '';

  // Sort villagers alphabetically
  const sortedVillagers = [...VILLAGERS].sort((a, b) => a.name.localeCompare(b.name));

  sortedVillagers.forEach(villager => {
    const wrapper = document.createElement('div');
    wrapper.className = 'villager-icon-wrapper';

    // Get preference ring class if item is selected
    let ringClass = '';
    if (selectedItemName) {
      const result = lookupGiftPreference(villager, selectedItemName);
      ringClass = `ring-${result.preference}`;
    }

    wrapper.innerHTML = `
      <div class="villager-icon ${ringClass}">
        <img src="${villager.portraitUrl}" alt="${villager.name}">
      </div>
      <span class="villager-icon-name">${villager.name}</span>
    `;

    wrapper.addEventListener('click', () => showVillagerResult(villager));
    villagerGrid.appendChild(wrapper);
  });
}

// Show suggestions based on search input
function showSuggestions(searchTerm: string) {
  if (searchTerm.length < 3) {
    itemSuggestions.style.display = 'none';
    return;
  }

  const filtered = allItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 15); // Limit to 15 suggestions

  if (filtered.length === 0) {
    itemSuggestions.innerHTML = '<div class="item-suggestion no-results">No items found</div>';
    itemSuggestions.style.display = 'block';
    return;
  }

  itemSuggestions.innerHTML = filtered.map(item =>
    `<div class="item-suggestion" data-item="${item}">${item}</div>`
  ).join('');

  itemSuggestions.style.display = 'block';
}

// Hide suggestions
function hideSuggestions() {
  itemSuggestions.style.display = 'none';
}

// Select an item
function selectItem(itemName: string) {
  selectedItemName = itemName;
  itemSearch.value = itemName;
  itemSelect.value = itemName; // Sync dropdown
  selectedItemDisplay.innerHTML = `<span class="selected-label">Selected:</span> <span class="selected-value">${itemName}</span>`;
  selectedItemDisplay.style.display = 'block';
  hideSuggestions();
  renderVillagerGrid();
  resultContainer.style.display = 'none'; // Hide result when item changes
}

// Clear item selection
function clearItemSelection() {
  selectedItemName = '';
  itemSearch.value = '';
  itemSelect.value = ''; // Reset dropdown
  selectedItemDisplay.style.display = 'none';
  renderVillagerGrid();
  resultContainer.style.display = 'none';
}

// Show result for clicked villager
function showVillagerResult(villager: Villager) {
  if (!selectedItemName) {
    return; // No item selected, don't show result
  }

  const result: GiftLookupResult = lookupGiftPreference(villager, selectedItemName);

  // Update display
  resultContainer.style.display = 'block';

  // Set villager info
  resultPortrait.src = villager.portraitUrl || '';
  resultPortrait.alt = villager.name;
  resultVillagerName.textContent = villager.name;

  // Set item info
  resultItemName.textContent = selectedItemName;

  // Set preference badge
  resultPreference.textContent = getPreferenceLabel(result.preference);
  resultPreference.className = `result-preference ${result.preference}`;

  // Set points
  const pointsText = result.points > 0 ? `+${result.points}` : `${result.points}`;
  resultPoints.textContent = `${pointsText} Friendship Points`;
  resultPoints.className = `result-points ${result.points >= 0 ? 'positive' : 'negative'}`;

  // Set reason
  resultReason.textContent = result.reason;

  // Scroll to result
  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Get display label for preference
function getPreferenceLabel(preference: string): string {
  const labels: Record<string, string> = {
    love: 'LOVES',
    like: 'LIKES',
    neutral: 'NEUTRAL',
    dislike: 'DISLIKES',
    hate: 'HATES'
  };
  return labels[preference] || preference;
}

// Setup event listeners
function setupEventListeners() {
  // Item search input
  itemSearch.addEventListener('input', () => {
    const searchTerm = itemSearch.value.trim();
    showSuggestions(searchTerm);
  });

  // Item dropdown selection
  itemSelect.addEventListener('change', () => {
    const selectedValue = itemSelect.value;
    if (selectedValue) {
      selectItem(selectedValue);
    }
  });

  // Click on suggestion
  itemSuggestions.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('item-suggestion') && !target.classList.contains('no-results')) {
      const itemName = target.getAttribute('data-item');
      if (itemName) {
        selectItem(itemName);
      }
    }
  });

  // Click outside to hide suggestions
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!itemSearch.contains(target) && !itemSuggestions.contains(target)) {
      hideSuggestions();
    }
  });

  // Escape key to hide suggestions
  itemSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideSuggestions();
    }
  });

  // Enter key to select first suggestion
  itemSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstSuggestion = itemSuggestions.querySelector('.item-suggestion:not(.no-results)');
      if (firstSuggestion) {
        const itemName = firstSuggestion.getAttribute('data-item');
        if (itemName) {
          selectItem(itemName);
        }
      }
    }
  });

  // Clear button in selected item display
  selectedItemDisplay.addEventListener('click', () => {
    clearItemSelection();
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
