import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { fn } from 'storybook/test';

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
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

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Shoes", href: "/products/shoes" },
  ],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  items: [
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "API", href: "/docs/api" },
  ],
  separator: ">"
};
