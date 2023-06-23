import React from "react";
import ReactDOM from "react-dom";

const fname = "Onur";
const lname = "Atas";
const luckyNumber = "28";

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname} !
    </h1>
    <p>my lucky number is {luckyNumber}!</p>
  </div>,
  document.getElementById("root")
);
