import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUsername } from '.';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  test('should success login', async () => {
    const userValue = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      password: 'passTest',
      username: 'usernameTest',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userValue);
  });

  test('should error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({
      password: 'passTest',
      username: 'usernameTest',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
