import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../../Hooks/useCart';
import { addToDb } from '../../../utilities/utilities';
import Cart from '../../Cart/Cart';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    const [cart, setCart] = useCart(services);
    useEffect(() => {
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    const handleAddToCart = (service) => {
        const exists = cart.find(pd => pd._id === service._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== service._id);

            newCart = [...rest, service];
        }
        else {

            newCart = [...cart, service];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(service._id);

    }
    return (
        <div id="services" className="container text-center">
            <h2 className="text-primary mt-5">Our Services </h2>
            <div className="service-continer">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    ></Service>

                    )

                }


            </div>
            <Cart cart={cart}>
                <Link to="/mybooking">
                    <button className="btn-regular">Review Your Order</button>
                </Link>
            </Cart>
        </div>
    );
};

export default Services;