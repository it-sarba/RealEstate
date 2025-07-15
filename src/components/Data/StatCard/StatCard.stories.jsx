import React from "react";
import { StatCard } from "./StatCard";
import { FaUser, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Components/StatCard",
  component: StatCard,
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
  <StatCard title="Users" value="1,248" icon={<FaUser />} />
);

export const WithTrendUp = () => (
  <StatCard
    title="Revenue"
    value="$12,340"
    delta="5.4%"
    trend="up"
    color="success"
    icon={<FaArrowUp />}
    description="Compared to last week"
  />
);

export const WithTrendDown = () => (
  <StatCard
    title="Churn Rate"
    value="2.3%"
    delta="1.2%"
    trend="down"
    color="danger"
    icon={<FaArrowDown />}
    description="Since last month"
  />
);
