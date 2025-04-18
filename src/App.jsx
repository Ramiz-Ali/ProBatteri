import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter ,  Routes , Route } from 'react-router-dom'
import User_Cart from './pages/User_Cart'
import Billing from './pages/Billing'
import Oversight from './pages/Oversight'
import Data_Info from './pages/Data_Info'

const App = () => {
  return (
    <div>
         <BrowserRouter>
         <Routes>
           <Route path="/" element={<Homepage/>}/>
           <Route path="/Homepage" element={<Homepage/>}/>
           <Route path='/User_Cart' element={<User_Cart/>}/>
           <Route path='/Billing' element={<Billing/>} />
           <Route path='/Oversight' element={<Oversight/>}/>
           <Route path='/Data_Info' element={<Data_Info/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  )
}

export default App