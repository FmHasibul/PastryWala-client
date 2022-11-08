import React from "react"

import { createBrowserRouter } from 'react-router-dom'
import Main from "../Layouts/Main"
import Blog from "../Pages/Blog/Blog"
import Home from "../Pages/Home/Home"
import SignUp from "../Pages/Register/SignUp/SignUp"

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
                path: '/register',
                element: <SignUp />
            },
        ]
    }
])
export default routes

