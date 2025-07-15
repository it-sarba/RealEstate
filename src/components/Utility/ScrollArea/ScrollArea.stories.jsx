import React from "react";
import { ScrollArea } from "./ScrollArea";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/ScrollArea",
  component: ScrollArea,
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

export const Default = () => (
  <ScrollArea height="150px" width="300px">
    <div style={{ padding: "1rem" }}>
      {[...Array(20)].map((_, i) => (
        <p key={i}>Scrollable content line {i + 1}</p>
      ))}
    </div>
  </ScrollArea>
);
