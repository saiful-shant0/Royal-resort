import React from 'react';

const ReviewIteam = (props) => {
    const { name, price, quantity, _id } = props.service;

    const { handleRemove } = props;
    console.log(props.service)
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(_id)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewIteam;