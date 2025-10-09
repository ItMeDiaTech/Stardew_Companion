import './calendar.css';
import { ElectronAPI } from '@preload/index';
import { CalendarEvent, Season, EventType } from '@shared/types';
import { getAllCalendarEvents, getEventsBySeason, getEventsForDay } from '@shared/data/calendar';
import { setupSidebar, setupWindowControls } from './sidebar';

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}

const { electronAPI } = window;

// Calendar state persistence
interface CalendarState {
  season: Season;
  eventType: EventType | 'all';
  searchFilter: string;
}

const CALENDAR_STATE_KEY = 'stardew-companion-calendar-state';

// DOM Elements
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const calendarGrid = document.getElementById('calendar-grid') as HTMLElement;
const eventCountEl = document.getElementById('event-count') as HTMLElement;
const seasonInfoEl = document.getElementById('season-info') as HTMLElement;

// Season tabs
const seasonTabs = document.querySelectorAll('.season-tab');

// Event type filters
const eventFilters = document.querySelectorAll('.event-filter');

// Modal elements
const eventModal = document.getElementById('event-modal') as HTMLElement;
const modalCloseBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
const modalEventName = document.getElementById('modal-event-name') as HTMLElement;
const modalEventSubtitle = document.getElementById('modal-event-subtitle') as HTMLElement;
const modalEventDate = document.getElementById('modal-event-date') as HTMLElement;
const modalEventTime = document.getElementById('modal-event-time') as HTMLElement;
const modalEventLocation = document.getElementById('modal-event-location') as HTMLElement;
const modalEventType = document.getElementById('modal-event-type') as HTMLElement;
const modalEventDescription = document.getElementById('modal-event-description') as HTMLElement;
const modalEventTimeContainer = document.getElementById('modal-event-time-container') as HTMLElement;
const modalEventLocationContainer = document.getElementById('modal-event-location-container') as HTMLElement;
const villagerActionContainer = document.getElementById('villager-action-container') as HTMLElement;
const viewVillagerBtn = document.getElementById('view-villager-btn') as HTMLButtonElement;

// State
let currentSeason: Season = 'Spring';
let currentEventType: EventType | 'all' = 'all';
let currentFilter = '';

// Initialize
function init() {
  setupSidebar();
  setupWindowControls();
  loadCalendarState();
  setupEventListeners();
  renderCalendar();
  updateEventCount();
}

function saveCalendarState() {
  const state: CalendarState = {
    season: currentSeason,
    eventType: currentEventType,
    searchFilter: currentFilter
  };
  localStorage.setItem(CALENDAR_STATE_KEY, JSON.stringify(state));
}

function loadCalendarState() {
  try {
    const savedState = localStorage.getItem(CALENDAR_STATE_KEY);
    if (savedState) {
      const state: CalendarState = JSON.parse(savedState);

      // Apply saved state
      currentSeason = state.season;
      currentEventType = state.eventType;
      currentFilter = state.searchFilter;

      // Update UI to match loaded state
      // Set active season tab
      seasonTabs.forEach(tab => {
        if (tab.getAttribute('data-season') === currentSeason) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      // Set active event filter
      eventFilters.forEach(filter => {
        if (filter.getAttribute('data-type') === currentEventType) {
          filter.classList.add('active');
        } else {
          filter.classList.remove('active');
        }
      });

      // Set search input value
      if (searchInput) {
        searchInput.value = currentFilter;
      }

      // Update season info
      updateSeasonInfo();
    }
  } catch (error) {
    console.error('Failed to load calendar state:', error);
    // If loading fails, just use defaults
  }
}

function setupEventListeners() {
  // Season tabs
  seasonTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      seasonTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSeason = tab.getAttribute('data-season') as Season;
      renderCalendar();
      updateSeasonInfo();
      saveCalendarState();
    });
  });

  // Event type filters
  eventFilters.forEach(filter => {
    filter.addEventListener('click', () => {
      eventFilters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      currentEventType = filter.getAttribute('data-type') as EventType | 'all';
      renderCalendar();
      saveCalendarState();
    });
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    currentFilter = (e.target as HTMLInputElement).value;
    renderCalendar();
    saveCalendarState();
  });

  // Modal close
  modalCloseBtn.addEventListener('click', closeModal);
  eventModal.addEventListener('click', (e) => {
    if (e.target === eventModal) closeModal();
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && eventModal.style.display === 'flex') {
      closeModal();
    }
  });
}

function renderCalendar() {
  const seasonEvents = getEventsBySeason(currentSeason);

  // Filter by event type
  let filteredEvents = currentEventType === 'all'
    ? seasonEvents
    : seasonEvents.filter(event => event.type === currentEventType);

  // Filter by search term
  if (currentFilter) {
    const term = currentFilter.toLowerCase();
    filteredEvents = filteredEvents.filter(event =>
      event.name.toLowerCase().includes(term) ||
      (event.description && event.description.toLowerCase().includes(term)) ||
      (event.location && event.location.toLowerCase().includes(term))
    );
  }

  // Group events by day
  const eventsByDay = new Map<number, CalendarEvent[]>();
  filteredEvents.forEach(event => {
    if (!eventsByDay.has(event.day)) {
      eventsByDay.set(event.day, []);
    }
    eventsByDay.get(event.day)!.push(event);
  });

  // Render calendar grid (28 days)
  const daysHTML = [];
  for (let day = 1; day <= 28; day++) {
    const dayEvents = eventsByDay.get(day) || [];
    daysHTML.push(createCalendarDay(day, dayEvents));
  }

  calendarGrid.innerHTML = daysHTML.join('');

  // Add click handlers to event items
  const eventItems = document.querySelectorAll('.event-item');
  eventItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const eventId = item.getAttribute('data-event-id');
      const event = filteredEvents.find(e => e.id === eventId);
      if (event) openEventModal(event);
    });
  });

  updateEventCount();
}

function createCalendarDay(day: number, events: CalendarEvent[]): string {
  const hasEvents = events.length > 0;
  const eventsHTML = events.map(event => createEventItem(event)).join('');

  return `
    <div class="calendar-day ${hasEvents ? 'has-events' : ''}">
      <div class="day-number">${day}</div>
      <div class="day-events">
        ${eventsHTML}
      </div>
    </div>
  `;
}

function createEventItem(event: CalendarEvent): string {
  const typeClass = `event-type-${event.type}`;
  const icon = getEventIcon(event.type);

  return `
    <div class="event-item ${typeClass}" data-event-id="${event.id}" title="${event.name}">
      ${icon}
      <span class="event-name">${event.name}</span>
    </div>
  `;
}

function getEventIcon(type: EventType): string {
  switch (type) {
    case 'festival':
      return `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l1 3h3l-2.5 2 1 3L8 7.5 5.5 9l1-3L4 4h3l1-3z"/>
              </svg>`;
    case 'birthday':
      return `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2C5.8 2 4 3.8 4 6c0 1.4.7 2.6 1.8 3.3-.1.2-.2.4-.2.7 0 .6.4 1 1 1h3c.6 0 1-.4 1-1 0-.2-.1-.5-.2-.7C11.3 8.6 12 7.4 12 6c0-2.2-1.8-4-4-4z"/>
              </svg>`;
    case 'seasonal':
      return `<svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 2l-1 1v3h2V3l-1-1zM5 6l-1 1 1 1h6l1-1-1-1H5z"/>
              </svg>`;
  }
}

function openEventModal(event: CalendarEvent) {
  modalEventName.textContent = event.name;
  modalEventSubtitle.textContent = formatEventType(event.type);
  modalEventDate.textContent = `${event.season} ${event.day}`;

  if (event.time) {
    modalEventTime.textContent = event.time;
    modalEventTimeContainer.style.display = 'flex';
  } else {
    modalEventTimeContainer.style.display = 'none';
  }

  if (event.location) {
    modalEventLocation.textContent = event.location;
    modalEventLocationContainer.style.display = 'flex';
  } else {
    modalEventLocationContainer.style.display = 'none';
  }

  modalEventType.textContent = formatEventType(event.type);
  modalEventDescription.textContent = event.description || 'No description available.';

  // Show "View Villager Details" button for birthday events
  if (event.type === 'birthday' && event.villagerRef) {
    villagerActionContainer.style.display = 'block';

    // Remove any existing click listeners
    const newBtn = viewVillagerBtn.cloneNode(true) as HTMLButtonElement;
    viewVillagerBtn.parentNode?.replaceChild(newBtn, viewVillagerBtn);

    // Add click handler to navigate to villagers page
    newBtn.addEventListener('click', () => {
      window.location.href = `villagers.html?villager=${event.villagerRef}`;
    });
  } else {
    villagerActionContainer.style.display = 'none';
  }

  eventModal.style.display = 'flex';
}

function formatEventType(type: EventType): string {
  switch (type) {
    case 'festival': return 'Festival';
    case 'birthday': return 'Birthday';
    case 'seasonal': return 'Seasonal Event';
  }
}

function closeModal() {
  eventModal.style.display = 'none';
}

function updateEventCount() {
  const seasonEvents = getEventsBySeason(currentSeason);
  let filteredCount = seasonEvents.length;

  if (currentEventType !== 'all') {
    filteredCount = seasonEvents.filter(e => e.type === currentEventType).length;
  }

  if (currentFilter) {
    const term = currentFilter.toLowerCase();
    filteredCount = seasonEvents.filter(event =>
      event.name.toLowerCase().includes(term) ||
      (event.description && event.description.toLowerCase().includes(term))
    ).length;
  }

  const totalEvents = getAllCalendarEvents().length;
  eventCountEl.textContent = `${filteredCount} events in ${currentSeason}`;
}

function updateSeasonInfo() {
  seasonInfoEl.textContent = currentSeason;
}

// Start the app
init();
