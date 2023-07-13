import { FC, createContext, useContext } from "react";

import { useTheme } from "./hooks";

type Theme = ReturnType<typeof useTheme>

const ThemeContext = createContext({} as Theme)

export const ThemeProvider: FC = ({ children }) => {
  const theme = useTheme()

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeStore = () => useContext(ThemeContext)
export { Theme } from './hooks'