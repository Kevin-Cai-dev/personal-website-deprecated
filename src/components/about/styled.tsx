import styled from 'styled-components';

import { ColourTypes } from '@website/common/utils/theme';

interface Props {
  colours: ColourTypes;
}

export const AboutContainer = styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(p) => p.colours.background};

  transition: background-color 0.1s, color 0.1s;
`;
