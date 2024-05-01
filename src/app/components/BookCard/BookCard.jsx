import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    return (
        
        <div className='w-full border shadow-md py-4'>
            <Link href={`store/${book.id}`}>
            <div className='w-full h-40 relative'>
                <Image src={book.cover} alt={book.title}  className='object-contain' fill/>

            </div>
            </Link>
            <div className='flex flex-col items-center my-1'>
            <Link href={`store/${book.id}`}>
                <p className='text-md font-semibold'>{book.title}</p>
                </Link>
                <p className='text-xs font-medium text-gray-600'>By: {book.author}</p>
                <p className='text-xs  '>Genre: {book.genre}</p>
            </div>
            <div className='flex items-center justify-around'>
                <p className='text-sm flex items-center'>Stock: <span className='text-xl font-medium ml-1'>{book.stock}</span></p>
                <p className='text-xl font-medium flex items-center'>{book.sold} <span className='text-sm ml-1 font-normal'>Sold out</span></p>
            </div>
            <div className='flex items-center justify-around my-1.5'>
                <p className='text-2xl font-medium flex items-center italic'>${book.sellPrice} <span className='text-xs ml-1.5 font-normal not-italic'>for Sell</span></p>
                <p className='text-2xl font-medium flex items-center italic'>${book.rentPrice} <span className='text-xs ml-1.5 font-normal not-italic'>for Rent</span></p>
            </div>
            <div className='px-2'>
                <button className='w-full  py-2 bg-purple-500 text-white font-medium rounded-md'>Add to Cart</button>
                </div>
        </div>
    );
};

export default BookCard;