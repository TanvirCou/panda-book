import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 z-40 bg-white'>
            <Link href="/">
                <p className='bg-purple-600 text-white text-2xl font-semibold font-[poppins] w-full h-[52px] px-4 md:px-0  md:h-28 rounded-sm flex justify-start md:justify-center items-center'>Panda-Book</p>
            </Link>

            <NavLink />

            

        
        </div>
    );
};

export default Sidebar;