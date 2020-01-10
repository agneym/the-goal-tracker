import { createGlobalStyle } from "styled-components";

import asteroidsImage from "../images/asteroids.jpg";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    color: ${props => props.theme.colors.gray[900]};
    background: 
      url(${asteroidsImage}) center repeat,
      linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) 40%, transparent) center no-repeat; 
    background-blend-mode: overlay;
  }
  html * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
  }
`;

export default GlobalStyles;
