import React from "react"

import { createBrowserRouter } from 'react-router-dom'
import Main from "../Layouts/Main"
import AddServices from "../Pages/AddServices/AddServices"
import Blog from "../Pages/Blog/Blog"
import Home from "../Pages/Home/Home"
import MyReview from "../Pages/MyReview/MyReview"
import Login from "../Pages/Register/Login/Login"
import SignUp from "../Pages/Register/SignUp/SignUp"
import Register from "../Pages/Register/Register"
import ServicesSection from "../Pages/ServicesSection/ServicesSection"
import NotFound from "./NotFound/NotFound"
import ServiceDetails from "../Pages/Home/Services/ServicesDetails/ServiceDetails"
import Reviews from "../Pages/Home/Services/Reviews/Reviews"

const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/services',
                element: <ServicesSection />
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id
                    }`),
                element: <ServiceDetails />
            },
            {
                path: '/review',
                element: <MyReview />
            },
            {
                path: '/addReview/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id
                    }`),
                element: <Reviews />
            },
            {
                path: '/addservice',
                element: <AddServices />
            },
            {
                path: '/register',
                element: <SignUp />
            },
            {
                path: '/mailregister',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }

])
export default routes

