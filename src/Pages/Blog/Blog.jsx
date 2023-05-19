import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2 gap-6 container my-12 mx-auto'>
            <div className='border-4 p-4 rounded-xl transition duration-500 ease-in-out hover:border-indigo-500 hover:shadow-lg dark:hover:shadow-black/30'>
                <h3 className='text-2xl font-semibold'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='pt-4'>An access token is a credential that is used to access protected resources on an API or server. It is usually a string of characters that represents the authenticated user or client. A refresh token is a long-lived credential that is used to obtain a new access token after the current one expires. It is usually issued alongside the access token during the initial authentication process. </p>
            </div>
            <div className='border-4 p-4 rounded-xl transition duration-500 ease-in-out hover:border-rose-500 hover:shadow-lg dark:hover:shadow-black/30'>
                <h3 className='text-2xl font-semibold'>2. Compare SQL and NoSQL databases?</h3>
                <p className='pt-4'>SQL databases are structured, enforce data integrity, use SQL for query, scale vertically, and are suitable for structured data and complex operations. NoSQL databases have flexible , scale horizontally, use specialized query languages, handle unstructured data well, and prioritize high performance and scalability. </p>
            </div>
            <div className='border-4 p-4 rounded-xl transition duration-500 ease-in-out hover:border-teal-500 hover:shadow-lg dark:hover:shadow-black/30'>
                <h3 className='text-2xl font-semibold'>3. What is express js? What is Nest JS </h3>
                <p className='pt-4'>Express.js is a minimalist and flexible web application framework for Node.js, while Nest.js is an opinionated and full-featured framework built on top of Express.js, providing a structured and modular architecture inspired by Angular for building scalable and maintainable server-side applications. </p>
            </div>
            <div className='border-4 p-4 rounded-xl transition duration-500 ease-in-out hover:border-blue-500 hover:shadow-lg dark:hover:shadow-black/30'>
                <h3 className='text-2xl font-semibold'>4. What is MongoDB aggregate and how does it work  </h3>
                <p className='pt-4'>
                    The aggregate function in MongoDB is part of the aggregation framework, which allows you to perform advanced data processing and analysis on a collection.  The framework supports a wide range of operators and functions to perform various computations and transformations. The result of an aggregate operation is a cursor that can be iterated over to retrieve the aggregated data.</p>
            </div>
        </div>
    );
};

export default Blog;