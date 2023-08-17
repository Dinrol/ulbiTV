import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TextComponent, TextTheme } from '.';

const meta = {
  title: 'shared/TextComponent',
  component: TextComponent,
} satisfies Meta<typeof TextComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'TEXT',
    title: 'Title',
  },
};

export const Error: Story = {
  args: {
    text: 'TEXT',
    title: 'Title',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'TEXT',
  },
};

export const PrimaryDark: Story = {
  args: {
    text: 'TEXT',
    title: 'Title',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'TEXT',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
