import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/GlobalStyles"
import  Providers from './providers';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers> 
    <GlobalStyle />
    <App />
    </Providers>
  </React.StrictMode>
);

