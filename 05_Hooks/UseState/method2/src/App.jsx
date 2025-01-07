import React, { useState } from 'react';

const App = () => {

  // const [variable,function] = useState(initial_value)

  const [count, setCount] = useState(0);

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
    </div>
  );
};

export default App;
