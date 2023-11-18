-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('EMPTY', 'WOOD', 'GOLD', 'MOUNTAIN', 'ZOMBIE_HIVE');

-- CreateEnum
CREATE TYPE "BuildingType" AS ENUM ('BASE', 'WALL', 'DOOR', 'MARKET', 'CONNECTOR', 'GOLD_MINE', 'GOLD_BOOSTER', 'GOLD_STORAGE', 'TREE_MINE', 'TREE_BOOSTER', 'TREE_STORAGE');

-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'COMPLETE');

-- CreateTable
CREATE TABLE "World" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usergameid" TEXT,

    CONSTRAINT "World_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chuck" (
    "chuckid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "chuckX" INTEGER NOT NULL,
    "chuckY" INTEGER NOT NULL,
    "worldid" TEXT NOT NULL,

    CONSTRAINT "Chuck_pkey" PRIMARY KEY ("chuckid")
);

-- CreateTable
CREATE TABLE "Tile" (
    "chuckid" TEXT NOT NULL,
    "tileX" INTEGER NOT NULL,
    "tileY" INTEGER NOT NULL,

    CONSTRAINT "Tile_pkey" PRIMARY KEY ("tileX","tileY","chuckid")
);

-- CreateTable
CREATE TABLE "ResourceTile" (
    "tileX" INTEGER NOT NULL,
    "tileY" INTEGER NOT NULL,
    "chuckid" TEXT NOT NULL,
    "resourceType" "ResourceType" NOT NULL,
    "count" INTEGER NOT NULL,
    "health" INTEGER NOT NULL,
    "production_speed" INTEGER NOT NULL,

    CONSTRAINT "ResourceTile_pkey" PRIMARY KEY ("tileX","tileY","chuckid")
);

-- CreateTable
CREATE TABLE "BuildingTile" (
    "tileX" INTEGER NOT NULL,
    "tileY" INTEGER NOT NULL,
    "chuckid" TEXT NOT NULL,
    "buildingType" "BuildingType" NOT NULL,
    "health" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "resource_count" INTEGER,

    CONSTRAINT "BuildingTile_pkey" PRIMARY KEY ("tileX","tileY","chuckid")
);

-- CreateTable
CREATE TABLE "Task" (
    "taskid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3),
    "due_date" TIMESTAMP(3),
    "completed_date" TIMESTAMP(3),
    "status" "TaskStatus" DEFAULT 'TODO',
    "time_estimate" INTEGER,
    "difficulty_estimate" INTEGER,
    "priority" INTEGER,
    "userproductivityid" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskid")
);

-- CreateTable
CREATE TABLE "Habit" (
    "habitid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3),
    "completed_date" TIMESTAMP(3),
    "due_date" TIMESTAMP(3),
    "status" "TaskStatus" DEFAULT 'TODO',
    "streak" INTEGER NOT NULL,
    "frequency" INTEGER NOT NULL,
    "frequency_time" INTEGER NOT NULL,
    "userproductivityid" TEXT NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("habitid")
);

-- CreateTable
CREATE TABLE "WorkSession" (
    "worksessionid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3),
    "completed_date" TIMESTAMP(3),
    "session_duration" INTEGER NOT NULL,
    "session_type" TEXT NOT NULL,
    "userproductivityid" TEXT NOT NULL,

    CONSTRAINT "WorkSession_pkey" PRIMARY KEY ("worksessionid")
);

-- CreateTable
CREATE TABLE "HabitLog" (
    "habitlogid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HabitLog_pkey" PRIMARY KEY ("habitlogid")
);

-- CreateTable
CREATE TABLE "User" (
    "userid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersocialid" TEXT NOT NULL,
    "userproductivityid" TEXT NOT NULL,
    "usergameid" TEXT NOT NULL,
    "usersettingid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "UserSocial" (
    "usersocialid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bio" TEXT,
    "profilePicture" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "facebook" TEXT,
    "linkedin" TEXT,
    "github" TEXT,
    "userid" TEXT NOT NULL,

    CONSTRAINT "UserSocial_pkey" PRIMARY KEY ("usersocialid")
);

-- CreateTable
CREATE TABLE "UserGame" (
    "usergameid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "UserGame_pkey" PRIMARY KEY ("usergameid")
);

-- CreateTable
CREATE TABLE "UserProductivity" (
    "userproductivityid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "UserProductivity_pkey" PRIMARY KEY ("userproductivityid")
);

-- CreateTable
CREATE TABLE "UserSetting" (
    "usersettingid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userid" TEXT NOT NULL,

    CONSTRAINT "UserSetting_pkey" PRIMARY KEY ("usersettingid")
);

-- CreateIndex
CREATE UNIQUE INDEX "World_usergameid_key" ON "World"("usergameid");

-- CreateIndex
CREATE UNIQUE INDEX "Chuck_worldid_chuckX_chuckY_key" ON "Chuck"("worldid", "chuckX", "chuckY");

-- CreateIndex
CREATE UNIQUE INDEX "User_usersocialid_key" ON "User"("usersocialid");

-- CreateIndex
CREATE UNIQUE INDEX "User_userproductivityid_key" ON "User"("userproductivityid");

-- CreateIndex
CREATE UNIQUE INDEX "User_usergameid_key" ON "User"("usergameid");

-- CreateIndex
CREATE UNIQUE INDEX "User_usersettingid_key" ON "User"("usersettingid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "World" ADD CONSTRAINT "World_usergameid_fkey" FOREIGN KEY ("usergameid") REFERENCES "UserGame"("usergameid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chuck" ADD CONSTRAINT "Chuck_worldid_fkey" FOREIGN KEY ("worldid") REFERENCES "World"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tile" ADD CONSTRAINT "Tile_chuckid_fkey" FOREIGN KEY ("chuckid") REFERENCES "Chuck"("chuckid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ResourceTile" ADD CONSTRAINT "ResourceTile_tileX_tileY_chuckid_fkey" FOREIGN KEY ("tileX", "tileY", "chuckid") REFERENCES "Tile"("tileX", "tileY", "chuckid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BuildingTile" ADD CONSTRAINT "BuildingTile_tileX_tileY_chuckid_fkey" FOREIGN KEY ("tileX", "tileY", "chuckid") REFERENCES "Tile"("tileX", "tileY", "chuckid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userproductivityid_fkey" FOREIGN KEY ("userproductivityid") REFERENCES "UserProductivity"("userproductivityid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userproductivityid_fkey" FOREIGN KEY ("userproductivityid") REFERENCES "UserProductivity"("userproductivityid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkSession" ADD CONSTRAINT "WorkSession_userproductivityid_fkey" FOREIGN KEY ("userproductivityid") REFERENCES "UserProductivity"("userproductivityid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "UserSocial_User" FOREIGN KEY ("usersocialid") REFERENCES "UserSocial"("usersocialid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "UserProductivity_User" FOREIGN KEY ("userproductivityid") REFERENCES "UserProductivity"("userproductivityid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "UserGame_User" FOREIGN KEY ("usergameid") REFERENCES "UserGame"("usergameid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "UserSetting_User" FOREIGN KEY ("usersettingid") REFERENCES "UserSetting"("usersettingid") ON DELETE RESTRICT ON UPDATE CASCADE;
