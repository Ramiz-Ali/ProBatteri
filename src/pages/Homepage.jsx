import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar/Navbar2'
import Hero from '../Components/Hero/Hero'
import Battery_card from '../Components/Battery-cards/Battery_card'
import Product_card from '../Components/Product_card/Product_card'
import Mobile_Content from '../Components/Mobile_content/Mobile_Content'
import Cards2 from '../Components/Cards2/Cards2'

import Banner from '../Components/Banner/Banner'
import FAQ from '../Components/Faq/Faq'
import Footer from '../Components/Footer/Footer'
import Testnomial from '../Components/Testnomials_cards/Testnomial'

const Homepage = () => {
  return (
    <div>
       <Navbar/>
       <Navbar2/>
       <Hero/>
       <Battery_card/>
       <div className='flex flex-col items-center mt-16'>
       <h1 className="text-[#A6C772] font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
          De mest hyppigste batterier vi renoverer
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-black text-center mt-4 max-w-3xl">
          Vælg en renovering og spar op til 50% i forhold til at købe et nyt
          elcykelbatteri. Vi kan renovere dit gamle batteri ved at udskifte den
          gamle batteripakke, så dit tidligere elcykelbatteri kører som nyt. Du
          sparer ikke kun penge, men hjælper også med at skåne miljøet.
          Derudover kan du opgradere og få op til 70% mere kapacitet i samme
          batterikasse, så du kan køre 70% længere end ved køb af et nyt
          batteri. 2 Års garanti på din renovering og hurtig levering
        </p>
        </div>
       <Product_card/>
       <Mobile_Content/>
       <Cards2/>
       <Testnomial/>
       <Banner/>
       <FAQ/>
       <Footer/>
    </div>
  )
}

export default Homepage
