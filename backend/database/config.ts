// This is where all the schema constant attributes are set up

enum ResourceType {
  EMPTY,
  WOOD,
  GOLD,
  MOUNTAIN,
  ZOMBIE_HIVE,
}

enum BuildingType {
  BASE,
  WALL,
  DOOR,
  MARKET,
  CONNECTOR,
  GOLD_MINE,
  GOLD_BOOSTER,
  GOLD_STORAGE,
  TREE_MINE,
  TREE_BOOSTER,
  TREE_STORAGE,
}

type ResourceConfig = {
  INIT_HP?: number;
  MAX_RESOURCE_COUNT?: number;
  RESOURCE_GEN?: boolean;
  BUILDABLE: boolean;
};

const EMPTY: ResourceConfig = {
  BUILDABLE: true,
};

const WOOD: ResourceConfig = {
  INIT_HP: 100,
  MAX_RESOURCE_COUNT: 50,
  RESOURCE_GEN: false,
  BUILDABLE: false,
};
