import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://enigmatic-tor-88681.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])


    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://enigmatic-tor-88681.herokuapp.com/orders/${id}`;
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
        <div className="text-center my-5 pb-5 container">
            <h2 className="my-4 py-5"> {user.displayName}'s Bookings</h2>

            <Table striped bordered hover >
                <thead>
                    <tr>

                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order =>

                        <tbody key={userEvent._id}>
                            <tr>

                                <td>{order.serviceName}</td>
                                <td>{order.price}</td>
                                <td> <button className="btn btn-warning" onClick={() => handleDeleteUser(order._id)}>Cancle</button></td>
                            </tr>

                        </tbody>

                    )
                }
            </Table>
        </div>
    );
};

export default MyBooking;