import React from 'react';
import aboutPic from "../../../../public/about.png";
import Image from 'next/image';

export const metadata = {
    title: 'Panda-Book | About',
    description: 'Panda-Book about page',
  }

const aboutPage = () => {
    return (
        <div className='md:mt-0 mt-[150px] px-4'>
            <div className='w-full h-[300px] relative'>
                <Image style={{objectPosition: "20% 30%"}} src={aboutPic} alt='about page picture' fill className='object-cover' placeholder='blur'/>
            </div>

            <div className="mt-4">
                <p className='text-center text-2xl top-2 font-semibold'>About Us</p>
                <p className='text-center whitespace-pre-line mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consectetur aperiam facilis eaque facere libero minima nulla quia error, sequi ex laboriosam asperiores dolorem voluptates, ipsam aspernatur corporis cum fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error vel perspiciatis non quisquam eos natus aut ipsa sunt illo fugiat nam est tempora at iusto vero, distinctio quas impedit.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consectetur aperiam facilis eaque facere libero minima nulla quia error, sequi ex laboriosam asperiores dolorem voluptates, ipsam aspernatur corporis cum fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error vel perspiciatis non quisquam eos natus aut ipsa sunt illo fugiat nam est tempora at iusto vero, distinctio quas impedit.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos consectetur aperiam facilis eaque facere libero minima nulla quia error, sequi ex laboriosam asperiores dolorem voluptates, ipsam aspernatur corporis cum fugit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error vel perspiciatis non quisquam eos natus aut ipsa sunt illo fugiat nam est tempora at iusto vero, distinctio quas impedit.
                </p>
            </div>
        </div>
    );
};

export default aboutPage;