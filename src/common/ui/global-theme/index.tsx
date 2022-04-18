import { createGlobalStyle } from 'styled-components';

interface Props {
  darkModeColours: { [key: string]: string };
}

const GlobalTheme = createGlobalStyle<Props>`
    body {
        margin: 0;
        background-color: ${(p) => p.darkModeColours.background};

        h1 {
          font-family: 'Prata', serif;
          font-weight: 100;
          letter-spacing: 2px;
          margin: 0;
        }

        h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 100;
          margin: 0;
        }

        font-family: 'Lato', sans-serif;
        color: ${(p) => p.darkModeColours.text};

        transition: background-color 0.1s, color 0.1s;
    }
`;

export default GlobalTheme;
