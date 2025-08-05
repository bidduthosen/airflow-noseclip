import React from 'react';
import prob from '../../assets/solution/prob.png'
import { GoDotFill } from "react-icons/go";

const SolutionOverView = () => {
    return (
        <div className='bg-[#6B2B00] py-16'>
            <div className='lg:container mx-auto px-5 md:px-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <img className='h-[476px] w-full object-cover rounded-lg' src={prob} alt="" />
                    </div>
                    <div className='text-white flex items-center'>
                        <div>
                            <h2 className='text-5xl font-semibold'>Pain Points</h2>
                            <h5 className='font-semibold text-2xl py-3'>Struggling with Snoring or Congestion?</h5>
                            <p className='font-medium text-base'>Whether it's snoring, allergies, or breathing difficulties during exercise, our nasal clip is here to help. These issues can disrupt your sleep, lower your energy, and impact your quality of life.</p>
                            <ul className=' font-semibold text-base space-y-4 mt-6'>
                                <li className='flex items-center gap-2'> <GoDotFill size={14} className='text-[#f97316]' /> Persistent snoring</li>
                                <li className='flex items-center gap-2'> <GoDotFill size={14} className='text-[#f97316]' /> Nasal congestion</li>
                                <li className='flex items-center gap-2'> <GoDotFill size={14} className='text-[#f97316]' /> Allergies affecting breathing</li>
                                <li className='flex items-center gap-2'> <GoDotFill size={14} className='text-[#f97316]' /> Struggling to breathe during workouts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionOverView;