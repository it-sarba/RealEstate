import React from "react";
import Accordion from "./Accordion";
import { fn } from 'storybook/test';

export default {
  title: "Components/Accordion",
  component: Accordion,
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

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "What is this component?",
  children: (
    <p>
      This is a simple accordion component that expands and collapses content.
      It uses smooth height transitions and shows a +/− icon.
    </p>
  ),
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  title: "Open by Default",
  defaultOpen: true,
  children: (
    <ul>
      <li>Easy to use</li>
      <li>Customizable</li>
      <li>Accessible</li>
    </ul>
  ),
};
