import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Text',
  },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Inverted: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const InvertedDark: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
