import { getBookById } from '@/lib/fakeData';
import Image from 'next/image';
import React from 'react';

const page = ({ params }) => {
    const { id } = params;

    const book = getBookById(id);

    return (
        <div className='mt-44 md:mt-0 p-4 flex justify-center'>
            <div className='w-[90%] md:w-[80%] py-4'>

                <div className='w-full h-60 relative my-1'>
                    <Image src={book.cover} alt={book.title} className='object-contain' fill />

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
                <div className='flex justify-center w-full '>
                    <button className='w-fit px-10 py-2 bg-purple-500 text-white font-medium rounded-md'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default page;