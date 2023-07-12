import { Suspense, lazy, useContext } from "react"

import { Link, Route, Routes } from "react-router-dom"

import './styles/index.scss'
import { useThemeStore } from "./theme/ThemeStore"
import { classNames } from "./helpers/classNames"

const AboutPage = lazy(() => import('./pages/AboutPage'))
const MainPage = lazy(() => import('./pages/MainPage'))

export const App = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to='/about'>О сайте</Link>
      <Link to='/'>Главная</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
