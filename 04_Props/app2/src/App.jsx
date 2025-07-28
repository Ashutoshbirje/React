import { useState } from 'react'
import './App.css'
import Usercard from './Components/child'
import Fnx from './Components/fnx'

function App() {
 
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
      <div>
        <Usercard name="Ashutosh Birje">
          {/*child */}
          <h1>Best WEB DEV course</h1>
          <p>Trying to be consistent in this</p>
          <p>Will complete the cource soon</p>
        </Usercard>
        <Usercard>
          Best WEB DEV course
        </Usercard>
        <Usercard children="This is children`">
        </Usercard>
        <Fnx incermentCount={handleClick} text="click me">
           <h1>{count}</h1>
        </Fnx>
      </div>
  )

}

export default App
