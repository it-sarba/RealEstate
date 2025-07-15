import React from 'react';
import Input from './Input';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Input',
  component: Input,
   parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
    label: 'Username',
    placeholder: 'Enter your username',
  },
 
};

export const Default = (args) => <Input {...args} />;

export const WithError = (args) => <Input {...args} />;
WithError.args = {
  error: 'This field is required',
};

export const PasswordType = (args) => <Input {...args} />;
PasswordType.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
};
