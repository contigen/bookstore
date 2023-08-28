import { Fragment, Suspense } from 'react'
import { FormHeader } from './form'
import { prisma } from '@/lib/prisma'
import { BookData } from '@/lib/books-data'

export default function Home() {
  return (
    <main>
      <FormHeader />
      <Suspense fallback={<h2>Loading...</h2>}>
        <BooksList />
      </Suspense>
    </main>
  )
}

async function BooksList() {
  let bookData
  try {
    bookData = await prisma.bookSugestion.findMany()
  } catch {
    return (
      <h2 className='text-center mb-4'>
        A Server side error occured: error reading the database
      </h2>
    )
  }
  return (
    <div>
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
