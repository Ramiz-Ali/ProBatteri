import React from "react";
import Logo from "../../assets/Trustpilot-logo.png";
import { IoStarOutline } from "react-icons/io5";
import Comp1 from "../../assets/grey 01.png";
import Comp2 from "../../assets/grey 02.png";
import Comp3 from "../../assets/grey 04.png";
import Comp4 from "../../assets/grey 03 (1).png";

const Banner = () => {
  return (
    <div className="mt-20 px-6">
      {/* Trustpilot Section */}
      <div className="flex flex-col items-center">
        {/* Trustpilot Logo */}
        <img src={Logo} alt="Trustpilot Logo" className="mb-4" />

        {/* Stars */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-8 h-8 bg-green-700 rounded-md"
            >
              <IoStarOutline className="text-white text-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="mt-10 text-center">
        {/* Heading */}
        <h1 className="font-bold text-2xl mb-6">
          <span className="text-[#A6C772]">Vi samarbejder </span> med de Bedste
        </h1>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img src={Comp1} alt="Company 1" className="w-50 h-auto" />
          <img src={Comp2} alt="Company 2" className="w-50 h-auto" />
          <img src={Comp3} alt="Company 3" className="w-50 h-auto" />
          <img src={Comp4} alt="Company 4" className="w-50 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
