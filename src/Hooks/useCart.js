import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/utilities';

const useCart = services => {
    const [cart, setCart] = useState([]);

    useEffect(() => {

        if (services.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                const addedServices = services.find(service => service._id === _id);
                if (addedServices) {
                    // set quantity
                    const quantity = savedCart[_id];
                    addedServices.quantity = quantity;
                    storedCart.push(addedServices);
                }
            }
            setCart(storedCart);
        }

    }, [services]);
    return [cart, setCart];
};

export default useCart;