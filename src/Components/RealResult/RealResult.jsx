import React from 'react';
import after from '../../assets/solution/after.png'
import before from '../../assets/solution/before.png'
import { RiCloseCircleFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";


const RealResult = () => {
    return (
        <div className='lg:container mx-auto px-5 md:px-10 mt-20 mb-20'>
            <div className='w-3/5 mx-auto text-center'>
                <h2 className='font-semibold text-5xl pb-3'>Real Results You <br /> Can Feel </h2>
                <p className='font-medium text-base pb-12'>See the difference our nasal clip can make <br /> for snoring and airflow.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                {/* cart 1 */}
                <div>
                    <div>
                        <img className='w-full object-fill' src={after} alt="" />
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-12'>
                            <RiCloseCircleFill size={30} className='' />
                            <h3 className='font-semibold text-2xl'>Flimsy</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips have very little structure. When you inhale, they can still collapse,</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <RiCloseCircleFill size={30} className='' />
                            <h3 className='font-semibold text-2xl'>Unsupportive</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips don't hold your nose open as wide as Intake.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <RiCloseCircleFill size={30} className='' />
                            <h3 className='font-semibold text-2xl'>Falls off</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Don't wake up With your nasal strip stuck to your Pillow again.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <RiCloseCircleFill size={30} className='' />
                            <h3 className='font-semibold text-2xl'>Hurts your skin</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips stick to the bridge of your nose using an aggressive adhesive. When you pull it off, your skin goes with it,</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <RiCloseCircleFill size={30} className='' />
                            <h3 className='font-semibold text-2xl'>Pulls forward</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips rely on the leverage of your nose bridge to widen the</p>
                    </div>
                </div>

                {/* cart 2 */}
                <div>
                    <div>
                        <img className='w-full object-fill' src={before} alt="" />
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-12'>
                            <FaCheckCircle size={30} className='text-[#f97316]' />
                            <h3 className='font-semibold text-2xl'>Actually opens your nose</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips have very little structure. When you inhale, they can still collapse,</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <FaCheckCircle size={30} className='text-[#f97316]' />
                            <h3 className='font-semibold text-2xl'>Durable</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips don't hold your nose open as wide as Intake.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <FaCheckCircle size={30} className='text-[#f97316]' />
                            <h3 className='font-semibold text-2xl'>Stays on all day/night</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Don't wake up With your nasal strip stuck to your Pillow again.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <FaCheckCircle size={30} className='text-[#f97316]' />
                            <h3 className='font-semibold text-2xl'>Skin safe</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips stick to the bridge of your nose using an aggressive adhesive. When you pull it off, your skin goes with it,</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 pt-7'>
                            <FaCheckCircle size={30} className='text-[#f97316]' />
                            <h3 className='font-semibold text-2xl'>Pulls outward</h3>
                        </div>
                        <p className='font-normal text-base pt-3 text-gray-700'>Nasal strips rely on the leverage of your nose bridge to widen the</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealResult;