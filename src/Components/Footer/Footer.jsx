import React from 'react';
import Map from '../../assets/Map.png';
import { BsArrowUp } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="bg-zinc-50 w-full px-4 md:px-20 py-14 flex flex-col mt-10 md:flex-row gap-12 md:gap-24">
        <h1 className="text-2xl font-extrabold text-lime-500 text-center md:text-left">Pro Batteri</h1>

        {/* Contact Details */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img src={Map} alt="Map" className="w-48 md:w-auto" />
          <p className="text-sm font-bold text-center md:text-left">Nørrebrogade 135A, 7000 Fredericia</p>
          <p className="text-sm underline font-bold text-center md:text-left">+45 52 82 99 64</p>
          <p className="text-sm underline font-bold text-center md:text-left">hej@probatteri.dk</p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col font-bold text-sm gap-5 items-center md:items-start">
          <p className="cursor-pointer">Omkring Os</p>
          <p className="cursor-pointer">Kontakt og</p>
          <p className="cursor-pointer">åbningstider</p>
          <p className="cursor-pointer">Leveringstider</p>
          <p className="cursor-pointer">Fragtoplysniger</p>
          <p className="cursor-pointer">Mærker og kvalitets</p>
          <p className="cursor-pointer">Opret en reklamation</p>
        </div>

        {/* Additional Info */}
        <div className=" flex-col font-bold text-sm gap-5 items-center hidden md:flex md:items-start">
          <p>2 Års batteri Garanti</p>
          <p>Facebook</p>
          <p>Jobs</p>
        </div>

        {/* Scroll-to-Top Button */}
        <div className="w-14 h-14 rounded-full bg-lime-300 items-center justify-center cursor-pointer mt-4 md:mt-0 hidden md:flex">
  <BsArrowUp size={30} />
</div>

      </div>

      {/* Footer Bottom */}
      <div className="w-full h-10 bg-lime-300 flex items-center justify-center">
        <p className="text-white text-sm">Copyright © 2023 Probatterirep - All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
