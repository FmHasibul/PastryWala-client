import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='h-full mt-16 shadow-xl'>
            <div className='container mx-auto glass py-48'>
                <h1 className='container mx-auto'> There is no route Here <br />
                    <span className='text-6xl text-orange-600'><Link to='/home'>Go Home</Link></span></h1>
            </div>
        </div>
    );
};

export default NotFound;