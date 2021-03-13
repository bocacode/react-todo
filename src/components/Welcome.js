import React, { useContext } from 'react'
import { Avatar } from 'antd'
import { UserContext } from '../App'

function Welcome(){
  const { user } = useContext(UserContext)
  return (
    <h1>
      Welcome {user ? user.displayName : 'Guest'}!&nbsp;
      {user && <Avatar size={32} src={user.photoURL} />}
    </h1>
  )
}

export default Welcome
