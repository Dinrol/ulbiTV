/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames';

import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModalShown, setIsAuthModalShown] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalShown((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('voiti')}
      </Button>
      <Modal onClose={onToggleModal} isOpen={isAuthModalShown}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum alias suscipit fugiat inventore labore, odit eligendi iusto rem saepe pariatur debitis reiciendis, vitae voluptas molestiae. Ut labore veritatis repudiandae!
      </Modal>
    </div>
  );
};
