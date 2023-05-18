import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSingOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error) })
    }


    return (
        <div className='container mx-auto'>
            <div className="navbar lg:flex lg:justify-between items-center">
                <div>
                    <img className='w-28' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyQtLI870ha38kUm2BvywcisdcrHvzKSH3Xy5qtymjA&s" alt="" />
                    <h2 className="normal-case font-bold text-4xl ml-28 my-text hover:text-amber-600">Toy zone</h2>
                </div>
                <div className='text-lg flex font-semibold'>
                    <Link to='/'>Home</Link>
                    <Link className='mx-12' to='/alltoys'>All toys</Link>
                    <Link to='/'>Blog</Link>

                    {
                        user ? <>
                            <Link className='mx-12' to='/'>My toys</Link>
                            <Link to='/'>Add a toys</Link>
                            <button onClick={handleSingOut} className='ml-12' >Sing Out</button>

                        </>
                            :

                            <Link className='ml-12' to='/login'>Login</Link>
                    }

                    {
                        user &&
                        <div className='tooltip tooltip-bottom relative right-40 bottom-10 lg:right-0 lg:bottom-0' data-tip={user?.displayName}>
                            <img src={user?.photoURL} className='w-12 h-12 rounded-full  tooltip mr-8 border' alt="" />
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;