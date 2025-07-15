import React from "react";
import { DoughnutChart } from "./DoughnutChart";
import { fn } from 'storybook/test';

export default {
  title: "Components/Charts/DoughnutChart",
  component: DoughnutChart,
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
  { name: "Chrome", value: 600 },
  { name: "Safari", value: 300 },
  { name: "Firefox", value: 200 },
  { name: "Edge", value: 150 },
];

export const Default = () => (
  <DoughnutChart data={sampleData} title="Browser Usage Share" />
);
