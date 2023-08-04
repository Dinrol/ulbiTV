import { FC, createContext, useContext } from 'react';

import { Theme, useTheme } from './hooks';

type ThemeContext = ReturnType<typeof useTheme>;

const ThemeContext = createContext({} as ThemeContext);

interface ThemeProviderProps {
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const theme = useTheme(initialTheme);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeStore = () => useContext(ThemeContext);
export { Theme } from './hooks';
