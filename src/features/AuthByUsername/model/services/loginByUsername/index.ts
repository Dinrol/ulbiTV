import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/const';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

// enum LoginError {
//   INCORRECT_DATA = '',
//   SERVER_ERROR = ''
// }

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string;}
>(
  'login/loginByUsername',
  async ({ password, username }, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        password,
        username,
      });

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
