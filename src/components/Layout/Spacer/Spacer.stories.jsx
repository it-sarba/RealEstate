import React from "react";
import Spacer from "./Spacer";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Spacer",
  component: Spacer,
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

export const VerticalSpacing = () => (
  <div>
    <div style={{ background: "#e2e8f0" }}>Above</div>
    <Spacer size="md" />
    <div style={{ background: "#cbd5e1" }}>Below</div>
  </div>
);

export const HorizontalSpacing = () => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div style={{ background: "#e2e8f0", padding: "8px" }}>Left</div>
    <Spacer size="md" axis="horizontal" />
    <div style={{ background: "#cbd5e1", padding: "8px" }}>Right</div>
  </div>
);
