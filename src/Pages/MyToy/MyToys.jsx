import React, { useContext, useEffect, useState } from 'react';
import MyToysTable from './MyToysTable';
import { AuthContext } from '../../Providers/AuthProviders';

const MyToys = () => {
    const [toys, setToys] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://toy-zone-assignment.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys);


    return (
        <div>
            <div className="overflow-x-auto w-full container mx-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Toy neme</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToysTable
                            key={toy._id}
                            toy={toy}
                            toys={toys}
                            setToys={setToys}
                            ></MyToysTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;