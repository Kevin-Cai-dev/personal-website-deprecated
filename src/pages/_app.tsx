import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

import { DARK, LIGHT } from '@website/common/constants';
import { AppContainer, GlobalTheme } from '@website/common/ui';
import { Context } from '@website/common/utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setTheme(theme);
    if (theme !== LIGHT && theme !== DARK) {
      localStorage.setItem('theme', LIGHT);
      setTheme(theme);
    }
  }, []);

  return (
    <Context.Provider value={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <GlobalTheme isDarkMode={theme === DARK} />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </Context.Provider>
  );
}

export default MyApp;
