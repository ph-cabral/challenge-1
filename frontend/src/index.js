import "babel-polyfill";
import "react-app-polyfill/ie11";
import './index.css'
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ScreenLogIn from './screens/ScreenLogIn';
import ScreenUsuario from './screens/ScreenUsuario';
import Error from './screens/404'
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { ThemeContextProvider } from './context/moveContext'


ReactDOM.render(
  <Provider store={generateStore()}>
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScreenLogIn />} />
          <Route path="/DatesUsers" element={<ScreenUsuario />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </Provider >,
  document.getElementById("root")
);

serviceWorker.unregister();
