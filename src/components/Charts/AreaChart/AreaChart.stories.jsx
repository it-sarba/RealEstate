import React from "react";
import { AreaChart } from "./AreaChart";
import { fn } from 'storybook/test';

export default {
  title: "Components/Charts/AreaChart",
  component: AreaChart,
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
  { month: "Jan", users: 200 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 450 },
  { month: "May", users: 600 },
];

export const Default = () => (
  <AreaChart
    data={sampleData}
    xKey="month"
    areaKey="users"
    title="Monthly Active Users"
  />
);
