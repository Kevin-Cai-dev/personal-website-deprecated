import { ReactNode } from 'react';

import Footer from './footer';
import NavBar from './navbar';

interface Props {
  children: ReactNode;
}

const AppContainer = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default AppContainer;
