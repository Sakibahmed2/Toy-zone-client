import React from 'react';
import { AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";

const Subscribe = () => {
    return (
        <div className='mt-32'>
            <div className=' bg-indigo-100 h-[450px]'>
                <div className='text-center pt-16'>
                    <span className='flex justify-center text-9xl '><AiOutlineMail /></span>
                    <h4 className='text-6xl font-semibold text-current'>Subscribe For Offer!</h4>
                    <p className='mt-6 text-gray-700'>NEWSLETTER SIGNUP</p>
                </div>
                <div className='flex justify-center mt-8'>
                    <input type="text" placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs bg-transparent placeholder:text-black " />
                    <button className='my-btn w-12 text-xl'><AiOutlineArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;