import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.png'


const Header = () => {
    const linkStyle = {
        color: 'white',
        backgroundColor: '#9a4d55', 
        transition: '.2s all ease-in',
        hover: {
            backgroundColor: '#2563eb'
        },
        fontWeight: '600', 
        padding: '0.5rem 1rem', 
        borderRadius: '0.375rem',
       
    };
    const navlinkStyle = {
        color: '#f5f5f5',
        backgroundColor: '#4a5a5f', 
        fontWeight: '600', 
        padding: '0.5rem 1rem', 
        borderRadius: '50px',
       
    };
    return (
        <header className="bg-white shadow  z-50 top-0 ">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-lg">
                    <Link to="/" >
                        <img
                            src={Logo}
                            className="mr-3 h-20"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2 gap-3">
                        <Link
                            to="#"
                            style={linkStyle}
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            style={linkStyle}
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 duration-200
                                    ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:bg-gray`
                                    }
                                    style={navlinkStyle}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="shop"
                                    className={({isActive}) =>
                                        `block p-2 duration-200
                                    ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    style={navlinkStyle}
                                >
                                    Shop
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink
                                    to="terms"
                                    className={({isActive}) =>
                                        `block p-2 duration-200
                                    ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    style={navlinkStyle}
                                >
                                    Terms & Conditions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="privacy"
                                    className={({isActive}) =>
                                        `block p-2 duration-200
                                    ${isActive? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                    style={navlinkStyle}
                                >
                                    Privacy Policy
                                </NavLink>
                            </li>
                          
                        
                          
                         
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header