import React from "react";
import { SocialLoginButton } from "./SocialLoginButton";
import { fn } from 'storybook/test';

export default {
  title: "Auth/SocialLoginButton",
  component: SocialLoginButton,
  parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    provider: {
      control: "select",
      options: ["google", "facebook", "github"],
    },
  },
  args: {
    onClick: fn(),
  },
};

const Template = (args) => <SocialLoginButton {...args} />;

export const Google = Template.bind({});
Google.args = {
  provider: "google",
  label: "Continue with Google",
  onClick: () => alert("Google Login clicked"),
};

export const Facebook = Template.bind({});
Facebook.args = {
  provider: "facebook",
  label: "Continue with Facebook",
};

export const GitHub = Template.bind({});
GitHub.args = {
  provider: "github",
  label: "Continue with GitHub",
};
