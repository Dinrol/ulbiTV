/* eslint-disable @typescript-eslint/no-explicit-any */
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: () => any) => (
  <BrowserRouter>
    {Story()}
  </BrowserRouter>
);
