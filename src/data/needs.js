export default [
  /**
   * Farmers
   */
  {
    key: "Marketplace",
    tierIDs: [1, 2],
    requirement: 1,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [5, 5],
    income: [0, 0],
    happiness: [0, 0],
  },
  {
    key: "Fish",
    tierIDs: [1, 2],
    requirement: 50,
    consumption_old: [2/800, 2/800],// produces 2t/m and satisfies 800 people
    consumption: [0.0004166667, 0.0008333334], // per residence and second
    influx: [3, 3],
    income: [1, 2],
    happiness: [0, 0],
  },
  {
    key: "Schnapps",
    tierIDs: [1, 2],
    requirement: 100,
    consumption_old: [2/600, 2/600],
    consumption: [0.000555556, 0.001111112],
    influx: [0, 0],
    income: [3, 7],
    happiness: [8, 4],
  },
  {
    key: "Work_clothes",
    tierIDs: [1, 2],
    requirement: 150,
    consumption_old: [2/650, 2/650],
    consumption: [0.000512821, 0.001025642],
    influx: [2, 2],
    income: [3, 7],
    happiness: [0, 0],
  },
  {
    key: "Pub",
    tierIDs: [1, 2],
    requirement: 150,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [0, 0],
    income: [1, 3],
    happiness: [12, 6],
  },

  /**
   * Workers
   */
  {
    key: "Sausages",
    tierIDs: [2, 3],
    requirement: 1,
    consumption_old: [1/1000, 1/750],
    consumption: [0.000333334, 0.000666667],
    influx: [3, 6],
    income: [5, 15],
    happiness: [0, 0],
  },
  {
    key: "Bread",
    tierIDs: [2, 3],
    requirement: 150,
    consumption_old: [1/1100, 1/825],
    consumption: [0.00030303, 0.000606061],
    influx: [3, 6],
    income: [5, 15],
    happiness: [0, 0],
  },
  {
    key: "Church",
    tierIDs: [2, 3],
    requirement: 150,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [0, 0],
    income: [0, 0],
    happiness: [7, 7],
  },
  {
    key: "Soap",
    tierIDs: [2, 3],
    requirement: 300,
    consumption_old: [2/4800, 2/3600],
    consumption: [0.000138889, 0.000277778],
    influx: [2, 4],
    income: [5, 15],
    happiness: [0, 0],
  },
  {
    key: "Beer",
    tierIDs: [2, 3],
    requirement: 500,
    consumption_old: [2/2600, 2/1950],
    consumption: [0.00025641, 0.000512821],
    influx: [0, 0],
    income: [12, 37],
    happiness: [3, 3],
  },
  {
    key: "School",
    tierIDs: [2, 3],
    requirement: 750,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [2, 4],
    income: [0, 0],
    happiness: [0, 0],
  },

  /**
   * Artisans
   */
  {
    key: "Canned_food",
    tierIDs: [3, 4],
    requirement: 1,
    consumption_old: [4/11700, 4/7800],
    consumption: [0.00017094, 0.00034188],
    influx: [4, 12],
    income: [7, 20],
    happiness: [0, 0],
  },
  {
    key: "Sewing_machines",
    tierIDs: [3, 4],
    requirement: 250,
    consumption_old: [4/4200, 4/2800],
    consumption: [0.00047619, 0.000952381],
    influx: [2, 6],
    income: [15, 40],
    happiness: [0, 0],
  },
  {
    key: "Variety_theatre",
    tierIDs: [3, 4],
    requirement: 250,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [0, 0],
    income: [7, 10],
    happiness: [6, 6],
  },
  {
    key: "Rum",
    tierIDs: [3, 4],
    requirement: 500,
    consumption_old: [4/2100, 4/1400],
    consumption: [0.000952381, 0.001904762],
    influx: [0, 0],
    income: [18, 50],
    happiness: [4, 4],
  },
  {
    key: "Fur_coats",
    tierIDs: [3, 4],
    requirement: 900, //1000,
    consumption_old: [2/2250, 2/1500],
    consumption: [0.000444444, 0.000888889],
    influx: [2, 6],
    income: [22, 60],
    happiness: [0, 0],
  },
  {
    key: "University",
    tierIDs: [3, 4],
    requirement: 1500,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [2, 6],
    income: [0, 0],
    happiness: [0, 0],
  },

  /**
   * Engineers
   */
  {
    key: "Glasses",
    tierIDs: [4, 5],
    requirement: 1,
    consumption_old: [2/9000, 2/5625],
    consumption: [0.000148148, 0.000296296],
    influx: [4, 16],
    income: [25, 62],
    happiness: [0, 0],
  },
  {
    key: "Penny_farthings",
    tierIDs: [4, 5],
    requirement: 500,
    consumption_old: [4/6400, 4/4000],
    consumption: [0.000416667, 0.000833333],
    influx: [0, 0],
    income: [35, 87],
    happiness: [5, 4],
  },
  {
    key: "Coffee",
    tierIDs: [4, 5],
    requirement: 1000,
    consumption_old: [2/1700, 2/1062.5],
    consumption: [0.000784314, 0.001568627],
    influx: [2, 8],
    income: [28, 50],
    happiness: [0, 0],
  },
  {
    key: "Pocket_watches",
    tierIDs: [4, 5],
    requirement: 1000,
    consumption_old: [4/20400, 4/12750],
    consumption: [0.000130719, 0.000261438],
    influx: [0, 0],
    income: [45, 112],
    happiness: [3, 3],
  },
  {
    key: "Electricity",
    tierIDs: [4, 5],
    requirement: 1750,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [2, 8],
    income: [0, 0],
    happiness: [0, 0],
  },
  {
    key: "Light_bulbs",
    tierIDs: [4, 5],
    requirement: 1750,
    consumption_old: [4/12800, 4/8000],
    consumption: [0.000208333, 0.000416667],
    influx: [2, 8],
    income: [35, 87],
    happiness: [0, 0],
  },
  {
    key: "Bank",
    tierIDs: [4, 5],
    requirement: 3000,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [0, 0],
    income: [50, 125],
    happiness: [2, 2],
  },

  /**
   * Investors
   */
  {
    key: "Champagne",
    tierIDs: [5],
    requirement: 1,
    consumption_old: [2/4250],
    consumption: [0.000392],
    influx: [2],
    income: [31],
    happiness: [0],
  },
  {
    key: "Cigars",
    tierIDs: [5],
    requirement: 750,
    consumption_old: [4/9000],
    consumption: [0.00037037],
    influx: [2],
    income: [31],
    happiness: [0],
  },
  {
    key: "Chocolate",
    tierIDs: [5],
    requirement: 1750,
    consumption_old: [2/1875],
    consumption: [0.000888889],
    influx: [2],
    income: [31],
    happiness: [0],
  },
  {
    key: "Members_club",
    tierIDs: [5],
    requirement: 750,
    consumption_old: [1/1e10],
    consumption: [0],
    influx: [0],
    income: [31],
    happiness: [5],
  },
  {
    key: "Jewellery",
    tierIDs: [5],
    requirement: 1750,
    consumption_old: [4/9500],
    consumption: [0.000350877],
    influx: [0],
    income: [156],
    happiness: [2],
  },
  {
    key: "Gramophones",
    tierIDs: [5],
    requirement: 3000,
    consumption_old: [4/38000],
    consumption: [0.0000877],
    influx: [0],
    income: [93],
    happiness: [4],
  },
  {
    key: "Steam_carriages",
    tierIDs: [5],
    requirement: 5000,
    consumption_old: [4/30000],
    consumption: [0.000111111],
    influx: [4],
    income: [187],
    happiness: [0],
  },


  /**
   * Jornaleros
   */
  {
    key: "Marketplace",
    tierIDs: [6, 7],
    requirement: 1,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [5, 5],
    income: [0, 0],
    happiness: [0, 0],
  },
  {
    key: "Fried_plantains",
    tierIDs: [6, 7],
    requirement: 50,
    consumption_old: [2/700, 2/700],
    consumption: [0.00047619, 0.000952381],
    influx: [3, 3],
    income: [3, 6],
    happiness: [0, 0],
  },
  {
    key: "Rum",
    tierIDs: [6, 7],
    requirement: 100,
    consumption_old: [4/2800, 4/2800],
    consumption: [0.000238095, 0.000476191],
    influx: [0, 0],
    income: [3, 6],
    happiness: [6, 3],
  },
  {
    key: "Ponchos",
    tierIDs: [6, 7],
    requirement: 200,
    consumption_old: [2/800, 2/800],
    consumption: [0.000416667, 0.000833333],
    influx: [2, 2],
    income: [3, 6],
    happiness: [0, 0],
  },
  {
    key: "Chapel",
    tierIDs: [6, 7],
    requirement: 300,
    consumption_old: [1/1e10, 1/1e10],
    consumption: [0, 0],
    influx: [0, 0],
    income: [0, 0],
    happiness: [14, 7],
  },

  /**
   * Obreros
   */
  {
    key: "Tortillas",
    tierIDs: [7],
    requirement: 1,
    consumption_old: [2/1400],
    consumption: [0.00047619],
    influx: [4],
    income: [2],
    happiness: [0],
  },
  {
    key: "Coffee",
    tierIDs: [7],
    requirement: 300,
    consumption_old: [2/3400],
    consumption: [0.000196079],
    influx: [2],
    income: [2],
    happiness: [0],
  },
  {
    key: "Boxing_arena",
    tierIDs: [7],
    requirement: 300,
    consumption_old: [1/1e10],
    consumption: [0],
    influx: [0],
    income: [2],
    happiness: [4],
  },
  {
    key: "Bowler_hats",
    tierIDs: [7],
    requirement: 600,
    consumption_old: [2/1500],
    consumption: [0.000444444],
    influx: [2],
    income: [2],
    happiness: [0],
  },
  {
    key: "Beer",
    tierIDs: [7],
    requirement: 600,
    consumption_old: [2/1500],
    consumption: [0.000444444],
    influx: [0],
    income: [7],
    happiness: [4],
  },
  {
    key: "Cigars",
    tierIDs: [7],
    requirement: 1000,
    consumption_old: [4/7200],
    consumption: [0.000185185],
    influx: [0],
    income: [8],
    happiness: [2],
  },
  {
    key: "Sewing_machines",
    tierIDs: [7],
    requirement: 1000,
    consumption_old: [4/3200],
    consumption: [0.000416667],
    influx: [2],
    income: [16],
    happiness: [0],
  },


  /**
   * Explorers
   */
  {
    key: "Canteen",
    tierIDs: [8, 9],
    requirement: 1,
    consumption: [0, 0],
    influx: [4, 4],
    income: [2, 4],
    happiness: [0, 0], //heat
  },
  {
    key: "Heater",//Heat
    tierIDs: [8, 9],
    requirement: 1,
    consumption: [0, 0],
    influx: [0, 0],
    income: [0, 0],
    happiness: [32, 32], //heat
  },
  {
    key: "Pemmican",
    tierIDs: [8, 9],
    requirement: 100,
    consumption: [0.0012, 0.0012],
    consumption2: [0.0002, 0.0004],
    influx: [3, 3],
    income: [4, 8],
    happiness: [0, 0], //heat
  },
  {
    key: "Sleeping_Bags",
    tierIDs: [8, 9],
    requirement: 250,
    consumption: [0.0009, 0.0009],
    consumption2: [0.00015, 0.00030],
    influx: [0, 0],
    income: [5, 10],
    happiness: [16, 8], //heat
  },
  {
    key: "Oil_Lamps",
    tierIDs: [8, 9],
    requirement: 500,
    consumption: [0.0009, 0.0009],
    consumption2: [0.0001, 0.0002],
    influx: [3, 3],
    income: [7, 14],
    happiness: [0, 0], //heat
  },
  {
    key: "Schnapps",
    tierIDs: [8, 9],
    requirement: 500,
    consumption: [0.0015, 0.0015],
    consumption2: [0.00025, 0.00050],
    influx: [0, 0],
    income: [3, 7],
    happiness: [12, 6], //heat
  },

  /**
   * Technicians
   */
  {
    key: "Post_Office",
    tierIDs: [9],
    requirement: 1,
    consumption: [0],
    influx: [3],
    income: [6],
    happiness: [0], //heat
  },
  {
    key: "Canned_food",
    tierIDs: [9],
    requirement: 300,
    consumption: [0.0006],
    consumption2: [0.0002],
    influx: [3],
    income: [10],
    happiness: [0], //heat
  },
  {
    key: "Parkas",
    tierIDs: [9],
    requirement: 300,
    consumption: [0.0012],
    consumption2: [0.0004],
    influx: [0],
    income: [9],
    happiness: [8], //heat
  },
  {
    key: "Husky_Sleds",
    tierIDs: [9],
    requirement: 750,
    consumption: [0.0009],
    consumption2: [0.0003],
    influx: [4],
    income: [16],
    happiness: [0], //heat
  },
  {
    key: "Coffee",
    tierIDs: [9],
    requirement: 750,
    consumption: [0.0012],
    consumption2: [0.0004],
    influx: [0],
    income: [12],
    happiness: [6], //heat
  },

]
