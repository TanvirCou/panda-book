'use client'
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center h-screen w-full justify-center'>
      <h2 className='text-xl font-semibold text-red-600'>Something went wrong!</h2>
      <button className='px-2 py-2 mt-3 rounded-sm border border-green-600 text-green-700 text-md font-medium'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}