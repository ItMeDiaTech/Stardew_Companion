/**
 * Stardew Valley Wiki Sprite Downloader
 *
 * Downloads item sprites from the Stardew Valley Wiki
 * Run with: node scripts/download-sprites.js
 *
 * Prerequisites: npm install node-fetch@2
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Base paths
const ASSETS_DIR = path.join(__dirname, '..', 'src', 'renderer', 'assets');

// Wiki image URL pattern - uses MD5 hash of filename
// Format: https://stardewvalleywiki.com/mediawiki/images/X/XX/Filename.png
// where X is first char of MD5, XX is first two chars

const crypto = require('crypto');

function getWikiImageUrl(filename) {
  // Wiki uses MD5 hash of the filename for the path
  const hash = crypto.createHash('md5').update(filename).digest('hex');
  const a = hash[0];
  const ab = hash.substring(0, 2);
  return `https://stardewvalleywiki.com/mediawiki/images/${a}/${ab}/${encodeURIComponent(filename)}`;
}

// Download a single image
async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve(true);
          });
        }).on('error', reject);
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else {
        file.close();
        fs.unlinkSync(destPath);
        resolve(false);
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

// Fish sprites - wiki uses the fish name with spaces replaced by underscores
const FISH_NAMES = [
  'Anchovy', 'Sardine', 'Herring', 'Tuna', 'Red_Snapper', 'Red_Mullet',
  'Halibut', 'Flounder', 'Eel', 'Octopus', 'Squid', 'Sea_Cucumber',
  'Super_Cucumber', 'Pufferfish', 'Albacore', 'Tilapia', 'Smallmouth_Bass',
  'Largemouth_Bass', 'Rainbow_Trout', 'Salmon', 'Walleye', 'Perch', 'Pike',
  'Tiger_Trout', 'Catfish', 'Shad', 'Lingcod', 'Sunfish', 'Bream', 'Carp',
  'Bullhead', 'Chub', 'Sturgeon', 'Midnight_Carp', 'Ghostfish', 'Stonefish',
  'Ice_Pip', 'Lava_Eel', 'Sandfish', 'Scorpion_Carp', 'Woodskip',
  'Blue_Discus', 'Lionfish', 'Stingray', 'Midnight_Squid', 'Spook_Fish',
  'Blobfish', 'Legend', 'Crimsonfish', 'Angler', 'Glacierfish', 'Mutant_Carp',
  'Lobster', 'Crab', 'Shrimp', 'Cockle', 'Mussel', 'Oyster', 'Clam',
  'Crayfish', 'Snail', 'Periwinkle', 'Dorado', 'Void_Salmon', 'Slimejack', 'Goby'
];

// Crop sprites
const CROP_NAMES = [
  'Parsnip', 'Green_Bean', 'Cauliflower', 'Potato', 'Strawberry', 'Tulip',
  'Blue_Jazz', 'Garlic', 'Kale', 'Rhubarb', 'Coffee_Bean', 'Melon', 'Tomato',
  'Blueberry', 'Hot_Pepper', 'Wheat', 'Radish', 'Poppy', 'Summer_Spangle',
  'Hops', 'Corn', 'Red_Cabbage', 'Starfruit', 'Pumpkin', 'Yam', 'Cranberries',
  'Bok_Choy', 'Grape', 'Eggplant', 'Amaranth', 'Artichoke', 'Fairy_Rose',
  'Sunflower', 'Beet', 'Ancient_Fruit', 'Sweet_Gem_Berry', 'Cactus_Fruit',
  'Pineapple', 'Taro_Root'
];

// Mineral sprites
const MINERAL_NAMES = [
  'Quartz', 'Earth_Crystal', 'Frozen_Tear', 'Fire_Quartz', 'Emerald',
  'Aquamarine', 'Ruby', 'Amethyst', 'Topaz', 'Jade', 'Diamond', 'Prismatic_Shard',
  'Tigerseye', 'Opal', 'Fire_Opal', 'Alamite', 'Bixite', 'Baryte', 'Aerinite',
  'Calcite', 'Dolomite', 'Esperite', 'Fluorapatite', 'Geminite', 'Helvite',
  'Jamborite', 'Jagoite', 'Kyanite', 'Lunarite', 'Malachite', 'Neptunite',
  'Lemon_Stone', 'Nekoite', 'Orpiment', 'Petrified_Slime', 'Thunder_Egg',
  'Pyrite', 'Ocean_Stone', 'Ghost_Crystal', 'Jasper', 'Celestine', 'Marble',
  'Sandstone', 'Granite', 'Basalt', 'Limestone', 'Soapstone', 'Hematite',
  'Mudstone', 'Obsidian', 'Slate', 'Fairy_Stone', 'Star_Shards'
];

// Artifact sprites
const ARTIFACT_NAMES = [
  'Dwarf_Scroll_I', 'Dwarf_Scroll_II', 'Dwarf_Scroll_III', 'Dwarf_Scroll_IV',
  'Prehistoric_Scapula', 'Prehistoric_Tibia', 'Prehistoric_Skull',
  'Prehistoric_Rib', 'Prehistoric_Vertebra', 'Skeletal_Hand', 'Skeletal_Tail',
  'Bone_Flute', 'Nautilus_Fossil', 'Amphibian_Fossil', 'Palm_Fossil',
  'Ancient_Doll', 'Ancient_Drum', 'Ancient_Seed', 'Ancient_Sword',
  'Chipped_Amphora', 'Chewing_Stick', 'Ornamental_Fan', 'Prehistoric_Tool',
  'Prehistoric_Handaxe', 'Arrowhead', 'Dwarvish_Helm', 'Dwarf_Gadget',
  'Dried_Starfish', 'Anchor', 'Glass_Shards', 'Trilobite', 'Strange_Doll_(green)',
  'Strange_Doll_(yellow)', 'Dinosaur_Egg', 'Rare_Disc', 'Elvish_Jewelry',
  'Rusty_Spoon', 'Rusty_Spur', 'Rusty_Cog', 'Chicken_Statue', 'Golden_Mask',
  'Golden_Relic'
];

// Forage sprites
const FORAGE_NAMES = [
  'Wild_Horseradish', 'Daffodil', 'Leek', 'Dandelion', 'Morel',
  'Common_Mushroom', 'Spring_Onion', 'Spice_Berry', 'Sweet_Pea',
  'Red_Mushroom', 'Fiddlehead_Fern', 'Wild_Plum', 'Hazelnut',
  'Blackberry', 'Chanterelle', 'Crocus', 'Holly', 'Winter_Root',
  'Crystal_Fruit', 'Snow_Yam', 'Cave_Carrot', 'Coconut', 'Cactus_Fruit',
  'Purple_Mushroom', 'Magma_Cap', 'Ginger', 'Salmonberry',
  'Nautilus_Shell', 'Coral', 'Sea_Urchin', 'Rainbow_Shell'
];

// Boots sprites
const BOOTS_NAMES = [
  'Sneakers', 'Rubber_Boots', 'Leather_Boots', 'Work_Boots', 'Combat_Boots',
  'Tundra_Boots', 'Thermal_Boots', 'Leprechaun_Shoes', 'Cowboy_Boots',
  'Dark_Boots', 'Firewalker_Boots', 'Genie_Shoes', 'Space_Boots',
  'Crystal_Shoes', "Emily's_Magic_Boots", 'Cinderclown_Shoes',
  'Mermaid_Boots', 'Dragonscale_Boots'
];

// Weapon sprites
const WEAPON_NAMES = [
  // Swords
  'Rusty_Sword', 'Wooden_Blade', 'Steel_Smallsword', 'Silver_Saber',
  "Pirate's_Sword", 'Forest_Sword', 'Cutlass', 'Iron_Edge', 'Bone_Sword',
  'Claymore', 'Insect_Head', "Templar's_Blade", 'Holy_Blade',
  'Yeti_Tooth', 'Ossified_Blade', 'Steel_Falchion', 'Tempered_Broadsword',
  'Dark_Sword', 'Obsidian_Edge', "Neptune's_Glaive", 'Lava_Katana',
  'Galaxy_Sword', 'Dwarf_Sword', 'Dragontooth_Cutlass', 'Infinity_Blade',
  // Daggers
  'Carving_Knife', 'Iron_Dirk', 'Wind_Spire', 'Elf_Blade', 'Crystal_Dagger',
  "Burglar's_Shank", 'Broken_Trident', 'Shadow_Dagger', 'Wicked_Kris',
  'Iridium_Needle', 'Galaxy_Dagger', 'Dwarf_Dagger', 'Dragontooth_Shiv', 'Infinity_Dagger',
  // Clubs
  'Femur', 'Wood_Club', 'Wood_Mallet', 'Lead_Rod', 'Kudgel', 'The_Slammer',
  'Galaxy_Hammer', 'Dwarf_Hammer', 'Dragontooth_Club', 'Infinity_Gavel',
  // Slingshots
  'Slingshot', 'Master_Slingshot'
];

// Ring sprites
const RING_NAMES = [
  'Small_Glow_Ring', 'Glow_Ring', 'Small_Magnet_Ring', 'Magnet_Ring',
  'Slime_Charmer_Ring', 'Warrior_Ring', 'Vampire_Ring', 'Savage_Ring',
  'Ring_of_Yoba', 'Sturdy_Ring', "Burglar's_Ring", 'Iridium_Band',
  'Jukebox_Ring', 'Crabshell_Ring', 'Napalm_Ring', 'Immunity_Band',
  'Glowstone_Ring', 'Phoenix_Ring', 'Lucky_Ring', 'Wedding_Ring',
  'Hot_Java_Ring', 'Ruby_Ring', 'Aquamarine_Ring', 'Jade_Ring',
  'Emerald_Ring', 'Topaz_Ring', 'Amethyst_Ring'
];

// Resource sprites
const RESOURCE_NAMES = [
  'Wood', 'Stone', 'Hardwood', 'Fiber', 'Sap', 'Clay', 'Coal',
  'Copper_Ore', 'Copper_Bar', 'Iron_Ore', 'Iron_Bar',
  'Gold_Ore', 'Gold_Bar', 'Iridium_Ore', 'Iridium_Bar',
  'Solar_Essence', 'Void_Essence', 'Slime', 'Bat_Wing',
  'Bug_Meat', 'Bone_Fragment', 'Battery_Pack'
];

// Artisan goods sprites
const ARTISAN_NAMES = [
  'Maple_Syrup', 'Oak_Resin', 'Pine_Tar', 'Mayonnaise',
  'Duck_Mayonnaise', 'Void_Mayonnaise', 'Cheese', 'Goat_Cheese',
  'Cloth', 'Truffle_Oil', 'Wine', 'Juice', 'Pale_Ale',
  'Beer', 'Mead', 'Honey', 'Jelly', 'Pickles'
];

// Animal product sprites
const ANIMAL_PRODUCT_NAMES = [
  'Egg', 'Large_Egg', 'Brown_Egg', 'Large_Brown_Egg',
  'Milk', 'Large_Milk', 'Goat_Milk', 'Large_Goat_Milk',
  'Wool', 'Duck_Egg', 'Duck_Feather', "Rabbit's_Foot",
  'Dinosaur_Egg', 'Void_Egg', 'Truffle'
];

// Cooking sprites
const COOKING_NAMES = [
  'Fried_Egg', 'Omelet', 'Salad', 'Cheese_Cauliflower', 'Baked_Fish',
  'Parsnip_Soup', 'Vegetable_Medley', 'Complete_Breakfast', 'Fried_Calamari',
  'Strange_Bun', 'Lucky_Lunch', 'Fried_Mushroom', 'Pizza', 'Bean_Hotpot',
  'Glazed_Yams', 'Carp_Surprise', 'Hashbrowns', 'Pancakes', 'Salmon_Dinner',
  'Fish_Taco', 'Crispy_Bass', 'Pepper_Poppers', 'Bread', 'Tom_Kha_Soup',
  'Trout_Soup', 'Chocolate_Cake', 'Pink_Cake', 'Rhubarb_Pie', 'Cookie',
  'Spaghetti', 'Fried_Eel', 'Spicy_Eel', 'Sashimi', 'Maki_Roll',
  'Tortilla', 'Red_Plate', 'Eggplant_Parmesan', 'Rice_Pudding',
  'Ice_Cream', 'Blueberry_Tart', "Autumn's_Bounty", 'Pumpkin_Soup',
  'Super_Meal', 'Cranberry_Sauce', 'Stuffing', "Farmer's_Lunch",
  'Survival_Burger', "Dish_O'_The_Sea", "Miner's_Treat", 'Roots_Platter',
  'Triple_Shot_Espresso', 'Seafoam_Pudding', 'Algae_Soup', 'Pale_Broth',
  'Plum_Pudding', 'Artichoke_Dip', 'Stir_Fry', 'Roasted_Hazelnuts',
  'Pumpkin_Pie', 'Radish_Salad', 'Fruit_Salad', 'Blackberry_Cobbler',
  'Cranberry_Candy', 'Bruschetta', 'Coleslaw', 'Fiddlehead_Risotto',
  'Poppyseed_Muffin', 'Chowder', 'Fish_Stew', 'Escargot', 'Lobster_Bisque',
  'Maple_Bar', 'Crab_Cakes', 'Shrimp_Cocktail', 'Ginger_Ale',
  'Banana_Pudding', 'Mango_Sticky_Rice', 'Poi', 'Tropical_Curry'
];

// Seed sprites
const SEED_NAMES = [
  'Parsnip_Seeds', 'Bean_Starter', 'Cauliflower_Seeds', 'Potato_Seeds',
  'Tulip_Bulb', 'Kale_Seeds', 'Jazz_Seeds', 'Garlic_Seeds', 'Rice_Shoot',
  'Melon_Seeds', 'Tomato_Seeds', 'Blueberry_Seeds', 'Pepper_Seeds',
  'Wheat_Seeds', 'Radish_Seeds', 'Poppy_Seeds', 'Spangle_Seeds',
  'Hops_Starter', 'Corn_Seeds', 'Sunflower_Seeds', 'Red_Cabbage_Seeds',
  'Starfruit_Seeds', 'Eggplant_Seeds', 'Artichoke_Seeds', 'Pumpkin_Seeds',
  'Bok_Choy_Seeds', 'Yam_Seeds', 'Cranberry_Seeds', 'Beet_Seeds',
  'Fairy_Seeds', 'Amaranth_Seeds', 'Grape_Starter', 'Ancient_Seeds',
  'Rare_Seed', 'Strawberry_Seeds', 'Cactus_Seeds', 'Rhubarb_Seeds',
  'Pineapple_Seeds', 'Taro_Tuber', 'Coffee_Bean'
];

// Geode sprites
const GEODE_NAMES = [
  'Geode', 'Frozen_Geode', 'Magma_Geode', 'Omni_Geode'
];

async function downloadCategory(names, destFolder, prefix = '') {
  const folder = path.join(ASSETS_DIR, destFolder);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  console.log(`\nDownloading ${names.length} sprites to ${destFolder}...`);
  let success = 0;
  let failed = 0;

  for (const name of names) {
    const wikiFilename = `${prefix}${name}.png`;
    const localFilename = name.toLowerCase().replace(/'/g, '').replace(/_/g, '_') + '.png';
    const destPath = path.join(folder, localFilename);

    // Skip if already exists
    if (fs.existsSync(destPath)) {
      console.log(`  [SKIP] ${name} (already exists)`);
      success++;
      continue;
    }

    const url = getWikiImageUrl(wikiFilename);
    try {
      const result = await downloadImage(url, destPath);
      if (result) {
        console.log(`  [OK] ${name}`);
        success++;
      } else {
        console.log(`  [FAIL] ${name} - not found`);
        failed++;
      }
    } catch (err) {
      console.log(`  [ERROR] ${name} - ${err.message}`);
      failed++;
    }

    // Small delay to be nice to the server
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`  Completed: ${success} success, ${failed} failed`);
  return { success, failed };
}

async function main() {
  console.log('='.repeat(50));
  console.log('Stardew Valley Wiki Sprite Downloader');
  console.log('='.repeat(50));
  console.log(`\nAssets directory: ${ASSETS_DIR}`);

  // Ensure base directories exist
  const dirs = [
    'fish', 'crops', 'items/minerals', 'items/artifacts', 'items/forage',
    'items/boots', 'items/weapons', 'items/rings', 'items/resources',
    'items/artisan', 'items/animal-products', 'items/cooking', 'items/seeds', 'items/geodes'
  ];
  for (const dir of dirs) {
    const fullPath = path.join(ASSETS_DIR, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`Created: ${dir}`);
    }
  }

  // Download fish
  await downloadCategory(FISH_NAMES, 'fish');

  // Download crops
  await downloadCategory(CROP_NAMES, 'crops');

  // Download minerals
  await downloadCategory(MINERAL_NAMES, 'items/minerals');

  // Download artifacts
  await downloadCategory(ARTIFACT_NAMES, 'items/artifacts');

  // Download forage
  await downloadCategory(FORAGE_NAMES, 'items/forage');

  // Download boots
  await downloadCategory(BOOTS_NAMES, 'items/boots');

  // Download weapons
  await downloadCategory(WEAPON_NAMES, 'items/weapons');

  // Download rings
  await downloadCategory(RING_NAMES, 'items/rings');

  // Download resources
  await downloadCategory(RESOURCE_NAMES, 'items/resources');

  // Download artisan goods
  await downloadCategory(ARTISAN_NAMES, 'items/artisan');

  // Download animal products
  await downloadCategory(ANIMAL_PRODUCT_NAMES, 'items/animal-products');

  // Download cooking items
  await downloadCategory(COOKING_NAMES, 'items/cooking');

  // Download seeds
  await downloadCategory(SEED_NAMES, 'items/seeds');

  // Download geodes
  await downloadCategory(GEODE_NAMES, 'items/geodes');

  console.log('\n' + '='.repeat(50));
  console.log('Download complete!');
  console.log('='.repeat(50));
  console.log('\nNote: Some items may have different names on the wiki.');
  console.log('Check the wiki directly for items that failed to download.');
}

// Also export a helper to generate icon paths for data files
function generateIconPaths(category, names) {
  return names.map(name => {
    const id = name.toLowerCase().replace(/_/g, '_');
    const path = `./assets/${category}/${id}.png`;
    return { id, name: name.replace(/_/g, ' '), iconPath: path };
  });
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { downloadImage, getWikiImageUrl, generateIconPaths };
