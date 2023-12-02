import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './ComponentsAndStyles/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
