import React from 'react';

const layout = ({children, cartDetails, cartStats, payment}) => {
    return (
        <div className='mt-[150px] md:mt-0 p-4 flex justify-center'>
            <div className='w-[90%] md::w-[80%] py-4'>
                {children}

                {cartDetails}

                <div className='block lg:flex w-full'>
                    <div className='w-full lg:w-[50%] mt-6 lg:mt-4'>
                        {cartStats}
                    </div>
                    <div className='w-full lg:w-[50%] mt-6 lg:mt-4'>
                        {payment}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default layout;