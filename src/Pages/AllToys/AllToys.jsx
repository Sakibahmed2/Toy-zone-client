import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysTable from './AllToysTable';

const AllToys = () => {

    const toys = useLoaderData()
    // console.log(toys);

    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>location</th>
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