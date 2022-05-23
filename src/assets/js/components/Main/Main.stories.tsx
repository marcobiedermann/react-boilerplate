import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Main from '.';

export default {
  component: Main,
} as ComponentMeta<typeof Main>;

export const Default: ComponentStoryObj<typeof Main> = {
  args: {
    children: 'Main',
  },
};
