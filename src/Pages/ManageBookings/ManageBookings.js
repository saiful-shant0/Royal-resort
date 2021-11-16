import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:4000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }
                });
        }
    }
    return (
        <div className="text-center my-5">
            <h2 className="my-4">Manage Services</h2>
            <h4 className="my-4">Available Services: {orders.length}</h4>
            <ul>
                {
                    orders.map(order => <p className="m-4"
                        key={userEvent._id}
                    >{order.name} <button className="btn btn-warning" onClick={() => handleDeleteUser(order._id)}>X</button> </p>)
                }
            </ul>
        </div>
    );
};

export default ManageBookings;