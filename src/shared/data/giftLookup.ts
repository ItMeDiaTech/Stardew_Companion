/**
 * Gift Lookup Algorithm for Stardew Valley
 *
 * Determines how a villager feels about receiving a specific item as a gift.
 * Follows Stardew Valley's actual gift preference resolution order.
 */

import { Villager } from '../types';
import { UNIVERSAL_GIFTS } from './universalGifts';

export type GiftPreference = 'love' | 'like' | 'neutral' | 'dislike' | 'hate';

export interface GiftLookupResult {
  preference: GiftPreference;
  points: number;
  reason: string;
}

// Item category mappings for "All X" pattern matching
const ITEM_CATEGORIES: Record<string, string[]> = {
  eggs: [
    'Egg', 'Large Egg', 'Brown Egg', 'Large Brown Egg', 'Duck Egg',
    'Void Egg', 'Dinosaur Egg', 'Ostrich Egg', 'Golden Egg', 'Parrot Egg'
  ],
  fruits: [
    'Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cactus Fruit',
    'Cherry', 'Coconut', 'Cranberries', 'Crystal Fruit', 'Grape', 'Hot Pepper',
    'Mango', 'Melon', 'Orange', 'Peach', 'Pineapple', 'Pomegranate', 'Powdermelon',
    'Qi Fruit', 'Rhubarb', 'Salmonberry', 'Spice Berry', 'Starfruit',
    'Strawberry', 'Wild Plum'
  ],
  vegetables: [
    'Amaranth', 'Artichoke', 'Beet', 'Bok Choy', 'Broccoli', 'Carrot',
    'Cauliflower', 'Corn', 'Eggplant', 'Garlic', 'Green Bean', 'Hops',
    'Kale', 'Parsnip', 'Potato', 'Pumpkin', 'Radish', 'Red Cabbage',
    'Summer Squash', 'Tea Leaves', 'Taro Root', 'Tomato', 'Unmilled Rice',
    'Wheat', 'Yam'
  ],
  flowers: [
    'Blue Jazz', 'Crocus', 'Daffodil', 'Fairy Rose', 'Poppy',
    'Summer Spangle', 'Sunflower', 'Sweet Pea', 'Tulip'
  ],
  fish: [
    'Albacore', 'Anchovy', 'Angler', 'Blobfish', 'Blue Discus', 'Bream',
    'Bullhead', 'Carp', 'Catfish', 'Chub', 'Cockle', 'Crab', 'Crayfish',
    'Crimsonfish', 'Dorado', 'Eel', 'Flounder', 'Ghostfish', 'Glacierfish',
    'Glacierfish Jr.', 'Goby', 'Halibut', 'Herring', 'Ice Pip', 'Largemouth Bass',
    'Lava Eel', 'Legend', 'Legend II', 'Lingcod', 'Lionfish', 'Lobster',
    'Midnight Carp', 'Midnight Squid', 'Ms. Angler', 'Mussel', 'Mutant Carp',
    'Octopus', 'Oyster', 'Perch', 'Periwinkle', 'Pike', 'Pufferfish',
    'Radioactive Carp', 'Rainbow Trout', 'Red Mullet', 'Red Snapper',
    'Salmon', 'Sandfish', 'Sardine', 'Scorpion Carp', 'Sea Cucumber',
    'Sea Urchin', 'Shad', 'Shrimp', 'Slimejack', 'Smallmouth Bass', 'Snail',
    'Son of Crimsonfish', 'Spook Fish', 'Squid', 'Stingray', 'Stonefish',
    'Sturgeon', 'Sunfish', 'Super Cucumber', 'Tiger Trout', 'Tilapia',
    'Tuna', 'Void Salmon', 'Walleye', 'Woodskip', 'Clam'
  ],
  milk: [
    'Milk', 'Large Milk', 'Goat Milk', 'Large Goat Milk'
  ],
  artisanGoods: [
    'Aged Roe', 'Beer', 'Caviar', 'Cheese', 'Cloth', 'Coffee',
    'Dinosaur Mayonnaise', 'Duck Mayonnaise', 'Goat Cheese', 'Green Tea',
    'Honey', 'Jelly', 'Juice', 'Mayonnaise', 'Mead', 'Oil', 'Pale Ale',
    'Pickles', 'Truffle Oil', 'Void Mayonnaise', 'Wine'
  ],
  cooking: [
    'Algae Soup', 'Artichoke Dip', 'Autumn\'s Bounty', 'Baked Fish',
    'Banana Pudding', 'Bean Hotpot', 'Blackberry Cobbler', 'Blueberry Tart',
    'Bread', 'Bruschetta', 'Carp Surprise', 'Cheese Cauliflower', 'Chowder',
    'Chocolate Cake', 'Coleslaw', 'Complete Breakfast', 'Cookie',
    'Crab Cakes', 'Cranberry Candy', 'Cranberry Sauce', 'Crispy Bass',
    'Dish O\' The Sea', 'Eggplant Parmesan', 'Escargot', 'Farmer\'s Lunch',
    'Fiddlehead Risotto', 'Fish Stew', 'Fish Taco', 'Fried Calamari',
    'Fried Eel', 'Fried Egg', 'Fried Mushroom', 'Fruit Salad',
    'Ginger Ale', 'Glazed Yams', 'Hashbrowns', 'Ice Cream', 'Lobster Bisque',
    'Lucky Lunch', 'Maki Roll', 'Mango Sticky Rice', 'Maple Bar',
    'Miner\'s Treat', 'Omelet', 'Pale Broth', 'Pancakes', 'Parsnip Soup',
    'Pepper Poppers', 'Pink Cake', 'Pizza', 'Plum Pudding', 'Poi',
    'Poppyseed Muffin', 'Pumpkin Pie', 'Pumpkin Soup', 'Radish Salad',
    'Red Plate', 'Rhubarb Pie', 'Rice Pudding', 'Roasted Hazelnuts',
    'Roots Platter', 'Salad', 'Salmon Dinner', 'Sashimi', 'Seafoam Pudding',
    'Shrimp Cocktail', 'Spaghetti', 'Spicy Eel', 'Squid Ink Ravioli',
    'Stir Fry', 'Strange Bun', 'Stuffing', 'Super Meal', 'Survival Burger',
    'Tom Kha Soup', 'Tortilla', 'Triple Shot Espresso', 'Tropical Curry',
    'Trout Soup', 'Vegetable Medley'
  ],
  books: [
    'Price Catalogue', 'Mapping Cave Systems', 'Way Of The Wind pt. 1',
    'Way Of The Wind pt. 2', 'Monster Compendium', 'Friendship 101',
    'Jack Be Nimble, Jack Be Thick', 'Woody\'s Secret', 'The Alleyway Buffet',
    'The Art O\' Crabbing', 'Dwarvish Safety Manual', 'Jewels Of The Sea',
    'Raccoon Journal', 'Stardew Valley Almanac', 'Bait And Bobber',
    'Ol\' Slitherlegs', 'Animal Catalogue', 'Queen Of Sauce Cookbook',
    'The Diamond Hunter', 'Woodcutter\'s Weekly', 'Book Of Stars',
    'Horse: The Book', 'Combat Quarterly'
  ]
};

// Shellfish that are exceptions to fish hate for some villagers
const SHELLFISH = ['Clam', 'Cockle', 'Mussel', 'Oyster', 'Crab', 'Lobster', 'Crayfish', 'Shrimp', 'Snail', 'Periwinkle'];

/**
 * Main lookup function - determines villager's preference for an item
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
    return {
      ...universalResult,
      reason: `${universalResult.reason} (Universal ${universalResult.preference})`
    };
  }

  // Step 6: Default to neutral
  return {
    preference: 'neutral',
    points: 20,
    reason: `${villager.name} has no strong feelings about ${normalizedItem}.`
  };
}

/**
 * Check if an item matches any entry in a gift list
 */
function checkGiftList(giftList: string[], itemName: string): boolean {
  for (const giftEntry of giftList) {
    if (matchesGiftEntry(giftEntry, itemName)) {
      return true;
    }
  }
  return false;
}

/**
 * Check if an item matches a specific gift entry
 * Handles exact matches and "All X (except Y)" patterns
 */
function matchesGiftEntry(giftEntry: string, itemName: string): boolean {
  const normalizedEntry = giftEntry.toLowerCase().trim();
  const normalizedItem = itemName.toLowerCase().trim();

  // Case 1: Exact match
  if (normalizedEntry === normalizedItem) {
    return true;
  }

  // Case 2: "All X" or "All X (except Y, Z)" pattern
  if (normalizedEntry.startsWith('all ')) {
    return matchesCategoryPattern(giftEntry, itemName);
  }

  return false;
}

/**
 * Match items against "All X (except Y, Z)" patterns
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

  // Check universal categories
  if (categoryPart.includes('universal love')) {
    return isInUniversalCategory(itemName, 'loves');
  }
  if (categoryPart.includes('universal like')) {
    return isInUniversalCategory(itemName, 'likes');
  }
  if (categoryPart.includes('universal dislike')) {
    return isInUniversalCategory(itemName, 'dislikes');
  }
  if (categoryPart.includes('universal hate')) {
    return isInUniversalCategory(itemName, 'hates');
  }
  if (categoryPart.includes('universal neutral')) {
    return isInUniversalCategory(itemName, 'neutrals');
  }

  // Check item type categories
  if (categoryPart.includes('egg')) {
    return isInCategory(itemName, 'eggs');
  }
  if (categoryPart.includes('fruit')) {
    return isInCategory(itemName, 'fruits');
  }
  if (categoryPart.includes('vegetable')) {
    return isInCategory(itemName, 'vegetables');
  }
  if (categoryPart.includes('flower')) {
    return isInCategory(itemName, 'flowers');
  }
  if (categoryPart.includes('fish')) {
    // Handle shellfish exceptions separately
    if (exceptions.length > 0 && SHELLFISH.some(s => s.toLowerCase() === normalizedItem)) {
      // Check if this shellfish is in the exceptions
      if (exceptions.some(exc => normalizedItem.includes(exc))) {
        return false;
      }
    }
    return isInCategory(itemName, 'fish');
  }
  if (categoryPart.includes('milk')) {
    return isInCategory(itemName, 'milk');
  }
  if (categoryPart.includes('artisan good') || categoryPart.includes('artisan')) {
    return isInCategory(itemName, 'artisanGoods');
  }
  if (categoryPart.includes('cooking') || categoryPart.includes('cooked')) {
    return isInCategory(itemName, 'cooking');
  }
  if (categoryPart.includes('book')) {
    return isInCategory(itemName, 'books');
  }

  return false;
}

/**
 * Check if an item is in a specific category
 */
function isInCategory(itemName: string, categoryKey: string): boolean {
  const category = ITEM_CATEGORIES[categoryKey];
  if (!category) return false;

  const normalizedItem = itemName.toLowerCase().trim();
  return category.some(cat => cat.toLowerCase() === normalizedItem);
}

/**
 * Check if an item is in a universal gift category
 */
function isInUniversalCategory(itemName: string, category: 'loves' | 'likes' | 'neutrals' | 'dislikes' | 'hates'): boolean {
  const categoryItems = UNIVERSAL_GIFTS[category].items;
  const normalizedItem = itemName.toLowerCase().trim();

  return categoryItems.some(item => {
    const normalizedCat = item.toLowerCase();
    // Exact match
    if (normalizedCat === normalizedItem) return true;
    // Skip category references like "All Fish", "Most Cooked Dishes"
    if (normalizedCat.startsWith('all ') || normalizedCat.startsWith('most ')) return false;
    return false;
  });
}

/**
 * Check universal gift categories for an item
 */
function checkUniversalGifts(itemName: string): GiftLookupResult | null {
  // Check in order of impact
  if (isInUniversalCategory(itemName, 'loves')) {
    return { preference: 'love', points: 80, reason: `${itemName} is a Universal Love` };
  }
  if (isInUniversalCategory(itemName, 'hates')) {
    return { preference: 'hate', points: -40, reason: `${itemName} is a Universal Hate` };
  }
  if (isInUniversalCategory(itemName, 'likes')) {
    return { preference: 'like', points: 45, reason: `${itemName} is a Universal Like` };
  }
  if (isInUniversalCategory(itemName, 'dislikes')) {
    return { preference: 'dislike', points: -20, reason: `${itemName} is a Universal Dislike` };
  }
  if (isInUniversalCategory(itemName, 'neutrals')) {
    return { preference: 'neutral', points: 20, reason: `${itemName} is a Universal Neutral` };
  }

  return null;
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
