import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'


const AddToy = () => {

    const { user } = useContext(AuthContext)
    console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const image_link = form.photo.value;
        const toy_name = form.name.value;
        const quantity = form.quantity.value;
        const seller_name = form.sellerName.value;
        const seller_email = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const newToy = { image_link, toy_name, quantity, seller_name, seller_email, category, price, rating, description }
        console.log(newToy);



        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit}>
                {/*  photo url  */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="url" name='photo' placeholder="Enter  photo url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*name and quantity  */}
                <div className='flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Enter toy name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-14">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*  seller name and email  */}
                <div className='flex'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellerName'
                                defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-14">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellerEmail' defaultValue={user?.email} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/*  category , rating and price  */}
                <div className='flex gap-8 mt-4'>
                    <div className="form-control lg:w-1/3">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <select name="category" className='input input-bordered w-full'>
                                <option value="spider man">Spider Man</option>
                                <option value="Iron Man">Iron Man</option>
                                <option value="hulk">Hulk</option>
                            </select>
                            {/* // <input type="text" name='category' placeholder="Enter category" className="input input-bordered w-full" /> */}
                        </label>
                    </div>
                    <div className="form-control lg:w-1/3 ">
                        <label className="label">
                            <span className="label-text">Toy price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Enter toy price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Enter toy rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Description */}
                <div className='flex'>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Toy description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='description' placeholder='Toy description' className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add toy" className='py-3 mt-3 my-btn w-full' />
            </form>
        </div>
    );
};

export default AddToy;