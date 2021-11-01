import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, description, img } = props.service;

    return (
        <div className="service pb-3">
            <img className="img-fluid" src={img} alt="" />
            <h2>{name}</h2>

            <p className="px-3">{description}</p>


            <Link to={`/mybooking/:${_id}`}>    <button className="btn btn-success">Book {name}</button></Link>
        </div>
    );
};

export default Service;