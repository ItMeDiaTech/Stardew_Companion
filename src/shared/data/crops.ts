import { Crop } from '../types';

/**
 * Comprehensive Stardew Valley Crop Database
 * Data sourced from Stardew Valley Wiki
 */

export const CROPS: Crop[] = [
  // SPRING CROPS
  {
    id: 'parsnip',
    name: 'Parsnip',
    type: 'vegetable',
    seasons: ['Spring'],
    seedPrice: 20,
    sellPrice: 35,
    daysToMaturity: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Parsnip Juice',
      sellPrice: 79,  // 35 × 2.25 = 78.75, rounded
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Parsnip',
      sellPrice: 120,  // 35 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'green_bean',
    name: 'Green Bean',
    type: 'vegetable',
    seasons: ['Spring'],
    seedPrice: 60,
    sellPrice: 40,
    daysToMaturity: 10,
    regrowthDays: 3,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Green Bean Juice',
      sellPrice: 90,  // 40 × 2.25 = 90
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Green Bean',
      sellPrice: 130,  // 40 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    type: 'vegetable',
    seasons: ['Spring'],
    seedPrice: 80,
    sellPrice: 175,
    daysToMaturity: 12,
    giantCropPossible: true,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Cauliflower Juice',
      sellPrice: 394,  // 175 × 2.25 = 393.75, rounded
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Cauliflower',
      sellPrice: 400,  // 175 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'potato',
    name: 'Potato',
    type: 'vegetable',
    seasons: ['Spring'],
    seedPrice: 50,
    sellPrice: 80,
    daysToMaturity: 6,
    extraYieldChance: 0.25,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Potato Juice',
      sellPrice: 180,  // 80 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Potato',
      sellPrice: 210,  // 80 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    type: 'fruit',
    seasons: ['Spring'],
    seedPrice: 100,
    sellPrice: 120,
    daysToMaturity: 8,
    regrowthDays: 4,
    seedVendor: 'Egg Festival (13th)',
    kegProduct: {
      name: 'Strawberry Wine',
      sellPrice: 360,  // 120 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Strawberry Jelly',
      sellPrice: 290,  // 120 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'tulip',
    name: 'Tulip',
    type: 'flower',
    seasons: ['Spring'],
    seedPrice: 20,
    sellPrice: 30,
    daysToMaturity: 6,
    seedVendor: "Pierre's General Store"
  },
  {
    id: 'blue_jazz',
    name: 'Blue Jazz',
    type: 'flower',
    seasons: ['Spring'],
    seedPrice: 30,
    sellPrice: 50,
    daysToMaturity: 7,
    seedVendor: "Pierre's General Store"
  },
  {
    id: 'garlic',
    name: 'Garlic',
    type: 'vegetable',
    seasons: ['Spring'],
    seedPrice: 40,
    sellPrice: 60,
    daysToMaturity: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Garlic Juice',
      sellPrice: 135,  // 60 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Garlic',
      sellPrice: 170,  // 60 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'kale',
    name: 'Kale',
    type: 'vegetable',
    seasons: ['Spring'],
    seedPrice: 70,
    sellPrice: 110,
    daysToMaturity: 6,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Kale Juice',
      sellPrice: 248,  // 110 × 2.25 = 247.5, rounded
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Kale',
      sellPrice: 270,  // 110 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'rhubarb',
    name: 'Rhubarb',
    type: 'fruit',
    seasons: ['Spring'],
    seedPrice: 100,
    sellPrice: 220,
    daysToMaturity: 13,
    seedVendor: 'Oasis (Desert)',
    kegProduct: {
      name: 'Rhubarb Wine',
      sellPrice: 660,  // 220 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Rhubarb Jelly',
      sellPrice: 490,  // 220 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'coffee_bean',
    name: 'Coffee Bean',
    type: 'vegetable',
    seasons: ['Spring', 'Summer'],
    seedPrice: 2500,
    sellPrice: 15,
    daysToMaturity: 10,
    regrowthDays: 2,
    seedVendor: 'Traveling Cart',
    kegProduct: {
      name: 'Coffee',
      sellPrice: 150,  // Special case
      processingTime: 0.1  // 2 hours
    },
    preservesJarProduct: {
      name: 'Pickled Coffee Bean',
      sellPrice: 80,  // 15 × 2 + 50
      processingTime: 3
    }
  },

  // SUMMER CROPS
  {
    id: 'melon',
    name: 'Melon',
    type: 'fruit',
    seasons: ['Summer'],
    seedPrice: 80,
    sellPrice: 250,
    daysToMaturity: 12,
    giantCropPossible: true,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Melon Wine',
      sellPrice: 750,  // 250 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Melon Jelly',
      sellPrice: 550,  // 250 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'tomato',
    name: 'Tomato',
    type: 'fruit',
    seasons: ['Summer'],
    seedPrice: 50,
    sellPrice: 60,
    daysToMaturity: 11,
    regrowthDays: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Tomato Wine',
      sellPrice: 180,  // 60 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Tomato Jelly',
      sellPrice: 170,  // 60 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    type: 'fruit',
    seasons: ['Summer'],
    seedPrice: 80,
    sellPrice: 50,
    daysToMaturity: 13,
    regrowthDays: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Blueberry Wine',
      sellPrice: 150,  // 50 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Blueberry Jelly',
      sellPrice: 150,  // 50 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'hot_pepper',
    name: 'Hot Pepper',
    type: 'fruit',
    seasons: ['Summer'],
    seedPrice: 40,
    sellPrice: 40,
    daysToMaturity: 5,
    regrowthDays: 3,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Hot Pepper Wine',
      sellPrice: 120,  // 40 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Hot Pepper Jelly',
      sellPrice: 130,  // 40 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'wheat',
    name: 'Wheat',
    type: 'vegetable',
    seasons: ['Summer', 'Fall'],
    seedPrice: 10,
    sellPrice: 25,
    daysToMaturity: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Beer',
      sellPrice: 200,  // Special case
      processingTime: 1.75
    },
    preservesJarProduct: {
      name: 'Pickled Wheat',
      sellPrice: 100,  // 25 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'radish',
    name: 'Radish',
    type: 'vegetable',
    seasons: ['Summer'],
    seedPrice: 40,
    sellPrice: 90,
    daysToMaturity: 6,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Radish Juice',
      sellPrice: 203,  // 90 × 2.25 = 202.5, rounded
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Radish',
      sellPrice: 230,  // 90 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'poppy',
    name: 'Poppy',
    type: 'flower',
    seasons: ['Summer'],
    seedPrice: 100,
    sellPrice: 140,
    daysToMaturity: 7,
    seedVendor: "Pierre's General Store"
  },
  {
    id: 'summer_spangle',
    name: 'Summer Spangle',
    type: 'flower',
    seasons: ['Summer'],
    seedPrice: 50,
    sellPrice: 90,
    daysToMaturity: 8,
    seedVendor: "Pierre's General Store"
  },
  {
    id: 'hops',
    name: 'Hops',
    type: 'vegetable',
    seasons: ['Summer'],
    seedPrice: 60,
    sellPrice: 25,
    daysToMaturity: 11,
    regrowthDays: 1,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Pale Ale',
      sellPrice: 300,  // Special case
      processingTime: 1.75
    },
    preservesJarProduct: {
      name: 'Pickled Hops',
      sellPrice: 100,  // 25 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'corn',
    name: 'Corn',
    type: 'vegetable',
    seasons: ['Summer', 'Fall'],
    seedPrice: 150,
    sellPrice: 50,
    daysToMaturity: 14,
    regrowthDays: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Corn Juice',
      sellPrice: 113,  // 50 × 2.25 = 112.5, rounded
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Corn',
      sellPrice: 150,  // 50 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'red_cabbage',
    name: 'Red Cabbage',
    type: 'vegetable',
    seasons: ['Summer'],
    seedPrice: 100,
    sellPrice: 260,
    daysToMaturity: 9,
    seedVendor: "Pierre's General Store (Year 2+)",
    kegProduct: {
      name: 'Red Cabbage Juice',
      sellPrice: 585,  // 260 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Red Cabbage',
      sellPrice: 570,  // 260 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'starfruit',
    name: 'Starfruit',
    type: 'fruit',
    seasons: ['Summer'],
    seedPrice: 400,
    sellPrice: 750,
    daysToMaturity: 13,
    seedVendor: 'Oasis (Desert)',
    kegProduct: {
      name: 'Starfruit Wine',
      sellPrice: 2250,  // 750 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Starfruit Jelly',
      sellPrice: 1550,  // 750 × 2 + 50
      processingTime: 3
    }
  },

  // FALL CROPS
  {
    id: 'pumpkin',
    name: 'Pumpkin',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 100,
    sellPrice: 320,
    daysToMaturity: 13,
    giantCropPossible: true,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Pumpkin Juice',
      sellPrice: 720,  // 320 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Pumpkin',
      sellPrice: 690,  // 320 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'yam',
    name: 'Yam',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 60,
    sellPrice: 160,
    daysToMaturity: 10,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Yam Juice',
      sellPrice: 360,  // 160 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Yam',
      sellPrice: 370,  // 160 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'cranberries',
    name: 'Cranberries',
    type: 'fruit',
    seasons: ['Fall'],
    seedPrice: 240,
    sellPrice: 75,
    daysToMaturity: 7,
    regrowthDays: 5,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Cranberry Wine',
      sellPrice: 225,  // 75 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Cranberry Jelly',
      sellPrice: 200,  // 75 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'bok_choy',
    name: 'Bok Choy',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 50,
    sellPrice: 80,
    daysToMaturity: 4,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Bok Choy Juice',
      sellPrice: 180,  // 80 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Bok Choy',
      sellPrice: 210,  // 80 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'grape',
    name: 'Grape',
    type: 'fruit',
    seasons: ['Fall'],
    seedPrice: 60,
    sellPrice: 80,
    daysToMaturity: 10,
    regrowthDays: 3,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Grape Wine',
      sellPrice: 240,  // 80 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Grape Jelly',
      sellPrice: 210,  // 80 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'eggplant',
    name: 'Eggplant',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 20,
    sellPrice: 60,
    daysToMaturity: 5,
    regrowthDays: 5,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Eggplant Juice',
      sellPrice: 135,  // 60 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Eggplant',
      sellPrice: 170,  // 60 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'amaranth',
    name: 'Amaranth',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 70,
    sellPrice: 150,
    daysToMaturity: 7,
    seedVendor: "Pierre's General Store",
    kegProduct: {
      name: 'Amaranth Juice',
      sellPrice: 338,  // 150 × 2.25 = 337.5, rounded
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Amaranth',
      sellPrice: 350,  // 150 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'artichoke',
    name: 'Artichoke',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 30,
    sellPrice: 160,
    daysToMaturity: 8,
    seedVendor: "Pierre's General Store (Year 2+)",
    kegProduct: {
      name: 'Artichoke Juice',
      sellPrice: 360,  // 160 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Artichoke',
      sellPrice: 370,  // 160 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'fairy_rose',
    name: 'Fairy Rose',
    type: 'flower',
    seasons: ['Fall'],
    seedPrice: 200,
    sellPrice: 290,
    daysToMaturity: 12,
    seedVendor: "Pierre's General Store"
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    type: 'flower',
    seasons: ['Summer', 'Fall'],
    seedPrice: 200,
    sellPrice: 80,
    daysToMaturity: 8,
    seedVendor: "Pierre's General Store"
  },
  {
    id: 'beet',
    name: 'Beet',
    type: 'vegetable',
    seasons: ['Fall'],
    seedPrice: 20,
    sellPrice: 100,
    daysToMaturity: 6,
    seedVendor: 'Oasis (Desert)',
    kegProduct: {
      name: 'Beet Juice',
      sellPrice: 225,  // 100 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Beet',
      sellPrice: 250,  // 100 × 2 + 50
      processingTime: 3
    }
  },

  // SPECIAL/RARE CROPS
  {
    id: 'ancient_fruit',
    name: 'Ancient Fruit',
    type: 'fruit',
    seasons: ['Spring', 'Summer', 'Fall'],
    seedPrice: 0, // Must be crafted
    sellPrice: 550,
    daysToMaturity: 28,
    regrowthDays: 7,
    seedVendor: 'Seed Maker/Gunther',
    kegProduct: {
      name: 'Ancient Fruit Wine',
      sellPrice: 1650,  // 550 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Ancient Fruit Jelly',
      sellPrice: 1150,  // 550 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'sweet_gem_berry',
    name: 'Sweet Gem Berry',
    type: 'fruit',
    seasons: ['Fall'],
    seedPrice: 1000,
    sellPrice: 3000,
    daysToMaturity: 24,
    seedVendor: 'Traveling Cart (Rare Seed)',
    kegProduct: {
      name: 'Sweet Gem Berry Wine',
      sellPrice: 9000,  // 3000 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Sweet Gem Berry Jelly',
      sellPrice: 6050,  // 3000 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'cactus_fruit',
    name: 'Cactus Fruit',
    type: 'fruit',
    seasons: ['Spring', 'Summer', 'Fall', 'Winter'],
    seedPrice: 150,
    sellPrice: 75,
    daysToMaturity: 12,
    regrowthDays: 3,
    seedVendor: 'Oasis (Desert)',
    kegProduct: {
      name: 'Cactus Fruit Wine',
      sellPrice: 225,  // 75 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Cactus Fruit Jelly',
      sellPrice: 200,  // 75 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'pineapple',
    name: 'Pineapple',
    type: 'fruit',
    seasons: ['Summer'],
    seedPrice: 240,
    sellPrice: 300,
    daysToMaturity: 14,
    regrowthDays: 7,
    seedVendor: 'Island Trader (Ginger Island)',
    kegProduct: {
      name: 'Pineapple Wine',
      sellPrice: 900,  // 300 × 3
      processingTime: 7
    },
    preservesJarProduct: {
      name: 'Pineapple Jelly',
      sellPrice: 650,  // 300 × 2 + 50
      processingTime: 3
    }
  },
  {
    id: 'taro_root',
    name: 'Taro Root',
    type: 'vegetable',
    seasons: ['Summer'],
    seedPrice: 20,
    sellPrice: 100,
    daysToMaturity: 10,
    seedVendor: 'Island Trader (Ginger Island)',
    kegProduct: {
      name: 'Taro Root Juice',
      sellPrice: 225,  // 100 × 2.25
      processingTime: 4
    },
    preservesJarProduct: {
      name: 'Pickled Taro Root',
      sellPrice: 250,  // 100 × 2 + 50
      processingTime: 3
    }
  }
];

/**
 * Get crops by season
 */
export function getCropsBySeason(season: string): Crop[] {
  return CROPS.filter(crop => crop.seasons.includes(season as any));
}

/**
 * Get crop by ID
 */
export function getCropById(id: string): Crop | undefined {
  return CROPS.find(crop => crop.id === id);
}

/**
 * Get all unique crop types
 */
export function getCropTypes(): string[] {
  return Array.from(new Set(CROPS.map(crop => crop.type)));
}
