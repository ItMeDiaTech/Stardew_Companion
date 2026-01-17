import { FishingRod, Bait, Tackle, FishingProfession } from '../types';

/**
 * Stardew Valley Fishing Equipment Database
 * Complete data for rods, bait, tackle, and professions
 * Data sourced from Stardew Valley Wiki (v1.6)
 */

// ==================== FISHING RODS ====================
export const FISHING_RODS: FishingRod[] = [
  {
    id: 'training_rod',
    name: 'Training Rod',
    description: 'A simple rod perfect for beginners. Can only catch common fish.',
    cost: 25,
    requirement: 'None',
    canUseBait: false,
    canUseTackle: false,
    notes: 'Sets fishing skill to 5 for catch calculations. Only catches fish with difficulty 50 or less.'
  },
  {
    id: 'bamboo_pole',
    name: 'Bamboo Pole',
    description: 'The starter rod given by Willy. Cannot use bait or tackle.',
    cost: 'Free',
    requirement: 'Given by Willy on first beach visit',
    canUseBait: false,
    canUseTackle: false,
    notes: 'Your starting fishing rod. Upgrade to Fiberglass as soon as possible.'
  },
  {
    id: 'fiberglass_rod',
    name: 'Fiberglass Rod',
    description: 'A step up from bamboo. Can use bait to reduce bite time.',
    cost: 1800,
    requirement: 'Fishing Level 2',
    canUseBait: true,
    canUseTackle: false,
    notes: 'Bait reduces time between bites by 50%. Great mid-game rod.'
  },
  {
    id: 'iridium_rod',
    name: 'Iridium Rod',
    description: 'The best standard fishing rod. Can use both bait and tackle.',
    cost: 7500,
    requirement: 'Fishing Level 6',
    canUseBait: true,
    canUseTackle: true,
    tackleSlots: 1,
    notes: 'Recommended for catching difficult fish. Tackle provides major advantages.'
  },
  {
    id: 'advanced_iridium_rod',
    name: 'Advanced Iridium Rod',
    description: 'The ultimate fishing rod with two tackle slots.',
    cost: 'Special',
    requirement: 'Fishing Mastery (Level 10 + 10,000 Mastery XP)',
    canUseBait: true,
    canUseTackle: true,
    tackleSlots: 2,
    notes: 'Allows two different tackles simultaneously. Combine Cork Bobber + Trap Bobber for best results.'
  }
];

// ==================== BAIT ====================
export const BAITS: Bait[] = [
  {
    id: 'bait',
    name: 'Bait',
    description: 'Causes fish to bite faster.',
    effect: 'Reduces bite time by 50%',
    biteTimeReduction: '-50%',
    craftingRecipe: '1 Bug Meat',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 5
  },
  {
    id: 'wild_bait',
    name: 'Wild Bait',
    description: 'A unique recipe from Linus. Chance to catch two fish at once.',
    effect: 'Reduces bite time by 62.5%. Chance to catch double fish.',
    biteTimeReduction: '-62.5%',
    craftingRecipe: '10 Fiber, 5 Bug Meat, 5 Slime (Linus 4 hearts)',
    purchaseLocation: 'N/A - Craft only'
  },
  {
    id: 'magnet',
    name: 'Magnet',
    description: 'Increases chance of finding treasure.',
    effect: '+15% treasure chest chance. Reduces bite time by 50%.',
    biteTimeReduction: '-50%',
    craftingRecipe: '1 Iron Bar',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 1000
  },
  {
    id: 'magic_bait',
    name: 'Magic Bait',
    description: 'Allows you to catch fish from any season, time, or weather.',
    effect: 'Ignores season, time, and weather restrictions. -50% bite time.',
    biteTimeReduction: '-50%',
    craftingRecipe: '1 Bug Meat, 1 Radioactive Ore',
    purchaseLocation: 'Qi\'s Walnut Room',
    purchasePrice: 5
  },
  {
    id: 'deluxe_bait',
    name: 'Deluxe Bait',
    description: 'The most effective bait for reducing wait time.',
    effect: 'Reduces bite time by 67%. Slightly increases catch bar size.',
    biteTimeReduction: '-67%',
    craftingRecipe: '1 Bug Meat, 1 Moss',
    purchaseLocation: 'N/A - Craft only'
  },
  {
    id: 'challenge_bait',
    name: 'Challenge Bait',
    description: 'Makes fishing harder but rewards more XP.',
    effect: 'Reduces catch bar size. Increases XP gained from catches.',
    biteTimeReduction: '-62.5%',
    craftingRecipe: '1 Bug Meat, 1 Moss, 1 Qi Seasoning',
    purchaseLocation: 'Qi\'s Walnut Room',
    purchasePrice: 5
  },
  {
    id: 'targeted_bait',
    name: 'Targeted Bait',
    description: 'Increases chance of catching a specific fish type.',
    effect: 'Significantly increases chance to hook the targeted fish.',
    biteTimeReduction: '-50%',
    craftingRecipe: 'Varies by fish type',
    purchaseLocation: 'N/A - Craft only'
  }
];

// ==================== TACKLE ====================
export const TACKLES: Tackle[] = [
  {
    id: 'spinner',
    name: 'Spinner',
    description: 'The shape makes it spin when water passes through.',
    effect: 'Decreases maximum bite time by 3.75 seconds.',
    bestFor: 'General fishing - faster bites',
    craftingRecipe: '2 Iron Bar',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 500,
    durability: 20
  },
  {
    id: 'dressed_spinner',
    name: 'Dressed Spinner',
    description: 'Metal blade with colorful streamers.',
    effect: 'Decreases maximum bite time by 7.5 seconds.',
    bestFor: 'Faster bites than regular Spinner',
    craftingRecipe: '2 Iron Bar, 1 Cloth',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 1000,
    durability: 20
  },
  {
    id: 'trap_bobber',
    name: 'Trap Bobber',
    description: 'Causes fish to escape slower when not reeling in.',
    effect: 'Fish escape rate reduced by 66%.',
    bestFor: 'Difficult fish and legendaries - HIGHLY RECOMMENDED',
    craftingRecipe: '1 Copper Bar, 10 Sap',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 500,
    durability: 20
  },
  {
    id: 'cork_bobber',
    name: 'Cork Bobber',
    description: 'Slightly increases the size of your fishing bar.',
    effect: 'Increases catch bar size by 24 pixels.',
    bestFor: 'Moderate difficulty fish, beginners',
    craftingRecipe: '10 Wood, 5 Hardwood, 10 Slime',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 750,
    durability: 20
  },
  {
    id: 'lead_bobber',
    name: 'Lead Bobber',
    description: 'Prevents your fishing bar from bouncing off the bottom.',
    effect: 'Catch bar stops at bottom instead of bouncing.',
    bestFor: 'Sinker behavior fish (Stonefish, Sea Cucumber)',
    craftingRecipe: '1 Lead Bar (from Omni Geode)',
    purchaseLocation: 'N/A - Craft only',
    durability: 20
  },
  {
    id: 'treasure_hunter',
    name: 'Treasure Hunter',
    description: 'Fish don\'t escape while reeling in treasure.',
    effect: '+5% treasure chance. Fish don\'t escape during treasure minigame.',
    bestFor: 'Treasure hunting, Pirate profession',
    craftingRecipe: '2 Gold Bar',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 750,
    durability: 20
  },
  {
    id: 'barbed_hook',
    name: 'Barbed Hook',
    description: 'Makes your catch bar "stick" to the fish.',
    effect: 'Catch bar clings to fish. Works best with slower fish.',
    bestFor: 'Smooth and Sinker behavior fish',
    craftingRecipe: '1 Copper Bar, 1 Iron Bar, 1 Gold Bar',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 1000,
    durability: 20
  },
  {
    id: 'curiosity_lure',
    name: 'Curiosity Lure',
    description: 'Increases chance to catch rare fish.',
    effect: 'Doubles base chance for rare/difficult fish.',
    bestFor: 'Catching rare fish, legendary attempts',
    craftingRecipe: '5 Copper Bar, 5 Gold Bar, 5 Iridium Bar',
    purchaseLocation: 'N/A - Craft only',
    durability: 20
  },
  {
    id: 'quality_bobber',
    name: 'Quality Bobber',
    description: 'Increases the quality of fish caught.',
    effect: 'Increases fish quality by 1 level (normal→silver, silver→gold, etc.)',
    bestFor: 'Maximizing fish value, iridium quality fish',
    craftingRecipe: '1 Copper Bar, 20 Sap, 5 Solar Essence',
    purchaseLocation: 'Willy\'s Fish Shop',
    purchasePrice: 750,
    durability: 20
  },
  {
    id: 'sonar_bobber',
    name: 'Sonar Bobber',
    description: 'Shows what type of fish is on the line before catching.',
    effect: 'Displays fish type and difficulty before catch attempt.',
    bestFor: 'Targeting specific fish, avoiding trash',
    craftingRecipe: '5 Wood, 5 Coal',
    purchaseLocation: 'Willy\'s Fish Shop (Year 2+)',
    purchasePrice: 500,
    durability: 20
  }
];

// ==================== FISHING PROFESSIONS ====================
export const FISHING_PROFESSIONS: FishingProfession[] = [
  // Level 5 Professions
  {
    id: 'fisher',
    name: 'Fisher',
    level: 5,
    description: 'Fish worth 25% more.',
    effect: '+25% fish sell price'
  },
  {
    id: 'trapper',
    name: 'Trapper',
    level: 5,
    description: 'Resources required to craft crab pots reduced.',
    effect: 'Crab pots only require 25 Wood and 2 Copper Bars'
  },
  // Level 10 Professions (Fisher path)
  {
    id: 'angler',
    name: 'Angler',
    level: 10,
    description: 'Fish worth 50% more.',
    effect: '+50% fish sell price (stacks with Fisher for +75% total)',
    prerequisite: 'Fisher'
  },
  {
    id: 'pirate',
    name: 'Pirate',
    level: 10,
    description: 'Chance to find treasure doubled.',
    effect: '+15% base treasure chance (30% total with good luck)',
    prerequisite: 'Fisher'
  },
  // Level 10 Professions (Trapper path)
  {
    id: 'mariner',
    name: 'Mariner',
    level: 10,
    description: 'Crab pots no longer produce junk items.',
    effect: 'No trash, only fish/shells from crab pots',
    prerequisite: 'Trapper'
  },
  {
    id: 'luremaster',
    name: 'Luremaster',
    level: 10,
    description: 'Crab pots no longer require bait.',
    effect: 'Crab pots work without bait',
    prerequisite: 'Trapper'
  }
];

// ==================== FISHING TIPS ====================
export const FISHING_TIPS = [
  {
    category: 'Basics',
    tips: [
      'Hold the action button to charge your cast - further casts catch better fish.',
      'The green bar is your "catch bar" - keep the fish icon inside it to catch the fish.',
      'Tap the action button rapidly for precise control, or hold for faster movement.',
      'Practice on Carp in the Mountain Lake - they have the lowest difficulty (15).'
    ]
  },
  {
    category: 'Difficult Fish',
    tips: [
      'Always use Trap Bobber for fish with difficulty 75+ and all legendary fish.',
      'Dart behavior fish move unpredictably - stay centered and react quickly.',
      'Sinker fish fall fast but rise slow - Lead Bobber helps here.',
      'Floater fish rise fast but fall slow - anticipate their upward movement.'
    ]
  },
  {
    category: 'Legendary Fish',
    tips: [
      'Each legendary can only be caught once per save file.',
      'Legend (Spring, Rain, Level 10) is the hardest - save it for last.',
      'Mutant Carp is the easiest legendary - available any season in the Sewers.',
      'Use Trap Bobber + Dish o\' the Sea food buff for best results.',
      'Fish appear with a crown icon in the minigame when legendary.'
    ]
  },
  {
    category: 'Maximizing Profit',
    tips: [
      'Fisher + Angler professions give +75% fish sell price.',
      'Use Quality Bobber to increase fish quality and value.',
      'Sturgeon in Fish Ponds produce valuable Caviar.',
      'Lava Eels in Fish Ponds produce Roe worth 350g+ each.',
      'Aged Roe in Preserves Jar doubles the value.'
    ]
  },
  {
    category: 'Finding Fish',
    tips: [
      'Bubbles in water mean 4x faster bites and better quality.',
      'Check the TV weather forecast to plan for rain-only fish.',
      'Magic Bait ignores all season/time/weather restrictions.',
      'Sonar Bobber shows what you\'re catching before you commit.',
      'Fish Frenzies make one fish type appear constantly for 2+ hours.'
    ]
  },
  {
    category: 'Skill Leveling',
    tips: [
      'Perfect catches (fish never leaves bar) give 2.4x XP.',
      'Treasure chests add 2.2x XP multiplier.',
      'Legendary fish give 5x XP - even at high levels!',
      'Challenge Bait increases XP but makes catching harder.',
      'Crab Pots give 5 XP per item - set up lots for passive XP.'
    ]
  }
];

// Helper Functions

/**
 * Get all fishing rods
 */
export function getAllRods(): FishingRod[] {
  return FISHING_RODS;
}

/**
 * Get all bait types
 */
export function getAllBaits(): Bait[] {
  return BAITS;
}

/**
 * Get all tackle types
 */
export function getAllTackles(): Tackle[] {
  return TACKLES;
}

/**
 * Get all fishing professions
 */
export function getAllProfessions(): FishingProfession[] {
  return FISHING_PROFESSIONS;
}

/**
 * Get professions by level
 */
export function getProfessionsByLevel(level: 5 | 10): FishingProfession[] {
  return FISHING_PROFESSIONS.filter(p => p.level === level);
}

/**
 * Get level 10 professions for a level 5 prerequisite
 */
export function getLevel10Professions(prerequisite: string): FishingProfession[] {
  return FISHING_PROFESSIONS.filter(p => p.prerequisite === prerequisite);
}

/**
 * Get all fishing tips
 */
export function getAllTips(): typeof FISHING_TIPS {
  return FISHING_TIPS;
}

/**
 * Get tips by category
 */
export function getTipsByCategory(category: string): string[] {
  const found = FISHING_TIPS.find(t => t.category === category);
  return found ? found.tips : [];
}
