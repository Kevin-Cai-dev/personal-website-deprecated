import { useContext } from 'react';

import { ThemeContext } from '@website/common/utils/theme';

import Row from './about-row';
import { AboutContainer } from './styled';

// needs to reverse the order of alternating rows
const About = () => {
  const { darkModeColours } = useContext(ThemeContext);
  return (
    <AboutContainer colours={darkModeColours}>
      <Row />
      <Row />
    </AboutContainer>
  );
};

export default About;
