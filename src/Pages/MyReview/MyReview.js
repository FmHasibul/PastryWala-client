import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewComp from './ReviewComp';


const MyReview = () => {
    const services = useLoaderData();

    return (
        <div className='container my-7 rounded-lg mx-auto'>
            {
                services.map(serviceReview => <ReviewComp key={serviceReview._id} reviewData={serviceReview} />)
            }

        </div>
    );
};

export default MyReview;