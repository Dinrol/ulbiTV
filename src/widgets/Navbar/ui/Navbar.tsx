import {
  FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDsipatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModalShown, setIsAuthModalShown] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDsipatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModalShown(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModalShown(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('vyiti')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('voiti')}
      </Button>
      {isAuthModalShown && (
        <LoginModal
          isOpen={isAuthModalShown}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
});
