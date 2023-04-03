/*
  Warnings:

  - You are about to drop the column `userOderId` on the `OrderForLunch` table. All the data in the column will be lost.
  - Added the required column `userOrderId` to the `OrderForLunch` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderForLunch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderValue" DECIMAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "lunchMealId" TEXT NOT NULL,
    "userOrderId" TEXT NOT NULL,
    CONSTRAINT "OrderForLunch_lunchMealId_fkey" FOREIGN KEY ("lunchMealId") REFERENCES "LunchMealMenu" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderForLunch_userOrderId_fkey" FOREIGN KEY ("userOrderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderForLunch" ("amount", "createdAt", "id", "lunchMealId", "orderValue", "updatedAt") SELECT "amount", "createdAt", "id", "lunchMealId", "orderValue", "updatedAt" FROM "OrderForLunch";
DROP TABLE "OrderForLunch";
ALTER TABLE "new_OrderForLunch" RENAME TO "OrderForLunch";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
