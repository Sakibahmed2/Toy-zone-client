import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-28 container mx-auto'>
            <h2 className='text-4xl font-semibold text-center'>Toy gallery</h2>
            <div className='grid grid-cols-2 gap-6 mt-8'>
                <div className='rounded-xl p-4 flex items-center'>
                    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30' src="https://images.unsplash.com/photo-1608272841063-67f50df421c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym95JTIwcGxheWluZyUyMHdpdGglMjBhY3Rpb24lMjBmaWd1cmUlMjBtYXJ2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className='ml-6'>
                        <h4 className='text-3xl font-semibold'>Hulk Smash</h4>
                        <p>Overall, Hulk toys provide fans of all ages with the opportunity to bring the incredible power and excitement of the character into their own hands, allowing for imaginative play, collection, or display.</p>
                    </div>
                </div>
                <div className='rounded-xl p-4 flex items-center'>
                    <img className='max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-xl hover:shadow-lg dark:hover:shadow-black/30' src="https://images.unsplash.com/photo-1593067401452-a1ac88689702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbm1hbiUyMHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className='ml-6'>
                        <h4 className='text-3xl font-semibold'>I am Iron Man</h4>
                        <p>Iron Man toys are action figures and collectibles inspired by the character from Marvel Comics and the Marvel Cinematic Universe. These toys aim to capture the high-tech armor and charismatic persona of Iron Man</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Gallery;