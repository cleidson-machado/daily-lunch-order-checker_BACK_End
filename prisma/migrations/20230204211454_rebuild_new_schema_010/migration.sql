-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idCompanyEmployee" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "LunchBoxType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "LunchMealMenu" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "averageCalories" DECIMAL NOT NULL,
    "averageWeight" DECIMAL NOT NULL,
    "averagePrice" DECIMAL NOT NULL,
    "dessertName" TEXT NOT NULL,
    "nameDayWeek" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rateQualityNumber" INTEGER NOT NULL,
    "imageLinkPath" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lunchBoxId" TEXT NOT NULL,
    CONSTRAINT "LunchMealMenu_lunchBoxId_fkey" FOREIGN KEY ("lunchBoxId") REFERENCES "LunchBoxType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrderForLunch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderValue" DECIMAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lunchMealId" TEXT NOT NULL,
    "userOderId" TEXT NOT NULL,
    CONSTRAINT "OrderForLunch_lunchMealId_fkey" FOREIGN KEY ("lunchMealId") REFERENCES "LunchMealMenu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderForLunch_userOderId_fkey" FOREIGN KEY ("userOderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AppScopeConfig" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userLimitbuy" INTEGER NOT NULL,
    "dailyTimeout" INTEGER NOT NULL,
    "startDailyTimeout" DATETIME NOT NULL,
    "endtDailyTimeout" DATETIME NOT NULL,
    "isActive" BOOLEAN NOT NULL
);
