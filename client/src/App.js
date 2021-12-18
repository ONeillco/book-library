import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Nav from './components/Nav'
import Signup from './components/Signup'
import {UserProvider } from './context/user'


function App(props) {

  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/signup" element={<Signup />} /> 
          <Route exact path="/login" element={<Login />} /> 
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App