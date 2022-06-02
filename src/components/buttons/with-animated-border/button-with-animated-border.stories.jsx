import React from 'react';

import { ButtonWithAnimatedBorder } from './button-with-animted-border';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/With animated border',
  component: ButtonWithAnimatedBorder,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ButtonWithAnimatedBorder {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Fancy Shmancy'
};

export const LongText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LongText.args = {
  label: 'A very very long text in the button'
};

export const Interaction = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Interaction.args = {
  label: 'Fancy Shmancy',
  onClick: () => alert('Clicked')
};