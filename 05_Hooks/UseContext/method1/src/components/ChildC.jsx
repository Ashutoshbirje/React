import React, { useContext } from 'react'
import { UserContext } from '../App'

function ChildC() {
  const {user,setUser}= useContext(UserContext);
  function handleClick(){
      (user === 'Light')?setUser('Dark'):setUser('Light');
  }
  return (
    <button onClick={handleClick}>Change User</button>
  )
}

export default ChildC