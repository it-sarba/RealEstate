import React from "react";
import Navbar from "./Navbar";
import { Search, LogIn, UserPlus } from "lucide-react";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Navbar",
  component: Navbar,
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

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "MyApp",
  links,
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  logo: "MyApp",
  links,
  showSearch: true,
};

export const WithActions = Template.bind({});
WithActions.args = {
  logo: "MyApp",
  links,
  showActions: true,
};

export const FullFeatured = Template.bind({});
FullFeatured.args = {
  logo: "MyApp",
  links,
  showSearch: true,
  showActions: true,
};
