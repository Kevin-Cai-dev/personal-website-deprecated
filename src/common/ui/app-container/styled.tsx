import { createGlobalStyle } from 'styled-components';

interface Props {
  isDarkMode: boolean;
}

const GlobalTheme = createGlobalStyle<Props>`
    body {
        margin: 0;
        background-color: ${(props) => (props.isDarkMode ? '#222222' : 'white')}
    }
`;

export default GlobalTheme;
