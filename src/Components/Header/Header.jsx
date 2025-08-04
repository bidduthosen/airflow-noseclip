import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='lg:container mx-auto px-5 md:px-10 mt-6'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Features</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQS</a></li>
                            <li><a>Shop Bundles</a></li>
                        </ul>
                    </div>
                    <a className=" text-xl text-[#f97316]">Airflow NoseClip</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQS</a></li>
                        <li><a>Shop Bundles</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#f97316] rounded-3xl text-white">Contact Us <FaArrowRight className='text-white' /></button>
                </div>
            </div>
        </div>
    );
};

export default Header;