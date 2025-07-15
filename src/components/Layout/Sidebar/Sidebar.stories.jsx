import React from "react";
import Sidebar from "./Sidebar";
import { Home, User, Settings } from "lucide-react";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Sidebar",
  component: Sidebar,
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

const menuItems = [
  { label: "Home", icon: <Home size={18} /> },
  { label: "Profile", icon: <User size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
];

const Template = (args) => (
  <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar {...args} />
    <div style={{ padding: "2rem", flex: 1 }}>
      <h2>Main Content</h2>
      <p>This is the main area next to the sidebar.</p>
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  menuItems,
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  menuItems,
  collapsed: true,
};
