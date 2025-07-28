import { useState } from 'react'
import './App.css'
import Childcomponent from './component/Childcomponent';

function App() {
  const [count, setCount] = useState(0)

  // function handleClick(){
  //   setCount(count + 1);
  // }
  
  const handleClick = useCallback(() => {
    setCount(count+1);
  },[count])

  return (
    <> 
       <div>
       count is {count}
       </div>
        <button onClick={handleClick }>
         Increament
        </button>
        {/* Unnesssary re-render */}
        <div>
          <Childcomponent buttonname="click me" handleClick={handleClick}/>
        </div>
    </>
  )
}

export default App
