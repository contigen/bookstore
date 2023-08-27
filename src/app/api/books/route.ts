import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

type BookData = {
  title: string
  genre: string
  author: string
}
export async function GET(req: Request) {
  try {
    const bookData = await prisma.bookSugestion.findMany()
    return NextResponse.json(bookData)
  } catch {
    return NextResponse.json({ error: 'Error fetching books' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const body: BookData = await req.json()
  const { title, genre, author } = body
  try {
    const bookEntry = await prisma.bookSugestion.create({
      data: {
        bookTitle: title,
        bookGenre: genre,
        bookAuthor: author,
      },
    })
    return NextResponse.json(bookEntry)
  } catch {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
