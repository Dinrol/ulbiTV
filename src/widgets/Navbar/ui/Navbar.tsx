import { FC } from "react"
import { classNames } from "shared/lib/classNames"

import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/'>Главная</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to='/about'>О сайте</AppLink>
      </div>
    </div>
  )
}
