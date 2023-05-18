import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <div className='flex container'>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?size=626&ext=jpg&ga=GA1.2.868909325.1665327837&semt=sph" alt="" />
            <div>
                <div className='container flex items-center justify-center px-5 mx-auto mt-48'>
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-red-500'>
                            <span className='sr-only'>Error</span>
                            {status || 404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl text-red-500 mb-8'>
                            {error?.message}
                        </p>
                    </div>
                </div>
                <Link to='/' className='flex justify-center'>
                    <button className='btn my-btn border-none'>Go to home</button>
                </Link>
            </div>
        </div>

    );
};

export default ErrorPage;