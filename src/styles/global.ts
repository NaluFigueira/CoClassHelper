import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF;
    color: #9B9B9B;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,a,strong {
    font-weight: 500;
    color: #04BFBF;
    text-transform: uppercase;
  }

  button, h4 {
    cursor: pointer;
  }
`;
