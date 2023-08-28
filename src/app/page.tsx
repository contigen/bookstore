import { Fragment, Suspense, cache } from 'react'
import { FormWrapper } from './form'
import { prisma } from '@/lib/prisma'
import type { BookData } from '@/lib/books-data'

export default function Home() {
  return (
    <main>
      <FormWrapper />
      <Suspense fallback={<h2>Loading...</h2>}>
        <BooksList />
      </Suspense>
    </main>
  )
}

async function BooksList() {
  let bookData
  const getBooks = cache(async () => await prisma.bookSugestion.findMany())
  try {
    bookData = await getBooks()
  } catch {
    return (
      <h2 className='text-center mb-4'>
        A Server side error occured: error reading the database
      </h2>
    )
  }
  return (
    <div className='mb-8'>
      {bookData.map(
        (
          data: {
            id: number
          } & BookData,
        ) => (
          <Fragment key={data.id}>
            <h3>{data.author}</h3>
            <p>{data.genre}</p>
            <li key={data.id}>{data.title}</li>
          </Fragment>
        ),
      )}
    </div>
  )
}
