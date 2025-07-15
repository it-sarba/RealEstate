import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    onClick: fn(),
  },
 
  
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Accept terms & conditions',
  checked: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Accept terms & conditions',
  checked: false,
  error: 'You must agree before proceeding',
};
