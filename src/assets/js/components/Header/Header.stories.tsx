import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Header from '.';

export default {
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStoryObj<typeof Header> = {
  args: {
    children: 'Header',
  },
};
