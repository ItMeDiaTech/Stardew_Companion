import { Stat, StatCategory } from '@shared/types';

/**
 * Comprehensive Stardew Valley Stats Database
 * Includes all skills, combat stats, attributes, and special stats
 * Addresses common misconceptions with accurate gameplay information
 */

export const STATS: Stat[] = [
  // ============================================================
  // SKILLS (Levelable 0-10)
  // ============================================================
  {
    id: 'farming',
    name: 'Farming',
    category: 'skill',
    description: 'Your expertise in growing and harvesting crops, tending to animals, and producing artisan goods.',
    icon: 'farming',
    isLevelable: true,
    maxLevel: 10,
    levelingInfo: {
      method: 'Gain experience by harvesting crops, caring for animals, milking, shearing, and collecting artisan goods.',
      benefits: [
        'Level 1: Craft Scarecrow',
        'Level 2: Craft Mayonnaise Machine',
        'Level 3: Craft Bee House',
        'Level 4: Craft Preserves Jar',
        'Level 5: Choose profession - Rancher (20% more for animal products) OR Tiller (10% more for crops)',
        'Level 6: Craft Cheese Press',
        'Level 7: Craft Loom',
        'Level 8: Craft Oil Maker',
        'Level 9: Craft Seed Maker',
        'Level 10: Advanced profession - Coopmaster/Shepherd OR Artisan/Agriculturist'
      ],
      professions: [
        { level: 5, name: 'Rancher', description: 'Animal products worth 20% more.' },
        { level: 5, name: 'Tiller', description: 'Crops worth 10% more.' },
        { level: 10, name: 'Coopmaster', description: 'Befriend coop animals quicker. Incubation time halved.', prerequisite: 'Rancher' },
        { level: 10, name: 'Shepherd', description: 'Befriend barn animals quicker. Sheep produce wool faster.', prerequisite: 'Rancher' },
        { level: 10, name: 'Artisan', description: 'Artisan goods worth 40% more. (VERY POPULAR)', prerequisite: 'Tiller' },
        { level: 10, name: 'Agriculturist', description: 'Crops grow 10% faster.', prerequisite: 'Tiller' }
      ]
    },
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Increased crop quality chance',
        formula: 'Quality chance increases with farming level',
        examples: ['Level 0: ~12% chance for silver/gold quality', 'Level 10: ~33% chance for iridium quality with Tiller']
      },
      {
        description: 'Unlock crafting recipes',
        examples: ['Scarecrow at level 1', 'Bee House at level 3', 'Seed Maker at level 9']
      }
    ],
    buffs: [
      { source: 'Farmer\'s Lunch', effect: '+3 Farming', duration: '5m 35s' },
      { source: 'Pumpkin Soup', effect: '+2 Farming', duration: '7m 00s' },
      { source: 'Parsnip Soup', effect: '+1 Farming', duration: '3m 30s' }
    ],
    relatedStats: ['luck']
  },

  {
    id: 'fishing',
    name: 'Fishing',
    category: 'skill',
    description: 'Your proficiency with fishing rods and catching various fish species.',
    icon: 'fishing',
    isLevelable: true,
    maxLevel: 10,
    levelingInfo: {
      method: 'Gain experience by catching fish, collecting items from crab pots, and recycling trash.',
      benefits: [
        'Level 1: Cast distance +1, Craft Bait',
        'Level 2: Cast distance +1, Craft Crab Pot',
        'Level 3: Cast distance +1, Craft Dish O\' The Sea',
        'Level 4: Cast distance +1',
        'Level 5: Cast distance +1, Choose profession - Fisher (25% more for fish) OR Trapper (crafted resources needed for crab pots reduced)',
        'Level 6: Cast distance +1, Craft Spinner, Trap Bobber',
        'Level 7: Cast distance +1, Craft Cork Bobber',
        'Level 8: Cast distance +1, Craft Treasure Hunter, Warp Totem: Beach',
        'Level 9: Cast distance +1, Craft Dressed Spinner',
        'Level 10: Cast distance +1, Advanced profession - Angler/Pirate OR Mariner/Luremaster'
      ],
      professions: [
        { level: 5, name: 'Fisher', description: 'Fish worth 25% more.' },
        { level: 5, name: 'Trapper', description: 'Resources required to craft crab pots reduced.' },
        { level: 10, name: 'Angler', description: 'Fish worth 50% more. (Stacks with Fisher)', prerequisite: 'Fisher' },
        { level: 10, name: 'Pirate', description: 'Chance to find treasures doubled.', prerequisite: 'Fisher' },
        { level: 10, name: 'Mariner', description: 'Crab pots never catch trash.', prerequisite: 'Trapper' },
        { level: 10, name: 'Luremaster', description: 'Crab pots no longer need bait.', prerequisite: 'Trapper' }
      ]
    },
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Increased fishing bar size',
        formula: 'Bar size = 96 + (fishing level × 8)',
        examples: ['Level 0: Bar size 96', 'Level 10: Bar size 176']
      },
      {
        description: 'Increased treasure chest chance',
        formula: 'Base chance increases with fishing level and daily luck',
        examples: ['Higher fishing level = more frequent treasure chests']
      },
      {
        description: 'Better fish quality',
        examples: ['Higher fishing level increases chance of silver/gold/iridium quality fish']
      }
    ],
    buffs: [
      { source: 'Dish O\' The Sea', effect: '+3 Fishing', duration: '5m 35s' },
      { source: 'Seafoam Pudding', effect: '+4 Fishing', duration: '3m 30s' },
      { source: 'Lobster Bisque', effect: '+3 Fishing', duration: '16m 47s' }
    ],
    misconceptions: [
      {
        myth: 'Fishing level doesn\'t affect treasure chests',
        reality: 'Fishing level DOES increase treasure chest frequency',
        explanation: 'Your fishing level directly contributes to the treasure chest chance calculation. Higher fishing level means more treasure chests.'
      }
    ],
    relatedStats: ['luck']
  },

  {
    id: 'foraging',
    name: 'Foraging',
    category: 'skill',
    description: 'Your knowledge of wild plants, wood cutting, and gathering natural resources.',
    icon: 'foraging',
    isLevelable: true,
    maxLevel: 10,
    levelingInfo: {
      method: 'Gain experience by chopping trees, collecting forageable items, and chopping stumps/logs.',
      benefits: [
        'Level 1: Craft Field Snack',
        'Level 2: +1 wood per tree, Craft Survival Burger',
        'Level 3: Craft Tapper',
        'Level 4: +1 wood per tree, Craft Charcoal Kiln',
        'Level 5: Choose profession - Forester (wood worth 50% more) OR Gatherer (20% chance for double harvest)',
        'Level 6: +1 wood per tree, Craft Lightning Rod, Warp Totem: Mountains',
        'Level 7: Craft Tree Fertilizer',
        'Level 8: +1 wood per tree, Craft Warp Totem: Farm',
        'Level 9: Craft Rain Totem',
        'Level 10: Advanced profession - Lumberjack/Tapper OR Botanist/Tracker'
      ],
      professions: [
        { level: 5, name: 'Forester', description: 'Wood worth 50% more.' },
        { level: 5, name: 'Gatherer', description: '20% chance to double forage harvest.' },
        { level: 10, name: 'Lumberjack', description: 'Chance for hardwood to drop from normal trees.', prerequisite: 'Forester' },
        { level: 10, name: 'Tapper', description: 'Syrup worth 25% more.', prerequisite: 'Forester' },
        { level: 10, name: 'Botanist', description: 'Foraged items always highest quality. (VERY POPULAR)', prerequisite: 'Gatherer' },
        { level: 10, name: 'Tracker', description: 'Location of forageable items revealed.', prerequisite: 'Gatherer' }
      ]
    },
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Increased wood per tree',
        formula: '+1 wood per tree every 2 levels (2, 4, 6, 8)',
        examples: ['Level 0: ~5 wood per tree', 'Level 10: ~9 wood per tree']
      },
      {
        description: 'Better quality foraged items',
        examples: ['Higher foraging level increases chance of silver/gold/iridium quality forage']
      },
      {
        description: 'Increased chance of item drops from stumps',
        examples: ['Higher foraging level = better drops from large stumps and logs']
      }
    ],
    buffs: [
      { source: 'Survival Burger', effect: '+3 Foraging', duration: '5m 35s' },
      { source: 'Autumn\'s Bounty', effect: '+2 Foraging', duration: '7m 00s' }
    ],
    relatedStats: ['luck']
  },

  {
    id: 'mining',
    name: 'Mining',
    category: 'skill',
    description: 'Your skill in breaking rocks, exploring caves, and extracting ore from the earth.',
    icon: 'mining',
    isLevelable: true,
    maxLevel: 10,
    levelingInfo: {
      method: 'Gain experience by breaking rocks, mining ore nodes, breaking barrels/crates, and opening geodes.',
      benefits: [
        'Level 1: Craft Cherry Bomb',
        'Level 2: +1 ore per vein, Craft Furnace',
        'Level 3: Craft Iron Bar',
        'Level 4: +1 ore per vein',
        'Level 5: Choose profession - Miner (1 ore per vein) OR Geologist (50% chance for gems to appear in pairs)',
        'Level 6: +1 ore per vein, Craft Bomb, Iron Bar, Quartz',
        'Level 7: Craft Gold Bar',
        'Level 8: +1 ore per vein',
        'Level 9: Craft Crystalarium',
        'Level 10: Advanced profession - Blacksmith/Prospector OR Excavator/Gemologist'
      ],
      professions: [
        { level: 5, name: 'Miner', description: '+1 ore per vein.' },
        { level: 5, name: 'Geologist', description: '50% chance for gems to appear in pairs.' },
        { level: 10, name: 'Blacksmith', description: 'Metal bars worth 50% more.', prerequisite: 'Miner' },
        { level: 10, name: 'Prospector', description: 'Chance to find coal doubled.', prerequisite: 'Miner' },
        { level: 10, name: 'Excavator', description: 'Chance to find geodes doubled.', prerequisite: 'Geologist' },
        { level: 10, name: 'Gemologist', description: 'Gems worth 30% more.', prerequisite: 'Geologist' }
      ]
    },
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Increased ore per vein',
        formula: '+1 ore every 2 levels (2, 4, 6, 8) + Miner profession bonus',
        examples: ['Level 0: 1 ore per vein', 'Level 10 with Miner: 5-6 ore per vein']
      },
      {
        description: 'Better geode contents',
        examples: ['Higher mining level increases chance of rare geode contents']
      }
    ],
    buffs: [
      { source: 'Miner\'s Treat', effect: '+3 Mining', duration: '5m 35s' },
      { source: 'Roots Platter', effect: '+3 Mining', duration: '5m 35s' }
    ],
    misconceptions: [
      {
        myth: 'Mining level affects ore quality (like silver/gold ore)',
        reality: 'Mining level does NOT affect ore type - only quantity per vein',
        explanation: 'The type of ore you get (copper, iron, gold, iridium) is determined by your depth in the mines or Skull Cavern, NOT your mining level. Mining level only increases how many ores you get per vein.'
      },
      {
        myth: 'Higher mining level unlocks better ore types',
        reality: 'Ore types are unlocked by mine depth, not skill level',
        explanation: 'Copper ore appears floors 1-40, Iron ore floors 41-80, Gold ore floors 81+. Your mining level doesn\'t change this.'
      }
    ],
    relatedStats: ['luck']
  },

  {
    id: 'combat',
    name: 'Combat',
    category: 'skill',
    description: 'Your prowess in fighting monsters and defending yourself in dangerous areas.',
    icon: 'combat',
    isLevelable: true,
    maxLevel: 10,
    levelingInfo: {
      method: 'Gain experience by defeating monsters in the mines, Skull Cavern, or during events.',
      benefits: [
        'Level 1: +5 HP, Craft Sturdy Ring',
        'Level 2: +5 HP, Craft Life Elixir',
        'Level 3: +5 HP, Craft Roots Platter',
        'Level 4: +5 HP, Craft Warrior Ring',
        'Level 5: +5 HP, Choose profession - Fighter (+10% damage, +15 HP) OR Scout (+50% crit chance)',
        'Level 6: +5 HP, Craft Slime Egg-Press',
        'Level 7: +5 HP, Craft Oil of Garlic',
        'Level 8: +5 HP, Craft Explosive Ammo',
        'Level 9: +5 HP, Craft Iridium Band',
        'Level 10: +5 HP, Advanced profession - Brute/Defender OR Acrobat/Desperado'
      ],
      professions: [
        { level: 5, name: 'Fighter', description: '+10% damage, +15 HP.' },
        { level: 5, name: 'Scout', description: '+50% critical strike chance.' },
        { level: 10, name: 'Brute', description: '+15% damage.', prerequisite: 'Fighter' },
        { level: 10, name: 'Defender', description: '+25 HP.', prerequisite: 'Fighter' },
        { level: 10, name: 'Acrobat', description: 'Cooldown on special moves halved.', prerequisite: 'Scout' },
        { level: 10, name: 'Desperado', description: 'Critical strikes are deadly. (VERY POPULAR)', prerequisite: 'Scout' }
      ]
    },
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Increased maximum health',
        formula: 'Base HP (100) + (Combat Level × 5) + Profession bonuses',
        examples: ['Level 0: 100 HP', 'Level 10: 150 HP', 'Level 10 Fighter/Defender: 190 HP']
      },
      {
        description: 'Unlock crafting recipes',
        examples: ['Warrior Ring at level 4', 'Iridium Band at level 9']
      }
    ],
    buffs: [
      { source: 'Roots Platter', effect: '+3 Combat', duration: '5m 35s' },
      { source: 'Magic Rock Candy', effect: '+5 Combat', duration: '8m 24s' }
    ],
    relatedStats: ['health', 'attack', 'defense', 'crit-chance', 'crit-power']
  },

  // ============================================================
  // COMBAT STATS
  // ============================================================
  {
    id: 'health',
    name: 'Health (HP)',
    category: 'combat',
    description: 'Your maximum health points. When health reaches 0, you pass out and lose items/money.',
    icon: 'health',
    isLevelable: false,
    baseValue: '100 HP',
    gameplayEffects: [
      {
        description: 'Determines how much damage you can take before passing out',
        formula: 'Base (100) + Combat Level × 5 + Profession bonuses + Food buffs',
        examples: ['Starting: 100 HP', 'Level 10 Combat: 150 HP', 'Level 10 Fighter: 165 HP', 'Level 10 Fighter/Defender: 190 HP']
      },
      {
        description: 'Passing out consequences',
        examples: [
          'Passing out in mines: Lose money, lose items, wake up at home',
          'Passing out from exhaustion (2am): Lose energy, small money loss'
        ]
      }
    ],
    buffs: [
      { source: 'Life Elixir', effect: 'Full HP restore', duration: 'Instant' },
      { source: 'Max Ener-Juice', effect: '+200 Max HP', duration: '2m 30s', stackable: false },
      { source: 'Combat Level', effect: '+5 HP per level', duration: 'Permanent' },
      { source: 'Fighter Profession', effect: '+15 HP', duration: 'Permanent' },
      { source: 'Defender Profession', effect: '+25 HP', duration: 'Permanent' }
    ],
    relatedStats: ['combat', 'defense', 'immunity']
  },

  {
    id: 'energy',
    name: 'Energy (Stamina)',
    category: 'attribute',
    description: 'Your stamina for performing daily activities. Most actions consume energy.',
    icon: 'energy',
    isLevelable: false,
    baseValue: '270 Energy',
    gameplayEffects: [
      {
        description: 'Determines how many actions you can perform per day',
        formula: 'Base (270) + Permanent increases from Stardrop fruits',
        examples: ['Starting: 270 energy', 'All 7 Stardrops collected: 508 energy']
      },
      {
        description: 'Energy consumption',
        examples: [
          'Using tools: Varies by tool and upgrade level',
          'Watering can: 2 energy per tile (basic), 1 energy (iridium)',
          'Fishing: Depends on catch difficulty',
          'Mining: Breaking rocks consumes energy'
        ]
      },
      {
        description: 'Low energy penalties',
        examples: [
          'Below 0 energy: Movement slows, "exhausted" status',
          'Staying up past 2am: Energy penalty next day'
        ]
      }
    ],
    buffs: [
      { source: 'Stardrop', effect: '+34 Max Energy', duration: 'Permanent', stackable: true },
      { source: 'Field Snack', effect: '+45 Energy', duration: 'Instant' },
      { source: 'Energy Tonic', effect: '+200 Energy', duration: 'Instant' },
      { source: 'Max Ener-Juice', effect: '+400 Max Energy', duration: '2m 30s', stackable: false }
    ],
    relatedStats: []
  },

  {
    id: 'attack',
    name: 'Attack',
    category: 'combat',
    description: 'Your base damage dealt to enemies before weapon damage is applied.',
    icon: 'attack',
    isLevelable: false,
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Added to weapon damage when calculating total damage',
        formula: 'Total Damage = Weapon Damage + Attack stat + Bonuses',
        examples: [
          'Rusty Sword (2-5 damage) + 0 Attack = 2-5 total damage',
          'Rusty Sword + 10 Attack = 12-15 total damage'
        ]
      }
    ],
    buffs: [
      { source: 'Fighter Profession', effect: '+10% final damage', duration: 'Permanent' },
      { source: 'Brute Profession', effect: '+15% final damage (additive with Fighter)', duration: 'Permanent' },
      { source: 'Squid Ink Ravioli', effect: '+5 Attack', duration: '16m 47s' },
      { source: 'Roots Platter', effect: '+3 Attack', duration: '5m 35s' },
      { source: 'Warrior Ring', effect: '+5 Attack', duration: 'While equipped' },
      { source: 'Iridium Band', effect: '+10% Attack', duration: 'While equipped' }
    ],
    relatedStats: ['combat', 'crit-chance', 'crit-power']
  },

  {
    id: 'defense',
    name: 'Defense',
    category: 'combat',
    description: 'Reduces damage taken from enemy attacks.',
    icon: 'defense',
    isLevelable: false,
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Directly reduces damage from each hit',
        formula: 'Damage Taken = Max(1, Enemy Damage - Your Defense)',
        examples: [
          'Enemy deals 15 damage, you have 5 defense: Take 10 damage',
          'Enemy deals 15 damage, you have 20 defense: Take 1 damage (minimum)'
        ]
      }
    ],
    buffs: [
      { source: 'Boots (various)', effect: '+1 to +4 Defense', duration: 'While equipped' },
      { source: 'Rings (Crabshell, etc)', effect: '+5 Defense', duration: 'While equipped' },
      { source: 'Eggplant Parmesan', effect: '+3 Defense', duration: '7m 00s' },
      { source: 'Fried Eel', effect: '+1 Defense', duration: '16m 47s' }
    ],
    relatedStats: ['health', 'immunity']
  },

  {
    id: 'crit-chance',
    name: 'Critical Strike Chance',
    category: 'combat',
    description: 'The probability of landing a critical hit that deals extra damage.',
    icon: 'crit',
    isLevelable: false,
    baseValue: '0.02 (2%)',
    gameplayEffects: [
      {
        description: 'Chance to deal critical damage',
        formula: 'Base (2%) + Weapon bonus + Profession bonuses + Buffs',
        examples: [
          'Base: 2% chance',
          'Scout profession: 52% chance (2% + 50%)',
          'Neptune\'s Glaive weapon: 54% chance (Scout + weapon\'s 2%)'
        ]
      }
    ],
    buffs: [
      { source: 'Scout Profession', effect: '+50% (additive)', duration: 'Permanent' },
      { source: 'Fighter Profession', effect: 'Affects crit damage via attack bonus', duration: 'Permanent' },
      { source: 'Desperado Profession', effect: 'Critical strikes are deadly', duration: 'Permanent' },
      { source: 'Certain Weapons', effect: '+2% to +6%', duration: 'While equipped' }
    ],
    misconceptions: [
      {
        myth: 'Critical hits deal 2x damage',
        reality: 'Critical hits deal 3x damage by default',
        explanation: 'The base critical power multiplier is 3.0, not 2.0. This means crits deal triple damage, and can be increased further with crit power bonuses.'
      }
    ],
    relatedStats: ['combat', 'attack', 'crit-power']
  },

  {
    id: 'crit-power',
    name: 'Critical Power',
    category: 'combat',
    description: 'Multiplier applied to damage when you land a critical hit.',
    icon: 'crit-power',
    isLevelable: false,
    baseValue: '3.0x (Triple damage)',
    gameplayEffects: [
      {
        description: 'Multiplies your damage on critical hits',
        formula: 'Crit Damage = Normal Damage × Critical Power',
        examples: [
          'Base: 3.0x damage (triple)',
          'With +50 crit power bonus: 3.5x damage',
          'Desperado profession: Significantly increased'
        ]
      }
    ],
    buffs: [
      { source: 'Desperado Profession', effect: 'Massive crit power increase', duration: 'Permanent' },
      { source: 'Aquamarine Ring', effect: '+10% Crit Power', duration: 'While equipped' }
    ],
    misconceptions: [
      {
        myth: 'Base critical power is 2x',
        reality: 'Base critical power is 3x damage',
        explanation: 'Many players assume crits deal double damage, but Stardew Valley crits actually deal triple damage by default. This makes critical chance and critical power very valuable stats.'
      }
    ],
    relatedStats: ['combat', 'attack', 'crit-chance']
  },

  {
    id: 'immunity',
    name: 'Immunity',
    category: 'combat',
    description: 'Reduces the duration of negative status effects from enemies and environmental hazards.',
    icon: 'immunity',
    isLevelable: false,
    baseValue: '0',
    gameplayEffects: [
      {
        description: 'Shortens debuff duration',
        formula: 'Reduced Duration = Original Duration - (Immunity × time factor)',
        examples: [
          'Slimed debuff normally lasts 2.5 seconds',
          'With immunity, duration is reduced proportionally'
        ]
      }
    ],
    buffs: [
      { source: 'Boots (various)', effect: '+1 to +4 Immunity', duration: 'While equipped' },
      { source: 'Sturdy Ring', effect: '+1 Immunity', duration: 'While equipped' },
      { source: 'Immunity Band', effect: '+4 Immunity', duration: 'While equipped' }
    ],
    misconceptions: [
      {
        myth: 'Immunity prevents all debuffs',
        reality: 'Immunity only reduces debuff duration, does not prevent them',
        explanation: 'Even with high immunity, you will still get debuffs like "slimed" or "tipsy" - they just won\'t last as long. Immunity does not make you immune to debuffs entirely.'
      }
    ],
    relatedStats: ['health', 'defense']
  },

  // ============================================================
  // ATTRIBUTES
  // ============================================================
  {
    id: 'speed',
    name: 'Speed',
    category: 'attribute',
    description: 'Your movement speed while walking and running.',
    icon: 'speed',
    isLevelable: false,
    baseValue: '5 (base running speed)',
    gameplayEffects: [
      {
        description: 'How fast you move around the game world',
        formula: 'Movement speed = Base speed + Buffs - Debuffs',
        examples: [
          'Base running: Speed 5',
          'With Coffee: Speed 6',
          'With multiple speed buffs: Effects vary'
        ]
      }
    ],
    buffs: [
      { source: 'Coffee', effect: '+1 Speed', duration: '1m 23s', stackable: false },
      { source: 'Espresso', effect: '+1 Speed', duration: '4m 12s', stackable: false },
      { source: 'Triple Shot Espresso', effect: '+1 Speed', duration: '4m 12s', stackable: false },
      { source: 'Spicy Eel', effect: '+1 Speed', duration: '7m 00s', stackable: false },
      { source: 'Crab Cakes', effect: '+1 Speed', duration: '16m 47s', stackable: false },
      { source: 'Hyperactive debuff', effect: '-1 Speed', duration: 'Varies' }
    ],
    misconceptions: [
      {
        myth: 'Speed buffs stack multiplicatively or indefinitely',
        reality: 'Most food speed buffs don\'t stack - only the highest applies',
        explanation: 'Drinking multiple coffees or eating multiple speed foods won\'t make you faster. Only the most recent speed buff applies. However, some equipment bonuses may stack differently.'
      }
    ],
    relatedStats: []
  },

  {
    id: 'magnetism',
    name: 'Magnetism',
    category: 'attribute',
    description: 'The radius at which items are automatically attracted to you.',
    icon: 'magnet',
    isLevelable: false,
    baseValue: '128 pixels (base pickup range)',
    gameplayEffects: [
      {
        description: 'Automatic item collection radius',
        formula: 'Pickup Range = Base range + Magnet bonuses',
        examples: [
          'Base: Small pickup radius',
          'With Iridium Band: Large pickup radius',
          'Makes collecting forage, crops, and drops much easier'
        ]
      }
    ],
    buffs: [
      { source: 'Magnet Ring', effect: '+128 pixels range', duration: 'While equipped', stackable: true },
      { source: 'Iridium Band', effect: '+128 pixels range', duration: 'While equipped', stackable: true }
    ],
    relatedStats: []
  },

  // ============================================================
  // SPECIAL STATS
  // ============================================================
  {
    id: 'luck',
    name: 'Daily Luck',
    category: 'special',
    description: 'A hidden stat that changes daily and affects many random events in the game.',
    icon: 'luck',
    isLevelable: false,
    baseValue: 'Varies daily (-0.1 to +0.1)',
    gameplayEffects: [
      {
        description: 'Check the Fortune Teller TV channel each morning for your luck',
        examples: [
          '"The spirits are very happy" = Best luck',
          '"The spirits are very displeased" = Worst luck'
        ]
      },
      {
        description: 'Affects many game mechanics',
        examples: [
          'Treasure chest chance while fishing',
          'Rare drop chance from monsters',
          'Geode contents quality',
          'Finding prismatic shards',
          'Ladder/shaft spawn chance in mines',
          'Crop quality (minor effect)',
          'Gift reactions (minor effect)'
        ]
      }
    ],
    buffs: [
      { source: 'Lucky Lunch', effect: '+3 Luck', duration: '11m 12s' },
      { source: 'Magic Rock Candy', effect: '+5 Luck', duration: '8m 24s' },
      { source: 'Spicy Eel', effect: '+1 Luck', duration: '7m 00s' },
      { source: 'Pumpkin Soup', effect: '+3 Luck', duration: '7m 00s' },
      { source: 'Lucky Ring', effect: '+1 Luck', duration: 'While equipped' },
      { source: 'Secret Statues', effect: 'Permanent +0.025 daily luck boost', duration: 'Permanent' }
    ],
    misconceptions: [
      {
        myth: 'Luck and Daily Luck are different stats',
        reality: 'They are the same stat - "Daily Luck" is the correct term',
        explanation: 'The game uses one luck value per day. Food and equipment provide "luck buffs" that add to your daily luck. There is no separate "luck" stat - it\'s all one unified system.'
      },
      {
        myth: 'Luck has a huge impact on crop quality',
        reality: 'Luck has a very minor effect on crops - Farming skill matters much more',
        explanation: 'While luck does technically affect crop quality, the impact is very small. Your Farming level, fertilizer quality, and professions have a much larger effect on crop quality.'
      },
      {
        myth: 'You can control your daily luck',
        reality: 'Daily luck is random each day and cannot be changed (except with certain rare permanent unlocks)',
        explanation: 'Your base daily luck is randomized when you wake up and cannot be changed. However, you can ADD to it with food buffs and equipment. Certain late-game secrets can provide small permanent daily luck boosts.'
      }
    ],
    relatedStats: ['fishing', 'mining', 'foraging', 'farming']
  },

  {
    id: 'friendship',
    name: 'Friendship',
    category: 'special',
    description: 'Your relationship level with villagers, measured in hearts (0-10 or 0-14 for spouses).',
    icon: 'heart',
    isLevelable: true,
    maxLevel: 14,
    levelingInfo: {
      method: 'Talk to villagers daily, give them gifts (2 per week), complete quests, and unlock heart events.',
      benefits: [
        '1 Heart: Unlock some dialogue',
        '2 Hearts: First heart event (most villagers)',
        '3 Hearts: Villager may send you cooking recipes',
        '4 Hearts: Second heart event',
        '6 Hearts: Third heart event',
        '8 Hearts: Fourth heart event (marriage candidates require bouquet first)',
        '10 Hearts: Fifth heart event (marriage candidates)',
        '10 Hearts: Friendship maxed for non-marriage candidates',
        '12 Hearts: Requires marriage to reach',
        '14 Hearts: Maximum friendship with spouse'
      ]
    },
    baseValue: '0 Hearts',
    gameplayEffects: [
      {
        description: 'Friendship points determine heart level',
        formula: '250 points per heart (0-2500 for non-marriageable, 0-3500 for spouse)',
        examples: [
          '0 points = 0 hearts',
          '250 points = 1 heart',
          '2500 points = 10 hearts'
        ]
      },
      {
        description: 'Ways to gain friendship',
        examples: [
          'Talk daily: +20 points',
          'Give loved gift: +80 points',
          'Give liked gift: +45 points',
          'Complete quests: Varies',
          'Birthday gift (loved): +640 points (8x multiplier)'
        ]
      },
      {
        description: 'Ways to lose friendship',
        examples: [
          'Give hated gift: -40 points',
          'Give disliked gift: -20 points',
          'Not talking for a while: -2 points per day after ~1 week',
          'Rummaging through trash while villager watches: -25 points'
        ]
      }
    ],
    buffs: [],
    relatedStats: []
  }
];

/**
 * Get all stats
 */
export function getAllStats(): Stat[] {
  return STATS;
}

/**
 * Get stats by category
 */
export function getStatsByCategory(category: StatCategory): Stat[] {
  return STATS.filter(stat => stat.category === category);
}

/**
 * Get stat by ID
 */
export function getStatById(id: string): Stat | undefined {
  return STATS.find(stat => stat.id === id);
}

/**
 * Search stats by name or description
 */
export function searchStats(searchTerm: string): Stat[] {
  const term = searchTerm.toLowerCase();
  return STATS.filter(stat =>
    stat.name.toLowerCase().includes(term) ||
    stat.description.toLowerCase().includes(term)
  );
}

/**
 * Get levelable stats only
 */
export function getLevelableStats(): Stat[] {
  return STATS.filter(stat => stat.isLevelable);
}

/**
 * Get stats with misconceptions
 */
export function getStatsWithMisconceptions(): Stat[] {
  return STATS.filter(stat => stat.misconceptions && stat.misconceptions.length > 0);
}
