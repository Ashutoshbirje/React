import React, { useEffect, useRef, useState } from 'react';
import './App.css'
const App = () => {
  const [count, setCount] = useState(0);

  // value not persist accros re-render
  let val1 =1;
  // value persist accros re-render
  let val2 = useRef(1);

  function handleIncrement() {
    val1 = val1+ 1;
    console.log("The value is", val1); // always show 2

    val2.current = val2.current + 1;
    console.log("The value is", val2.current);

    setCount(count+1); // Updates the state and triggers a re-render
  }

  // Runs the effect on every render
  useEffect(() => {
    console.log("Component rendered or updated");
  }); 

  return (
    <div className='card'>
      <button
        className='button'
        onClick={handleIncrement}
      >
        Count is {count}
      </button>
    </div>
  );
};

export default App;
