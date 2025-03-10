import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    ButtonGroup
} from "@material-tailwind/react";
import logo from '../../assets/logo.png';

const NavBar1 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  user  = useSelector((state) => state.auth.user);
    const email = user?.email || 'User';  
    //console.log(user?.email);                           
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token); // Convert token to boolean
      }, [user]);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/login');
        setIsOpen(false); // Close mobile menu after logout
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="flex justify-between">
                <div className="text-white text-lg font-bold">
                    <div className="sm:w-[50%] sm:h-[20%]">
                        <Link to={'/'}>
                            <img src={logo} alt="FreshThreads" className="lg:mt-5 lg:ml-[150px] lg:w-[450px] lg:h-[40px]" />
                        </Link>
                    </div>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex justify-between items-center">
                    <div className="flex space-x-8 items-center">
                        <Link to="/" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">
                            <Button variant="outlined" className='p-2 hover:shadow-[0_4px_20px_rgba(255,255,0,0.7)] transition duration-300'>Home</Button>
                        </Link>
                        <Link to="/about" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">
                            <Button variant="outlined" className='p-2 hover:shadow-[0_4px_20px_rgba(255,255,0,0.7)] transition duration-300'>About US</Button>
                        </Link>
                        <Link to="/ourservices" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">
                            <Button variant="outlined" className='p-2 hover:shadow-[0_4px_20px_rgba(255,255,0,0.7)] transition duration-300'>Our Services</Button>
                        </Link>
                        <Link to="/users" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">
                            <Button variant="outlined" className='p-2 hover:shadow-[0_4px_20px_rgba(255,255,0,0.7)] transition duration-300'>Dashboard</Button>
                        </Link>
                        <Link to="/contact" className="py-4 px-2 font-semibold hover:text-green-500 transition duration-300">
                            <Button variant="outlined" className='p-2 hover:shadow-[0_4px_20px_rgba(255,255,0,0.7)] transition duration-300'>Contact Us</Button>
                        </Link>
                        
                        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600 bg-red-900 p-2 rounded">
            Welcome, {email}
    </span>
            <Button
              onClick={handleLogout}
              variant="contained"
              color="error"
              className="p-2"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link
            to="/login"
            className="font-semibold hover:text-green-500 transition duration-300"
          >
            <Button variant="contained" color="success" className="p-2">
              Login
            </Button>
          </Link>
        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden sm:p-8 items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-gray-100">
                        {isOpen ? (
                            <FaTimes className="w-5 h-5 text-gray-500 hover:text-green-500" />
                        ) : (
                            <FaBars className="w-10 h-10 text-gray-500 hover:text-green-500" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
                <Link to="/" className="block text-sm sm:text-2xl px-2 py-4 text-black hover:bg-gray-300 font-bold transition duration-300">Home</Link>
                <Link to="/about" className="block text-sm sm:text-2xl px-2 py-4 text-black hover:bg-gray-300 font-bold transition duration-300">About Us</Link>
                <Link to="/ourservices" className="block text-sm sm:text-2xl px-2 py-4 text-black hover:bg-gray-300 font-bold transition duration-300">Our Services</Link>
                <Link to="/users" className="block text-sm sm:text-2xl px-2 py-4 text-black hover:bg-gray-300 font-bold transition duration-300">Dashboard</Link>
                <Link to="/contact" className="block text-sm sm:text-2xl px-2 py-4 text-black hover:bg-gray-300 font-bold transition duration-300">Contact Us</Link>
                
                {isLoggedIn ? (
                    //   localStorage.setItem('token', response.data.token);
                //       const parsedData = JSON.parse(response.config.data);
                
                
                //    console.log(parsedData.email);
          <div className="flex items-center gap-4">
             <span className="text-gray-600 bg-red-900 p-2 rounded">
             Welcome, {email}
             {/* {console.log(email)} */}
             </span>
            <Button
              onClick={handleLogout}
              variant="contained"
              color="error"
              className="p-2"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link
            to="/login"
            className="font-semibold hover:text-green-500 transition duration-300"
          >
            <Button variant="contained" color="success" className="p-2">
              Login
            </Button>
          </Link>
        )}
            </div>
        </nav>
    );
};

export default NavBar1;