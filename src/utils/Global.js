import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
  }
  html * {
    box-styling: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`;

export default GlobalStyles;
