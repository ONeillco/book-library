import React, { useState, useEffect } from "react"
// import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)


  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, [])


  const login = () => {
    // setUser(user)
   
    // setLoggedIn(true)
  }
  
  const logout = () => {
    // setUser({})
   
    // setLoggedIn(false)
  }
  
  const signup = () => {
    // setUser(user)
    
    // setLoggedIn(true)
  }


  return (
    <UserContext.Provider value={{ user }}>
    { children }
  </UserContext.Provider>
  )
}

export { UserContext, UserProvider }