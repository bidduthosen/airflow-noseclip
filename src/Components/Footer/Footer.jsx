import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <div className='bg-[#6B2B00] pt-16 pb-6'>
            <div className='lg:container mx-auto px-5 md:px-10'>
                <div className='w-3/6 mx-auto text-center text-white'>
                    <h2 className='font-semibold text-5xl pb-3'>Get in Touch</h2>
                    <p className='font-medium text-base'>Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.</p>
                    <button className=" btn bg-[#f97316] rounded-3xl text-white  border-none shadow-none py-5 my-9">Order Now <FaArrowRight className='text-white' /></button>
                    <p className='font-medium text-base py-4'>©Copyright  Nasal clip.com. All rights reserved. 2024</p>
                </div>
            </div>
            <hr />
            <div className='lg:container mx-auto px-5 md:px-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-white mt-5'>
                    <ul className='flex items-center lg:justify-start justify-center gap-10'>
                        <li className='font-medium text-base'>Privacy & Policy</li>
                        <li className='font-medium text-base'>Terms & Condition</li>
                    </ul>
                    <ul className='flex items-center justify-center gap-10'>
                        <li className='font-medium text-base'>Home</li>
                        <li className='font-medium text-base'>Resources</li>
                        <li className='font-medium text-base'>FAQ</li>
                    </ul>
                    <div className='flex lg:justify-end justify-center gap-3'>
                        <BsDiscord size={50} className='border border-white p-3 rounded-lg' />
                        <FaTwitterSquare size={50} className='border border-white p-3 rounded-lg' />
                        <FaInstagram size={50} className='border border-white p-3 rounded-lg' />
                        <FaLinkedin size={50} className='border border-white p-3 rounded-lg' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;