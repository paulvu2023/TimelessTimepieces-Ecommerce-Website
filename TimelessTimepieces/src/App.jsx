import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
