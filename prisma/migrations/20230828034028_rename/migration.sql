/*
  Warnings:

  - You are about to drop the column `bookAuthor` on the `BookSugestion` table. All the data in the column will be lost.
  - You are about to drop the column `bookGenre` on the `BookSugestion` table. All the data in the column will be lost.
  - You are about to drop the column `bookTitle` on the `BookSugestion` table. All the data in the column will be lost.
  - Added the required column `author` to the `BookSugestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `BookSugestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `BookSugestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookSugestion" DROP COLUMN "bookAuthor",
DROP COLUMN "bookGenre",
DROP COLUMN "bookTitle",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
