import React, { createContext, useEffect, useState } from 'react';


export const ServicesContext = createContext()


const DataContext = ({ children }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // fetch('https://aseleven-server.vercel.app/foods')
        fetch('https://aseleven-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);

    const data = { services, setServices }
    return (
        <ServicesContext.Provider value={data}>
            {children}
        </ServicesContext.Provider>
    );
};

export default DataContext;