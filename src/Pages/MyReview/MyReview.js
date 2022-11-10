import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className='container my-7 mx-auto'>
            {
                services.map(serviceReview => <h1> here is review</h1>)
            }
            <div className='grid border grid-cols-1 lg:grid-cols-3'>
                <div className="border">
                    <FaUser />
                    <h1>hiskadksa</h1>
                </div>
                <div className="grid borser col-span-2">

                </div>

            </div>
        </div>
    );
};

export default MyReview;