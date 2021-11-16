
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:4000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }


    return (
        <div>
            <div className="add-service my-5">
                <h2 className="text-center mt-5 mb-4 pt-5">Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="price" />
                    <input {...register("img")} placeholder="image url" />
                    <input className="btn btn-success mb-5 " type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;