import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Hvad koster en renovering?",
      answer: "Prisen på en renovering afhænger af batteriet og typen af skade.",
    },
    {
      question: "Er der Garanti på en renovering?",
      answer: "Ja, vi tilbyder 1 års garanti på alle renoveringer.",
    },
    {
      question: "Hvor lang tid tager det?",
      answer: "En renovering tager typisk 3-5 arbejdsdage.",
    },
    {
      question: "Er det nemt at sende sit batteri?",
      answer: "Ja, vi hjælper dig med at sende dit batteri sikkert.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 md:p-12 mt-10 rounded-md max-w-4xl mx-auto">
      {/* Section Title */}
      <p className="text-sm font-bold text-lime-500 uppercase tracking-widest mb-2">
        Mest Hyppige Spørgsmål
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-6">
        Få svar på dine spørgsmål
      </h2>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-3 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-base font-medium text-gray-800">
                {faq.question}
              </p>
              <BsPlus
                className={`text-lime-500 transition-transform ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
                size={24}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
