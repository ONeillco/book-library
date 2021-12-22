import React, { useState, useContext } from 'react'
import { NavLink, Route, useParams } from "react-router-dom"
import AuthorForm from './AuthorForm'
import { UserContext } from './context/user'
import EditAuthor from './EditAuthor'


const Authors = () => {
  const {authors, loggedIn, deleteAuthor, updateAuthors} = useContext(UserContext)
  const [formFlag, setFormFlag] = useState(false)
  const params = useParams()
  const { id } = useParams();
  const [ name, setName ] = useState("");
  // const [ author, setAuthor ] = useState(null);
  // const [author, setAuthor] = useState([])

  const addAuthorFlag = () => {
    setFormFlag(false)
  }

  const handleDelete = (id) => {
    const writer = authors.find( a => a.id == id)
    deleteAuthor(writer)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   updateAuthors({
  //     name: name
  //   })
  //   // addAuthorFlag()
  // }

  // const handleChange = e => {
  //   updateAuthors({
  //     name: name})
  //   setName(e.target.value)
  // }

  // function handleDeleteAuthor(deletedAuthor) {
  //   setauthors((authors) =>
  //     authors.filter((author) => author.id !== deletedAuthor.id)
  //   );
  // }

  // const handleDelete = (leteAuthor) => {
  //   setAuthor((authors) =>
  //     authors.filter((author) => author.id !== leteAuthor.id)
  //   );
  // }

  const handleEdit = (id) => {
    // const editChamp = authors.find( d => d.id === id)
    // updateAuthors(editChamp)
  
  }

  if (loggedIn) {
    const authorsList = authors.map(a => <ul>Author Name: {a.name} <br /> 
    <button onClick={ () => handleDelete( a.id )}>delete</button>
     <h1>{ authors.name }</h1><NavLink  to={`/authors/edit`}> <button onClick={  handleEdit}>Edit Author</button></NavLink> </ul>)
  return (
    <div>
      <h2>Authors:</h2>
      <br />
      {/* <div><NavLink to="/authors/edit" > {authorsList}<button>edit Authors</button></NavLink></div> */}
       {authorsList}
       <br />
        {formFlag ? <AuthorForm addAuthorFlag={addAuthorFlag}/> :
         <button onClick={() => setFormFlag(true)}>Add Author</button> }
         <br />

         <div>
        <h1>{ authors.name }</h1>
        <p><NavLink to={`/authors/${ authors.id }/edit`}>Edit Author</NavLink></p>
        {/* <p><NavLink to={`/authors/${ author.id }/books/new`}>Create Book</NavLink></p> */}
        {/* { bookCards } */}
      </div>
         {/* <div>
      <h1>Edit { authors.name }</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Update Author" />
      </form>
    </div> */}
    </div>
  )
  } else {
    return (
      <h3>Access Denied - Please Signup or Login </h3>
    )
  }
}

export default Authors
