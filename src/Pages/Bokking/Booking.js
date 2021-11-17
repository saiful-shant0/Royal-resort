import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFirebase from '../../Hooks/userFirebase';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const { user } = useFirebase();
    const [service, setService] = useState([]);


    const { name, price, img, description } = service;


    useEffect(() => {
        fetch(`https://enigmatic-tor-88681.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))


    }, [serviceId]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {


        fetch('https://enigmatic-tor-88681.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Processed Successfully')

                    reset();
                }
            })
    };


    return (
        <div>
            <div className="container pb-5 mt-3" >

                <div className="row g-2">
                    <div className="col-md-6">
                        <div className="text-center container shadow-lg p-3 my-5 bg-white rounded">

                            <img className="img-fluid" src={img} alt="" />
                            <h2> {name} </h2>
                            <h4>Price: {price}</h4>
                            <h6>{description}</h6>

                        </div>

                    </div>

                    <div className="col-md-6 mt-4 " >

                        <div className="mt-5">
                            {name && user && price &&
                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                    <h4>Confirm Your Booking</h4>
                                    <input defaultValue={user.displayName} {...register("name", { required: true })} />

                                    <input readOnly defaultValue={name} {...register("serviceName")} />
                                    <input readOnly defaultValue={price} {...register("price")} />

                                    <input defaultValue={user.email} {...register("email")} />

                                    <input placeholder="Address" defaultValue="" {...register("address")} />

                                    <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                                    {errors.phone && <span className="error">This field is required!!!</span>}
                                    <input className="bg-primary text-light" type="submit" />
                                </form>}
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Booking;