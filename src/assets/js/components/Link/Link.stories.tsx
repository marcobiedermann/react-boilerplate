import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Link from '.';

export default {
  component: Link,
} as ComponentMeta<typeof Link>;

export const Default: ComponentStoryObj<typeof Link> = {
  args: {
    children: 'Link',
    to: 'http://example.com',
  },
};

export const Internal: ComponentStoryObj<typeof Link> = {
  args: {
    children: 'Link',
    to: '/',
  },
};
