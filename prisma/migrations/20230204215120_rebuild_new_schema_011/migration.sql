-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LunchMealMenu" (
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
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "lunchBoxId" TEXT NOT NULL,
    CONSTRAINT "LunchMealMenu_lunchBoxId_fkey" FOREIGN KEY ("lunchBoxId") REFERENCES "LunchBoxType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LunchMealMenu" ("averageCalories", "averagePrice", "averageWeight", "createdAt", "description", "dessertName", "id", "imageLinkPath", "lunchBoxId", "name", "nameDayWeek", "rateQualityNumber", "type", "updatedAt") SELECT "averageCalories", "averagePrice", "averageWeight", "createdAt", "description", "dessertName", "id", "imageLinkPath", "lunchBoxId", "name", "nameDayWeek", "rateQualityNumber", "type", "updatedAt" FROM "LunchMealMenu";
DROP TABLE "LunchMealMenu";
ALTER TABLE "new_LunchMealMenu" RENAME TO "LunchMealMenu";
CREATE TABLE "new_OrderForLunch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderValue" DECIMAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "lunchMealId" TEXT NOT NULL,
    "userOderId" TEXT NOT NULL,
    CONSTRAINT "OrderForLunch_lunchMealId_fkey" FOREIGN KEY ("lunchMealId") REFERENCES "LunchMealMenu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderForLunch_userOderId_fkey" FOREIGN KEY ("userOderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderForLunch" ("amount", "createdAt", "id", "lunchMealId", "orderValue", "updatedAt", "userOderId") SELECT "amount", "createdAt", "id", "lunchMealId", "orderValue", "updatedAt", "userOderId" FROM "OrderForLunch";
DROP TABLE "OrderForLunch";
ALTER TABLE "new_OrderForLunch" RENAME TO "OrderForLunch";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idCompanyEmployee" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_User" ("createdAt", "firstName", "id", "idCompanyEmployee", "isActive", "lastName", "passWord", "updatedAt") SELECT "createdAt", "firstName", "id", "idCompanyEmployee", "isActive", "lastName", "passWord", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_LunchBoxType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_LunchBoxType" ("createdAt", "description", "id", "name", "updatedAt") SELECT "createdAt", "description", "id", "name", "updatedAt" FROM "LunchBoxType";
DROP TABLE "LunchBoxType";
ALTER TABLE "new_LunchBoxType" RENAME TO "LunchBoxType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
