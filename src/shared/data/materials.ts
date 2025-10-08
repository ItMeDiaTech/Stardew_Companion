import { MaterialSource } from '../types';

/**
 * Comprehensive material source database for crafting
 * Includes where to find every material needed for crafting recipes
 */
export const MATERIALS: MaterialSource[] = [
  // BASIC RESOURCES
  {
    id: 'wood',
    name: 'Wood',
    type: ['farming'],
    description: 'A versatile resource obtained from trees.',
    farmingInfo: 'Chop down trees with an axe. Common trees respawn.',
    shops: [
      { shopId: 'robins', shopName: "Robin's Carpenter Shop", price: 10 }
    ]
  },
  {
    id: 'stone',
    name: 'Stone',
    type: ['mining', 'farming'],
    description: 'A common material with many uses.',
    miningLocations: ['The Mines (all levels)', 'Quarry', 'Farm'],
    farmingInfo: 'Break rocks with a pickaxe.',
    shops: [
      { shopId: 'robins', shopName: "Robin's Carpenter Shop", price: 20 }
    ]
  },
  {
    id: 'fiber',
    name: 'Fiber',
    type: ['farming', 'forage'],
    description: 'Raw material sourced from plants.',
    farmingInfo: 'Cut weeds and grass with a scythe.',
    forageLocations: [
      { area: 'Farm' },
      { area: 'Cindersap Forest' },
      { area: 'Mountain' },
      { area: 'Desert' }
    ]
  },
  {
    id: 'sap',
    name: 'Sap',
    type: ['farming'],
    description: 'A fluid obtained from trees.',
    farmingInfo: 'Chop down trees. Commonly drops from all tree types.'
  },
  {
    id: 'hardwood',
    name: 'Hardwood',
    type: ['farming'],
    description: 'A special type of wood with superior strength.',
    farmingInfo: 'Chop Large Stumps and Large Logs (requires Copper Axe+). Secret Woods has 6 Large Stumps daily.'
  },

  // ORES & BARS
  {
    id: 'copper_ore',
    name: 'Copper Ore',
    type: ['mining', 'shop'],
    description: 'A common ore that can be smelted into bars.',
    miningLocations: ['The Mines (levels 1-40)', 'Skull Cavern'],
    shops: [
      { shopId: 'clints', shopName: "Clint's Blacksmith", price: 75 }
    ]
  },
  {
    id: 'copper_bar',
    name: 'Copper Bar',
    type: ['refining'],
    description: 'A bar of pure copper.',
    craftedFrom: 'smelt_copper',
    farmingInfo: 'Smelt 5 Copper Ore + 1 Coal in a Furnace'
  },
  {
    id: 'iron_ore',
    name: 'Iron Ore',
    type: ['mining', 'shop'],
    description: 'A fairly common ore that can be smelted into bars.',
    miningLocations: ['The Mines (levels 40-80)', 'Skull Cavern'],
    shops: [
      { shopId: 'clints', shopName: "Clint's Blacksmith", price: 150 }
    ]
  },
  {
    id: 'iron_bar',
    name: 'Iron Bar',
    type: ['refining'],
    description: 'A bar of pure iron.',
    craftedFrom: 'smelt_iron',
    farmingInfo: 'Smelt 5 Iron Ore + 1 Coal in a Furnace'
  },
  {
    id: 'gold_ore',
    name: 'Gold Ore',
    type: ['mining', 'shop'],
    description: 'A precious ore that can be smelted into bars.',
    miningLocations: ['The Mines (levels 80-120)', 'Skull Cavern'],
    shops: [
      { shopId: 'clints', shopName: "Clint's Blacksmith", price: 400 }
    ]
  },
  {
    id: 'gold_bar',
    name: 'Gold Bar',
    type: ['refining'],
    description: 'A bar of pure gold.',
    craftedFrom: 'smelt_gold',
    farmingInfo: 'Smelt 5 Gold Ore + 1 Coal in a Furnace'
  },
  {
    id: 'iridium_ore',
    name: 'Iridium Ore',
    type: ['mining'],
    description: 'An exotic ore with many curious properties. Can be smelted into bars.',
    miningLocations: ['Skull Cavern', 'Magma & Lava geodes', 'Super Cucumber Fish Pond']
  },
  {
    id: 'iridium_bar',
    name: 'Iridium Bar',
    type: ['refining', 'shop'],
    description: 'A bar of pure iridium.',
    craftedFrom: 'smelt_iridium',
    farmingInfo: 'Smelt 5 Iridium Ore + 1 Coal in a Furnace',
    shops: [
      { shopId: 'krobus', shopName: 'Krobus (Sewers)', price: 10000, availability: { condition: 'Fridays only' } }
    ]
  },
  {
    id: 'coal',
    name: 'Coal',
    type: ['mining', 'shop', 'monster'],
    description: 'A combustible rock that is useful for crafting and smelting.',
    miningLocations: ['The Mines (all levels)', 'Skull Cavern'],
    monsterDrops: ['Dust Sprites'],
    shops: [
      { shopId: 'clints', shopName: "Clint's Blacksmith", price: 150 }
    ]
  },
  {
    id: 'refined_quartz',
    name: 'Refined Quartz',
    type: ['refining'],
    description: 'A more pure form of quartz.',
    craftedFrom: 'refine_quartz',
    farmingInfo: 'Smelt 1 Quartz or 1 Fire Quartz in a Furnace, or craft from 1 Quartz + 1 Coal'
  },
  {
    id: 'quartz',
    name: 'Quartz',
    type: ['mining', 'forage'],
    description: 'A clear crystal commonly found in caves and mines.',
    miningLocations: ['The Mines (all levels)', 'Skull Cavern', 'Quarry'],
    forageLocations: [
      { area: 'The Mines' },
      { area: 'Skull Cavern' }
    ]
  },

  // MONSTER DROPS
  {
    id: 'slime',
    name: 'Slime',
    type: ['monster'],
    description: 'A gooey, green substance.',
    monsterDrops: ['Green Slimes', 'Blue Slimes', 'Red Slimes', 'Purple Slimes', 'Tiger Slimes']
  },
  {
    id: 'bat_wing',
    name: 'Bat Wing',
    type: ['monster'],
    description: 'The wing of a bat.',
    monsterDrops: ['Bats', 'Frost Bats', 'Lava Bats', 'Iridium Bats']
  },
  {
    id: 'bug_meat',
    name: 'Bug Meat',
    type: ['monster'],
    description: "Sketchy Meat from a bug. Doesn't look very appetizing.",
    monsterDrops: ['Flies', 'Grubs', 'Cave Flies']
  },
  {
    id: 'solar_essence',
    name: 'Solar Essence',
    type: ['monster'],
    description: 'A glowing ball of energy.',
    monsterDrops: ['Ghosts', 'Metal Heads', 'Squid Kids']
  },
  {
    id: 'void_essence',
    name: 'Void Essence',
    type: ['monster'],
    description: 'A dark, slimy substance.',
    monsterDrops: ['Shadow Brutes', 'Shadow Shamans', 'Serpents']
  },

  // GEMS & MINERALS
  {
    id: 'earth_crystal',
    name: 'Earth Crystal',
    type: ['mining', 'monster'],
    description: 'A resinous substance found near the surface.',
    miningLocations: ['The Mines (levels 1-40)', 'Geodes'],
    monsterDrops: ['Duggies']
  },
  {
    id: 'frozen_tear',
    name: 'Frozen Tear',
    type: ['mining', 'monster'],
    description: 'A crystal fabled to be the frozen tears of a yeti.',
    miningLocations: ['The Mines (levels 40-80)', 'Frozen Geodes'],
    monsterDrops: ['Dust Sprites']
  },
  {
    id: 'fire_quartz',
    name: 'Fire Quartz',
    type: ['mining'],
    description: 'A glowing red crystal.',
    miningLocations: ['The Mines (levels 80-120)', 'Magma Geodes']
  },

  // TREE PRODUCTS
  {
    id: 'maple_syrup',
    name: 'Maple Syrup',
    type: ['farming'],
    description: 'A sweet syrup with a unique flavor.',
    farmingInfo: 'Place a Tapper on a Maple Tree. Takes 9 days to produce.'
  },
  {
    id: 'oak_resin',
    name: 'Oak Resin',
    type: ['farming'],
    description: 'A sticky, fragrant substance derived from oak sap.',
    farmingInfo: 'Place a Tapper on an Oak Tree. Takes 7-8 days to produce.'
  },
  {
    id: 'pine_tar',
    name: 'Pine Tar',
    type: ['farming'],
    description: 'A pungent substance derived from pine sap.',
    farmingInfo: 'Place a Tapper on a Pine Tree. Takes 5-6 days to produce.'
  },

  // FORAGE ITEMS
  {
    id: 'wild_horseradish',
    name: 'Wild Horseradish',
    type: ['forage'],
    description: 'A spicy root found in the spring.',
    forageLocations: [
      { area: 'Cindersap Forest', season: ['Spring'] },
      { area: 'Secret Woods', season: ['Spring'] },
      { area: 'Backwoods', season: ['Spring'] },
      { area: 'Mountain', season: ['Spring'] }
    ]
  },
  {
    id: 'daffodil',
    name: 'Daffodil',
    type: ['forage'],
    description: 'A traditional spring flower that makes a nice gift.',
    forageLocations: [
      { area: 'Pelican Town', season: ['Spring'] },
      { area: 'Bus Stop', season: ['Spring'] },
      { area: 'Railroad', season: ['Spring'] }
    ]
  },
  {
    id: 'leek',
    name: 'Leek',
    type: ['forage'],
    description: 'A tasty relative of the onion.',
    forageLocations: [
      { area: 'Backwoods', season: ['Spring'] },
      { area: 'Mountain', season: ['Spring'] },
      { area: 'Bus Stop', season: ['Spring'] }
    ]
  },
  {
    id: 'dandelion',
    name: 'Dandelion',
    type: ['forage'],
    description: 'Not the prettiest flower, but the leaves make a good salad.',
    forageLocations: [
      { area: 'Pelican Town', season: ['Spring'] },
      { area: 'Railroad', season: ['Spring'] },
      { area: 'Backwoods', season: ['Spring'] }
    ]
  },
  {
    id: 'grape',
    name: 'Grape',
    type: ['forage'],
    description: 'A sweet cluster of fruit.',
    forageLocations: [
      { area: 'Backwoods', season: ['Summer', 'Fall'] },
      { area: 'Mountain', season: ['Summer', 'Fall'] },
      { area: 'Bus Stop', season: ['Summer', 'Fall'] }
    ]
  },
  {
    id: 'spice_berry',
    name: 'Spice Berry',
    type: ['forage'],
    description: 'It fills the air with a pungent aroma.',
    forageLocations: [
      { area: 'Cindersap Forest', season: ['Summer'] },
      { area: 'Backwoods', season: ['Summer'] },
      { area: 'Mountain', season: ['Summer'] }
    ]
  },
  {
    id: 'sweet_pea',
    name: 'Sweet Pea',
    type: ['forage'],
    description: 'A flower with a delicate scent.',
    forageLocations: [
      { area: 'Pelican Town', season: ['Summer'] },
      { area: 'Cindersap Forest', season: ['Summer'] },
      { area: 'Bus Stop', season: ['Summer'] }
    ]
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    type: ['forage'],
    description: 'An early-fall treat.',
    forageLocations: [
      { area: 'Pelican Town', season: ['Fall'], condition: 'Bushes during Fall 8-11' },
      { area: 'Cindersap Forest', season: ['Fall'], condition: 'Bushes during Fall 8-11' },
      { area: 'Railroad', season: ['Fall'], condition: 'Bushes during Fall 8-11' }
    ]
  },
  {
    id: 'hazelnut',
    name: 'Hazelnut',
    type: ['forage'],
    description: "That's one big hazelnut!",
    forageLocations: [
      { area: 'Backwoods', season: ['Fall'] },
      { area: 'Mountain', season: ['Fall'] },
      { area: 'Bus Stop', season: ['Fall'] }
    ]
  },
  {
    id: 'wild_plum',
    name: 'Wild Plum',
    type: ['forage'],
    description: 'Tart and juicy with a pungent aroma.',
    forageLocations: [
      { area: 'Bus Stop', season: ['Fall'] },
      { area: 'Railroad', season: ['Fall'] },
      { area: 'Backwoods', season: ['Fall'] }
    ]
  },
  {
    id: 'crocus',
    name: 'Crocus',
    type: ['forage'],
    description: 'A flower that blooms in the winter.',
    forageLocations: [
      { area: 'Pelican Town', season: ['Winter'] },
      { area: 'Railroad', season: ['Winter'] },
      { area: 'Bus Stop', season: ['Winter'] }
    ]
  },
  {
    id: 'crystal_fruit',
    name: 'Crystal Fruit',
    type: ['forage'],
    description: 'A delicate fruit that pops up from the snow.',
    forageLocations: [
      { area: 'Railroad', season: ['Winter'] },
      { area: 'Mountain', season: ['Winter'] },
      { area: 'Bus Stop', season: ['Winter'] }
    ]
  },
  {
    id: 'holly',
    name: 'Holly',
    type: ['forage'],
    description: "The leaves and bright red berries make a popular winter decoration.",
    forageLocations: [
      { area: 'Secret Woods', season: ['Winter'] },
      { area: 'Backwoods', season: ['Winter'] },
      { area: 'Pelican Town', season: ['Winter'] }
    ]
  },
  {
    id: 'common_mushroom',
    name: 'Common Mushroom',
    type: ['forage'],
    description: 'Slightly nutty, with good texture.',
    forageLocations: [
      { area: 'Secret Woods', season: ['Spring', 'Fall'] },
      { area: 'Cindersap Forest', season: ['Fall'] },
      { area: 'Mountain', season: ['Fall'] }
    ]
  },
  {
    id: 'morel',
    name: 'Morel',
    type: ['forage'],
    description: 'Sought after for its unique nutty flavor.',
    forageLocations: [
      { area: 'Secret Woods', season: ['Spring'] },
      { area: 'Cindersap Forest', season: ['Spring'] }
    ]
  },
  {
    id: 'red_mushroom',
    name: 'Red Mushroom',
    type: ['forage'],
    description: 'A spotted mushroom sometimes found in caves.',
    forageLocations: [
      { area: 'Secret Woods', season: ['Summer', 'Fall'] },
      { area: 'The Mines' }
    ]
  },
  {
    id: 'chanterelle',
    name: 'Chanterelle',
    type: ['forage'],
    description: 'A tasty mushroom with a fruity smell and slightly peppery flavor.',
    forageLocations: [
      { area: 'Secret Woods', season: ['Fall'] },
      { area: 'Cindersap Forest', season: ['Fall'] }
    ]
  },

  // ARTISAN/FISHING
  {
    id: 'coral',
    name: 'Coral',
    type: ['fishing', 'forage'],
    description: 'A colony of tiny creatures that clump together to form beautiful structures.',
    fishingLocations: [
      { area: 'Ocean', season: ['Summer', 'Fall'] }
    ],
    forageLocations: [
      { area: 'The Beach', season: ['Summer', 'Fall'] }
    ]
  },
  {
    id: 'sea_urchin',
    name: 'Sea Urchin',
    type: ['fishing', 'forage'],
    description: 'A slow-moving, spiny creature that some consider a delicacy.',
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Summer'] }
    ],
    forageLocations: [
      { area: 'The Beach', season: ['Spring', 'Summer'] }
    ]
  },
  {
    id: 'clay',
    name: 'Clay',
    type: ['farming'],
    description: 'Used in crafting and construction.',
    farmingInfo: 'Dig up tilled soil or use a Hoe on dirt patches. More common on the farm.'
  },

  // SHOP-ONLY ITEMS
  {
    id: 'rice',
    name: 'Rice',
    type: ['shop'],
    description: 'A basic grain often served under vegetables.',
    shops: [
      { shopId: 'pierres', shopName: "Pierre's General Store", price: 200 }
    ]
  },
  {
    id: 'sugar',
    name: 'Sugar',
    type: ['shop'],
    description: 'Adds sweetness to pastries and candies. Too much can be unhealthy.',
    shops: [
      { shopId: 'pierres', shopName: "Pierre's General Store", price: 100 },
      { shopId: 'jojamart', shopName: 'JojaMart', price: 150 }
    ]
  },
  {
    id: 'wheat_flour',
    name: 'Wheat Flour',
    type: ['shop', 'refining'],
    description: 'A common cooking ingredient made from crushed wheat seeds.',
    shops: [
      { shopId: 'pierres', shopName: "Pierre's General Store", price: 100 }
    ],
    farmingInfo: 'Can also be made from 1 Wheat in a Mill'
  },
  {
    id: 'vinegar',
    name: 'Vinegar',
    type: ['shop'],
    description: 'An aged fermented liquid used in many cooking recipes.',
    shops: [
      { shopId: 'pierres', shopName: "Pierre's General Store", price: 200 }
    ]
  }
];

/**
 * Get material by ID
 */
export function getMaterialById(id: string): MaterialSource | undefined {
  return MATERIALS.find(m => m.id === id);
}

/**
 * Get all materials of a specific type
 */
export function getMaterialsByType(type: string): MaterialSource[] {
  return MATERIALS.filter(m => m.type.includes(type as any));
}

/**
 * Search materials by name
 */
export function searchMaterials(searchTerm: string): MaterialSource[] {
  const term = searchTerm.toLowerCase();
  return MATERIALS.filter(m =>
    m.name.toLowerCase().includes(term) ||
    (m.description && m.description.toLowerCase().includes(term))
  );
}

/**
 * Get materials available in shops
 */
export function getShopMaterials(): MaterialSource[] {
  return MATERIALS.filter(m => m.shops && m.shops.length > 0);
}

/**
 * Get forageable materials by season
 */
export function getForageableByseason(season: string): MaterialSource[] {
  return MATERIALS.filter(m =>
    m.forageLocations &&
    m.forageLocations.some(loc => loc.season && loc.season.includes(season as any))
  );
}
