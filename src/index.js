import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./auth/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyleComponent = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Archivo Narrow', sans-serif;
  }
  body { 
    background-color: #72efdd;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <GlobalStyleComponent />
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
