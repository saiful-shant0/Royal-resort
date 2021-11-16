import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../Hooks/useCart';
import useServices from '../../Hooks/useServices';
import { removeFromDb } from '../../utilities/utilities';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';

const OrderReview = () => {
    const [services] = useServices();
    /*   console.log(services) */

    const [cart, setCart] = useCart(services);
    const history = useHistory();
    console.log(cart)
    const handleRemove = _id => {
        const newCart = cart.filter(service => service._id !== _id);
        setCart(newCart);
        removeFromDb(_id);
    }
    const handleProceedToShipping = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/addbooking');
    }
    return (
        <div className="shop-container">
            {cart && <div className="product-container">
                {
                    cart.map(service => <ReviewIteam
                        key={service._id}
                        service={service}
                        handleRemove={handleRemove}
                    ></ReviewIteam>)
                }
            </div>
            }
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;