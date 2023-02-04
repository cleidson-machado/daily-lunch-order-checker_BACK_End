-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AppScopeConfig" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userLimitbuy" INTEGER NOT NULL,
    "dailyTimeout" INTEGER NOT NULL,
    "startDailyTimeout" DATETIME,
    "endtDailyTimeout" DATETIME,
    "isActive" BOOLEAN NOT NULL
);
INSERT INTO "new_AppScopeConfig" ("dailyTimeout", "endtDailyTimeout", "id", "isActive", "startDailyTimeout", "userLimitbuy") SELECT "dailyTimeout", "endtDailyTimeout", "id", "isActive", "startDailyTimeout", "userLimitbuy" FROM "AppScopeConfig";
DROP TABLE "AppScopeConfig";
ALTER TABLE "new_AppScopeConfig" RENAME TO "AppScopeConfig";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
