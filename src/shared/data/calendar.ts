import { CalendarEvent } from '../types';
import { VILLAGERS } from './villagers';

/**
 * All festivals and special events in Stardew Valley
 */
export const FESTIVALS: CalendarEvent[] = [
  // SPRING FESTIVALS
  {
    id: 'egg_festival',
    name: 'Egg Festival',
    type: 'festival',
    season: 'Spring',
    day: 13,
    time: '9:00 AM - 2:00 PM',
    location: 'Pelican Town Square',
    description: 'Annual egg hunt and spring celebration. Win the egg hunt, buy special items, and enjoy spring decorations.'
  },
  {
    id: 'desert_festival',
    name: 'Desert Festival',
    type: 'festival',
    season: 'Spring',
    day: 15,
    time: 'All Day (3 days)',
    location: 'Calico Desert',
    description: '3-day festival (days 15-17). Features unique shops, races, and desert-themed activities.'
  },
  {
    id: 'flower_dance',
    name: 'Flower Dance',
    type: 'festival',
    season: 'Spring',
    day: 24,
    time: '9:00 AM - 2:00 PM',
    location: 'Cindersap Forest (west of Marnie\'s Ranch)',
    description: 'Traditional spring dance. Dance with a partner (4+ hearts required) and enjoy the flowery decorations.'
  },

  // SUMMER FESTIVALS
  {
    id: 'luau',
    name: 'Luau',
    type: 'festival',
    season: 'Summer',
    day: 11,
    time: '9:00 AM - 2:00 PM',
    location: 'The Beach',
    description: 'Beach party with communal potluck soup. Contribute ingredients to impress Governor Lewis and gain friendship points.'
  },
  {
    id: 'trout_derby',
    name: 'Trout Derby',
    type: 'festival',
    season: 'Summer',
    day: 20,
    time: 'All Day (2 days)',
    location: 'Town River',
    description: '2-day fishing competition (days 20-21). Catch the most/largest fish to win prizes.'
  },
  {
    id: 'moonlight_jellies',
    name: 'Dance of the Moonlight Jellies',
    type: 'festival',
    season: 'Summer',
    day: 28,
    time: '10:00 PM - 12:00 AM',
    location: 'The Beach',
    description: 'Watch the magical moonlight jellies migrate through the bay. A peaceful evening event.'
  },

  // FALL FESTIVALS
  {
    id: 'valley_fair',
    name: 'Stardew Valley Fair',
    type: 'festival',
    season: 'Fall',
    day: 16,
    time: '9:00 AM - 3:00 PM',
    location: 'Pelican Town Square',
    description: 'Annual fair with games, competitions, and shopping. Display your best items and win Star Tokens.'
  },
  {
    id: 'spirits_eve',
    name: "Spirit's Eve",
    type: 'festival',
    season: 'Fall',
    day: 27,
    time: '10:00 PM - 11:50 PM',
    location: 'Pelican Town Square',
    description: 'Halloween festival with spooky maze, trick-or-treating, and special decorations. Find the Golden Pumpkin!'
  },

  // WINTER FESTIVALS
  {
    id: 'festival_of_ice',
    name: 'Festival of Ice',
    type: 'festival',
    season: 'Winter',
    day: 8,
    time: '10:00 AM - 2:00 PM',
    location: 'Cindersap Forest (south of farm)',
    description: 'Ice fishing competition and winter celebration. Catch the most fish to win prizes.'
  },
  {
    id: 'squidfest',
    name: 'SquidFest',
    type: 'festival',
    season: 'Winter',
    day: 12,
    time: 'All Day (2 days)',
    location: 'The Beach',
    description: '2-day squid fishing event (days 12-13). Special fishing competition for squid species.'
  },
  {
    id: 'night_market',
    name: 'Night Market',
    type: 'festival',
    season: 'Winter',
    day: 15,
    time: '5:00 PM - 2:00 AM',
    location: 'The Beach',
    description: '3-night festival (days 15-17). Features unique boats with rare items, mermaid show, and deep sea fishing.'
  },
  {
    id: 'winter_star',
    name: 'Feast of the Winter Star',
    type: 'festival',
    season: 'Winter',
    day: 25,
    time: '9:00 AM - 2:00 PM',
    location: 'Pelican Town Square',
    description: 'Secret gift exchange (Secret Santa). Give and receive gifts from townspeople. Winter celebration feast.'
  }
];

/**
 * Seasonal events (not festivals, but important dates)
 */
export const SEASONAL_EVENTS: CalendarEvent[] = [
  // SPRING
  {
    id: 'salmonberry_season',
    name: 'Salmonberry Season',
    type: 'seasonal',
    season: 'Spring',
    day: 15,
    description: 'Salmonberry bushes are harvestable (days 15-18). Forage throughout town for free food and energy.'
  },

  // SUMMER
  {
    id: 'beach_supply',
    name: 'Beach Supply Crates',
    type: 'seasonal',
    season: 'Summer',
    day: 12,
    description: 'Extra forageables wash up on the beach (days 12-14). Check the beach for gifts from the sea.'
  },

  // FALL
  {
    id: 'blackberry_season',
    name: 'Blackberry Season',
    type: 'seasonal',
    season: 'Fall',
    day: 8,
    description: 'Blackberry bushes are harvestable (days 8-11). Forage throughout town for free food and energy.'
  }
];

/**
 * Generate birthday events from villager data
 */
export function getBirthdayEvents(): CalendarEvent[] {
  return VILLAGERS.map(villager => ({
    id: `birthday_${villager.id}`,
    name: `${villager.name}'s Birthday`,
    type: 'birthday' as const,
    season: villager.birthday.season,
    day: villager.birthday.day,
    description: `Give ${villager.name} a gift for extra friendship points! (Birthday gifts are worth 8x normal friendship.)`
  }));
}

/**
 * Get all calendar events (festivals + seasonal + birthdays)
 */
export function getAllCalendarEvents(): CalendarEvent[] {
  return [...FESTIVALS, ...SEASONAL_EVENTS, ...getBirthdayEvents()];
}

/**
 * Get events for a specific season
 */
export function getEventsBySeason(season: 'Spring' | 'Summer' | 'Fall' | 'Winter'): CalendarEvent[] {
  return getAllCalendarEvents().filter(event => event.season === season);
}

/**
 * Get events for a specific day in a season
 */
export function getEventsForDay(season: 'Spring' | 'Summer' | 'Fall' | 'Winter', day: number): CalendarEvent[] {
  return getAllCalendarEvents().filter(event =>
    event.season === season && event.day === day
  );
}

/**
 * Get only festivals
 */
export function getFestivals(): CalendarEvent[] {
  return FESTIVALS;
}

/**
 * Get only birthdays
 */
export function getBirthdays(): CalendarEvent[] {
  return getBirthdayEvents();
}

/**
 * Get seasonal events (foraging periods, etc.)
 */
export function getSeasonalEvents(): CalendarEvent[] {
  return SEASONAL_EVENTS;
}

/**
 * Search events by name
 */
export function searchEvents(searchTerm: string): CalendarEvent[] {
  const term = searchTerm.toLowerCase();
  return getAllCalendarEvents().filter(event =>
    event.name.toLowerCase().includes(term) ||
    (event.description && event.description.toLowerCase().includes(term))
  );
}

/**
 * Get calendar statistics
 */
export function getCalendarStats() {
  const allEvents = getAllCalendarEvents();
  return {
    total: allEvents.length,
    festivals: FESTIVALS.length,
    birthdays: getBirthdayEvents().length,
    seasonal: SEASONAL_EVENTS.length,
    byseason: {
      spring: getEventsBySeason('Spring').length,
      summer: getEventsBySeason('Summer').length,
      fall: getEventsBySeason('Fall').length,
      winter: getEventsBySeason('Winter').length
    }
  };
}
