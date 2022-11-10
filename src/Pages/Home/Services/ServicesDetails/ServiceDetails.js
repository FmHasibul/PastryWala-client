import React from 'react';
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const detail = useLoaderData()

    const { _id, name, picture, price, ratings, details } = detail
    return (
        <div className='container mx-auto mt-10 rounded-3xl glass mb-16'>
            <div className="card card-compact   shadow-xl">
                <h2 className='py-10 text-4xl font-serif text-emerald-100'>This is service details </h2>
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <figure><img src={picture} className="w-96 py-5" alt="food" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className='flex text-green-800 py-5'>
                        <p>Price $:  {price}</p>
                        <p>Ratings: {ratings}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/addReview/${_id}`}><button className="btn glass text-slate-700 btn-wide m-0 ">Give Reviews</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;