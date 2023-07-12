import { FC, createContext, useContext } from "react";
import { useTheme } from "./useTheme";

type Theme = ReturnType<typeof useTheme>

export const ThemeContext = createContext({} as Theme)

export const ThemeProvider: FC = ({ children }) => {
  const theme = useTheme()

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeStore = () => useContext(ThemeContext)