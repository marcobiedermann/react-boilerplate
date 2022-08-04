/* eslint-disable import/no-extraneous-dependencies */

import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Footer from '.';

export default {
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStoryObj<typeof Footer> = {
  args: {
    children: 'Footer',
  },
};
