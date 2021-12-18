import React, { useState, useContext } from 'react'
import { NavLink, Route, useParams } from "react-router-dom"
import AuthorForm from './AuthorForm'
import { UserContext } from './context/user'


const Authors = () => {
  const {authors, loggedIn} = useContext(UserContext)
  const [formFlag, setFormFlag] = useState(false)
  const params = useParams()

  const addAuthorFlag = () => {
    setFormFlag(false)
  }

  if (loggedIn) {
    const authorsList = authors.map(a => <ul>Author Name: {a.name}</ul>)
  return (
    <div>
      <h2>Authors:</h2>
      <br />
       {authorsList}
       <br />
        {formFlag ? <AuthorForm addAuthorFlag={addAuthorFlag}/> :
         <button onClick={() => setFormFlag(true)}>Add Author</button> }
         <br />
         
    </div>
  )
  } else {
    return (
      <h3>Access Denied - Please Signup or Login </h3>
    )
  }
}

export default Authors
