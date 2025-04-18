import React from 'react';
import Product_card from '../Product_card/Product_card';

const Oversight_Data = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 py-10">
      {/* Heading Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl font-bold">
          Find dit <span className="text-lime-300">elcykel Batteri</span> I Vores Batteri Oversigt
        </h1>
        <p className="mt-4 text-sm font-semibold text-gray-600">
          Her finder du de mest almindelige elcykel batterier, som benyttes i Danmark, og som vi oftest renoverer. Hvis du ikke kan finde dit batteri, betyder det ikke, at vi ikke kan lave dit batteri. Du kan i bunden af denne side på kontakt formularen blive kontaktet så vi kan finde ud af hva batteri du har.
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="flex flex-col items-center gap-6 w-full px-5">
        {/* Render Product Cards */}
        <Product_card />
        <Product_card />
        <Product_card />
        <Product_card />
        <Product_card />
        <Product_card />
      </div>
    </div>
  );
};

export default Oversight_Data;
