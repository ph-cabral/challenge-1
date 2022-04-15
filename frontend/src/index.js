import "babel-polyfill";
import "react-app-polyfill/ie11";

import ReactDOM from "react-dom";
import React from "react";
import * as serviceWorker from "./serviceWorker";

const MyWelcome = () => "Welcome to Inceptia ReactJS Challenge!";

ReactDOM.render(
  <MyWelcome/>,
  document.getElementById("root")
);

serviceWorker.unregister();
