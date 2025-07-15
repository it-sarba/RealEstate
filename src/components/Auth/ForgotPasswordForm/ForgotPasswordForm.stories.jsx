import React from "react";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { fn } from 'storybook/test';

export default {
  title: "Auth/ForgotPasswordForm",
  component: ForgotPasswordForm,
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

const Template = (args) => <ForgotPasswordForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onReset: async (email) => {
    alert(`Reset email sent to: ${email}`);
    await new Promise((res) => setTimeout(res, 1000));
  },
};
