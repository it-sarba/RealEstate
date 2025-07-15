import React from "react";
import { LoginForm } from "./LoginForm";
import { fn } from 'storybook/test';

export default {
  title: "Auth/LoginForm",
  component: LoginForm,
  parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLogin: (data) => {
    alert(`Email: ${data.email}\nPassword: ${data.password}`);
  },
};
