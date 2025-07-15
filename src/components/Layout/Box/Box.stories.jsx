import React from "react";
import Box from "./Box";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Box",
  component: Box,
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

export const Basic = () => (
  <Box padding="1rem" background="#f0f0f0" borderRadius="8px">
    Basic Box
  </Box>
);

export const Colored = () => (
  <Box padding="2rem" background="#e0f2fe" border="1px solid #38bdf8" borderRadius="12px">
    Blue-themed Box
  </Box>
);

export const WithCustomClass = () => (
  <Box className="custom-box">Box with extra class styling</Box>
);
