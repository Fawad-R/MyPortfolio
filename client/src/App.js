import React from 'react'
import Home from './Pages/Home'
import { Route,Routes } from "react-router-dom";
import './App.css'
import Login from './Pages/Login';
import Upload from './Pages/Upload';
const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/upload' element={<Upload/>} />
    </Routes>
  )
}

export default App