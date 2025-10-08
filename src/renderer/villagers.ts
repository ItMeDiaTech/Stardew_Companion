import './villagers.css';
import { ElectronAPI } from '@preload/index';
import { Villager, VillagerGender } from '@shared/types';
import { VILLAGERS, getBachelors, getBachelorettes, getOtherVillagers } from '@shared/data/villagers';

// Extend the Window interface
declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// DOM Elements
const villagersGrid = document.getElementById('villagers-grid') as HTMLElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const filterButtons = document.querySelectorAll('.filter-btn');
const filterStatus = document.getElementById('filter-status') as HTMLElement;
const modal = document.getElementById('villager-modal') as HTMLElement;
const modalClose = document.getElementById('modal-close-btn') as HTMLElement;

// Window controls
const minimizeBtn = document.getElementById('minimize-btn') as HTMLButtonElement;
const maximizeBtn = document.getElementById('maximize-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

// State
let currentFilter: 'all' | 'male' | 'female' | 'marriageable' | 'other' = 'all';
let currentSearchTerm = '';
let displayedVillagers: Villager[] = VILLAGERS;

// Initialize
function init() {
  setupWindowControls();
  renderVillagers();
  setupFilterButtons();
  setupSearch();
  setupModal();
}

function setupWindowControls() {
  minimizeBtn?.addEventListener('click', () => {
    electronAPI.minimizeWindow();
  });

  maximizeBtn?.addEventListener('click', () => {
    electronAPI.maximizeWindow();
  });

  closeBtn?.addEventListener('click', () => {
    electronAPI.closeWindow();
  });
}

function renderVillagers() {
  if (!villagersGrid) return;

  villagersGrid.innerHTML = '';

  displayedVillagers.forEach(villager => {
    const card = createVillagerCard(villager);
    villagersGrid.appendChild(card);
  });

  updateFilterStatus();
}

function createVillagerCard(villager: Villager): HTMLElement {
  const card = document.createElement('div');
  card.className = 'villager-card';
  card.setAttribute('data-villager-id', villager.id);
  card.setAttribute('data-gender', villager.gender);

  const portraitPath = villager.portraitUrl || 'assets/portraits/placeholder.png';

  // Limit loved gifts display to 3 items
  const lovedGiftsDisplay = villager.lovedGifts.slice(0, 3).join(', ');
  const moreLovedGifts = villager.lovedGifts.length > 3 ? ` +${villager.lovedGifts.length - 3} more` : '';

  // Limit hated gifts display to 2 items
  const hatedGiftsDisplay = villager.hatedGifts.slice(0, 2).join(', ');
  const moreHatedGifts = villager.hatedGifts.length > 2 ? ` +${villager.hatedGifts.length - 2} more` : '';

  const badgeText = villager.marriageable
    ? (villager.gender === 'male' ? 'Bachelor' : 'Bachelorette')
    : 'Villager';

  card.innerHTML = `
    <span class="gender-badge ${villager.gender} ${!villager.marriageable ? 'non-marriage' : ''}">${badgeText}</span>
    <div class="villager-card-header">
      <div class="villager-portrait">
        <img src="${portraitPath}" alt="${villager.name}" onerror="this.src='assets/portraits/placeholder.png'" />
      </div>
      <div class="villager-name-info">
        <h3 class="villager-name">${villager.name}</h3>
        <div class="villager-birthday">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 14c.5 0 1-.2 1.4-.6l5-5c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L8 9.2 4.4 5.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l5 5c.4.4.9.6 1.4.6z"/>
          </svg>
          ${villager.birthday.season} ${villager.birthday.day}
        </div>
      </div>
    </div>
    <div class="villager-gifts">
      <div class="gift-section">
        <div class="gift-label loved">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 15l-1.4-1.3C2.4 9.8 0 7.6 0 5c0-2.2 1.8-4 4-4 1.3 0 2.5.6 3.3 1.5L8 3.1l.7-.6C9.5 1.6 10.7 1 12 1c2.2 0 4 1.8 4 4 0 2.6-2.4 4.8-6.6 8.7L8 15z"/>
          </svg>
          Loves
        </div>
        <div class="gift-items">${lovedGiftsDisplay}${moreLovedGifts}</div>
      </div>
      <div class="gift-section">
        <div class="gift-label hated">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 1L6.5 2.5 8 4 9.5 2.5 8 1zM4 6.5L2.5 8 4 9.5 5.5 8 4 6.5zm8 0L10.5 8 12 9.5 13.5 8 12 6.5zM8 11l-1.5 1.5L8 14l1.5-1.5L8 11z"/>
          </svg>
          Hates
        </div>
        <div class="gift-items">${hatedGiftsDisplay}${moreHatedGifts}</div>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    showVillagerDetail(villager);
  });

  return card;
}

function setupFilterButtons() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter') as 'all' | 'male' | 'female' | 'marriageable' | 'other';
      if (!filter) return;

      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update filter
      currentFilter = filter;
      applyFilters();
    });
  });
}

function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    currentSearchTerm = searchInput.value.toLowerCase();
    applyFilters();
  });
}

function applyFilters() {
  let filtered = VILLAGERS;

  // Apply category filter
  if (currentFilter === 'marriageable') {
    filtered = VILLAGERS.filter(v => v.marriageable);
  } else if (currentFilter === 'male') {
    filtered = getBachelors();
  } else if (currentFilter === 'female') {
    filtered = getBachelorettes();
  } else if (currentFilter === 'other') {
    filtered = getOtherVillagers();
  }

  // Apply search filter
  if (currentSearchTerm) {
    filtered = filtered.filter(v =>
      v.name.toLowerCase().includes(currentSearchTerm) ||
      v.description.toLowerCase().includes(currentSearchTerm) ||
      v.location.toLowerCase().includes(currentSearchTerm) ||
      v.lovedGifts.some(g => g.toLowerCase().includes(currentSearchTerm)) ||
      (v.likedGifts && v.likedGifts.some(g => g.toLowerCase().includes(currentSearchTerm))) ||
      (v.dislikedGifts && v.dislikedGifts.some(g => g.toLowerCase().includes(currentSearchTerm))) ||
      v.hatedGifts.some(g => g.toLowerCase().includes(currentSearchTerm))
    );
  }

  displayedVillagers = filtered;
  renderVillagers();
}

function updateFilterStatus() {
  if (!filterStatus) return;

  const count = displayedVillagers.length;
  let filterText = 'All';

  if (currentFilter === 'marriageable') {
    filterText = 'Marriage Candidates';
  } else if (currentFilter === 'male') {
    filterText = 'Bachelors';
  } else if (currentFilter === 'female') {
    filterText = 'Bachelorettes';
  } else if (currentFilter === 'other') {
    filterText = 'Other Villagers';
  }

  if (currentSearchTerm) {
    filterStatus.textContent = `Showing: ${count} result${count !== 1 ? 's' : ''}`;
  } else {
    filterStatus.textContent = `Showing: ${filterText}`;
  }
}

function setupModal() {
  if (!modalClose || !modal) return;

  modalClose.addEventListener('click', hideModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      hideModal();
    }
  });
}

function showVillagerDetail(villager: Villager) {
  if (!modal) return;

  // Update modal content
  const nameEl = document.getElementById('modal-villager-name');
  const portraitEl = document.getElementById('modal-villager-portrait') as HTMLImageElement;
  const birthdayEl = document.getElementById('modal-villager-birthday');
  const genderEl = document.getElementById('modal-villager-gender');
  const locationEl = document.getElementById('modal-villager-location');
  const descriptionEl = document.getElementById('modal-villager-description');
  const lovedGiftsEl = document.getElementById('modal-loved-gifts');
  const likedGiftsEl = document.getElementById('modal-liked-gifts');
  const dislikedGiftsEl = document.getElementById('modal-disliked-gifts');
  const hatedGiftsEl = document.getElementById('modal-hated-gifts');

  if (nameEl) nameEl.textContent = villager.name;
  if (portraitEl) {
    portraitEl.src = villager.portraitUrl || 'assets/portraits/placeholder.png';
    portraitEl.alt = villager.name;
  }
  if (birthdayEl) birthdayEl.textContent = `${villager.birthday.season} ${villager.birthday.day}`;
  if (genderEl) {
    const genderText = villager.marriageable
      ? (villager.gender === 'male' ? 'Bachelor' : 'Bachelorette')
      : (villager.gender === 'male' ? 'Male' : 'Female');
    genderEl.textContent = genderText;
  }
  if (locationEl) locationEl.textContent = villager.location;
  if (descriptionEl) descriptionEl.textContent = villager.description;

  // Populate loved gifts
  if (lovedGiftsEl) {
    lovedGiftsEl.innerHTML = villager.lovedGifts
      .map(gift => `<li>${gift}</li>`)
      .join('');
  }

  // Populate liked gifts
  if (likedGiftsEl) {
    if (villager.likedGifts && villager.likedGifts.length > 0) {
      likedGiftsEl.innerHTML = villager.likedGifts
        .map(gift => `<li>${gift}</li>`)
        .join('');
    } else {
      likedGiftsEl.innerHTML = '<li class="no-data">No data available</li>';
    }
  }

  // Populate disliked gifts
  if (dislikedGiftsEl) {
    if (villager.dislikedGifts && villager.dislikedGifts.length > 0) {
      dislikedGiftsEl.innerHTML = villager.dislikedGifts
        .map(gift => `<li>${gift}</li>`)
        .join('');
    } else {
      dislikedGiftsEl.innerHTML = '<li class="no-data">No data available</li>';
    }
  }

  // Populate hated gifts
  if (hatedGiftsEl) {
    hatedGiftsEl.innerHTML = villager.hatedGifts
      .map(gift => `<li>${gift}</li>`)
      .join('');
  }

  // Populate schedule if available
  const scheduleSection = document.getElementById('schedule-section');
  if (villager.schedule && scheduleSection) {
    const scheduleContent = document.querySelector('.schedule-content');
    if (scheduleContent) {
      let scheduleHTML = '';

      // General description
      if (villager.schedule.general) {
        scheduleHTML += `
          <div class="schedule-row">
            <span class="schedule-label">General:</span>
            <span class="schedule-value">${villager.schedule.general}</span>
          </div>
        `;
      }

      // Default schedule
      if (villager.schedule.default) {
        scheduleHTML += `<div class="schedule-subsection"><h4>Default Schedule:</h4>`;
        for (const [time, location] of Object.entries(villager.schedule.default)) {
          scheduleHTML += `
            <div class="schedule-row">
              <span class="schedule-label">${time}:</span>
              <span class="schedule-value">${location}</span>
            </div>
          `;
        }
        scheduleHTML += `</div>`;
      }

      // Day-specific schedules (Monday-Sunday)
      const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
      days.forEach(day => {
        if (!villager.schedule) return;
        const daySchedule = villager.schedule[day as keyof typeof villager.schedule];
        if (daySchedule && typeof daySchedule === 'object') {
          scheduleHTML += `<div class="schedule-subsection"><h4>${day.charAt(0).toUpperCase() + day.slice(1)}:</h4>`;
          for (const [time, location] of Object.entries(daySchedule)) {
            scheduleHTML += `
              <div class="schedule-row">
                <span class="schedule-label">${time}:</span>
                <span class="schedule-value">${location}</span>
              </div>
            `;
          }
          scheduleHTML += `</div>`;
        }
      });

      // Season-specific schedules
      const seasons = ['spring', 'summer', 'fall', 'winter'];
      seasons.forEach(season => {
        if (!villager.schedule) return;
        const seasonSchedule = villager.schedule[season as keyof typeof villager.schedule];
        if (seasonSchedule && typeof seasonSchedule === 'object') {
          scheduleHTML += `<div class="schedule-subsection"><h4>${season.charAt(0).toUpperCase() + season.slice(1)}:</h4>`;
          for (const [time, location] of Object.entries(seasonSchedule)) {
            scheduleHTML += `
              <div class="schedule-row">
                <span class="schedule-label">${time}:</span>
                <span class="schedule-value">${location}</span>
              </div>
            `;
          }
          scheduleHTML += `</div>`;
        }
      });

      // Rainy day schedule
      if (villager.schedule.rainy) {
        scheduleHTML += `<div class="schedule-subsection"><h4>Rainy Days:</h4>`;
        for (const [time, location] of Object.entries(villager.schedule.rainy)) {
          scheduleHTML += `
            <div class="schedule-row">
              <span class="schedule-label">${time}:</span>
              <span class="schedule-value">${location}</span>
            </div>
          `;
        }
        scheduleHTML += `</div>`;
      }

      // Notes
      if (villager.schedule.notes) {
        scheduleHTML += `
          <div class="schedule-row notes">
            <span class="schedule-label">Notes:</span>
            <span class="schedule-value">${villager.schedule.notes}</span>
          </div>
        `;
      }

      scheduleContent.innerHTML = scheduleHTML;
    }
    scheduleSection.style.display = 'block';
  } else if (scheduleSection) {
    scheduleSection.style.display = 'none';
  }

  // Show modal
  modal.style.display = 'flex';
}

function hideModal() {
  if (!modal) return;
  modal.style.display = 'none';
}

// Initialize the app
init();
