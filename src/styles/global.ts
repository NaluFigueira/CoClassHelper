import { createGlobalStyle } from 'styled-components';
import { darken, lighten } from 'polished';

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

  button {
    padding: 15px;
    margin: 10px 0px;
    border: 2px solid ${lighten(0.2, '#9b9b9b')};
    background: transparent;
    border-radius: 4px;
    color: ${darken(0.3, '#9b9b9b')};
    transition: border-color 0.2s;
    width: 95%;

    &:hover {
      border-color: #04bfbf;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${darken(0.1, '#04BFBF')};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #04BFBF;
  }
`;
