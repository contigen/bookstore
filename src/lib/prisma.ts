import { PrismaClient } from '@prisma/client'
import { fakeBookData } from './books-data'
export const prisma = new PrismaClient()

async function main() {
  let bookEntry
  fakeBookData.forEach(async (data) => {
    bookEntry = await prisma.bookSugestion.create({
      data: {
        bookAuthor: data.author,
        bookTitle: data.title,
        bookGenre: data.genre,
      },
    })
  })
  console.log(bookEntry)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
