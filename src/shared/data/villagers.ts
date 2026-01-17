import { Villager } from '../types';

/**
 * Complete database of all giftable Stardew Valley villagers (34 total)
 * Includes 12 marriage candidates and 22 other villagers
 * Data sourced from Stardew Valley Wiki
 */

export const VILLAGERS: Villager[] = [
  // BACHELORS (6)
  {
    id: 'alex',
    name: 'Alex',
    gender: 'male',
    birthday: { season: 'Summer', day: 13 },
    description: 'Alex loves sports and dreams of becoming a professional gridball player. He lives in the house southeast of Pierre\'s General Store with his grandparents, George and Evelyn.',
    marriageable: true,
    location: '1 River Road (George & Evelyn\'s House)',
    lovedGifts: [
      'Complete Breakfast',
      'Jack Be Nimble, Jack Be Thick',
      'Salmon Dinner',
    ],
    likedGifts: [
      'All Eggs (except Void Egg)',
      'Dinosaur Egg',
      'Field Snack',
      'Parrot Egg',
    ],
    dislikedGifts: [
      'All Universal Dislikes',
      'All Books (except "Jack Be Nimble, Jack Be Thick")',
      'Salmonberry',
      'Wild Horseradish',
    ],
    hatedGifts: [
      'Holly',
      'Quartz',
    ],
    schedule: {
      general: 'Usually found at home or at the beach',
      default: {
        '8:00 AM': '1 River Road - outside near tree',
        '1:00 PM': '1 River Road - bedroom lifting weights',
        '4:00 PM': '1 River Road - outside by dog pen',
        '6:30 PM': '1 River Road - entryway',
        '8:00 PM': '1 River Road - bedroom by dresser',
        '10:00 PM': '1 River Road - bedroom (bed)'
      },
      spring: {
        '8:00 AM': '1 River Road - outside near tree',
        '1:00 PM': '1 River Road - bedroom lifting weights',
        '4:00 PM': '1 River Road - outside by dog pen',
        '6:30 PM': '1 River Road - entryway',
        '8:00 PM': '1 River Road - bedroom by dresser',
        '10:00 PM': '1 River Road - bedroom (bed)'
      },
      summer: {
        '7:50 AM': 'The Beach',
        '12:00 PM': 'The Beach - ice cream stand',
        '5:00 PM': '1 River Road - bedroom lifting weights',
        '7:00 PM': '1 River Road - entryway',
        '8:00 PM': '1 River Road - bedroom by dresser',
        '10:00 PM': '1 River Road - bedroom (bed)'
      },
      winter: {
        '8:00 AM': '1 River Road - bedroom',
        '9:00 AM': 'Spa',
        '3:00 PM': '1 River Road - bedroom',
        '6:00 PM': '1 River Road - outside by dog kennel',
        '7:30 PM': '1 River Road - entryway',
        '9:00 PM': '1 River Road - bedroom by dresser',
        '10:40 PM': '1 River Road - bedroom (bed)'
      },
      rainy: {
        '8:00 AM': '1 River Road - entryway',
        '1:00 PM': '1 River Road - bedroom lifting weights',
        '4:00 PM': '1 River Road - outside by dog pen',
        '6:30 PM': '1 River Road - entryway',
        '8:00 PM': '1 River Road - bedroom by dresser',
        '10:00 PM': '1 River Road - bedroom (bed)'
      },
      notes: 'Spends more time at the beach in summer. Visits the Spa in winter.'
    },
    portraitUrl: 'assets/portraits/Alex.png'
  },
  {
    id: 'elliott',
    name: 'Elliott',
    gender: 'male',
    birthday: { season: 'Fall', day: 5 },
    description: 'Elliott lives alone in a cabin on the beach. He is a writer who dreams of writing a magnificent novel. He is a sentimental "romantic" with a tendency to go off onto flowery, poetic tangents.',
    marriageable: true,
    location: 'Elliott\'s Cabin (The Beach)',
    lovedGifts: [
      'Crab Cakes',
      'Duck Feather',
      'Lobster',
      'Pomegranate',
      'Squid Ink',
      'Tom Kha Soup',
    ],
    likedGifts: [
      'All Universal Likes (except Amaranth, Pizza, Rainbow Shell)',
      'All Books',
      'All Fruits (except Pomegranate, Salmonberry)',
      'Octopus',
      'Squid',
    ],
    dislikedGifts: [
      'All Universal Dislikes (except Sea Urchin)',
      'Amaranth',
      'Quartz',
      'Salmonberry',
      'Sea Cucumber',
      'Super Cucumber',
    ],
    hatedGifts: [
      'Amaranth',
      'Holly',
      'Quartz',
      'Salmonberry',
      'Sea Cucumber',
      'Super Cucumber',
    ],
    schedule: {
      general: 'Lives in his cabin on the beach, often found writing',
      default: {
        '8:00 AM': 'Elliott\'s Cabin - writing',
        '12:00 PM': 'The Beach - south of cabin',
        '1:30 PM': 'Elliott\'s Cabin',
        '3:00 PM': 'The Beach - bridge north of beach',
        '6:00 PM': 'Elliott\'s Cabin'
      },
      friday: {
        '8:00 AM': 'Elliott\'s Cabin',
        '11:00 AM': 'The Beach - docks by Willy\'s house',
        '5:00 PM': 'Stardrop Saloon',
        '11:40 PM': 'Elliott\'s Cabin'
      },
      sunday: {
        '8:00 AM': 'Elliott\'s Cabin',
        '11:00 AM': 'The Beach - docks by Willy\'s house',
        '5:00 PM': 'Stardrop Saloon',
        '11:40 PM': 'Elliott\'s Cabin'
      },
      rainy: {
        '8:00 AM': 'Elliott\'s Cabin - stays inside all day writing'
      },
      notes: 'On rainy days, stays in cabin all day writing. Visits the Saloon on Fridays and Sundays.'
    },
    portraitUrl: 'assets/portraits/Elliott.png'
  },
  {
    id: 'harvey',
    name: 'Harvey',
    gender: 'male',
    birthday: { season: 'Winter', day: 14 },
    description: 'Harvey is the town doctor. He lives in the apartment above Harvey\'s Clinic. His hobbies include collecting model planes and trains, and he also loves coffee.',
    marriageable: true,
    location: 'Harvey\'s Clinic',
    lovedGifts: [
      'Coffee',
      'Pickles',
      'Super Meal',
      'Truffle Oil',
      'Wine',
    ],
    likedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Duck Egg',
      'Duck Feather',
      'Ginger',
      'Goat Milk',
      'Hazelnut',
      'Holly',
      'Large Goat Milk',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Quartz',
      'Snow Yam',
      'Spring Onion',
      'Wild Horseradish',
      'Winter Root',
    ],
    dislikedGifts: [
      'Blueberry Tart',
      'Bread',
      'Cheese',
      'Chocolate Cake',
      'Cookie',
      'Cranberry Sauce',
      'Fried Mushroom',
      'Glazed Yams',
      'Goat Cheese',
      'Hashbrowns',
      'Ice Cream',
      'Pancakes',
      'Pink Cake',
      'Pizza',
      'Rhubarb Pie',
      'Rice Pudding',
    ],
    hatedGifts: [
      'Coral',
      'Nautilus Shell',
      'Rainbow Shell',
      'Salmonberry',
      'Spice Berry',
    ],
    schedule: {
      general: 'Works at the clinic during business hours',
      default: {
        '7:00 AM': 'Harvey\'s Clinic - apartment, by refrigerator',
        '8:30 AM': 'Harvey\'s Clinic - front desk',
        '12:00 PM': 'Town - varies by season',
        '5:30 PM': 'Harvey\'s Clinic - front desk',
        '6:40 PM': 'Harvey\'s Clinic - apartment, reading by bookshelf',
        '10:00 PM': 'Harvey\'s Clinic - apartment (bed)'
      },
      spring: {
        '7:00 AM': 'Harvey\'s Clinic - apartment',
        '8:30 AM': 'Harvey\'s Clinic - front desk',
        '12:00 PM': 'Town - park west of town square',
        '5:30 PM': 'Harvey\'s Clinic - front desk',
        '6:40 PM': 'Harvey\'s Clinic - apartment, reading',
        '10:00 PM': 'Harvey\'s Clinic - apartment (bed)'
      },
      summer: {
        '7:00 AM': 'Harvey\'s Clinic - apartment',
        '8:30 AM': 'Harvey\'s Clinic - front desk',
        '12:00 PM': 'Town - south of fountain near Community Center',
        '5:30 PM': 'Harvey\'s Clinic - front desk',
        '6:40 PM': 'Harvey\'s Clinic - apartment, reading',
        '10:00 PM': 'Harvey\'s Clinic - apartment (bed)'
      },
      fall: {
        '7:00 AM': 'Harvey\'s Clinic - apartment',
        '8:30 AM': 'Harvey\'s Clinic - front desk',
        '12:00 PM': 'Town - tree west of beach bridge',
        '5:30 PM': 'Harvey\'s Clinic - front desk',
        '6:40 PM': 'Harvey\'s Clinic - apartment, reading',
        '10:00 PM': 'Harvey\'s Clinic - apartment (bed)'
      },
      winter: {
        '7:00 AM': 'Harvey\'s Clinic - apartment',
        '8:30 AM': 'Harvey\'s Clinic - front desk',
        '12:00 PM': 'Harvey\'s Clinic - upstairs, sits by radio',
        '5:30 PM': 'Harvey\'s Clinic - front desk',
        '6:40 PM': 'Harvey\'s Clinic - apartment, reading',
        '10:00 PM': 'Harvey\'s Clinic - apartment (bed)'
      },
      rainy: {
        '7:00 AM': 'Harvey\'s Clinic - apartment',
        '8:30 AM': 'Harvey\'s Clinic - apartment',
        '5:30 PM': 'Stardrop Saloon',
        '11:40 PM': 'Harvey\'s Clinic - apartment (bed)'
      },
      notes: 'On rainy days, goes to Stardrop Saloon in the evening. Takes walks during lunch in different areas depending on season.'
    },
    portraitUrl: 'assets/portraits/Harvey.png'
  },
  {
    id: 'sam',
    name: 'Sam',
    gender: 'male',
    birthday: { season: 'Summer', day: 17 },
    description: 'Sam is an outgoing, friendly guy who is brimming with youthful energy. He plays guitar and drums, and wants to start a band with Sebastian. He works part-time at JojaMart.',
    marriageable: true,
    location: '1 Willow Lane',
    lovedGifts: [
      'Cactus Fruit',
      'Maple Bar',
      'Pizza',
      'Tigerseye',
    ],
    likedGifts: [
      'Joja Cola',
      'All Universal Likes (except Duck Mayonnaise, Mayonnaise, Pickles, Vegetables)',
      'All Eggs (except Void Egg)',
    ],
    dislikedGifts: [
      'All Universal Dislikes (except Joja Cola, Seaweed)',
      'All Vegetables (except Hops, Tea Leaves, Wheat)',
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Quartz',
      'Salmonberry',
      'Seaweed',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'Bone Fragment',
      'Cinder Shard',
      'Coal',
      'Copper Bar',
      'Duck Mayonnaise',
      'Gold Bar',
      'Gold Ore',
      'Iridium Bar',
      'Iridium Ore',
      'Iron Bar',
      'Mayonnaise',
      'Pickles',
      'Refined Quartz',
    ],
    schedule: {
      general: 'Often found at home, around town, or at work',
      default: {
        '10:00 AM': '1 Willow Lane - bedroom',
        '10:40 AM': '1 Willow Lane - playing guitar in bedroom',
        '1:40 PM': 'Leaves home, walks into town',
        '6:30 PM': '1 Willow Lane - home',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      spring: {
        '10:00 AM': '1 Willow Lane - bedroom',
        '10:40 AM': '1 Willow Lane - playing guitar',
        '1:40 PM': 'Town - near Lewis\' house by river',
        '6:30 PM': '1 Willow Lane',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      summer: {
        '10:00 AM': '1 Willow Lane - bedroom',
        '10:40 AM': '1 Willow Lane - playing guitar',
        '1:40 PM': 'The Beach - with Vincent',
        '6:30 PM': '1 Willow Lane',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      fall: {
        '10:00 AM': '1 Willow Lane - bedroom',
        '10:40 AM': '1 Willow Lane - playing guitar',
        '1:40 PM': 'Cindersap Forest - southwest of Leah\'s cottage',
        '6:30 PM': '1 Willow Lane',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      winter: {
        '10:00 AM': '1 Willow Lane - bedroom',
        '10:40 AM': '1 Willow Lane - playing guitar',
        '1:40 PM': 'Stardrop Saloon',
        '6:30 PM': '1 Willow Lane',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      monday: {
        '10:00 AM': '1 Willow Lane - wakes up',
        '11:00 AM': 'JojaMart - work',
        '4:00 PM': '1 Willow Lane - home',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      wednesday: {
        '10:00 AM': '1 Willow Lane - wakes up',
        '11:00 AM': 'JojaMart - work',
        '4:00 PM': '1 Willow Lane - home',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      friday: {
        '10:00 AM': '1 Willow Lane - bedroom',
        '12:00 PM': 'Stardrop Saloon - skateboarding, playing pool',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      rainy: {
        '10:00 AM': '1 Willow Lane - stays home playing guitar and video games',
        '9:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      notes: 'Works at JojaMart on Mondays and Wednesdays. Goes to the beach in summer. Visits Stardrop Saloon on Fridays and in winter.'
    },
    portraitUrl: 'assets/portraits/Sam.png'
  },
  {
    id: 'sebastian',
    name: 'Sebastian',
    gender: 'male',
    birthday: { season: 'Winter', day: 10 },
    description: 'Sebastian is a rebellious loner who lives in his parents\' basement. He is Maru\'s older half-brother, and feels like his sister gets all the attention and adoration, while he is left to rot in the dark.',
    marriageable: true,
    location: '24 Mountain Road (Carpenter\'s Shop)',
    lovedGifts: [
      'Frog Egg',
      'Frozen Tear',
      'Obsidian',
      'Pumpkin Soup',
      'Sashimi',
      'Void Egg',
    ],
    likedGifts: [
      'Combat Quarterly',
      'Flounder',
      'Monster Compendium',
      'Quartz',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Salmonberry',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'All Artisan Goods (except Coffee, Green Tea, Oil)',
      'All Eggs (except Void Egg)',
      'Clay',
      'Complete Breakfast',
      'Farmer\'s Lunch',
      'Omelet',
      'Piña Colada',
    ],
    schedule: {
      general: 'Usually in his basement room working on the computer',
      default: {
        '9:00 AM': '24 Mountain Road - basement bedroom (in bed)',
        '10:30 AM': '24 Mountain Road - basement, at computer',
        '3:00 PM': '24 Mountain Road - kitchen',
        '3:30 PM': '24 Mountain Road - basement bedroom',
        '4:10 PM': '24 Mountain Road - basement, at computer',
        '6:30 PM': 'The Mountain - lake, smoking',
        '7:30 PM': 'The Mountain - lake, smoking',
        '9:30 PM': '24 Mountain Road - basement bedroom'
      },
      friday: {
        '10:30 AM': '24 Mountain Road - basement, at computer',
        '3:00 PM': 'Stardrop Saloon - playing pool with Sam',
        '9:10 PM': '24 Mountain Road - basement bedroom'
      },
      saturday: {
        '10:30 AM': '24 Mountain Road - basement, at computer',
        '12:00 PM': '1 Willow Lane - Sam\'s room, hanging out',
        '5:00 PM': 'Town - smoking by river',
        '9:00 PM': '24 Mountain Road - basement bedroom'
      },
      rainy: {
        '10:30 AM': '24 Mountain Road - basement, at computer',
        '2:00 PM': 'The Beach or Stardrop Saloon',
        '11:00 PM': '24 Mountain Road - basement bedroom'
      },
      notes: 'Spends most time on his computer in the basement. Plays pool with Sam on Fridays. Hangs out with Sam on Saturdays. Goes to the lake to smoke in evenings.'
    },
    portraitUrl: 'assets/portraits/Sebastian.png'
  },
  {
    id: 'shane',
    name: 'Shane',
    gender: 'male',
    birthday: { season: 'Spring', day: 20 },
    description: 'Shane is a villager who lives with his aunt Marnie and goddaughter Jas. He works at JojaMart and spends a lot of time at The Stardrop Saloon, where he is friends with Gus.',
    marriageable: true,
    location: 'Marnie\'s Ranch',
    lovedGifts: [
      'Beer',
      'Hot Pepper',
      'Pepper Poppers',
      'Pizza',
    ],
    likedGifts: [
      'All Universal Likes (except Pickles)',
      'All Eggs (except Void Egg)',
      'All Fruits (except Hot Pepper)',
    ],
    dislikedGifts: [
      'All Universal Dislikes',
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Seaweed',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'Pickles',
      'Quartz',
    ],
    schedule: {
      general: 'Works at JojaMart weekdays, visits Stardrop Saloon in evenings',
      default: {
        '7:10 AM': 'Marnie\'s Ranch - leaves for JojaMart',
        '9:00 AM': 'JojaMart - working',
        '5:00 PM': 'Leaves JojaMart for Stardrop Saloon',
        '11:10 PM': 'Marnie\'s Ranch - home'
      },
      saturday: {
        '9:00 AM': 'Marnie\'s Ranch - kitchen',
        '12:00 PM': 'Pierre\'s General Store',
        '5:00 PM': 'Stardrop Saloon',
        '11:00 PM': 'Marnie\'s Ranch - home'
      },
      sunday: {
        '12:30 PM': 'Marnie\'s Ranch - kitchen',
        '6:00 PM': 'Stardrop Saloon',
        '12:00 AM': 'Marnie\'s Ranch - home'
      },
      notes: 'Works at JojaMart on weekdays (Community Center not restored). After Community Center is restored, stays at ranch in mornings and visits Saloon in afternoons. Always spends evenings at Stardrop Saloon.'
    },
    portraitUrl: 'assets/portraits/Shane.png'
  },

  // BACHELORETTES (6)
  {
    id: 'abigail',
    name: 'Abigail',
    gender: 'female',
    birthday: { season: 'Fall', day: 13 },
    description: 'Abigail lives at the general store with her parents. She sometimes fights with her mom, who worries about Abigail\'s "alternative lifestyle". Her interests include exploring the mines and playing video games.',
    marriageable: true,
    location: 'Pierre\'s General Store',
    lovedGifts: [
      'Amethyst',
      'Banana Pudding',
      'Blackberry Cobbler',
      'Chocolate Cake',
      'Monster Compendium',
      'Pufferfish',
      'Pumpkin',
      'Spicy Eel',
    ],
    likedGifts: [
      'Ancient Sword',
      'Basilisk Paw',
      'Bone Flute',
      'Combat Quarterly',
      'Quartz',
    ],
    dislikedGifts: [
      'Sugar',
      'Wild Horseradish',
      'All Eggs',
      'All Fruits (except Fruit Tree Fruit)',
      'Most Vegetables (except Hops, Pumpkin, Tea Leaves, Wheat)',
    ],
    hatedGifts: [
      'Clay',
      'Holly',
    ],
    schedule: {
      general: 'Lives above Pierre\'s General Store',
      default: {
        '9:00 AM': 'Pierre\'s General Store - leaves bedroom to kitchen',
        '10:30 AM': 'Pierre\'s General Store - shop area',
        '1:00 PM': 'Town - varies by season',
        '5:30 PM': 'Pierre\'s General Store - home',
        '7:30 PM': 'Pierre\'s General Store - bedroom playing video games',
        '11:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      wednesday: {
        '9:00 AM': 'Pierre\'s General Store - bedroom',
        '11:00 AM': 'Museum',
        '7:00 PM': 'Graveyard',
        '10:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      friday: {
        '9:00 AM': 'Pierre\'s General Store - bedroom',
        '12:00 PM': 'Stardrop Saloon - arcade',
        '10:30 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      sunday: {
        '9:00 AM': 'Pierre\'s General Store - bedroom',
        '11:00 AM': 'Wizard\'s Tower',
        '6:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': 'Pierre\'s General Store - stays home playing video games',
        '5:00 PM': 'Stardrop Saloon - arcade (optional)',
        '11:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      notes: 'Visits Museum on Wednesdays, arcade on Fridays, Wizard\'s Tower on Sundays. On rainy days, stays home playing video games or goes to arcade.'
    },
    portraitUrl: 'assets/portraits/Abigail.png'
  },
  {
    id: 'emily',
    name: 'Emily',
    gender: 'female',
    birthday: { season: 'Spring', day: 27 },
    description: 'Emily is a villager who lives in Pelican Town. She is one of the twelve characters available to marry. She works at The Stardrop Saloon with Gus, and is known for her unique sense of style and interest in gemstones.',
    marriageable: true,
    location: '2 Willow Lane',
    lovedGifts: [
      'Amethyst',
      'Aquamarine',
      'Cloth',
      'Emerald',
      'Jade',
      'Parrot Egg',
      'Ruby',
      'Survival Burger',
      'Topaz',
      'Wool',
    ],
    likedGifts: [
      'Daffodil',
      'Quartz',
    ],
    dislikedGifts: [
      'Fried Eel',
      'Ice Cream',
      'Rice Pudding',
      'Salmonberry',
      'Spicy Eel',
    ],
    hatedGifts: [
      'Fish Taco',
      'Holly',
      'Maki Roll',
      'Salmon Dinner',
      'Sashimi',
    ],
    schedule: {
      general: 'Works at Stardrop Saloon in evenings',
      default: {
        '9:00 AM': '2 Willow Lane - bedroom',
        '12:00 PM': '2 Willow Lane - living room',
        '3:30 PM': 'Stardrop Saloon - working',
        '12:30 AM': '2 Willow Lane - home'
      },
      tuesday: {
        '9:00 AM': '2 Willow Lane - bedroom',
        '10:00 AM': 'Pierre\'s General Store - aerobics class',
        '4:00 PM': 'Stardrop Saloon - working',
        '12:30 AM': '2 Willow Lane - home'
      },
      friday: {
        '9:00 AM': '2 Willow Lane - bedroom',
        '10:00 AM': 'Community Center - Crafts Room',
        '3:30 PM': 'Stardrop Saloon - working',
        '12:30 AM': '2 Willow Lane - home'
      },
      notes: 'Works at Stardrop Saloon every evening. Attends aerobics on Tuesdays. Visits Community Center on Fridays (if restored).'
    },
    portraitUrl: 'assets/portraits/Emily.png'
  },
  {
    id: 'haley',
    name: 'Haley',
    gender: 'female',
    birthday: { season: 'Spring', day: 14 },
    description: 'Haley lives with her sister Emily in their parents\' house. She can come across as being shallow, mostly interested in her appearance and whether people are paying attention to her. Over time, she reveals a softer side.',
    marriageable: true,
    location: '2 Willow Lane',
    lovedGifts: [
      'Coconut',
      'Fruit Salad',
      'Pink Cake',
      'Sunflower',
      'All Universal Loves (except Prismatic Shard)',
    ],
    likedGifts: [
      'Daffodil',
      'All Universal Likes (except Vegetables)',
    ],
    dislikedGifts: [
      'All Eggs',
      'Most Fruits (except Coconut)',
      'All Milk',
      'Most Vegetables (except Hops, Tea Leaves, Wheat)',
      'Chanterelle',
      'Common Mushroom',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Mystic Syrup',
      'Purple Mushroom',
      'Quartz',
      'Snow Yam',
      'Winter Root',
    ],
    hatedGifts: [
      'All Fish',
      'Clay',
      'Prismatic Shard',
      'Wild Horseradish',
    ],
    schedule: {
      general: 'Often found around town taking photos',
      default: {
        '9:00 AM': '2 Willow Lane - bedroom',
        '11:00 AM': 'Town - fountain west of Community Center',
        '4:30 PM': '2 Willow Lane - home',
        '5:50 PM': '2 Willow Lane - cooking dinner',
        '8:20 PM': '2 Willow Lane - bedroom',
        '10:30 PM': '2 Willow Lane - bedroom (bed)'
      },
      monday: {
        '9:00 AM': '2 Willow Lane - bedroom',
        '11:00 AM': 'Town - river south of Marnie\'s Ranch taking pictures',
        '4:30 PM': '2 Willow Lane - home',
        '11:00 PM': '2 Willow Lane - bedroom (bed)'
      },
      rainy: {
        '10:30 AM': '2 Willow Lane - wakes up, stands by dresser',
        '11:30 AM': '2 Willow Lane - vanity mirror',
        '12:00 PM': '2 Willow Lane - kitchen',
        '4:00 PM': '2 Willow Lane - bedroom',
        '7:00 PM': '2 Willow Lane - living room',
        '10:00 PM': '2 Willow Lane - bedroom (bed)'
      },
      notes: 'Loves photography. Goes to river on Mondays. Stays indoors on rainy days.'
    },
    portraitUrl: 'assets/portraits/Haley.png'
  },
  {
    id: 'leah',
    name: 'Leah',
    gender: 'female',
    birthday: { season: 'Winter', day: 23 },
    description: 'Leah lives alone in a small cabin just outside of town. She loves to spend time outside, foraging from the land. She also enjoys sculpting and making art from whatever she can find.',
    marriageable: true,
    location: 'Leah\'s Cottage (Cindersap Forest)',
    lovedGifts: [
      'Goat Cheese',
      'Poppyseed Muffin',
      'Salad',
      'Stir Fry',
      'Truffle',
      'Vegetable Medley',
      'Wine',
    ],
    likedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Driftwood',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Snow Yam',
      'Spring Onion',
      'Wild Horseradish',
      'Winter Root',
      'All Eggs (except Void Egg)',
      'All Fruits',
      'All Milk',
    ],
    dislikedGifts: [
      'Carp Surprise',
      'Cookie',
      'Fried Egg',
      'Ice Cream',
      'Pink Cake',
      'Rice Pudding',
      'Seaweed',
      'Survival Burger',
      'Tortilla',
      'Bread',
      'Hashbrowns',
      'Pancakes',
      'Pizza',
      'Void Egg',
    ],
    hatedGifts: [
      'Bread',
      'Hashbrowns',
      'Pancakes',
      'Pizza',
      'Void Egg',
    ],
    schedule: {
      general: 'Artist living in Cindersap Forest cottage',
      default: {
        '9:00 AM': 'Leah\'s Cottage - sculpting',
        '12:00 PM': 'Cindersap Forest - river near small island',
        '3:00 PM': 'Cindersap Forest - pond pier, drawing',
        '6:30 PM': 'Cindersap Forest - west side of pond',
        '7:30 PM': 'Leah\'s Cottage - by bookcase',
        '10:00 PM': 'Leah\'s Cottage - at table',
        '12:00 AM': 'Leah\'s Cottage - bedroom (bed)'
      },
      monday: {
        '9:00 AM': 'Leah\'s Cottage - sculpting',
        '11:00 AM': 'Pierre\'s General Store - shopping',
        '5:00 PM': 'Leah\'s Cottage - by bookcase',
        '12:00 AM': 'Leah\'s Cottage - bedroom (bed)'
      },
      friday: {
        '9:00 AM': 'Leah\'s Cottage - painting at easel',
        '4:00 PM': 'Stardrop Saloon',
        '11:40 PM': 'Leah\'s Cottage - bedroom (bed)'
      },
      saturday: {
        '9:00 AM': 'Leah\'s Cottage - painting at easel',
        '4:00 PM': 'Stardrop Saloon',
        '11:40 PM': 'Leah\'s Cottage - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': 'Leah\'s Cottage - painting at easel',
        '4:00 PM': 'Stardrop Saloon',
        '11:40 PM': 'Leah\'s Cottage - bedroom (bed)'
      },
      notes: 'Spends time creating art and foraging in the forest. Shops on Mondays. Visits Saloon on rainy days and weekends.'
    },
    portraitUrl: 'assets/portraits/Leah.png'
  },
  {
    id: 'maru',
    name: 'Maru',
    gender: 'female',
    birthday: { season: 'Summer', day: 10 },
    description: 'Maru is a young woman who lives in The Mountains with her family. She is Robin and Demetrius\' daughter, and Sebastian\'s younger half-sister. She is very intelligent and enjoys working on various projects.',
    marriageable: true,
    location: '24 Mountain Road (Carpenter\'s Shop)',
    lovedGifts: [
      'Battery Pack',
      'Cauliflower',
      'Cheese Cauliflower',
      'Diamond',
      'Dwarf Gadget',
      'Gold Bar',
      'Iridium Bar',
      'Miner\'s Treat',
      'Pepper Poppers',
      'Radioactive Bar',
      'Rhubarb Pie',
      'Strawberry',
    ],
    likedGifts: [
      'All Universal Likes (except Honey, Maple Syrup, Pickles)',
      'Chanterelle',
      'Copper Bar',
      'Iron Bar',
      'Magma Cap',
      'Morel',
      'Oak Resin',
      'Pine Tar',
      'Purple Mushroom',
      'Quartz',
      'Radioactive Ore',
    ],
    dislikedGifts: [
      'All Universal Dislikes (except Battery Pack, Copper Bar, Dwarf Gadget, Gold Bar, Iridium Bar, Iron Bar, Oak Resin, Pine Tar)',
      'Blackberry',
      'Common Mushroom',
      'Crystal Fruit',
      'Maple Syrup',
      'Salmonberry',
    ],
    hatedGifts: [
      'Holly',
      'Honey',
      'Pickles',
      'Snow Yam',
      'Truffle',
    ],
    schedule: {
      general: 'Works as a nurse at Harvey\'s Clinic, enjoys tinkering in the lab',
      default: {
        '9:00 AM': '24 Mountain Road - bedroom',
        '10:20 AM': '24 Mountain Road - lab',
        '1:30 PM': 'Town - bench south of Saloon',
        '6:30 PM': '24 Mountain Road - home',
        '8:30 PM': '24 Mountain Road - bedroom',
        '11:00 PM': '24 Mountain Road - bedroom (bed)'
      },
      tuesday: {
        '8:00 AM': '24 Mountain Road - leaves home',
        '9:20 AM': 'Harvey\'s Clinic - working as nurse',
        '4:45 PM': '24 Mountain Road - home',
        '6:30 PM': '24 Mountain Road - kitchen',
        '12:00 AM': '24 Mountain Road - bedroom (bed)'
      },
      thursday: {
        '8:00 AM': '24 Mountain Road - leaves home',
        '9:20 AM': 'Harvey\'s Clinic - working as nurse',
        '4:45 PM': '24 Mountain Road - home',
        '6:30 PM': '24 Mountain Road - kitchen',
        '12:00 AM': '24 Mountain Road - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': '24 Mountain Road - bedroom',
        '12:50 PM': '24 Mountain Road - entryway/store',
        '2:40 PM': '24 Mountain Road - lab',
        '11:00 PM': '24 Mountain Road - bedroom (bed)'
      },
      notes: 'Works as nurse at Harvey\'s Clinic on Tuesdays and Thursdays. Spends time in lab at home working on projects. Sits on bench in town on nice days.'
    },
    portraitUrl: 'assets/portraits/Maru.png'
  },
  {
    id: 'penny',
    name: 'Penny',
    gender: 'female',
    birthday: { season: 'Fall', day: 2 },
    description: 'Penny lives with her mother Pam in a little trailer by the river. She is shy and modest, without any grand ambitions for life other than settling in and starting a family. She also tutors Vincent and Jas at the museum.',
    marriageable: true,
    location: 'Trailer (near 2 Willow Lane)',
    lovedGifts: [
      'Diamond',
      'Emerald',
      'Melon',
      'Poppy',
      'Poppyseed Muffin',
      'Red Plate',
      'Roots Platter',
      'Sandfish',
      'Tom Kha Soup',
    ],
    likedGifts: [
      'All Universal Likes (except Algae Soup, Beer, Mead, Pale Ale, Pale Broth, Piña Colada, Wine)',
      'All Artifacts',
      'All Milk',
      'Dandelion',
      'Leek',
    ],
    dislikedGifts: [
      'All Universal Dislikes (except Artifacts, Price Catalogue, Sandfish)',
      'Algae Soup',
      'Duck Feather',
      'Pale Broth',
      'Purple Mushroom',
      'Quartz',
      'Red Mushroom',
      'Salmonberry',
      'Wool',
    ],
    hatedGifts: [
      'Beer',
      'Grape',
      'Holly',
      'Hops',
      'Mead',
      'Pale Ale',
      'Piña Colada',
      'Rabbit\'s Foot',
      'Wine',
    ],
    schedule: {
      general: 'Tutors Jas and Vincent at the Museum',
      default: {
        '8:00 AM': 'Graveyard - reading outside',
        '12:30 PM': 'Trailer - washing dishes',
        '4:00 PM': 'Town - sitting with Maru near Saloon',
        '6:40 PM': 'Trailer - home for evening',
        '9:00 PM': 'Trailer - bedroom (bed)'
      },
      tuesday: {
        '9:00 AM': 'Museum - tutoring Jas and Vincent',
        '2:00 PM': 'Town - ice cream stand with children',
        '4:20 PM': '1 Willow Lane - walking Vincent home',
        '5:50 PM': 'Marnie\'s Ranch - walking Jas home',
        '6:30 PM': 'Trailer - home',
        '9:00 PM': 'Trailer - bedroom (bed)'
      },
      wednesday: {
        '9:00 AM': 'Museum - tutoring Jas and Vincent',
        '2:00 PM': 'Town - ice cream stand with children',
        '4:20 PM': '1 Willow Lane - walking Vincent home',
        '5:50 PM': 'Marnie\'s Ranch - walking Jas home',
        '6:30 PM': 'Trailer - home',
        '9:00 PM': 'Trailer - bedroom (bed)'
      },
      friday: {
        '9:00 AM': 'Museum - tutoring Jas and Vincent',
        '2:00 PM': 'Town - ice cream stand with children',
        '4:20 PM': '1 Willow Lane - walking Vincent home',
        '5:50 PM': 'Marnie\'s Ranch - walking Jas home',
        '6:30 PM': 'Trailer - home',
        '9:00 PM': 'Trailer - bedroom (bed)'
      },
      saturday: {
        '10:00 AM': 'Town - near graveyard with Jas and Vincent',
        '12:00 PM': 'Town - playground',
        '5:00 PM': '2 Willow Lane - drops children off',
        '6:30 PM': 'Trailer - home',
        '9:00 PM': 'Trailer - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': 'Trailer - bedroom',
        '11:00 AM': 'Trailer - kitchen',
        '3:00 PM': 'Trailer - watching TV',
        '6:00 PM': 'Trailer - reading in bedroom',
        '9:00 PM': 'Trailer - bedroom (bed)'
      },
      notes: 'Tutors Jas and Vincent on Tuesdays, Wednesdays, and Fridays. Takes children to playground on Saturdays. Stays home on rainy days.'
    },
    portraitUrl: 'assets/portraits/Penny.png'
  },

  // NON-MARRIAGE CANDIDATES (22)

  // Adults - Townspeople
  {
    id: 'caroline',
    name: 'Caroline',
    gender: 'female',
    birthday: { season: 'Winter', day: 7 },
    description: 'Caroline is Pierre\'s wife and Abigail\'s mother. She teaches an exercise class at Caroline\'s sun room in Pierre\'s General Store and tends to her garden.',
    marriageable: false,
    location: 'Pierre\'s General Store',
    lovedGifts: [
      'Fish Taco',
      'Green Tea',
      'Summer Spangle',
      'Tropical Curry',
    ],
    likedGifts: [
      'Daffodil',
      'Tea Leaves',
      'Wild Horseradish',
    ],
    dislikedGifts: [
      'Amaranth',
      'Chanterelle',
      'Common Mushroom',
      'Dandelion',
      'Duck Mayonnaise',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Mayonnaise',
      'Morel',
      'Purple Mushroom',
      'Snow Yam',
      'Winter Root',
    ],
    hatedGifts: [
      'Holly',
      'Quartz',
    ],
    schedule: {
      general: 'Tends her garden and sunroom, teaches aerobics on Tuesdays',
      default: {
        '8:00 AM': 'Pierre\'s General Store - kitchen',
        '10:00 AM': 'Pierre\'s General Store - sunroom near tea sapling',
        '12:00 PM': 'Pierre\'s General Store - shop aisle',
        '1:30 PM': 'Town - town square with Jodi',
        '4:00 PM': 'Pierre\'s General Store - living room',
        '9:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      tuesday: {
        '8:00 AM': 'Pierre\'s General Store - kitchen',
        '10:00 AM': 'Pierre\'s General Store - sunroom',
        '1:00 PM': 'Pierre\'s General Store - living room teaching aerobics',
        '4:00 PM': 'Pierre\'s General Store - living room',
        '9:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      wednesday: {
        '8:00 AM': 'Pierre\'s General Store - kitchen',
        '10:00 AM': 'Pierre\'s General Store - sunroom',
        '12:00 PM': 'Town - fountain west of Community Center',
        '4:00 PM': 'Pierre\'s General Store - living room',
        '9:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      friday: {
        '8:00 AM': 'Pierre\'s General Store - kitchen',
        '10:00 AM': 'Pierre\'s General Store - sunroom',
        '12:00 PM': 'Museum - reading between bookshelves',
        '4:00 PM': 'Pierre\'s General Store - living room',
        '9:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      rainy: {
        '8:00 AM': 'Pierre\'s General Store - kitchen',
        '10:00 AM': 'Pierre\'s General Store - sunroom',
        '12:00 PM': 'Pierre\'s General Store - bedroom reading',
        '4:00 PM': 'Pierre\'s General Store - living room',
        '9:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      notes: 'Teaches aerobics class on Tuesdays. Visits Museum on Fridays. May randomly visit Ginger Island Beach Resort.'
    },
    portraitUrl: 'assets/portraits/Caroline.png'
  },
  {
    id: 'clint',
    name: 'Clint',
    gender: 'male',
    birthday: { season: 'Winter', day: 26 },
    description: 'Clint is the town blacksmith. He can upgrade your tools and break open geodes for you. He has a crush on Emily but struggles to express his feelings.',
    marriageable: false,
    location: 'Blacksmith Shop',
    lovedGifts: [
      'Amethyst',
      'Aquamarine',
      'Artichoke Dip',
      'Emerald',
      'Fiddlehead Risotto',
      'Gold Bar',
      'Iridium Bar',
      'Jade',
      'Omni Geode',
      'Ruby',
      'Topaz',
    ],
    likedGifts: [
      'Copper Bar',
      'Iron Bar',
      'Mining Monthly',
    ],
    dislikedGifts: [
      'Quartz',
      'Salmonberry',
      'Wild Horseradish',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Works at the Blacksmith, visits Saloon in evenings',
      default: {
        '9:00 AM': 'Blacksmith - behind counter',
        '5:00 PM': 'Blacksmith - working at anvil',
        '7:00 PM': 'Stardrop Saloon',
        '12:00 AM': 'Blacksmith - home (bed)'
      },
      friday: {
        '9:00 AM': 'Blacksmith - behind counter',
        '5:00 PM': 'Blacksmith - working at anvil',
        '7:00 PM': 'Stardrop Saloon',
        '12:00 AM': 'Blacksmith - home (bed)'
      },
      notes: 'After Community Center restoration, visits Community Center Boiler Room on Fridays (unless raining). Unavailable for shopping/upgrades on Fridays after restoration.'
    },
    portraitUrl: 'assets/portraits/Clint.png'
  },
  {
    id: 'demetrius',
    name: 'Demetrius',
    gender: 'male',
    birthday: { season: 'Summer', day: 19 },
    description: 'Demetrius is a scientist who studies the local wildlife. He is Robin\'s husband and Maru\'s father, and Sebastian\'s stepfather.',
    marriageable: false,
    location: '24 Mountain Road (Carpenter\'s Shop)',
    lovedGifts: [
      'Bean Hotpot',
      'Ice Cream',
      'Rice Pudding',
      'Strawberry',
    ],
    likedGifts: [
      'Dinosaur Egg',
      'Purple Mushroom',
      'All Eggs (except Void Egg)',
      'All Fruits (except Strawberry)',
    ],
    dislikedGifts: [
      'Quartz',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Studies wildlife at his laboratory, spends time outdoors',
      default: {
        '7:50 AM': '24 Mountain Road - kitchen sink',
        '11:00 AM': '24 Mountain Road - laboratory at microscope',
        '2:30 PM': '24 Mountain Road - outside by potted plant near garage',
        '3:30 PM': 'The Mountain - cliff southeast of house',
        '7:00 PM': '24 Mountain Road - kitchen by fridge',
        '8:40 PM': '24 Mountain Road - kitchen by stove',
        '9:00 PM': '24 Mountain Road - bedroom by bookshelf',
        '10:30 PM': '24 Mountain Road - bedroom (bed)'
      },
      friday: {
        '7:50 AM': '24 Mountain Road - kitchen',
        '11:00 AM': '24 Mountain Road - laboratory',
        '3:00 PM': 'Stardrop Saloon - dancing with Robin',
        '9:30 PM': '24 Mountain Road - bedroom (bed)'
      },
      rainy: {
        '7:50 AM': '24 Mountain Road - kitchen',
        '11:00 AM': '24 Mountain Road - laboratory at microscope',
        '7:00 PM': '24 Mountain Road - kitchen',
        '9:00 PM': '24 Mountain Road - bedroom by bookshelf',
        '10:30 PM': '24 Mountain Road - bedroom (bed)'
      },
      notes: 'Visits Stardrop Saloon on Fridays. May randomly visit Ginger Island Beach Resort. On Summer 25, visits Harvey\'s Clinic.'
    },
    portraitUrl: 'assets/portraits/Demetrius.png'
  },
  {
    id: 'dwarf',
    name: 'Dwarf',
    gender: 'male',
    birthday: { season: 'Summer', day: 22 },
    description: 'The Dwarf is a Valley resident who lives in The Mines. You need to understand Dwarvish to communicate. The Dwarf sells rare items and can give you a stardrop.',
    marriageable: false,
    location: 'The Mines (Eastern Cave)',
    lovedGifts: [
      'Amethyst',
      'Aquamarine',
      'Emerald',
      'Jade',
      'Lava Eel',
      'Lemon Stone',
      'Omni Geode',
      'Ruby',
      'Topaz',
    ],
    likedGifts: [
      'Cave Carrot',
      'Quartz',
      'All Artifacts',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Salmonberry',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'All Universal Hates',
    ],
    schedule: {
      general: 'Always in The Mines',
      default: {
        '6:00 AM': 'The Mines - eastern cave shop (does not move)'
      },
      notes: 'The Dwarf remains stationary in his shop in the Mines and never leaves.'
    },
    portraitUrl: 'assets/portraits/Dwarf.png'
  },
  {
    id: 'evelyn',
    name: 'Evelyn',
    gender: 'female',
    birthday: { season: 'Winter', day: 20 },
    description: 'Evelyn is George\'s wife and Alex\'s grandmother. She is kind, friendly, and often bakes cookies for the town. She loves flowers and gardening.',
    marriageable: false,
    location: '1 River Road',
    lovedGifts: [
      'Beet',
      'Chocolate Cake',
      'Diamond',
      'Fairy Rose',
      'Stuffing',
      'Tulip',
    ],
    likedGifts: [
      'Broken Glasses',
      'Clam',
      'Cockle',
      'Coral',
      'Daffodil',
      'Mussel',
      'Nautilus Shell',
      'Oyster',
      'Sea Urchin',
    ],
    dislikedGifts: [
      'Quartz',
      'Wild Horseradish',
    ],
    hatedGifts: [
      'All Fish (except Clam, Cockle, Mussel, Oyster)',
      'Clay',
      'Fried Eel',
      'Garlic',
      'Holly',
      'Maki Roll',
      'Salmonberry',
      'Sashimi',
      'Spice Berry',
      'Spicy Eel',
      'Trout Soup',
    ],
    schedule: {
      general: 'Tends to home and gardens in town square',
      default: {
        '8:00 AM': '1 River Road - kitchen',
        '10:40 AM': '1 River Road - living room near TV with George',
        '12:10 PM': '1 River Road - kitchen table',
        '1:00 PM': 'Town - tending plants southeast of town square',
        '4:30 PM': '1 River Road - kitchen',
        '7:00 PM': '1 River Road - living room by bookcase',
        '9:30 PM': '1 River Road - bedroom (bed)'
      },
      summer: {
        '8:00 AM': '1 River Road - kitchen',
        '10:40 AM': '1 River Road - living room near TV',
        '12:10 PM': '1 River Road - kitchen table',
        '1:00 PM': 'Town - tending plants northwest of town square',
        '4:30 PM': '1 River Road - kitchen',
        '7:00 PM': '1 River Road - living room by bookcase',
        '9:30 PM': '1 River Road - bedroom (bed)'
      },
      monday: {
        '8:00 AM': '1 River Road - kitchen',
        '10:40 AM': '1 River Road - living room near TV',
        '12:10 PM': 'Community Center - Crafts Room (after restoration)',
        '4:30 PM': '1 River Road - kitchen',
        '9:30 PM': '1 River Road - bedroom (bed)'
      },
      thursday: {
        '8:00 AM': '1 River Road - kitchen',
        '10:40 AM': '1 River Road - living room near TV',
        '12:10 PM': 'Community Center - Crafts Room (after restoration)',
        '4:30 PM': '1 River Road - kitchen',
        '9:30 PM': '1 River Road - bedroom (bed)'
      },
      saturday: {
        '8:00 AM': '1 River Road - kitchen',
        '10:40 AM': '1 River Road - living room near TV',
        '12:10 PM': 'Community Center - Crafts Room (after restoration)',
        '4:30 PM': '1 River Road - kitchen',
        '9:30 PM': '1 River Road - bedroom (bed)'
      },
      notes: 'Visits Community Center on Mondays, Thursdays, and Saturdays after restoration. Monthly clinic visit on the 2nd. Accompanies George to clinic on the 23rd. Never visits Beach Resort.'
    },
    portraitUrl: 'assets/portraits/Evelyn.png'
  },
  {
    id: 'george',
    name: 'George',
    gender: 'male',
    birthday: { season: 'Fall', day: 24 },
    description: 'George is Evelyn\'s husband and Alex\'s grandfather. He is a grumpy old man who loves gardening and watching TV. He uses a wheelchair.',
    marriageable: false,
    location: '1 River Road',
    lovedGifts: [
      'Fried Mushroom',
      'Leek',
    ],
    likedGifts: [
      'Daffodil',
      'All Universal Likes (except Flowers)',
    ],
    dislikedGifts: [
      'Salmonberry',
      'Wild Horseradish',
      'All Universal Dislikes (except Clay)',
      'All Flowers (except Poppy)',
    ],
    hatedGifts: [
      'Clay',
      'Dandelion',
      'Holly',
      'Quartz',
    ],
    schedule: {
      general: 'Watches TV at home, rarely leaves house',
      default: {
        '6:30 AM': '1 River Road - living room watching TV',
        '12:00 PM': '1 River Road - kitchen table',
        '3:00 PM': '1 River Road - living room watching TV',
        '8:00 PM': '1 River Road - bedroom (bed)'
      },
      summer: {
        '6:30 AM': '1 River Road - living room watching TV',
        '12:00 PM': 'Town - sits outside under tree',
        '3:00 PM': '1 River Road - living room watching TV',
        '8:00 PM': '1 River Road - bedroom (bed)'
      },
      sunday: {
        '6:30 AM': '1 River Road - living room watching TV',
        '12:00 PM': '1 River Road - kitchen table',
        '2:00 PM': 'Town - Statue of Yoba or Stardrop Saloon',
        '8:00 PM': '1 River Road - bedroom (bed)'
      },
      notes: 'Monthly clinic visit on the 23rd of each month. Sits outside under tree on Summer Fridays. May visit Statue of Yoba or watch sports at Saloon on Sundays.'
    },
    portraitUrl: 'assets/portraits/George.png'
  },
  {
    id: 'gus',
    name: 'Gus',
    gender: 'male',
    birthday: { season: 'Summer', day: 8 },
    description: 'Gus owns and operates the Stardrop Saloon. He is friendly and loves cooking. He cares deeply about the quality of his food and service.',
    marriageable: false,
    location: 'The Stardrop Saloon',
    lovedGifts: [
      'Diamond',
      'Escargot',
      'Fish Taco',
      'Orange',
      'Tropical Curry',
    ],
    likedGifts: [
      'Daffodil',
      'Truffle',
    ],
    dislikedGifts: [
      'Salmonberry',
      'Wild Horseradish',
    ],
    hatedGifts: [
      'Coleslaw',
      'Holly',
      'Quartz',
    ],
    schedule: {
      general: 'Runs the Stardrop Saloon',
      default: {
        '8:00 AM': 'Stardrop Saloon - room on couch',
        '12:00 PM': 'Stardrop Saloon - cleaning glasses behind bar',
        '4:30 PM': 'Stardrop Saloon - tending bar',
        '12:00 AM': 'Stardrop Saloon - bedroom (bed)'
      },
      monday: {
        '8:30 AM': 'Pierre\'s General Store - shopping',
        '11:00 AM': 'Stardrop Saloon - tending bar',
        '12:00 AM': 'Stardrop Saloon - bedroom (bed)'
      },
      tuesday: {
        '8:00 AM': 'Stardrop Saloon - room on couch',
        '8:30 AM': 'Community Center - kitchen (after restoration)',
        '12:30 PM': 'Stardrop Saloon - tending bar',
        '12:00 AM': 'Stardrop Saloon - bedroom (bed)'
      },
      notes: 'Shops at Pierre\'s on Mondays. Visits Community Center kitchen on Tuesdays after restoration. May randomly visit Beach Resort, leaving cash box on bar.'
    },
    portraitUrl: 'assets/portraits/Gus.png'
  },
  {
    id: 'jodi',
    name: 'Jodi',
    gender: 'female',
    birthday: { season: 'Fall', day: 11 },
    description: 'Jodi is Sam and Vincent\'s mother and Kent\'s wife. She is a caring mother who sometimes wishes she had pursued her own dreams.',
    marriageable: false,
    location: '1 Willow Lane',
    lovedGifts: [
      'Chocolate Cake',
      'Crispy Bass',
      'Diamond',
      'Eggplant Parmesan',
      'Fried Eel',
      'Pancakes',
      'Rhubarb Pie',
      'Vegetable Medley',
    ],
    likedGifts: [
      'All Universal Likes (except Garlic)',
      'All Eggs (except Void Egg)',
      'All Fruits (except Spice Berry)',
      'All Milk',
    ],
    dislikedGifts: [
      'All Universal Dislikes',
      'Chanterelle',
      'Common Mushroom',
      'Garlic',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Quartz',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'Daffodil',
      'Dandelion',
      'Spice Berry',
    ],
    schedule: {
      general: 'Homemaker, takes care of family',
      default: {
        '9:00 AM': '1 Willow Lane - kitchen',
        '11:30 AM': '1 Willow Lane - living room',
        '1:30 PM': 'Town - town square',
        '4:00 PM': '1 Willow Lane - home',
        '4:30 PM': '1 Willow Lane - kitchen',
        '7:30 PM': '1 Willow Lane - living room',
        '9:00 PM': '1 Willow Lane - puts Vincent to bed',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      tuesday: {
        '9:00 AM': '1 Willow Lane - kitchen',
        '11:00 AM': 'Pierre\'s General Store - aerobics class',
        '4:00 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      wednesday: {
        '9:00 AM': '1 Willow Lane - kitchen',
        '11:00 AM': 'Pierre\'s or JojaMart (depends on Community Center)',
        '4:00 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      friday: {
        '9:00 AM': '1 Willow Lane - kitchen',
        '11:00 AM': 'Pierre\'s or JojaMart (depends on Community Center)',
        '4:00 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': '1 Willow Lane - kitchen',
        '11:30 AM': '1 Willow Lane - living room',
        '7:30 PM': '1 Willow Lane - living room',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      notes: 'Attends aerobics on Tuesdays. Shops on Wednesdays and Fridays. May randomly visit Beach Resort. Takes Vincent to clinic on special dates.'
    },
    portraitUrl: 'assets/portraits/Jodi.png'
  },
  {
    id: 'kent',
    name: 'Kent',
    gender: 'male',
    birthday: { season: 'Spring', day: 4 },
    description: 'Kent is Jodi\'s husband and Sam and Vincent\'s father. He returns in Year 2 from serving in the military. He struggles with PTSD from his experiences.',
    marriageable: false,
    location: '1 Willow Lane',
    lovedGifts: [
      'Fiddlehead Risotto',
      'Roasted Hazelnuts',
    ],
    likedGifts: [
      'All Universal Likes (except Algae Soup, Piña Colada, Sashimi, Tortilla)',
      'All Eggs (except Void Egg)',
      'All Fruits',
      'Daffodil',
      'Dwarvish Safety Manual',
    ],
    dislikedGifts: [
      'All Universal Dislikes',
      'Piña Colada',
      'Quartz',
      'Snow Yam',
    ],
    hatedGifts: [
      'All Milk',
      'Algae Soup',
      'Holly',
      'Sashimi',
      'Tortilla',
    ],
    schedule: {
      general: 'Returns in Year 2, struggles with readjustment',
      default: {
        '7:00 AM': 'Town - between sewer entrance and beach bridge',
        '10:30 AM': '1 Willow Lane - living room',
        '2:00 PM': 'Town - under tree north of house',
        '5:00 PM': '1 Willow Lane - entryway',
        '7:00 PM': '1 Willow Lane - kitchen',
        '9:00 PM': 'Town - stands under tree in front of house',
        '11:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      friday: {
        '7:00 AM': 'Town - between sewer and beach',
        '10:30 AM': '1 Willow Lane - living room',
        '5:00 PM': 'Stardrop Saloon',
        '11:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      saturday: {
        '7:00 AM': 'Town - between sewer and beach',
        '10:30 AM': '1 Willow Lane - living room',
        '5:00 PM': 'Stardrop Saloon',
        '11:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      sunday: {
        '7:00 AM': 'Town - between sewer and beach',
        '10:30 AM': '1 Willow Lane - living room',
        '12:00 PM': 'Pierre\'s General Store - altar room',
        '5:00 PM': 'Stardrop Saloon',
        '11:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      rainy: {
        '7:00 AM': '1 Willow Lane - living room',
        '10:30 AM': '1 Willow Lane - living room',
        '5:00 PM': '1 Willow Lane - entryway',
        '11:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      notes: 'Appears in Year 2. Visits Saloon on Fridays and Saturdays. Goes to Pierre\'s altar on Sundays. May visit Beach Resort. Never visits Resort on festival days.'
    },
    portraitUrl: 'assets/portraits/Kent.png'
  },
  {
    id: 'krobus',
    name: 'Krobus',
    gender: 'male',
    birthday: { season: 'Winter', day: 1 },
    description: 'Krobus is a shadow person who lives in the sewers. He is friendly despite his monstrous appearance and can become your roommate instead of a spouse.',
    marriageable: false,
    location: 'The Sewers',
    lovedGifts: [
      'Diamond',
      'Iridium Bar',
      'Pumpkin',
      'Void Egg',
      'Void Mayonnaise',
      'Wild Horseradish',
    ],
    likedGifts: [
      'Gold Bar',
      'Quartz',
      'Seafoam Pudding',
      'Strange Bun',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Life Elixir',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Salmonberry',
      'Snow Yam',
      'Winter Root',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Always in the Sewers, never leaves',
      default: {
        '6:00 AM': 'The Sewers - shop area (never moves)'
      },
      notes: 'Krobus remains in the Sewers at all times. Can become your roommate, in which case he stays mostly indoors at the farmhouse, cautiously venturing outside on occasion. Remains silent on Fridays out of respect for Yoba.'
    },
    portraitUrl: 'assets/portraits/Krobus.png'
  },
  {
    id: 'leo',
    name: 'Leo',
    gender: 'male',
    birthday: { season: 'Summer', day: 26 },
    description: 'Leo is a young boy who lives on Ginger Island. He was raised by parrots after his parents disappeared. He moves to the Valley after you help him.',
    marriageable: false,
    location: 'Ginger Island / The Mountains (after moving)',
    lovedGifts: [
      'Duck Feather',
      'Mango',
      'Ostrich Egg',
      'Parrot Egg',
      'Poi',
    ],
    likedGifts: [
      'Dragon Tooth',
      'Mango Sticky Rice',
      'Nautilus Shell',
      'Quartz',
      'Sea Urchin',
      'Spice Berry',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Leek',
      'Life Elixir',
      'Magma Cap',
      'Pickles',
      'Purple Mushroom',
      'Salmonberry',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'Beer',
      'Holly',
      'Hops',
      'Mead',
      'Pale Ale',
      'Piña Colada',
      'Triple Shot Espresso',
      'Wine',
    ],
    schedule: {
      general: 'Lives on Ginger Island initially, moves to treehouse after 6 hearts',
      default: {
        '9:00 AM': 'Ginger Island - inside hut (before moving)',
        '10:30 AM': 'Ginger Island - outside hut entrance',
        '12:00 PM': 'Ginger Island - docks at Island South',
        '3:00 PM': 'Ginger Island - Island North near volcano',
        '8:00 PM': 'Ginger Island - hut (bed)'
      },
      tuesday: {
        '10:30 AM': 'Ginger Island - dock on Island South',
        '1:30 PM': 'Ginger Island - jungle outside hut',
        '5:00 PM': 'Ginger Island - Island North near Island Trader',
        '8:00 PM': 'Ginger Island - hut (bed)'
      },
      sunday: {
        '9:30 AM': 'Ginger Island - Gem Bird Shrine',
        '2:00 PM': 'Ginger Island - outside hut entrance',
        '5:00 PM': 'Ginger Island - inside hut',
        '8:00 PM': 'Ginger Island - hut (bed)'
      },
      rainy: {
        '9:00 AM': 'Ginger Island - inside hut',
        '8:00 PM': 'Ginger Island - hut (bed)'
      },
      notes: 'After reaching 6 hearts, moves to treehouse in The Mountains. Continues visiting Ginger Island on Mondays and Sundays. Attends Penny\'s lessons with Jas and Vincent. Visits Linus\' tent on rainy days.'
    },
    portraitUrl: 'assets/portraits/Leo.png'
  },
  {
    id: 'lewis',
    name: 'Lewis',
    gender: 'male',
    birthday: { season: 'Spring', day: 7 },
    description: 'Lewis is the mayor of Pelican Town. He\'s been mayor for over 20 years and has a secret relationship with Marnie.',
    marriageable: false,
    location: 'Mayor\'s Manor',
    lovedGifts: [
      'Autumn\'s Bounty',
      'Glazed Yams',
      'Green Tea',
      'Hot Pepper',
      'Vegetable Medley',
    ],
    likedGifts: [
      'Blueberry',
      'Cactus Fruit',
      'Coconut',
    ],
    dislikedGifts: [
      'Salmonberry',
      'Wild Horseradish',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Mayor duties, gardens at Manor, visits townspeople',
      default: {
        '8:30 AM': 'Mayor\'s Manor - kitchen',
        '10:00 AM': 'Mayor\'s Manor - exits Manor',
        '10:10 AM': 'Mayor\'s Manor - gardening in front',
        '11:40 AM': 'Town - heads to town square',
        '12:30 PM': 'Town - stands near Clinic',
        '2:00 PM': 'Town - stands at Pierre\'s notice board',
        '4:00 PM': 'Mayor\'s Manor - returns home',
        '4:30 PM': 'Mayor\'s Manor - arrives home',
        '10:00 PM': 'Mayor\'s Manor - bedroom (bed)'
      },
      tuesday: {
        '8:30 AM': 'Mayor\'s Manor - kitchen',
        '10:10 AM': 'Mayor\'s Manor - gardening',
        '12:00 PM': 'Pierre\'s General Store',
        '4:00 PM': 'Mayor\'s Manor - home',
        '10:00 PM': 'Mayor\'s Manor - bedroom (bed)'
      },
      friday: {
        '8:30 AM': 'Mayor\'s Manor - kitchen',
        '10:10 AM': 'Mayor\'s Manor - gardening',
        '2:00 PM': 'Stardrop Saloon',
        '10:00 PM': 'Mayor\'s Manor - bedroom (bed)'
      },
      rainy: {
        '8:30 AM': 'Mayor\'s Manor - kitchen',
        '2:00 PM': 'Stardrop Saloon',
        '10:00 PM': 'Mayor\'s Manor - bedroom (bed)'
      },
      notes: 'Visits different shops on specific dates (Fish Shop, Marnie\'s Ranch, Blacksmith, Museum, Carpenter\'s Shop). Goes to Saloon on rainy days and Fridays. Secret relationship with Marnie.'
    },
    portraitUrl: 'assets/portraits/Lewis.png'
  },
  {
    id: 'linus',
    name: 'Linus',
    gender: 'male',
    birthday: { season: 'Winter', day: 3 },
    description: 'Linus is a homeless man who lives in a tent in the mountains. He chooses to live this way and is happy with his simple lifestyle close to nature.',
    marriageable: false,
    location: 'The Mountains (Tent)',
    lovedGifts: [
      'Blueberry Tart',
      'Cactus Fruit',
      'Coconut',
      'Dish O\' The Sea',
    ],
    likedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Snow Yam',
      'Spring Onion',
      'Wild Horseradish',
      'Winter Root',
    ],
    dislikedGifts: [
      'Foraged Minerals',
      'Gems (except Diamond and Prismatic Shard)',
      'Treasure Chest',
    ],
    hatedGifts: [
      'All Cooking (except Blueberry Tart, Dish O\' The Sea, Trout Soup, Yam)',
      'Holly',
    ],
    schedule: {
      general: 'Lives in tent in The Mountains, forages and explores',
      default: {
        '6:00 AM': 'The Mountains - inside tent',
        '6:30 AM': 'The Mountains - behind bush west of tent',
        '7:00 AM': 'The Mountains - west of campfire',
        '9:30 AM': 'The Mountains - west side of lake',
        '2:00 PM': 'The Mountains - back to campfire',
        '7:00 PM': 'The Mountains - tent',
        '11:00 PM': 'The Mountains - tent (bed)'
      },
      summer: {
        '6:00 AM': 'The Mountains - inside tent',
        '6:30 AM': 'The Mountains - cliff overlooking lake',
        '9:40 AM': 'The Mountains - south of fence, west of lake',
        '1:00 PM': 'The Mountains - further south, west of lake',
        '4:00 PM': 'The Mountains - west of campfire',
        '8:00 PM': 'The Mountains - behind bush west of tent',
        '8:20 PM': 'The Mountains - tent (bed)'
      },
      fall: {
        '6:00 AM': 'The Mountains - inside tent',
        '7:00 AM': 'The Mountains - behind bush west of tent',
        '7:40 AM': 'The Mountains - west of campfire',
        '9:00 AM': 'Spa',
        '2:00 PM': 'The Mountains - west side of lake',
        '6:00 PM': 'The Mountains - tent (bed)'
      },
      winter: {
        '6:00 AM': 'The Mountains - inside tent',
        '11:00 AM': 'The Mountains - west of campfire',
        '2:00 PM': 'Spa',
        '6:00 PM': 'The Mountains - tent (bed)'
      },
      notes: 'Visits Spa in Fall and Winter. Never visits Ginger Island Beach Resort. Has unique schedules for various festivals. Lives a simple life close to nature.'
    },
    portraitUrl: 'assets/portraits/Linus.png'
  },
  {
    id: 'marnie',
    name: 'Marnie',
    gender: 'female',
    birthday: { season: 'Fall', day: 18 },
    description: 'Marnie runs the ranch and sells animals and animal supplies. She is Shane\'s aunt and Jas\'s guardian. She has a secret relationship with Mayor Lewis.',
    marriageable: false,
    location: 'Marnie\'s Ranch',
    lovedGifts: [
      'Diamond',
      'Farmer\'s Lunch',
      'Pink Cake',
      'Pumpkin Pie',
    ],
    likedGifts: [
      'Stardew Valley Almanac',
      'Quartz',
      'All Eggs (except Void Egg)',
      'All Milk',
    ],
    dislikedGifts: [
      'Salmonberry',
      'Seaweed',
      'Wild Horseradish',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Runs ranch shop, visits town',
      default: {
        '6:00 AM': 'Marnie\'s Ranch - her room',
        '9:00 AM': 'Marnie\'s Ranch - behind counter',
        '4:00 PM': 'Marnie\'s Ranch - walks to her room',
        '5:00 PM': 'Stardrop Saloon',
        '11:00 PM': 'Marnie\'s Ranch - home (bed)'
      },
      monday: {
        '6:00 AM': 'Marnie\'s Ranch - her room',
        '8:10 AM': 'Pierre\'s General Store',
        '12:00 PM': 'Marnie\'s Ranch - home',
        '1:30 PM': 'Marnie\'s Ranch - kitchen',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      tuesday: {
        '6:00 AM': 'Marnie\'s Ranch - her room',
        '10:00 AM': 'Pierre\'s General Store',
        '12:00 PM': 'Pierre\'s General Store - aerobics class',
        '4:00 PM': 'Pierre\'s General Store - chatting',
        '6:10 PM': 'Marnie\'s Ranch - home',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      rainy: {
        '6:00 AM': 'Marnie\'s Ranch - her room',
        '9:00 AM': 'Marnie\'s Ranch - kitchen',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      notes: 'Shop open 9am-4pm, closed Mondays and Tuesdays. Attends aerobics on Tuesdays. Visits Saloon most evenings. Secret relationship with Mayor Lewis. May visit Beach Resort on closed days.'
    },
    portraitUrl: 'assets/portraits/Marnie.png'
  },
  {
    id: 'pam',
    name: 'Pam',
    gender: 'female',
    birthday: { season: 'Spring', day: 18 },
    description: 'Pam is Penny\'s mother and the bus driver. She struggles with alcoholism but loves her daughter. She drives the bus to Calico Desert once repaired.',
    marriageable: false,
    location: 'Trailer (near 2 Willow Lane)',
    lovedGifts: [
      'Beer',
      'Cactus Fruit',
      'Glazed Yams',
      'Mead',
      'Pale Ale',
      'Parsnip',
      'Parsnip Soup',
      'Piña Colada',
    ],
    likedGifts: [
      'Daffodil',
      'All Universal Likes',
      'All Fruits (except Cactus Fruit)',
      'All Milk',
    ],
    dislikedGifts: [
      'Quartz',
      'Wild Horseradish',
      'All Universal Dislikes (except Fish)',
      'All Eggs',
    ],
    hatedGifts: [
      'Holly',
      'Octopus',
      'Squid',
    ],
    schedule: {
      general: 'Bus driver once service restored, frequents Saloon',
      default: {
        '8:00 AM': 'Trailer - lounging on couch',
        '8:30 AM': 'Bus Stop - drives bus (after service restored)',
        '10:00 AM': 'Bus Stop - at bus stop',
        '5:00 PM': 'Stardrop Saloon',
        '12:00 AM': 'Trailer - home (bed)'
      },
      notes: 'Before bus service: goes to JojaMart at 12pm instead of bus stop. Annual clinic checkup on Spring 25. May visit Beach Resort. Never visits Resort on Fall 15, festivals, or clinic day.'
    },
    portraitUrl: 'assets/portraits/Pam.png'
  },
  {
    id: 'pierre',
    name: 'Pierre',
    gender: 'male',
    birthday: { season: 'Spring', day: 26 },
    description: 'Pierre owns and operates Pierre\'s General Store. He is Caroline\'s husband and Abigail\'s father, though he sometimes worries she isn\'t his.',
    marriageable: false,
    location: 'Pierre\'s General Store',
    lovedGifts: [
      'Fried Calamari',
      'Prism Shard',
      'Rabbit\'s Foot',
    ],
    likedGifts: [
      'Daffodil',
      'Dandelion',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Salmonberry',
      'Purple Mushroom',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
      'Corn',
      'Garlic',
      'Parsnip Soup',
      'Tortilla',
    ],
    hatedGifts: [
      'All Milk',
      'Holly',
      'Tortilla',
    ],
    schedule: {
      general: 'Operates General Store',
      default: {
        '6:00 AM': 'Pierre\'s General Store - behind counter',
        '7:00 AM': 'Pierre\'s General Store - in store aisles',
        '8:30 AM': 'Pierre\'s General Store - behind counter',
        '5:00 PM': 'Pierre\'s General Store - in aisles',
        '7:00 PM': 'Pierre\'s General Store - kitchen',
        '9:00 PM': 'Pierre\'s General Store - bedroom by bookcase',
        '11:00 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      friday: {
        '6:00 AM': 'Pierre\'s General Store - behind counter',
        '5:00 PM': 'Stardrop Saloon',
        '10:50 PM': 'Pierre\'s General Store - bedroom (bed)'
      },
      notes: 'Store open 9am-5pm daily. Closed Wednesdays (before Community Center restoration). After Community Center restoration, open every day. Goes to Saloon on Fridays. May visit Beach Resort.'
    },
    portraitUrl: 'assets/portraits/Pierre.png'
  },
  {
    id: 'robin',
    name: 'Robin',
    gender: 'female',
    birthday: { season: 'Fall', day: 21 },
    description: 'Robin is the town carpenter. She can build and upgrade farm buildings. She is Demetrius\'s wife, Maru\'s mother, and Sebastian\'s mother.',
    marriageable: false,
    location: '24 Mountain Road (Carpenter\'s Shop)',
    lovedGifts: [
      'Goat Cheese',
      'Peach',
      'Spaghetti',
    ],
    likedGifts: [
      'Hardwood',
      'Quartz',
      'Woodcutter\'s Weekly',
      'All Universal Likes',
      'All Fruits (except Peach)',
      'All Milk',
    ],
    dislikedGifts: [
      'Wild Horseradish',
      'All Universal Dislikes (except Hardwood)',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Works at Carpenter\'s Shop',
      default: {
        '6:00 AM': '24 Mountain Road - bedroom',
        '8:00 AM': '24 Mountain Road - at counter in shop',
        '5:00 PM': 'The Mountain - outside near house',
        '7:30 PM': '24 Mountain Road - bedroom',
        '9:00 PM': '24 Mountain Road - bedroom (bed)'
      },
      tuesday: {
        '6:00 AM': '24 Mountain Road - bedroom',
        '9:30 AM': 'Pierre\'s General Store',
        '1:00 PM': 'Pierre\'s General Store - aerobics class',
        '4:00 PM': 'Pierre\'s General Store - chatting with friends',
        '6:00 PM': '24 Mountain Road - home',
        '9:00 PM': '24 Mountain Road - bedroom (bed)'
      },
      friday: {
        '6:00 AM': '24 Mountain Road - bedroom',
        '8:00 AM': '24 Mountain Road - shop counter',
        '4:00 PM': 'Stardrop Saloon',
        '7:20 PM': 'Stardrop Saloon - dancing with Demetrius',
        '9:00 PM': '24 Mountain Road - bedroom (bed)'
      },
      rainy: {
        '6:00 AM': '24 Mountain Road - bedroom',
        '8:00 AM': '24 Mountain Road - shop counter',
        '5:00 PM': '24 Mountain Road - kitchen',
        '7:30 PM': '24 Mountain Road - bedroom',
        '9:00 PM': '24 Mountain Road - bedroom (bed)'
      },
      notes: 'Shop closed on Tuesdays. Attends aerobics on Tuesdays. Goes to Saloon on Fridays. Won\'t leave home during construction projects. May visit Beach Resort on Tuesdays.'
    },
    portraitUrl: 'assets/portraits/Robin.png'
  },
  {
    id: 'sandy',
    name: 'Sandy',
    gender: 'female',
    birthday: { season: 'Fall', day: 15 },
    description: 'Sandy runs the Oasis shop in Calico Desert. She is Emily\'s friend and sells rare seeds and items from the desert.',
    marriageable: false,
    location: 'Oasis (Calico Desert)',
    lovedGifts: [
      'Crocus',
      'Daffodil',
      'Sweet Pea',
    ],
    likedGifts: [
      'Goat Milk',
      'Large Goat Milk',
      'Quartz',
      'Wool',
    ],
    dislikedGifts: [
      'All Universal Dislikes',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Always at the Oasis in Calico Desert',
      default: {
        '9:00 AM': 'Oasis - behind counter (all day)'
      },
      notes: 'Never leaves Oasis except on special occasions like her birthday (Fall 15) when she explores the desert with Emily. Closes store 11:50 PM to 9:00 AM. Does not visit Beach Resort.'
    },
    portraitUrl: 'assets/portraits/Sandy.png'
  },
  {
    id: 'willy',
    name: 'Willy',
    gender: 'male',
    birthday: { season: 'Summer', day: 24 },
    description: 'Willy is the town fisherman who runs the Fish Shop. He sells fishing supplies and buys your fish. He loves the ocean and fishing.',
    marriageable: false,
    location: 'Fish Shop (The Beach)',
    lovedGifts: [
      'Catfish',
      'Diamond',
      'Gold Bar',
      'Iridium Bar',
      'Mead',
      'Octopus',
      'Pumpkin',
      'Sea Cucumber',
      'Sturgeon',
    ],
    likedGifts: [
      'Bait And Bobber',
      'Baked Fish',
      'Carp Surprise',
      'Chowder',
      'Crab Cakes',
      'Crispy Bass',
      'Escargot',
      'Fish Stew',
      'Fish Taco',
      'Fried Calamari',
      'Fried Eel',
      'Lingcod',
      'Lobster Bisque',
      'Quartz',
      'Salmon Dinner',
      'Seafoam Pudding',
      'Tiger Trout',
      'Trout Soup',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Life Elixir',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Salmonberry',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Fisherman, runs Fish Shop',
      default: {
        '6:10 AM': 'The Beach - fishing outside shop',
        '8:50 AM': 'Fish Shop - returns to shop',
        '9:00 AM': 'Fish Shop - opens shop',
        '5:00 PM': 'The Beach - fishing',
        '10:00 PM': 'Fish Shop - home (bed)'
      },
      saturday: {
        '6:10 AM': 'Cindersap Forest - fishing at river near Leah\'s cottage',
        '2:00 PM': 'Town - river fishing in Pelican Town',
        '7:00 PM': 'Stardrop Saloon',
        '11:00 PM': 'Fish Shop - home (bed)'
      },
      winter: {
        '6:10 AM': 'The Beach - fishing',
        '8:50 AM': 'Fish Shop',
        '5:00 PM': 'Stardrop Saloon (after shop closes)',
        '11:20 PM': 'Fish Shop - home (bed)'
      },
      notes: 'Shop closed on Saturdays in good weather. Visits Saloon in winter evenings and on Saturdays. Never visits Beach Resort. Passionate about fishing.'
    },
    portraitUrl: 'assets/portraits/Willy.png'
  },
  {
    id: 'wizard',
    name: 'Wizard',
    gender: 'male',
    birthday: { season: 'Winter', day: 17 },
    description: 'The Wizard (Rasmodius) lives in the Wizard\'s Tower. He is a powerful mage who can help you with various magical needs, including changing your appearance.',
    marriageable: false,
    location: 'Wizard\'s Tower',
    lovedGifts: [
      'Purple Mushroom',
      'Solar Essence',
      'Super Cucumber',
      'Void Essence',
    ],
    likedGifts: [
      'Iridium Bar',
      'Quartz',
      'All Geode Minerals',
      'All Trinkets',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Daffodil',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Salmonberry',
      'Slime',
      'Snow Yam',
      'Wild Horseradish',
      'Winter Root',
      'All Eggs',
      'All Milk',
    ],
    hatedGifts: [
      'Holly',
    ],
    schedule: {
      general: 'Always in Wizard\'s Tower, never leaves',
      default: {
        '6:00 AM': 'Wizard\'s Tower - accessible 6am-11pm (never moves)'
      },
      notes: 'The Wizard never leaves his tower except for certain festival days. After unlocking Witch\'s Hut, can be found in tower after 11pm using warp spot. Never visits Beach Resort. Communes with elementals on rainy days.'
    },
    portraitUrl: 'assets/portraits/Wizard.png'
  },

  // Children
  {
    id: 'jas',
    name: 'Jas',
    gender: 'female',
    birthday: { season: 'Summer', day: 4 },
    description: 'Jas is Shane\'s goddaughter who lives with him and Marnie at the ranch. Her parents passed away. She is best friends with Vincent.',
    marriageable: false,
    location: 'Marnie\'s Ranch',
    lovedGifts: [
      'Fairy Rose',
      'Pink Cake',
      'Plum Pudding',
    ],
    likedGifts: [
      'Coconut',
      'Daffodil',
      'All Universal Likes (except Piña Colada, Triple Shot Espresso, Vegetables, and Artisan Goods other than Honey, Jelly, & Oil)',
      'All Milk',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Quartz',
      'Snow Yam',
      'Winter Root',
      'All Eggs',
      'All Fruits (except Coconut and Fruit Tree Fruit)',
      'All Vegetables (except Hops and Wheat)',
    ],
    hatedGifts: [
      'Beer',
      'Holly',
      'Hops',
      'Mead',
      'Pale Ale',
      'Piña Colada',
      'Wine',
    ],
    schedule: {
      general: 'Lives at Marnie\'s Ranch, plays outside',
      default: {
        '9:00 AM': 'Marnie\'s Ranch - bedroom',
        '11:00 AM': 'Marnie\'s Ranch - outside under large tree jump roping',
        '3:00 PM': 'Marnie\'s Ranch - reading in shop entryway',
        '7:00 PM': 'Marnie\'s Ranch - bedroom',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      summer: {
        '9:00 AM': 'Marnie\'s Ranch - bedroom',
        '11:00 AM': 'Marnie\'s Ranch - outside looking at cow pen',
        '1:20 PM': 'The Beach - jump roping',
        '4:00 PM': 'Marnie\'s Ranch - reading in entryway',
        '7:00 PM': 'Marnie\'s Ranch - bedroom',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      tuesday: {
        '9:00 AM': 'Museum - tutoring by Penny',
        '2:00 PM': 'Town - ice cream stand with Vincent',
        '5:50 PM': 'Marnie\'s Ranch - home',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      wednesday: {
        '9:00 AM': 'Museum - tutoring by Penny',
        '2:00 PM': 'Town - ice cream stand with Vincent',
        '5:50 PM': 'Marnie\'s Ranch - home',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      friday: {
        '9:00 AM': 'Museum - tutoring by Penny',
        '2:00 PM': 'Town - ice cream stand with Vincent',
        '5:50 PM': 'Marnie\'s Ranch - home',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': 'Marnie\'s Ranch - bedroom',
        '11:00 AM': 'Marnie\'s Ranch - shop entryway',
        '3:00 PM': 'Marnie\'s Ranch - fireplace room reading',
        '9:00 PM': 'Marnie\'s Ranch - bedroom (bed)'
      },
      notes: 'Attends Penny\'s tutoring sessions on Tuesdays, Wednesdays, and Fridays. Goes to beach in summer. Stays indoors on rainy days. May visit Beach Resort with adult supervision.'
    },
    portraitUrl: 'assets/portraits/Jas.png'
  },
  {
    id: 'vincent',
    name: 'Vincent',
    gender: 'male',
    birthday: { season: 'Spring', day: 10 },
    description: 'Vincent is Sam and Kent\'s younger son and Jodi\'s youngest child. He is an imaginative boy who loves to play and is best friends with Jas.',
    marriageable: false,
    location: '1 Willow Lane',
    lovedGifts: [
      'Cranberry Candy',
      'Ginger Ale',
      'Grape',
      'Pink Cake',
      'Snail',
    ],
    likedGifts: [
      'Coconut',
      'Daffodil',
      'All Universal Likes (except Piña Colada, Triple Shot Espresso, Vegetables, and Artisan Goods other than Honey, Jelly, & Oil)',
      'All Milk',
    ],
    dislikedGifts: [
      'Chanterelle',
      'Common Mushroom',
      'Dandelion',
      'Ginger',
      'Hazelnut',
      'Holly',
      'Leek',
      'Magma Cap',
      'Morel',
      'Purple Mushroom',
      'Quartz',
      'Snow Yam',
      'Winter Root',
      'All Universal Dislikes (except Clay & Frog Egg)',
      'All Eggs',
      'Most Fruits (except Coconut, Grape, & Fruit Tree Fruit)',
      'Most Vegetables (except Hops, Tea Leaves, & Wheat)',
    ],
    hatedGifts: [
      'Beer',
      'Holly',
      'Hops',
      'Mead',
      'Pale Ale',
      'Piña Colada',
      'Wine',
    ],
    schedule: {
      general: 'Imaginative child, loves to play',
      default: {
        '9:00 AM': '1 Willow Lane - wakes up',
        '11:00 AM': '1 Willow Lane - plays inside home',
        '2:00 PM': 'Town - town square',
        '5:00 PM': '1 Willow Lane - home',
        '7:00 PM': '1 Willow Lane - playing inside',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      tuesday: {
        '9:00 AM': 'Museum - tutoring by Penny',
        '2:00 PM': 'Town - ice cream stand with Jas',
        '4:20 PM': '1 Willow Lane - walking home',
        '5:40 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      wednesday: {
        '9:00 AM': 'Museum - tutoring by Penny',
        '2:00 PM': 'Town - ice cream stand with Jas',
        '4:20 PM': '1 Willow Lane - walking home',
        '5:40 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      friday: {
        '9:00 AM': 'Museum - tutoring by Penny',
        '2:00 PM': 'Town - ice cream stand with Jas',
        '4:20 PM': '1 Willow Lane - walking home',
        '5:40 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      saturday: {
        '9:00 AM': '1 Willow Lane - wakes up',
        '11:00 AM': 'Town - near graveyard with Jas and Penny',
        '12:00 PM': 'Town - playground',
        '5:00 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      summer: {
        '9:00 AM': '1 Willow Lane - wakes up',
        '1:40 PM': 'The Beach - with Sam',
        '7:00 PM': '1 Willow Lane - home',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      rainy: {
        '9:00 AM': '1 Willow Lane - stays inside all day',
        '10:00 PM': '1 Willow Lane - bedroom (bed)'
      },
      notes: 'Attends Penny\'s tutoring on Tuesdays, Wednesdays, and Fridays. Goes to beach with Sam in summer. Plays at playground on Saturdays. Stays indoors on rainy days. May visit Beach Resort with adult supervision.'
    },
    portraitUrl: 'assets/portraits/Vincent.png'
  },
];

/**
 * Get villager by ID
 */
export function getVillagerById(id: string): Villager | undefined {
  return VILLAGERS.find(v => v.id === id);
}

/**
 * Get all bachelor villagers
 */
export function getBachelors(): Villager[] {
  return VILLAGERS.filter(v => v.gender === 'male' && v.marriageable);
}

/**
 * Get all bachelorette villagers
 */
export function getBachelorettes(): Villager[] {
  return VILLAGERS.filter(v => v.gender === 'female' && v.marriageable);
}

/**
 * Get all non-marriageable villagers
 */
export function getOtherVillagers(): Villager[] {
  return VILLAGERS.filter(v => !v.marriageable);
}

/**
 * Get total villager count
 */
export function getVillagerCount(): { total: number; marriageable: number; other: number } {
  const marriageable = VILLAGERS.filter(v => v.marriageable).length;
  return {
    total: VILLAGERS.length,
    marriageable,
    other: VILLAGERS.length - marriageable
  };
}

/**
 * Search villagers by name
 */
export function searchVillagers(searchTerm: string): Villager[] {
  const term = searchTerm.toLowerCase();
  return VILLAGERS.filter(v => v.name.toLowerCase().includes(term));
}

/**
 * Get villagers by gift preference
 */
export function getVillagersByGift(giftName: string): Villager[] {
  const gift = giftName.toLowerCase();
  return VILLAGERS.filter(v =>
    v.lovedGifts.some(g => g.toLowerCase().includes(gift)) ||
    v.likedGifts?.some(g => g.toLowerCase().includes(gift))
  );
}
