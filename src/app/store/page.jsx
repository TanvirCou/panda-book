import { getAllBooks } from '@/lib/fakeData';
import React from 'react';
import BookCard from '../components/BookCard/BookCard';

const storePage = () => {
    const books = getAllBooks();

    return (
        <div className='mt-48 md:mt-0 p-4'>
            <div className='px-6 sm:px-0 grid w-full gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    books.map(book => <BookCard key={book.id} book={book}/>)
                }
            </div>
        </div>
    );
};

export default storePage;