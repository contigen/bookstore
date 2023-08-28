import { PrismaClient } from '@prisma/client'
import { fakeBookData } from '../src/lib/books-data'
export const prisma = new PrismaClient()

async function main() {
  let bookEntry
  fakeBookData.forEach(async (data) => {
    bookEntry = await prisma.bookSugestion.create({
      data: {
        author: data.author,
        title: data.title,
        genre: data.genre,
      },
    })
    console.log(bookEntry)
  })
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
