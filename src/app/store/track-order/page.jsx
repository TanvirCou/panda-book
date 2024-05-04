import React from 'react';

export const metadata = {
    title: 'Panda-Book | Track-Order',
    description: 'Panda-Book track-order page',
  }

const page = () => {
    return (
        <div className='p-4'> 
            <div className='flex flex-col items-center justify-center h-screen w-full'>
                <p className='text-lg'>Thank you for your order</p>
                <p>Order tracking will coming soon</p>
            </div>
        </div>
    );
};

export default page;