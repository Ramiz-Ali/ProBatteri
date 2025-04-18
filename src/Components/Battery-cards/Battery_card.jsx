import React from 'react';
import B_card1 from '../../assets/Choose your battery@2x.png';
import B_card2 from '../../assets/Free Shipping Label.png';
import B_card3 from '../../assets/Find your battery.png';
import B_card4 from '../../assets/We Receive the Battery.png';
import B_card5 from '../../assets/Your Battery is Done.png';
import B_card6 from '../../assets/Free Shipping Label.png';

const Battery_card = () => {
  return (
    <div className='bg-white mt-10'>
      {/* Flex container for small screens and grid for larger screens */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6'>
        <img src={B_card1} alt="Choose your battery" className='w-full h-auto object-contain'/>
        <img src={B_card2} alt="Free Shipping Label" className='w-full h-auto object-contain'/>
        <img src={B_card3} alt="Find your battery" className='w-full h-auto object-contain'/>
        <img src={B_card4} alt="We Receive the Battery" className='w-full h-auto object-contain'/>
        <img src={B_card5} alt="Your Battery is Done" className='w-full h-auto object-contain'/>
        <img src={B_card6} alt="Free Shipping Label" className='w-full h-auto object-contain'/>
      </div>
    </div>
  );
};

export default Battery_card;
