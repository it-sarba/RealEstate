import React from "react";
import { PieChart } from "./PieChart";
import { fn } from 'storybook/test';

export default {
  title: "Components/Charts/PieChart",
  component: PieChart,
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
  { name: "Marketing", value: 400 },
  { name: "Sales", value: 300 },
  { name: "Development", value: 300 },
  { name: "Support", value: 200 },
];

export const Default = () => (
  <PieChart data={sampleData} title="Department Budget Allocation" />
);
