import { useState } from 'react';

export enum Theme {
  DARK = 'dark',
  NORMAL = 'normal',
}

const LS_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.NORMAL;

export const useTheme = (initialTheme?: Theme) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.NORMAL : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LS_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
