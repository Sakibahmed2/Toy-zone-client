import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const Toys = () => {
    const [tab, setTab] = useState()
    const [toys, setToys] = useState([])

    const handleTabs = (click) => {
        setTab(click)
        console.log(click);
    }

    useEffect(() =>{
        fetch(`https://toy-zone.vercel.app/toys/${tab}`)
        .then(res => res.json())
        .then(data => setToys(data) )
    },[tab])

    return (
        <div>
            <div className="tabs tabs-boxed bg-white flex justify-center">
                <a
                    onClick={() => handleTabs('spider man')}
                    className={`tab ${tab == "spider man" ? 'text-white bg-indigo-600': '' }`}
                >Spider Men</a>

                <a
                    onClick={() => handleTabs('Iron Man')}
                    className={`tab ${tab == "Iron Man" ? 'text-white bg-indigo-600': '' }`}
                >Iron Men</a>

                <a
                    onClick={() => handleTabs('hulk')}
                    className={`tab ${tab == "hulk" ? 'text-white bg-indigo-600': '' }`}
                >Hulk</a>
            </div>

            {/* Toys card  */}
            <div className='container mx-auto grid  lg:grid-cols-2 gap-8'>
                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Toys;