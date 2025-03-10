import React, { useEffect, useState } from 'react'
import { TiSocialFacebook } from "react-icons/ti";

import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LiaFaxSolid } from "react-icons/lia";

import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <div className='w-full  relative z-10 bg-white'>
      <div className="w-full min-h-[98%] bg-[#000000] bg-opacity-90 flex flex-col md:flex-row gap-20 py-10 px-5 relative">
        <div className="w-full py-6 text-center md:w-[30%] h-[100%]">
          <img className='ml-[25%] md:ml-12'  alt=""  />
          <p className='leading-9 mt-6 text-sm text-center flex flex-col text-white '>FreshThreads is your solution for hassle-free laundry services. <br /> We pick up your clothes, ensure they are professionally cleaned,<br /> and deliver them right to your doorstep.<br /> Our mission is to make laundry day effortless and convenient,<br /> so you can focus on what matters most.</p>
          <div className="flex justify-center items-center md:ml-0 gap-3 md:gap-4 mt-6 ">
          
            <div className="p-2 bg-white rounded-full">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <TiSocialFacebook className="text-blue-600 text-3xl" />
              </a>
            
            
            </div>
  
            <div className="p-2 bg-white rounded-full"> <a href="/" target="_blank" rel="noopener noreferrer">
      <TiSocialTwitter className="text-blue-600 text-3xl" /></a></div>
            <div className="p-2 bg-white rounded-full"> <a href="/" target="_blank" rel="noopener noreferrer">
      <AiOutlineInstagram className="text-blue-600 text-3xl" /></a></div>
            <div className="p-2 bg-white rounded-full">    <a href="/" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="text-blue-600 text-3xl" />
    </a></div>
          </div>
        </div>
        <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className="my-3 block font-bold text-lg">MAIN MENU</h1>
          <a href="/" className="my-3 block  text-white text-decoration-none">Home</a>
          {/* <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Search</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Privicy Policy</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Shipping Info</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Latest News</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Catalog</a> */}
        </div>
        {/* <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className="my-3 block font-bold text-lg">QUICK VIEW</h1>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Best Product</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Cosmetics</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Beauty World</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Offer Collection</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Mega Collection</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Training Collection</a>
        </div> */}
        <div className="text-capitalize flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className="my-3 block font-bold text-lg">LINKS</h1>
          <a href="/about" className="my-3 block  text-white text-decoration-none">About Us</a>
          <a href="/" className="my-3 block  text-white text-decoration-none">Contact Us</a>
          {/* <a href="https://github.com/PrakashChoure2002" className="my-3 block">Faq</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Portfolio</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Search</a>
          <a href="www.linkedin.com/in/prakash-choure-3087b71b2" className="my-3 block">Wishlist</a>
          <a href="https://github.com/PrakashChoure2002" className="my-3 block">Lookbook</a> */}
        </div> 
        <div className="flex flex-col text-white text-center py-6 w-full md:w-[15%] h-[100%]">
          <h1 className='font-bold text-lg'>CONTACT US</h1>
          <a href="https://maps.app.goo.gl/kYSZfpQgqBUz9yAG8" target='_blank' className="my-3 block  text-white text-decoration-none"><IoLocationOutline className='inline-block  text-white' />   10th Floor, IT Tower, Bengaluru,  India</a>
          <a href="tel:+1234567890" target='_blank' className="my-3 block  text-white text-decoration-none"><IoCall className='inline-block  text-white text-decoration-none' /> +12345-67890</a>
          <a href="mailto:connect@freshthreads.com" target='_blank' className="my-3 block  text-white text-decoration-none"><MdOutlineEmail className='inline-block  text-white' /> Email Us: <br /> connect@freshthreads.com</a>
        </div>
        <div className="absolute right-6 bottom-10 p-4 bg-green-400 rounded-full border-4 border-white"><a href=""><MdKeyboardDoubleArrowUp /></a></div>
      </div>
      <div className="ftr w-full py-8 px-10 bg-[#000000] bg-opacity-90">
        <p className='text-white text-center'>{currentYear} -   &copy; FreshThreads. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer