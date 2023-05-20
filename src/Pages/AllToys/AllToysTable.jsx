import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {
    // console.log(toy);
    const { image_link, _id, quantity, toy_name, price, seller_name, category } = toy || {};


    return (
        <tr className='text-lg font-semibold'>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image_link} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button className='my-btn'>
                    <Link to={`/toyDetail/${_id}`}>Details</Link>
                </button>
            </td>
        </tr>
    );
};

export default AllToysTable;