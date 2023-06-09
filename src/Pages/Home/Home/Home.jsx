import React, { Children, useContext, useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Toys from '../Toys/Toys';
import OurSpecialty from '../ExtraSection/OurSpecialty';
import Subscribe from '../../ErrorPages/Subscribe';
import useTitle from '../../../Hooks/hooks';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';


const Home = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch("https://toy-zone.vercel.app/toys/")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    // console.log(toys);

    useTitle('Home')

    const {user} = useContext(AuthContext)


    return (
        <div>
            <div className="hero mt-12 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFjdGlvbiUyMGZpZ3VyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="md:max-w-lg rounded-lg shadow-2xl" />

                    </div>
                    <div className='lg:ml-8 ' data-aos="fade-left">
                        <h1 className="text-5xl font-bold">We make your children happier with the best toys</h1>
                        <p className="py-6">We have products for all ages. Our assistants always help you to do right choice. A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
                        <button className="my-btn">
                            {user ? <Link to="/addToy">Add toys</Link> : <Link to="/alltoys">All toys</Link> }
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <Gallery />

            {/* Toys tabs  */}
            <Toys />

            {/* Extra two section */}
            <OurSpecialty></OurSpecialty>

            <Subscribe />
        </div>
    );
};

export default Home;