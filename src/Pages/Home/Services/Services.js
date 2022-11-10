import React from 'react';

import { Link } from 'react-router-dom'

const Services = ({ service }) => {
    const { _id, name, picture, price, details } = service;
    return (
        <div>
            <div className="card h-96 glass">
                <figure><img src={picture} className="" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details.slice(0, 100) + "...."}</p>
                </div>
                <div className="card-actions m-1 p-5 flex items-center justify-between">
                    <p>Price : <span className='text-rose-600-500'>${price}</span></p>
                    <Link to={`/service/${_id}`}><button className="btn glass btn-wide m-0 ">Show Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Services;