//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2019, 1, 1, 18);
const currentTime = date.getHours();

let msg;
let a;

if (currentTime < 12) {
  msg = "Good Morning";
  a = "red";
} else if (currentTime < 18) {
  msg = "Good Afternoon";
  a = "green";
} else {
  msg = "Good Night";
  a = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={{ color: a }}>
    {msg}
  </h1>,
  document.getElementById("root")
);
