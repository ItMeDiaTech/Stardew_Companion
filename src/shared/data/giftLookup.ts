/**
 * Gift Lookup Algorithm for Stardew Valley
 *
 * Determines how a villager feels about receiving a specific item as a gift.
 * Follows Stardew Valley's actual gift preference resolution order.
 * Data sourced from: https://stardewvalleywiki.com/Friendship
 */

import { Villager } from '../types';

export type GiftPreference = 'love' | 'like' | 'neutral' | 'dislike' | 'hate';

export interface GiftLookupResult {
  preference: GiftPreference;
  points: number;
  reason: string;
}

// ============================================================================
// UNIVERSAL GIFT EXCEPTIONS
// Items that override their category's default preference
// ============================================================================

const GIFT_EXCEPTIONS = {
  // Items from "liked" categories that are actually HATED
  hatedOverrides: [
    'Poppy',           // Flower → Hate
    'Strange Bun',     // Cooking → Hate
    'Seafoam Pudding', // Cooking → Hate
    'Void Mayonnaise', // Artisan → Hate
    'Carp',            // Fish → Hate (not just dislike)
    'Snail',           // Fish → Hate (not just dislike)
  ],

  // Items from "hated" categories that are actually DISLIKED
  dislikedOverrides: [
    'Solar Essence',   // Monster Loot → Dislike (not hate)
    'Void Essence',    // Monster Loot → Dislike (not hate)
    'Driftwood',       // Trash → Dislike (not hate)
    'Oil',             // Artisan → Dislike (not like)
    'Unmilled Rice',   // Vegetable → Dislike (not like)
  ],

  // Items from "liked" categories that are actually NEUTRAL
  neutralOverrides: [
    'Fried Egg',       // Cooking → Neutral
    'Bread',           // Cooking → Neutral
    'Hops',            // Vegetable → Neutral
    'Tea Leaves',      // Vegetable → Neutral
    'Wheat',           // Vegetable → Neutral
  ],
};

// ============================================================================
// ITEM CATEGORIES
// ============================================================================

const ITEM_CATEGORIES: Record<string, string[]> = {
  // Universal loves - exact list from wiki
  universalLoves: [
    'Golden Pumpkin', 'Magic Rock Candy', 'Pearl',
    'Prismatic Shard', "Rabbit's Foot", 'Stardrop Tea'
  ],

  // Gems - universally LIKED (except Prismatic Shard which is loved)
  gems: [
    'Diamond', 'Emerald', 'Ruby', 'Amethyst', 'Topaz', 'Jade', 'Aquamarine'
  ],

  // Foraged minerals - universally LIKED (Quartz varies by villager)
  foragedMinerals: [
    'Earth Crystal', 'Frozen Tear', 'Fire Quartz'
  ],

  // Fruit tree fruits - universally LIKED
  fruitTreeFruits: [
    'Apple', 'Apricot', 'Banana', 'Cherry', 'Mango',
    'Orange', 'Peach', 'Pomegranate'
  ],

  // Flowers - universally LIKED (except Poppy which is hated)
  flowers: [
    'Blue Jazz', 'Crocus', 'Daffodil', 'Fairy Rose',
    'Summer Spangle', 'Sunflower', 'Sweet Pea', 'Tulip'
    // Poppy is in hatedOverrides
  ],

  // Vegetables - universally LIKED (with exceptions in overrides)
  vegetables: [
    'Amaranth', 'Artichoke', 'Beet', 'Bok Choy', 'Broccoli', 'Carrot',
    'Cauliflower', 'Corn', 'Eggplant', 'Garlic', 'Green Bean',
    'Kale', 'Parsnip', 'Potato', 'Pumpkin', 'Radish', 'Red Cabbage',
    'Summer Squash', 'Taro Root', 'Tomato', 'Yam'
    // Hops, Tea Leaves, Wheat are in neutralOverrides
    // Unmilled Rice is in dislikedOverrides
  ],

  // Artisan goods - universally LIKED (with exceptions)
  artisanGoods: [
    'Aged Roe', 'Beer', 'Caviar', 'Cheese', 'Cloth', 'Coffee',
    'Dinosaur Mayonnaise', 'Duck Mayonnaise', 'Goat Cheese', 'Green Tea',
    'Honey', 'Jelly', 'Juice', 'Mayonnaise', 'Mead', 'Pale Ale',
    'Pickles', 'Truffle Oil', 'Wine'
    // Oil is in dislikedOverrides
    // Void Mayonnaise is in hatedOverrides
  ],

  // Cooking - universally LIKED (with exceptions)
  cooking: [
    'Algae Soup', 'Artichoke Dip', "Autumn's Bounty", 'Baked Fish',
    'Banana Pudding', 'Bean Hotpot', 'Blackberry Cobbler', 'Blueberry Tart',
    'Bruschetta', 'Carp Surprise', 'Cheese Cauliflower', 'Chowder',
    'Chocolate Cake', 'Coleslaw', 'Complete Breakfast', 'Cookie',
    'Crab Cakes', 'Cranberry Candy', 'Cranberry Sauce', 'Crispy Bass',
    "Dish O' The Sea", 'Eggplant Parmesan', 'Escargot', "Farmer's Lunch",
    'Fiddlehead Risotto', 'Fish Stew', 'Fish Taco', 'Fried Calamari',
    'Fried Eel', 'Fried Mushroom', 'Fruit Salad',
    'Ginger Ale', 'Glazed Yams', 'Hashbrowns', 'Ice Cream', 'Lobster Bisque',
    'Lucky Lunch', 'Maki Roll', 'Mango Sticky Rice', 'Maple Bar',
    "Miner's Treat", 'Omelet', 'Pale Broth', 'Pancakes', 'Parsnip Soup',
    'Pepper Poppers', 'Pink Cake', 'Pizza', 'Plum Pudding', 'Poi',
    'Poppyseed Muffin', 'Pumpkin Pie', 'Pumpkin Soup', 'Radish Salad',
    'Red Plate', 'Rhubarb Pie', 'Rice Pudding', 'Roasted Hazelnuts',
    'Roots Platter', 'Salad', 'Salmon Dinner', 'Sashimi',
    'Shrimp Cocktail', 'Spaghetti', 'Spicy Eel', 'Squid Ink Ravioli',
    'Stir Fry', 'Stuffing', 'Super Meal', 'Survival Burger',
    'Tom Kha Soup', 'Tortilla', 'Triple Shot Espresso', 'Tropical Curry',
    'Trout Soup', 'Vegetable Medley'
    // Fried Egg, Bread are in neutralOverrides
    // Strange Bun, Seafoam Pudding are in hatedOverrides
  ],

  // Additional universal likes
  universalLikesOther: [
    'Life Elixir', 'Maple Syrup', 'Piña Colada', 'Rainbow Shell', 'Treasure Chest'
  ],

  // ============================================================================
  // DISLIKED CATEGORIES
  // ============================================================================

  // Fish - universally DISLIKED (except Carp & Snail which are hated)
  fish: [
    'Albacore', 'Anchovy', 'Angler', 'Blobfish', 'Blue Discus', 'Bream',
    'Bullhead', 'Catfish', 'Chub', 'Cockle', 'Crab', 'Crayfish',
    'Crimsonfish', 'Dorado', 'Eel', 'Flounder', 'Ghostfish', 'Glacierfish',
    'Glacierfish Jr.', 'Goby', 'Halibut', 'Herring', 'Ice Pip', 'Largemouth Bass',
    'Lava Eel', 'Legend', 'Legend II', 'Lingcod', 'Lionfish', 'Lobster',
    'Midnight Carp', 'Midnight Squid', 'Ms. Angler', 'Mussel', 'Mutant Carp',
    'Octopus', 'Oyster', 'Perch', 'Periwinkle', 'Pike', 'Pufferfish',
    'Radioactive Carp', 'Rainbow Trout', 'Red Mullet', 'Red Snapper',
    'Salmon', 'Sandfish', 'Sardine', 'Scorpion Carp', 'Sea Cucumber',
    'Sea Urchin', 'Shad', 'Shrimp', 'Slimejack', 'Smallmouth Bass',
    'Son of Crimsonfish', 'Spook Fish', 'Squid', 'Stingray', 'Stonefish',
    'Sturgeon', 'Sunfish', 'Super Cucumber', 'Tiger Trout', 'Tilapia',
    'Tuna', 'Void Salmon', 'Walleye', 'Woodskip', 'Clam'
    // Carp, Snail are in hatedOverrides
  ],

  // Geode minerals - universally DISLIKED
  geodeMinerals: [
    'Tigerseye', 'Opal', 'Fire Opal', 'Alamite', 'Bixite', 'Baryte',
    'Aerinite', 'Calcite', 'Dolomite', 'Esperite', 'Fluorapatite',
    'Geminite', 'Helvite', 'Jamborite', 'Jagoite', 'Kyanite', 'Lunarite',
    'Malachite', 'Neptunite', 'Lemon Stone', 'Nekoite', 'Orpiment',
    'Petrified Slime', 'Thunder Egg', 'Pyrite', 'Ocean Stone',
    'Ghost Crystal', 'Jasper', 'Celestine', 'Marble', 'Sandstone',
    'Granite', 'Basalt', 'Limestone', 'Soapstone', 'Hematite',
    'Mudstone', 'Obsidian', 'Slate', 'Fairy Stone', 'Star Shards'
  ],

  // Artifacts - universally DISLIKED
  artifacts: [
    'Amphibian Fossil', 'Ancient Doll', 'Ancient Drum', 'Ancient Seed',
    'Ancient Sword', 'Arrowhead', 'Bone Flute', 'Chewing Stick',
    'Chicken Statue', 'Chipped Amphora', 'Dinosaur Egg', 'Dried Starfish',
    'Dwarf Gadget', 'Dwarf Scroll I', 'Dwarf Scroll II', 'Dwarf Scroll III',
    'Dwarf Scroll IV', 'Dwarvish Helm', 'Elvish Jewelry', 'Glass Shards',
    'Golden Mask', 'Golden Relic', 'Nautilus Fossil', 'Ornamental Fan',
    'Palm Fossil', 'Prehistoric Handaxe', 'Prehistoric Rib', 'Prehistoric Scapula',
    'Prehistoric Skull', 'Prehistoric Tibia', 'Prehistoric Tool', 'Prehistoric Vertebra',
    'Rare Disc', 'Rusty Cog', 'Rusty Spoon', 'Rusty Spur', 'Skeletal Hand',
    'Skeletal Tail', 'Strange Doll (green)', 'Strange Doll (yellow)', 'Trilobite'
  ],

  // Geodes - universally DISLIKED
  geodes: [
    'Geode', 'Frozen Geode', 'Magma Geode', 'Omni Geode'
  ],

  // Seeds - universally DISLIKED
  seeds: [
    'Parsnip Seeds', 'Bean Starter', 'Cauliflower Seeds', 'Potato Seeds',
    'Melon Seeds', 'Tomato Seeds', 'Blueberry Seeds', 'Corn Seeds',
    'Pumpkin Seeds', 'Cranberry Seeds', 'Ancient Seeds', 'Rare Seed',
    'Strawberry Seeds', 'Starfruit Seeds', 'Mixed Seeds', 'Fiber Seeds',
    'Kale Seeds', 'Jazz Seeds', 'Garlic Seeds', 'Rice Shoot',
    'Rhubarb Seeds', 'Tulip Seeds', 'Pepper Seeds', 'Wheat Seeds',
    'Radish Seeds', 'Red Cabbage Seeds', 'Artichoke Seeds', 'Bok Choy Seeds',
    'Amaranth Seeds', 'Grape Starter', 'Yam Seeds', 'Eggplant Seeds',
    'Fairy Seeds', 'Sunflower Seeds', 'Spangle Seeds', 'Poppy Seeds',
    'Hops Starter', 'Beet Seeds', 'Cactus Seeds', 'Taro Tuber',
    'Pineapple Seeds', 'Mango Sapling', 'Banana Sapling', 'Qi Bean',
    'Carrot Seeds', 'Summer Squash Seeds', 'Broccoli Seeds', 'Powdermelon Seeds'
  ],

  // Building materials - universally DISLIKED
  buildingMaterials: [
    'Wood', 'Stone', 'Hardwood', 'Clay', 'Copper Bar', 'Iron Bar',
    'Gold Bar', 'Iridium Bar', 'Fiber', 'Copper Ore', 'Iron Ore',
    'Gold Ore', 'Iridium Ore', 'Coal', 'Battery Pack', 'Moss'
  ],

  // ============================================================================
  // HATED CATEGORIES
  // ============================================================================

  // Monster loot - universally HATED (except Solar/Void Essence which are disliked)
  monsterLoot: [
    'Bat Wing', 'Bug Meat', 'Slime', 'Bone Fragment', 'Squid Ink'
    // Solar Essence, Void Essence are in dislikedOverrides
  ],

  // Trash - universally HATED (except Driftwood which is disliked)
  trash: [
    'Trash', 'Soggy Newspaper', 'Broken CD', 'Broken Glasses',
    'Joja Cola', 'Rotten Plant'
    // Driftwood is in dislikedOverrides
  ],

  // Bait - universally HATED
  bait: [
    'Bait', 'Magnet', 'Magic Bait', 'Wild Bait',
    'Challenge Bait', 'Deluxe Bait'
  ],

  // Fossils - universally HATED
  fossils: [
    'Fossilized Leg', 'Fossilized Ribs', 'Fossilized Skull',
    'Fossilized Spine', 'Fossilized Tail', 'Mummified Bat',
    'Mummified Frog', 'Snake Skull', 'Snake Vertebrae'
  ],
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Check if an item is in a specific category (case-insensitive)
 */
function isInCategory(itemName: string, categoryKey: string): boolean {
  const category = ITEM_CATEGORIES[categoryKey];
  if (!category) return false;

  const normalizedItem = itemName.toLowerCase().trim();
  return category.some(item => item.toLowerCase() === normalizedItem);
}

/**
 * Check if an item is in any of the specified categories
 */
function isInAnyCategory(itemName: string, categoryKeys: string[]): boolean {
  return categoryKeys.some(key => isInCategory(itemName, key));
}

/**
 * Check if an item is in an exception list (case-insensitive)
 */
function isInExceptionList(itemName: string, exceptionList: string[]): boolean {
  const normalizedItem = itemName.toLowerCase().trim();
  return exceptionList.some(item => item.toLowerCase() === normalizedItem);
}

/**
 * Check if an item matches any entry in a villager's gift list
 * Handles exact matches and "All X (except Y)" patterns
 */
function checkGiftList(giftList: string[], itemName: string): boolean {
  const normalizedItem = itemName.toLowerCase().trim();

  for (const giftEntry of giftList) {
    const normalizedEntry = giftEntry.toLowerCase().trim();

    // Exact match
    if (normalizedEntry === normalizedItem) {
      return true;
    }

    // "All X" pattern matching for villager-specific preferences
    if (normalizedEntry.startsWith('all ')) {
      if (matchesCategoryPattern(giftEntry, itemName)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Match items against "All X (except Y, Z)" patterns for villager preferences
 */
function matchesCategoryPattern(pattern: string, itemName: string): boolean {
  const normalizedPattern = pattern.toLowerCase().trim();
  const normalizedItem = itemName.toLowerCase().trim();

  // Extract exceptions if present
  const exceptMatch = normalizedPattern.match(/\(except ([^)]+)\)/i);
  const exceptions: string[] = exceptMatch
    ? exceptMatch[1].split(',').map(e => e.trim().toLowerCase())
    : [];

  // Check if item is in exception list
  if (exceptions.some(exc => normalizedItem.includes(exc) || exc.includes(normalizedItem))) {
    return false;
  }

  // Get the category name (remove "all " prefix and exceptions)
  const categoryPart = normalizedPattern.replace(/\(except [^)]+\)/i, '').replace('all ', '').trim();

  // Map pattern keywords to category keys
  const categoryMappings: Record<string, string> = {
    'egg': 'eggs',
    'fruit': 'fruits',
    'vegetable': 'vegetables',
    'flower': 'flowers',
    'fish': 'fish',
    'milk': 'milk',
    'artisan': 'artisanGoods',
    'cooking': 'cooking',
    'cooked': 'cooking',
    'book': 'books',
    'gem': 'gems',
    'universal love': 'universalLoves',
    'universal like': 'universalLikesOther',
  };

  for (const [keyword, categoryKey] of Object.entries(categoryMappings)) {
    if (categoryPart.includes(keyword)) {
      return isInCategory(itemName, categoryKey);
    }
  }

  return false;
}

/**
 * Check universal gift categories for an item
 * Uses exception-based system for accuracy
 */
function checkUniversalGifts(itemName: string): GiftLookupResult | null {
  // Step 1: Check explicit exceptions FIRST (they override categories)
  if (isInExceptionList(itemName, GIFT_EXCEPTIONS.hatedOverrides)) {
    return { preference: 'hate', points: -40, reason: `${itemName} is universally hated` };
  }
  if (isInExceptionList(itemName, GIFT_EXCEPTIONS.dislikedOverrides)) {
    return { preference: 'dislike', points: -20, reason: `${itemName} is universally disliked` };
  }
  if (isInExceptionList(itemName, GIFT_EXCEPTIONS.neutralOverrides)) {
    return { preference: 'neutral', points: 20, reason: `${itemName} is universally neutral` };
  }

  // Step 2: Check universal loves (exact list)
  if (isInCategory(itemName, 'universalLoves')) {
    return { preference: 'love', points: 80, reason: `${itemName} is universally loved` };
  }

  // Step 3: Check category memberships for HATES first (higher impact)
  const hateCategories = ['monsterLoot', 'trash', 'bait', 'fossils'];
  if (isInAnyCategory(itemName, hateCategories)) {
    return { preference: 'hate', points: -40, reason: `${itemName} is universally hated` };
  }

  // Step 4: Check category memberships for DISLIKES
  const dislikeCategories = ['fish', 'artifacts', 'geodeMinerals', 'geodes', 'seeds', 'buildingMaterials'];
  if (isInAnyCategory(itemName, dislikeCategories)) {
    return { preference: 'dislike', points: -20, reason: `${itemName} is universally disliked` };
  }

  // Step 5: Check category memberships for LIKES
  const likeCategories = ['gems', 'foragedMinerals', 'fruitTreeFruits', 'flowers', 'vegetables', 'artisanGoods', 'cooking', 'universalLikesOther'];
  if (isInAnyCategory(itemName, likeCategories)) {
    return { preference: 'like', points: 45, reason: `${itemName} is universally liked` };
  }

  // Not a universal gift - will fall through to neutral
  return null;
}

// ============================================================================
// MAIN LOOKUP FUNCTION
// ============================================================================

/**
 * Main lookup function - determines villager's preference for an item
 * Resolution order (following Stardew Valley's actual system):
 * 1. Villager's individual loved gifts
 * 2. Villager's individual hated gifts
 * 3. Villager's individual liked gifts
 * 4. Villager's individual disliked gifts
 * 5. Universal gift preferences (with exceptions)
 * 6. Default to neutral
 */
export function lookupGiftPreference(villager: Villager, itemName: string): GiftLookupResult {
  const normalizedItem = itemName.trim();

  // Step 1: Check villager's loved gifts
  if (checkGiftList(villager.lovedGifts, normalizedItem)) {
    return {
      preference: 'love',
      points: 80,
      reason: `${villager.name} loves ${normalizedItem}!`
    };
  }

  // Step 2: Check villager's hated gifts
  if (checkGiftList(villager.hatedGifts, normalizedItem)) {
    return {
      preference: 'hate',
      points: -40,
      reason: `${villager.name} hates ${normalizedItem}.`
    };
  }

  // Step 3: Check villager's liked gifts (if exists)
  if (villager.likedGifts && checkGiftList(villager.likedGifts, normalizedItem)) {
    return {
      preference: 'like',
      points: 45,
      reason: `${villager.name} likes ${normalizedItem}.`
    };
  }

  // Step 4: Check villager's disliked gifts (if exists)
  if (villager.dislikedGifts && checkGiftList(villager.dislikedGifts, normalizedItem)) {
    return {
      preference: 'dislike',
      points: -20,
      reason: `${villager.name} dislikes ${normalizedItem}.`
    };
  }

  // Step 5: Check universal gifts
  const universalResult = checkUniversalGifts(normalizedItem);
  if (universalResult) {
    return universalResult;
  }

  // Step 6: Default to neutral
  return {
    preference: 'neutral',
    points: 20,
    reason: `${villager.name} has no strong feelings about ${normalizedItem}.`
  };
}

/**
 * Get all villagers who have a specific preference for an item
 */
export function getVillagersWithPreference(
  villagers: Villager[],
  itemName: string,
  preference: GiftPreference
): Villager[] {
  return villagers.filter(villager => {
    const result = lookupGiftPreference(villager, itemName);
    return result.preference === preference;
  });
}
