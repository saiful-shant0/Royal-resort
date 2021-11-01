import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-tor-88681.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://enigmatic-tor-88681.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = services.filter(user => user._id !== id);
                        setServices(remainingUsers);
                    }
                });
        }
    }
    return (
        <div className="text-center my-5">
            <h2 className="my-4">Manage Services</h2>
            <h4 className="my-4">Available Services: {services.length}</h4>
            <ul>
                {
                    services.map(service => <p className="m-4"
                        key={userEvent._id}
                    >{service.name} <button className="btn btn-warning" onClick={() => handleDeleteUser(service._id)}>X</button> </p>)
                }
            </ul>
        </div>
    );
};

export default ManageBookings;