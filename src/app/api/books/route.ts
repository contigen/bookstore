import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

type BookData = {
  title: string
  genre: string
  author: string
}
export function GET(req: Request) {
  return new Response(`OK`)
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
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
