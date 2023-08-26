import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const bookEntry = await prisma.bookSugestion.create({
    data: {
      bookAuthor: `Doe`,
      bookTitle: `Doe's ways`,
      bookGenre: `fiction`,
    },
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
