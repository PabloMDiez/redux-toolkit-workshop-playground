import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App apiBaseUrl='myBaseUrl' />
  </React.StrictMode>,
  document.getElementById('root')
);
