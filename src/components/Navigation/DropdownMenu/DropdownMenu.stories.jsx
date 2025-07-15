import React from "react";
import { DropdownMenu } from "./DropdownMenu";
import { fn } from 'storybook/test';

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
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

const Template = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Options",
  items: [
    { label: "Account", href: "/account" },
    { label: "Settings", href: "/settings" },
    { label: "Sign Out", href: "/logout" },
  ],
};
