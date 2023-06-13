import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    font: 16px 'Roboto', sans-serif;
    background: ${props => props.theme.background};
    padding: 0px 10rem;

  }
  :focus {
    outline: 0;
  }
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
  }

  button, .checkmark {
    cursor: pointer;
  }
`;