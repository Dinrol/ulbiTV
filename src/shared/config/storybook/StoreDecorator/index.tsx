/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (Story: () => any) => (
  <StoreProvider initialState={initialState}>
    {Story()}
  </StoreProvider>
);
