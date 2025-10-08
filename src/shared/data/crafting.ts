import { CraftingRecipe } from '../types';

/**
 * Comprehensive crafting recipe database
 * Over 100 craftable items across all categories
 */
export const CRAFTING_RECIPES: CraftingRecipe[] = [
  // STARTER RECIPES (Available from beginning)
  {
    id: 'chest',
    name: 'Chest',
    category: 'furniture',
    description: 'A place to store items. Can hold up to 36 different items.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 50 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'wood_fence',
    name: 'Wood Fence',
    category: 'fences',
    description: 'Keeps grass and animals contained!',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 2 }
    ],
    unlock: { method: 'starter' },
    output: 1
  },
  {
    id: 'gate',
    name: 'Gate',
    category: 'fences',
    description: 'Allows you to pass through fences.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 10 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'torch',
    name: 'Torch',
    category: 'lighting',
    description: 'Provides a modest amount of light.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 1 },
      { itemId: 'sap', itemName: 'Sap', quantity: 2 }
    ],
    unlock: { method: 'starter' },
    output: 5
  },
  {
    id: 'campfire',
    name: 'Campfire',
    category: 'equipment',
    description: 'Provides a modest amount of light. Can be used to cook.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 10 },
      { itemId: 'wood', itemName: 'Wood', quantity: 10 },
      { itemId: 'fiber', itemName: 'Fiber', quantity: 10 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'wood_path',
    name: 'Wood Path',
    category: 'flooring',
    description: 'Place on the ground to create a path.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 1 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'cobblestone_path',
    name: 'Cobblestone Path',
    category: 'flooring',
    description: 'Place on the ground to create a path.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 1 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'gravel_path',
    name: 'Gravel Path',
    category: 'flooring',
    description: 'Place on the ground to create a path.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 1 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'wood_sign',
    name: 'Wood Sign',
    category: 'furniture',
    description: 'A customizable sign. Place it and add your own text.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 25 }
    ],
    unlock: { method: 'starter' }
  },
  {
    id: 'stone_sign',
    name: 'Stone Sign',
    category: 'furniture',
    description: 'A customizable stone sign.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 25 }
    ],
    unlock: { method: 'starter' }
  },

  // FARMING SKILL UNLOCKS
  {
    id: 'scarecrow',
    name: 'Scarecrow',
    category: 'equipment',
    description: 'Prevents crows from attacking your crops. Has a circular radius of 8 tiles.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 50 },
      { itemId: 'coal', itemName: 'Coal', quantity: 1 },
      { itemId: 'fiber', itemName: 'Fiber', quantity: 20 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 1' }
  },
  {
    id: 'basic_fertilizer',
    name: 'Basic Fertilizer',
    category: 'fertilizer',
    description: 'Improves soil quality, increasing your chance to grow quality crops. Mix into tilled soil.',
    materials: [
      { itemId: 'sap', itemName: 'Sap', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 1' },
    output: 5
  },
  {
    id: 'mayonnaise_machine',
    name: 'Mayonnaise Machine',
    category: 'artisan',
    description: 'Turns eggs into mayonnaise.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 15 },
      { itemId: 'stone', itemName: 'Stone', quantity: 15 },
      { itemId: 'earth_crystal', itemName: 'Earth Crystal', quantity: 1 },
      { itemId: 'copper_bar', itemName: 'Copper Bar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 2' }
  },
  {
    id: 'stone_fence',
    name: 'Stone Fence',
    category: 'fences',
    description: 'Lasts longer than a wood fence.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 2' },
    output: 1
  },
  {
    id: 'sprinkler',
    name: 'Sprinkler',
    category: 'sprinklers',
    description: 'Waters 4 adjacent tiles every morning.',
    materials: [
      { itemId: 'copper_bar', itemName: 'Copper Bar', quantity: 1 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 2' }
  },
  {
    id: 'bee_house',
    name: 'Bee House',
    category: 'artisan',
    description: 'Place outside and wait for delicious honey! (Except in Winter).',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 40 },
      { itemId: 'coal', itemName: 'Coal', quantity: 8 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 },
      { itemId: 'maple_syrup', itemName: 'Maple Syrup', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 3' }
  },
  {
    id: 'preserves_jar',
    name: 'Preserves Jar',
    category: 'artisan',
    description: 'Turns vegetables into pickles and fruit into jam.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 50 },
      { itemId: 'stone', itemName: 'Stone', quantity: 40 },
      { itemId: 'coal', itemName: 'Coal', quantity: 8 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 4' }
  },
  {
    id: 'quality_fertilizer',
    name: 'Quality Fertilizer',
    category: 'fertilizer',
    description: 'Improves soil quality, greatly increasing your chance to grow quality crops. Mix into tilled soil.',
    materials: [
      { itemId: 'sap', itemName: 'Sap', quantity: 2 },
      { itemId: 'fish', itemName: 'Any Fish', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 4' },
    output: 5
  },
  {
    id: 'basic_retaining_soil',
    name: 'Basic Retaining Soil',
    category: 'fertilizer',
    description: 'This soil has a chance of staying watered overnight. Mix into tilled soil.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 4' },
    output: 3
  },
  {
    id: 'speed_gro',
    name: 'Speed-Gro',
    category: 'fertilizer',
    description: 'Stimulates leaf production. Guaranteed to increase growth rate by at least 10%. Mix into tilled soil.',
    materials: [
      { itemId: 'pine_tar', itemName: 'Pine Tar', quantity: 1 },
      { itemId: 'clam', itemName: 'Clam', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 3' },
    output: 5
  },
  {
    id: 'quality_sprinkler',
    name: 'Quality Sprinkler',
    category: 'sprinklers',
    description: 'Waters 8 adjacent tiles every morning.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 },
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 1 },
      { itemId: 'refined_quartz', itemName: 'Refined Quartz', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 6' }
  },
  {
    id: 'keg',
    name: 'Keg',
    category: 'artisan',
    description: 'Turns fruit into wine, vegetables into juice, and wheat into beer.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 30 },
      { itemId: 'copper_bar', itemName: 'Copper Bar', quantity: 1 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 },
      { itemId: 'oak_resin', itemName: 'Oak Resin', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 8' }
  },
  {
    id: 'iron_fence',
    name: 'Iron Fence',
    category: 'fences',
    description: 'Lasts longer than the stone fence.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 4' },
    output: 1
  },
  {
    id: 'iridium_sprinkler',
    name: 'Iridium Sprinkler',
    category: 'sprinklers',
    description: 'Waters 24 adjacent tiles every morning.',
    materials: [
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 1 },
      { itemId: 'iridium_bar', itemName: 'Iridium Bar', quantity: 1 },
      { itemId: 'battery_pack', itemName: 'Battery Pack', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 9' }
  },

  // MINING SKILL UNLOCKS
  {
    id: 'cherry_bomb',
    name: 'Cherry Bomb',
    category: 'bombs',
    description: 'Generates a small explosion. Stand back!',
    materials: [
      { itemId: 'copper_ore', itemName: 'Copper Ore', quantity: 4 },
      { itemId: 'coal', itemName: 'Coal', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Mining Level 1' }
  },
  {
    id: 'staircase',
    name: 'Staircase',
    category: 'other',
    description: 'Craft and place in the Mines to create a way down to the next level.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 99 }
    ],
    unlock: { method: 'skill', condition: 'Mining Level 2' }
  },
  {
    id: 'bomb',
    name: 'Bomb',
    category: 'bombs',
    description: 'Generates an explosion. Watch out!',
    materials: [
      { itemId: 'iron_ore', itemName: 'Iron Ore', quantity: 4 },
      { itemId: 'coal', itemName: 'Coal', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Mining Level 6' }
  },
  {
    id: 'mega_bomb',
    name: 'Mega Bomb',
    category: 'bombs',
    description: 'Generates a powerful explosion. Use with extreme caution.',
    materials: [
      { itemId: 'gold_ore', itemName: 'Gold Ore', quantity: 4 },
      { itemId: 'solar_essence', itemName: 'Solar Essence', quantity: 1 },
      { itemId: 'void_essence', itemName: 'Void Essence', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Mining Level 8' }
  },

  // FORAGING SKILL UNLOCKS
  {
    id: 'field_snack',
    name: 'Field Snack',
    category: 'consumables',
    description: 'A quick snack to fuel the hungry forager.',
    materials: [
      { itemId: 'acorn', itemName: 'Acorn', quantity: 1 },
      { itemId: 'maple_seed', itemName: 'Maple Seed', quantity: 1 },
      { itemId: 'pine_cone', itemName: 'Pine Cone', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 1' },
    output: 1
  },
  {
    id: 'tapper',
    name: 'Tapper',
    category: 'refining',
    description: 'Place on a maple, oak, or pine tree and wait for the reservoir to fill with product!',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 40 },
      { itemId: 'copper_bar', itemName: 'Copper Bar', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 3' }
  },
  {
    id: 'charcoal_kiln',
    name: 'Charcoal Kiln',
    category: 'refining',
    description: 'Turns 10 wood into 1 coal. Takes 30 minutes.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 20 },
      { itemId: 'copper_bar', itemName: 'Copper Bar', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 4' }
  },
  {
    id: 'lightning_rod',
    name: 'Lightning Rod',
    category: 'refining',
    description: 'Collect power from lightning storms and convert it into useful battery packs.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 },
      { itemId: 'refined_quartz', itemName: 'Refined Quartz', quantity: 1 },
      { itemId: 'bat_wing', itemName: 'Bat Wing', quantity: 5 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 6' }
  },
  {
    id: 'rain_totem',
    name: 'Rain Totem',
    category: 'consumables',
    description: 'Activate to greatly increase the chance for rain tomorrow. Consumed on use.',
    materials: [
      { itemId: 'hardwood', itemName: 'Hardwood', quantity: 1 },
      { itemId: 'truffle_oil', itemName: 'Truffle Oil', quantity: 1 },
      { itemId: 'pine_tar', itemName: 'Pine Tar', quantity: 5 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 9' }
  },

  // FISHING SKILL UNLOCKS
  {
    id: 'bait',
    name: 'Bait',
    category: 'fishing',
    description: 'Causes fish to bite faster. Must first be attached to a fishing rod.',
    materials: [
      { itemId: 'bug_meat', itemName: 'Bug Meat', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Fishing Level 2' },
    output: 5
  },
  {
    id: 'crab_pot',
    name: 'Crab Pot',
    category: 'fishing',
    description: 'Place in the water, load with bait, and check the next day for a catch.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 40 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 3 }
    ],
    unlock: { method: 'skill', condition: 'Fishing Level 3' }
  },
  {
    id: 'spinner',
    name: 'Spinner',
    category: 'fishing',
    description: 'The shape makes it spin around in the water. Slightly increases the bite rate when fishing.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Fishing Level 6' }
  },
  {
    id: 'recycling_machine',
    name: 'Recycling Machine',
    category: 'refining',
    description: 'Can recycle trash into useful materials.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 25 },
      { itemId: 'stone', itemName: 'Stone', quantity: 25 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Fishing Level 4' }
  },
  {
    id: 'worm_bin',
    name: 'Worm Bin',
    category: 'refining',
    description: 'Produces bait on a regular basis.',
    materials: [
      { itemId: 'hardwood', itemName: 'Hardwood', quantity: 25 },
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 1 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 },
      { itemId: 'fiber', itemName: 'Fiber', quantity: 50 }
    ],
    unlock: { method: 'skill', condition: 'Fishing Level 8' }
  },

  // COMBAT SKILL UNLOCKS
  {
    id: 'sturdy_ring',
    name: 'Sturdy Ring',
    category: 'rings',
    description: 'Cuts the duration of negative status effects in half.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 2 },
      { itemId: 'bug_meat', itemName: 'Bug Meat', quantity: 50 },
      { itemId: 'slime', itemName: 'Slime', quantity: 50 }
    ],
    unlock: { method: 'skill', condition: 'Combat Level 1' }
  },
  {
    id: 'warrior_ring',
    name: 'Warrior Ring',
    category: 'rings',
    description: 'Occasionally infuses the wearer with "warrior energy" after slaying a monster.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 10 },
      { itemId: 'coal', itemName: 'Coal', quantity: 25 },
      { itemId: 'frozen_tear', itemName: 'Frozen Tear', quantity: 10 }
    ],
    unlock: { method: 'skill', condition: 'Combat Level 4' }
  },
  {
    id: 'ring_of_yoba',
    name: 'Ring Of Yoba',
    category: 'rings',
    description: 'Occasionally shields the wearer from damage.',
    materials: [
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 5 },
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 5 },
      { itemId: 'diamond', itemName: 'Diamond', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Combat Level 7' }
  },
  {
    id: 'slime_incubator',
    name: 'Slime Incubator',
    category: 'refining',
    description: 'Hatches slime eggs into slimes.',
    materials: [
      { itemId: 'iridium_bar', itemName: 'Iridium Bar', quantity: 2 },
      { itemId: 'slime', itemName: 'Slime', quantity: 100 }
    ],
    unlock: { method: 'skill', condition: 'Combat Level 8' }
  },
  {
    id: 'explosive_ammo',
    name: 'Explosive Ammo',
    category: 'bombs',
    description: 'Fire this from a slingshot. Explodes on contact.',
    materials: [
      { itemId: 'iron_ore', itemName: 'Iron Ore', quantity: 1 },
      { itemId: 'coal', itemName: 'Coal', quantity: 2 }
    ],
    unlock: { method: 'skill', condition: 'Combat Level 8' },
    output: 5
  },

  // PURCHASED RECIPES
  {
    id: 'furnace',
    name: 'Furnace',
    category: 'refining',
    description: 'Turns ore into metal bars. Uses coal as fuel.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 25 },
      { itemId: 'copper_ore', itemName: 'Copper Ore', quantity: 20 }
    ],
    unlock: { method: 'purchase', condition: 'Clint (Blacksmith)', details: 'Unlocked by letter after reaching the bottom of The Mines (level 120)' },
    craftingStation: 'none'
  },
  {
    id: 'garden_pot',
    name: 'Garden Pot',
    category: 'equipment',
    description: 'Plant crops indoors. Requires watering each day.',
    materials: [
      { itemId: 'clay', itemName: 'Clay', quantity: 1 },
      { itemId: 'stone', itemName: 'Stone', quantity: 10 },
      { itemId: 'refined_quartz', itemName: 'Refined Quartz', quantity: 1 }
    ],
    unlock: { method: 'purchase', condition: "Sandy's Oasis Shop", details: '1,000g' }
  },
  {
    id: 'seed_maker',
    name: 'Seed Maker',
    category: 'refining',
    description: 'Place crops inside to produce seeds.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 25 },
      { itemId: 'coal', itemName: 'Coal', quantity: 10 },
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 9' }
  },
  {
    id: 'loom',
    name: 'Loom',
    category: 'artisan',
    description: 'Turns wool into fine cloth.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 60 },
      { itemId: 'fiber', itemName: 'Fiber', quantity: 30 },
      { itemId: 'pine_tar', itemName: 'Pine Tar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 7' }
  },
  {
    id: 'oil_maker',
    name: 'Oil Maker',
    category: 'artisan',
    description: 'Turns sunflower seeds, corn, or sunflowers into oil.',
    materials: [
      { itemId: 'slime', itemName: 'Slime', quantity: 50 },
      { itemId: 'hardwood', itemName: 'Hardwood', quantity: 20 },
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 8' }
  },
  {
    id: 'crystalarium',
    name: 'Crystalarium',
    category: 'refining',
    description: 'Place a gem inside to duplicate it.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 99 },
      { itemId: 'gold_bar', itemName: 'Gold Bar', quantity: 5 },
      { itemId: 'iridium_bar', itemName: 'Iridium Bar', quantity: 2 },
      { itemId: 'battery_pack', itemName: 'Battery Pack', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Mining Level 9' }
  },
  {
    id: 'cheese_press',
    name: 'Cheese Press',
    category: 'artisan',
    description: 'Turns milk into cheese.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 45 },
      { itemId: 'stone', itemName: 'Stone', quantity: 45 },
      { itemId: 'hardwood', itemName: 'Hardwood', quantity: 10 },
      { itemId: 'copper_bar', itemName: 'Copper Bar', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Farming Level 6' }
  },

  // FRIENDSHIP UNLOCKS
  {
    id: 'wood_floor',
    name: 'Wood Floor',
    category: 'flooring',
    description: 'Place on the ground to create paths or new looks to your floors.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 1 }
    ],
    unlock: { method: 'friendship', condition: 'Robin (6 hearts)', details: 'Recipe in mail' }
  },
  {
    id: 'stone_floor',
    name: 'Stone Floor',
    category: 'flooring',
    description: 'Place on the ground to create paths or new looks to your floors.',
    materials: [
      { itemId: 'stone', itemName: 'Stone', quantity: 1 }
    ],
    unlock: { method: 'friendship', condition: 'Robin (6 hearts)', details: 'Recipe in mail' }
  },
  {
    id: 'crystal_path',
    name: 'Crystal Path',
    category: 'flooring',
    description: 'Place on the ground to create a path. Emits a little light.',
    materials: [
      { itemId: 'refined_quartz', itemName: 'Refined Quartz', quantity: 1 }
    ],
    unlock: { method: 'friendship', condition: 'Sandy (7 hearts)', details: 'Recipe in mail' }
  },

  // SPECIAL UNLOCKS
  {
    id: 'wedding_ring',
    name: 'Wedding Ring',
    category: 'other',
    description: 'Give this to the person you want to marry.',
    materials: [
      { itemId: 'iridium_bar', itemName: 'Iridium Bar', quantity: 5 },
      { itemId: 'prismatic_shard', itemName: 'Prismatic Shard', quantity: 1 }
    ],
    unlock: { method: 'purchase', condition: 'Traveling Cart', details: '1,000g (requires 10 hearts with a marriage candidate)' }
  },
  {
    id: 'mushroom_log',
    name: 'Mushroom Log',
    category: 'refining',
    description: 'Place outside. After about 10 days it will begin to produce mushrooms.',
    materials: [
      { itemId: 'hardwood', itemName: 'Hardwood', quantity: 10 },
      { itemId: 'moss', itemName: 'Moss', quantity: 10 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 4' }
  },
  {
    id: 'big_chest',
    name: 'Big Chest',
    category: 'furniture',
    description: 'A place to store items. Can hold up to 70 different items.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 120 },
      { itemId: 'stone', itemName: 'Stone', quantity: 15 }
    ],
    unlock: { method: 'purchase', condition: 'Robin Carpenter Shop', details: '5,000g' }
  },
  {
    id: 'fish_smoker',
    name: 'Fish Smoker',
    category: 'artisan',
    description: 'Can smoke fish. Smoked fish sells for a higher price.',
    materials: [
      { itemId: 'hardwood', itemName: 'Hardwood', quantity: 10 },
      { itemId: 'iron_bar', itemName: 'Iron Bar', quantity: 1 },
      { itemId: 'seaweed', itemName: 'Seaweed', quantity: 5 }
    ],
    unlock: { method: 'skill', condition: 'Fishing Level 9' }
  },
  {
    id: 'dehydrator',
    name: 'Dehydrator',
    category: 'artisan',
    description: 'Can dehydrate mushrooms, fruit, and vegetables.',
    materials: [
      { itemId: 'wood', itemName: 'Wood', quantity: 30 },
      { itemId: 'clay', itemName: 'Clay', quantity: 2 },
      { itemId: 'fire_quartz', itemName: 'Fire Quartz', quantity: 1 }
    ],
    unlock: { method: 'skill', condition: 'Foraging Level 8' }
  }
];

/**
 * Get recipe by ID
 */
export function getRecipeById(id: string): CraftingRecipe | undefined {
  return CRAFTING_RECIPES.find(r => r.id === id);
}

/**
 * Get recipes by category
 */
export function getRecipesByCategory(category: string): CraftingRecipe[] {
  return CRAFTING_RECIPES.filter(r => r.category === category);
}

/**
 * Get recipes that use a specific material
 */
export function getRecipesByMaterial(materialId: string): CraftingRecipe[] {
  return CRAFTING_RECIPES.filter(r =>
    r.materials.some(m => m.itemId === materialId)
  );
}

/**
 * Search recipes by name or description
 */
export function searchRecipes(searchTerm: string): CraftingRecipe[] {
  const term = searchTerm.toLowerCase();
  return CRAFTING_RECIPES.filter(r =>
    r.name.toLowerCase().includes(term) ||
    r.description.toLowerCase().includes(term)
  );
}

/**
 * Get recipes by unlock method
 */
export function getRecipesByUnlockMethod(method: string): CraftingRecipe[] {
  return CRAFTING_RECIPES.filter(r => r.unlock.method === method);
}

/**
 * Get all crafting categories
 */
export function getCategories(): string[] {
  const categories = new Set(CRAFTING_RECIPES.map(r => r.category));
  return Array.from(categories).sort();
}

/**
 * Get recipe statistics
 */
export function getRecipeStats() {
  return {
    total: CRAFTING_RECIPES.length,
    byCategory: getCategories().reduce((acc, cat) => {
      acc[cat] = getRecipesByCategory(cat).length;
      return acc;
    }, {} as Record<string, number>),
    byUnlockMethod: {
      starter: getRecipesByUnlockMethod('starter').length,
      skill: getRecipesByUnlockMethod('skill').length,
      friendship: getRecipesByUnlockMethod('friendship').length,
      purchase: getRecipesByUnlockMethod('purchase').length
    }
  };
}
