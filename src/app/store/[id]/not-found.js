import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h2 className='text-xl font-semibold text-red-600'>Book not found</h2>
      <Link href="/store" className='px-2 py-2 mt-2 rounded-sm border border-green-600 text-green-700 text-md font-medium'>Return to store</Link>
    </div>
  )
}