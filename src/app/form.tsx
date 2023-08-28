'use client'

import { addBook } from '@/lib/db'
import { SubmitButton } from './button'
import { useState } from 'react'

export function FormWrapper() {
  return (
    <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div
        className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
        aria-hidden='true'
      >
        <div
          className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className='mx-auto max-w-2xl text-center'>
        <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 sm:text-4xl'>
          Book Suggestions
        </h1>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Discover your next favorite book with our user-curated Book
          Suggestions App! Dive into a world of diverse genres, recommended by
          fellow readers. Whether you&#39;re into heart-pounding thrillers or
          soul-nourishing poetry, our app connects you with personalized
          recommendations from people who share your tastes.
        </p>
      </div>
      <Form />
    </div>
  )
}

function Form() {
  const [message, setMessage] = useState(``)
  async function action(formData: FormData) {
    const bookDataRes = await addBook(formData)
    setMessage(bookDataRes.message)
  }
  return (
    <form className='mx-auto mt-16 max-w-xl sm:mt-20' action={action}>
      <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
        <div>
          <label
            htmlFor='title'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Book title
          </label>
          <div className='mt-2.5'>
            <input
              type='text'
              name='title'
              id='title'
              autoComplete='on'
              required
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='genre'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Genre
          </label>
          <div className='mt-2.5'>
            <input
              type='text'
              name='genre'
              id='genre'
              autoComplete='on'
              required
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <label
            htmlFor='author'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Author&apos;s name
          </label>
          <div className='mt-2.5'>
            <input
              type='text'
              name='author'
              id='author'
              autoComplete='name'
              required
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <SubmitButton />
        <p className='text-center my-4'>{message}</p>
      </div>
    </form>
  )
}
