import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const menuItems =
        <>
            < li > <Link to='/home'>Home</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>About</Link></li>
            <li><Link to='/blog'>Blog</Link></li>

        </>


    return (

        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className=" bg-slate-200  py-2 px-5 font-semibold rounded-lg glass normal-case text-xl"><span className='font-bold text-orange-600'>P</span>astry<span className='font-bold text-orange-300'>W</span>ala</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <ul className="menu lg:menu-horizontal ">
                            <li> <Link className=" bg-slate-400 glass ">Logout</Link></li>
                            <li><Link>My Review</Link></li>
                            <li><Link>Add Items</Link></li>
                        </ul>
                        :
                        <><ul className=" menu lg:menu-horizontal glass  rounded-box">
                            <li><Link className="font-semibold text-green-400 ">Login</Link></li>
                            <li><Link to='/register' className="font-semibold text-green-400 ">Register</Link></li>
                        </ul>



                        </>

                }
            </div>
        </div>
    );
};

export default Header;