import React from 'react'
import Home from './home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EcommercePage from './pages/ecommerce'
import Amricantourist from './pages/amricantourist'
import Weather from './pages/Weather'
import Crypto from './pages/Crypto'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/ecommerce" element={<EcommercePage />} />
          <Route path="/pages/amricantourist" element={<Amricantourist />} />
          <Route path="/pages/weather" element={<Weather />} />
          <Route path="/pages/Crypto" element={<Crypto />} />
        </Routes>
      </Router>

    
    </>
  )
}

export default App
