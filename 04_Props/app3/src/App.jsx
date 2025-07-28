import './App.css'
import Card from './Components/Card' 
import { useState } from 'react';

function App() {
  // create state
  const [name,setName]=useState(' ');

  // manage state

  // change state

  // all child me state ko sync karo

  return (
      <div>
        <Card title="Card1" name={name} setName={setName}/>
        <p>I am inside parent component and value of name is {name}</p>
        <Card title="Card1" name={name} setName={setName}/>
      </div>
  )
}

export default App
