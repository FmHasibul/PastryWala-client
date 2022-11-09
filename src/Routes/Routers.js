import React from "react"

import { createBrowserRouter } from 'react-router-dom'
import Main from "../Layouts/Main"
import AddServices from "../Pages/AddServices/AddServices"
import Blog from "../Pages/Blog/Blog"
import Home from "../Pages/Home/Home"
import MyReview from "../Pages/MyReview/MyReview"
import Login from "../Pages/Register/Login/Login"
import SignUp from "../Pages/Register/SignUp/SignUp"
import ServicesSection from "../Pages/ServicesSection/ServicesSection"
import NotFound from "./NotFound/NotFound"

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
                path: '/review',
                element: <MyReview />
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

