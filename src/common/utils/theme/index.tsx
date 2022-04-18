import noop from 'lodash/noop';
import { createContext } from 'react';

export interface ColourTypes {
  [key: string]: string;
}

interface ContextTypes {
  isDarkMode: boolean;
  setDarkMode: (newState: boolean) => void;
  darkModeColours: ColourTypes;
}

export const ThemeContext = createContext<ContextTypes>({
  isDarkMode: false,
  setDarkMode: noop,
  darkModeColours: {},
});
