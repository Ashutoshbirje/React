import React, { useState } from 'react';

const App = () => {

  // const [variable,function] = useState(initial_value)

  const [count, setCount] = useState(0);

  // Object as state 
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  
  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }
  
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
    <div style={cardStyle}>
      <button
        style={buttonStyle}
        onClick={() => setCount((count) => count + 1)}
        // onClick={() => {setCount(count + 1)}}
      >
        count is {count}
      </button>
      
      {/* Object as state  */}
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      {/* // update object state  */}
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>

    </div>
       
  );
};

export default App;
