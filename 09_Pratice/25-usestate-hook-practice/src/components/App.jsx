import React, { useState } from "react";

function App() {
  setInterval(update, 1000);

  let now = new Date().toLocaleTimeString();

  const [time, settime] = useState(now);

  function update() {
    let nEWTIME = new Date().toLocaleTimeString();
    console.log("called");
    settime(nEWTIME);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
