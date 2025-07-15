import React from "react";
import { RegisterForm } from "./RegisterForm";
import { fn } from 'storybook/test';

export default {
  title: "Auth/RegisterForm",
  component: RegisterForm,
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

const Template = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRegister: (data) => {
    alert(`Registered:\n${JSON.stringify(data, null, 2)}`);
  },
};
