// =======================
// Schema Enums (structure)
// =======================

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

// =======================
// Resourcces
// =======================

type ResourceConfig = {
  HP?: number;
  MAX_RESOURCE_COUNT?: number;
  RESOURCE_GEN?: boolean;
  BUILDABLE: boolean;
};

const EMPTY: ResourceConfig = {
  BUILDABLE: true,
};

const WOOD: ResourceConfig = {
  HP: 100,
  MAX_RESOURCE_COUNT: 50,
  RESOURCE_GEN: false,
  BUILDABLE: false,
};

const GOLD: ResourceConfig = {
  HP: 500,
  MAX_RESOURCE_COUNT: 250,
  RESOURCE_GEN: true,
  BUILDABLE: true,
};

const MOUNTAIN: ResourceConfig = {
  HP: 5000,
  MAX_RESOURCE_COUNT: 1000,
  RESOURCE_GEN: true,
  BUILDABLE: false,
};

const ZOMBIE_HIVE: ResourceConfig = {
  HP: 10000,
  MAX_RESOURCE_COUNT: 25,
  RESOURCE_GEN: true,
  BUILDABLE: false,
};

// =======================
// Buildings
// =======================

type BuildingConfig = {
  HP: number;
  DEFENSE: number;
  RESOURCE_BOOST?: number;
  RESOURCE_CAPACITY?: number;
};

const BASE: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
};

const WALL: BuildingConfig = {
  HP: 1000,
  DEFENSE: 100,
};

const DOOR: BuildingConfig = {
  HP: 1000,
  DEFENSE: 50,
};

const MARKET: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
};

const CONNECTOR: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
};

const GOLD_MINE: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
  RESOURCE_BOOST: 1,
};

const GOLD_BOOSTER: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
  RESOURCE_BOOST: 2,
};

const GOLD_STORAGE: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
  RESOURCE_CAPACITY: 1000,
};

const TREE_MINE: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
  RESOURCE_BOOST: 1,
};

const TREE_BOOSTER: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
  RESOURCE_BOOST: 2,
};

const TREE_STORAGE: BuildingConfig = {
  HP: 1000,
  DEFENSE: 0,
  RESOURCE_CAPACITY: 1000,
};
