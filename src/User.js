import React, { useContext } from 'react'
import { AppContext } from './UseContext';

function User(props) {
    const {username}=useContext(AppContext)
  return (
    <>
        <div>User: {username}</div>
    </>
  )
}

export default User