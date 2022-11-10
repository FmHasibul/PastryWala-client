import React from 'react';
import img from './businessman-309.svg'

const ReviewComp = ({ review: reviewData }) => {
    const { review, name, } = reviewData
    console.log(reviewData);
    return (
        <div>
            <div className='grid border my-2 grid-cols-1 lg:grid-cols-3'>
                <div className=" flex-col mx-auto">
                    <img src={img} className="w-40 my-2" alt="" />
                    <p className='text-lg'>User Name:{review ? review.userName : 'No user Name'} </p>

                </div>
                <div className="grid borser col-span-2">
                    <h3 className='text-3xl'>Here is Review for <span className='text-orange-700'>{name}</span></h3>
                    <p><span>Your Review: </span>{review?.reviews}</p>
                </div>

            </div>

        </div>
    );
};

export default ReviewComp;