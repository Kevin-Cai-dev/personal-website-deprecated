import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { DARK, LIGHT } from '@website/common/constants';
import { AppContainer } from '@website/common/ui';
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
      <AppContainer isDarkMode={theme === DARK}>
        <Component {...pageProps} />
      </AppContainer>
    </Context.Provider>
  );
}

export default MyApp;
