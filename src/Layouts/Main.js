import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    return (
        <div>
            <h2>header</h2>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;