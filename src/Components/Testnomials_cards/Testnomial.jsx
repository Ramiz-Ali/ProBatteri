import React from 'react';
import { IoStarOutline } from "react-icons/io5";

const TestimonialCard = ({ name, date, title, description, rating }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 max-w-sm mx-auto text-center">
     
      <div className="flex justify-center mb-4 space-x-1">
        {Array.from({ length: rating }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-8 h-8 bg-green-700 rounded-md"
          >
            <IoStarOutline className="text-white text-lg" />
          </div>
        ))}
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      {/* Footer */}
      <div className="text-gray-500 text-sm">
        <span className="font-bold text-gray-700">{name}</span> &bull; {date}
      </div>
    </div>
  );
};

const Testnomial = () => {
  const testimonials = [
    {
      name: "Jens Mouritsen",
      date: "13 Jan 2024",
      title: "Peter hjalp med ordre online",
      description: "Peter hjalp med ordre online og hade label et par timer efter. Så nu..",
      rating: 5,
    },
    {
      name: "Anna Nielsen",
      date: "10 Jan 2024",
      title: "Fantastisk service!",
      description: "Hurtig og venlig service. Mit batteri blev renoveret perfekt!",
      rating: 5,
    },
    {
      name: "Mads Kristensen",
      date: "8 Jan 2024",
      title: "Godt produkt",
      description: "Fik det jeg havde bestilt, og det fungerer rigtig godt.",
      rating: 4,
    },
    {
      name: "Sara Hansen",
      date: "5 Jan 2024",
      title: "Meget tilfreds",
      description: "Meget hurtig levering og venlig kundeservice.",
      rating: 5,
    },
  ];

  return (
    <div className="mt-20 px-6">
      <h1 className="text-3xl font-bold text-center text-[#A6C772] mb-10">
        Kundeanmeldelser
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testnomial;
