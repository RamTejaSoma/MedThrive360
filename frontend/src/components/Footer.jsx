import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate=useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div>
          <img className="mb-5 w-40" src={assets.MedThrive} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            MedThrive360 is your trusted partner for online doctor appointments,
            teleconsultations, and in-clinic bookings. Emergency? Call 24x7
            support.
          </p>
        </div>
        {/* center */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li onClick={()=>{navigate('/'), scrollTo(0, 0)}}>Home</li>
            <li onClick={()=>{navigate('/about'), scrollTo(0, 0)}}>About Us</li>
            <li onClick={()=>{navigate('/contact'), scrollTo(0, 0)}}>Contact Us</li>
            
          </ul>
        </div>
        {/* right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-53792-63300</li>
            <li>greatCodor@gmail.coom</li>
          </ul>
        </div>
      </div>
      <div>
        {/* comment */}
        <hr />
        <p className="py-5  text-sm text-center">
          copyright 2025@ MedThrive360-All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
