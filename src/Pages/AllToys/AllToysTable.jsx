import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const AllToysTable = ({ toy }) => {
    console.log(toy);
    const { name, quantity, toy_name, price, brand, category } = toy || {};


    return (
        <tr className='text-lg font-semibold'>
            <td>{brand}</td>
            <td>{toy_name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button className='my-btn'>Detail</button>
            </td>
        </tr>
    );
};

export default AllToysTable;