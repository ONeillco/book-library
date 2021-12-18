import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const AuthorForm = ({addAuthorFlag}) => {
  const [name, setName] = useState("")
  const { addAuthors  } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addAuthors({
      name: name
    })
    addAuthorFlag()
  }

  return (
       <div>
         <h3>Add Your New Author</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        /> <br/>
        {/* <label>Origin</label>
        <input
        type="text"
        id="origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
        /> <br/>
        <label>Category </label>
        <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        /> <br/> */}
        <input type="submit"/>
     </form>
    </div>
  )
}

export default AuthorForm