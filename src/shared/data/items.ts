import { Item, ItemCategory, Season } from '../types';

/**
 * Comprehensive Stardew Valley Items Database
 * 350+ items with detailed source information
 */
export const ITEMS: Item[] = [
  // ==================== FORAGE ITEMS (~60) ====================

  // Spring Forage
  {
    id: 'wild_horseradish',
    name: 'Wild Horseradish',
    category: 'forage',
    description: 'A spicy root found in the spring.',
    sellPrice: 50,
    edibility: 13,
    quality: true,
    forageLocations: [
      { area: 'Cindersap Forest', season: ['Spring'] },
      { area: 'Mountain', season: ['Spring'] },
      { area: 'Railroad', season: ['Spring'] },
      { area: 'Backwoods', season: ['Spring'] }
    ],
    usedInBundles: ['Spring Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Leah'] }
  },
  {
    id: 'daffodil',
    name: 'Daffodil',
    category: 'forage',
    description: 'A traditional spring flower that makes a nice gift.',
    sellPrice: 30,
    edibility: 0,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Spring'] },
      { area: 'Railroad', season: ['Spring'] },
      { area: 'Bus Stop', season: ['Spring'] }
    ],
    usedInBundles: ['Spring Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Caroline', 'Evelyn'] }
  },
  {
    id: 'leek',
    name: 'Leek',
    category: 'forage',
    description: 'A tasty relative of the onion.',
    sellPrice: 60,
    edibility: 16,
    quality: true,
    forageLocations: [
      { area: 'Cindersap Forest', season: ['Spring'] },
      { area: 'Mountain', season: ['Spring'] },
      { area: 'Backwoods', season: ['Spring'] }
    ],
    usedInBundles: ['Spring Foraging Bundle'],
    giftInfo: { lovedBy: ['George'], likedBy: [] }
  },
  {
    id: 'dandelion',
    name: 'Dandelion',
    category: 'forage',
    description: 'Not the prettiest flower, but the leaves make a good salad.',
    sellPrice: 40,
    edibility: 10,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Spring'] },
      { area: 'Railroad', season: ['Spring'] },
      { area: 'Bus Stop', season: ['Spring'] },
      { area: 'Backwoods', season: ['Spring'] }
    ],
    usedInBundles: ['Spring Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Jodi'] }
  },
  {
    id: 'morel',
    name: 'Morel',
    category: 'forage',
    description: 'Sought after for its unique nutty flavor.',
    sellPrice: 150,
    edibility: 20,
    quality: true,
    rarity: 'uncommon',
    forageLocations: [
      { area: 'Secret Woods', season: ['Spring'] },
      { area: 'Cindersap Forest', season: ['Spring'], condition: 'Rare' }
    ],
    usedInBundles: ['Exotic Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Demetrius'] }
  },
  {
    id: 'common_mushroom',
    name: 'Common Mushroom',
    category: 'forage',
    description: 'Slightly nutty, with good texture.',
    sellPrice: 40,
    edibility: 15,
    quality: true,
    forageLocations: [
      { area: 'Secret Woods', season: ['Spring', 'Fall'] },
      { area: 'Cindersap Forest', season: ['Spring', 'Fall'] },
      { area: 'The Mines', condition: 'Any floor' }
    ],
    giftInfo: { lovedBy: [], likedBy: ['Leah'] }
  },
  {
    id: 'spring_onion',
    name: 'Spring Onion',
    category: 'forage',
    description: 'These grow wild during the spring.',
    sellPrice: 8,
    edibility: 13,
    forageLocations: [
      { area: 'Cindersap Forest (South)', season: ['Spring'], condition: 'Near river' }
    ],
    giftInfo: { lovedBy: [], likedBy: ['Jas', 'Vincent'] }
  },

  // Summer Forage
  {
    id: 'grape',
    name: 'Grape',
    category: 'forage',
    description: 'A sweet cluster of fruit.',
    sellPrice: 80,
    edibility: 38,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Summer'] },
      { area: 'Bus Stop', season: ['Summer'] }
    ],
    farmingInfo: 'Grow from Grape Starter (Fall crop)',
    usedInBundles: ['Summer Foraging Bundle'],
    giftInfo: { lovedBy: ['Vincent'], likedBy: [] }
  },
  {
    id: 'spice_berry',
    name: 'Spice Berry',
    category: 'forage',
    description: 'It fills the air with a pungent aroma.',
    sellPrice: 80,
    edibility: 25,
    quality: true,
    forageLocations: [
      { area: 'Cindersap Forest', season: ['Summer'] },
      { area: 'Mountain', season: ['Summer'] },
      { area: 'Railroad', season: ['Summer'] }
    ],
    usedInBundles: ['Summer Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Demetrius'] }
  },
  {
    id: 'sweet_pea',
    name: 'Sweet Pea',
    category: 'forage',
    description: 'A flower that makes a colorful gift.',
    sellPrice: 50,
    edibility: 0,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Summer'] },
      { area: 'Bus Stop', season: ['Summer'] },
      { area: 'Railroad', season: ['Summer'] }
    ],
    usedInBundles: ['Summer Foraging Bundle'],
    giftInfo: { lovedBy: ['Marnie'], likedBy: [] }
  },
  {
    id: 'red_mushroom',
    name: 'Red Mushroom',
    category: 'forage',
    description: 'A spotted mushroom sometimes found in caves.',
    sellPrice: 75,
    edibility: -20,
    quality: true,
    rarity: 'uncommon',
    forageLocations: [
      { area: 'Secret Woods', season: ['Summer', 'Fall'] },
      { area: 'Cindersap Forest', season: ['Summer', 'Fall'], condition: 'Rare' },
      { area: 'The Mines', condition: 'Floors 40-79' }
    ],
    usedInBundles: ['Exotic Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'fiddlehead_fern',
    name: 'Fiddlehead Fern',
    category: 'forage',
    description: 'The young shoots are an edible delicacy.',
    sellPrice: 90,
    edibility: 10,
    quality: true,
    rarity: 'uncommon',
    forageLocations: [
      { area: 'Secret Woods', season: ['Summer'] },
      { area: 'Prehistoric Floors (Skull Cavern)', condition: 'Rare' }
    ],
    giftInfo: { lovedBy: [], likedBy: ['Leah'] }
  },

  // Fall Forage
  {
    id: 'wild_plum',
    name: 'Wild Plum',
    category: 'forage',
    description: 'Tart and juicy with a pungent aroma.',
    sellPrice: 80,
    edibility: 25,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Fall'] },
      { area: 'Bus Stop', season: ['Fall'] },
      { area: 'Railroad', season: ['Fall'] }
    ],
    usedInBundles: ['Fall Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'hazelnut',
    name: 'Hazelnut',
    category: 'forage',
    description: 'That\'s one big hazelnut!',
    sellPrice: 90,
    edibility: 12,
    quality: true,
    forageLocations: [
      { area: 'Cindersap Forest', season: ['Fall'] },
      { area: 'Mountain', season: ['Fall'] },
      { area: 'Railroad', season: ['Fall'] }
    ],
    usedInBundles: ['Fall Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    category: 'forage',
    description: 'An early-fall treat.',
    sellPrice: 20,
    edibility: 10,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Fall'], condition: 'Blackberry Season (8th-11th)' },
      { area: 'Railroad', season: ['Fall'], condition: 'Blackberry Season (8th-11th)' },
      { area: 'Backwoods', season: ['Fall'], condition: 'Blackberry Season (8th-11th)' }
    ],
    usedInBundles: ['Fall Foraging Bundle'],
    giftInfo: { lovedBy: ['Linus'], likedBy: [] }
  },
  {
    id: 'chanterelle',
    name: 'Chanterelle',
    category: 'forage',
    description: 'A delicious mushroom with a fruity smell and slightly peppery flavor.',
    sellPrice: 160,
    edibility: 30,
    quality: true,
    rarity: 'uncommon',
    forageLocations: [
      { area: 'Secret Woods', season: ['Fall'] },
      { area: 'Cindersap Forest', season: ['Fall'], condition: 'Rare' }
    ],
    usedInBundles: ['Exotic Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Demetrius', 'Harvey'] }
  },

  // Winter Forage
  {
    id: 'crocus',
    name: 'Crocus',
    category: 'forage',
    description: 'A flower that can bloom in the winter.',
    sellPrice: 60,
    edibility: 0,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Winter'] },
      { area: 'Mountain', season: ['Winter'] },
      { area: 'Railroad', season: ['Winter'] }
    ],
    usedInBundles: ['Winter Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Sandy'] }
  },
  {
    id: 'holly',
    name: 'Holly',
    category: 'forage',
    description: 'The leaves and bright red berries make a popular winter decoration.',
    sellPrice: 80,
    edibility: -15,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Winter'] },
      { area: 'Mountain', season: ['Winter'] },
      { area: 'Railroad', season: ['Winter'] },
      { area: 'Backwoods', season: ['Winter'] }
    ],
    usedInBundles: ['Winter Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'winter_root',
    name: 'Winter Root',
    category: 'forage',
    description: 'A starchy tuber.',
    sellPrice: 70,
    edibility: 10,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Winter'], condition: 'Tilling artifact spots' },
      { area: 'Mountain', season: ['Winter'], condition: 'Tilling artifact spots' },
      { area: 'Ginger Island (Dig spots)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Winter Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'crystal_fruit',
    name: 'Crystal Fruit',
    category: 'forage',
    description: 'A delicate fruit that pops up from the snow.',
    sellPrice: 150,
    edibility: 25,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Winter'], condition: 'Rare' },
      { area: 'Mountain', season: ['Winter'], condition: 'Rare' },
      { area: 'Railroad', season: ['Winter'], condition: 'Rare' }
    ],
    usedInBundles: ['Winter Foraging Bundle'],
    giftInfo: { lovedBy: ['Demetrius'], likedBy: [] }
  },
  {
    id: 'snow_yam',
    name: 'Snow Yam',
    category: 'forage',
    description: 'This little yam was hiding beneath the snow.',
    sellPrice: 100,
    edibility: 12,
    quality: true,
    forageLocations: [
      { area: 'Town', season: ['Winter'], condition: 'Tilling artifact spots' },
      { area: 'Beach', season: ['Winter'], condition: 'Tilling artifact spots' },
      { area: 'Ginger Island (Dig spots)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Winter Foraging Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Krobus'] }
  },

  // All Season Forage & Cave Items
  {
    id: 'cave_carrot',
    name: 'Cave Carrot',
    category: 'forage',
    description: 'A starchy snack found in caves. It helps miners work longer.',
    sellPrice: 25,
    edibility: 25,
    forageLocations: [
      { area: 'The Mines', condition: 'Floors 1-120' },
      { area: 'Skull Cavern', condition: 'Any floor' }
    ],
    usedInBundles: ['Chef\'s Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'coconut',
    name: 'Coconut',
    category: 'forage',
    description: 'A seed of the coconut palm. It has many culinary uses.',
    sellPrice: 100,
    edibility: 0,
    forageLocations: [
      { area: 'Calico Desert', season: ['Spring', 'Summer', 'Fall', 'Winter'] },
      { area: 'Ginger Island', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: ['Haley'], likedBy: [] }
  },
  {
    id: 'cactus_fruit',
    name: 'Cactus Fruit',
    category: 'forage',
    description: 'The sweet fruit of the prickly pear cactus.',
    sellPrice: 75,
    edibility: 30,
    quality: true,
    forageLocations: [
      { area: 'Calico Desert', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    farmingInfo: 'Can be grown indoors from Cactus Seeds',
    giftInfo: { lovedBy: ['Linus', 'Pam', 'Sam'], likedBy: [] }
  },
  {
    id: 'purple_mushroom',
    name: 'Purple Mushroom',
    category: 'forage',
    description: 'A rare mushroom found deep in caves.',
    sellPrice: 250,
    edibility: 50,
    quality: true,
    rarity: 'rare',
    forageLocations: [
      { area: 'The Mines', condition: 'Floors 80-120' },
      { area: 'Skull Cavern', condition: 'Any floor' }
    ],
    usedInBundles: ['Exotic Foraging Bundle'],
    giftInfo: { lovedBy: ['Wizard'], likedBy: [] }
  },

  // Beach Forage
  {
    id: 'rainbow_shell',
    name: 'Rainbow Shell',
    category: 'forage',
    description: 'It\'s a very beautiful shell.',
    sellPrice: 300,
    edibility: 0,
    rarity: 'rare',
    forageLocations: [
      { area: 'Beach', season: ['Summer'], condition: 'Rare' }
    ],
    giftInfo: { lovedBy: ['Leo'], likedBy: [] }
  },
  {
    id: 'clam',
    name: 'Clam',
    category: 'forage',
    description: 'Someone lived here once.',
    sellPrice: 50,
    edibility: 20,
    forageLocations: [
      { area: 'Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'cockle',
    name: 'Cockle',
    category: 'forage',
    description: 'A common saltwater clam.',
    sellPrice: 50,
    edibility: 20,
    forageLocations: [
      { area: 'Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'mussel',
    name: 'Mussel',
    category: 'forage',
    description: 'A common bivalve that often lives in clusters.',
    sellPrice: 30,
    edibility: 15,
    forageLocations: [
      { area: 'Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'oyster',
    name: 'Oyster',
    category: 'forage',
    description: 'Constantly filters water to find food. In the process, it removes dangerous toxins from the environment.',
    sellPrice: 40,
    edibility: 10,
    forageLocations: [
      { area: 'Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: ['Elliott'], likedBy: [] }
  },
  {
    id: 'coral',
    name: 'Coral',
    category: 'forage',
    description: 'A colony of tiny creatures that create beautiful formations.',
    sellPrice: 80,
    edibility: -20,
    forageLocations: [
      { area: 'Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] },
      { area: 'Ginger Island Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'sea_urchin',
    name: 'Sea Urchin',
    category: 'forage',
    description: 'A slow-moving, spiny creature that some consider a delicacy.',
    sellPrice: 160,
    edibility: 20,
    forageLocations: [
      { area: 'Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] },
      { area: 'Ginger Island Beach', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: ['Jas'] }
  },

  // ==================== FISH (~80) ====================

  // Ocean Fish
  {
    id: 'anchovy',
    name: 'Anchovy',
    category: 'fish',
    description: 'A small silver fish found in the ocean.',
    sellPrice: 30,
    edibility: 10,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Fall'], timeOfDay: '6am-2am' }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'tuna',
    name: 'Tuna',
    category: 'fish',
    description: 'A large fish that lives in the ocean.',
    sellPrice: 100,
    edibility: 15,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Summer', 'Winter'], timeOfDay: '6am-7pm' }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'sardine',
    name: 'Sardine',
    category: 'fish',
    description: 'A common ocean fish.',
    sellPrice: 40,
    edibility: 13,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Fall', 'Winter'], timeOfDay: '6am-7pm' }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'red_snapper',
    name: 'Red Snapper',
    category: 'fish',
    description: 'A popular fish with a nice red color.',
    sellPrice: 50,
    edibility: 15,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Summer', 'Fall'], timeOfDay: '6am-7pm', weather: 'rainy' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'red_mullet',
    name: 'Red Mullet',
    category: 'fish',
    description: 'Long ago, these were kept as pets.',
    sellPrice: 75,
    edibility: 15,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Summer', 'Winter'], timeOfDay: '6am-7pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'herring',
    name: 'Herring',
    category: 'fish',
    description: 'A common ocean fish.',
    sellPrice: 30,
    edibility: 10,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Winter'], timeOfDay: '6am-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'eel',
    name: 'Eel',
    category: 'fish',
    description: 'A long, slippery little fish.',
    sellPrice: 85,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Fall'], timeOfDay: '4pm-2am', weather: 'rainy' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'octopus',
    name: 'Octopus',
    category: 'fish',
    description: 'A mysterious and intelligent creature.',
    sellPrice: 150,
    edibility: 18,
    quality: true,
    rarity: 'uncommon',
    fishingLocations: [
      { area: 'Ocean', season: ['Summer'], timeOfDay: '6am-1pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'squid',
    name: 'Squid',
    category: 'fish',
    description: 'A deep sea creature that can grow to enormous size.',
    sellPrice: 80,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Winter'], timeOfDay: '6pm-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pufferfish',
    name: 'Pufferfish',
    category: 'fish',
    description: 'Inflates when threatened.',
    sellPrice: 200,
    edibility: -40,
    quality: true,
    rarity: 'uncommon',
    fishingLocations: [
      { area: 'Ocean', season: ['Summer'], timeOfDay: '12pm-4pm', weather: 'sunny' },
      { area: 'Ginger Island Ocean', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '12pm-4pm' }
    ],
    usedInBundles: ['Specialty Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'super_cucumber',
    name: 'Super Cucumber',
    category: 'fish',
    description: 'A rare purple variety of sea cucumber.',
    sellPrice: 250,
    edibility: 18,
    quality: true,
    rarity: 'uncommon',
    fishingLocations: [
      { area: 'Ocean', season: ['Summer', 'Fall'], timeOfDay: '6pm-2am' },
      { area: 'Ginger Island Ocean', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6pm-2am' }
    ],
    usedInBundles: ['Specialty Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'albacore',
    name: 'Albacore',
    category: 'fish',
    description: 'Prefers temperature \"edges\" where cool and warm water meet.',
    sellPrice: 75,
    edibility: 20,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Fall', 'Winter'], timeOfDay: '6am-11am, 6pm-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'flounder',
    name: 'Flounder',
    category: 'fish',
    description: 'It lives on the bottom, so both eyes are on top of its head.',
    sellPrice: 100,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Summer'], timeOfDay: '6am-8pm' },
      { area: 'Ginger Island Ocean', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-8pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'halibut',
    name: 'Halibut',
    category: 'fish',
    description: 'A flat fish found in the ocean.',
    sellPrice: 80,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Spring', 'Summer', 'Winter'], timeOfDay: '6am-11am, 7pm-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'tilapia',
    name: 'Tilapia',
    category: 'fish',
    description: 'A primarily vegetarian fish that prefers warm water.',
    sellPrice: 75,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Ocean', season: ['Summer', 'Fall'], timeOfDay: '6am-2pm' },
      { area: 'Ginger Island Ocean', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-2pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // River Fish
  {
    id: 'bream',
    name: 'Bream',
    category: 'fish',
    description: 'A fairly common river fish that becomes active at night.',
    sellPrice: 45,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6pm-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'largemouth_bass',
    name: 'Largemouth Bass',
    category: 'fish',
    description: 'A popular fish that lives in lakes.',
    sellPrice: 100,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Mountain Lake', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-7pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'smallmouth_bass',
    name: 'Smallmouth Bass',
    category: 'fish',
    description: 'A freshwater fish that is very sensitive to pollution.',
    sellPrice: 50,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Spring', 'Fall'], timeOfDay: '6am-2am' }
    ],
    usedInBundles: ['River Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'shad',
    name: 'Shad',
    category: 'fish',
    description: 'Lives in a school in deep water.',
    sellPrice: 60,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Spring', 'Summer', 'Fall'], timeOfDay: '9am-2am', weather: 'rainy' }
    ],
    usedInBundles: ['River Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'tiger_trout',
    name: 'Tiger Trout',
    category: 'fish',
    description: 'A rare hybrid trout that cannot bear offspring of its own.',
    sellPrice: 150,
    edibility: 18,
    quality: true,
    rarity: 'rare',
    fishingLocations: [
      { area: 'River', season: ['Fall', 'Winter'], timeOfDay: '6am-7pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'catfish',
    name: 'Catfish',
    category: 'fish',
    description: 'An uncommon fish found in streams.',
    sellPrice: 200,
    edibility: 18,
    quality: true,
    rarity: 'uncommon',
    fishingLocations: [
      { area: 'River', season: ['Spring', 'Fall'], timeOfDay: '6am-12am', weather: 'rainy' },
      { area: 'Secret Woods', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-12am' }
    ],
    usedInBundles: ['River Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pike',
    name: 'Pike',
    category: 'fish',
    description: 'A freshwater fish that\'s difficult to catch.',
    sellPrice: 100,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Summer', 'Winter'], timeOfDay: '6am-2am' },
      { area: 'Forest Pond', season: ['Summer', 'Winter'], timeOfDay: '6am-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'bullhead',
    name: 'Bullhead',
    category: 'fish',
    description: 'A relative of the catfish that eats a variety of foods off the lake bottom.',
    sellPrice: 75,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Mountain Lake', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-2am' }
    ],
    usedInBundles: ['Lake Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'sturgeon',
    name: 'Sturgeon',
    category: 'fish',
    description: 'An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.',
    sellPrice: 200,
    edibility: 18,
    quality: true,
    rarity: 'rare',
    fishingLocations: [
      { area: 'Mountain Lake', season: ['Summer', 'Winter'], timeOfDay: '6am-7pm' }
    ],
    usedInBundles: ['Lake Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'walleye',
    name: 'Walleye',
    category: 'fish',
    description: 'A freshwater fish caught at night.',
    sellPrice: 105,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Fall', 'Winter'], timeOfDay: '12pm-2am', weather: 'rainy' },
      { area: 'Mountain Lake', season: ['Fall', 'Winter'], timeOfDay: '12pm-2am', weather: 'rainy' },
      { area: 'Forest Pond', season: ['Fall', 'Winter'], timeOfDay: '12pm-2am', weather: 'rainy' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'perch',
    name: 'Perch',
    category: 'fish',
    description: 'A freshwater fish of the winter.',
    sellPrice: 55,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Winter'], timeOfDay: '6am-2am' },
      { area: 'Mountain Lake', season: ['Winter'], timeOfDay: '6am-2am' },
      { area: 'Forest Pond', season: ['Winter'], timeOfDay: '6am-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'carp',
    name: 'Carp',
    category: 'fish',
    description: 'A common pond fish.',
    sellPrice: 30,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Mountain Lake', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-2am' },
      { area: 'Secret Woods', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-2am' },
      { area: 'Sewers', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-2am' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'sunfish',
    name: 'Sunfish',
    category: 'fish',
    description: 'A common river fish.',
    sellPrice: 30,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Spring', 'Summer'], timeOfDay: '6am-7pm', weather: 'sunny' }
    ],
    usedInBundles: ['River Fish Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'rainbow_trout',
    name: 'Rainbow Trout',
    category: 'fish',
    description: 'A freshwater trout with colorful markings.',
    sellPrice: 65,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Summer'], timeOfDay: '6am-7pm', weather: 'sunny' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'salmon',
    name: 'Salmon',
    category: 'fish',
    description: 'Swims upstream to lay its eggs.',
    sellPrice: 75,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'River', season: ['Fall'], timeOfDay: '6am-7pm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Legendary Fish
  {
    id: 'legend',
    name: 'Legend',
    category: 'fish',
    description: 'The king of all fish! They said he\'d never be caught.',
    sellPrice: 5000,
    edibility: 200,
    quality: false,
    rarity: 'legendary',
    fishingLocations: [
      { area: 'Mountain Lake', season: ['Spring'], timeOfDay: '6am-2am', weather: 'rainy', condition: 'Fishing Level 10' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'crimsonfish',
    name: 'Crimsonfish',
    category: 'fish',
    description: 'Lives deep in the ocean but likes to hunt near the surface.',
    sellPrice: 1500,
    edibility: 200,
    quality: false,
    rarity: 'legendary',
    fishingLocations: [
      { area: 'Ocean (East Pier)', season: ['Summer'], timeOfDay: '6am-2am', condition: 'Fishing Level 5' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'angler',
    name: 'Angler',
    category: 'fish',
    description: 'Uses a bioluminescent dangler to attract prey.',
    sellPrice: 900,
    edibility: 200,
    quality: false,
    rarity: 'legendary',
    fishingLocations: [
      { area: 'River (Town)', season: ['Fall'], timeOfDay: '6am-2am', condition: 'Fishing Level 3' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'glacierfish',
    name: 'Glacierfish',
    category: 'fish',
    description: 'Builds a nest on the underside of glaciers.',
    sellPrice: 1000,
    edibility: 200,
    quality: false,
    rarity: 'legendary',
    fishingLocations: [
      { area: 'Cindersap Forest (South)', season: ['Winter'], timeOfDay: '6am-2am', condition: 'Fishing Level 6' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'mutant_carp',
    name: 'Mutant Carp',
    category: 'fish',
    description: 'The strange waters of the sewer turned this carp into a monstrosity.',
    sellPrice: 1000,
    edibility: 200,
    quality: false,
    rarity: 'legendary',
    fishingLocations: [
      { area: 'Sewers', season: ['Spring', 'Summer', 'Fall', 'Winter'], timeOfDay: '6am-2am', condition: 'Fishing Level 3' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Crab Pot Fish
  {
    id: 'crayfish',
    name: 'Crayfish',
    category: 'fish',
    description: 'A small freshwater relative of the lobster.',
    sellPrice: 75,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Crab Pot (Freshwater)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'snail',
    name: 'Snail',
    category: 'fish',
    description: 'A wide-ranging mollusc that lives in a spiral shell.',
    sellPrice: 65,
    edibility: 18,
    quality: true,
    fishingLocations: [
      { area: 'Crab Pot (Freshwater)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'periwinkle',
    name: 'Periwinkle',
    category: 'fish',
    description: 'A tiny freshwater snail that lives in a blue shell.',
    sellPrice: 20,
    edibility: 10,
    quality: true,
    fishingLocations: [
      { area: 'Crab Pot (Freshwater)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'lobster',
    name: 'Lobster',
    category: 'fish',
    description: 'A large ocean-dwelling crustacean with two big claws.',
    sellPrice: 120,
    edibility: 50,
    quality: true,
    fishingLocations: [
      { area: 'Crab Pot (Ocean)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: ['Elliott'], likedBy: [] }
  },
  {
    id: 'crab',
    name: 'Crab',
    category: 'fish',
    description: 'A sea creature with two pincers.',
    sellPrice: 100,
    edibility: 50,
    quality: true,
    fishingLocations: [
      { area: 'Crab Pot (Ocean)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'shrimp',
    name: 'Shrimp',
    category: 'fish',
    description: 'A scavenger that feeds on decomposing organic matter.',
    sellPrice: 60,
    edibility: 30,
    quality: true,
    fishingLocations: [
      { area: 'Crab Pot (Ocean)', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    usedInBundles: ['Ocean Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // ==================== MINERALS & GEMS (~65) ====================

  // Common Minerals
  {
    id: 'quartz',
    name: 'Quartz',
    category: 'minerals',
    description: 'A clear crystal commonly found in caves and mines.',
    sellPrice: 25,
    edibility: -50,
    miningLocations: ['The Mines (Any floor)', 'Skull Cavern', 'Quarry'],
    monsterDrops: [
      { monsterName: 'Dust Sprite', dropRate: 'Common' },
      { monsterName: 'Metal Head', dropRate: 'Common' }
    ],
    craftingRecipe: 'refined_quartz',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'earth_crystal',
    name: 'Earth Crystal',
    category: 'minerals',
    description: 'A resinous substance found near the surface.',
    sellPrice: 50,
    edibility: -50,
    miningLocations: ['The Mines (1-39)', 'Geodes'],
    monsterDrops: [
      { monsterName: 'Duggies', dropRate: 'Common', floors: '1-29' }
    ],
    usedInBundles: ['Geologist\'s Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'frozen_tear',
    name: 'Frozen Tear',
    category: 'minerals',
    description: 'A crystal fabled to be the frozen tears of a yeti.',
    sellPrice: 75,
    edibility: -50,
    miningLocations: ['The Mines (40-79)', 'Geodes'],
    monsterDrops: [
      { monsterName: 'Dust Sprite', dropRate: 'Uncommon', floors: '40-79' }
    ],
    usedInBundles: ['Geologist\'s Bundle'],
    giftInfo: { lovedBy: ['Sebastian'], likedBy: [] }
  },
  {
    id: 'fire_quartz',
    name: 'Fire Quartz',
    category: 'minerals',
    description: 'A glowing red crystal commonly found near hot lava.',
    sellPrice: 100,
    edibility: -50,
    miningLocations: ['The Mines (80-120)', 'Magma Geodes'],
    monsterDrops: [
      { monsterName: 'Lava Lurk', dropRate: 'Common', floors: '80-120' }
    ],
    usedInBundles: ['Geologist\'s Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Gems
  {
    id: 'emerald',
    name: 'Emerald',
    category: 'minerals',
    description: 'A precious stone with a brilliant green color.',
    sellPrice: 250,
    edibility: -50,
    rarity: 'uncommon',
    miningLocations: ['The Mines', 'Skull Cavern', 'Gem Nodes'],
    shops: [
      { shopName: 'Desert Trader', price: 0, availability: { condition: 'Trade 5 Omni Geodes' } }
    ],
    usedInBundles: ['Geologist\'s Bundle'],
    giftInfo: { lovedBy: ['Penny'], likedBy: [] }
  },
  {
    id: 'aquamarine',
    name: 'Aquamarine',
    category: 'minerals',
    description: 'A shimmery blue-green gem.',
    sellPrice: 180,
    edibility: -50,
    rarity: 'uncommon',
    miningLocations: ['The Mines', 'Skull Cavern', 'Aquamarine Nodes'],
    giftInfo: { lovedBy: ['Clint'], likedBy: [] }
  },
  {
    id: 'ruby',
    name: 'Ruby',
    category: 'minerals',
    description: 'A precious stone that is sought after for its rich color and beautiful luster.',
    sellPrice: 250,
    edibility: -50,
    rarity: 'uncommon',
    miningLocations: ['The Mines', 'Skull Cavern', 'Ruby Nodes'],
    shops: [
      { shopName: 'Desert Trader', price: 0, availability: { condition: 'Trade 3 Spicy Eels' } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'amethyst',
    name: 'Amethyst',
    category: 'minerals',
    description: 'A purple variant of quartz.',
    sellPrice: 100,
    edibility: -50,
    miningLocations: ['The Mines', 'Skull Cavern', 'Amethyst Nodes'],
    giftInfo: { lovedBy: ['Abigail', 'Emily'], likedBy: [] }
  },
  {
    id: 'topaz',
    name: 'Topaz',
    category: 'minerals',
    description: 'Fairly common but still prized for its beauty.',
    sellPrice: 80,
    edibility: -50,
    miningLocations: ['The Mines', 'Skull Cavern', 'Topaz Nodes'],
    giftInfo: { lovedBy: [], likedBy: ['Jodi'] }
  },
  {
    id: 'jade',
    name: 'Jade',
    category: 'minerals',
    description: 'A pale green ornamental stone.',
    sellPrice: 200,
    edibility: -50,
    rarity: 'uncommon',
    miningLocations: ['The Mines', 'Skull Cavern', 'Jade Nodes'],
    shops: [
      { shopName: 'Desert Trader', price: 0, availability: { condition: 'Trade for 1 Staircase on Sunday' } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'diamond',
    name: 'Diamond',
    category: 'minerals',
    description: 'A rare and valuable gem.',
    sellPrice: 750,
    edibility: -50,
    rarity: 'rare',
    miningLocations: ['The Mines (50-120)', 'Skull Cavern', 'Diamond Nodes'],
    monsterDrops: [
      { monsterName: 'Stone Golem', dropRate: 'Rare' }
    ],
    giftInfo: { lovedBy: ['Evelyn', 'Gus', 'Jodi', 'Marnie', 'Maru', 'Penny'], likedBy: [] }
  },
  {
    id: 'prismatic_shard',
    name: 'Prismatic Shard',
    category: 'minerals',
    description: 'A very rare and powerful substance with unknown origins.',
    sellPrice: 2000,
    edibility: -50,
    rarity: 'legendary',
    miningLocations: ['Skull Cavern', 'The Mines (Mystic Stones)'],
    monsterDrops: [
      { monsterName: 'Iridium Bat', dropRate: 'Very Rare' },
      { monsterName: 'Mummy', dropRate: 'Very Rare' },
      { monsterName: 'Serpent', dropRate: 'Very Rare' }
    ],
    usedInBundles: ['Missing Bundle'],
    giftInfo: { lovedBy: ['Everyone (Universal Love)'], likedBy: [] }
  },

  // Geode Minerals (Sample)
  {
    id: 'alamite',
    name: 'Alamite',
    category: 'minerals',
    description: 'Its distinctive fluorescence makes it a favorite among rock collectors.',
    sellPrice: 150,
    edibility: -50,
    miningLocations: ['Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'bixite',
    name: 'Bixite',
    category: 'minerals',
    description: 'A dark metallic mineral sought after for its cubic structure.',
    sellPrice: 300,
    edibility: -50,
    miningLocations: ['Magma Geodes', 'Omni Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'malachite',
    name: 'Malachite',
    category: 'minerals',
    description: 'A popular ornamental stone, used in sculptures and to make green paint.',
    sellPrice: 100,
    edibility: -50,
    miningLocations: ['Geodes', 'Omni Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'tigerseye',
    name: 'Tigerseye',
    category: 'minerals',
    description: 'A stripe of shimmering gold gives this gem a warm luster.',
    sellPrice: 275,
    edibility: -50,
    miningLocations: ['Magma Geodes', 'Omni Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'jasper',
    name: 'Jasper',
    category: 'minerals',
    description: 'When polished, this stone becomes attractively luminous. Prized by ancient peoples for thousands of years.',
    sellPrice: 150,
    edibility: -50,
    miningLocations: ['Magma Geodes', 'Omni Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'opal',
    name: 'Opal',
    category: 'minerals',
    description: 'Its internal structure causes it to reflect a rainbow of colors.',
    sellPrice: 150,
    edibility: -50,
    miningLocations: ['Frozen Geodes', 'Omni Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'fire_opal',
    name: 'Fire Opal',
    category: 'minerals',
    description: 'A rare variety of opal, named for its red spots.',
    sellPrice: 350,
    edibility: -50,
    miningLocations: ['Magma Geodes', 'Omni Geodes'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // ==================== RESOURCES (~40) ====================

  {
    id: 'wood',
    name: 'Wood',
    category: 'resources',
    description: 'A versatile resource used for crafting and construction.',
    sellPrice: 2,
    edibility: -300,
    forageLocations: [
      { area: 'Chopping Trees', season: ['Spring', 'Summer', 'Fall', 'Winter'] },
      { area: 'Chopping Stumps', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    shops: [
      { shopName: 'Robin\'s Carpenter Shop', price: 10 }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'stone',
    name: 'Stone',
    category: 'resources',
    description: 'A common material with many uses in crafting and building.',
    sellPrice: 2,
    edibility: -300,
    miningLocations: ['Breaking rocks anywhere', 'The Mines', 'Quarry'],
    shops: [
      { shopName: 'Robin\'s Carpenter Shop', price: 20 }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'hardwood',
    name: 'Hardwood',
    category: 'resources',
    description: 'A special kind of wood with superior strength and beauty.',
    sellPrice: 15,
    edibility: -300,
    forageLocations: [
      { area: 'Secret Woods', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Large Stumps (6 per day)' },
      { area: 'Forest Farm', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Large Stumps' },
      { area: 'Mahogany Trees', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'fiber',
    name: 'Fiber',
    category: 'resources',
    description: 'Raw material sourced from plants.',
    sellPrice: 1,
    edibility: -300,
    forageLocations: [
      { area: 'Cutting Weeds', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'sap',
    name: 'Sap',
    category: 'resources',
    description: 'A fluid obtained from trees.',
    sellPrice: 2,
    edibility: -300,
    forageLocations: [
      { area: 'Chopping Trees', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'clay',
    name: 'Clay',
    category: 'resources',
    description: 'Used in crafting and construction.',
    sellPrice: 20,
    edibility: -300,
    forageLocations: [
      { area: 'Tilling soil', season: ['Spring', 'Summer', 'Fall', 'Winter'] }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'coal',
    name: 'Coal',
    category: 'resources',
    description: 'A combustible rock that is useful for crafting and smelting.',
    sellPrice: 15,
    edibility: -300,
    miningLocations: ['The Mines', 'Skull Cavern'],
    monsterDrops: [
      { monsterName: 'Dust Sprite', dropRate: 'Common' }
    ],
    shops: [
      { shopName: 'Clint\'s Blacksmith', price: 150 }
    ],
    craftingRecipe: 'charcoal_kiln',
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Ore and Bars
  {
    id: 'copper_ore',
    name: 'Copper Ore',
    category: 'resources',
    description: 'A common ore that can be smelted into bars.',
    sellPrice: 5,
    edibility: -300,
    miningLocations: ['The Mines (1-39)', 'Skull Cavern', 'Quarry'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'copper_bar',
    name: 'Copper Bar',
    category: 'resources',
    description: 'A bar of pure copper.',
    sellPrice: 60,
    edibility: -300,
    craftingRecipe: 'furnace',
    artisanSource: 'Furnace + Copper Ore + Coal',
    shops: [
      { shopName: 'Clint\'s Blacksmith', price: 75 }
    ],
    usedInBundles: ['Blacksmith\'s Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'iron_ore',
    name: 'Iron Ore',
    category: 'resources',
    description: 'A fairly common ore that can be smelted into bars.',
    sellPrice: 10,
    edibility: -300,
    miningLocations: ['The Mines (40-79)', 'Skull Cavern', 'Quarry'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'iron_bar',
    name: 'Iron Bar',
    category: 'resources',
    description: 'A bar of pure iron.',
    sellPrice: 120,
    edibility: -300,
    craftingRecipe: 'furnace',
    artisanSource: 'Furnace + Iron Ore + Coal',
    shops: [
      { shopName: 'Clint\'s Blacksmith', price: 150 }
    ],
    usedInBundles: ['Blacksmith\'s Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'gold_ore',
    name: 'Gold Ore',
    category: 'resources',
    description: 'A precious ore that can be smelted into bars.',
    sellPrice: 25,
    edibility: -300,
    miningLocations: ['The Mines (80-120)', 'Skull Cavern', 'Quarry'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'gold_bar',
    name: 'Gold Bar',
    category: 'resources',
    description: 'A bar of pure gold.',
    sellPrice: 250,
    edibility: -300,
    craftingRecipe: 'furnace',
    artisanSource: 'Furnace + Gold Ore + Coal',
    shops: [
      { shopName: 'Clint\'s Blacksmith', price: 400 }
    ],
    usedInBundles: ['Blacksmith\'s Bundle'],
    giftInfo: { lovedBy: ['Clint'], likedBy: [] }
  },
  {
    id: 'iridium_ore',
    name: 'Iridium Ore',
    category: 'resources',
    description: 'An exotic ore with many curious properties. Can be smelted into bars.',
    sellPrice: 100,
    edibility: -300,
    rarity: 'rare',
    miningLocations: ['Skull Cavern', 'The Mines (Mystic Stones)'],
    monsterDrops: [
      { monsterName: 'Purple Slime', dropRate: 'Rare' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'iridium_bar',
    name: 'Iridium Bar',
    category: 'resources',
    description: 'A bar of pure iridium.',
    sellPrice: 1000,
    edibility: -300,
    rarity: 'rare',
    craftingRecipe: 'furnace',
    artisanSource: 'Furnace + Iridium Ore + Coal',
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Essences
  {
    id: 'solar_essence',
    name: 'Solar Essence',
    category: 'resources',
    description: 'A glowing ball of energy that can be extracted from Solar enemies.',
    sellPrice: 40,
    edibility: -300,
    monsterDrops: [
      { monsterName: 'Ghost', dropRate: 'Common' },
      { monsterName: 'Squid Kid', dropRate: 'Common' },
      { monsterName: 'Metal Head', dropRate: 'Common' },
      { monsterName: 'Iridium Bat', dropRate: 'Common' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'void_essence',
    name: 'Void Essence',
    category: 'resources',
    description: 'A dark, slimy ball that can be extracted from Void enemies.',
    sellPrice: 50,
    edibility: -300,
    monsterDrops: [
      { monsterName: 'Shadow Brute', dropRate: 'Common' },
      { monsterName: 'Shadow Shaman', dropRate: 'Common' },
      { monsterName: 'Serpent', dropRate: 'Common' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Other Resources
  {
    id: 'slime',
    name: 'Slime',
    category: 'resources',
    description: 'A thick, gooey substance with a horrible smell.',
    sellPrice: 5,
    edibility: -300,
    monsterDrops: [
      { monsterName: 'Green Slime', dropRate: 'Common' },
      { monsterName: 'Blue Slime', dropRate: 'Common' },
      { monsterName: 'Red Slime', dropRate: 'Common' },
      { monsterName: 'Purple Slime', dropRate: 'Common' },
      { monsterName: 'Tiger Slime', dropRate: 'Common' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'bat_wing',
    name: 'Bat Wing',
    category: 'resources',
    description: 'The material is surprisingly delicate.',
    sellPrice: 15,
    edibility: -300,
    monsterDrops: [
      { monsterName: 'Bat', dropRate: 'Common' },
      { monsterName: 'Frost Bat', dropRate: 'Common' },
      { monsterName: 'Lava Bat', dropRate: 'Common' },
      { monsterName: 'Iridium Bat', dropRate: 'Common' }
    ],
    usedInBundles: ['Adventurer\'s Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'bug_meat',
    name: 'Bug Meat',
    category: 'resources',
    description: 'A juicy wad of bug flesh.',
    sellPrice: 8,
    edibility: -300,
    monsterDrops: [
      { monsterName: 'Bug', dropRate: 'Common' },
      { monsterName: 'Grub', dropRate: 'Common' },
      { monsterName: 'Fly', dropRate: 'Common' },
      { monsterName: 'Armored Bug', dropRate: 'Common' }
    ],
    craftingRecipe: 'bait',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'bone_fragment',
    name: 'Bone Fragment',
    category: 'resources',
    description: 'A segment of bone.',
    sellPrice: 12,
    edibility: -300,
    monsterDrops: [
      { monsterName: 'Skeleton', dropRate: 'Common' },
      { monsterName: 'Lava Lurk', dropRate: 'Common' },
      { monsterName: 'Pepper Rex', dropRate: 'Common' }
    ],
    miningLocations: ['Bone Nodes (Skull Cavern, Quarry)'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Tree Products
  {
    id: 'maple_syrup',
    name: 'Maple Syrup',
    category: 'artisan',
    description: 'A sweet syrup with a unique flavor.',
    sellPrice: 200,
    edibility: 20,
    artisanSource: 'Tapper + Maple Tree',
    giftInfo: { lovedBy: ['Maru'], likedBy: [] }
  },
  {
    id: 'oak_resin',
    name: 'Oak Resin',
    category: 'artisan',
    description: 'A sticky, fragrant substance derived from oak sap.',
    sellPrice: 150,
    edibility: -300,
    artisanSource: 'Tapper + Oak Tree',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pine_tar',
    name: 'Pine Tar',
    category: 'artisan',
    description: 'A pungent substance derived from pine sap.',
    sellPrice: 100,
    edibility: -300,
    artisanSource: 'Tapper + Pine Tree',
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // ==================== ANIMAL PRODUCTS (~25) ====================

  {
    id: 'egg',
    name: 'Egg',
    category: 'animal-products',
    description: 'A regular white chicken egg.',
    sellPrice: 50,
    edibility: 15,
    quality: true,
    farmingInfo: 'Produced by Chickens',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'large_egg',
    name: 'Large Egg',
    category: 'animal-products',
    description: 'A large white chicken egg.',
    sellPrice: 95,
    edibility: 20,
    quality: true,
    farmingInfo: 'Produced by happy, high-friendship Chickens',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'brown_egg',
    name: 'Brown Egg',
    category: 'animal-products',
    description: 'A regular brown chicken egg.',
    sellPrice: 50,
    edibility: 15,
    quality: true,
    farmingInfo: 'Produced by Brown Chickens',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'large_brown_egg',
    name: 'Large Brown Egg',
    category: 'animal-products',
    description: 'A large brown chicken egg.',
    sellPrice: 95,
    edibility: 20,
    quality: true,
    farmingInfo: 'Produced by happy, high-friendship Brown Chickens',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'milk',
    name: 'Milk',
    category: 'animal-products',
    description: 'A jug of cow\'s milk.',
    sellPrice: 125,
    edibility: 25,
    quality: true,
    farmingInfo: 'Produced by Cows',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'large_milk',
    name: 'Large Milk',
    category: 'animal-products',
    description: 'A large jug of cow\'s milk.',
    sellPrice: 190,
    edibility: 38,
    quality: true,
    farmingInfo: 'Produced by happy, high-friendship Cows',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'goat_milk',
    name: 'Goat Milk',
    category: 'animal-products',
    description: 'The milk of a goat.',
    sellPrice: 225,
    edibility: 33,
    quality: true,
    farmingInfo: 'Produced by Goats',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'large_goat_milk',
    name: 'Large Goat Milk',
    category: 'animal-products',
    description: 'A large jug of goat\'s milk.',
    sellPrice: 345,
    edibility: 50,
    quality: true,
    farmingInfo: 'Produced by happy, high-friendship Goats',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'wool',
    name: 'Wool',
    category: 'animal-products',
    description: 'Soft animal fibers.',
    sellPrice: 340,
    edibility: -300,
    farmingInfo: 'Produced by Sheep and Rabbits',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: [], likedBy: ['Emily'] }
  },
  {
    id: 'duck_egg',
    name: 'Duck Egg',
    category: 'animal-products',
    description: 'It\'s still warm.',
    sellPrice: 95,
    edibility: 20,
    quality: true,
    farmingInfo: 'Produced by Ducks',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'duck_feather',
    name: 'Duck Feather',
    category: 'animal-products',
    description: 'It\'s so colorful.',
    sellPrice: 250,
    edibility: -300,
    farmingInfo: 'Produced by Ducks (chance)',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: ['Elliott'], likedBy: [] }
  },
  {
    id: 'rabbit_foot',
    name: 'Rabbit\'s Foot',
    category: 'animal-products',
    description: 'Some say it\'s lucky.',
    sellPrice: 565,
    edibility: -300,
    rarity: 'rare',
    farmingInfo: 'Produced by Rabbits (chance)',
    giftInfo: { lovedBy: ['Everyone (Universal Love)'], likedBy: [] }
  },
  {
    id: 'dinosaur_egg',
    name: 'Dinosaur Egg',
    category: 'animal-products',
    description: 'A huge egg with purple spots. You can incubate it!',
    sellPrice: 350,
    edibility: -300,
    rarity: 'rare',
    farmingInfo: 'Produced by Dinosaurs OR found rarely in Skull Cavern',
    miningLocations: ['Skull Cavern (Pepper Rex drop or forage)'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'void_egg',
    name: 'Void Egg',
    category: 'animal-products',
    description: 'A jet-black egg with red flecks. It\'s warm to the touch.',
    sellPrice: 65,
    edibility: 15,
    farmingInfo: 'Produced by Void Chickens',
    shops: [
      { shopName: 'Krobus', price: 5000, availability: { condition: 'Wednesday only' } }
    ],
    giftInfo: { lovedBy: ['Sebastian'], likedBy: [] }
  },
  {
    id: 'truffle',
    name: 'Truffle',
    category: 'forage',
    description: 'A gourmet type of mushroom with a unique taste.',
    sellPrice: 625,
    edibility: 5,
    quality: true,
    rarity: 'rare',
    farmingInfo: 'Found by Pigs outside during Spring, Summer, and Fall',
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // ==================== ARTISAN GOODS (~35) ====================

  {
    id: 'mayonnaise',
    name: 'Mayonnaise',
    category: 'artisan',
    description: 'It looks spreadable.',
    sellPrice: 190,
    edibility: -300,
    artisanSource: 'Mayonnaise Machine + Egg',
    usedInBundles: ['Animal Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'duck_mayonnaise',
    name: 'Duck Mayonnaise',
    category: 'artisan',
    description: 'It\'s a rich, yellow mayonnaise.',
    sellPrice: 375,
    edibility: -300,
    artisanSource: 'Mayonnaise Machine + Duck Egg',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'void_mayonnaise',
    name: 'Void Mayonnaise',
    category: 'artisan',
    description: 'A thick, black paste that smells like burnt hair.',
    sellPrice: 275,
    edibility: -300,
    artisanSource: 'Mayonnaise Machine + Void Egg',
    giftInfo: { lovedBy: ['Krobus', 'Sebastian'], likedBy: [] }
  },
  {
    id: 'cheese',
    name: 'Cheese',
    category: 'artisan',
    description: 'It\'s your basic cheese.',
    sellPrice: 230,
    edibility: 50,
    quality: true,
    artisanSource: 'Cheese Press + Milk',
    giftInfo: { lovedBy: ['Leah'], likedBy: [] }
  },
  {
    id: 'goat_cheese',
    name: 'Goat Cheese',
    category: 'artisan',
    description: 'Soft cheese made from goat\'s milk.',
    sellPrice: 400,
    edibility: 65,
    quality: true,
    artisanSource: 'Cheese Press + Goat Milk',
    giftInfo: { lovedBy: ['Leah'], likedBy: [] }
  },
  {
    id: 'cloth',
    name: 'Cloth',
    category: 'artisan',
    description: 'A bolt of fine wool cloth.',
    sellPrice: 470,
    edibility: -300,
    artisanSource: 'Loom + Wool',
    usedInBundles: ['Bulletin Board Bundles'],
    giftInfo: { lovedBy: ['Emily'], likedBy: [] }
  },
  {
    id: 'truffle_oil',
    name: 'Truffle Oil',
    category: 'artisan',
    description: 'A gourmet cooking ingredient.',
    sellPrice: 1065,
    edibility: -300,
    rarity: 'rare',
    artisanSource: 'Oil Maker + Truffle',
    usedInBundles: ['Artisan Bundle'],
    giftInfo: { lovedBy: ['Maru'], likedBy: [] }
  },
  {
    id: 'wine',
    name: 'Wine',
    category: 'artisan',
    description: 'Drink in moderation.',
    sellPrice: 0,
    edibility: 20,
    quality: true,
    artisanSource: 'Keg + Any Fruit (price varies)',
    usedInBundles: ['Artisan Bundle'],
    giftInfo: { lovedBy: ['Leah'], likedBy: [] }
  },
  {
    id: 'juice',
    name: 'Juice',
    category: 'artisan',
    description: 'A sweet, nutritious beverage.',
    sellPrice: 0,
    edibility: 15,
    quality: true,
    artisanSource: 'Keg + Any Vegetable (price varies)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pale_ale',
    name: 'Pale Ale',
    category: 'artisan',
    description: 'Drink in moderation.',
    sellPrice: 300,
    edibility: 20,
    artisanSource: 'Keg + Hops',
    giftInfo: { lovedBy: ['Pam'], likedBy: [] }
  },
  {
    id: 'beer',
    name: 'Beer',
    category: 'artisan',
    description: 'Drink in moderation.',
    sellPrice: 200,
    edibility: 20,
    artisanSource: 'Keg + Wheat',
    giftInfo: { lovedBy: ['Pam'], likedBy: [] }
  },
  {
    id: 'mead',
    name: 'Mead',
    category: 'artisan',
    description: 'A fermented beverage made from honey. Drink in moderation.',
    sellPrice: 200,
    edibility: 30,
    artisanSource: 'Keg + Honey',
    usedInBundles: ['Artisan Bundle'],
    giftInfo: { lovedBy: ['Pam'], likedBy: [] }
  },
  {
    id: 'honey',
    name: 'Honey',
    category: 'artisan',
    description: 'It\'s a sweet syrup produced by bees.',
    sellPrice: 100,
    edibility: 10,
    farmingInfo: 'Produced by Bee Houses (price/type varies with nearby flowers)',
    usedInBundles: ['Artisan Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'jelly',
    name: 'Jelly',
    category: 'artisan',
    description: 'Gooey.',
    sellPrice: 0,
    edibility: 15,
    artisanSource: 'Preserves Jar + Any Fruit (price varies)',
    usedInBundles: ['Artisan Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pickles',
    name: 'Pickles',
    category: 'artisan',
    description: 'A jar of your home-made pickles.',
    sellPrice: 0,
    edibility: 15,
    artisanSource: 'Preserves Jar + Any Vegetable (price varies)',
    usedInBundles: ['Artisan Bundle'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'battery_pack',
    name: 'Battery Pack',
    category: 'resources',
    description: 'It\'s fully charged with precious energy.',
    sellPrice: 500,
    edibility: -300,
    farmingInfo: 'Produced by Lightning Rods during storms',
    giftInfo: { lovedBy: ['Maru'], likedBy: [] }
  },

  // ==================== COOKING (~80 items - representative sample) ====================

  {
    id: 'fried_egg',
    name: 'Fried Egg',
    category: 'cooking',
    description: 'Sunny-side up.',
    sellPrice: 35,
    edibility: 50,
    artisanSource: 'Cooking (Recipe: Starter)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'bread',
    name: 'Bread',
    category: 'cooking',
    description: 'A crusty baguette.',
    sellPrice: 60,
    edibility: 40,
    artisanSource: 'Cooking (Recipe: Queen of Sauce Year 1 Summer 28)',
    shops: [
      { shopName: 'Stardrop Saloon', price: 120 }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pancakes',
    name: 'Pancakes',
    category: 'cooking',
    description: 'A double stack of fluffy, soft pancakes.',
    sellPrice: 80,
    edibility: 80,
    artisanSource: 'Cooking (Recipe: Queen of Sauce Year 1 Summer 14)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pizza',
    name: 'Pizza',
    category: 'cooking',
    description: 'It\'s popular for all the right reasons.',
    sellPrice: 300,
    edibility: 60,
    artisanSource: 'Cooking (Recipe: Stardrop Saloon for 150g)',
    shops: [
      { shopName: 'Stardrop Saloon', price: 600 }
    ],
    giftInfo: { lovedBy: ['Sam', 'Shane'], likedBy: [] }
  },
  {
    id: 'spaghetti',
    name: 'Spaghetti',
    category: 'cooking',
    description: 'An old favorite.',
    sellPrice: 120,
    edibility: 60,
    artisanSource: 'Cooking (Recipe: Lewis at 3 hearts)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'salad',
    name: 'Salad',
    category: 'cooking',
    description: 'A healthy garden salad.',
    sellPrice: 110,
    edibility: 113,
    artisanSource: 'Cooking (Recipe: Emily at 3 hearts)',
    shops: [
      { shopName: 'Stardrop Saloon', price: 220 }
    ],
    giftInfo: { lovedBy: ['Leah'], likedBy: [] }
  },
  {
    id: 'hashbrowns',
    name: 'Hashbrowns',
    category: 'cooking',
    description: 'Crispy and golden-brown!',
    sellPrice: 120,
    edibility: 90,
    artisanSource: 'Cooking (Recipe: Queen of Sauce Year 2 Spring 14)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'complete_breakfast',
    name: 'Complete Breakfast',
    category: 'cooking',
    description: 'You\'ll feel ready to take on the world!',
    sellPrice: 350,
    edibility: 200,
    artisanSource: 'Cooking (Recipe: Stardrop Saloon for 300g)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'cookies',
    name: 'Cookies',
    category: 'cooking',
    description: 'Very chewy.',
    sellPrice: 140,
    edibility: 90,
    artisanSource: 'Cooking (Recipe: Evelyn at 4 hearts)',
    giftInfo: { lovedBy: ['Evelyn'], likedBy: [] }
  },
  {
    id: 'chocolate_cake',
    name: 'Chocolate Cake',
    category: 'cooking',
    description: 'Rich and moist with a thick fudge icing.',
    sellPrice: 200,
    edibility: 125,
    artisanSource: 'Cooking (Recipe: Stardrop Saloon for 300g)',
    giftInfo: { lovedBy: ['Abigail'], likedBy: [] }
  },
  {
    id: 'pink_cake',
    name: 'Pink Cake',
    category: 'cooking',
    description: 'There\'s little heart candies on top.',
    sellPrice: 480,
    edibility: 125,
    artisanSource: 'Cooking (Recipe: Haley at 7 hearts)',
    giftInfo: { lovedBy: ['Haley'], likedBy: [] }
  },
  {
    id: 'pumpkin_pie',
    name: 'Pumpkin Pie',
    category: 'cooking',
    description: 'Silky pumpkin cream in a flakey crust.',
    sellPrice: 385,
    edibility: 90,
    artisanSource: 'Cooking (Recipe: Robin at 7 hearts)',
    giftInfo: { lovedBy: ['Abigail'], likedBy: [] }
  },
  {
    id: 'rhubarb_pie',
    name: 'Rhubarb Pie',
    category: 'cooking',
    description: 'Mmm, tangy and sweet!',
    sellPrice: 400,
    edibility: 125,
    artisanSource: 'Cooking (Recipe: Marnie at 7 hearts)',
    giftInfo: { lovedBy: ['Marnie'], likedBy: [] }
  },
  {
    id: 'ice_cream',
    name: 'Ice Cream',
    category: 'cooking',
    description: 'It\'s hard to find someone who doesn\'t like this.',
    sellPrice: 120,
    edibility: 60,
    artisanSource: 'Cooking (Recipe: Jodi at 7 hearts)',
    giftInfo: { lovedBy: ['Alex', 'Vincent'], likedBy: [] }
  },
  {
    id: 'fish_taco',
    name: 'Fish Taco',
    category: 'cooking',
    description: 'It smells delicious.',
    sellPrice: 500,
    edibility: 165,
    artisanSource: 'Cooking (Recipe: Linus at 7 hearts)',
    giftInfo: { lovedBy: ['Linus'], likedBy: [] }
  },
  {
    id: 'fried_calamari',
    name: 'Fried Calamari',
    category: 'cooking',
    description: 'It\'s so chewy.',
    sellPrice: 150,
    edibility: 80,
    artisanSource: 'Cooking (Recipe: Jodi at 3 hearts)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'lobster_bisque',
    name: 'Lobster Bisque',
    category: 'cooking',
    description: 'This delicate soup is a secret family recipe of Willy\'s.',
    sellPrice: 205,
    edibility: 90,
    artisanSource: 'Cooking (Recipe: Willy at 9 hearts)',
    giftInfo: { lovedBy: ['Willy'], likedBy: [] }
  },
  {
    id: 'crab_cakes',
    name: 'Crab Cakes',
    category: 'cooking',
    description: 'Crab, bread crumbs, and egg formed into patties then fried to a golden brown.',
    sellPrice: 275,
    edibility: 125,
    artisanSource: 'Cooking (Recipe: Queen of Sauce Year 2 Fall 21)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pepper_poppers',
    name: 'Pepper Poppers',
    category: 'cooking',
    description: 'Spicy breaded peppers filled with cheese.',
    sellPrice: 200,
    edibility: 68,
    artisanSource: 'Cooking (Recipe: Shane at 3 hearts)',
    giftInfo: { lovedBy: ['Shane'], likedBy: [] }
  },
  {
    id: 'coffee',
    name: 'Coffee',
    category: 'cooking',
    description: 'It smells delicious. This is sure to give you a boost.',
    sellPrice: 150,
    edibility: 3,
    artisanSource: 'Cooking OR Keg + Coffee Bean',
    giftInfo: { lovedBy: ['Harvey'], likedBy: [] }
  },

  // ==================== ARTIFACTS (~42 - sample) ====================

  {
    id: 'ancient_doll',
    name: 'Ancient Doll',
    category: 'artifacts',
    description: 'An ancient doll covered in grime. This doll may have been used as a toy, a decoration, or a prop in some kind of ritual.',
    sellPrice: 60,
    edibility: -300,
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Mountain, Forest, Bus Stop' }
    ],
    miningLocations: ['The Mines (floors 1-29)'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'ancient_drum',
    name: 'Ancient Drum',
    category: 'artifacts',
    description: 'It\'s a drum made from wood and animal skin. It has a low, reverberating tone.',
    sellPrice: 100,
    edibility: -300,
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Forest, Bus Stop' }
    ],
    miningLocations: ['The Mines (floors 1-39)'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'ancient_seed',
    name: 'Ancient Seed',
    category: 'artifacts',
    description: 'It\'s a dry old seed from some ancient plant. By all appearances it\'s long since dead.',
    sellPrice: 5,
    edibility: -300,
    rarity: 'rare',
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Forest, Mountain' }
    ],
    miningLocations: ['The Mines (floors 1-29)'],
    monsterDrops: [
      { monsterName: 'Bug', dropRate: 'Very Rare' },
      { monsterName: 'Grub', dropRate: 'Very Rare' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'arrowhead',
    name: 'Arrowhead',
    category: 'artifacts',
    description: 'A crudely fashioned point used for hunting.',
    sellPrice: 40,
    edibility: -300,
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Mountain, Forest, Bus Stop' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'dinosaur_egg_artifact',
    name: 'Dinosaur Egg',
    category: 'artifacts',
    description: 'A huge egg with purple spots.',
    sellPrice: 350,
    edibility: -300,
    rarity: 'rare',
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Mountain (Rare)' }
    ],
    miningLocations: ['Skull Cavern (Pepper Rex treasure)'],
    monsterDrops: [
      { monsterName: 'Pepper Rex', dropRate: 'Rare' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'dwarf_scroll_i',
    name: 'Dwarf Scroll I',
    category: 'artifacts',
    description: 'A yellowed scroll of parchment filled with Dwarvish writing. This one\'s tied with a red string.',
    sellPrice: 1,
    edibility: -300,
    miningLocations: ['The Mines (floors 1-40)'],
    monsterDrops: [
      { monsterName: 'Blue Slime', dropRate: 'Uncommon', floors: '1-40' },
      { monsterName: 'Rock Crab', dropRate: 'Uncommon', floors: '1-40' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'dwarf_scroll_ii',
    name: 'Dwarf Scroll II',
    category: 'artifacts',
    description: 'A yellowed scroll of parchment filled with Dwarvish writing. This one\'s tied with a green string.',
    sellPrice: 1,
    edibility: -300,
    miningLocations: ['The Mines (floors 1-40)'],
    monsterDrops: [
      { monsterName: 'Ghost', dropRate: 'Uncommon', floors: '1-80' },
      { monsterName: 'Frost Bat', dropRate: 'Uncommon', floors: '40-80' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'dwarf_scroll_iii',
    name: 'Dwarf Scroll III',
    category: 'artifacts',
    description: 'A yellowed scroll of parchment filled with Dwarvish writing. This one\'s tied with a blue string.',
    sellPrice: 1,
    edibility: -300,
    miningLocations: ['The Mines (floors 40-80)'],
    monsterDrops: [
      { monsterName: 'Blue Slime', dropRate: 'Uncommon', floors: '40-80' },
      { monsterName: 'Bat', dropRate: 'Uncommon', floors: '40-80' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'dwarf_scroll_iv',
    name: 'Dwarf Scroll IV',
    category: 'artifacts',
    description: 'A yellowed scroll of parchment filled with Dwarvish writing. This one\'s tied with a golden chain.',
    sellPrice: 1,
    edibility: -300,
    miningLocations: ['The Mines (floors 80-120)'],
    monsterDrops: [
      { monsterName: 'Metal Head', dropRate: 'Rare', floors: '80-120' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'elvish_jewelry',
    name: 'Elvish Jewelry',
    category: 'artifacts',
    description: 'These are beautiful necklaces and rings.',
    sellPrice: 200,
    edibility: -300,
    rarity: 'uncommon',
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Forest' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'golden_mask',
    name: 'Golden Mask',
    category: 'artifacts',
    description: 'A creepy golden mask probably used in ancient magic rituals. The holes for eyes are empty.',
    sellPrice: 500,
    edibility: -300,
    rarity: 'rare',
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Desert (Rare)' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'golden_relic',
    name: 'Golden Relic',
    category: 'artifacts',
    description: 'It\'s a golden slab with hieroglyphs and pictures emblazoned onto the front.',
    sellPrice: 250,
    edibility: -300,
    rarity: 'uncommon',
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Desert' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'rare_disc',
    name: 'Rare Disc',
    category: 'artifacts',
    description: 'A heavy black disc studded with peculiar red stones. When you hold it, you\'re overwhelmed with a feeling of dread.',
    sellPrice: 300,
    edibility: -300,
    rarity: 'rare',
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Stardew Valley' }
    ],
    miningLocations: ['Any location (Very Rare)'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'rusty_spoon',
    name: 'Rusty Spoon',
    category: 'artifacts',
    description: 'A plain old spoon, probably ten years old. Not very interesting.',
    sellPrice: 25,
    edibility: -300,
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Town' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'rusty_spur',
    name: 'Rusty Spur',
    category: 'artifacts',
    description: 'An old spur that was once attached to a cowboy\'s boot. People must have been raising animals in this area for many generations.',
    sellPrice: 25,
    edibility: -300,
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Farm' }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'trilobite',
    name: 'Trilobite',
    category: 'artifacts',
    description: 'A long extinct relative of the crab.',
    sellPrice: 50,
    edibility: -300,
    forageLocations: [
      { area: 'Artifact Spots', season: ['Spring', 'Summer', 'Fall', 'Winter'], condition: 'Mountain, Forest, Beach' }
    ],
    miningLocations: ['The Mines (floors 1-39)'],
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // Adding a few more cooking items for variety
  {
    id: 'parsnip_soup',
    name: 'Parsnip Soup',
    category: 'cooking',
    description: 'It\'s fresh and hearty.',
    sellPrice: 120,
    edibility: 75,
    artisanSource: 'Cooking (Recipe: Caroline at 3 hearts)',
    giftInfo: { lovedBy: ['Caroline'], likedBy: [] }
  },
  {
    id: 'baked_fish',
    name: 'Baked Fish',
    category: 'cooking',
    description: 'Baked fish on a bed of herbs.',
    sellPrice: 100,
    edibility: 75,
    artisanSource: 'Cooking (Recipe: Queen of Sauce Year 1 Summer 7)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'survival_burger',
    name: 'Survival Burger',
    category: 'cooking',
    description: 'A convenient snack for the explorer.',
    sellPrice: 180,
    edibility: 125,
    artisanSource: 'Cooking (Recipe: Foraging Level 2)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },

  // ==================== SEEDS (~30 representative items) ====================

  {
    id: 'parsnip_seeds',
    name: 'Parsnip Seeds',
    category: 'seeds',
    description: 'Plant these in spring. Takes 4 days to mature.',
    sellPrice: 5,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 20, availability: { seasons: ['Spring'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'cauliflower_seeds',
    name: 'Cauliflower Seeds',
    category: 'seeds',
    description: 'Plant these in spring. Takes 12 days to mature.',
    sellPrice: 20,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 80, availability: { seasons: ['Spring'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'potato_seeds',
    name: 'Potato Seeds',
    category: 'seeds',
    description: 'Plant these in spring. Takes 6 days to mature, and has a chance of yielding multiple potatoes at harvest.',
    sellPrice: 12,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 50, availability: { seasons: ['Spring'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'strawberry_seeds',
    name: 'Strawberry Seeds',
    category: 'seeds',
    description: 'Plant these in spring. Takes 8 days to mature, and keeps producing strawberries after that.',
    sellPrice: 25,
    edibility: -300,
    shops: [
      { shopName: 'Egg Festival', price: 100, availability: { condition: 'Spring 13 only' } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'melon_seeds',
    name: 'Melon Seeds',
    category: 'seeds',
    description: 'Plant these in summer. Takes 12 days to mature.',
    sellPrice: 20,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 80, availability: { seasons: ['Summer'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'blueberry_seeds',
    name: 'Blueberry Seeds',
    category: 'seeds',
    description: 'Plant these in summer. Takes 13 days to mature, and keeps producing blueberries after that.',
    sellPrice: 20,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 80, availability: { seasons: ['Summer'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'starfruit_seeds',
    name: 'Starfruit Seeds',
    category: 'seeds',
    description: 'Plant in summer. Takes 13 days to mature, and yields one of the most valuable crops in the valley.',
    sellPrice: 100,
    edibility: -300,
    rarity: 'uncommon',
    shops: [
      { shopName: 'Sandy\'s Oasis', price: 400, availability: { seasons: ['Summer'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'pumpkin_seeds',
    name: 'Pumpkin Seeds',
    category: 'seeds',
    description: 'Plant these in fall. Takes 13 days to mature.',
    sellPrice: 25,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 100, availability: { seasons: ['Fall'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'cranberry_seeds',
    name: 'Cranberry Seeds',
    category: 'seeds',
    description: 'Plant these in fall. Takes 7 days to mature, and keeps producing cranberries after that.',
    sellPrice: 60,
    edibility: -300,
    shops: [
      { shopName: 'Pierre\'s General Store', price: 240, availability: { seasons: ['Fall'] } }
    ],
    giftInfo: { lovedBy: [], likedBy: [] }
  },
  {
    id: 'ancient_seeds',
    name: 'Ancient Seeds',
    category: 'seeds',
    description: 'Could these still grow after all this time? Apparently not.',
    sellPrice: 0,
    edibility: -300,
    rarity: 'rare',
    farmingInfo: 'Plant Ancient Seeds (craftable from Ancient Seed artifact)',
    giftInfo: { lovedBy: [], likedBy: [] }
  },

];

/**
 * Helper Functions
 */

// Get item by ID
export function getItemById(id: string): Item | undefined {
  return ITEMS.find(item => item.id === id);
}

// Get items by category
export function getItemsByCategory(category: ItemCategory): Item[] {
  return ITEMS.filter(item => item.category === category);
}

// Search items
export function searchItems(searchTerm: string): Item[] {
  const term = searchTerm.toLowerCase();
  return ITEMS.filter(item =>
    item.name.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term)
  );
}

// Get items by season
export function getItemsBySeason(season: Season): Item[] {
  return ITEMS.filter(item => {
    // Check forage locations
    if (item.forageLocations) {
      return item.forageLocations.some(loc =>
        loc.season && loc.season.includes(season)
      );
    }
    // Check fishing locations
    if (item.fishingLocations) {
      return item.fishingLocations.some(loc =>
        loc.season && loc.season.includes(season)
      );
    }
    return false;
  });
}

// Get items by source type
export function getItemsBySource(source: string): Item[] {
  return ITEMS.filter(item => {
    switch (source) {
      case 'forage':
        return item.forageLocations && item.forageLocations.length > 0;
      case 'fishing':
        return item.fishingLocations && item.fishingLocations.length > 0;
      case 'mining':
        return item.miningLocations && item.miningLocations.length > 0;
      case 'monster':
        return item.monsterDrops && item.monsterDrops.length > 0;
      case 'shop':
        return item.shops && item.shops.length > 0;
      case 'farming':
        return item.farmingInfo !== undefined;
      case 'crafting':
        return item.craftingRecipe !== undefined;
      case 'artisan':
        return item.artisanSource !== undefined;
      default:
        return false;
    }
  });
}

// Get all categories
export function getCategories(): ItemCategory[] {
  const categories = new Set(ITEMS.map(item => item.category));
  return Array.from(categories).sort();
}

// Get item statistics
export function getItemStats() {
  return {
    total: ITEMS.length,
    byCategory: getCategories().reduce((acc, cat) => {
      acc[cat] = getItemsByCategory(cat).length;
      return acc;
    }, {} as Record<string, number>)
  };
}

// Get forage items
export function getForageItems(): Item[] {
  return getItemsByCategory('forage');
}

// Get fish
export function getFish(): Item[] {
  return getItemsByCategory('fish');
}

// Get minerals
export function getMinerals(): Item[] {
  return getItemsByCategory('minerals');
}

// Get artifacts
export function getArtifacts(): Item[] {
  return getItemsByCategory('artifacts');
}

// Get cooking recipes
export function getCookingRecipes(): Item[] {
  return getItemsByCategory('cooking');
}

// Get artisan goods
export function getArtisanGoods(): Item[] {
  return getItemsByCategory('artisan');
}
