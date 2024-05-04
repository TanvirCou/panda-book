import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddCart from './AddCart';

const BookCard = ({book}) => {
    return (
        
        <div className='w-full border bg-white hover:bg-gray-200 shadow-md py-4'>
            <Link href={`store/${book._id}`}>
            <div className='w-full h-40 relative'>
                <Image src={book.cover} alt={book.title}  className='object-contain' fill priority={true}/>

            </div>
            </Link>
            <div className='flex flex-col items-center my-1'>
            <Link href={`store/${book._id}`}>
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
            <div>
                <AddCart book={book}/>
            </div>
        </div>
    );
};

export default BookCard;