import React, { useState, useEffect } from "react"
// import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function Userprovider({ children }) {


  return (
    <UserContext.Provider value={{ user }}>
    { children }
  </UserContext.Provider>
  )
}

export { UserContext, UseProvider }