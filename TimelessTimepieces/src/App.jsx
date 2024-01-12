import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
