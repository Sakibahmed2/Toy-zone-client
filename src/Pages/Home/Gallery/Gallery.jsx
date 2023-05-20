import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-28 container mx-auto'>
            <h2 className='text-4xl font-semibold text-center'>Toy gallery</h2>
            <div className='grid lg:grid-cols-3 gap-8 container mx-auto mt-8'>
                <img className='max-w-sm transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30 p-4 border-2 hover:border-teal-300' src="https://images.unsplash.com/photo-1608272841063-67f50df421c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym95JTIwcGxheWluZyUyMHdpdGglMjBhY3Rpb24lMjBmaWd1cmUlMjBtYXJ2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />


                <img className='max-w-sm transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30 p-4 border-2 hover:border-yellow-300' src="https://images.unsplash.com/photo-1593067401452-a1ac88689702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbm1hbiUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />


                <img className='max-w-sm transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30 p-4 border-2  shadow-lg hover:border-red-300' src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BpZGVybWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />

                <img className='h-[270px] max-w-sm transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30 p-4 border-2  shadow-lg hover:border-red-300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKwO_x9oNJHxPJXrQ_SBdVIkCOoPkceRTJw&usqp=CAU" alt="" />

                <img className='max-w-sm transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30 p-4 border-2  shadow-lg hover:border-red-300' src="https://images.immediate.co.uk/production/volatile/sites/3/2021/09/spider-man-2-2023-4255476.png" alt="" />

                <img className='max-w-sm transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30 p-4 border-2  shadow-lg hover:border-teal-300' src="https://images.unsplash.com/photo-1562613531-a131faf45335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVsa3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    );
};

export default Gallery;