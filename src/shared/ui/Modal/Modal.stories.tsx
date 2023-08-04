import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Modal } from 'shared/ui/Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum alias suscipit fugiat inventore labore, odit eligendi iusto rem saepe pariatur debitis reiciendis, vitae voluptas molestiae. Ut labore veritatis repudiandae!',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum alias suscipit fugiat inventore labore, odit eligendi iusto rem saepe pariatur debitis reiciendis, vitae voluptas molestiae. Ut labore veritatis repudiandae!',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
