import React, { useContext } from 'react'
import { UserContext } from './user'

const Home = () => {
  const { user, loggedIn } = useContext(UserContext)
  
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

export default Home

