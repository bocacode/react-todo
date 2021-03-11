import React, { useContext } from 'react'
import { UserContext } from '../App'

function Welcome(){
  const { user } = useContext(UserContext)
  return <h1>Welcome {user || 'Guest'}!</h1>
}

export default Welcome
