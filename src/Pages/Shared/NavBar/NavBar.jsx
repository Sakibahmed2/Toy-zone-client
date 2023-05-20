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
        <div className='container mx-auto mt-4'>
            <div className="navbar lg:flex flex-col lg:flex-row lg:justify-between  items-center">
                <div>
                    <img className='lg:w-20 w-12' src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?size=626&ext=jpg&ga=GA1.1.868909325.1665327837&semt=ais" alt="" />
                    <h2 className="normal-case font-bold lg:text-4xl ml-28 my-text hover:text-indigo-500">Toy zone</h2>
                </div>
                <div className='text-lg items-center flex-col lg:flex-row font-semibold'>
                    <button><Link to='/'>Home</Link></button>
                    <button> <Link className='mx-12' to='/alltoys'>All toys</Link>
                    </button>
                    <button><Link to='/blog'>Blog</Link></button>

                    {
                        user ? <>
                            <button><Link className='mx-12' to='/myToys'>My toys</Link></button>
                            <button><Link to='/addToy'>Add a toys</Link></button>
                            <button onClick={handleSingOut} className='ml-12' >Sing Out</button>

                        </>
                            :

                            <button><Link className='ml-12' to='/login'>Login</Link></button>
                    }

                    {
                        user &&
                        <div className='tooltip tooltip-bottom absolute top-5 left-40 lg:left-0 lg:relative lg:top-0 right-40 bottom-10 lg:right-0 lg:bottom-0' data-tip={user?.displayName}>
                            <img src={user?.photoURL} className='lg:w-12 lg:h-12 w-8 h-8 rounded-full  tooltip mr-8 border' alt="" />
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;