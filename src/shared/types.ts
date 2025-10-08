/**
 * Shared types used across main, renderer, and preload processes
 */

export interface AppInfo {
  name: string;
  version: string;
  platform: NodeJS.Platform;
}

export interface UpdateInfo {
  version: string;
  releaseDate: string;
  releaseNotes?: string;
}

export interface UpdateStatus {
  checking: boolean;
  available: boolean;
  downloading: boolean;
  progress?: number;
  error?: string;
}

export interface WindowConfig {
  width: number;
  height: number;
  minWidth?: number;
  minHeight?: number;
  resizable?: boolean;
  fullscreen?: boolean;
}

// IPC Channel names
export const IPC_CHANNELS = {
  // App info
  GET_APP_INFO: 'app:get-info',

  // Updates
  CHECK_FOR_UPDATES: 'update:check',
  UPDATE_AVAILABLE: 'update:available',
  UPDATE_NOT_AVAILABLE: 'update:not-available',
  UPDATE_ERROR: 'update:error',
  UPDATE_DOWNLOADING: 'update:downloading',
  UPDATE_DOWNLOADED: 'update:downloaded',
  INSTALL_UPDATE: 'update:install',

  // Window controls
  MINIMIZE_WINDOW: 'window:minimize',
  MAXIMIZE_WINDOW: 'window:maximize',
  CLOSE_WINDOW: 'window:close',

  // Notes
  GET_NOTES: 'notes:get-all',
  SAVE_NOTE: 'notes:save',
  UPDATE_NOTE: 'notes:update',
  DELETE_NOTE: 'notes:delete',

  // Daily Tasks
  GET_TASKS: 'tasks:get-all',
  SAVE_TASK: 'tasks:save',
  UPDATE_TASK: 'tasks:update',
  DELETE_TASK: 'tasks:delete',
  TOGGLE_TASK: 'tasks:toggle',
  REORDER_TASKS: 'tasks:reorder',
  RESET_TASKS: 'tasks:reset',
} as const;

export type IPCChannel = typeof IPC_CHANNELS[keyof typeof IPC_CHANNELS];

// Stardew Valley Game Data Types

/**
 * Gift preference levels in Stardew Valley
 */
export type GiftPreference = 'love' | 'like' | 'neutral' | 'dislike' | 'hate';

/**
 * Villager gender
 */
export type VillagerGender = 'male' | 'female';

/**
 * Season in Stardew Valley
 */
export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

/**
 * Birthday information
 */
export interface Birthday {
  season: Season;
  day: number;
}

/**
 * Gift item with preference level
 */
export interface Gift {
  name: string;
  preference: GiftPreference;
}

/**
 * Detailed schedule entry supporting hour-by-hour locations with variations
 */
export interface ScheduleInfo {
  general?: string;  // Keep for backward compatibility - general description

  // Default schedule (most common pattern) - hour-by-hour locations
  default?: Record<string, string>;  // e.g., { '6:00 AM': 'Bedroom', '8:00 AM': 'Kitchen' }

  // Day-specific variations
  monday?: Record<string, string>;
  tuesday?: Record<string, string>;
  wednesday?: Record<string, string>;
  thursday?: Record<string, string>;
  friday?: Record<string, string>;
  saturday?: Record<string, string>;
  sunday?: Record<string, string>;

  // Season-specific schedules
  spring?: Record<string, string>;
  summer?: Record<string, string>;
  fall?: Record<string, string>;
  winter?: Record<string, string>;

  // Weather variations
  rainy?: Record<string, string>;

  // Special notes
  notes?: string;
}

/**
 * Villager information
 */
export interface Villager {
  id: string;
  name: string;
  gender: VillagerGender;
  birthday: Birthday;
  description: string;
  marriageable: boolean;
  location: string;          // Home location or primary area
  lovedGifts: string[];
  likedGifts?: string[];
  neutralGifts?: string[];
  dislikedGifts?: string[];
  hatedGifts: string[];
  schedule?: ScheduleInfo;   // Simplified daily schedule
  portraitUrl?: string;
}

/**
 * Villager filter options
 */
export interface VillagerFilter {
  gender?: VillagerGender;
  marriageable?: boolean;
  searchTerm?: string;
}

// Shop Data Types

/**
 * Days of the week
 */
export type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

/**
 * Shop item category
 */
export type ShopItemCategory = 'seeds' | 'saplings' | 'fertilizer' | 'animal' | 'tool' | 'upgrade' | 'food' | 'ingredient' | 'fish' | 'bait' | 'furniture' | 'recipe' | 'other';

/**
 * Shop item availability
 */
export interface ItemAvailability {
  seasons?: Season[];      // Available only in certain seasons
  year?: number;           // Available starting from year X
  condition?: string;      // Special unlock condition
}

/**
 * Shop item
 */
export interface ShopItem {
  id: string;
  name: string;
  price: number;
  category: ShopItemCategory;
  availability?: ItemAvailability;
  description?: string;
}

/**
 * Shop operating hours
 */
export interface ShopHours {
  openTime: string;        // e.g., "9:00 AM"
  closeTime: string;       // e.g., "5:00 PM"
  closedDays: DayOfWeek[]; // Days the shop is closed
  specialNotes?: string;   // Special hours/conditions
}

/**
 * Shop information
 */
export interface Shop {
  id: string;
  name: string;
  owner: string;
  location: string;
  hours: ShopHours;
  items: ShopItem[];
  description?: string;
}

/**
 * Shop filter options
 */
export interface ShopFilter {
  searchTerm?: string;
  isOpen?: boolean;        // Filter by currently open (requires current day/time)
  hasItem?: string;        // Filter by shops that sell a specific item
}

// Calendar Data Types

/**
 * Event type
 */
export type EventType = 'festival' | 'birthday' | 'seasonal';

/**
 * Calendar event
 */
export interface CalendarEvent {
  id: string;
  name: string;
  type: EventType;
  season: Season;
  day: number;
  time?: string;           // e.g., "10:00 AM - 2:00 PM"
  location?: string;
  description?: string;
  year?: number;           // For events that only happen in certain years
}

/**
 * Calendar filter options
 */
export interface CalendarFilter {
  season?: Season;
  type?: EventType;
  searchTerm?: string;
}

// Crafting Data Types

/**
 * Crafting category
 */
export type CraftingCategory = 'bombs' | 'fences' | 'sprinklers' | 'artisan' | 'fertilizer' | 'refining' | 'equipment' | 'consumables' | 'furniture' | 'lighting' | 'fishing' | 'rings' | 'flooring' | 'other';

/**
 * Unlock method for crafting recipes
 */
export type UnlockMethod = 'starter' | 'skill' | 'friendship' | 'purchase' | 'special_order' | 'achievement' | 'mail' | 'quest';

/**
 * Material requirement for crafting
 */
export interface MaterialRequirement {
  itemId: string;
  itemName: string;
  quantity: number;
}

/**
 * Crafting recipe unlock information
 */
export interface UnlockInfo {
  method: UnlockMethod;
  condition?: string;      // e.g., "Farming Level 2", "Krobus Shop", "Robin 3 hearts"
  details?: string;        // Additional unlock details
}

/**
 * Crafting recipe
 */
export interface CraftingRecipe {
  id: string;
  name: string;
  category: CraftingCategory;
  description: string;
  materials: MaterialRequirement[];
  unlock: UnlockInfo;
  craftingStation?: string;  // e.g., "Furnace", "none" for hand-crafted
  output?: number;           // How many items produced (default 1)
}

/**
 * Material source type
 */
export type MaterialSourceType = 'forage' | 'shop' | 'crafted' | 'mining' | 'fishing' | 'farming' | 'monster' | 'artisan' | 'refining' | 'other';

/**
 * Location where material can be found
 */
export interface MaterialLocation {
  area: string;            // e.g., "Cindersap Forest", "The Mines (levels 1-40)"
  season?: Season[];       // For forage items
  condition?: string;      // Special conditions
}

/**
 * Shop selling a material
 */
export interface MaterialShop {
  shopId: string;
  shopName: string;
  price: number;
  availability?: {
    seasons?: Season[];
    year?: number;
    condition?: string;
  };
}

/**
 * Material/item source information
 */
export interface MaterialSource {
  id: string;
  name: string;
  type: MaterialSourceType[];  // Can have multiple source types
  description?: string;

  // Forage information
  forageLocations?: MaterialLocation[];

  // Shop information
  shops?: MaterialShop[];

  // Crafting information
  craftedFrom?: string;    // Recipe ID if this is craftable

  // Mining information
  miningLocations?: string[];  // e.g., "The Mines (40-80)", "Skull Cavern"

  // Fishing information
  fishingLocations?: MaterialLocation[];

  // Farming information
  farmingInfo?: string;    // How to farm/grow this item

  // Monster drops
  monsterDrops?: string[]; // Which monsters drop this

  // Used in recipes
  usedInRecipes?: string[]; // Recipe IDs that use this material
}

/**
 * Crafting filter options
 */
export interface CraftingFilter {
  category?: CraftingCategory;
  unlockMethod?: UnlockMethod;
  searchTerm?: string;
  materialId?: string;     // Filter by recipes that use this material
}

// Notes and Tasks Data Types

/**
 * User note
 */
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: number;       // Timestamp
  updatedAt: number;       // Timestamp
}

/**
 * Daily task item
 */
export interface DailyTask {
  id: string;
  content: string;
  completed: boolean;
  order: number;           // For ordering tasks
  createdAt: number;       // Timestamp
}

// Items Database Types

/**
 * Item category
 */
export type ItemCategory = 'forage' | 'fish' | 'minerals' | 'artifacts' | 'cooking' |
  'artisan' | 'resources' | 'crops' | 'seeds' | 'animal-products' |
  'equipment' | 'weapons' | 'boots' | 'rings' | 'bait' | 'fertilizer' | 'geodes' | 'other';

/**
 * Weapon type
 */
export type WeaponType = 'sword' | 'dagger' | 'club' | 'slingshot';

/**
 * Weapon stats
 */
export interface WeaponStats {
  type: WeaponType;
  damage: string | number;  // Min-max damage (e.g., "15-25") or number for fixed damage
  critChance?: number;      // Critical hit chance (0-1)
  critMultiplier?: number;  // Critical damage multiplier
  speed?: number;           // Attack speed
  defense?: number;         // Defense bonus
  weight?: number;          // Weight (affects knockback)
  precision?: number;       // Precision bonus
  special?: string;         // Special ability description
}

/**
 * Boot stats
 */
export interface BootStats {
  defense: number;          // Defense bonus
  immunity: number;         // Immunity bonus
}

/**
 * Ring effects
 */
export interface RingEffects {
  effect: string;           // Description of ring effect
  stackable?: boolean;      // Whether effect stacks with duplicate ring
}

/**
 * Item rarity level
 */
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'legendary';

/**
 * Location where item can be found
 */
export interface ItemLocation {
  area: string;              // e.g., "Cindersap Forest", "The Mines (1-40)"
  season?: Season[];         // For seasonal items
  weather?: 'any' | 'sunny' | 'rainy';
  timeOfDay?: string;        // e.g., "6am-2am"
  condition?: string;        // Special conditions
}

/**
 * Monster drop information
 */
export interface MonsterDrop {
  monsterName: string;
  dropRate: string;          // e.g., "50%", "Common", "Rare"
  floors?: string;           // e.g., "1-29" for mine floors
}

/**
 * Shop source for purchasing items
 */
export interface ItemShopSource {
  shopName: string;
  price: number;
  availability?: {
    seasons?: Season[];
    year?: number;
    condition?: string;
  };
}

/**
 * Gift preference information
 */
export interface GiftInfo {
  lovedBy?: string[];        // Villager names who love this item
  likedBy?: string[];        // Villager names who like this item
}

/**
 * Complete item information
 */
export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  description: string;
  sellPrice: number;
  edibility?: number;        // HP/Energy restored (-1 for inedible)

  // Source information
  forageLocations?: ItemLocation[];
  fishingLocations?: ItemLocation[];
  miningLocations?: string[];     // e.g., "The Mines (1-40)", "Geodes"
  monsterDrops?: MonsterDrop[];
  shops?: ItemShopSource[];
  farmingInfo?: string;           // How to grow/obtain
  craftingRecipe?: string;        // Recipe ID if craftable
  artisanSource?: string;         // e.g., "Keg + Wheat"

  // Usage
  usedInRecipes?: string[];       // Recipe IDs
  usedInBundles?: string[];       // Bundle names
  giftInfo?: GiftInfo;

  // Additional info
  rarity?: ItemRarity;
  stackSize?: number;             // Max stack (default 999)
  quality?: boolean;              // Can have quality stars?

  // Equipment-specific stats
  weaponStats?: WeaponStats;      // For weapons
  bootStats?: BootStats;          // For boots
  ringEffects?: RingEffects;      // For rings

  // Geode contents
  geodeContents?: string[];       // What minerals can be found inside (for geodes)
}

/**
 * Item filter options
 */
export interface ItemFilter {
  category?: ItemCategory;
  season?: Season;
  searchTerm?: string;
  source?: string;              // Filter by source type
}

// Crop Profit Calculator Types

/**
 * Crop type category
 */
export type CropType = 'vegetable' | 'fruit' | 'flower' | 'forage';

/**
 * Farming profession
 */
export type FarmingProfession = 'none' | 'tiller' | 'agriculturist' | 'both';

/**
 * Artisan processing profession
 */
export type ArtisanProfession = 'none' | 'artisan';

/**
 * Processing type for crops
 */
export type ProcessingType = 'none' | 'keg' | 'preserves-jar';

/**
 * Crop quality level
 */
export type CropQuality = 'normal' | 'silver' | 'gold' | 'iridium';

/**
 * Crop data structure
 */
export interface Crop {
  id: string;
  name: string;
  type: CropType;
  seasons: Season[];
  seedPrice: number;
  sellPrice: number;        // Base sell price
  daysToMaturity: number;
  regrowthDays?: number;    // For multi-harvest crops
  extraYieldChance?: number; // e.g., 0.25 for 25% chance of extra crop
  giantCropPossible?: boolean;
  seedVendor: string;       // Where to buy seeds

  // Processing information
  kegProduct?: {
    name: string;           // e.g., "Wine", "Pale Ale", "Beer"
    sellPrice: number;      // Processed sell price
    processingTime: number; // In days
  };
  preservesJarProduct?: {
    name: string;           // e.g., "Pickles", "Jelly"
    sellPrice: number;      // Processed sell price (Base Price × 2 + 50)
    processingTime: number; // Usually 4000 minutes (~2.67 days)
  };
}

/**
 * Crop calculation result
 */
export interface CropCalculation {
  crop: Crop;
  maxHarvests: number;
  totalRevenue: number;
  totalCost: number;
  netProfit: number;
  profitPerDay: number;
  roi: number;              // Return on investment percentage
  canPlant: boolean;        // Whether it can still be planted this season

  // Processing results (if applicable)
  processedRevenue?: number;
  processedProfit?: number;
  processedProfitPerDay?: number;
  processedRoi?: number;
  processingDays?: number;  // Total days including processing time
}

/**
 * Calculator input parameters
 */
export interface CalculatorParams {
  season: Season;
  currentDay: number;       // 1-28
  farmingLevel: number;     // 0-10
  profession: FarmingProfession;
  quality: CropQuality;
  processingType: ProcessingType;
  artisanProfession: ArtisanProfession;
  budget?: number;          // Optional budget constraint
}
