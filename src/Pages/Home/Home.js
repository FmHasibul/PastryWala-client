import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div class="banner">
                <div className="header opacity-75 bg-slate-900 mx-auto text-center pb-16">
                    <h1 className="text-zinc-50 text-6xl font-bold py-16">The best way to learn to code</h1>
                    <div className="desc text-zinc-200 text-2xl font-normal mb-8">
                        <p>Courses designed by experts with real-world practice.</p>
                        <p>Join our global community. <span className="font-bold">It's free.</span></p>
                    </div>
                    <Link to='/courses'><button className="btn btn-wide bg-orange-400 rounded-md hover:bg-green-700">Go to Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;