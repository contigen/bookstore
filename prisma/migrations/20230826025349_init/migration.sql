-- CreateTable
CREATE TABLE "BookSugestion" (
    "id" SERIAL NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "bookGenre" TEXT NOT NULL,
    "bookAuthor" TEXT NOT NULL,

    CONSTRAINT "BookSugestion_pkey" PRIMARY KEY ("id")
);
