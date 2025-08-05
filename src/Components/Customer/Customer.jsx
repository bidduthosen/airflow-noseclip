import React from 'react';
import user1 from '../../assets/customer/user.jpg'
import user2 from '../../assets/customer/user2.jpg'
import user3 from '../../assets/customer/user3.jpg'
import customerImg from '../../assets/customer/cusser.png'
import { PiShieldCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";



const Customer = () => {
    return (
        <div className='lg:container mx-auto px-5 md:px-10'>
            <div>
                <h2 className='text-4xl font-bold my-12'>Customer Feedback</h2>
                <hr className='py-4 text-green-500 mt-5' />
            </div>

            {/* customer 1 */}
            <div className='flex justify-between'>
                <div className='flex items-center gap-1 md:gap-3'>
                    <img className='h-14' src={user1} alt="" />
                    <h1 className='font-bold lg:text-4xl text-lg'>Arlene McCoy</h1>
                    <PiShieldCheckFill size={40} className='text-green-500' />
                </div>
                <div><button className="btn btn-wide text-[#014955] bg-[#c3dad690] border border-[#C3DAD6] md:text-lg text-xs">1 Week ago</button></div>
            </div>
            <div className='flex items-center space-x-4  pt-6'>
                <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /><FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' />  <span className='text-lg font-semibold text-gray-600 mr-3'>|</span> <FaHeart size={23} className='text-red-500' />
                <span className='text-base'>(1.5k)</span>
            </div>
            <p className='text-lg font-normal pb-6 pt-4'>This nasal clip has helped me reduce snoring and breathe easier at night. Comfortable and barely noticeable!</p>
            <img className='' src={customerImg} alt="" />
            <hr className='py-4 text-green-500 mt-5' />

            {/* customer 2 */}
            <div className='flex justify-between'>
                <div className='flex items-center gap-1 md:gap-3'>
                    <img className='h-14' src={user2} alt="" />
                    <h1 className='font-bold lg:text-4xl text-lg'>Ralph Edwards</h1>
                    <PiShieldCheckFill size={40} className='text-green-500' />
                </div>
                <div><button className="btn btn-wide text-[#014955] bg-[#c3dad690] border border-[#C3DAD6] md:text-lg text-xs">1 Week ago</button></div>
            </div>
            <div className='flex items-center space-x-4  pt-6'>
                <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /><FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' />  <span className='text-lg font-semibold text-gray-600 mr-3'>|</span> <FaHeart size={23} className='text-red-500' />
                <span className='text-base'>(1.5k)</span>
            </div>
            <p className='text-lg font-normal pb-6 pt-4'>I use this nasal clip during my runs, and it really improves airflow. I can breathe more freely and last longer during intense sessions.</p>
            <img className='' src={customerImg} alt="" />
            <hr className='py-4 text-green-500 mt-5' />

            {/* customer 3 */}
            <div className='flex justify-between'>
                <div className='flex items-center gap-1 md:gap-3'>
                    <img className='h-14' src={user3} alt="" />
                    <h1 className='font-bold lg:text-4xl text-lg'>Cameron Williamson</h1>
                    <PiShieldCheckFill size={40} className='text-green-500' />
                </div>
                <div><button className="btn btn-wide text-[#014955] bg-[#c3dad690] border border-[#C3DAD6] md:text-lg text-xs">1 Week ago</button></div>
            </div>
            <div className='flex items-center space-x-4  pt-6'>
                <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /><FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' /> <FaStar size={23} className='text-[#FFC107]' />  <span className='text-lg font-semibold text-gray-600 mr-3'>|</span> <FaHeart size={23} className='text-red-500' />
                <span className='text-base'>(1.5k)</span>
            </div>
            <p className='text-lg font-normal pb-6 pt-4'>This nasal clip has helped me reduce snoring and breathe easier at night. Comfortable and barely noticeable!</p>
            <img className='' src={customerImg} alt="" />
            <hr className='py-4 text-green-500 mt-5' />

        </div>
    );
};

export default Customer;