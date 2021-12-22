import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/context/Home'
import Login from './components/sessions/Login'
import Nav from './components/navigation/Nav';
import Signup from './components/sessions/Signup'
import {UserProvider } from './components/context/user'
import Authors from './components/Authors';
import AuthorDetails from './components/AuthorDetails';
// import Alternate from './components/Alternate';
import EditAuthor from './components/EditAuthor';


function App(props) {

  return (
    <div>
      <UserProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/signup" element={<Signup />} /> 
          <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/authors" element={<Authors />} /> 
          {/* <Route exact path="/authors/edit" element={ <Alternate />} /> */}
          <Route exact path="/authors/edit" element={ <EditAuthor />} />
          <Route exact path="/authors/:id/edit" element={ <AuthorDetails /> } />
        </Routes>
      </UserProvider>
    </div>
  )
}

export default App