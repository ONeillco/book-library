// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

import React, { useState, useEffect, useContext } from 'react'
import {  useParams } from 'react-router-dom'
import { UserContext } from './context/user'


const EditAuthor = () => {
  // const [ name, setName ] = useState("");
  // const [ author, setAuthor ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  // const { id } = useParams();

  const [ name, setName ] = useState("");
  const [ author, setAuthor ] = useState(null);

  const { id } = useParams();
const {authors, loggedIn, updateAuthors} = useContext(UserContext)

  // const history = useHistory();

  useEffect(async () => {
    debugger
    const resp = await fetch(`/authors`)
    const data = await resp.json();
    setAuthor(data);
    setName(data.name);
    setLoading(false);
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
    await fetch(`/authors/${ authors.id }`, options)
    
    // history.push(`/authors/${ id }`);
    
    // redirect
  }

  if(loading){ return <h1>Loading...</h1>};

  return (
    <div>
      <h1>Edit { authors.name }</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Update Author" />
      </form>
    </div>
  )
}

export default EditAuthor









// import React, { useState, useEffect, useContext } from 'react'
// import {  useParams } from 'react-router-dom'
// import { UserContext } from './context/user'


// const EditAuthor = () => {
//   const [ name, setName ] = useState("");
//   const [ author, setAuthor ] = useState(null);

//   const { id } = useParams();
// const {authors, loggedIn, updateAuthors} = useContext(UserContext)


//   // useEffect(async () => {
//   //   const resp = await fetch(`/authors/${id}`)
//   //   const data = await resp.json();
//   //   fetchAuthors()
//   //   setAuthor(data);
//   //   setName(data.name);
    
//   //   console.log(data)
//   // }, [])

//   useEffect(async () => {
//     const resp = await fetch(`/authors/${authors.id}`)
//     const data = await resp.json();
//     setAuthor(data);
//     setName(data.name);
//     // setLoading(false);
//   }, [])

//   const handleChange = e => {
//     setName(e.target.value)
//   }


//   // const handleChange = e => {
//   //   debugger
//   //   // updateAuthors
//   //   setName(e.target.value)
  
//   const handleSubmit = async e => {
//     e.preventDefault();
//     const headers = {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//     const body = { name: name }
//     const options = {
//       method: "PATCH",
//       headers,
//       body: JSON.stringify(body)
//     }
//     await fetch(`/authors/${ authors.id }`, options)
    
    
    
//     // redirect
 


//   // const handleSubmit = (e) => {
//   //   e.preventDefault()
//   //   debugger
//     // updateAuthors({
//     //   name: name
//     // })
//     // addAuthorFlag()
//   // }



//   // const updateAuthors = async e => {
//   //   e.preventDefault();
//   //   // updateAuthors()
//   //   // updateAuthors(authors)
//   //   const headers = {
//   //     'Accept': 'application/json',
//   //     'Content-Type': 'application/json'
//   //   }
//   //   const body = { name: name }
//   //   const options = {
//   //     method: "PATCH",
//   //     headers,
//   //     body: JSON.stringify(body)
//   //   }
//   //   await fetch(`authors/${ author.id }`, options)
//   // }

 

//   return (
//     <div>
//       <h1>Edit { authors.name }</h1>
//       <form>
//        {/* onSubmit={ handleSubmit } */}
//         <div>
          
//           <label htmlFor="name">Name: </label>
//           <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
//         </div>
//         <br />
//         <input type="submit" value="Update Author" />
//         <button onClick={ handleSubmit }>Edit Author</button>
//       </form>
//     </div>
//   )
// }
//  }
// export default EditAuthor