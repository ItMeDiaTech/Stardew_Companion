/**
 * Cooking Recipes Database
 * Complete list of all cooking recipes in Stardew Valley
 */

export interface CookingIngredient {
  item: string;
  quantity: number;
}

export interface CookingBuff {
  type: string;
  value: number;
  duration: number; // in minutes
}

export interface CookingRecipe {
  id: string;
  name: string;
  description: string;
  ingredients: CookingIngredient[];
  energy: number;
  health: number;
  sellPrice: number;
  buffs?: CookingBuff[];
  unlockMethod: 'default' | 'queen_of_sauce' | 'friendship' | 'purchase' | 'skill' | 'special';
  unlockDetails: string;
  lovedBy?: string[];
  likedBy?: string[];
  icon?: string;
}

export const COOKING_RECIPES: CookingRecipe[] = [
  // ==================== BREAKFAST ====================
  {
    id: 'fried_egg',
    name: 'Fried Egg',
    description: 'Sunny-side up.',
    ingredients: [{ item: 'Egg', quantity: 1 }],
    energy: 50,
    health: 22,
    sellPrice: 35,
    unlockMethod: 'default',
    unlockDetails: 'Available from start',
    likedBy: ['Everyone (except Sebastian, Abigail)']
  },
  {
    id: 'omelet',
    name: 'Omelet',
    description: 'It\'s super fluffy.',
    ingredients: [
      { item: 'Egg', quantity: 1 },
      { item: 'Milk', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 125,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Spring 28'
  },
  {
    id: 'pancakes',
    name: 'Pancakes',
    description: 'A special breakfast treat.',
    ingredients: [
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Egg', quantity: 1 }
    ],
    energy: 90,
    health: 40,
    sellPrice: 80,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Summer 14'
  },
  {
    id: 'hashbrowns',
    name: 'Hashbrowns',
    description: 'Crispy and golden brown.',
    ingredients: [
      { item: 'Potato', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 90,
    health: 40,
    sellPrice: 120,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Spring 14'
  },
  {
    id: 'complete_breakfast',
    name: 'Complete Breakfast',
    description: 'You\'ll feel ready to take on the world!',
    ingredients: [
      { item: 'Fried Egg', quantity: 1 },
      { item: 'Milk', quantity: 1 },
      { item: 'Hashbrowns', quantity: 1 },
      { item: 'Pancakes', quantity: 1 }
    ],
    energy: 200,
    health: 90,
    sellPrice: 350,
    buffs: [
      { type: 'Farming', value: 2, duration: 7 },
      { type: 'Max Energy', value: 50, duration: 7 }
    ],
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Spring 21'
  },
  {
    id: 'farmers_lunch',
    name: "Farmer's Lunch",
    description: 'This\'ll keep you going.',
    ingredients: [
      { item: 'Omelet', quantity: 1 },
      { item: 'Parsnip', quantity: 1 }
    ],
    energy: 200,
    health: 90,
    sellPrice: 150,
    buffs: [{ type: 'Farming', value: 3, duration: 5.35 }],
    unlockMethod: 'skill',
    unlockDetails: 'Farming Level 3'
  },

  // ==================== BREAD & BAKED GOODS ====================
  {
    id: 'bread',
    name: 'Bread',
    description: 'A crusty baguette.',
    ingredients: [{ item: 'Wheat Flour', quantity: 1 }],
    energy: 50,
    health: 22,
    sellPrice: 60,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Summer 28'
  },
  {
    id: 'tortilla',
    name: 'Tortilla',
    description: 'Can be used as a vessel for food or eat alone.',
    ingredients: [{ item: 'Corn', quantity: 1 }],
    energy: 50,
    health: 22,
    sellPrice: 50,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Fall 7'
  },

  // ==================== SALADS ====================
  {
    id: 'salad',
    name: 'Salad',
    description: 'A healthy garden salad.',
    ingredients: [
      { item: 'Leek', quantity: 1 },
      { item: 'Dandelion', quantity: 1 },
      { item: 'Vinegar', quantity: 1 }
    ],
    energy: 113,
    health: 50,
    sellPrice: 110,
    unlockMethod: 'friendship',
    unlockDetails: 'Emily at 3 Hearts',
    lovedBy: ['Leah']
  },
  {
    id: 'fruit_salad',
    name: 'Fruit Salad',
    description: 'A delicious combination of summer fruits.',
    ingredients: [
      { item: 'Blueberry', quantity: 1 },
      { item: 'Melon', quantity: 1 },
      { item: 'Apricot', quantity: 1 }
    ],
    energy: 263,
    health: 118,
    sellPrice: 450,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Fall 7'
  },
  {
    id: 'radish_salad',
    name: 'Radish Salad',
    description: 'The radishes are so crisp!',
    ingredients: [
      { item: 'Oil', quantity: 1 },
      { item: 'Vinegar', quantity: 1 },
      { item: 'Radish', quantity: 1 }
    ],
    energy: 188,
    health: 84,
    sellPrice: 300,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Spring 21'
  },
  {
    id: 'coleslaw',
    name: 'Coleslaw',
    description: 'It\'s finely shredded cabbage.',
    ingredients: [
      { item: 'Red Cabbage', quantity: 1 },
      { item: 'Vinegar', quantity: 1 },
      { item: 'Mayonnaise', quantity: 1 }
    ],
    energy: 345,
    health: 155,
    sellPrice: 345,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Spring 14 (rerun)'
  },

  // ==================== SOUPS ====================
  {
    id: 'parsnip_soup',
    name: 'Parsnip Soup',
    description: 'It\'s fresh and hearty.',
    ingredients: [
      { item: 'Parsnip', quantity: 1 },
      { item: 'Milk', quantity: 1 },
      { item: 'Vinegar', quantity: 1 }
    ],
    energy: 85,
    health: 38,
    sellPrice: 120,
    unlockMethod: 'friendship',
    unlockDetails: 'Caroline at 3 Hearts'
  },
  {
    id: 'tom_kha_soup',
    name: 'Tom Kha Soup',
    description: 'These flavors are incredible!',
    ingredients: [
      { item: 'Coconut', quantity: 1 },
      { item: 'Shrimp', quantity: 1 },
      { item: 'Common Mushroom', quantity: 1 }
    ],
    energy: 175,
    health: 78,
    sellPrice: 250,
    unlockMethod: 'friendship',
    unlockDetails: 'Sandy at 7 Hearts'
  },
  {
    id: 'trout_soup',
    name: 'Trout Soup',
    description: 'Pretty salty.',
    ingredients: [
      { item: 'Rainbow Trout', quantity: 1 },
      { item: 'Green Algae', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 100,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Fall 14'
  },
  {
    id: 'pumpkin_soup',
    name: 'Pumpkin Soup',
    description: 'A seasonal favorite.',
    ingredients: [
      { item: 'Pumpkin', quantity: 1 },
      { item: 'Milk', quantity: 1 }
    ],
    energy: 200,
    health: 90,
    sellPrice: 300,
    buffs: [
      { type: 'Defense', value: 2, duration: 7.41 },
      { type: 'Luck', value: 2, duration: 7.41 }
    ],
    unlockMethod: 'friendship',
    unlockDetails: 'Robin at 7 Hearts'
  },
  {
    id: 'algae_soup',
    name: 'Algae Soup',
    description: 'It\'s a little slimy.',
    ingredients: [{ item: 'Green Algae', quantity: 4 }],
    energy: 100,
    health: 45,
    sellPrice: 100,
    unlockMethod: 'friendship',
    unlockDetails: 'Clint at 3 Hearts'
  },
  {
    id: 'pale_broth',
    name: 'Pale Broth',
    description: 'A delicate broth with a hint of sulfur.',
    ingredients: [
      { item: 'White Algae', quantity: 2 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 150,
    unlockMethod: 'friendship',
    unlockDetails: 'Marnie at 3 Hearts'
  },
  {
    id: 'bean_hotpot',
    name: 'Bean Hotpot',
    description: 'It sure is healthy.',
    ingredients: [{ item: 'Green Bean', quantity: 2 }],
    energy: 100,
    health: 45,
    sellPrice: 100,
    unlockMethod: 'friendship',
    unlockDetails: 'Clint at 7 Hearts'
  },
  {
    id: 'chowder',
    name: 'Chowder',
    description: 'A warm, creamy soup.',
    ingredients: [
      { item: 'Clam', quantity: 1 },
      { item: 'Milk', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 135,
    unlockMethod: 'friendship',
    unlockDetails: 'Willy at 3 Hearts'
  },
  {
    id: 'fish_stew',
    name: 'Fish Stew',
    description: 'It smells a lot like the sea. Tastes better, though.',
    ingredients: [
      { item: 'Crayfish', quantity: 1 },
      { item: 'Mussel', quantity: 1 },
      { item: 'Periwinkle', quantity: 1 },
      { item: 'Tomato', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 175,
    unlockMethod: 'friendship',
    unlockDetails: 'Willy at 7 Hearts'
  },
  {
    id: 'lobster_bisque',
    name: 'Lobster Bisque',
    description: 'This delicate soup is a very rich treat.',
    ingredients: [
      { item: 'Lobster', quantity: 1 },
      { item: 'Milk', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 205,
    buffs: [
      { type: 'Fishing', value: 3, duration: 16.47 },
      { type: 'Max Energy', value: 50, duration: 16.47 }
    ],
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Winter 14',
    lovedBy: ['Willy']
  },

  // ==================== MAIN DISHES ====================
  {
    id: 'vegetable_medley',
    name: 'Vegetable Medley',
    description: 'This is very nutritious.',
    ingredients: [
      { item: 'Tomato', quantity: 1 },
      { item: 'Beet', quantity: 1 }
    ],
    energy: 165,
    health: 74,
    sellPrice: 120,
    unlockMethod: 'friendship',
    unlockDetails: 'Caroline at 7 Hearts'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    description: 'It\'s popular for all the right reasons.',
    ingredients: [
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Tomato', quantity: 1 },
      { item: 'Cheese', quantity: 1 }
    ],
    energy: 150,
    health: 67,
    sellPrice: 300,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Spring 7',
    lovedBy: ['Sam', 'Shane']
  },
  {
    id: 'spaghetti',
    name: 'Spaghetti',
    description: 'An old favorite.',
    ingredients: [
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Tomato', quantity: 1 }
    ],
    energy: 75,
    health: 33,
    sellPrice: 120,
    unlockMethod: 'friendship',
    unlockDetails: 'Lewis at 3 Hearts'
  },
  {
    id: 'pepper_poppers',
    name: 'Pepper Poppers',
    description: 'Spicy, breaded, and stuffed with cheese.',
    ingredients: [
      { item: 'Hot Pepper', quantity: 1 },
      { item: 'Cheese', quantity: 1 }
    ],
    energy: 52,
    health: 23,
    sellPrice: 200,
    buffs: [
      { type: 'Farming', value: 2, duration: 7 },
      { type: 'Speed', value: 1, duration: 7 }
    ],
    unlockMethod: 'friendship',
    unlockDetails: 'Shane at 3 Hearts',
    lovedBy: ['Shane']
  },
  {
    id: 'glazed_yams',
    name: 'Glazed Yams',
    description: 'Sweet and satisfying... The sugar gives it a hint of caramel.',
    ingredients: [
      { item: 'Yam', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 200,
    health: 90,
    sellPrice: 200,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Fall 21'
  },
  {
    id: 'eggplant_parmesan',
    name: 'Eggplant Parmesan',
    description: 'Tangy, cheesy, and wonderful.',
    ingredients: [
      { item: 'Eggplant', quantity: 1 },
      { item: 'Tomato', quantity: 1 }
    ],
    energy: 175,
    health: 78,
    sellPrice: 200,
    buffs: [
      { type: 'Mining', value: 1, duration: 4.39 },
      { type: 'Defense', value: 3, duration: 4.39 }
    ],
    unlockMethod: 'friendship',
    unlockDetails: 'Lewis at 7 Hearts'
  },
  {
    id: 'red_plate',
    name: 'Red Plate',
    description: 'Full of beets and potatoes. Very filling.',
    ingredients: [
      { item: 'Red Cabbage', quantity: 1 },
      { item: 'Radish', quantity: 1 }
    ],
    energy: 240,
    health: 108,
    sellPrice: 400,
    buffs: [{ type: 'Max Energy', value: 50, duration: 3.3 }],
    unlockMethod: 'friendship',
    unlockDetails: 'Emily at 7 Hearts'
  },
  {
    id: 'stir_fry',
    name: 'Stir Fry',
    description: 'ثقافة صحة و تغذية!',
    ingredients: [
      { item: 'Cave Carrot', quantity: 1 },
      { item: 'Common Mushroom', quantity: 1 },
      { item: 'Kale', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 335,
    health: 150,
    sellPrice: 335,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Spring 7'
  },
  {
    id: 'artichoke_dip',
    name: 'Artichoke Dip',
    description: 'It\'s cool and creamy.',
    ingredients: [
      { item: 'Artichoke', quantity: 1 },
      { item: 'Milk', quantity: 1 }
    ],
    energy: 210,
    health: 94,
    sellPrice: 210,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Fall 28'
  },
  {
    id: 'fiddlehead_risotto',
    name: 'Fiddlehead Risotto',
    description: 'A creamy rice dish with an earthy flavor.',
    ingredients: [
      { item: 'Oil', quantity: 1 },
      { item: 'Fiddlehead Fern', quantity: 1 },
      { item: 'Garlic', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 350,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Fall 28'
  },
  {
    id: 'stuffing',
    name: 'Stuffing',
    description: 'Mmmm... bread and butter.',
    ingredients: [
      { item: 'Bread', quantity: 1 },
      { item: 'Cranberries', quantity: 1 },
      { item: 'Hazelnut', quantity: 1 }
    ],
    energy: 170,
    health: 76,
    sellPrice: 165,
    unlockMethod: 'friendship',
    unlockDetails: 'Pam at 7 Hearts'
  },
  {
    id: 'roots_platter',
    name: 'Roots Platter',
    description: 'This\'ll put some color in your cheeks.',
    ingredients: [
      { item: 'Cave Carrot', quantity: 1 },
      { item: 'Winter Root', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 100,
    buffs: [{ type: 'Attack', value: 3, duration: 5.35 }],
    unlockMethod: 'skill',
    unlockDetails: 'Combat Level 3'
  },
  {
    id: 'survival_burger',
    name: 'Survival Burger',
    description: 'A convenient snack for the explorer.',
    ingredients: [
      { item: 'Bread', quantity: 1 },
      { item: 'Cave Carrot', quantity: 1 },
      { item: 'Eggplant', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 180,
    buffs: [{ type: 'Foraging', value: 3, duration: 5.35 }],
    unlockMethod: 'skill',
    unlockDetails: 'Foraging Level 2'
  },

  // ==================== FISH DISHES ====================
  {
    id: 'baked_fish',
    name: 'Baked Fish',
    description: 'Baked fish on a bed of herbs.',
    ingredients: [
      { item: 'Sunfish', quantity: 1 },
      { item: 'Bream', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 100,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Summer 7'
  },
  {
    id: 'fried_calamari',
    name: 'Fried Calamari',
    description: 'It\'s so chewy.',
    ingredients: [
      { item: 'Squid', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 80,
    health: 36,
    sellPrice: 150,
    unlockMethod: 'friendship',
    unlockDetails: 'Jodi at 3 Hearts'
  },
  {
    id: 'fried_eel',
    name: 'Fried Eel',
    description: 'Greasy but flavorful.',
    ingredients: [
      { item: 'Eel', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 120,
    buffs: [{ type: 'Luck', value: 1, duration: 7 }],
    unlockMethod: 'friendship',
    unlockDetails: 'George at 3 Hearts'
  },
  {
    id: 'spicy_eel',
    name: 'Spicy Eel',
    description: 'It\'s really spicy! Be careful.',
    ingredients: [
      { item: 'Eel', quantity: 1 },
      { item: 'Hot Pepper', quantity: 1 }
    ],
    energy: 115,
    health: 51,
    sellPrice: 175,
    buffs: [
      { type: 'Luck', value: 1, duration: 7 },
      { type: 'Speed', value: 1, duration: 7 }
    ],
    unlockMethod: 'friendship',
    unlockDetails: 'George at 7 Hearts',
    lovedBy: ['George']
  },
  {
    id: 'sashimi',
    name: 'Sashimi',
    description: 'Raw fish sliced into thin pieces.',
    ingredients: [{ item: 'Any Fish', quantity: 1 }],
    energy: 75,
    health: 33,
    sellPrice: 75,
    unlockMethod: 'friendship',
    unlockDetails: 'Linus at 3 Hearts'
  },
  {
    id: 'maki_roll',
    name: 'Maki Roll',
    description: 'Fish and rice wrapped in seaweed.',
    ingredients: [
      { item: 'Any Fish', quantity: 1 },
      { item: 'Seaweed', quantity: 1 },
      { item: 'Rice', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 220,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Summer 21'
  },
  {
    id: 'salmon_dinner',
    name: 'Salmon Dinner',
    description: 'The lemon really brings out the flavor.',
    ingredients: [
      { item: 'Salmon', quantity: 1 },
      { item: 'Amaranth', quantity: 1 },
      { item: 'Kale', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 300,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Fall 7 (rerun)'
  },
  {
    id: 'fish_taco',
    name: 'Fish Taco',
    description: 'It smells delicious.',
    ingredients: [
      { item: 'Tuna', quantity: 1 },
      { item: 'Tortilla', quantity: 1 },
      { item: 'Red Cabbage', quantity: 1 },
      { item: 'Mayonnaise', quantity: 1 }
    ],
    energy: 165,
    health: 74,
    sellPrice: 500,
    unlockMethod: 'friendship',
    unlockDetails: 'Linus at 7 Hearts',
    lovedBy: ['Sebastian']
  },
  {
    id: 'crispy_bass',
    name: 'Crispy Bass',
    description: 'Wow, the breading is perfect.',
    ingredients: [
      { item: 'Largemouth Bass', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 90,
    health: 40,
    sellPrice: 150,
    unlockMethod: 'friendship',
    unlockDetails: 'Kent at 3 Hearts'
  },
  {
    id: 'dish_o_the_sea',
    name: "Dish O' The Sea",
    description: 'This\'ll keep you warm in the cold sea air.',
    ingredients: [
      { item: 'Sardine', quantity: 2 },
      { item: 'Hashbrowns', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 220,
    buffs: [{ type: 'Fishing', value: 3, duration: 5.35 }],
    unlockMethod: 'skill',
    unlockDetails: 'Fishing Level 3'
  },
  {
    id: 'carp_surprise',
    name: 'Carp Surprise',
    description: 'It\'s bland and oily.',
    ingredients: [{ item: 'Carp', quantity: 4 }],
    energy: 36,
    health: 16,
    sellPrice: 150,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Summer 7'
  },
  {
    id: 'crab_cakes',
    name: 'Crab Cakes',
    description: 'Crab, bread crumbs, and egg formed into patties then fried to a golden brown.',
    ingredients: [
      { item: 'Crab', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Egg', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 275,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Fall 21'
  },
  {
    id: 'escargot',
    name: 'Escargot',
    description: 'Butter-soaked snails cooked to perfection.',
    ingredients: [
      { item: 'Snail', quantity: 1 },
      { item: 'Garlic', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 125,
    unlockMethod: 'friendship',
    unlockDetails: 'Willy at 5 Hearts'
  },
  {
    id: 'seafoam_pudding',
    name: 'Seafoam Pudding',
    description: 'This briny pudding will really get you into the maritime spirit!',
    ingredients: [
      { item: 'Flounder', quantity: 1 },
      { item: 'Midnight Carp', quantity: 1 },
      { item: 'Squid Ink', quantity: 1 }
    ],
    energy: 175,
    health: 78,
    sellPrice: 300,
    buffs: [{ type: 'Fishing', value: 4, duration: 10 }],
    unlockMethod: 'skill',
    unlockDetails: 'Fishing Level 9'
  },
  {
    id: 'shrimp_cocktail',
    name: 'Shrimp Cocktail',
    description: 'A chilled shrimp entree.',
    ingredients: [
      { item: 'Tomato', quantity: 1 },
      { item: 'Shrimp', quantity: 1 },
      { item: 'Wild Horseradish', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 160,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Winter 28'
  },

  // ==================== FRIED FOODS ====================
  {
    id: 'fried_mushroom',
    name: 'Fried Mushroom',
    description: 'Earthy and aromatic.',
    ingredients: [
      { item: 'Common Mushroom', quantity: 1 },
      { item: 'Morel', quantity: 1 },
      { item: 'Oil', quantity: 1 }
    ],
    energy: 135,
    health: 60,
    sellPrice: 250,
    unlockMethod: 'friendship',
    unlockDetails: 'Demetrius at 3 Hearts'
  },

  // ==================== SPECIAL DISHES ====================
  {
    id: 'strange_bun',
    name: 'Strange Bun',
    description: 'What\'s inside?',
    ingredients: [
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Periwinkle', quantity: 1 },
      { item: 'Void Mayonnaise', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 225,
    unlockMethod: 'friendship',
    unlockDetails: 'Shane at 7 Hearts'
  },
  {
    id: 'lucky_lunch',
    name: 'Lucky Lunch',
    description: 'A special little meal.',
    ingredients: [
      { item: 'Sea Cucumber', quantity: 1 },
      { item: 'Tortilla', quantity: 1 },
      { item: 'Blue Jazz', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 250,
    buffs: [{ type: 'Luck', value: 3, duration: 11.11 }],
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Spring 28'
  },
  {
    id: 'super_meal',
    name: 'Super Meal',
    description: 'It\'s a really, REALLY good meal.',
    ingredients: [
      { item: 'Bok Choy', quantity: 1 },
      { item: 'Cranberries', quantity: 1 },
      { item: 'Artichoke', quantity: 1 }
    ],
    energy: 160,
    health: 72,
    sellPrice: 220,
    buffs: [
      { type: 'Speed', value: 1, duration: 3.3 },
      { type: 'Max Energy', value: 40, duration: 3.3 }
    ],
    unlockMethod: 'friendship',
    unlockDetails: 'Kent at 7 Hearts'
  },
  {
    id: 'miners_treat',
    name: "Miner's Treat",
    description: 'This should keep your energy up.',
    ingredients: [
      { item: 'Cave Carrot', quantity: 2 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Milk', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 200,
    buffs: [
      { type: 'Mining', value: 3, duration: 5.35 },
      { type: 'Magnetism', value: 32, duration: 5.35 }
    ],
    unlockMethod: 'skill',
    unlockDetails: 'Mining Level 3'
  },

  // ==================== DESSERTS & SWEETS ====================
  {
    id: 'cookie',
    name: 'Cookie',
    description: 'Very chewy.',
    ingredients: [
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Egg', quantity: 1 }
    ],
    energy: 90,
    health: 40,
    sellPrice: 140,
    unlockMethod: 'friendship',
    unlockDetails: 'Evelyn at 4 Hearts',
    lovedBy: ['Evelyn']
  },
  {
    id: 'chocolate_cake',
    name: 'Chocolate Cake',
    description: 'Rich and moist with a chocolate frosting.',
    ingredients: [
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Egg', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 200,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Winter 14',
    lovedBy: ['Abigail']
  },
  {
    id: 'pink_cake',
    name: 'Pink Cake',
    description: 'There\'s little heart on top.',
    ingredients: [
      { item: 'Melon', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Egg', quantity: 1 }
    ],
    energy: 250,
    health: 112,
    sellPrice: 480,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Summer 21',
    lovedBy: ['Haley']
  },
  {
    id: 'ice_cream',
    name: 'Ice Cream',
    description: 'It\'s hard to find someone who doesn\'t like this.',
    ingredients: [
      { item: 'Milk', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 100,
    health: 45,
    sellPrice: 120,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Summer 7 (rerun)',
    lovedBy: ['Alex', 'Demetrius', 'Haley', 'Jas', 'Pam', 'Vincent']
  },
  {
    id: 'blueberry_tart',
    name: 'Blueberry Tart',
    description: 'It\'s subtle and refreshing.',
    ingredients: [
      { item: 'Blueberry', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Egg', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 150,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Summer 14 (rerun)'
  },
  {
    id: 'rhubarb_pie',
    name: 'Rhubarb Pie',
    description: 'Mmm, tangy and sweet.',
    ingredients: [
      { item: 'Rhubarb', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 400,
    unlockMethod: 'friendship',
    unlockDetails: 'Marnie at 7 Hearts',
    lovedBy: ['Marnie']
  },
  {
    id: 'pumpkin_pie',
    name: 'Pumpkin Pie',
    description: 'Silky pumpkin cream in a flakey crust.',
    ingredients: [
      { item: 'Pumpkin', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Milk', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 385,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Winter 21'
  },
  {
    id: 'blackberry_cobbler',
    name: 'Blackberry Cobbler',
    description: 'There\'s nothing quite like it.',
    ingredients: [
      { item: 'Blackberry', quantity: 2 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 }
    ],
    energy: 175,
    health: 78,
    sellPrice: 260,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Fall 14'
  },
  {
    id: 'cranberry_candy',
    name: 'Cranberry Candy',
    description: 'It\'s sweet enough to mask the bitter fruit.',
    ingredients: [
      { item: 'Cranberries', quantity: 1 },
      { item: 'Apple', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 175,
    health: 78,
    sellPrice: 175,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Winter 28'
  },
  {
    id: 'plum_pudding',
    name: 'Plum Pudding',
    description: 'A traditional holiday treat.',
    ingredients: [
      { item: 'Wild Plum', quantity: 2 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 150,
    health: 67,
    sellPrice: 260,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 1, Winter 7'
  },
  {
    id: 'rice_pudding',
    name: 'Rice Pudding',
    description: 'It\'s creamy, sweet, and soothing.',
    ingredients: [
      { item: 'Milk', quantity: 1 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Rice', quantity: 1 }
    ],
    energy: 115,
    health: 51,
    sellPrice: 260,
    unlockMethod: 'friendship',
    unlockDetails: 'Evelyn at 7 Hearts'
  },
  {
    id: 'autumns_bounty',
    name: "Autumn's Bounty",
    description: 'A taste of the season.',
    ingredients: [
      { item: 'Yam', quantity: 1 },
      { item: 'Pumpkin', quantity: 1 }
    ],
    energy: 220,
    health: 99,
    sellPrice: 350,
    buffs: [
      { type: 'Defense', value: 2, duration: 7.41 },
      { type: 'Foraging', value: 2, duration: 7.41 }
    ],
    unlockMethod: 'friendship',
    unlockDetails: 'Demetrius at 7 Hearts'
  },
  {
    id: 'cranberry_sauce',
    name: 'Cranberry Sauce',
    description: 'A festive treat.',
    ingredients: [
      { item: 'Cranberries', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 120,
    unlockMethod: 'friendship',
    unlockDetails: 'Gus at 7 Hearts'
  },
  {
    id: 'roasted_hazelnuts',
    name: 'Roasted Hazelnuts',
    description: 'The roasting process creates a smoky aroma.',
    ingredients: [{ item: 'Hazelnut', quantity: 3 }],
    energy: 140,
    health: 63,
    sellPrice: 270,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Summer 28'
  },
  {
    id: 'bruschetta',
    name: 'Bruschetta',
    description: 'Roasted tomatoes on a crisp white bread.',
    ingredients: [
      { item: 'Bread', quantity: 1 },
      { item: 'Oil', quantity: 1 },
      { item: 'Tomato', quantity: 1 }
    ],
    energy: 113,
    health: 50,
    sellPrice: 210,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Winter 21'
  },
  {
    id: 'poppyseed_muffin',
    name: 'Poppyseed Muffin',
    description: 'It has a nice, nutty flavor.',
    ingredients: [
      { item: 'Poppy', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 125,
    health: 56,
    sellPrice: 250,
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Winter 7'
  },
  {
    id: 'maple_bar',
    name: 'Maple Bar',
    description: 'It\'s a sweet doughnut topped with a rich maple glaze.',
    ingredients: [
      { item: 'Maple Syrup', quantity: 1 },
      { item: 'Sugar', quantity: 1 },
      { item: 'Wheat Flour', quantity: 1 }
    ],
    energy: 225,
    health: 101,
    sellPrice: 300,
    buffs: [
      { type: 'Farming', value: 1, duration: 16.47 },
      { type: 'Fishing', value: 1, duration: 16.47 }
    ],
    unlockMethod: 'queen_of_sauce',
    unlockDetails: 'Queen of Sauce - Year 2, Summer 14'
  },

  // ==================== DRINKS ====================
  {
    id: 'triple_shot_espresso',
    name: 'Triple Shot Espresso',
    description: 'It\'s more potent than a normal shot of coffee.',
    ingredients: [{ item: 'Coffee', quantity: 3 }],
    energy: 200,
    health: 0,
    sellPrice: 450,
    buffs: [{ type: 'Speed', value: 1, duration: 4.12 }],
    unlockMethod: 'purchase',
    unlockDetails: 'Purchase from Stardrop Saloon for 5,000g'
  },
  {
    id: 'ginger_ale',
    name: 'Ginger Ale',
    description: 'A soothing, gingery drink.',
    ingredients: [
      { item: 'Ginger', quantity: 3 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 50,
    health: 22,
    sellPrice: 200,
    unlockMethod: 'special',
    unlockDetails: 'Dig up on Ginger Island'
  },

  // ==================== GINGER ISLAND RECIPES ====================
  {
    id: 'banana_pudding',
    name: 'Banana Pudding',
    description: 'Creamy, caramelized banana flavor.',
    ingredients: [
      { item: 'Banana', quantity: 1 },
      { item: 'Milk', quantity: 1 },
      { item: 'Sugar', quantity: 1 }
    ],
    energy: 150,
    health: 67,
    sellPrice: 260,
    unlockMethod: 'special',
    unlockDetails: 'Dig up on Ginger Island'
  },
  {
    id: 'mango_sticky_rice',
    name: 'Mango Sticky Rice',
    description: 'Sweet, creamy, and absolutely delicious.',
    ingredients: [
      { item: 'Mango', quantity: 1 },
      { item: 'Coconut', quantity: 1 },
      { item: 'Rice', quantity: 1 }
    ],
    energy: 228,
    health: 102,
    sellPrice: 250,
    unlockMethod: 'special',
    unlockDetails: 'Dig up on Ginger Island'
  },
  {
    id: 'poi',
    name: 'Poi',
    description: 'A traditional food with a unique, tangy flavor.',
    ingredients: [{ item: 'Taro Root', quantity: 4 }],
    energy: 150,
    health: 67,
    sellPrice: 400,
    unlockMethod: 'special',
    unlockDetails: 'Dig up on Ginger Island'
  },
  {
    id: 'tropical_curry',
    name: 'Tropical Curry',
    description: 'An exotic, fragrant curry served in a pineapple bowl.',
    ingredients: [
      { item: 'Coconut', quantity: 1 },
      { item: 'Pineapple', quantity: 1 },
      { item: 'Hot Pepper', quantity: 1 }
    ],
    energy: 300,
    health: 135,
    sellPrice: 500,
    unlockMethod: 'special',
    unlockDetails: 'Dig up on Ginger Island'
  }
];

// Helper function to get recipes by unlock method
export function getRecipesByUnlockMethod(method: CookingRecipe['unlockMethod']): CookingRecipe[] {
  return COOKING_RECIPES.filter(r => r.unlockMethod === method);
}

// Helper function to get recipes containing a specific ingredient
export function getRecipesByIngredient(ingredientName: string): CookingRecipe[] {
  return COOKING_RECIPES.filter(r =>
    r.ingredients.some(i => i.item.toLowerCase().includes(ingredientName.toLowerCase()))
  );
}

// Helper function to get recipes loved by a villager
export function getRecipesLovedBy(villagerName: string): CookingRecipe[] {
  return COOKING_RECIPES.filter(r =>
    r.lovedBy?.some(v => v.toLowerCase() === villagerName.toLowerCase())
  );
}

// Get all unlock methods for filter dropdown
export function getUnlockMethods(): string[] {
  return ['default', 'queen_of_sauce', 'friendship', 'purchase', 'skill', 'special'];
}

// Get formatted unlock method name
export function formatUnlockMethod(method: string): string {
  const names: Record<string, string> = {
    'default': 'Available from Start',
    'queen_of_sauce': 'Queen of Sauce',
    'friendship': 'Friendship',
    'purchase': 'Purchase',
    'skill': 'Skill Level',
    'special': 'Special'
  };
  return names[method] || method;
}
