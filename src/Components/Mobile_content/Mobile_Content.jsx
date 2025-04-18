import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Img1 from "../../assets/Phone Section.png";
import Img2 from "../../assets/Mask group (1).png";

const Mobile_Content = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-10 mt-9">
        {/* Right Content */}
        <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A6C772] leading-tight">
            Batteri til elcykel vi prioriterer sikkerhed og kvalitet
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
            Renoverer og opgraderer dit gamle elcykel batteri, så du igen er
            køreklar på ingen tid – Du skåner både din pengepung og miljøet.
          </p>
        </div>

        {/* Left Image */}
        <div className="flex w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={Img1}
            alt="Hero Image 1"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content Below the Hero Section */}
      <div className="flex flex-col md:flex-row gap-12 px-6 md:px-16 py-10">
        {/* Left Image for Content Section */}
        <div className="flex w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={Img2}
            alt="Hero Image 2"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Text Content */}
        <div className="bg-white w-full md:w-1/2">
          <h1 className="text-3xl mt-24 sm:text-4xl font-bold text-[#A6C772] text-center md:text-left">
            Mangler du en oplader til dit elcykel batteri?
          </h1>
          <p className="mt-16 text-gray-600 sm:text-lg md:text-xl text-sm text-center md:text-left">
            Vi har oplader på Dansk lager så du slipper for at vente
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start mt-12">
            <button className="px-6 py-3 border border-green-600 text-green-600 font-medium text-lg flex items-center gap-2 rounded-md hover:bg-[#A6C772] hover:text-white transition">
              Find oplader
              <FaArrowRight className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile_Content;
