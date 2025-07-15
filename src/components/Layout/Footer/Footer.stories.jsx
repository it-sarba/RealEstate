import React from "react";
import Footer from "./Footer";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Footer",
  component: Footer,
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

export const Default = () => <Footer />;
