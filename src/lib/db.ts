'use server'

import { BookData } from './books-data'
import { prisma } from './prisma'

export async function addBook(formData: FormData) {
  const bookData = Object.fromEntries(formData.entries())
  const { title, genre, author } = bookData as BookData
  try {
    await prisma.bookSugestion.create({
      data: {
        title,
        genre,
        author,
      },
    })
    return { message: 'Success! Your book has been added' }
  } catch {
    return { message: 'There was an error.' }
  }
}
