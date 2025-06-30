import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    const Link = (
        <>
            <NavLink to='/'
                className={({ isActive }) =>
                    isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
                }>Home
            </NavLink>
            <NavLink to='/aboutMe'
                className={({ isActive }) =>
                    isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5  font-semibold '
                }>AboutMe
            </NavLink>
            <NavLink to='/skills'
                className={({ isActive }) =>
                    isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
                }>Skills
            </NavLink>
            <NavLink to='/education'
                className={({ isActive }) =>
                    isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
                }>Education
            </NavLink>
            <NavLink to='/projects'
                className={({ isActive }) =>
                    isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
                }>Projects
            </NavLink>
            <NavLink to='/contactMe'
                className={({ isActive }) =>
                    isActive ? 'text-gray-500 ml-5 font-bold border-b-3  border-blue-950' : 'text-gray-800 ml-5 font-semibold '
                }>ContactMe
            </NavLink>
        </>
    )
    return (
        <div className=" navbar bg-base-100 shadow-sm lg:px-35">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Link}
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="" className='w-[100px]' />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Link}
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className="btn  bg-black text-white rounded-2xl font-semibold"
                    href='https://drive.google.com/file/d/1P0YPqxL8YIgp2_7ZbZJLVM_ffD3AEFaq/view?usp=sharing'>
                    Resume
                </a>

            </div>
        </div>
    );
};

export default Navbar;