import React from 'react';

const Payment = () => {
    return (
        <div className='mx-4 p-4 border shadow-md'>
            <p className='text-lg text-center font-semibold italic'>Cart Stats:</p>
            <form className='px-4'>
                <div className='py-2'>
                    <p className='text-xs mb-0.5'>Card Number</p>
                    <input type="number" name="cardNumber"  className='w-full h-8 rounded-md border border-gray-400 px-2 placeholder:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600' placeholder='Enter card number'/>
                </div>
                <div className='py-2'>
                    <p className='text-xs mb-0.5'>Card Name</p>
                    <input type="text" name="cardName"  className='w-full h-8 rounded-md border border-gray-400 px-2 placeholder:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600' placeholder='Enter card name'/>
                </div>
                <div className='py-2'>
                    <p className='text-xs mb-0.5'>Card Expiry</p>
                    <input type="number" name="cardExpiry"  className='w-full h-8 rounded-md border border-gray-400 px-2 placeholder:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600' placeholder='Enter card expiry'/>
                </div>
                <div className='py-2'>
                    <p className='text-xs mb-0.5'>CVC</p>
                    <input type="number" name="cvc"  className='w-full h-8 rounded-md border border-gray-400 px-2 placeholder:text-sm focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600' placeholder='Enter card CVC'/>
                </div>
                <div className='my-2'>
                    <input type="submit" value="CheckOut" className='cursor-pointer w-full h-8 rounded-md bg-purple-600 text-white text-md font-medium'/>
                </div>
            </form>
        </div>
    );
};

export default Payment;