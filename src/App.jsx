import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React,{ useEffect } from 'react'
import Header from './Components/Header.jsx'
import Mouse from './Components/Mouse.jsx'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'
import Contact from './Pages/Contact.jsx'
import Anjeli from './Pages/Shoots/Anjeli.jsx'
import DouEva from './Pages/Shoots/DouEva.jsx'
import DouWhite from './Pages/Shoots/DouWhite.jsx'
import Egypte from './Pages/Shoots/Egypte.jsx'
import EvaBlack from './Pages/Shoots/EvaBlack.jsx'
import EvaClem from './Pages/Shoots/EvaClem.jsx'
import EvaClem2 from './Pages/Shoots/EvaClem2.jsx'
import EvaCyborg from './Pages/Shoots/EvaCyborg.jsx'
import EvaWhite from './Pages/Shoots/EvaWhite.jsx'
import EvaWitch from './Pages/Shoots/EvaWitch.jsx'
import Pomme from './Pages/Shoots/Pomme.jsx'
import Sarah from './Pages/Shoots/Sarah.jsx'
import Synda from './Pages/Shoots/Synda.jsx'
import Moops from './Pages/Shoots/Moops.jsx'
import Ethan from './Pages/Shoots/Ethan.jsx'
import Imbh from './Pages/Shoots/Imbh.jsx'
import Retro from './Pages/Shoots/Retro.jsx'

function App() {
  
  return (
    <Router>
      <Header />
      <Mouse />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/anjeli" element={<Anjeli />} />
        <Route path="/doueva" element={<DouEva />} />
        <Route path="/douwhite" element={<DouWhite />} />
        <Route path="/egypte" element={<Egypte />} />
        <Route path="/evablack" element={<EvaBlack />} />
        <Route path="/evaclem" element={<EvaClem />} />
        <Route path="/evaclem2" element={<EvaClem2 />} />
        <Route path="/evacyborg" element={<EvaCyborg />} />
        <Route path="/evawhite" element={<EvaWhite />} />
        <Route path="/evawitch" element={<EvaWitch />} />
        <Route path="/pomme" element={<Pomme />} />
        <Route path="/sarah" element={<Sarah />} />
        <Route path="/synda" element={<Synda />} />
        <Route path="/moops" element={<Moops />} />
        <Route path="/ethan" element={<Ethan />} />
        <Route path="/imbh" element={<Imbh />} />
        <Route path="/retro" element={<Retro />} />
      </Routes>
    </Router>
  )
}

export default App
