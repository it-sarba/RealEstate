import React from "react";
import { Tooltip } from "./Tooltip";
import { fn } from 'storybook/test';

export default {
  title: "Components/Tooltip",
  component: Tooltip,
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
    <Tooltip {...args}>
      <button style={{ padding: "8px 16px" }}>Hover me</button>
    </Tooltip>
  </div>
);

export const Top = Template.bind({});
Top.args = {
  content: "This is a tooltip!",
  position: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: "This is a tooltip!",
  position: "bottom",
};

export const Left = Template.bind({});
Left.args = {
  content: "This is a tooltip!",
  position: "left",
};

export const Right = Template.bind({});
Right.args = {
  content: "This is a tooltip!",
  position: "right",
};
