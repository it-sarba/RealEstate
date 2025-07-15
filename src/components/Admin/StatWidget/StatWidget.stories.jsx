import React from "react";
import { StatWidget } from "./StatWidget";
import { FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Dashboard/StatWidget",
  component: StatWidget,
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
  <StatWidget
    title="Active Users"
    value="1,240"
    icon={<FaUsers />}
    trend={{ direction: "up", amount: "3.2%" }}
    color="primary"
  />
);

export const Revenue = () => (
  <StatWidget
    title="Monthly Revenue"
    value="$84,230"
    icon={<FaDollarSign />}
    trend={{ direction: "down", amount: "1.8%" }}
    color="danger"
  />
);

export const Orders = () => (
  <StatWidget
    title="New Orders"
    value="348"
    icon={<FaShoppingCart />}
    trend={{ direction: "up", amount: "6.5%" }}
    color="success"
  />
);
