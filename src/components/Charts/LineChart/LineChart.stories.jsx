import React from "react";
import { LineChart } from "./LineChart";
import { fn } from 'storybook/test';

export default {
  title: "Components/Charts/LineChart",
  component: LineChart,
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
  { name: "Jan", value: 400 },
  { name: "Feb", value: 350 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 420 },
  { name: "May", value: 600 },
];

export const Default = () => (
  <LineChart
    data={sampleData}
    xKey="name"
    lineKey="value"
    title="Monthly Trend"
    lineColor="#10b981"
  />
);
