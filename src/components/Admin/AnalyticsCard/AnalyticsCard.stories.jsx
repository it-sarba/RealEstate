import React from "react";
import { AnalyticsCard } from "./AnalyticsCard";
import { FaUsers, FaChartLine, FaDollarSign } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Admin/AnalyticsCard",
  component: AnalyticsCard,
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

export const Users = () => (
  <AnalyticsCard
    title="Total Users"
    value="12,340"
    growth="+5.4%"
    growthType="up"
    icon={<FaUsers />}
    bgColor="#ecfdf5"
    iconBg="#d1fae5"
  />
);

export const Revenue = () => (
  <AnalyticsCard
    title="Monthly Revenue"
    value="$45,800"
    growth="-2.1%"
    growthType="down"
    icon={<FaDollarSign />}
    bgColor="#fef2f2"
    iconBg="#fee2e2"
  />
);

export const Engagement = () => (
  <AnalyticsCard
    title="Engagement Rate"
    value="72%"
    growth="+3.2%"
    icon={<FaChartLine />}
    bgColor="#eff6ff"
    iconBg="#dbeafe"
  />
);
