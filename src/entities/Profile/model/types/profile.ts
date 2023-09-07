import { Country, Currnency } from 'shared/const/common';

export interface Profile {
  firstname: string;
  lastname: string;
  age: number;
  currency: Currnency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readOnly?: boolean;
}
