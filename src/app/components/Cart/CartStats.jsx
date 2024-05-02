"use client"
import { CartContext } from '@/app/context/CartProvider/CartProvider';
import React, { useContext } from 'react';

const CartStats = () => {
    const { cart, loader } = useContext(CartContext);

    const buyItems = cart.filter(c => c.type === "buy");
    const buyItemsPrice = buyItems.reduce((acc, item) => acc + item.sellPrice, 0);

    const rentItems = cart.filter(c => c.type === "rent");
    const rentItemsPrice = rentItems.reduce((acc, item) => acc + item.sellPrice, 0);

    const deliveryCharge = 10;

    const totalPrice = buyItemsPrice + rentItemsPrice + deliveryCharge;

    return (
        <div>
            {
                cart && cart.length === 0 && loader &&
                <div className='flex justify-center items-center mx-4 h-[30vh]'>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            }
            {
                cart && cart.length === 0 && !loader &&
                <div className='flex justify-center items-center mx-4 h-[30vh] border shadow-md rounded-md'>
                    <p className='text-xl font-medium'>Cart is Empty</p>
                </div>
            }
            {
                cart && cart.length > 0 &&
                <div className='mx-4 p-4 border shadow-md'>
                <p className='text-lg text-center font-semibold italic'>Cart Stats:</p>
                <div className='px-4'>
                    {
                        buyItems && buyItems.length > 0 &&
                        <div className='flex items-center justify-between'>
                            <p className='text-sm'>Buying {buyItems.length} books for</p>
                            <p className='text-xl'>${buyItemsPrice}</p>
                        </div>
                    }
                    {
                        rentItems && rentItems.length > 0 &&
                        <div className='flex items-center justify-between'>
                            <p className='text-sm'>Renting {rentItems.length} books for</p>
                            <p className='text-xl'>${rentItemsPrice}</p>
                        </div>
                    }

                    <div className='flex items-center justify-between'>
                        <p className='text-sm'>Delivery Charge</p>
                        <p className='text-xl'>${deliveryCharge}</p>
                    </div>

                    <hr className='border border-gray-600' />

                    <div className='flex items-center justify-between'>
                        <p className='text-sm'>Total Amount</p>
                        <p className='text-xl'>${totalPrice}</p>
                    </div>
                </div>
            </div>
            }
            
        </div>
    );
};

export default CartStats;