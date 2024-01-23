import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App