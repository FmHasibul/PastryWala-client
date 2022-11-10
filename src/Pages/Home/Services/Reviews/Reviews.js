import React, { useState } from 'react';
import { useParams } from 'react-router'

import { useLoaderData } from 'react-router-dom'


const Reviews = () => {
    const [review, setReview] = useState({})

    const { id } = useParams()
    const service = useLoaderData()
    const [ser, setSer] = useState(service)

    console.log(ser);


    const handlePost = (e) => {
        e.preventDefault()
        // console.log(review);
        const update = { ...service, review }
        // console.log(update);
        fetch(`http://localhost:5000/foods/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    const handleBlur = (e) => {
        const name = e.target.name
        const value = e.target.value
        const data = { ...review };
        data[name] = value;
        setReview(data)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Review  now!</h1>
                    </div>
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handlePost} className="card-body">
                            <div className="form-control">
                                <input onBlur={handleBlur} name="userName" type="text" placeholder="Full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="number" onBlur={handleBlur} name="ratings" placeholder="retings" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea onBlur={handleBlur} name="reviews" className="textarea textarea-bordered" placeholder="Write your valueable Feedback"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;