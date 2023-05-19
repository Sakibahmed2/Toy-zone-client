import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {
    console.log(toy);
    const { name, quantity, toy_name, price,  seller_name, category } = toy || {};


    return (
        <tr className='text-lg font-semibold'>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button className='my-btn'>
                    <Link to='/toyDetail' >Detail</Link>
                </button>
            </td>
        </tr>
    );
};

export default AllToysTable;