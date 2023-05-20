import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";



const OurSpecialty = () => {
    return (
        <>
            <h2 className='text-4xl font-semibold text-center border-b-2 p-4 w-2/4 mx-auto rounded-xl mt-32 mb-8 '>Our <span className='text-indigo-600'>specialty</span></h2>
            <div className='lg:flex lg:justify-around '>
                <div className='border-4  w-96 h-64 text-center px-3 rounded-xl transition duration-500 ease-in-out hover:border-indigo-500'>
                    <span className='text-7xl flex justify-center mt-6 text-center'><FaShippingFast /></span>
                    <h2 className='text-3xl font-semibold mt-6'>Free Shipping</h2>
                    <p className='text-gray-600 mt-2'>Free Shipping Bonanza: Shop Your Heart Out Without Extra Charges</p>
                </div>
                <div className='border-4 my-12 lg:my-0 w-96 h-64 text-center px-3 rounded-xl transition duration-500 ease-in-out hover:border-indigo-500'>
                    <span className='text-7xl flex justify-center mt-6 text-center'><AiOutlineFieldTime /></span>
                    <h2 className='text-3xl font-semibold mt-6'>Support 24/7</h2>
                    <p className='text-gray-600 mt-2'>24/7 Customer Care: We're Committed to Serving You Anytime, Anywhere</p>
                </div>
                <div className='border-4  w-96 h-64 text-center px-3 rounded-xl transition duration-500 ease-in-out hover:border-indigo-500'>
                    <span className='text-7xl flex justify-center mt-6 text-center'><RiMoneyDollarCircleLine /></span>
                    <h2 className='text-3xl font-semibold mt-6'>Support 24/7</h2>
                    <p className='text-gray-600 mt-2'>24/7 Customer Care: We're Committed to Serving You Anytime, Anywhere</p>
                </div>
            </div>
        </>
    );
};

export default OurSpecialty;