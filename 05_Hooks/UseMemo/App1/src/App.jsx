import React, { useState , useMemo} from 'react';
import './App.css'

function App() {
 
   const [count, setCount] = useState(0);
   const [input, setInput] = useState(0);

   function expensivetask(num){
    console.log("Inside the expensive task");
    for (let index = 0; index < 1000000; index++) {
      //  Expansive task
    }
     return num*2;
   }
   
  //  let doublevalue = expensivetask(input);
   let doublevalue = useMemo(() => expensivetask(input),[input]);

   const cardStyle = {
     textAlign: 'center',
     backgroundColor: '#ffffff',
     padding: '20px 40px',
     borderRadius: '10px',
     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     maxWidth: '300px',
     margin: '50px auto',
   };
 
   const buttonStyle = {
     padding: '10px 20px',
     fontSize: '16px',
     color: '#ffffff',
     backgroundColor: '#007bff',
     border: 'none',
     borderRadius: '5px',
     cursor: 'pointer',
     transition: 'background-color 0.3s',
   };

  return (
    <>
       <div style={cardStyle}>
      <button
        style={buttonStyle}
        onClick={() => setCount((count) => count + 1)}

      >
        count is {count}
      </button>
      <input type="number" placeholder='Enter a number ' value={input} onChange={(e) => setInput(e.target.value)} />
      <div>{doublevalue}</div>
    </div>
    </>
  )
}

export default App
