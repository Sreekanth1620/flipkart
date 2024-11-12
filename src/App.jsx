import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landingpage from './stores/pages/Landingpage'
import Mobilepage from './stores/pages/Mobilepage'
import Acpage from './stores/pages/Acpage'
import Bookspage from './stores/pages/Bookspage'
import Computerspage from './stores/pages/Computerspage'
import Menspage from './stores/pages/Menspage'
import Womenspage from './stores/pages/Womenspage'
import Fridgepage from './stores/pages/Fridgepage'
import Furniture from './stores/pages/Furniturepage'
import Furniturepage from './stores/pages/Furniturepage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'
import Acsingle from './singles/Acsingle'
import Womenssingle from './singles/Womenssingle'
import Menssingle from './singles/Menssingle'
import Furnituresingle from './singles/Furnituresingle'
import Fridgesingle from './singles/Fridgesingle'
import Computerssingle from './singles/Computerssingle'
import Bookssingle from './singles/Bookssingle'
function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/mobiles' element={<Mobilepage/>}/>
        <Route path='/ac' element={<Acpage/>} />
        <Route path='/books' element={<Bookspage/>}/>
        <Route path='/computer' element={<Computerspage/>}/>
        <Route path='/men' element={<Menspage/>}/>
        <Route path='/womens' element={<Womenspage/>}/>
        <Route  path='/fridge' element={<Fridgepage/>}/>
        <Route path='/furniture' element={<Furniturepage/>}/>
        <Route path='/mobile/:id' element={<MobileSingle/>}/>
        <Route path='/ac/:id' element={<Acsingle/>}/>
        <Route path='/books/:id' element={<Bookssingle/>}/>
        <Route path='/computers/:id' element={<Computerssingle/>}/>
        <Route path='/fridge/:id' element={<Fridgesingle/>}/>
        <Route path='/furniture/:id' element={<Furnituresingle/>}/>
        <Route path='/mens/:id' element={<Menssingle/>}/>
        <Route path='/womens/:id' element={<Womenssingle/>}/>

<Route path='/cart' element={<UserCart/>}/>



      </Routes>
     
      
    </div>
    </>
  )
}

export default App
