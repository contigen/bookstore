import { Fragment, Suspense } from 'react'
import { Form } from './form'
import { prisma } from '@/lib/prisma'
import { BookData } from '@/lib/books-data'

export default function Home() {
  return (
    <main>
      <Form />
      <BooksList />
    </main>
  )
}

async function BooksList() {
  let bookData
  try {
    bookData = await prisma.bookSugestion.findMany()
  } catch {
    return (
      <h1 className='text-center text-3xl font-bold mb-4'>
        A Server side error occured: error reading the database
      </h1>
    )
  }
  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        {bookData.map(
          (
            data: {
              id: number
            } & BookData,
          ) => (
            <Fragment key={data.id}>
              <h3 className='font-semibold'>{data.author}</h3>
              <p>{data.genre}</p>
              <li key={data.id}>{data.title}</li>
            </Fragment>
          ),
        )}
      </Suspense>
    </div>
  )
}
