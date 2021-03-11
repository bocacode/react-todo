import React, { useContext } from 'react'
import { UserContext } from '../App'

function Login() {
  const { user, setUser } = useContext(UserContext)
  return (
    <>
      <h1>Login</h1>
      {!user && 
        <button onClick={()=>setUser('Beth')}>LOGIN</button>
      }
    </>
  )
}

export default Login