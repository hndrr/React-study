import React from "react";
import ReactDOM from "react-dom";

//import App from "./AppFuncComp";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App title="App" message="this is App Component" />,
  rootElement
);
