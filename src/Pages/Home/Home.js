import React, { useContext } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { ServicesContext } from '../../Context/DataContext/DataContext';
import Services from './Services/Services';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa'
import svg from './image/food-food.svg';
import svg1 from './image/health-12.svg';
import svg2 from './image/undraw_barbecue_3x93.svg'
import svg4 from './image/3876105.jpg'
import svg5 from './image/4636919.jpg'


const Home = () => {
    const { services } = useContext(ServicesContext)
    return (
        <div className=''>
            <div class="banner">
                <div className="header opacity-75 bg-slate-900 mx-auto text-center pb-16">
                    <h1 className="text-zinc-50 text-6xl font-bold py-16">The best way to learn to code</h1>
                    <div className="desc text-zinc-200 text-2xl font-normal mb-8">
                        <p>Courses designed by experts with real-world practice.</p>
                        <p>Join our global community. <span className="font-bold">It's free.</span></p>
                    </div>
                    <Link to='/services'><button className="btn btn-wide bg-orange-400 rounded-md hover:bg-green-700">Go to Services</button></Link>
                </div>
            </div>
            <div className=' container mx-auto grid grid-cols-3 gap-2 my-10'>
                {
                    services.slice(0, 3).map(service => <Services key={service._id} service={service}></Services>)
                }

            </div>

            <Link className='' to='/services'><button className="btn text-center btn-wide bg-orange-400 rounded-md hover:bg-green-700">All Services</button></Link>

            <div className="pb-24 bg-gray-300">
                <div className="container mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="card glass pt-10 shadow-md  rounded-md">
                        <figure className="">
                            <img src={svg} alt="photos" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title text-4xl font-bold ">Best for you</h2>
                            <p className="text-xl text-slate-500">I think about your health <span
                                className="font-bold">That's why we offer you the best hygiene food.</span>
                            </p>
                        </div>
                    </div>

                    <div className="card glass shadow-md pt-10 rounded-md">
                        <figure className="">
                            <img src={svg1} alt="photos" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title text-4xl font-bold ">I Care About your Health</h2>
                            <p className="text-xl text-slate-500"> <span
                                className="font-bold">I'm  here made the best food </span> Take a look of Our dishes. Made customize menu if necessary
                            </p>
                        </div>
                    </div>

                    <div className="card glass shadow-md  rounded-md">
                        <figure className="pt-10">
                            <img src={svg2} alt="photos" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title text-4xl font-bold ">Tailored to you</h2>
                            <p className="text-xl text-slate-500">No matter your experience level, you'll be writing <span
                                className="font-bold">Don't waste your time by random surfing</span>  start your first course.
                            </p>
                        </div>
                    </div>

                    <div className="card lg:card-side bg-white shadow-md rounded-md h-full col-span-2 grid md:grid-cols-2">
                        <figure><img src={svg4} alt="photos" /></figure>
                        <div className="flex flex-col sm:text-center md:text-right gap-6 self-center">
                            <h2 className="text-4xl font-bold">We are ready the go....</h2>
                            <p>Now You can order form your home. Any time  <span className='text-xl font-semibold'>FREE </span> delivary always ready to go to your home. Wer don't charge for delivary</p>
                            <div className="flex mb-5 mx-auto gap-8">
                                <a href="play.google.com">
                                    <FaGooglePlay className='hover:text-green-700' />

                                </a>
                                <a href="apple.com">
                                    <FaAppStoreIos className='hover:text-green-700' />
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="card glass bg-base-100 shadow-md h-fit rounded-md">
                        <figure className="">
                            <img src={svg5} alt="photos" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center ">
                            <h2 className="card-title text-4xl font-bold ">Have your Freedom</h2>
                            <p className="text-xl text-slate-500">Place your order as you please!<span
                                className="font-bold">You dont have to choose from our menu. Make your Own menu</span> Do it now Be Relax.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;