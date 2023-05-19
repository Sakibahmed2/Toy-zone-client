import React from 'react';

const MyToysTable = ({ toy }) => {
    console.log(toy);

    const { image_link, toy_name, quantity, seller_name, seller_email, category, price, rating, description } = toy || {};
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image_link} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="font-bold">{toy_name}</div>
                </div>
            </td>
            <td>
                {category}
            </td>
            <td>{price}</td>
            <td>
                {quantity}
            </td>
            <td>
                <button className='my-btn '>Update</button>
                <button className=' bg-red-500 hover:bg-red-600 px-3 py-3 text-white rounded-md font-semibold border-none ml-4'>Delete</button>
            </td>
        </tr>

    );
};

export default MyToysTable;