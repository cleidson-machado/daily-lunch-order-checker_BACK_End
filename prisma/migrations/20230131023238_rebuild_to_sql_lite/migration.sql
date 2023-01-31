-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idCompanyEmployee" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "passWord" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL
);
