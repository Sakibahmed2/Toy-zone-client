import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {
    // console.log(toy);
    const { _id, quantity, toy_name, price,  seller_name, category } = toy || {};


    return (
        <tr className='text-lg font-semibold'>
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