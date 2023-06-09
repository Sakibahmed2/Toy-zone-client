import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/hooks';

const UpdateToy = () => {

    const toy = useLoaderData()

    const id = toy._id;

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const _id = id;

        const newUpdate = { quantity, price, description, _id }
        console.log(newUpdate);

        fetch(`https://toy-zone-assignment.vercel.app/updateToys/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUpdate),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })





    }

    useTitle('Update toy')

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleUpdate}>
                <div className='grid grid-cols-2 gap-6'>
                    <div className="form-control  ">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available quantity" defaultValue={toy?.quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Toy price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Enter toy price" defaultValue={toy?.price} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text">Toy description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='description' defaultValue={toy?.description} placeholder='Toy description' className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Update" className='py-3 mt-3 my-btn w-full' />
            </form>
        </div>
    );
};

export default UpdateToy;