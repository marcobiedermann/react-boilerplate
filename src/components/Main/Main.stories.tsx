import type { Meta, StoryObj } from '@storybook/react';
import Main from '.';

const meta: Meta<typeof Main> = {
  component: Main,
};

type Story = StoryObj<typeof Main>;

const Default: Story = {
  args: {
    children: 'Main',
  },
};

export { Default };
export default meta;
