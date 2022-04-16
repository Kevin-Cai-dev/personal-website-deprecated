import { createContext } from "react";

import { LIGHT, DARK } from "@website/common/constants";

export const toggleDarkMode = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme !== LIGHT && currentTheme !== DARK) {
    return localStorage.setItem("theme", LIGHT);
  }
  const newTheme = currentTheme === LIGHT ? DARK : LIGHT;
  return localStorage.setItem("theme", newTheme);
};

export const Context = createContext<string | null>(null);
