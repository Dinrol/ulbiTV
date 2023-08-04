/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (Story: () => any) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      {Story()}
    </div>
  </ThemeProvider>
);
