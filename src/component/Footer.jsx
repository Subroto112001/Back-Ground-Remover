import React from "react";
import { assets } from "../assets/assets";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-4 lg-px-44 py-3">
      <div className=" flex gap-2.5 items-center">
        <Link to="/">
          <img
            width={150}
            src={assets.logo}
            alt="Logo"
            className="cursor-pointer w-32 sm:w-44"
          />
        </Link>
        
        <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
          All right reserved. Copyright @bg removal
        </p>
      </div>
      <div className="flex gap-[18px] items-center">
        <span className="text-[19px] text-center flex justify-center items-center w-10 h-10 rounded-full bg-white text-black cursor-pointer shadow-lg">
          <FaFacebookF />
        </span>
        <span className="text-[19px] text-center flex justify-center items-center w-10 h-10 rounded-full bg-white text-black cursor-pointer shadow-lg">
          <FaTwitter />
        </span>
        <span className="text-[19px] text-center flex justify-center items-center w-10 h-10 rounded-full bg-white text-black cursor-pointer shadow-lg">
          <FaGooglePlusG />
        </span>
      </div>
    </div>
  );
};

export default Footer;
