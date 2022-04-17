import { ReactNode } from 'react';

import Footer from './footer';
import NavBar from './navbar';
import GlobalTheme from './styled';

interface Props {
  isDarkMode: boolean;
  children: ReactNode;
}

const AppContainer = ({ isDarkMode, children }: Props) => {
  return (
    <>
      <GlobalTheme isDarkMode={isDarkMode} />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default AppContainer;
