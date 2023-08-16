import { useState } from 'react';

export enum Theme {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme',
}

const LS_THEME_KEY = 'theme';

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT;

export const useTheme = (initialTheme?: Theme) => {
  const [theme, setTheme] = useState(initialTheme || defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LS_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
