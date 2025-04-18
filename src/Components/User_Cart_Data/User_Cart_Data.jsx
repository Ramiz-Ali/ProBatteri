import React from 'react'
import Bag from '../../assets/Bag.png'
import product1 from '../../assets/product 02 1.png'
import { Link } from 'react-router-dom'

const User_Cart_Data = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6 w-full h-fit bg-gray-100'>
        <div className='flex flex-col px-8 py-7 gap-6 w-full md:w-[60%] bg-white'>
            <div className='flex gap-2 items-center'>
                <img src={Bag} alt="" className="w-8 h-8" />
                <p className='text-sm font-bold'>Min Kurv</p>
            </div>
            <div className="w-full h-1 border-t border-lime-500"></div>
            <div className='flex gap-12 md:gap-36 items-center '>
                <p className='text-stone-400 text-sm font-bold'>Product Details</p>
                <p className='text-stone-400 text-sm font-bold'>Type</p>
                <p className='text-stone-400 text-sm font-bold'>Price</p>
            </div>
            {/* Product 1 */}
            <div className='flex gap-6 md:gap-32 py-4'>
                <img src={product1} alt="" className="w-24 h-24 md:w-32 md:h-32 object-cover" />
                <div className='flex flex-col gap-5'>
                    <p className='font-bold text-sm text-black'>Promovec 36V</p>
                    <p className='font-bold text-sm text-stone-400'>Battery</p>
                    <p className='font-bold text-sm text-stone-400 cursor-pointer hover:text-black underline'>Remove</p>
                </div>
                <p className='font-bold text-sm text-stone-400'>Renovate</p>
                <p className='font-bold text-sm text-stone-400'>2.549 DKK inklusiv moms</p>
            </div>
            <div className="w-full h-1 border-t border-lime-500"></div>
            {/* Product 2 */}
            <div className='flex gap-6 md:gap-32 py-4'>
                <img src={product1} alt="" className="w-24 h-24 md:w-32 md:h-32 object-cover" />
                <div className='flex flex-col gap-5'>
                    <p className='font-bold text-sm text-black'>Promovec 36V</p>
                    <p className='font-bold text-sm text-stone-400'>Battery</p>
                    <p className='font-bold text-sm text-stone-400 cursor-pointer hover:text-black underline'>Remove</p>
                </div>
                <p className='font-bold text-sm text-stone-400'>Renovate</p>
                <p className='font-bold text-sm text-stone-400'>2.549 DKK inklusiv moms</p>
            </div>
            <div className="w-full h-1 border-t border-lime-500"></div>
            {/* Product 3 */}
            <div className='flex gap-6 md:gap-32 py-4'>
                <img src={product1} alt="" className="w-24 h-24 md:w-32 md:h-32 object-cover" />
                <div className='flex flex-col gap-5'>
                    <p className='font-bold text-sm text-black'>Promovec 36V</p>
                    <p className='font-bold text-sm text-stone-400'>Battery</p>
                    <p className='font-bold text-sm text-stone-400 cursor-pointer hover:text-black underline'>Remove</p>
                </div>
                <p className='font-bold text-sm text-stone-400'>Renovate</p>
                <p className='font-bold text-sm text-stone-400'>2.549 DKK inklusiv moms</p>
            </div>
            <div className="w-full h-1 border-t border-lime-500"></div>
        </div>

        {/* Order Details Section */}
        <div className="bg-gray-100 pt-10 w-fi md:w-[40%] min-h-screen flex justify-center">
            <div className="max-w-md w-full h-fit bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-7">Order Details</h2>

                <div className="flex justify-between mb-5">
                    <span>Items 03</span>
                    <span>10,000 kr</span>
                </div>

                <div className="mb-8">
                    <label htmlFor="discount" className="block text-gray-700 text-sm font-bold mb-2">
                        Discount Code
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            id="discount"
                            name="discount"
                            placeholder="Enter your code"
                            className="border border-gray-300 rounded-l-md px-3 py-2 w-full outline-lime-300"
                        />
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md focus:outline-none focus:ring focus:ring-green-300">
                            Apply
                        </button>
                    </div>
                </div>

                <div className="mb-8 text-sm">
                    <div className="flex items-start">
                        <input type="checkbox" id="terms" name="terms" className="mt-1 mr-2" />
                        <label htmlFor="terms" className="text-gray-700">
                            Jeg bekræfter at jeg har læst og forstået at batteriet ikke vejer over 20 kilo samt handelsbetingelserne for probatteri.dk / probotrep.dk
                        </label>
                    </div>
                </div>

                <div className="flex justify-between font-bold mb-4">
                    <span>Price estimate for renoveringen</span>
                    <span>2.549,00 DKK</span>
                </div>
             <Link to="/Billing" className='decoration-0 text-inherit'>
                <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded w-full">
                    Bestild renovering og modtag fragt label
                </button></Link>
            </div>
        </div>
    </div>
  )
}

export default User_Cart_Data
