import React from "react";
import ReactDOM from "react-dom";

const cust = {
  color: "red",
  fontSize: "20px",
  backgroundcolor: "red",
};

cust.border = "1px solid blue";

ReactDOM.render(
  <div>
   <h1 style={cust}>Hello World!</h1>
   <h1 style={{color: "red"}}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
