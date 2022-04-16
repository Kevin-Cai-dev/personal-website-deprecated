import styled, { createGlobalStyle } from "styled-components";

interface Props {
  isDarkMode: boolean;
}

const GlobalTheme = createGlobalStyle<Props>`
    body {
        margin: 0;
        background-color: ${(props) => (props.isDarkMode ? "#222222" : "white")}
    }
`;

export const ContentWrapper = styled.div`
  margin: 1rem;
`;

export default GlobalTheme;
