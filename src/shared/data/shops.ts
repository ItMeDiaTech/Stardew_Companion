import { Shop } from '../types';

/**
 * Comprehensive shop data for Stardew Valley
 */
export const SHOPS: Shop[] = [
  {
    id: 'pierres',
    name: "Pierre's General Store",
    owner: 'Pierre',
    location: 'Pelican Town - Town Square',
    hours: {
      openTime: '9:00 AM',
      closeTime: '5:00 PM',
      closedDays: ['Wednesday'],
      specialNotes: 'Open every day after Community Center completion or with Key to the Town'
    },
    description: 'The main general store selling seeds, saplings, and farming supplies.',
    items: [
      // Year-round items
      { id: 'grass_starter', name: 'Grass Starter', price: 100, category: 'other' },
      { id: 'sugar', name: 'Sugar', price: 100, category: 'ingredient' },
      { id: 'wheat_flour', name: 'Wheat Flour', price: 100, category: 'ingredient' },
      { id: 'rice', name: 'Rice', price: 200, category: 'ingredient' },
      { id: 'oil', name: 'Oil', price: 200, category: 'ingredient' },
      { id: 'vinegar', name: 'Vinegar', price: 200, category: 'ingredient' },
      { id: 'basic_fertilizer', name: 'Basic Fertilizer', price: 100, category: 'fertilizer' },
      { id: 'quality_fertilizer', name: 'Quality Fertilizer', price: 150, category: 'fertilizer' },
      { id: 'basic_retaining_soil', name: 'Basic Retaining Soil', price: 100, category: 'fertilizer' },
      { id: 'quality_retaining_soil', name: 'Quality Retaining Soil', price: 150, category: 'fertilizer' },
      { id: 'speed_gro', name: 'Speed-Gro', price: 100, category: 'fertilizer' },
      { id: 'deluxe_speed_gro', name: 'Deluxe Speed-Gro', price: 150, category: 'fertilizer' },
      { id: 'bouquet', name: 'Bouquet', price: 200, category: 'other', description: 'Gift for dating' },

      // Saplings
      { id: 'cherry_sapling', name: 'Cherry Sapling', price: 3400, category: 'saplings', availability: { seasons: ['Spring'] } },
      { id: 'apricot_sapling', name: 'Apricot Sapling', price: 2000, category: 'saplings', availability: { seasons: ['Spring'] } },
      { id: 'orange_sapling', name: 'Orange Sapling', price: 4000, category: 'saplings', availability: { seasons: ['Summer'] } },
      { id: 'peach_sapling', name: 'Peach Sapling', price: 6000, category: 'saplings', availability: { seasons: ['Summer'] } },
      { id: 'pomegranate_sapling', name: 'Pomegranate Sapling', price: 6000, category: 'saplings', availability: { seasons: ['Fall'] } },
      { id: 'apple_sapling', name: 'Apple Sapling', price: 4000, category: 'saplings', availability: { seasons: ['Fall'] } },

      // Spring Seeds
      { id: 'parsnip_seeds', name: 'Parsnip Seeds', price: 20, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'bean_starter', name: 'Bean Starter', price: 60, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'cauliflower_seeds', name: 'Cauliflower Seeds', price: 80, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'potato_seeds', name: 'Potato Seeds', price: 50, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'tulip_bulb', name: 'Tulip Bulb', price: 20, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'kale_seeds', name: 'Kale Seeds', price: 70, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'jazz_seeds', name: 'Jazz Seeds', price: 30, category: 'seeds', availability: { seasons: ['Spring'] } },

      // Summer Seeds
      { id: 'melon_seeds', name: 'Melon Seeds', price: 80, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'tomato_seeds', name: 'Tomato Seeds', price: 50, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'blueberry_seeds', name: 'Blueberry Seeds', price: 80, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'pepper_seeds', name: 'Pepper Seeds', price: 40, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'wheat_seeds', name: 'Wheat Seeds', price: 10, category: 'seeds', availability: { seasons: ['Summer', 'Fall'] } },
      { id: 'radish_seeds', name: 'Radish Seeds', price: 40, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'poppy_seeds', name: 'Poppy Seeds', price: 100, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'spangle_seeds', name: 'Spangle Seeds', price: 50, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'hops_starter', name: 'Hops Starter', price: 60, category: 'seeds', availability: { seasons: ['Summer'] } },

      // Fall Seeds
      { id: 'corn_seeds', name: 'Corn Seeds', price: 150, category: 'seeds', availability: { seasons: ['Summer', 'Fall'] } },
      { id: 'pumpkin_seeds', name: 'Pumpkin Seeds', price: 100, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'eggplant_seeds', name: 'Eggplant Seeds', price: 20, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'bok_choy_seeds', name: 'Bok Choy Seeds', price: 50, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'yam_seeds', name: 'Yam Seeds', price: 60, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'cranberry_seeds', name: 'Cranberry Seeds', price: 240, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'fairy_seeds', name: 'Fairy Seeds', price: 200, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'amaranth_seeds', name: 'Amaranth Seeds', price: 70, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'grape_starter', name: 'Grape Starter', price: 60, category: 'seeds', availability: { seasons: ['Fall'] } },
      { id: 'artichoke_seeds', name: 'Artichoke Seeds', price: 30, category: 'seeds', availability: { seasons: ['Fall'], year: 2 } },

      // Year-round seeds
      { id: 'sunflower_seeds', name: 'Sunflower Seeds', price: 200, category: 'seeds', availability: { seasons: ['Summer', 'Fall'] } }
    ]
  },
  {
    id: 'jojamart',
    name: 'JojaMart',
    owner: 'Morris',
    location: 'East of Pelican Town',
    hours: {
      openTime: '9:00 AM',
      closeTime: '11:00 PM',
      closedDays: [],
      specialNotes: 'Permanently closes after Community Center completion'
    },
    description: 'Large corporate store with extended hours. Higher prices without membership.',
    items: [
      // Similar items to Pierre's but with higher base prices
      { id: 'joja_sugar', name: 'Sugar', price: 150, category: 'ingredient' },
      { id: 'joja_wheat_flour', name: 'Wheat Flour', price: 150, category: 'ingredient' },
      { id: 'joja_rice', name: 'Rice', price: 250, category: 'ingredient' },
      { id: 'joja_cola', name: 'Joja Cola', price: 75, category: 'food' },
      { id: 'joja_membership', name: 'Joja Membership', price: 5000, category: 'other', description: 'Unlocks Joja Community Development' }
    ]
  },
  {
    id: 'robins',
    name: "Robin's Carpenter Shop",
    owner: 'Robin',
    location: 'Mountain - Northeast',
    hours: {
      openTime: '9:00 AM',
      closeTime: '5:00 PM',
      closedDays: ['Tuesday'],
      specialNotes: 'Closes at 4:00 PM on Fridays. Closed when working on farm construction.'
    },
    description: 'Building construction and upgrades. Also sells furniture and building materials.',
    items: [
      // Buildings
      { id: 'coop', name: 'Coop', price: 4000, category: 'upgrade', description: 'Basic chicken coop (100 wood, 300 stone required)' },
      { id: 'big_coop', name: 'Big Coop', price: 10000, category: 'upgrade', description: 'Upgraded coop (150 wood, 200 stone required)' },
      { id: 'deluxe_coop', name: 'Deluxe Coop', price: 20000, category: 'upgrade', description: 'Deluxe coop (200 wood, 200 stone required)' },
      { id: 'barn', name: 'Barn', price: 6000, category: 'upgrade', description: 'Basic barn (150 wood, 350 stone required)' },
      { id: 'big_barn', name: 'Big Barn', price: 12000, category: 'upgrade', description: 'Upgraded barn (200 wood, 250 stone required)' },
      { id: 'deluxe_barn', name: 'Deluxe Barn', price: 25000, category: 'upgrade', description: 'Deluxe barn (300 wood, 200 stone required)' },
      { id: 'silo', name: 'Silo', price: 100, category: 'upgrade', description: 'Hay storage (100 stone, 10 clay, 5 copper bars required)' },
      { id: 'shed', name: 'Shed', price: 15000, category: 'upgrade', description: 'Storage building (300 wood required)' },
      { id: 'fish_pond', name: 'Fish Pond', price: 5000, category: 'upgrade', description: 'Raise fish (200 stone, 5 seaweed, 5 green algae required)' },

      // House upgrades
      { id: 'house_upgrade_1', name: 'House Upgrade 1', price: 10000, category: 'upgrade', description: 'Kitchen (450 wood required)' },
      { id: 'house_upgrade_2', name: 'House Upgrade 2', price: 50000, category: 'upgrade', description: 'Bedroom & nursery (150 hardwood required)' },
      { id: 'house_upgrade_3', name: 'House Upgrade 3', price: 100000, category: 'upgrade', description: 'Cellar (100 hardwood required)' },

      // Materials
      { id: 'wood', name: 'Wood', price: 10, category: 'other' },
      { id: 'stone', name: 'Stone', price: 20, category: 'other' },
      { id: 'hardwood', name: 'Hardwood', price: 50, category: 'other' }
    ]
  },
  {
    id: 'clints',
    name: "Clint's Blacksmith",
    owner: 'Clint',
    location: 'Pelican Town - East',
    hours: {
      openTime: '9:00 AM',
      closeTime: '4:00 PM',
      closedDays: [],
      specialNotes: 'Closed Fridays after Community Center restoration. Closed Winter 16.'
    },
    description: 'Tool upgrades, ore processing, and geode breaking.',
    items: [
      // Tool upgrades
      { id: 'copper_axe', name: 'Copper Axe Upgrade', price: 2000, category: 'upgrade', description: '5 copper bars required' },
      { id: 'copper_pickaxe', name: 'Copper Pickaxe Upgrade', price: 2000, category: 'upgrade', description: '5 copper bars required' },
      { id: 'copper_hoe', name: 'Copper Hoe Upgrade', price: 2000, category: 'upgrade', description: '5 copper bars required' },
      { id: 'copper_watering_can', name: 'Copper Watering Can Upgrade', price: 2000, category: 'upgrade', description: '5 copper bars required' },

      { id: 'steel_axe', name: 'Steel Axe Upgrade', price: 5000, category: 'upgrade', description: '5 iron bars required' },
      { id: 'steel_pickaxe', name: 'Steel Pickaxe Upgrade', price: 5000, category: 'upgrade', description: '5 iron bars required' },
      { id: 'steel_hoe', name: 'Steel Hoe Upgrade', price: 5000, category: 'upgrade', description: '5 iron bars required' },
      { id: 'steel_watering_can', name: 'Steel Watering Can Upgrade', price: 5000, category: 'upgrade', description: '5 iron bars required' },

      { id: 'gold_axe', name: 'Gold Axe Upgrade', price: 10000, category: 'upgrade', description: '5 gold bars required' },
      { id: 'gold_pickaxe', name: 'Gold Pickaxe Upgrade', price: 10000, category: 'upgrade', description: '5 gold bars required' },
      { id: 'gold_hoe', name: 'Gold Hoe Upgrade', price: 10000, category: 'upgrade', description: '5 gold bars required' },
      { id: 'gold_watering_can', name: 'Gold Watering Can Upgrade', price: 10000, category: 'upgrade', description: '5 gold bars required' },

      { id: 'iridium_axe', name: 'Iridium Axe Upgrade', price: 25000, category: 'upgrade', description: '5 iridium bars required' },
      { id: 'iridium_pickaxe', name: 'Iridium Pickaxe Upgrade', price: 25000, category: 'upgrade', description: '5 iridium bars required' },
      { id: 'iridium_hoe', name: 'Iridium Hoe Upgrade', price: 25000, category: 'upgrade', description: '5 iridium bars required' },
      { id: 'iridium_watering_can', name: 'Iridium Watering Can Upgrade', price: 25000, category: 'upgrade', description: '5 iridium bars required' },

      // Other services
      { id: 'geode_processing', name: 'Geode Processing', price: 25, category: 'other', description: 'Per geode' },
      { id: 'coal', name: 'Coal', price: 150, category: 'other' },
      { id: 'copper_ore', name: 'Copper Ore', price: 75, category: 'other' },
      { id: 'iron_ore', name: 'Iron Ore', price: 150, category: 'other' },
      { id: 'gold_ore', name: 'Gold Ore', price: 400, category: 'other' }
    ]
  },
  {
    id: 'marnies',
    name: "Marnie's Ranch",
    owner: 'Marnie',
    location: 'Cindersap Forest - South',
    hours: {
      openTime: '9:00 AM',
      closeTime: '4:00 PM',
      closedDays: ['Monday', 'Tuesday'],
      specialNotes: 'Extended hours available with Animal Catalogue'
    },
    description: 'Animals, animal supplies, and hay.',
    items: [
      // Animals
      { id: 'chicken', name: 'Chicken', price: 800, category: 'animal' },
      { id: 'dairy_cow', name: 'Dairy Cow', price: 1500, category: 'animal' },
      { id: 'goat', name: 'Goat', price: 4000, category: 'animal', availability: { condition: 'Big Barn required' } },
      { id: 'duck', name: 'Duck', price: 1200, category: 'animal', availability: { condition: 'Big Coop required' } },
      { id: 'sheep', name: 'Sheep', price: 8000, category: 'animal', availability: { condition: 'Deluxe Barn required' } },
      { id: 'rabbit', name: 'Rabbit', price: 8000, category: 'animal', availability: { condition: 'Deluxe Coop required' } },
      { id: 'pig', name: 'Pig', price: 16000, category: 'animal', availability: { condition: 'Deluxe Barn required' } },

      // Supplies
      { id: 'hay', name: 'Hay', price: 50, category: 'animal' },
      { id: 'heater', name: 'Heater', price: 2000, category: 'animal', description: 'Keeps animals happy in winter' },
      { id: 'milk_pail', name: 'Milk Pail', price: 1000, category: 'tool' },
      { id: 'shears', name: 'Shears', price: 1000, category: 'tool' },
      { id: 'auto_grabber', name: 'Auto-Grabber', price: 25000, category: 'other', description: 'Automatically collects produce' }
    ]
  },
  {
    id: 'willys',
    name: "Willy's Fish Shop",
    owner: 'Willy',
    location: 'Beach',
    hours: {
      openTime: '9:00 AM',
      closeTime: '5:00 PM',
      closedDays: ['Saturday'],
      specialNotes: 'Closed on rainy days in Spring. Opens at 8:00 AM after unlocking Ginger Island. Closed Spring 9.'
    },
    description: 'Fishing equipment and supplies.',
    items: [
      // Fishing rods
      { id: 'bamboo_pole', name: 'Bamboo Pole', price: 500, category: 'tool' },
      { id: 'fiberglass_rod', name: 'Fiberglass Rod', price: 1800, category: 'tool', availability: { condition: 'Fishing level 2' } },
      { id: 'iridium_rod', name: 'Iridium Rod', price: 7500, category: 'tool', availability: { condition: 'Fishing level 6' } },

      // Bait and tackle
      { id: 'bait', name: 'Bait', price: 5, category: 'bait' },
      { id: 'wild_bait', name: 'Wild Bait', price: 10, category: 'bait' },
      { id: 'magnet', name: 'Magnet', price: 1000, category: 'bait' },
      { id: 'spinner', name: 'Spinner', price: 500, category: 'bait' },
      { id: 'dressed_spinner', name: 'Dressed Spinner', price: 1000, category: 'bait' },
      { id: 'trap_bobber', name: 'Trap Bobber', price: 500, category: 'bait' },
      { id: 'cork_bobber', name: 'Cork Bobber', price: 750, category: 'bait' },
      { id: 'treasure_hunter', name: 'Treasure Hunter', price: 750, category: 'bait' },
      { id: 'barbed_hook', name: 'Barbed Hook', price: 1000, category: 'bait' },
      { id: 'lead_bobber', name: 'Lead Bobber', price: 200, category: 'bait' },

      // Other
      { id: 'crab_pot', name: 'Crab Pot', price: 1500, category: 'tool' },
      { id: 'trout_soup', name: 'Trout Soup', price: 250, category: 'food', description: 'Fishing +1 for 16m 47s' }
    ]
  },
  {
    id: 'harveys',
    name: "Harvey's Clinic",
    owner: 'Harvey',
    location: 'Pelican Town - Northwest',
    hours: {
      openTime: '9:00 AM',
      closeTime: '3:00 PM',
      closedDays: ['Saturday'],
      specialNotes: 'Reduced hours compared to other shops'
    },
    description: 'Medical care and energy tonic.',
    items: [
      { id: 'energy_tonic', name: 'Energy Tonic', price: 1000, category: 'food', description: 'Restores 500 energy' },
      { id: 'muscle_remedy', name: 'Muscle Remedy', price: 1000, category: 'food', description: 'Removes exhaustion' }
    ]
  },
  {
    id: 'saloon',
    name: 'Stardrop Saloon',
    owner: 'Gus',
    location: 'Pelican Town - Center',
    hours: {
      openTime: '12:00 PM',
      closeTime: '12:00 AM',
      closedDays: [],
      specialNotes: 'Food available all hours'
    },
    description: 'Food, drinks, and recipes.',
    items: [
      // Food
      { id: 'salad', name: 'Salad', price: 220, category: 'food' },
      { id: 'hashbrowns', name: 'Hashbrowns', price: 240, category: 'food' },
      { id: 'omelet', name: 'Omelet', price: 250, category: 'food' },
      { id: 'pancakes', name: 'Pancakes', price: 500, category: 'food' },
      { id: 'bread', name: 'Bread', price: 120, category: 'food' },
      { id: 'tortilla', name: 'Tortilla', price: 100, category: 'food' },
      { id: 'pizza', name: 'Pizza', price: 600, category: 'food' },
      { id: 'spaghetti', name: 'Spaghetti', price: 240, category: 'food' },
      { id: 'triple_shot_espresso', name: 'Triple Shot Espresso', price: 450, category: 'food', description: 'Speed +1' },

      // Drinks
      { id: 'beer', name: 'Beer', price: 400, category: 'food' },
      { id: 'pale_ale', name: 'Pale Ale', price: 300, category: 'food' },
      { id: 'coffee', name: 'Coffee', price: 300, category: 'food', description: 'Speed +1' },

      // Recipes (available on certain days)
      { id: 'cookies_recipe', name: 'Cookies Recipe', price: 2000, category: 'recipe', availability: { condition: 'Winter 7+' } },
      { id: 'pancakes_recipe', name: 'Pancakes Recipe', price: 1000, category: 'recipe' }
    ]
  },
  {
    id: 'oasis',
    name: 'Oasis',
    owner: 'Sandy',
    location: 'Calico Desert',
    hours: {
      openTime: '10:00 AM',
      closeTime: '10:00 PM',
      closedDays: [],
      specialNotes: 'Requires bus repair (40,000g or Community Center bundles)'
    },
    description: 'Desert shop with rare seeds and items.',
    items: [
      // Seeds
      { id: 'starfruit_seeds', name: 'Starfruit Seeds', price: 400, category: 'seeds', availability: { seasons: ['Summer'] } },
      { id: 'rhubarb_seeds', name: 'Rhubarb Seeds', price: 100, category: 'seeds', availability: { seasons: ['Spring'] } },
      { id: 'beet_seeds', name: 'Beet Seeds', price: 20, category: 'seeds', availability: { seasons: ['Fall'] } },

      // Other items
      { id: 'cactus_fruit', name: 'Cactus Fruit', price: 150, category: 'food' },
      { id: 'coconut', name: 'Coconut', price: 200, category: 'food' },
      { id: 'iridium_sprinkler', name: 'Iridium Sprinkler', price: 10000, category: 'tool' }
    ]
  },
  {
    id: 'krobus',
    name: 'Krobus (Sewers)',
    owner: 'Krobus',
    location: 'Sewers',
    hours: {
      openTime: '8:00 PM',
      closeTime: '12:00 AM',
      closedDays: [],
      specialNotes: 'Requires Rusty Key (donate 60 items to museum)'
    },
    description: 'Underground shop with rare items. Stock rotates daily.',
    items: [
      // Rotating stock (examples)
      { id: 'void_egg', name: 'Void Egg', price: 5000, category: 'animal', availability: { condition: 'Wednesdays only' } },
      { id: 'iridium_sprinkler_krobus', name: 'Iridium Sprinkler', price: 10000, category: 'tool', availability: { condition: 'Fridays only' } },
      { id: 'monster_fireplace', name: 'Monster Fireplace', price: 20000, category: 'furniture' },
      { id: 'stardrop', name: 'Stardrop', price: 20000, category: 'food', description: 'Permanently increases max energy' },
      { id: 'void_mayonnaise', name: 'Void Mayonnaise', price: 500, category: 'ingredient' }
    ]
  },
  {
    id: 'dwarf',
    name: 'Dwarf Shop',
    owner: 'Dwarf',
    location: 'Mines - Level 1',
    hours: {
      openTime: 'Always Open',
      closeTime: 'Always Open',
      closedDays: [],
      specialNotes: 'Requires Dwarvish Translation Guide to understand'
    },
    description: 'Mining equipment and supplies.',
    items: [
      { id: 'cherry_bomb', name: 'Cherry Bomb', price: 300, category: 'tool' },
      { id: 'bomb', name: 'Bomb', price: 600, category: 'tool' },
      { id: 'mega_bomb', name: 'Mega Bomb', price: 1000, category: 'tool' },
      { id: 'rarecrow_6', name: 'Rarecrow #6', price: 2500, category: 'other' }
    ]
  },
  {
    id: 'adventurers_guild',
    name: "Adventurer's Guild",
    owner: 'Marlon',
    location: 'Mountains - East',
    hours: {
      openTime: '2:00 PM',
      closeTime: '10:00 PM',
      closedDays: [],
      specialNotes: 'Unlocked after entering the mines'
    },
    description: 'Weapons, boots, and rings.',
    items: [
      // Weapons
      { id: 'wooden_blade', name: 'Wooden Blade', price: 250, category: 'tool' },
      { id: 'steel_smallsword', name: 'Steel Smallsword', price: 850, category: 'tool' },
      { id: 'wooden_club', name: 'Wooden Club', price: 500, category: 'tool' },
      { id: 'slingshot', name: 'Slingshot', price: 500, category: 'tool' },
      { id: 'master_slingshot', name: 'Master Slingshot', price: 1000, category: 'tool' },

      // Boots
      { id: 'leather_boots', name: 'Leather Boots', price: 500, category: 'other', description: '+1 Defense' },
      { id: 'tundra_boots', name: 'Tundra Boots', price: 2000, category: 'other', description: '+2 Defense, +1 Immunity' },
      { id: 'thermal_boots', name: 'Thermal Boots', price: 2000, category: 'other', description: '+1 Defense, +1 Immunity' },

      // Rings
      { id: 'small_glow_ring', name: 'Small Glow Ring', price: 1000, category: 'other', description: 'Emits light' },
      { id: 'glow_ring', name: 'Glow Ring', price: 2000, category: 'other', description: 'Emits more light' },
      { id: 'magnet_ring', name: 'Magnet Ring', price: 2000, category: 'other', description: 'Increases pickup radius' },

      // Services
      { id: 'monster_eradication_reward', name: 'Monster Eradication Rewards', price: 0, category: 'other', description: 'Free rewards for completing goals' }
    ]
  },
  {
    id: 'traveling_cart',
    name: 'Traveling Cart',
    owner: 'Traveling Merchant',
    location: 'Cindersap Forest - North',
    hours: {
      openTime: '6:00 AM',
      closeTime: '8:00 PM',
      closedDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      specialNotes: 'Only appears Friday-Sunday. Stock is random and changes each visit.'
    },
    description: 'Random rare items at varying prices.',
    items: [
      // Stock is completely random each visit
      { id: 'rare_seed', name: 'Rare Seed', price: 1000, category: 'seeds', description: 'Price varies. Grows into Sweet Gem Berry' },
      { id: 'random_item', name: 'Random Items', price: 0, category: 'other', description: 'Stock changes each visit. Can include rare fish, artifacts, seeds, and more.' }
    ]
  }
];
