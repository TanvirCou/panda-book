"use client"
import { CartContext } from '@/app/context/CartProvider/CartProvider';
import React, { useContext, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { CartActions } from '@/app/context/CartProvider/CartActions';
import { toast } from 'react-toastify';

const CartDetails = () => {
  const { cart, cartDispatch , loader} = useContext(CartContext);

  const handleRemoveFromCart = (id) => {
    cartDispatch({ type: CartActions.REMOVE_FROM_CART, payload: id });
    toast.success("Book removed from cart successfully");
  }

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify([...cart]));
  }, [handleRemoveFromCart]);


  return (
    <div className='px-4 mt-6'>

{
        cart && cart.length === 0 && loader &&
        <div className='flex justify-center items-center h-[30vh] w-full '>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      }

      {
        cart && cart.length === 0 && !loader &&
        <div className='flex justify-center items-center h-[30vh] w-full border shadow-md rounded-md'>
          <p className='text-xl font-medium'>Cart is Empty</p>
        </div>
      }

      {
        cart && cart.length > 0 &&
        <div className="overflow-x-auto border shadow-md rounded-md">
        <p className='text-center text-lg font-semibold italic'>Cart Details:</p>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Book</th>
              <th>Author Name</th>
              <th>Type</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              cart && cart.map(item => (
                <tr key={item.id}>
                  <td className='flex items-center'>
                    <Image src={item.cover} alt={item.title} width={20} height={16} className='object-cover' priority={true}/>
                    <p className='ml-3'>{item.title}</p>
                  </td>
                  <td>{item.author}</td>
                  <td>{item.type}</td>
                  <td>${item.type === "buy" ? item.sellPrice : item.rentPrice}</td>
                  <td><TrashIcon onClick={() => handleRemoveFromCart(item.id)} className='w-5 cursor-pointer' /></td>
                </tr>
              ))
            }



          </tbody>
        </table>
      </div>
      }
      


    </div>
  );
};

export default CartDetails;