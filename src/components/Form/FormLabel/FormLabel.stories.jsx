import React from "react";
import FormLabel from "./FormLabel";
import { fn } from 'storybook/test';

export default {
  title: "Components/FormLabel",
  component: FormLabel,
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
  <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
    <FormLabel htmlFor="name">Name</FormLabel>
  </div>
);

export const Required = () => (
  <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
    <FormLabel htmlFor="email" required>
      Email Address
    </FormLabel>
  </div>
);
