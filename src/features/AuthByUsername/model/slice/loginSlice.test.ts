import { DeepPartial } from '@reduxjs/toolkit';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';

describe('loginSlice.test', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'test' };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('test2'),
    )).toEqual({ username: 'test2' });
  });

  test('should set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'pass' };

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('pass2'),
    )).toEqual({ password: 'pass2' });
  });

  test('should set isLoading', () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false };

    expect(loginReducer(
      state as LoginSchema,
      loginByUsername.pending,
    )).toEqual({ isLoading: true });
  });
});
