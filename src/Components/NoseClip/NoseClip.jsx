import React from 'react';
import clipImg from '../../assets/noseClip.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import apple from '../../assets/svg/Item → Img.svg'
import google from '../../assets/svg/Item → Img (1).svg'
import r from '../../assets/svg/Item → Img (2).svg'
import shop from '../../assets/svg/Item → Img (3).svg'
import visa from '../../assets/svg/Item → Img (4).svg'


const NoseClip = () => {
    return (
        <div className='lg:container mx-auto px-5 md:px-10 mt-11 mb-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className=''>
                    <img src={clipImg} alt="" />
                </div>
                <div>
                    <div className='flex items-center space-x-2 '>
                        <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /><FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' />  <span className='text-lg font-semibold'>4.5</span> <span className='text-base'>(500+ Reviews)</span>
                    </div>
                    <h2 className="text-4xl font-semibold mt-3">NoseClip</h2>
                    <div className=' flex items-center space-x-2 mb-6 mt-4' >
                        <span className='text-5xl font-semibold text-[#6B2B00]'>$12.00</span>
                        <span className='text-2xl font-semibold line-through'>$20.00</span>
                        <span className='bg-orange-500 text-white rounded-md px-4 py-2 text-xs font-semibold '>Save 10%</span>
                    </div>
                    <div>
                        <span className='text-3xl font-semibold'>Description:</span>
                        <p className='text-base font-normal mt-3'>A nasal clip is a small device typically used to pinch or secure the nostrils for various purposes, such as during sports, medical treatments, or personal health practices. It is usually made of flexible or padded materials to ensure comfort and a secure fit. Common uses include:</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <div className='flex items-center space-x-2'>
                            <RiVerifiedBadgeFill size={18} className='text-orange-500' />
                            <span className='text-lg font-medium'>Boost performance</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RiVerifiedBadgeFill size={18} className='text-orange-500' />
                            <span className='text-lg font-medium'>Stop snoring</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RiVerifiedBadgeFill size={18} className='text-orange-500' />
                            <span className='text-lg font-medium'>Optimized Airflow</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RiVerifiedBadgeFill size={18} className='text-orange-500' />
                            <span className='text-lg font-medium'>100% Drug Free</span>
                        </div>
                        

                    </div>
                    <button className="btn bg-[#f97316] rounded-3xl text-white w-full text-base font-semibold my-6 ">Add To Cart <FaArrowRight className='text-white' /></button>
                    <div className='grid grid-cols-5 gap-6'>
                        <img src={apple} alt="" />
                        <img src={google} alt="" />
                        <img src={r} alt="" />
                        <img src={shop} alt="" />
                        <img src={visa} alt="" />
                    </div>
                    <div className='mt-6'>
                        <div tabIndex={0} className="collapse collapse-arrow border-b-2 border-orange-200 ">
                            <div className="collapse-title text-base  font-medium">
                                Sizing information
                            </div>
                            <div className="collapse-content">
                                <p>Size: 2x , 3x, 4x, 5x 6x</p>
                            </div>
                        </div>
                        <div tabIndex={1} className="collapse collapse-arrow border-b-2 border-orange-200 ">
                            <div className="collapse-title text-base font-medium">
                                Free resizing
                            </div>
                            <div className="collapse-content">
                                <p> attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                        <div tabIndex={2} className="collapse collapse-arrow border-b-2 border-orange-200 ">
                            <div className="collapse-title text-base font-medium">
                                Money back guarantee & free returns
                            </div>
                            <div className="collapse-content">
                                <p> attribute is necessary to make the div focusable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NoseClip;