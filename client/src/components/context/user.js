//src/context/user.js
import React, { useState, useEffect } from "react"

const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
      if (data.error) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        fetchAuthors()
      }
    })
  }, [])

  const fetchAuthors = () => {
    fetch('/authors')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAuthors(data)
    })
  }

  const addAuthors = (author) => {
    fetch('/authors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(author)
    })
    .then(res => res.json())
    .then(data => {
      setAuthors([...authors, data])
    })
  }

  

  const login = (user) => {
    setUser(user)
    fetchAuthors()
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    fetchAuthors()
    setLoggedIn(true)
  }


  return (
    <UserContext.Provider value={{user, login, signup, logout, loggedIn, authors, addAuthors}}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }