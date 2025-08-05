import React from 'react';

import { GoDotFill } from "react-icons/go";
import { HiBadgeCheck } from "react-icons/hi";
import prob from '../../assets/solution/solu.png';
import solv from '../../assets/solution/prob.png';
import work from '../../assets/solution/Worksman.png';


const Solution = () => {
    return (
        <div className='bg-[#6B2B00] py-16'>
            <div className='lg:container mx-auto px-5 md:px-10'>

                {/* ------------------pain section--------------- */}
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
                {/* ------------------solution section--------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div className='text-white flex items-center'>
                        <div>
                            <h2 className='text-5xl font-semibold'>Solution Overview</h2>
                            <h5 className='font-semibold text-2xl py-3'>Struggling with Snoring or Congestion?</h5>
                            <p className='font-medium text-base'>Our nasal clip is scientifically designed to fits seamlessly into your daily routine.</p>
                            <ul className=' font-semibold text-base space-y-4 mt-6'>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' /> Enhance airflow</li>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' /> Reduce snoring</li>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' /> Clear nasal passages</li>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' /> Made from soft</li>
                                <li className='flex items-center gap-2'> <HiBadgeCheck size={20} className='text-[#f97316]' /> Comfortable Materials</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img className='h-[476px] w-full object-cover rounded-lg' src={solv} alt="" />
                    </div>
                </div>

                {/* ------------------How It Works section--------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 ">
                    <div className='text-white'>
                        <h2 className='text-5xl font-semibold'>How It Works</h2>
                        <h5 className='font- text-base pt-4 pb-8'>Using our nasal clip is effortless and effective. Follow these steps to enjoy better airflow and relief from snoring or congestion. </h5>
                        <div className='min-h-fit'>
                            <img className='lg:h-[585px] h-full w-full object-cover rounded-lg ' src={work} alt="" />
                        </div>
                    </div>
                    <div className='space-y-4'>

                        {/* card-1 */}
                        <div className='group bg-[#793f19] hover:bg-[#f97316] transition ease-in-out text-white rounded-xl '>
                            <div className='flex justify-end'>
                                <p style={{ borderRadius: '0px 10px 0px 20px' }} className=' bg-[#f97316] transition ease-in-out  group-hover:bg-[#793f19] px-4 py-1'>Step 1</p>

                            </div>
                            <h4 className='text-2xl font-semibold mt-2 mx-4'>Clean</h4>
                            <p className='font-normal text-sm pt-4 pb-7 mx-4'>Using the Applicator. apply one adhesive Tab to each side Of your nose. just above the nostrils. Press each Tab onto your skin to ensure complete contact. Wait a few minutes before attaching the band.</p>
                        </div>
                        {/* card-2 */}
                        <div className='group bg-[#793f19] hover:bg-[#f97316] transition ease-in-out text-white rounded-xl '>
                            <div className='flex justify-end'>
                                <p style={{ borderRadius: '0px 10px 0px 20px' }} className=' bg-[#f97316] transition ease-in-out  group-hover:bg-[#793f19] px-4 py-1'>Step 2</p>

                            </div>
                            <h4 className='text-2xl font-semibold mt-2 mx-4'>Apply</h4>
                            <p className='font-normal text-sm pt-4 pb-7 mx-4'>Using the Applicator. apply one adhesive Tab to each side Of your nose. just above the nostrils. Press each Tab onto your skin to ensure complete contact. Wait a few minutes before attaching the band.</p>
                        </div>
                        {/* card-3 */}
                        <div className='group bg-[#793f19] hover:bg-[#f97316] transition ease-in-out text-white rounded-xl '>
                            <div className='flex justify-end'>
                                <p style={{ borderRadius: '0px 10px 0px 20px' }} className=' bg-[#f97316] transition ease-in-out  group-hover:bg-[#793f19] px-4 py-1'>Step 3</p>

                            </div>
                            <h4 className='text-2xl font-semibold mt-2 mx-4'>Tab placement</h4>
                            <p className='font-normal text-sm pt-4  mx-4'>There are some tips to use I-I-Will.</p>
                            <ul className=' font-semibold text-base space-y-1 pb-7 mx-4 mt-2'>
                                <li className='flex items-center  text-xs font-semibold gap-1'> <GoDotFill size={10} className='text-white' />Steel disc placed directly above the nostril (not on thenostril)</li>
                                <li className='flex items-center  text-xs font-semibold gap-1'> <GoDotFill size={10} className='text-white' /> Contoured indent fits around the nostril</li>
                                <li className='flex items-center  text-xs font-semibold gap-1'> <GoDotFill size={10} className='text-white' /> 100% contact with skin on tho nose, not  the check Always be sure to apply the Tabs properly. If the Tabs aren't placed well, the Band will not attach well.</li>
                            </ul>
                        </div>
                        {/* card-4 */}
                        <div className='group bg-[#793f19] hover:bg-[#f97316] transition ease-in-out text-white rounded-xl '>
                            <div className='flex justify-end'>
                                <p style={{ borderRadius: '0px 10px 0px 20px' }} className=' bg-[#f97316] transition ease-in-out  group-hover:bg-[#793f19] px-4 py-1'>Step 4</p>

                            </div>
                            <h4 className='text-2xl font-semibold mt-2 mx-4'>Clean</h4>
                            <p className='font-normal text-sm pt-4 pb-7 mx-4'>Place the U-will band over your nose. The
                                magnetic ends of the Band will snap onto
                                the Tabs. <br /> Pro-tip: Make sure the Band is not upside down.
                                The magnets should be facing down..</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Solution;