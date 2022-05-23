import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import LanguageSwitch from '.';

export default {
  component: LanguageSwitch,
} as ComponentMeta<typeof LanguageSwitch>;

export const Default: ComponentStoryObj<typeof LanguageSwitch> = {
  args: {
    languages: ['de', 'en', 'fr'],
  },
};
