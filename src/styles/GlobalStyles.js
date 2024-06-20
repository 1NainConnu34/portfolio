// src/styles/GlobalStyles.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0a192f;
    color: #ccd6f6;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
    height: 100%;
  }
  
  #root, html, body {
    height: 100%;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
