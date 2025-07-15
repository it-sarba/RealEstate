import React from "react";
import { Sparkline } from "./Sparkline";
import { fn } from 'storybook/test';

export default {
  title: "Components/Charts/Sparkline",
  component: Sparkline,
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

const sampleData = [
  { value: 100 },
  { value: 130 },
  { value: 120 },
  { value: 150 },
  { value: 180 },
  { value: 170 },
  { value: 190 },
];

export const Default = () => <Sparkline data={sampleData} />;

export const WithTooltip = () => <Sparkline data={sampleData} showTooltip />;
