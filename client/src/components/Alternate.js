import React, { useState, useEffect, useContext } from 'react'
import {  useParams } from 'react-router-dom'
import { UserContext } from './context/user'

const Alternate = () => {
  const [ name, setName ] = useState("");
  const [ author, setAuthor ] = useState(null);

  const { id } = useParams();
const {authors, loggedIn, updateAuthors} = useContext(UserContext)



useEffect(async () => {
  const resp = await fetch(`/authors/${id}`)
  const data = await resp.json();
  setAuthor(data);
  setName(data.name);
  // setLoading(false);
}, [])

const handleChange = e => {
  setName(e.target.value)
}

const handleSubmit = async e => {
  e.preventDefault();
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const body = { name: name }
  const options = {
    method: "PATCH",
    headers,
    body: JSON.stringify(body)
  }
  await fetch(`/authors/${ id }`, options)
  
  // history.push(`/authors/${ id }`);
  
  // redirect
}

// if(loading){ return <h1>Loading...</h1>};

return (
  <div>
      <h1>Edit { authors.name }</h1>
      <form>
       {/* onSubmit={ handleSubmit } */}
        <div>
          
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Update Author" />
        <button onClick={ handleSubmit }>Edit Author</button>
      </form>
    </div>
)

}
export default Alternate
