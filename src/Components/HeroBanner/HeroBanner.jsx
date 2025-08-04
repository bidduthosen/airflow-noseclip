import React from 'react';
import heroBanner from '../../assets/herobanner.png'
import avater1 from '../../assets/hero/Avatar.png'
import avater2 from '../../assets/hero/Avatar (1).png'
import avater3 from '../../assets/hero/Avatar (2).png'
import { FaArrowRight } from "react-icons/fa6";

const HeroBanner = () => {
    return (
        <div className='relative bg-cover bg-center h-[calc(100vh-90px)] flex items-center' style={{ backgroundImage: `url(${heroBanner})` }}>
            <div className='absolute inset-0 bg-black opacity-20'></div>
            <div className='relative z-10  text-white lg:container mx-auto px-5 md:px-10'>
                <div className='flex items-center'>
                    <img className='h-10 w-10 rounded-full ' src={avater1} alt="" />
                    <img className='h-10 w-10 rounded-full -ml-2' src={avater2} alt="" />
                    <img className='h-10 w-10 rounded-full -ml-2' src={avater3} alt="" />
                    <h4 className='font-semibold text-xs bg-white text-black rounded-3xl px-4 py-2 -ml-2'>26k Happy Customers</h4>

                </div>
                <h1 className='text-3xl md:text-6xl font-semibold my-5 leading-tight'>Breathe better, <br /> Live better</h1>
                <p className='text-base font-medium space-y-4'>Discover how effortless breathing can enhance your life. <br /> Take the first step Today!</p>
                <button className="btn bg-[#f97316] rounded-3xl text-white border-none shadow-none mt-10">Shop Now <FaArrowRight className='text-white' /></button>
            </div>

        </div>
    );
};

export default HeroBanner;