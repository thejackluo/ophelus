// This is where all the schema constant attributes are set up

// enum ResourceType {
//   EMPTY
//   WOOD
//   GOLD
//   MOUNTAIN
//   ZOMBIE_HIVE
// }

// enum BuildingType {
//   BASE
//   WALL
//   DOOR
//   MARKET
//   CONNECTOR
//   GOLD_MINE
//   GOLD_BOOSTER
//   GOLD_STORAGE
//   TREE_MINE
//   TREE_BOOSTER
//   TREE_STORAGE
// }

const EMPTY = {
  BUILDABLE: true,
};

const WOOD = {
  INIT_HP: 100,
  MAX_RESOURCE_COUNT: 50,
  RESOURCE_GEN: false,
  BUILDABLE: false,
};
