import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewComp from './ReviewComp';
import useTitle from '../../Hooks/useTitle'

const MyReview = () => {
    const services = useLoaderData();
    useTitle('My Review')
    return (
        <div className='container my-7 rounded-lg mx-auto'>
            {
                services.map(serviceReview => <ReviewComp key={serviceReview._id} reviewData={serviceReview} />)
            }

        </div>
    );
};

export default MyReview;