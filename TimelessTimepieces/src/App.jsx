import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RolexPage from './components/RolexPage'
import PatekPage from './components/PatekPage'
import OmegaPage from './components/OmegaPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rolex" element={<RolexPage />} />
        <Route path="/patek" element={<PatekPage />} />
        <Route path="/omega" element={<OmegaPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
