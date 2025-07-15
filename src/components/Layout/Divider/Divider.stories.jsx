import React from "react";
import Divider from "./Divider";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Divider",
  component: Divider,
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

export const Horizontal = () => <Divider />;
export const WithLabel = () => <Divider label="Section Title" />;
export const Dashed = () => <Divider variant="dashed" label="More" />;
export const Vertical = () => (
  <div style={{ display: "flex", height: "100px", alignItems: "center" }}>
    <span>Left</span>
    <Divider orientation="vertical" />
    <span>Right</span>
  </div>
);
