import React from 'react'
import Mask2 from '../../assets/Mask2.png'
import image3 from '../../assets/image3.png'

const Cards2 = () => {
  return (
    <div className='flex flex-wrap gap-0 mt-20 justify-center'>
        <div className='w-72 sm:w-64 md:w-72 lg:w-80 h-96 flex flex-col items-center gap-0'>
             <img src={Mask2} alt="" className='' />
             <p className='text-center text-xs font-medium px-9'>Sparede 2900 Kroner i forhold til et nyt og fik også længere rækkevide end et nyt. Har kun været glad for at få renoveret mit batteri</p>
             <p className='font-extrabold pt-1'>Magnus Møller</p>
        </div>

        <div className='w-72 sm:w-64 md:w-72 lg:w-80 h-[550px] flex flex-col items-center justify-center gap-5'>
             <img src={image3} alt="" className='w-56 h-auto rounded-lg' />
             <p className='text-center text-xs font-medium px-9'>Ingen cykelhandler kunne skaffe et nyt batteri. Så var næsten ved at opgive. Kontaktede ProBatteri og nu køre cyklen igen efter de kunne lave mit gamle Elcykel batteri.</p>
             <p className='font-extrabold pt-1'>Erik Johansen</p>
        </div>

        <div className='w-72 sm:w-64 md:w-72 lg:w-80 h-96 flex flex-col items-center gap-0'>
             <img src={Mask2} alt="" className='' />
             <p className='text-center text-xs font-medium px-9'>Elcyklen kunne ikke køre mere end 12 kilometer og 5400 kroner for et nyt hos Bilka. Jeg prøvede en renovering og det har kun været posetivt. Både på prisen og på rækkeviden.!</p>
             <p className='font-extrabold pt-1'>Kristina</p>
        </div>

        <div className='w-72 sm:w-64 md:w-72 lg:w-80 h-[550px] flex flex-col items-center justify-center gap-5 '>
             <img src={image3} alt="" className='w-56 h-auto rounded-lg' />
             <p className='text-center text-xs font-medium px-9'>Var ved at købe en ny elcykel da batteriet ikke var på lager. Endte med at prøve en renovering og det har kun kørt godt. Ekstra kilometer og bedre træk op af bakker. </p>
             <p className='font-extrabold pt-1'>Jacob Skytte</p>
        </div>
    </div>
  )
}

export default Cards2
