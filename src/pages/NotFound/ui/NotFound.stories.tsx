import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFound } from './NotFound';

const meta = {
  title: 'pages/NotFound',
  component: NotFound,
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Inverted: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
