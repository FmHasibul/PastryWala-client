import React from 'react';
import useTitle from '../../../Hooks/useTitle'
import { Link } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Services = ({ service }) => {
    useTitle('Services')
    const { _id, name, picture, price, details } = service;
    return (
        <div>

            <div className="card h-96 glass">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <figure><img src={picture} className="" alt="car!" /></figure>
                    </PhotoView>
                </PhotoProvider>
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