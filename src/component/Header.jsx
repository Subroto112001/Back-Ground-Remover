import React from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { LuUpload } from "react-icons/lu";
import { assets } from "../assets/assets";

const Header = () => {
  
  return (
    <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
      {/* -------------left side------------- */}
      <div>
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden" />{" "}
          <span className="bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          from <br className="max-md:hidden" />
          images for free.
        </h1>
        <p className="my-6 text-sm text-gray-500 font-normal leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br className="max-sm:hidden" /> Lorem Ipsum has been the
          industry's standard dummy text ever.
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700 text-white "
          >
            <span className="text-2xl">
              <HiOutlineUpload />
            </span>
            <p className="text-sm font-medium">Upload your image</p>
          </label>
        </div>
      </div>
      {/* -------------left side------------- */}
      {/* -------------Right side------------- */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="Header Image" />
      </div>
      {/* -------------Right side------------- */}
    </div>
  );
};

export default Header;
