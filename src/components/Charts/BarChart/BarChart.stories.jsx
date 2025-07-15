import React from "react";
import { BarChart } from "./BarChart";
import { fn } from 'storybook/test';

export default {
  title: "Components/Charts/BarChart",
  component: BarChart,
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
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 200 },
  { name: "May", users: 600 },
];

export const Default = () => (
  <BarChart data={sampleData} xKey="name" barKey="users" title="Monthly Users" />
);
