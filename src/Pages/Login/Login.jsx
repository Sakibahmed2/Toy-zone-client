import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hooks/hooks';


const Login = () => {

    const { setUser, singIn, googleSingIn } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                const loginUser = result.user
                console.log(loginUser);
                setUser(loginUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    const handleSingIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        singIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

        form.reset()
    }

    useTitle('Login')

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingIn} className="card-body  w-[330px] md:w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <p>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn my-btn border-none">Login</button>
                            </div>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Create a new account</Link>
                            </label>
                            <div className='text-center mt-4 '>
                                <div className="divider">OR</div>
                                <br />
                                <button onClick={handleGoogleSingIn} className='text-white text-2xl bg-yellow-700 py-2 px-24 border-none mt-2 rounded-md'><FaGoogle /></button>
                                <br />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;