import React from "react";
import { MobileNav } from "./MobileNav";
import { fn } from 'storybook/test';

export default {
  title: "Components/MobileNav",
  component: MobileNav,
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

const Template = (args) => <MobileNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "MySite",
  items: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};
