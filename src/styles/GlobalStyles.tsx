import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
  }
`;

export default GlobalStyles;
