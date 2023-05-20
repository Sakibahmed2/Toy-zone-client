import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';
import useTitle from '../../Hooks/hooks';

const AllToys = () => {
    // const toys = useLoaderData()
    const [search, setSearch] = useState()
    const [toys , setToys] = useState([])


    const dataLimit = 20;

    useEffect(() =>{
        fetch(`https://toy-zone-assignment.vercel.app/toys?limit=${dataLimit}`)
        .then(res => res.json())
        .then(data =>{
            setToys(data)
        })
    },[])


    const handleSearch = () =>{
        fetch(`https://toy-zone-assignment.vercel.app/searchToyName/${search}`)
        .then(res => res.json())
        .then(data =>{
            setToys(data);
        })
    }


    useTitle('All toy')

    return (
        <div className='container mx-auto'>
            <div className='flex justify-center mb-8'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    className="p-1 border border-black rounded-md"
                    placeholder='Search'
                />
                <button onClick={handleSearch} className='bg-indigo-500 hover:bg-indigo-600 px-3 rounded-md font-semibold text-white'>Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysTable
                                key={toy._id}
                                toy={toy}
                            ></AllToysTable>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;