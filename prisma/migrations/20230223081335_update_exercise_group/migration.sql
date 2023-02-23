/*
  Warnings:

  - You are about to drop the `Exercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Exercise";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ExerciseGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "image" TEXT
);
