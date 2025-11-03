import React from "react";
import { LuUpload } from "react-icons/lu";

const Header = () => {
  return (
    <div>
      {/* -------------left side------------- */}
      <div>
        <h1>
          Remove the <br /> <span>background</span> from <br />
          images for free.
        </h1>
        <p className="text-sm font-normal leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
          text ever.
        </p>
        <div>
          <button className="text-sm font-normal">
            <span>
              <LuUpload />
              Upload your image
            </span>
          </button>
        </div>
      </div>
      {/* -------------left side------------- */}
      {/* -------------Right side------------- */}
      <div></div>
      {/* -------------Right side------------- */}
    </div>
  );
};

export default Header;
