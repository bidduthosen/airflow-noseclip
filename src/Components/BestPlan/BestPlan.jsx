import React from 'react';
import checkIcon from '../../assets/svg/Check icon.png'
import { FaStar } from "react-icons/fa6";

const BestPlan = () => {
    return (
        <div className='lg:container mx-auto px-5 md:px-10 py-10 mb-6'>
            <div>
                <h1 className='font-semibold text-5xl text-[#f97316] text-center py-12 mb-8'>Choose the Best Plan for You</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>


                {/* cart -1 */}
                <div className='group border border-gray-300 hover:border-[#f97316] rounded-xl transform hover:scale-[1.07] transition-all duration-300'>
                    <div className='text-center bg-[#FFF0E6] group-hover:bg-[#f97316] rounded-xl py-5'>
                        <h2 className='font-semibold text-2xl '>1-month supply</h2>
                        <span className='text-base font-medium'>30 Tabs</span>
                    </div>
                    <h1 className='w-2/5 mx-auto text-center font-bold text-3xl border-b border-gray-300 group-hover:border-[#f97316] pb-4 pt-10'>$29.99</h1>
                    <h4 className='pb-10 text-center text-[#f97316] pt-4 font-semibold text-xl'>(5% discount)</h4>
                    <div className='flex justify-center mb-4'>
                        <button className="btn border group-hover:bg-[#f97316] group-hover:text-white border-[#f97316]  text-[#f97316] rounded-xl w-2/4 mx-auto ">Buy Now </button>
                    </div>
                    <div className=' font-semibold text-base space-y-4 px-5 mb-5'>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>60 days Money back guarantee</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Whole Starter kit</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free Returns</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free shipping with every bundle after 3 month supply</span></div>
                    </div>
                    <div className='flex items-center space-x-2 mb-8 px-5 '>
                        <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /><FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' />  <span className='text-lg font-semibold'>4.5</span> <span className='text-base'>(500+ Reviews)</span>
                    </div>
                </div>

                {/* cart -2 */}
                <div className='group border border-gray-300 hover:border-[#f97316] rounded-xl transform hover:scale-[1.07] transition-all duration-300'>
                    <div className='text-center bg-[#FFF0E6] group-hover:bg-[#f97316] rounded-xl py-5'>
                        <h2 className='font-semibold text-2xl '>3-month supply</h2>
                        <span className='text-base font-medium'>90 Sticky Tabs</span>
                    </div>
                    <h1 className='w-2/5 mx-auto text-center font-bold text-3xl border-b border-gray-300 group-hover:border-[#f97316] pb-4 pt-10'>$69.99</h1>
                    <h4 className='pb-10 text-center text-[#f97316] pt-4 font-semibold text-xl'>(10% discount)</h4>
                    <div className='flex justify-center mb-4'>
                        <button className="btn border group-hover:bg-[#f97316] group-hover:text-white border-[#f97316]  text-[#f97316] rounded-xl w-2/4 mx-auto ">Buy Now </button>
                    </div>
                    <div className=' font-semibold text-base space-y-4 px-5 mb-5'>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>60 days Money back guarantee</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Whole Starter kit</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free Returns</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free shipping with every bundle after 3 month supply</span></div>
                    </div>
                    <div className='flex items-center space-x-2 mb-8 px-5 '>
                        <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /><FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' />  <span className='text-lg font-semibold'>4.5</span> <span className='text-base'>(500+ Reviews)</span>
                    </div>
                </div>

                {/* cart -3 */}
                <div className='group border border-gray-300 hover:border-[#f97316] rounded-xl transform hover:scale-[1.07] transition-all duration-300'>
                    <div className='text-center bg-[#FFF0E6] group-hover:bg-[#f97316] rounded-xl py-5'>
                        <h2 className='font-semibold text-2xl '>6-month supply</h2>
                        <span className='text-base font-medium'>120 Sticky Tabs</span>
                    </div>
                    <h1 className='w-2/5 mx-auto text-center font-bold text-3xl border-b border-gray-300 group-hover:border-[#f97316] pb-4 pt-10'>$199.99</h1>
                    <h4 className='pb-10 text-center text-[#f97316] pt-4 font-semibold text-xl'>(15% discount)</h4>
                    <div className='flex justify-center mb-4'>
                        <button className="btn border group-hover:bg-[#f97316] group-hover:text-white border-[#f97316]  text-[#f97316] rounded-xl w-2/4 mx-auto ">Buy Now </button>
                    </div>
                    <div className=' font-semibold text-base space-y-4 px-5 mb-5'>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>60 days Money back guarantee</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Whole Starter kit</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free Returns</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free shipping with every bundle after 3 month supply</span></div>
                    </div>
                    <div className='flex items-center space-x-2 mb-8 px-5 '>
                        <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /><FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' />  <span className='text-lg font-semibold'>4.5</span> <span className='text-base'>(500+ Reviews)</span>
                    </div>
                </div>

                {/* cart -4 */}
                <div className='group border border-gray-300 hover:border-[#f97316] rounded-xl transform hover:scale-[1.07] transition-all duration-300'>
                    <div className='text-center bg-[#FFF0E6] group-hover:bg-[#f97316] rounded-xl py-5'>
                        <h2 className='font-semibold text-2xl '>12-month supply</h2>
                        <span className='text-base font-medium'>220 Sticky Tabs</span>
                    </div>
                    <h1 className='w-2/5 mx-auto text-center font-bold text-3xl border-b border-gray-300 group-hover:border-[#f97316] pb-4 pt-10'>$299.99</h1>
                    <h4 className='pb-10 text-center text-[#f97316] pt-4 font-semibold text-xl'>(20% discount)</h4>
                    <div className='flex justify-center mb-4'>
                        <button className="btn border group-hover:bg-[#f97316] group-hover:text-white border-[#f97316]  text-[#f97316] rounded-xl w-2/4 mx-auto ">Buy Now </button>
                    </div>
                    <div className=' font-semibold text-base space-y-4 px-5 mb-5'>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>60 days Money back guarantee</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Whole Starter kit</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free Returns</span></div>
                        <div className='flex items-center gap-2 '><img className='h-6 object-cover' src={checkIcon} alt="" />  <span className='text-[#475467] text-sm'>Free shipping with every bundle after 3 month supply</span></div>
                    </div>
                    <div className='flex items-center space-x-2 mb-8 px-5 '>
                        <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /><FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' /> <FaStar size={18} className='text-[#FFC107]' />  <span className='text-lg font-semibold'>4.5</span> <span className='text-base'>(500+ Reviews)</span>
                    </div>
                </div>

                
            </div>

        </div>
    );
};

export default BestPlan;