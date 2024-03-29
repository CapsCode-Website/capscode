import React from "react";
import { hydrate, render } from "react-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// below changes are made based on this: https://web.dev/prerender-with-react-snap/
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     rootElement
//   );
// } else {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     rootElement
//   );
// }
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
