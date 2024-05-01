import React from 'react';
import { 
    HomeIcon, 
    UserGroupIcon, 
    BookOpenIcon, 
    CubeTransparentIcon, RectangleStackIcon, CogIcon, TruckIcon,Squares2X2Icon, ShoppingCartIcon, 
    ArrowRightEndOnRectangleIcon} from "@heroicons/react/24/solid";
import Link from 'next/link';

const NavLink = () => {
    const links = [
        {name: 'Home', href: '/', icon: HomeIcon},
        {name: 'Books', href: '/store', icon: BookOpenIcon},
        {name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon},
        {name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon},
        {name: 'Track Order', href: '/store/track-order', icon: TruckIcon},
        {name: 'Community', href: '/store/community', icon: UserGroupIcon},
        {name: 'Settings', href: '/store/settings', icon: CogIcon},
        {name: 'About', href: '/store/about', icon: Squares2X2Icon},
        {name: 'Admin', href: '/store/admin', icon: CubeTransparentIcon},
      ]

    return (
        <div className='w-full flex flex-wrap justify-center md:flex-col px-1 md:px-0 mt-0 md:mt-1'>
            {
                links.map(link => {
                    const IconComponent = link.icon;
                    return (
                        <Link href={link.href} key={link.name}>
                        <div  className='flex cursor-pointer flex-grow justify-center md:justify-start items-center px-8 py-2 md:py-[10px] mt-1 my-0 md:my-1 mx-1 md:mx-0 rounded-md bg-gray-200 w-fit md:w-full'>
                            <IconComponent className='w-6'/>
                            <p className='text-sm font-medium ml-2 hidden md:block'>{link.name}</p>
                        </div>
                        </Link>
                    )
                })
            }
            <form action="" className='w-fit md:w-full  px-8 md:px-0 flex justify-center bg-gray-200 font-medium py-2 my-1 rounded-md'>
               
               <ArrowRightEndOnRectangleIcon className='w-6 h-6'/>
      
       </form>
        </div>
    );
};

export default NavLink;