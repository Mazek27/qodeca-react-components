import { css } from '@emotion/react';

import { THEME } from './theme';
import { font } from './typography';

export default css`
  body,
  html,
  #root,
  .App {
    overflow-y: hidden;
    background: ${THEME.color.background};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    font-family: ${font.poppins};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  #__next {
    display: grid;
    grid-template-columns: auto min(90vw, ${THEME.layout.largeContainerWidth}) auto;
    grid-gap: 20px;

    grid-template-areas:
      '. header .'
      '. main .'
      'footer footer footer';
    grid-row-gap: 25px;
    height: 100%;
    padding: 0;
    margin: 0 auto;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline-width: 0;
    appearance: none;
  }

  input:focus,
  select:focus,
  button:focus,
  textarea:focus {
    outline-width: 1px;
  }

  section:focus {
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 5px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  /* Track */

  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    background: #e5e8f1;
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: #b7b9c0;
  }
`;
