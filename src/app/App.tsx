import { Suspense, lazy } from "react"

import { Link, Route, Routes } from "react-router-dom"

import './styles/index.scss'

import { classNames } from "shared/lib/classNames"
import { useThemeStore } from "app/providers/ThemeProvider"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

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
