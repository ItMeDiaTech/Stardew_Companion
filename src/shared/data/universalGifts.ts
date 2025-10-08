/**
 * Universal Gift Preferences in Stardew Valley
 *
 * These are gift categories that apply to most/all villagers unless specifically noted.
 * Data sourced from: https://stardewvalleywiki.com/Friendship
 */

export interface UniversalGiftCategory {
  name: string;
  description: string;
  items: readonly string[];
}

export const UNIVERSAL_GIFTS = {
  loves: {
    name: 'Universal Loves',
    description: 'Gifts loved by almost all villagers (+80 friendship points)',
    items: [
      'Golden Pumpkin',
      'Magic Rock Candy',
      'Pearl',
      'Prismatic Shard',
      "Rabbit's Foot",
      'Stardrop Tea',
    ],
  },

  likes: {
    name: 'Universal Likes',
    description: 'Gifts liked by most villagers (+45 friendship points)',
    items: [
      // Artisan Goods
      'Artisan Goods (most)',
      'Beer',
      'Caviar',
      'Cheese',
      'Cloth',
      'Goat Cheese',
      'Green Tea',
      'Honey',
      'Jelly',
      'Juice',
      'Mead',
      'Pale Ale',
      'Pickles',
      'Wine',

      // Cooking
      'Most Cooked Dishes',

      // Flowers
      'Blue Jazz',
      'Crocus',
      'Daffodil',
      'Fairy Rose',
      'Summer Spangle',
      'Sunflower',
      'Sweet Pea',
      'Tulip',

      // Foraged Minerals
      'Earth Crystal',
      'Frozen Tear',
      'Fire Quartz',

      // Fruit Tree Fruits
      'Apple',
      'Apricot',
      'Cherry',
      'Orange',
      'Peach',
      'Pomegranate',

      // Gems
      'Amethyst',
      'Aquamarine',
      'Diamond',
      'Emerald',
      'Jade',
      'Ruby',
      'Topaz',

      // Vegetables
      'Amaranth',
      'Artichoke',
      'Beet',
      'Bok Choy',
      'Broccoli',
      'Cauliflower',
      'Corn',
      'Eggplant',
      'Fiddlehead Fern',
      'Green Bean',
      'Hot Pepper',
      'Kale',
      'Parsnip',
      'Potato',
      'Pumpkin',
      'Radish',
      'Red Cabbage',
      'Summer Squash',
      'Tomato',
      'Yam',

      // Other
      'Life Elixir',
      'Maple Syrup',
      'Piña Colada',
      'Rainbow Shell',
      'Treasure Chest',
    ],
  },

  neutrals: {
    name: 'Universal Neutrals',
    description: 'Gifts with neutral reaction from most villagers (+20 friendship points)',
    items: [
      'Books (most)',
      'Bread',
      'Chanterelle',
      'Common Mushroom',
      'Coral',
      'Daffodil',
      'Duck Feather',
      'Fried Egg',
      'Hazelnut',
      'Holly',
      'Hops',
      'Leek',
      'Magma Cap',
      'Morel',
      'Mystic Syrup',
      'Nautilus Shell',
      'Purple Mushroom',
      'Roe',
      'Snow Yam',
      'Squid Ink',
      'Sweet Gem Berry',
      'Tea Leaves',
      'Truffle',
      'Wheat',
      'Wild Horseradish',
      'Winter Root',
      'Wool',
    ],
  },

  dislikes: {
    name: 'Universal Dislikes',
    description: 'Gifts disliked by most villagers (-20 friendship points)',
    items: [
      // Building Materials
      'Clay',
      'Copper Bar',
      'Gold Bar',
      'Hardwood',
      'Iridium Bar',
      'Iron Bar',
      'Stone',
      'Wood',

      // Bombs
      'Bomb',
      'Cherry Bomb',
      'Explosive Ammo',
      'Mega Bomb',

      // Crafted Floors & Paths
      'All Crafted Floors',
      'All Crafted Paths',

      // Fences
      'Gate',
      'Hardwood Fence',
      'Iron Fence',
      'Stone Fence',
      'Wood Fence',

      // Fertilizer
      'Basic Fertilizer',
      'Deluxe Fertilizer',
      'Quality Fertilizer',
      'Speed-Gro',
      'Deluxe Speed-Gro',
      'Hyper Speed-Gro',

      // Fish (all types)
      'All Fish',
      'All Roe',

      // Geodes
      'Frozen Geode',
      'Geode',
      'Magma Geode',
      'Omni Geode',

      // Geode Minerals
      'All Geode Minerals',

      // Seeds
      'All Seeds',

      // Sprinklers
      'Basic Sprinkler',
      'Deluxe Sprinkler',
      'Iridium Sprinkler',
      'Quality Sprinkler',

      // Tackle
      'Barbed Hook',
      'Cork Bobber',
      'Dressed Spinner',
      'Lead Bobber',
      'Spinner',
      'Trap Bobber',
      'Treasure Hunter',

      // Trinkets
      'All Trinkets',

      // Other specific items
      'Algae',
      'Carp Surprise',
      'Cave Carrot',
      'Driftwood',
      'Field Snack',
      'Green Algae',
      'Seaweed',
      'White Algae',
      'Wild Bait',
    ],
  },

  hates: {
    name: 'Universal Hates',
    description: 'Gifts hated by most villagers (-40 friendship points)',
    items: [
      // Bait
      'Bait',
      'Magic Bait',
      'Wild Bait',

      // Fossils
      'All Fossils',
      'Fossilized Leg',
      'Fossilized Ribs',
      'Fossilized Skull',
      'Fossilized Spine',
      'Fossilized Tail',
      'Mummified Bat',
      'Mummified Frog',
      'Snake Skull',
      'Snake Vertebrae',

      // Monster Loot
      'Bat Wing',
      'Bug Meat',
      'Slime',
      'Solar Essence',
      'Void Essence',

      // Trash
      'Broken CD',
      'Broken Glasses',
      'Driftwood',
      'Joja Cola',
      'Rotten Plant',
      'Soggy Newspaper',
      'Trash',

      // Other
      'Artifact Trove',
      'Blue Grass Starter',
      'Bug Steak',
      'Deluxe Worm Bin',
      'Dust Sprite',
      'Farm Computer',
      'Fiber',
      'Fiber Seeds',
      'Golden Tag',
      'Hay',
      'Oil of Garlic',
      'Qi Fruit',
      'Qi Seasoning',
      'Red Plate',
      'Sea Jelly',
      'Silo',
      'Strange Bun',
      'Tea Bush',
      'Vinegar',
      'Warp Totem: Desert',
      'Warp Totem: Farm',
      'Warp Totem: Island',
      'Warp Totem: Mountains',
      'Wheat Flour',
      'Worm Bin',
    ],
  },
} as const;

/**
 * Helper function to get universal gift category by name
 */
export function getUniversalGiftCategory(categoryName: string): UniversalGiftCategory | null {
  const normalizedName = categoryName.toLowerCase().trim();

  if (normalizedName.includes('love')) {
    return UNIVERSAL_GIFTS.loves;
  } else if (normalizedName.includes('like')) {
    return UNIVERSAL_GIFTS.likes;
  } else if (normalizedName.includes('neutral')) {
    return UNIVERSAL_GIFTS.neutrals;
  } else if (normalizedName.includes('dislike')) {
    return UNIVERSAL_GIFTS.dislikes;
  } else if (normalizedName.includes('hate')) {
    return UNIVERSAL_GIFTS.hates;
  }

  return null;
}

/**
 * Check if a gift string represents a universal category
 */
export function isUniversalGift(giftText: string): boolean {
  const text = giftText.toLowerCase();
  return text.includes('all universal') || text.includes('universal love') ||
         text.includes('universal like') || text.includes('universal dislike') ||
         text.includes('universal hate') || text.includes('universal neutral');
}
