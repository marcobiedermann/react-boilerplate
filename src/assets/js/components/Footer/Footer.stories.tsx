import type { Meta, StoryObj } from '@storybook/react';
import Footer from '.';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

type Story = StoryObj<typeof Footer>;

const Default: Story = {
  args: {
    children: 'Footer',
  },
};

export { Default };
export default meta;
