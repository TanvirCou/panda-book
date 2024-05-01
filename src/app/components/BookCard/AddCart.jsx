import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const AddCart = () => {
    return (
        <div className='flex justify-around items-center'>
            <button className='py-2 px-5 bg-purple-600 transition ease-in-out duration-500 hover:scale-110 text-white hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600 text-sm font-medium rounded-sm flex items-center'>
                <ShoppingCartIcon className='w-5'/>
                <p className='ml-1'>to Buy</p>
            </button>
            <button className='py-2 px-5 bg-purple-600 transition ease-in-out duration-500 hover:scale-110 text-white hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600 text-sm font-medium rounded-sm flex items-center'>
                <ShoppingCartIcon className='w-5'/>
                <p className='ml-1'>to Rent</p>
            </button>
        </div>
    );
};

export default AddCart;