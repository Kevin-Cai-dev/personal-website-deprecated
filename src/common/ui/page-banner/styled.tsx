import styled from 'styled-components';

import { BackgroundColours } from '@website/common/constants';

interface BackgroundProps {
  colour: BackgroundColours;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(p) => (p.colour ? `url(/${p.colour}.svg)` : `none`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: -1;
`;

export const PageBannerContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 50%;
  margin-left: 10px;
`;

export const MainHeader = styled.h1`
  font-size: 5rem;
`;

export const Prefix = styled.h2``;
