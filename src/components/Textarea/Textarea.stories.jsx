import React from 'react';
import Textarea from './Textarea';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    onChange: fn(),
  },
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Your message',
  placeholder: 'Type your message here...',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Your message',
  placeholder: 'Type your message here...',
  error: 'This field is required.',
};
