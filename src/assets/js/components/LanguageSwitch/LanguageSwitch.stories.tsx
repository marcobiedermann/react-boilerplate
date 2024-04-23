import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitch from '.';

const meta: Meta<typeof LanguageSwitch> = {
  component: LanguageSwitch,
};

type Story = StoryObj<typeof LanguageSwitch>;

const Default: Story = {
  args: {
    languages: ['de', 'en', 'fr'],
  },
};

export { Default };
export default meta;
