import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const AllToysTable = ({ toy }) => {
    console.log(toy);
    const { name, quantity, price, brand, category } = toy || {};


    return (
        <div>


            <tr>
                <td>{brand}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
            </tr>


        </div>
    );
};

export default AllToysTable;