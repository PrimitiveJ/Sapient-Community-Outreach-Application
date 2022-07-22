import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

/*
    Some code that allows us to press 'w' when focused in the browser which
    will enable 'wireframe' mode, highlighting the border of every element.

    -Will, 07/16/2022 12:52AM
*/
// const allEl = document.querySelector("body");
// window.addEventListener("keydown", (event) => {
//   if (event.keyCode === 87) {
//     if (allEl.classList.contains("wireframe")) {
//       allEl.classList.remove("wireframe");
//     } else {
//       allEl.classList.add("wireframe");
//     }
//   }
// });

// Initiate react app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
