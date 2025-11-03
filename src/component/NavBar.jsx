import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const NavBar = () => {
  
  return (
    <div className="flex justify-between items-center mx-4 py-3 lg:mx-44">
      <div>
        <Link to="/">
          <img
            src={assets.logo}
            alt="Logo"
            className="cursor-pointer w-32 sm:w-44"
          />
        </Link>
      </div>
      <button className="flex flex-row justify-center items-center px-4 sm:px-8 py-2 sm:py-3 gap-4 rounded-full bg-zinc-800 text-white text-sm font-medium cursor-pointer hover:bg-[#454545] transition duration-300">
        Get Started{" "}
        <span>
          <FaArrowRight />
        </span>
      </button>
    </div>
  );
};

export default NavBar;
