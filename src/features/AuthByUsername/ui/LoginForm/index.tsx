import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { TextComponent, TextTheme } from 'shared/ui/Text';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername';

interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({
      password, username,
    }));
  }, [dispatch, password, username]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <TextComponent title={t('forma-avtorizacii')} />
        {error && <TextComponent text={error} theme={TextTheme.ERROR} />}
        <Input
          onChange={onChangeUsername}
          autoFocus
          placeholder={t('vvedite-username')}
          className={cls.input}
          value={username}
        />
        <Input
          onChange={onChangePassword}
          placeholder={t('vvedite-password')}
          value={password}
          className={cls.input}
        />
        <Button
          disabled={isLoading}
          onClick={onLoginClick}
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
        >
          {t('voiti')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
