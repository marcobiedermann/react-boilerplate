import type { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  component: Header,
};

type Story = StoryObj<typeof Header>;

const Default: Story = {
  args: {
    children: 'Header',
  },
};

export { Default };
export default meta;
