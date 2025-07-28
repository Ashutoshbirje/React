import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const naviagate = useNavigate();

  function handleClick(){
      naviagate('/About')
  }
  return (
    <div>Home 
      <button onClick={handleClick}>Move to about Page</button>
    </div>
  )
}

export default Home