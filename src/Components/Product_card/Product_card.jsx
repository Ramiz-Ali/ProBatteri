import React from "react";
import Img_card1 from "../../assets/cykel-land-batteri-3-removebg-preview 2@2x.png";
import Img_card2 from "../../assets/product 01 1@2x.png";
import Img_card3 from "../../assets/product 02 1.png";
import { Link } from "react-router-dom";

const Product_card = () => {
  const cards = [
    {
      id: 1,
      imgSrc: Img_card1,
      altText: "Promovec 36V",
      title: "Promovec 36V",
      price: "1850 - 2999 DKK",
      oldPrice: "Fra: Kr. 3.098,00",
    },
    {
      id: 2,
      imgSrc: Img_card2,
      altText: "Product 01",
      title: "Product 01",
      price: "1850 - 2999 DKK",
      oldPrice: "Fra: Kr. 3.098,00",
    },
    {
      id: 3,
      imgSrc: Img_card3,
      altText: "Product 02",
      title: "Product 02",
      price: "1850 - 2999 DKK",
      oldPrice: "Fra: Kr. 3.098,00",
    },
    {
      id: 4,
      imgSrc: Img_card2,
      altText: "Product 01",
      title: "Product 01",
      price: "1850 - 2999 DKK",
      oldPrice: "Fra: Kr. 3.098,00",
    },
  ];

  return (
    <div className="mt-10 px-6">
      <div className="relative mt-6 overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white w-64 h-96 p-4 rounded-lg shadow-lg flex flex-col items-center text-center border border-gray-200 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt={card.altText}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h2 className="text-[#A6C772] font-bold text-lg sm:text-xl mb-2">
                {card.title}
              </h2>

              <p className="text-base font-semibold mb-2">{card.price}</p>

              <span className="text-sm text-gray-500 line-through">
                {card.oldPrice}
              </span>
             <Link to="/Data_Info" className="decoration-0 text-inherit">
              <button className="bg-[#A6C772] text-white w-full py-2 px-3 mt-3 rounded-lg hover:bg-[#8E9D52] transition-all">
                Vælg muligheder
              </button></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_card;
