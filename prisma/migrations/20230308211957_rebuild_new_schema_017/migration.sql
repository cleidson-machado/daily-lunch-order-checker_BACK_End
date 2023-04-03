-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LunchBoxType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageLinkPath" TEXT NOT NULL DEFAULT 'noimage',
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_LunchBoxType" ("createdAt", "description", "id", "name", "updatedAt") SELECT "createdAt", "description", "id", "name", "updatedAt" FROM "LunchBoxType";
DROP TABLE "LunchBoxType";
ALTER TABLE "new_LunchBoxType" RENAME TO "LunchBoxType";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
