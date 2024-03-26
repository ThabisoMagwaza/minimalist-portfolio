'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  body {
    line-height: 2;
    -webkit-font-smoothing: antialiased;
  }

  img, 
  picture, 
  video, 
  canvas, 
  svg {
    display: block;
    max-width: 100%;
  }

  input, 
  button, 
  textarea, 
  select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  html {
    --color-white: hsl(0deg, 0%, 100%);

    --color-primary-22: hsl(245deg, 10%, 22%);
    --color-primary-22-op50: hsl(245deg, 10%, 22%, 0.5);

    --color-secondary-21: hsl(205deg, 41%, 21%);
    --color-secondary-18: hsl(205deg, 41%, 18%);

    --color-accent-1-54: hsl(168deg, 36%, 54%);
    --color-accent-1-64: hsl(168deg, 88%, 26%);

    --border-light: 1px solid hsl(245deg, 41%, 22%, 0.15);

    scroll-behavior: smooth;
  }

  body {
    color: var(--color-primary-22);
    font-family: 'Public Sans', sans-serif;
  }

`;

export default GlobalStyles;
