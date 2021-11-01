import React from 'react';
import { useParams } from 'react-router';

const MyBooking = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    return (
        <div>
            <h2>My booking {serviceId}</h2>
        </div>
    );
};

export default MyBooking;