import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={classNames(cls.links)}>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">Главная</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/about">О сайте</AppLink>
    </div>
  </div>
);
