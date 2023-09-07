import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import cls from './Profile.module.scss';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfileProps {
  className?: string;
}

const Profile = (props: ProfileProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.profile, {}, [className])}>
        {t('profil')}
      </div>
    </DynamicModuleLoader>

  );
};

export default Profile;
