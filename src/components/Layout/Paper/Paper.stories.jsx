import React from "react";
import Paper from "./Paper";
import { fn } from 'storybook/test';

export default {
  title: "Components/Paper",
  component: Paper,
   parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
    elevation: {
      control: { type: "range", min: 0, max: 5 },
    },
  },
  args: {
    onClick: fn(),
  },
  
};

const Template = (args) => (
  <Paper {...args}>
    <h3>Paper Component</h3>
    <p>This is a reusable surface container with elevation and padding.</p>
  </Paper>
);

export const Default = Template.bind({});
Default.args = {
  elevation: 1,
};

export const Elevated = Template.bind({});
Elevated.args = {
  elevation: 4,
};

export const NoElevation = Template.bind({});
NoElevation.args = {
  elevation: 0,
};
