import React from "react";
import { Badge } from "./Badge";
import { fn } from 'storybook/test';

export default {
  title: "Components/Badge",
  component: Badge,
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

export const ColorsAndVariants = () => (
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    <Badge color="gray">Default</Badge>
    <Badge color="blue">Info</Badge>
    <Badge color="green">Success</Badge>
    <Badge color="red">Error</Badge>
    <Badge color="blue" variant="outline">Outline</Badge>
    <Badge color="red" variant="subtle">Subtle</Badge>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    <Badge size="sm">Small</Badge>
    <Badge size="md">Medium</Badge>
    <Badge size="lg">Large</Badge>
  </div>
);

export const Rounded = () => (
  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
    <Badge rounded="none">None</Badge>
    <Badge rounded="sm">Sm</Badge>
    <Badge rounded="md">Md</Badge>
    <Badge rounded="lg">Lg</Badge>
    <Badge rounded="full">Full</Badge>
  </div>
);
