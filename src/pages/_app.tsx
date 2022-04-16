import { useState, useEffect, createContext } from "react";
import type { AppProps } from "next/app";

import { LIGHT, DARK } from "@website/common/constants";
import { Context } from "@website/common/utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
    if (theme !== LIGHT && theme !== DARK) {
      localStorage.setItem("theme", LIGHT);
      setTheme(theme);
    }
  }, []);

  return (
    <Context.Provider value={theme}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
