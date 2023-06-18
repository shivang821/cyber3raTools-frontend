import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Tools from './component/Tools/Tools'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      {/* <Routes>
        <Route path='/tools' element={} />
      </Routes> */}
      <Tools/>
    </>
  )
}

export default App
