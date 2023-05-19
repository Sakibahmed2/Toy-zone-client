import Rating from 'react-rating';
import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {



    // console.log(toy);
    const { description, image_link,_id, rating, toy_name } = toy
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl lg:py-12 lg:pl-8">
                <img src={image_link} className='h-72 transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30' alt="" />
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>{description}</p>
                    <div>
                        <span><Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />}
                        /></span>
                        <span className='ml-4'>
                            {rating}
                        </span>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="my-btn">
                            <Link to={`/toyDetail/${_id}`} >Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;