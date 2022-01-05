import React, { useEffect, useState, useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

const BookDetails = () => {
  const [ book, setBook ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const { loggedIn} = useContext(UserContext)

  useEffect(async () => {
    debugger
    const resp = await fetch(`/books/${id}`)
    const data = await resp.json(book);
    debugger
    setBook(data);
    setLoading(false);
    debugger

  }, [])

  if(loggedIn) {
    return (
      <div>
        <h1>lalalalala</h1>
        <h1>{ book.title }</h1>
        <li> <NavLink to={`/authors/${ id }`}>{ book.author.name }</NavLink></li>
        <p>Genre: { book.genre }</p>
      </div>
    )
  } else {
    return (
      <h3>Access Denied - Please Signup or Login</h3>
    )
  }
  }



export default BookDetails;
