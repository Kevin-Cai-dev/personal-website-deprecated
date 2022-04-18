import type { AppProps } from 'next/app';
import { useEffect, useState, useMemo } from 'react';

import {
  DARK,
  LIGHT,
  BACKGROUND_LIGHT,
  BACKGROUND_DARK,
  PAPER_LIGHT,
  PAPER_DARK,
  TEXT_LIGHT,
  TEXT_DARK,
} from '@website/common/constants';
import { AppContainer, GlobalTheme } from '@website/common/ui';
import { ThemeContext } from '@website/common/utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme !== LIGHT && theme !== DARK) {
      localStorage.setItem('theme', LIGHT);
    }
    setDarkMode(localStorage.getItem('theme') === DARK);
  }, []);

  const darkModeColours = useMemo(() => {
    return {
      background: isDarkMode ? BACKGROUND_DARK : BACKGROUND_LIGHT,
      paper: isDarkMode ? PAPER_DARK : PAPER_LIGHT,
      text: isDarkMode ? TEXT_LIGHT : TEXT_DARK,
    };
  }, [isDarkMode]);

  const updateDarkMode = (isDarkMode: boolean) => {
    isDarkMode
      ? localStorage.setItem('theme', DARK)
      : localStorage.setItem('theme', LIGHT);
    setDarkMode(isDarkMode);
  };

  const contextValue = {
    isDarkMode,
    setDarkMode: updateDarkMode,
    darkModeColours,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <GlobalTheme darkModeColours={darkModeColours} />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeContext.Provider>
  );
}

export default MyApp;
