//src/context/user.js
import React, { useState, useEffect } from "react"
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [authors, setAuthors] = useState([])
  const [author, setAuthor] = useState([])
  const [ name, setName ] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()
  // const [ name, setName ] = useState("");
  // const [ author, setAuthor ] = useState(null);
  


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

// const fetchAuthors = () => {
//   useEffect(() => {
//     fetch("/authors")
//       .then((r) => r.json())
//       .then(setAuthors);
//   }, []);
// }

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



  // useEffect(async () => {
  //   debugger
  //   const resp = await fetch(`/authors/${id}`)
  //   const data = await resp.json();
  //   // fetchAuthors()
  //   setAuthor(data);
  //   setName(data.name);
    
  //   console.log(data)
  // }, [])

  //   const updateAuthors = async e => {
  //   e.preventDefault();
  //   // updateAuthors()
  //   // updateAuthors(authors)
  //   const headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  //   const body = { name: name }
  //   const options = {
  //     method: "PATCH",
  //     headers,
  //     body: JSON.stringify(body)
  //   }
  //   await fetch(`authors/${ author.id }`, options)
  // }

  


  // const updateAuthors = (author) => {
  //   debugger
  //   fetch(`/authors/${author.id}`, {
  //     method: 'PATCH',
  //     headers: { 
  //       "Accept": "application/json",
  //       'Content-Type': 'application/json'},
  //       body: JSON.stringify(author)
  //     })
  //     .then(res => res.json())
  //     .then(data => {
  //     debugger
  //    console.log( data )
  //         // setAuthor(data)
  //         setName(data.name)

  //   })
  // }


 
  

  // const updateAuthor = (author) => {
  //   useEffect(async () => {
  //     const resp = await fetch(`/authors/${id}`)
  //     const data = await resp.json(author);
  //     setAuthors(data);
  //     setName(data.name);
  //     // setLoading(false);
  //   }, [])
  // }


  // function onDeleteSpice(deletedSpice) {
  //   setAuthors((spices) =>
  //     spices.filter((spice) => spice.id !== deletedSpice.id)
  //   );
  // }

  // function deleteAuthor() {
  //   fetch(`/authors/${id}`, {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       onDeleteSpice(spice);
  //     }
  //   });
  // }


const deleteAuthor = (author) => {
    debugger
    fetch(`/authors/${author.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      navigate('/authors')
      if(res.ok){
      } else {
        res.json().then(console.log)
      }
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
    <UserContext.Provider value={{user, login, signup, logout, loggedIn, authors, addAuthors, fetchAuthors,  deleteAuthor }}>
        {children}
    </UserContext.Provider>
    
  )
}

export { UserContext, UserProvider }