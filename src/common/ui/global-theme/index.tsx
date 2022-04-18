import { createGlobalStyle } from 'styled-components';

interface Props {
  isDarkMode: boolean;
}

const GlobalTheme = createGlobalStyle<Props>`
    body {
        margin: 0;
        background-color: ${(props) =>
          props.isDarkMode ? '#222222' : 'white'};

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
    }
`;

export default GlobalTheme;
