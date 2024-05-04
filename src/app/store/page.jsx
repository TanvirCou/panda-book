import React from 'react';
import BookCard from '../components/BookCard/BookCard';
import { getBooks } from '@/lib/db/queries';

export const metadata = {
    title: 'Panda-Book | Store',
    description: 'Panda-Book store page',
  }

const storePage = async() => {
    const books = await getBooks();

    return (
        <div className='mt-[150px] md:mt-0 p-4'>
            <div className='px-6 sm:px-0 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    books.map(book => <BookCard key={book._id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default storePage;