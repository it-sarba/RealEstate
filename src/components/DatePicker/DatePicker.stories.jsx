import React from "react";
import DatePicker from "./DatePicker";
import { fn } from 'storybook/test';

export default {
  title: "Components/DatePicker",
  component: DatePicker,
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

export const Default = () => <DatePicker />;
