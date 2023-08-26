import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from '.';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'QWE',
        password: 'qweasd',
      },
    }),
  ],
};

export const WithError: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'QWE',
        password: 'qweasd',
        error: 'Error text',
      },
    }),
  ],
};

export const Loading: Story = {
  args: {
  },
  decorators: [
    StoreDecorator({
      loginForm: {
        isLoading: true,
      },
    }),
  ],
};
