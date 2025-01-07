import React from "react";
import ReactDOM from "react-dom";
import * as cal from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{cal.add(1, 2)}</li>
    <li>{cal.multiply(2, 3)}</li>
    <li>{cal.subtract(7, 2)}</li>
    <li>{cal.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
