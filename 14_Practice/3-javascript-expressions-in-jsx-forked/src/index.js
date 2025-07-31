import React from "react";
import ReactDOM from "react-dom";

const name = "ashutosh";
const lucky = 57;

//  Js >> (Html) >> {Js}

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <h1>Hello {name + " " + name}</h1>
    <h1>
      Hello {name} {name}
    </h1>
    <h1>Hello {`${name} ${name}`}</h1>
    <p>Your lucky number is {lucky}</p>
  </div>,
  document.getElementById("root")
);

// Statement and Expression
// Youtube : Expression Vs Statement in JS  / intro to Javascript ES6 programming lesson 14
