import { Fish, FishBehavior, FishLocationType, Season } from '../types';

/**
 * Comprehensive Stardew Valley Fish Database
 * 67 fish with complete location, difficulty, and behavior data
 * Data sourced from Stardew Valley Wiki (v1.6)
 */

export const FISH: Fish[] = [
  // ==================== OCEAN FISH ====================
  {
    id: 'anchovy',
    name: 'Anchovy',
    description: 'A small silver fish found in the ocean.',
    sellPrice: 30,
    edibility: 10,
    difficulty: 30,
    behavior: 'dart',
    minSize: 1,
    maxSize: 5,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Spring', 'Fall'], timeOfDay: '6am-2am', weather: 'any' }
    ],
    usedInBundles: ['Ocean Fish Bundle']
  },
  {
    id: 'sardine',
    name: 'Sardine',
    description: 'A common ocean fish.',
    sellPrice: 40,
    edibility: 13,
    difficulty: 30,
    behavior: 'dart',
    minSize: 1,
    maxSize: 4,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Spring', 'Fall', 'Winter'], timeOfDay: '6am-7pm', weather: 'any' }
    ],
    usedInBundles: ['Ocean Fish Bundle']
  },
  {
    id: 'herring',
    name: 'Herring',
    description: 'A common ocean fish.',
    sellPrice: 30,
    edibility: 10,
    difficulty: 25,
    behavior: 'dart',
    minSize: 2,
    maxSize: 8,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Spring', 'Winter'], timeOfDay: '6am-2am', weather: 'any' }
    ]
  },
  {
    id: 'tuna',
    name: 'Tuna',
    description: 'A large fish that lives in the ocean.',
    sellPrice: 100,
    edibility: 15,
    difficulty: 70,
    behavior: 'smooth',
    minSize: 12,
    maxSize: 61,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer', 'Winter'], timeOfDay: '6am-7pm', weather: 'any' },
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '6am-7pm', weather: 'any' }
    ],
    usedInBundles: ['Ocean Fish Bundle'],
    usedInRecipes: ['Sashimi', 'Maki Roll', 'Fish Taco']
  },
  {
    id: 'red_snapper',
    name: 'Red Snapper',
    description: 'A popular fish with a nice red color.',
    sellPrice: 50,
    edibility: 15,
    difficulty: 40,
    behavior: 'mixed',
    minSize: 3,
    maxSize: 28,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer', 'Fall'], timeOfDay: '6am-7pm', weather: 'rainy' },
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '6am-7pm', weather: 'rainy' }
    ],
    usedInBundles: ['Ocean Fish Bundle']
  },
  {
    id: 'red_mullet',
    name: 'Red Mullet',
    description: 'Long ago these were kept as pets.',
    sellPrice: 75,
    edibility: 15,
    difficulty: 55,
    behavior: 'smooth',
    minSize: 3,
    maxSize: 16,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer', 'Winter'], timeOfDay: '6am-7pm', weather: 'any' }
    ]
  },
  {
    id: 'halibut',
    name: 'Halibut',
    description: 'A flat fish that lives on the ocean floor.',
    sellPrice: 80,
    edibility: 18,
    difficulty: 50,
    behavior: 'sinker',
    minSize: 10,
    maxSize: 52,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Spring', 'Summer', 'Winter'], timeOfDay: '6am-11am, 7pm-2am', weather: 'any' }
    ]
  },
  {
    id: 'flounder',
    name: 'Flounder',
    description: 'A flat fish that lives on the ocean floor.',
    sellPrice: 100,
    edibility: 18,
    difficulty: 50,
    behavior: 'sinker',
    minSize: 5,
    maxSize: 25,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Spring', 'Summer'], timeOfDay: '6am-8pm', weather: 'any' },
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '6am-8pm', weather: 'any' }
    ]
  },
  {
    id: 'eel',
    name: 'Eel',
    description: 'A long, slippery fish.',
    sellPrice: 85,
    edibility: 18,
    difficulty: 70,
    behavior: 'smooth',
    minSize: 12,
    maxSize: 52,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Spring', 'Fall'], timeOfDay: '4pm-2am', weather: 'rainy' }
    ],
    usedInRecipes: ['Fried Eel', 'Spicy Eel']
  },
  {
    id: 'octopus',
    name: 'Octopus',
    description: 'A mysterious and intelligent creature.',
    sellPrice: 150,
    edibility: 18,
    difficulty: 95,
    behavior: 'sinker',
    minSize: 3,
    maxSize: 13,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer'], timeOfDay: '6am-1pm', weather: 'any' },
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '6am-1pm', weather: 'any' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'squid',
    name: 'Squid',
    description: 'A deep sea creature that can grow to enormous size.',
    sellPrice: 80,
    edibility: 18,
    difficulty: 75,
    behavior: 'sinker',
    minSize: 6,
    maxSize: 24,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Winter'], timeOfDay: '6pm-2am', weather: 'any' }
    ],
    usedInRecipes: ['Fried Calamari']
  },
  {
    id: 'sea_cucumber',
    name: 'Sea Cucumber',
    description: 'A slippery, slimy creature found on the ocean floor.',
    sellPrice: 75,
    edibility: -50,
    difficulty: 40,
    behavior: 'sinker',
    minSize: 3,
    maxSize: 16,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Fall', 'Winter'], timeOfDay: '6am-7pm', weather: 'any' }
    ],
    usedInBundles: ['Night Fishing Bundle']
  },
  {
    id: 'super_cucumber',
    name: 'Super Cucumber',
    description: 'A rare, purple variety of sea cucumber.',
    sellPrice: 250,
    edibility: -25,
    difficulty: 80,
    behavior: 'sinker',
    minSize: 6,
    maxSize: 24,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer', 'Fall'], timeOfDay: '6pm-2am', weather: 'any' },
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '6pm-2am', weather: 'any' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'pufferfish',
    name: 'Pufferfish',
    description: 'Inflates when threatened.',
    sellPrice: 200,
    edibility: -40,
    difficulty: 80,
    behavior: 'floater',
    minSize: 3,
    maxSize: 13,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer'], timeOfDay: '12pm-4pm', weather: 'sunny' },
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '12pm-4pm', weather: 'sunny' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'albacore',
    name: 'Albacore',
    description: 'Prefers temperature of water to climate.',
    sellPrice: 75,
    edibility: 18,
    difficulty: 60,
    behavior: 'mixed',
    minSize: 10,
    maxSize: 41,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Fall', 'Winter'], timeOfDay: '6am-11am, 6pm-2am', weather: 'any' }
    ]
  },
  {
    id: 'tilapia',
    name: 'Tilapia',
    description: 'A primarily freshwater fish but can also be found in the ocean.',
    sellPrice: 75,
    edibility: 18,
    difficulty: 50,
    behavior: 'mixed',
    minSize: 4,
    maxSize: 15,
    locations: [
      { area: 'Ocean', locationType: 'ocean', seasons: ['Summer', 'Fall'], timeOfDay: '6am-2pm', weather: 'any' },
      { area: 'Ginger Island River', locationType: 'island', seasons: 'all', timeOfDay: '6am-2pm', weather: 'any' }
    ]
  },

  // ==================== RIVER FISH ====================
  {
    id: 'smallmouth_bass',
    name: 'Smallmouth Bass',
    description: 'A freshwater fish found in rivers.',
    sellPrice: 50,
    edibility: 15,
    difficulty: 28,
    behavior: 'mixed',
    minSize: 7,
    maxSize: 26,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Spring', 'Fall'], timeOfDay: '6am-2am', weather: 'any' }
    ]
  },
  {
    id: 'largemouth_bass',
    name: 'Largemouth Bass',
    description: 'A popular fish among sportsmen.',
    sellPrice: 100,
    edibility: 15,
    difficulty: 50,
    behavior: 'mixed',
    minSize: 9,
    maxSize: 38,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: 'all', timeOfDay: '6am-7pm', weather: 'any' }
    ],
    usedInBundles: ['Lake Fish Bundle']
  },
  {
    id: 'rainbow_trout',
    name: 'Rainbow Trout',
    description: 'A freshwater fish with colorful markings.',
    sellPrice: 65,
    edibility: 18,
    difficulty: 45,
    behavior: 'mixed',
    minSize: 6,
    maxSize: 26,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Summer'], timeOfDay: '6am-7pm', weather: 'sunny' },
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Summer'], timeOfDay: '6am-7pm', weather: 'sunny' }
    ]
  },
  {
    id: 'salmon',
    name: 'Salmon',
    description: 'Swims upstream to lay its eggs.',
    sellPrice: 75,
    edibility: 18,
    difficulty: 50,
    behavior: 'mixed',
    minSize: 16,
    maxSize: 59,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Fall'], timeOfDay: '6am-7pm', weather: 'any' }
    ],
    usedInRecipes: ['Salmon Dinner'],
    usedInBundles: ['River Fish Bundle']
  },
  {
    id: 'walleye',
    name: 'Walleye',
    description: 'A freshwater fish caught at night.',
    sellPrice: 105,
    edibility: 18,
    difficulty: 45,
    behavior: 'smooth',
    minSize: 10,
    maxSize: 41,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Fall'], timeOfDay: '12pm-2am', weather: 'rainy' },
      { area: 'Forest Pond', locationType: 'pond', seasons: ['Fall'], timeOfDay: '12pm-2am', weather: 'rainy' },
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Fall'], timeOfDay: '12pm-2am', weather: 'rainy' }
    ],
    usedInBundles: ['Night Fishing Bundle']
  },
  {
    id: 'perch',
    name: 'Perch',
    description: 'A freshwater fish found in lakes.',
    sellPrice: 55,
    edibility: 15,
    difficulty: 35,
    behavior: 'dart',
    minSize: 5,
    maxSize: 18,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Winter'], timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Forest Pond', locationType: 'pond', seasons: ['Winter'], timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Winter'], timeOfDay: '6am-2am', weather: 'any' }
    ]
  },
  {
    id: 'pike',
    name: 'Pike',
    description: 'A freshwater fish with a long body.',
    sellPrice: 100,
    edibility: 18,
    difficulty: 60,
    behavior: 'dart',
    minSize: 15,
    maxSize: 60,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Summer', 'Winter'], timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Forest Pond', locationType: 'pond', seasons: ['Summer', 'Winter'], timeOfDay: '6am-2am', weather: 'any' }
    ]
  },
  {
    id: 'tiger_trout',
    name: 'Tiger Trout',
    description: 'A rare hybrid fish.',
    sellPrice: 150,
    edibility: 18,
    difficulty: 60,
    behavior: 'dart',
    minSize: 10,
    maxSize: 35,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Fall', 'Winter'], timeOfDay: '6am-7pm', weather: 'any' }
    ]
  },
  {
    id: 'catfish',
    name: 'Catfish',
    description: 'An uncommon fish found in streams.',
    sellPrice: 200,
    edibility: 18,
    difficulty: 75,
    behavior: 'mixed',
    minSize: 12,
    maxSize: 48,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Spring', 'Fall'], timeOfDay: '6am-12am', weather: 'rainy' },
      { area: 'Secret Woods', locationType: 'secret-woods', seasons: ['Spring', 'Summer', 'Fall'], timeOfDay: '6am-12am', weather: 'any' }
    ],
    usedInBundles: ['River Fish Bundle']
  },
  {
    id: 'shad',
    name: 'Shad',
    description: 'Lives in the ocean but swims upriver to spawn.',
    sellPrice: 60,
    edibility: 15,
    difficulty: 45,
    behavior: 'smooth',
    minSize: 8,
    maxSize: 25,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Spring', 'Summer', 'Fall'], timeOfDay: '9am-2am', weather: 'rainy' }
    ],
    usedInBundles: ['River Fish Bundle']
  },
  {
    id: 'lingcod',
    name: 'Lingcod',
    description: 'A fearsome predator that will eat almost anything.',
    sellPrice: 120,
    edibility: 18,
    difficulty: 85,
    behavior: 'mixed',
    minSize: 20,
    maxSize: 75,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Winter'], timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Winter'], timeOfDay: '6am-2am', weather: 'any' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'sunfish',
    name: 'Sunfish',
    description: 'A freshwater fish found in rivers.',
    sellPrice: 30,
    edibility: 10,
    difficulty: 30,
    behavior: 'mixed',
    minSize: 2,
    maxSize: 7,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: ['Spring', 'Summer'], timeOfDay: '6am-7pm', weather: 'sunny' }
    ],
    usedInBundles: ['River Fish Bundle']
  },
  {
    id: 'bream',
    name: 'Bream',
    description: 'A fairly common freshwater fish.',
    sellPrice: 45,
    edibility: 13,
    difficulty: 35,
    behavior: 'smooth',
    minSize: 8,
    maxSize: 28,
    locations: [
      { area: 'River (Town)', locationType: 'river', seasons: 'all', timeOfDay: '6pm-2am', weather: 'any' }
    ],
    usedInBundles: ['Night Fishing Bundle']
  },

  // ==================== LAKE FISH ====================
  {
    id: 'carp',
    name: 'Carp',
    description: 'A common pond fish.',
    sellPrice: 30,
    edibility: 10,
    difficulty: 15,
    behavior: 'mixed',
    minSize: 15,
    maxSize: 50,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Secret Woods', locationType: 'secret-woods', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Sewers', locationType: 'sewers', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' }
    ],
    usedInBundles: ['Lake Fish Bundle'],
    catchTip: 'Easiest fish in the game - great for beginners'
  },
  {
    id: 'bullhead',
    name: 'Bullhead',
    description: 'A common fish found in rivers and lakes.',
    sellPrice: 75,
    edibility: 15,
    difficulty: 46,
    behavior: 'smooth',
    minSize: 6,
    maxSize: 21,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' }
    ],
    usedInBundles: ['Lake Fish Bundle']
  },
  {
    id: 'chub',
    name: 'Chub',
    description: 'A common river fish. Known for their voracious appetite.',
    sellPrice: 50,
    edibility: 13,
    difficulty: 35,
    behavior: 'dart',
    minSize: 6,
    maxSize: 21,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' },
      { area: 'River (Town)', locationType: 'river', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' }
    ]
  },
  {
    id: 'sturgeon',
    name: 'Sturgeon',
    description: 'An ancient fish covered in bony plates.',
    sellPrice: 200,
    edibility: 18,
    difficulty: 78,
    behavior: 'mixed',
    minSize: 24,
    maxSize: 96,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Summer', 'Winter'], timeOfDay: '6am-7pm', weather: 'any' }
    ],
    usedInBundles: ['Lake Fish Bundle'],
    usedInRecipes: ['Sturgeon makes Caviar in Fish Pond'],
    trapBobberRecommended: true
  },
  {
    id: 'midnight_carp',
    name: 'Midnight Carp',
    description: 'Only a night owl would catch this elusive fish.',
    sellPrice: 150,
    edibility: 18,
    difficulty: 55,
    behavior: 'mixed',
    minSize: 12,
    maxSize: 52,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Fall', 'Winter'], timeOfDay: '10pm-2am', weather: 'any' },
      { area: 'Ginger Island Pond', locationType: 'island', seasons: 'all', timeOfDay: '10pm-2am', weather: 'any' }
    ],
    usedInBundles: ['Night Fishing Bundle']
  },

  // ==================== MINE FISH ====================
  {
    id: 'ghostfish',
    name: 'Ghostfish',
    description: 'A pale, blind fish found in underground lakes.',
    sellPrice: 45,
    edibility: 13,
    difficulty: 50,
    behavior: 'mixed',
    minSize: 3,
    maxSize: 16,
    locations: [
      { area: 'The Mines (Level 20)', locationType: 'mine', seasons: 'all', timeOfDay: 'Any', weather: 'any' },
      { area: 'The Mines (Level 60)', locationType: 'mine', seasons: 'all', timeOfDay: 'Any', weather: 'any' }
    ],
    usedInBundles: ['Specialty Fish Bundle']
  },
  {
    id: 'stonefish',
    name: 'Stonefish',
    description: 'A bizarre fish that resembles a rock.',
    sellPrice: 300,
    edibility: -100,
    difficulty: 65,
    behavior: 'sinker',
    minSize: 5,
    maxSize: 21,
    locations: [
      { area: 'The Mines (Level 20)', locationType: 'mine', seasons: 'all', timeOfDay: 'Any', weather: 'any' }
    ]
  },
  {
    id: 'ice_pip',
    name: 'Ice Pip',
    description: 'A rare fish that thrives in extremely cold conditions.',
    sellPrice: 500,
    edibility: -300,
    difficulty: 85,
    behavior: 'dart',
    minSize: 3,
    maxSize: 10,
    locations: [
      { area: 'The Mines (Level 60)', locationType: 'mine', seasons: 'all', timeOfDay: 'Any', weather: 'any' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'lava_eel',
    name: 'Lava Eel',
    description: 'It can somehow survive in pools of red-hot lava.',
    sellPrice: 700,
    edibility: -300,
    difficulty: 90,
    behavior: 'mixed',
    minSize: 12,
    maxSize: 52,
    locations: [
      { area: 'The Mines (Level 100)', locationType: 'mine', seasons: 'all', timeOfDay: 'Any', weather: 'any' },
      { area: 'Volcano Caldera', locationType: 'volcano', seasons: 'all', timeOfDay: 'Any', weather: 'any' }
    ],
    trapBobberRecommended: true,
    catchTip: 'Use Trap Bobber - one of the hardest non-legendary fish'
  },

  // ==================== DESERT FISH ====================
  {
    id: 'sandfish',
    name: 'Sandfish',
    description: 'It tries to hide using camouflage.',
    sellPrice: 75,
    edibility: -300,
    difficulty: 65,
    behavior: 'mixed',
    minSize: 3,
    maxSize: 24,
    locations: [
      { area: 'The Desert', locationType: 'desert', seasons: 'all', timeOfDay: '6am-8pm', weather: 'any' }
    ],
    usedInBundles: ['Specialty Fish Bundle']
  },
  {
    id: 'scorpion_carp',
    name: 'Scorpion Carp',
    description: 'Its sharp tail can pierce armor.',
    sellPrice: 150,
    edibility: -50,
    difficulty: 90,
    behavior: 'dart',
    minSize: 10,
    maxSize: 41,
    requiredFishingLevel: 4,
    locations: [
      { area: 'The Desert', locationType: 'desert', seasons: 'all', timeOfDay: '6am-8pm', weather: 'any', condition: 'Fishing Level 4+' }
    ],
    trapBobberRecommended: true
  },

  // ==================== SECRET WOODS FISH ====================
  {
    id: 'woodskip',
    name: 'Woodskip',
    description: 'A very shy woodland fish.',
    sellPrice: 75,
    edibility: 13,
    difficulty: 50,
    behavior: 'mixed',
    minSize: 3,
    maxSize: 16,
    locations: [
      { area: 'Secret Woods', locationType: 'secret-woods', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' },
      { area: 'Forest Farm', locationType: 'pond', seasons: 'all', timeOfDay: '6am-2am', weather: 'any', condition: 'Forest Farm only' }
    ],
    usedInBundles: ['Specialty Fish Bundle']
  },

  // ==================== GINGER ISLAND FISH ====================
  {
    id: 'blue_discus',
    name: 'Blue Discus',
    description: 'A brightly colored tropical fish.',
    sellPrice: 120,
    edibility: 15,
    difficulty: 60,
    behavior: 'dart',
    minSize: 3,
    maxSize: 13,
    locations: [
      { area: 'Ginger Island River', locationType: 'island', seasons: 'all', timeOfDay: '6am-8pm', weather: 'any' },
      { area: 'Pirate Cove', locationType: 'island', seasons: 'all', timeOfDay: '6am-8pm', weather: 'any' }
    ]
  },
  {
    id: 'lionfish',
    name: 'Lionfish',
    description: 'An invasive tropical species known for its ornate pattern.',
    sellPrice: 100,
    edibility: -25,
    difficulty: 50,
    behavior: 'smooth',
    minSize: 3,
    maxSize: 13,
    locations: [
      { area: 'Ginger Island Ocean', locationType: 'island', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' }
    ]
  },
  {
    id: 'stingray',
    name: 'Stingray',
    description: 'A graceful predator that hides in the sand.',
    sellPrice: 180,
    edibility: -25,
    difficulty: 80,
    behavior: 'sinker',
    minSize: 20,
    maxSize: 72,
    locations: [
      { area: 'Pirate Cove', locationType: 'island', seasons: 'all', timeOfDay: '6am-2am', weather: 'any' }
    ],
    trapBobberRecommended: true
  },

  // ==================== NIGHT MARKET FISH ====================
  {
    id: 'midnight_squid',
    name: 'Midnight Squid',
    description: 'A strange and mysterious squid.',
    sellPrice: 100,
    edibility: -300,
    difficulty: 55,
    behavior: 'sinker',
    minSize: 12,
    maxSize: 36,
    locations: [
      { area: 'Night Market Submarine', locationType: 'night-market', seasons: ['Winter'], timeOfDay: 'Night Market only', weather: 'any', condition: 'Winter 15-17 only' }
    ]
  },
  {
    id: 'spook_fish',
    name: 'Spook Fish',
    description: 'It sees in all directions.',
    sellPrice: 220,
    edibility: -300,
    difficulty: 60,
    behavior: 'dart',
    minSize: 3,
    maxSize: 13,
    locations: [
      { area: 'Night Market Submarine', locationType: 'night-market', seasons: ['Winter'], timeOfDay: 'Night Market only', weather: 'any', condition: 'Winter 15-17 only' }
    ]
  },
  {
    id: 'blobfish',
    name: 'Blobfish',
    description: 'This odd creature lives deep in the ocean.',
    sellPrice: 500,
    edibility: -300,
    difficulty: 75,
    behavior: 'floater',
    minSize: 3,
    maxSize: 16,
    locations: [
      { area: 'Night Market Submarine', locationType: 'night-market', seasons: ['Winter'], timeOfDay: 'Night Market only', weather: 'any', condition: 'Winter 15-17 only' }
    ],
    usedInRecipes: ['Blobfish makes Blobfish Mask (Fish Pond)']
  },

  // ==================== LEGENDARY FISH ====================
  {
    id: 'legend',
    name: 'Legend',
    description: 'The king of all fish! They say he lives at the bottom of the mountain lake.',
    sellPrice: 5000,
    edibility: 200,
    difficulty: 110,
    behavior: 'mixed',
    minSize: 36,
    maxSize: 64,
    isLegendary: true,
    requiredFishingLevel: 10,
    locations: [
      { area: 'Mountain Lake', locationType: 'lake', seasons: ['Spring'], timeOfDay: '6am-8pm', weather: 'rainy', condition: 'Spring, Rain, Fishing Level 10' }
    ],
    trapBobberRecommended: true,
    catchTip: 'Cast near the sunken log at the bottom of the lake. Use Trap Bobber!'
  },
  {
    id: 'crimsonfish',
    name: 'Crimsonfish',
    description: 'Lives deep in the ocean but likes to hang out near the pier.',
    sellPrice: 1500,
    edibility: 200,
    difficulty: 95,
    behavior: 'mixed',
    minSize: 24,
    maxSize: 44,
    isLegendary: true,
    requiredFishingLevel: 5,
    locations: [
      { area: 'Ocean (East Pier)', locationType: 'ocean', seasons: ['Summer'], timeOfDay: '6am-8pm', weather: 'any', condition: 'Summer, Fishing Level 5, East side of beach' }
    ],
    trapBobberRecommended: true,
    catchTip: 'Fish from the far east end of the beach pier'
  },
  {
    id: 'angler',
    name: 'Angler',
    description: 'Uses a light to lure prey in close.',
    sellPrice: 900,
    edibility: 200,
    difficulty: 85,
    behavior: 'smooth',
    minSize: 18,
    maxSize: 36,
    isLegendary: true,
    requiredFishingLevel: 3,
    locations: [
      { area: 'Town River (North)', locationType: 'river', seasons: ['Fall'], timeOfDay: '6am-8pm', weather: 'any', condition: 'Fall, Fishing Level 3, North of JojaMart' }
    ],
    trapBobberRecommended: true,
    catchTip: 'Fish from the wooden plank bridge north of JojaMart'
  },
  {
    id: 'glacierfish',
    name: 'Glacierfish',
    description: 'Builds a nest near the islands of Cindersap Forest.',
    sellPrice: 1000,
    edibility: 200,
    difficulty: 100,
    behavior: 'mixed',
    minSize: 24,
    maxSize: 44,
    isLegendary: true,
    requiredFishingLevel: 6,
    locations: [
      { area: 'Cindersap Forest (Island)', locationType: 'river', seasons: ['Winter'], timeOfDay: '6am-8pm', weather: 'any', condition: 'Winter, Fishing Level 6' }
    ],
    trapBobberRecommended: true,
    catchTip: 'Fish from the southern tip of Arrowhead Island'
  },
  {
    id: 'mutant_carp',
    name: 'Mutant Carp',
    description: 'The strange water in the sewer has caused this carp to mutate.',
    sellPrice: 1000,
    edibility: 200,
    difficulty: 80,
    behavior: 'dart',
    minSize: 36,
    maxSize: 64,
    isLegendary: true,
    locations: [
      { area: 'Sewers', locationType: 'sewers', seasons: 'all', timeOfDay: 'Any', weather: 'any', condition: 'Requires Rusty Key' }
    ],
    trapBobberRecommended: true,
    catchTip: 'Easiest legendary - available any season/time'
  },

  // ==================== CRAB POT CATCHES ====================
  {
    id: 'lobster',
    name: 'Lobster',
    description: 'A large ocean-dwelling crustacean with a large pair of claws.',
    sellPrice: 120,
    edibility: 25,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 8,
    maxSize: 24,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Lobster Bisque'],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'crab',
    name: 'Crab',
    description: 'A marine crustacean with two claws.',
    sellPrice: 100,
    edibility: 20,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 4,
    maxSize: 12,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Crab Cakes'],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'shrimp',
    name: 'Shrimp',
    description: 'A small shellfish that lives in the ocean.',
    sellPrice: 60,
    edibility: 15,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 1,
    maxSize: 4,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Shrimp Cocktail', 'Tom Kha Soup'],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'cockle',
    name: 'Cockle',
    description: 'A common saltwater clam.',
    sellPrice: 50,
    edibility: 15,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 1,
    maxSize: 3,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'mussel',
    name: 'Mussel',
    description: 'A black shellfish with a soft inside.',
    sellPrice: 30,
    edibility: 13,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 1,
    maxSize: 4,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Fish Stew'],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'oyster',
    name: 'Oyster',
    description: 'Chewy with a mild salty flavor.',
    sellPrice: 40,
    edibility: 15,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 2,
    maxSize: 6,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'clam',
    name: 'Clam',
    description: 'Someone said it might be lucky.',
    sellPrice: 50,
    edibility: -300,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 2,
    maxSize: 6,
    isCrabPot: true,
    locations: [
      { area: 'Ocean (Crab Pot)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' },
      { area: 'Beach (Foraging)', locationType: 'ocean', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Chowder']
  },
  {
    id: 'crayfish',
    name: 'Crayfish',
    description: 'A small freshwater relative of the lobster.',
    sellPrice: 75,
    edibility: 20,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 3,
    maxSize: 8,
    isCrabPot: true,
    locations: [
      { area: 'Freshwater (Crab Pot)', locationType: 'river', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'snail',
    name: 'Snail',
    description: 'A slimy little mollusc that lives in a shell.',
    sellPrice: 65,
    edibility: -300,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 1,
    maxSize: 3,
    isCrabPot: true,
    locations: [
      { area: 'Freshwater (Crab Pot)', locationType: 'river', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Escargot'],
    usedInBundles: ['Crab Pot Bundle']
  },
  {
    id: 'periwinkle',
    name: 'Periwinkle',
    description: 'A tiny freshwater snail with a blue shell.',
    sellPrice: 20,
    edibility: 5,
    difficulty: 0,
    behavior: 'mixed',
    minSize: 0.5,
    maxSize: 1,
    isCrabPot: true,
    locations: [
      { area: 'Freshwater (Crab Pot)', locationType: 'river', seasons: 'all', timeOfDay: 'N/A', weather: 'any' }
    ],
    usedInRecipes: ['Strange Bun'],
    usedInBundles: ['Crab Pot Bundle']
  },

  // ==================== ADDITIONAL FISH ====================
  {
    id: 'dorado',
    name: 'Dorado',
    description: 'A golden, colorful river fish.',
    sellPrice: 100,
    edibility: 18,
    difficulty: 78,
    behavior: 'mixed',
    minSize: 24,
    maxSize: 68,
    locations: [
      { area: 'Forest River', locationType: 'river', seasons: ['Summer'], timeOfDay: '6am-7pm', weather: 'any' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'void_salmon',
    name: 'Void Salmon',
    description: 'A salmon with purple scales and translucent flesh.',
    sellPrice: 150,
    edibility: 25,
    difficulty: 80,
    behavior: 'mixed',
    minSize: 10,
    maxSize: 36,
    locations: [
      { area: 'Witch\'s Swamp', locationType: 'river', seasons: 'all', timeOfDay: 'Any', weather: 'any', condition: 'Requires access to Witch\'s Hut' }
    ],
    trapBobberRecommended: true
  },
  {
    id: 'slimejack',
    name: 'Slimejack',
    description: 'He\'s coated in a layer of clear slime.',
    sellPrice: 100,
    edibility: -300,
    difficulty: 55,
    behavior: 'dart',
    minSize: 10,
    maxSize: 36,
    locations: [
      { area: 'Mutant Bug Lair', locationType: 'sewers', seasons: 'all', timeOfDay: 'Any', weather: 'any', condition: 'Requires Sewers access' }
    ]
  },
  {
    id: 'goby',
    name: 'Goby',
    description: 'A bottom-dwelling fish that hides under rocks.',
    sellPrice: 60,
    edibility: 13,
    difficulty: 55,
    behavior: 'smooth',
    minSize: 1,
    maxSize: 5,
    locations: [
      { area: 'Cindersap Forest Waterfall', locationType: 'river', seasons: 'all', timeOfDay: 'Any', weather: 'any', condition: 'At bottom of waterfall' }
    ]
  }
];

// Helper Functions

/**
 * Get all fish
 */
export function getAllFish(): Fish[] {
  return FISH;
}

/**
 * Get fish by ID
 */
export function getFishById(id: string): Fish | undefined {
  return FISH.find(fish => fish.id === id);
}

/**
 * Get fish by location type
 */
export function getFishByLocation(locationType: FishLocationType): Fish[] {
  return FISH.filter(fish =>
    fish.locations.some(loc => loc.locationType === locationType)
  );
}

/**
 * Get fish by season
 */
export function getFishBySeason(season: Season): Fish[] {
  return FISH.filter(fish =>
    fish.locations.some(loc =>
      loc.seasons === 'all' || loc.seasons.includes(season)
    )
  );
}

/**
 * Get fish by weather
 */
export function getFishByWeather(weather: 'sunny' | 'rainy'): Fish[] {
  return FISH.filter(fish =>
    fish.locations.some(loc =>
      loc.weather === 'any' || loc.weather === weather
    )
  );
}

/**
 * Get legendary fish only
 */
export function getLegendaryFish(): Fish[] {
  return FISH.filter(fish => fish.isLegendary);
}

/**
 * Get crab pot catches only
 */
export function getCrabPotFish(): Fish[] {
  return FISH.filter(fish => fish.isCrabPot);
}

/**
 * Get standard fish (not legendary, not crab pot)
 */
export function getStandardFish(): Fish[] {
  return FISH.filter(fish => !fish.isLegendary && !fish.isCrabPot);
}

/**
 * Get fish by difficulty range
 */
export function getFishByDifficulty(minDifficulty: number, maxDifficulty: number): Fish[] {
  return FISH.filter(fish =>
    fish.difficulty >= minDifficulty && fish.difficulty <= maxDifficulty
  );
}

/**
 * Search fish by name
 */
export function searchFish(searchTerm: string): Fish[] {
  const term = searchTerm.toLowerCase();
  return FISH.filter(fish =>
    fish.name.toLowerCase().includes(term) ||
    fish.description.toLowerCase().includes(term)
  );
}

/**
 * Get fish statistics
 */
export function getFishStats(): {
  total: number;
  legendary: number;
  crabPot: number;
  standard: number;
  byLocation: Record<FishLocationType, number>;
} {
  const byLocation: Record<FishLocationType, number> = {
    'ocean': 0,
    'river': 0,
    'lake': 0,
    'pond': 0,
    'mine': 0,
    'desert': 0,
    'island': 0,
    'night-market': 0,
    'secret-woods': 0,
    'sewers': 0,
    'volcano': 0
  };

  FISH.forEach(fish => {
    fish.locations.forEach(loc => {
      byLocation[loc.locationType]++;
    });
  });

  return {
    total: FISH.length,
    legendary: FISH.filter(f => f.isLegendary).length,
    crabPot: FISH.filter(f => f.isCrabPot).length,
    standard: FISH.filter(f => !f.isLegendary && !f.isCrabPot).length,
    byLocation
  };
}
