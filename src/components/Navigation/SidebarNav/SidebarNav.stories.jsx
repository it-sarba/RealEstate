import React from "react";
import { SidebarNav } from "./SidebarNav";
import { Home, Settings, Info } from "lucide-react";
import { fn } from 'storybook/test';

export default {
  title: "Components/SidebarNav",
  component: SidebarNav,
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

const Template = (args) => <SidebarNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Main Menu",
  items: [
    { label: "Home", href: "/", icon: <Home size={18} /> },
    { label: "Settings", href: "/settings", icon: <Settings size={18} /> },
    { label: "About", href: "/about", icon: <Info size={18} /> },
  ],
};
