import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import {UserProvider } from './context/user'


function App(props) {

  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App