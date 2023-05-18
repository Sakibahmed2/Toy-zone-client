import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const [error, setError] = useState(null)

    const {createUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        if (password.length < 6) {
            setError('password at last be 6 characters')
            return;
        }

        createUser(email, password)
        .then(result =>{
            const newUser = result.user;
            result.user.displayName = name;
            result.user.photoURL = photo
            console.log(newUser);
        })
        .catch(error =>{
            console.log(error);
        })

        form.reset()

    }


    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body w-[330px] md:w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>

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

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="photo url" name='photo' className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have account</Link>
                            </label>
                            {error && <p className='text-error'>{error}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn my-btn border-none">Register</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;