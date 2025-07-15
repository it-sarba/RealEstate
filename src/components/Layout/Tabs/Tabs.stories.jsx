import React from "react";
import Tabs from "./Tabs";
import { fn } from 'storybook/test';

export default {
  title: "Components/Tabs",
  component: Tabs,
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

const tabData = [
  {
    label: "Overview",
    content: <p>This is the overview tab content.</p>,
  },
  {
    label: "Features",
    content: <ul><li>Fast</li><li>Flexible</li><li>Reusable</li></ul>,
  },
  {
    label: "Contact",
    content: <p>Contact us at hello@example.com</p>,
  },
];

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: tabData,
  defaultIndex: 0,
};
