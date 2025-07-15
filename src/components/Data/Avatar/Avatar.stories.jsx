import React from "react";
import { Avatar } from "./Avatar";
import { fn } from 'storybook/test';

export default {
  title: "Components/Avatar",
  component: Avatar,
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

export const WithImage = () => (
  <Avatar
    src="https://randomuser.me/api/portraits/women/44.jpg"
    alt="Jane Doe"
    size="md"
  />
);

export const WithInitialFallback = () => <Avatar alt="John Doe" size="lg" />;

export const CustomFallback = () => (
  <Avatar fallback="👤" size="md" shape="square" />
);

export const Sizes = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Avatar alt="S" size="sm" />
    <Avatar alt="M" size="md" />
    <Avatar alt="L" size="lg" />
    <Avatar alt="XL" size="xl" />
  </div>
);
