
import './styles/index.scss'

import { classNames } from "shared/lib/classNames"
import { useThemeStore } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgets/Navbar"

export const App = () => {
  const { theme } = useThemeStore()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}
