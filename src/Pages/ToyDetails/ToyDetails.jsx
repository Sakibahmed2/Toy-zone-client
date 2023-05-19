import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';



const ToyDetails = () => {
    const toys = useLoaderData()
    console.log(toys);
    const { image_link, toy_name, quantity, seller_name, seller_email, category, price, rating, description } = toys || {};
    return (
        <div className='mt-8'>

            <div className=" min-h-fit bg-base-100 pb-40">
                <div className="hero-content flex-col lg:flex-row w-3/4 pt-16 mx-auto">
                    <figure><img src={image_link} className="rounded-lg h-96 shadow-2xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30" /></figure>
                    <div className='ml-8'>
                        <h1 className="text-5xl font-bold">{toy_name}</h1>
                        <p className='py-6'>{description}</p>
                        <div className='grid grid-cols-2 gap-2 mt-12'>
                            <p className='font-semibold text-lg'>Seller name : {seller_name}</p>
                            {seller_email && <p className='font-semibold text-lg'>Seller email : {seller_email}</p>}
                            <p className='font-semibold text-lg' >Seller name : {seller_name}</p>
                            <p className='font-semibold text-lg'>Price : {price}</p>
                            <span className='font-semibold text-lg'>Rating :  <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;