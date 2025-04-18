import React from 'react';

const ContactForm = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center  py-12">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row border-2 border-lime-300">
    
        <div className="md:w-1/2 relative overflow-hidden rounded-tl-2xl rounded-bl-2xl">
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col justify-center items-center p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Kunne du ikke finde dit batteri i vores batteri oversigt?
            </h2>
            <p className="text-gray-700 text-center">I tvivl om dit batteri kan laves?</p>
          </div>
        </div>

        {/* Form Section (Right) */}
        <div className="md:w-1/2 p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-1">Navn</label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-4 py-2 w-full outline-lime-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefon nummer</label>
              <input
                type="tel"
                id="phone"
                className="border border-gray-300 rounded px-4 py-2 w-full outline-lime-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded px-4 py-2 w-full outline-lime-300"
              />
            </div>
            <div>
              <label htmlFor="Message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <input
                type="Message"
                id="Message"
                className="border border-gray-300 rounded px-4 py-2 w-full outline-lime-300"
              />
            </div>
            
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700 text-sm">Jeg accepterer at [indsæt tekst om vilkår og betingelser]</label>
            </div>
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-3 px-5 rounded w-fit focus:outline-none focus:ring focus:ring-green-300">
              Bliv Kontaktet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;