import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: NotFoundProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.notFound, {}, [className])}>
      <div>{t('stranica-ne-naidena')}</div>
    </div>
  );
};
