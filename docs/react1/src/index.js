import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.jsx";
import Heading from "./List.jsx";
// import PI, { doublePi, triplePi } from "./math.js";
import * as pi from "./math.js";


// Parametres render:  Lo que quieres añadir y dónde
ReactDOM.render(
  <div>
    <Heading />
    <List />
    <List />
    <p> {pi.default} {pi.doublePi()} {pi.triplePi()} </p>
    {/* <p> {PI} {doublePi()} {triplePi()} </p> */}
  </div>,
  document.getElementById("root")
);
