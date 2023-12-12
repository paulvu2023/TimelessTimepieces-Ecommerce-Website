import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './styles.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Navbar />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
