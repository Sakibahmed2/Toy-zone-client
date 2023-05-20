import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";


const MyToysTable = ({ toy, toys, setToys }) => {
    // console.log(toy);

    const handleDelete = id => {
        const proceed = confirm('Are you want to delete this toy');
        if (proceed) {
            fetch(`https://toy-zone-assignment.vercel.app/deleteToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your toy has been deleted.',
                            'success'
                        )
                        const previous = toys.filter(toyy => toyy._id !== id);
                        setToys(previous);
                    }

                })
        }
    }

    const { _id, image_link, toy_name, quantity, seller_name, seller_email, category, price, rating, description } = toy || {};
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
                <button className='my-btn '>
                    <Link to={`/updateToys/${_id}`}>Update</Link>
                </button>
                <button onClick={() => handleDelete(_id)} className=' bg-red-500 hover:bg-red-600 px-3 py-3 text-white rounded-md font-semibold border-none ml-4'>Delete</button>
            </td>
        </tr>

    );
};

export default MyToysTable;