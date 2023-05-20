import Rating from 'react-rating';
import React, { useContext } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProviders';

const ToyCard = ({ toy }) => {

    const { user } = useContext(AuthContext)


    const hndleSweetAlart = () => {
        if (!user) {
            Swal.fire({
                title: 'You have to log in first to view details',
                icon: 'question',
                confirmButtonText: 'Login'
            })
        }
    }


    // console.log(toy);
    const { description, price, image_link, _id, rating, toy_name } = toy
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl lg:py-12 lg:pl-8">
                <img src={image_link} className='h-72 w-36 transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30' alt="" />
                <div className="card-body">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>{description}</p>
                    <div className='grid grid-cols-1 gap-4 mt-4'>

                        <span className='font-semibold'>
                            Toy name : {toy_name}
                        </span>
                        <div>
                            <span className='mr-12 font-semibold'>
                                Price : {price}
                            </span>
                            <span><Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            />
                                {rating}
                            </span>

                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="my-btn">
                            <Link onClick={hndleSweetAlart} to={`/toyDetail/${_id}`} >Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;