import { useState } from 'react'

import './App.css'
import Headers from './components/Header'
import { Outlet } from 'react-router-dom'
import Fouters from './components/Footer'

function App() {

  return (
    <>
    <Headers />
    <Outlet />
    <Fouters />
    </>
  )
}

export default App
