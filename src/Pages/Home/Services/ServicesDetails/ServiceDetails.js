import React from 'react';
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const ServiceDetails = () => {
    const detail = useLoaderData()

    const { _id, name, picture, price, details } = detail
    return (
        <div className='container mx-auto mb-16'>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <h2 className='py-10 text-4xl font-serif text-emerald-100'>This is service details </h2>
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/addReview/${_id}`}><button className="btn glass text-slate-700 btn-wide m-0 ">Give Reviews</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;