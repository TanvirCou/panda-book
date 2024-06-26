import AddCart from '@/app/components/BookCard/AddCart';
import { getBookById, getBooks } from '@/lib/db/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }) {
    const {id} = params;

    const book = await getBookById(id);
   
    return {
      title: book ? `Panda-Book | ${book.title}` : "Panda-Book | Book not found",
      description: book ? book.description : "Panda-Book"
    }
}

// export async function generateStaticParams() {
//     const books = await getBooks();

//     return books.map(book => ({
//         id: book._id
//     }));
// }


const page = async({ params }) => {
    const { id } = params;

    const book = await getBookById(id);

        if(!book) {
            notFound();
        }
        
    return (
        <div className='mt-[150px] md:mt-0 p-4 flex justify-center'>
            <div className='w-[90%] md:w-[80%] py-4'>

                <div className='w-full h-60 relative my-1'>
                    <Image src={book.cover} alt={book.title} className='object-contain' fill priority={true}/>

                </div>

                <div className='flex flex-col items-center my-1'>
                    <p className='text-xl font-semibold'>{book.title}</p>
                    <p className='text-sm font-medium text-gray-600'>By: {book.author}</p>
                    <p className='text-md mt-0.5'>Genre: {book.genre}</p>
                    <p className='text-sm my-0.5'>Pages: {book.pages}</p>
                    <p className='text-sm text-center'>{book.description}</p>
                </div>
                <div className='flex items-center justify-around mt-2'>
                    <p className='text-sm flex items-center'>Stock: <span className='text-2xl font-medium ml-1'>{book.stock}</span></p>
                    <p className='text-2xl font-medium flex items-center'>{book.sold} <span className='text-sm ml-1 font-normal'>Sold out</span></p>
                </div>
                <div className='flex items-center justify-around my-1.5'>
                    <p className='text-3xl font-medium flex items-center italic'>${book.sellPrice} <span className='text-xs ml-1.5 font-normal not-italic'>for Sell</span></p>
                    <p className='text-3xl font-medium flex items-center italic'>${book.rentPrice} <span className='text-xs ml-1.5 font-normal not-italic'>for Rent</span></p>
                </div>
                <div>
                    <p className='mb-2 flex justify-center'>Available for Rent: <span className='ml-1 font-medium'>{book.isRented ? "Yes" : "No"}</span></p>
                </div>
                <div className='flex justify-center mt-2'>
                    <div className='w-[80%] sm:w-[70%]  lg:w-[50%] xl:w-[40%]'>
                    <AddCart book={book}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;