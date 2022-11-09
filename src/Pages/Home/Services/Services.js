import React from 'react';

const Services = ({ service }) => {
    const { name, picture, price, details } = service;
    console.log(name);
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
                    <button className="rounded-xl bg-orange-400 btn-sm glass ">Details!</button>
                </div>
            </div>

        </div>
    );
};

export default Services;