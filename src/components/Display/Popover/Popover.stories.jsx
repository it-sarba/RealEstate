import React from "react";
import { Popover } from "./Popover";
import { fn } from 'storybook/test';

export default {
  title: "Components/Popover",
  component: Popover,
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

const Template = (args) => (
  <div style={{ padding: "100px", textAlign: "center" }}>
    <Popover {...args} />
  </div>
);

export const Bottom = Template.bind({});
Bottom.args = {
  position: "bottom",
  trigger: <button>Click me</button>,
  content: (
    <div>
      <strong>Popover Content</strong>
      <p>This is some detailed popover content with more info.</p>
    </div>
  ),
};

export const Top = Template.bind({});
Top.args = { ...Bottom.args, position: "top" };

export const Left = Template.bind({});
Left.args = { ...Bottom.args, position: "left" };

export const Right = Template.bind({});
Right.args = { ...Bottom.args, position: "right" };
