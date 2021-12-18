import React, { useContext } from 'react'
import { UserContext } from './user'

const Home = () => {
  const { user, loggedIn } = useContext(UserContext)

  if (!user || user.error) {
    return <h3>Please Log In Or Signup</h3>
    }
  return (
    <div>
      <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Home

