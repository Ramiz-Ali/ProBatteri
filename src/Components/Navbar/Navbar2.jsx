import React, { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white w-full h-[60px] shadow-md z-10 ">
      <div className="flex items-center justify-between px-6 h-full">
     
        <Link to="/Homepage" className='decoration-0 text-inherit'><h1 className="text-2xl font-bold text-gray-800">ProBatteri</h1></Link>
        
      
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        <div className="hidden lg:flex gap-6">
        <Link to="/Homepage" className='decoration-0 text-inherit'>
          <p  className="text-gray-600 hover:underline hover:text-green-600">
            Forside
          </p>
          </Link>
          <Link to="/Oversight" className='decoration-0 text-inherit'>
          <p  className="text-gray-600 hover:underline hover:text-green-600">
            Batteri oversigt
          </p></Link>
          <a href="#" className="text-gray-600 hover:underline hover:text-green-600">
            Problemer med elcyklen?
          </a>
          <a href="#" className="text-gray-600 hover:underline hover:text-green-600">
            Hvad er en renovering FAQ
          </a>
          <a href="#" className="text-gray-600 hover:underline hover:text-green-600">
            Kontakt
          </a>
        </div>

      
        <div className="hidden lg:flex items-center gap-2">
          <label htmlFor="search" className="text-gray-600">Search:</label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Link to="/User_Cart" className="decoration-0 text-inherit">
          <FiShoppingCart className="text-green-500 w-6 h-6 cursor-pointer" /> </Link>
        </div>
      </div>

      {/* Mobile Menu */}
{isMenuOpen && (
  <div
    className="absolute top-0 left-0 w-full flex flex-col items-start px-6 py-4 lg:hidden z-50 bg-transparent mt-24 backdrop-blur-md"
    style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: Slight white transparency for visibility
    }}
  >
    <a href="#" className="text-gray-600 hover:underline hover:text-green-600 mb-2">
      Forside
    </a>
    <a href="#" className="text-gray-600 hover:underline hover:text-green-600 mb-2">
      Batteri oversigt
    </a>
    <a href="#" className="text-gray-600 hover:underline hover:text-green-600 mb-2">
      Problemer med elcyklen?
    </a>
    <a href="#" className="text-gray-600 hover:underline hover:text-green-600 mb-2">
      Hvad er en renovering FAQ
    </a>
    <a href="#" className="text-gray-600 hover:underline hover:text-green-600 mb-4">
      Kontakt
    </a>
    <div className="flex items-center gap-2">
      <label htmlFor="search-mobile" className="text-gray-600">Search:</label>
      <input
        type="text"
        id="search-mobile"
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <Link to='/User_Cart' className="decoration-0 text-inherit">
          <FiShoppingCart className="text-green-500 w-6 h-6 cursor-pointer" /> </Link>
  </div>
)}
    </div>
  );
};

export default Navbar2;
