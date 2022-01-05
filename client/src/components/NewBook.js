import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

const NewBook = () => {
  const [author, setAuthor] = useState(null);
  const { loggedIn} = useContext(UserContext)
  const navigate = useNavigate()
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
 

  useEffect(async () => {
    const resp = await fetch(`/authors/${id}`)
    const data = await resp.json();
    setAuthor(data);
    setLoading(false);
  }, [])

  if(loading){ return <h1>Loading...</h1>};

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  const addBook = (book) => {
    fetch(`/authors/${author.id}/books`, {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => {
        setAuthor({
          ...author,
          books: [...author.books, data] 
        })
        navigate(`/authors/${id}`)
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(book)
  }


  if(loggedIn) {
  return (
    <div>
      <h3>Create Book For { author.name }</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={ book.title } onChange={ handleChange } />
        </div>
        <br />
        <div>
          <label htmlFor="genre">Genre: </label>
          <input type="text" name="genre" value={ book.genre } onChange={ handleChange } />
        </div>
        <br />
        <input type="submit" value="Create Book" />
      </form>
    </div>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default NewBook
