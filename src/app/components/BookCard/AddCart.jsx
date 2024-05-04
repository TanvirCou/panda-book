"use client"
import React, { useContext } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CartContext } from '@/app/context/CartProvider/CartProvider';
import { CartActions } from '@/app/context/CartProvider/CartActions';
import { toast } from 'react-toastify';

const AddCart = ({book}) => {
    const { cart, cartDispatch } = useContext(CartContext);

    const handleAddToCart = (event, reason) => {
        event.preventDefault();
        const itemsExits = cart.find(c => c._id === book._id);
        if(itemsExits) {
            toast.error(`${book.title} already added to the cart`);
        } else {
            cartDispatch({type: CartActions.ADD_TO_CART, payload: {...book, type: reason}})
        localStorage.setItem("cartItems", JSON.stringify([...cart, {...book, type: reason}]));
        toast.success(`${book.title} successfully  added to the cart`)
        }
        
    }
    return (
        <div className='flex justify-around items-center'>
            <button onClick={(event) => handleAddToCart(event, "buy")} className='py-2 px-5 bg-purple-600 transition ease-in-out duration-500 hover:scale-110 text-white hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600 text-sm font-medium rounded-sm flex items-center'>
                <ShoppingCartIcon className='w-5'/>
                <p className='ml-1'>to Buy</p>
            </button>
            <button onClick={(event) => handleAddToCart(event, "rent")} className='py-2 px-5 bg-purple-600 transition ease-in-out duration-500 hover:scale-110 text-white hover:bg-white hover:border hover:border-purple-600 hover:text-purple-600 text-sm font-medium rounded-sm flex items-center'>
                <ShoppingCartIcon className='w-5'/>
                <p className='ml-1'>to Rent</p>
            </button>
        </div>
    );
};

export default AddCart;