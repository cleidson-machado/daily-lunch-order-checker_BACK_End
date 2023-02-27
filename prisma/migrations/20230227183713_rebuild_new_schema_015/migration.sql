/*
  Warnings:

  - A unique constraint covering the columns `[idCompanyEmployee]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_idCompanyEmployee_key" ON "User"("idCompanyEmployee");
