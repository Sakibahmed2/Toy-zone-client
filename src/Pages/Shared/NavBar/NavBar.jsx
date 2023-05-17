import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar lg:flex lg:justify-between items-center">
                <div>
                    <img className='w-28' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyQtLI870ha38kUm2BvywcisdcrHvzKSH3Xy5qtymjA&s" alt="" />
                    <h2 className="normal-case font-bold text-4xl ml-28 text-amber-700 hover:text-amber-600">Toy zone</h2>
                </div>
                <div className='text-lg flex font-semibold'>
                    <Link to='/'>Home</Link>
                    <Link className='mx-12' to='/'>All toys</Link>
                    <Link to='/'>My toys</Link>
                    <Link className='mx-12' to='/'>Add toys</Link>
                    <Link to='/'>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;