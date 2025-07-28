// Set Up

// var React = require("react");
// var ReactDOM = require("react-dom");

// Set Up

import React from "react";
import ReactDOM from "react-dom";

// Syntax
// ReactDOM.rander(what_to_show,where_to_show,otional);

// React Code
// react works with JSX files
// Only takes Single HTML element
ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// Only takes Single HTML element
ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <p>This is para</p>
  </div>,
  document.getElementById("root")
);

// JS Code
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);
