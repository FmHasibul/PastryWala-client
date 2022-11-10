import React, { useContext } from 'react';
import { ServicesContext } from '../../Context/DataContext/DataContext';
import Services from '../Home/Services/Services';

const ServicesSection = () => {

    const { services } = useContext(ServicesContext)
    return (
        <>
            <h1 className='text-5xl mt-6 font-serif'>Here you can find All of Our Services</h1>
            <div className=' container mx-auto grid grid-cols-3 gap-2 my-10'>
                {
                    services.map(service => <Services key={service._id} service={service}></Services>)
                }

            </div>
        </>

    );
};

export default ServicesSection;