import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';

const layout = ({children}) => {
    return (
        <div className='flex max-md:flex-col'>
            <div className='w-full md:w-[22%] lg:w-[18%] xl:w-[14%] ' >
            <Sidebar />
            </div>
            <div className='w-full md:w-[78%] lg:w-[82%] xl:w-[86%]'>
            {children}
            </div>
            
        </div>
    );
};

export default layout;