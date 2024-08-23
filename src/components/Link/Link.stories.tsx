import type { Meta, StoryObj } from '@storybook/react';
import Link from '.';

const meta: Meta<typeof Link> = {
  component: Link,
};

type Story = StoryObj<typeof Link>;

const Default: Story = {
  args: {
    children: 'Link',
    to: 'http://example.com',
  },
};

const Internal: Story = {
  args: {
    children: 'Link',
    to: '/',
  },
};

export { Default, Internal };
export default meta;
