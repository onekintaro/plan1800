export default [
  /**
   * Farmers
   */
  {
    key: "Wood",
    tierId: 1,
    requirement: 0,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Wood",
    needs: ["trees"],
  },
  {
    key: "Timber",
    tierId: 1,
    requirement: 0,
    productionTime: 15,
    type: "Baumaterial",
    provides: "Timber",
    needs: ["Wood"],
  },
  {
    key: "Fish",
    tierId: 1,
    requirement: 50,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Fish",
    needs: ["coastline"],
  },
  {
    key: "Potato",
    tierId: 1,
    requirement: 100,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Potato",
    needs: ["fertility"],
  },
  {
    key: "Schnapps",
    tierId: 1,
    requirement: 100,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Schnapps",
    needs: ["Potato"],
  },
  {
    key: "Wool",
    tierId: 1,
    requirement: 150,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Wool",
    needs: [],
  },
  {
    key: "Work_clothes",
    tierId: 1,
    requirement: 150,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Work_clothes",
    needs: ["Wool"],
  },

  /**
   * Workers
   */
  {
    key: "Clay",
    tierId: 2,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Clay",
    needs: ["deposit"],
  },
  {
    key: "Bricks",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Baumaterial",
    provides: "Bricks",
    needs: ["Clay"],
  },
  {
    key: "Pigs",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Pigs",
    needs: [],
  },
  {
    key: "Sausages",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Sausages",
    needs: ["Pigs"],
  },
  {
    key: "Grain",
    tierId: 2,
    requirement: 150,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Grain",
    needs: ["fertility"],
  },
  {
    key: "Sails",
    tierId: 2,
    requirement: 150,
    productionTime: 30,
    type: "Baumaterial",
    provides: "Sails",
    needs: ["Wool"],
  },
  {
    key: "Flour",
    tierId: 2,
    requirement: 150,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Flour",
    needs: ["Grain"],
  },
  {
    key: "Bread",
    tierId: 2,
    requirement: 150,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Bread",
    needs: ["Flour"],
  },
  {
    key: "Iron",
    tierId: 2,
    requirement: 300,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Iron",
    needs: ["deposit"],
  },
  {
    key: "Charcoal_kiln",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Coal",
    needs: ["trees"],
  },
  {
    key: "Furnace",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Furnace",
    needs: ["Iron", "Coal"],
  },
  {
    key: "Steel_beams",
    tierId: 2,
    requirement: 300,
    productionTime: 45,
    type: "Baumaterial",
    provides: "Steel_beams",
    needs: ["Furnace"],
  },
  {
    key: "Weapons",
    tierId: 2,
    requirement: 300,
    productionTime: 90,
    type: "Baumaterial",
    provides: "Weapons",
    needs: ["Furnace"],
  },
  {
    key: "Tallow",
    tierId: 2,
    requirement: 300,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Tallow",
    needs: ["Pigs"],
  },
  {
    key: "Soap",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Soap",
    needs: ["Tallow"],
  },
  {
    key: "Hops",
    tierId: 2,
    requirement: 500,
    productionTime: 90,
    type: "Landwirtschaftliche Produkte",
    provides: "Hops",
    needs: ["fertility"],
  },
  {
    key: "Malt",
    tierId: 2,
    requirement: 500,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Malt",
    needs: ["Grain"],
  },
  {
    key: "Beer",
    tierId: 2,
    requirement: 500,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Beer",
    needs: ["Malt", "Hops"],
  },

  /**
   * Artisans
   */
  {
    key: "Quartz_sand",
    tierId: 3,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Quartz_sand",
    needs: ["coastline"],
  },
  {
    key: "Glass",
    tierId: 3,
    requirement: 1,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Glass",
    needs: ["Quartz_sand"],
  },
  {
    key: "Windows",
    tierId: 3,
    requirement: 1,
    productionTime: 60,
    type: "Baumaterial",
    provides: "Windows",
    needs: ["Glass", "Wood"],
  },
  {
    key: "Beef",
    tierId: 3,
    requirement: 1,
    productionTime: 120,
    type: "Landwirtschaftliche Produkte",
    provides: "Beef",
    needs: [],
  },
  {
    key: "Red_peppers",
    tierId: 3,
    requirement: 1,
    productionTime: 120,
    type: "Landwirtschaftliche Produkte",
    provides: "Red_peppers",
    needs: ["fertility"],
  },
  {
    key: "Goulash",
    tierId: 3,
    requirement: 1,
    productionTime: 120,
    type: "Zwischenprodukte",
    provides: "Goulash",
    needs: ["Beef", "Red_peppers"],
  },
  {
    key: "Canned_food",
    tierId: 3,
    requirement: 1,
    productionTime: 90,
    type: "Konsumgüter",
    provides: "Canned_food",
    needs: ["Goulash", "Iron"],
  },
  {
    key: "Coal",
    tierId: 3,
    requirement: 250,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Coal",
    needs: ["deposit"],
  },
  {
    key: "Sewing_machines",
    tierId: 3,
    requirement: 250,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Sewing_machines",
    needs: ["Furnace", "Wood"],
  },
  {
    key: "Rum",
    tierId: 3,
    requirement: 500,
    productionTime: Infinity,
    type: "Konsumgüter",
    provides: "Rum",
    needs: ["otherWorld"],
  },
  {
    key: "Cotton_fabric",
    tierId: 3,
    requirement: 900,
    productionTime: Infinity,
    type: "Zwischenprodukte",
    provides: "Cotton_fabric",
    needs: ["otherWorld"],
  },
  {
    key: "Furs",
    tierId: 3,
    requirement: 900,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Furs",
    needs: ["fertility", "trees"],
  },
  {
    key: "Fur_coats",
    tierId: 3,
    requirement: 900,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Fur_coats",
    needs: ["Cotton_fabric", "Furs"],
  },

  /**
   * Engineers
   */
  {
    key: "Cement",
    tierId: 4,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Cement",
    needs: ["deposit"],
  },
  {
    key: "Electricity",
    tierId: 4,
    requirement: 1,
    productionTime: 1/Infinity,
    type: "Konsumgüter",
    provides: "Electricity",
    needs: ["Oil"],
  },
  {
    key: "Reinforced_concrete",
    tierId: 4,
    requirement: 1,
    productionTime: 60,
    type: "Baumaterial",
    provides: "Reinforced_concrete",
    needs: ["Furnace", "Cement"],
  },
  {
    key: "Copper",
    tierId: 4,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Copper",
    needs: ["deposit"],
  },
  {
    key: "Zinc",
    tierId: 4,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Zinc",
    needs: ["deposit"],
  },
  {
    key: "Brass",
    tierId: 4,
    requirement: 1,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Brass",
    needs: ["Copper", "Zinc"],
  },
  {
    key: "Glasses",
    tierId: 4,
    requirement: 1,
    productionTime: 90,
    type: "Konsumgüter",
    provides: "Glasses",
    needs: ["Glass", "Brass"],
  },
  {
    key: "Steam_motors",
    tierId: 4,
    requirement: 500,
    productionTime: 45,
    type: "Baumaterial",
    provides: "Steam_motors",
    needs: ["Furnace", "Brass", "Electricity"],
  },
  {
    key: "Saltpeter",
    tierId: 4,
    requirement: 500,
    productionTime: 120,
    type: "Rohmaterial",//
    provides: "Saltpeter",
    needs: ["coastline", "fertility"],//fertility=nitre_deposit
  },
  {
    key: "Dynamite",
    tierId: 4,
    requirement: 500,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Dynamite",
    needs: ["Tallow", "Saltpeter"],
  },
  {
    key: "Advanced_weapons",
    tierId: 4,
    requirement: 500,
    productionTime: 60,
    type: "Baumaterial",
    provides: "Advanced_weapons",
    needs: ["Dynamite", "Brass", "Electricity"],
  },
  {
    key: "Caoutchouc",
    tierId: 4,
    requirement: 500,
    productionTime: Infinity,
    type: "Landwirtschaftliche Produkte",
    provides: "Caoutchouc",
    needs: ["otherWorld"],
  },
  {
    key: "Penny_farthings",
    tierId: 4,
    requirement: 500,
    productionTime: 15,
    type: "Konsumgüter",
    provides: "Penny_farthings",
    needs: ["Caoutchouc", "Furnace", "Electricity"],
  },
  {
    key: "Gold_ore",
    tierId: 4,
    requirement: 1000,
    productionTime: Infinity,
    type: "Rohmaterial",
    provides: "Gold_ore",
    needs: ["otherWorld"],
  },
  {
    key: "Gold",
    tierId: 4,
    requirement: 1000,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Gold",
    needs: ["Gold_ore", "Coal"],
  },
  {
    key: "Coffee",
    tierId: 4,
    requirement: 1000,
    productionTime: Infinity,
    type: "Konsumgüter",
    provides: "Coffee",
    needs: ["otherWorld"],
  },
  {
    key: "Pocket_watches",
    tierId: 4,
    requirement: 1000,
    productionTime: 45,
    type: "Konsumgüter",
    provides: "Pocket_watches",
    needs: ["Gold", "Glass", "Electricity"],
  },
  {
    key: "Filaments",
    tierId: 4,
    requirement: 1750,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Filaments",
    needs: ["Coal"],
  },
  {
    key: "Light_bulbs",
    tierId: 4,
    requirement: 1750,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Light_bulbs",
    needs: ["Filaments", "Glass"],
  },

  /**
   * Investors
   */
  {
    key: "Grapes",
    tierId: 5,
    requirement: 1,
    productionTime: 120,
    type: "Landwirtschaftliche Produkte",
    provides: "Grapes",
    needs: ["fertility"],
  },
  {
    key: "Champagne",
    tierId: 5,
    requirement: 1,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Champagne",
    needs: ["Grapes", "Glass"],
  },
  {
    key: "Wood_veneers",
    tierId: 5,
    requirement: 750,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Wood_veneers",
    needs: ["Wood"],
  },
  {
    key: "Cigars",
    tierId: 5,
    requirement: 750,
    productionTime: Infinity,
    type: "Konsumgüter",
    provides: "Cigars",
    needs: ["otherWorld"],
  },
  {
    key: "Chocolate",
    tierId: 5,
    requirement: 1750,
    productionTime: Infinity,
    type: "Konsumgüter",
    provides: "Chocolate",
    needs: ["otherWorld"],
  },
  {
    key: "Jewellery",
    tierId: 5,
    requirement: 1750,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Jewellery",
    needs: ["Gold", "Pearl"],
  },
  {
    key: "Gramophones",
    tierId: 5,
    requirement: 3000,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Gramophones",
    needs: ["Wood_veneers", "Brass", "Electricity"],
  },
  {
    key: "Chassis",
    tierId: 5,
    requirement: 5000,
    productionTime: 120,
    type: "Zwischenprodukte",
    provides: "Chassis",
    needs: ["Wood", "Caoutchouc"],
  },
  {
    key: "Steam_carriages",
    tierId: 5,
    requirement: 5000,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Steam_carriages",
    needs: ["Steam_motors", "Chassis", "Electricity"],
  },


  /**
   * Jornaleros
   */
  {
    key: "Wood_6",
    tierId: 6,
    requirement: 0,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Wood",
    needs: ["trees"],
  },
  {
    key: "Timber_6",
    tierId: 6,
    requirement: 0,
    productionTime: 15,
    type: "Baumaterial",
    provides: "Timber",
    needs: ["Wood"],
  },
  {
    key: "Plantains",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Plantains",
    needs: ["fertility"],
  },
  {
    key: "Fish_Oil",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Fish_Oil",
    needs: ["coastline"],
  },
  {
    key: "Fried_plantains",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Fried_plantains",
    needs: ["Plantains", "Fish_Oil"],
  },
  {
    key: "Cotton",
    tierId: 6,
    requirement: 100,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Cotton",
    needs: ["fertility"],
  },
  {
    key: "Cotton_fabric_6",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Cotton_fabric",
    needs: ["Cotton"],
  },
  {
    key: "Sails_6",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Baumaterial",
    provides: "Sails",
    needs: ["Cotton_fabric"],
  },
  {
    key: "Sugar_cane",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Sugar_cane",
    needs: ["fertility"],
  },
  {
    key: "Rum_6",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Rum",
    needs: ["Wood", "Sugar_cane"],
  },
  {
    key: "Alpaca_wool",
    tierId: 6,
    requirement: 200,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Alpaca_wool",
    needs: [],
  },
  {
    key: "Ponchos",
    tierId: 6,
    requirement: 200,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Ponchos",
    needs: ["Alpaca_wool"],
  },
  {
    key: "Caoutchouc_6",
    tierId: 6,
    requirement: 200,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Caoutchouc",
    needs: ["fertility"],
  },
  {
    key: "Pearls_6",
    tierId: 6,
    requirement: 300,
    productionTime: 90,
    type: "Landwirtschaftliche Produkte",//
    provides: "Pearls",
    needs: ["coastline", "fertility"],//fertility=pearl_abundance
  },

  /**
   * Obreros
   */
  {
    key: "Clay_6",
    tierId: 7,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Clay",
    needs: ["deposit"],
  },
  {
    key: "Bricks_6",
    tierId: 7,
    requirement: 1,
    productionTime: 60,
    type: "Baumaterial",
    provides: "Bricks",
    needs: ["Clay"],
  },
  {
    key: "Corn",
    tierId: 7,
    requirement: 1,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Corn",
    needs: ["fertility"],
  },
  {
    key: "Beef_6",
    tierId: 7,
    requirement: 1,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Beef",
    needs: [],
  },
  {
    key: "Tortillas",
    tierId: 7,
    requirement: 1,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Tortillas",
    needs: ["Corn", "Beef"],
  },
  {
    key: "Coffee_beans",
    tierId: 7,
    requirement: 300,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Coffee_beans",
    needs: ["fertility"],
  },
  {
    key: "Coffee_6",
    tierId: 7,
    requirement: 300,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Coffee",
    needs: ["Coffee_beans"],
  },
  {
    key: "Gold_ore_6",
    tierId: 7,
    requirement: 300,
    productionTime: 150,
    type: "Rohmaterial",
    provides: "Gold_ore",
    needs: ["deposit"],
  },
  {
    key: "Felt",
    tierId: 7,
    requirement: 600,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Felt",
    needs: ["Alpaca_wool"],
  },
  {
    key: "Bowler_hats",
    tierId: 7,
    requirement: 600,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Bowler_hats",
    needs: ["Cotton_fabric", "Felt"],
  },
  {
    key: "Beer_6",
    tierId: 7,
    requirement: 600,
    productionTime: Infinity,
    type: "Konsumgüter",
    provides: "Beer",
    needs: ["otherWorld"],
  },
  {
    key: "Tobacco",
    tierId: 7,
    requirement: 1000,
    productionTime: 120,
    type: "Landwirtschaftliche Produkte",
    provides: "Tobacco",
    needs: ["fertility"],
  },
  {
    key: "Cigars_6",
    tierId: 7,
    requirement: 1000,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Cigars",
    needs: ["Wood_veneers", "Tobacco"],
  },
  {
    key: "Wood_veneers_6",
    tierId: 7,
    requirement: 1000,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Wood_veneers",
    needs: ["Wood"],
  },
  {
    key: "Sewing_machines_6",
    tierId: 7,
    requirement: 1000,
    productionTime: Infinity,
    type: "Konsumgüter",
    provides: "Sewing_machines",
    needs: ["otherWorld"],
  },
  {
    key: "Sugar",
    tierId: 7,
    requirement: 1500,// AND (?) 1750 of 5
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Sugar",
    needs: ["Sugar_cane"],
  },
  {
    key: "Cocoa",
    tierId: 7,
    requirement: 1500,// AND (?) 1750 of 5
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Cocoa",
    needs: ["fertility"],
  },
  {
    key: "Chocolate_6",
    tierId: 7,
    requirement: 1500,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Chocolate",
    needs: ["Sugar", "Cocoa"],
  },
]
