import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Navbar2 from '../Components/Navbar/Navbar2'
import Oversight_Data from '../Components/Oversight_Data/Oversight_Data'
import Footer from '../Components/Footer/Footer'
import FAQ from '../Components/Faq/Faq'
import ContactForm from '../Components/ContactForm'

const Oversight = () => {
  return (
    <div>
       <Navbar/>
       <Navbar2/>
       <Oversight_Data/>
       <ContactForm/>
       <FAQ/>
       <Footer/>
    </div>
  )
}

export default Oversight
