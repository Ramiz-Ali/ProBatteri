import React from "react";

const OrderForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-8">

      <div className="w-full lg:w-2/3 bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Billing Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-stone-400" htmlFor="fullName">
              Fulde Navn
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full border border-gray-300 rounded px-3 py-2 text-stone-400 outline-lime-300"
              placeholder="Adam"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-stone-400" htmlFor="address">
              Adresse
            </label>
            <input
              type="text"
              id="address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-stone-400 outline-lime-300"
              placeholder=""
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-stone-400" htmlFor="cvr">
              Virksomheds CVR ikke obligatorisk
            </label>
            <input
              type="text"
              id="cvr"
              className="w-full border border-gray-300 rounded px-3 py-2 text-stone-400 outline-lime-300" 
              placeholder=""
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-stone-400" htmlFor="postNumber">
              Post nummer
            </label>
            <input
              type="text"
              id="postNumber"
              className="w-full border border-gray-300 rounded px-3 py-2 text-stone-400 outline-lime-300"
              placeholder="0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-stone-400" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-stone-400 outline-lime-300"
            >
              <option value="Denmark">Denmark</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-stone-400"  htmlFor="phoneNumber">
              Telefon nummer
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full border border-gray-300 rounded px-3 py-2 text-stone-400 outline-lime-300"
              placeholder="+45"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1 text-stone-400" htmlFor="comments">
              Kommentar til ordre
            </label>
            <textarea
              id="comments"
              className="w-full border border-gray-300 rounded px-3 py-2 text-stone-400 outline-lime-300"
              rows="4"
            ></textarea>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded shadow-md mt-8 lg:mt-0 lg:ml-6">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span>Promotive 36 V</span>
            <span>2,400 kr</span>
          </li>
          <li className="flex justify-between">
            <span>Promotive 36 V</span>
            <span>5,000 kr</span>
          </li>
          <li className="flex justify-between">
            <span>Charger 50W</span>
            <span>5,000 kr</span>
          </li>
        </ul>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="flex justify-between font-bold text-lg mt-40">
          <span>Total Cost</span>
          <span>10,000 kr</span>
        </div>
        <button className="w-full bg-black text-white py-2 mt-4 rounded">
          Gennemfør bestillingen og modtag din label
        </button>
      </div>
    </div>
  );
};

export default OrderForm;