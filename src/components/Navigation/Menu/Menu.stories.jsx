import React from "react";
import { Menu } from "./Menu";
import { fn } from 'storybook/test';

export default {
  title: "Components/Menu",
  component: Menu,
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

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Menu",
  items: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "Options",
  items: [
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
    { label: "Logout", href: "/logout" },
  ],
};
