import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Img1 from "../../assets/Mask group.png";
import Img2 from "../../assets/Animationsfilm-probatteri-1 1@3x.png";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-10">
        {/* Right Content */}
        <div className="max-w-lg text-center md:text-left mb-10 md:mb-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Virker dit <span className="text-[#A6C772]">elcykel batteri</span>{" "}
            ikke mere?
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
            Renoverer og opgraderer dit gamle elcykel batteri, så du igen er
            køreklar på ingen tid – Du skåner både din pengepung og miljøet.
          </p>

          {/* Transparent Button */}
          <button className="mt-6 px-6 py-3 border border-green-600 text-green-600 font-medium text-lg flex items-center gap-2 rounded-full hover:bg-[#A6C772] hover:text-white transition">
            Find elcykel Batteri
            <FaArrowRight className="text-black" />
          </button>
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center md:text-left">
            Hvorfor vælge en <span className="text-[#A6C772]">renovering?</span>
          </h1>
          <p className="mt-4 text-gray-600  sm:text-lg md:text-xl text-sm text-center md:text-left">
            Forny dit elcykelbatteri og spar miljøet og pengepungen! En
            renovering giver dit gamle elcykel batteri nyt liv. Og din elcykel vil
            igen køre som en splinterny elcykel, uden at det sprænger dit budget.
            Når vi renoverer dit eksisterende elcykelbatteri, udskifter vi alle de
            gamle battericeller og genbruger derfor kun kassen og elektronikken.
            Det er som at skifte batterierne ud i din fjernbetjening i stedet for
            at købe en helt ny. Det bedste ved det hele? Udover at være
            miljøvenlig, er en batterirenovering også et økonomisk fornuftigt
            valg. Mens et nyt elcykelbatteri typisk koster mellem 4.000 og 6.000
            kroner, starter prisen for en renovering fra blot 2.000 kroner.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
