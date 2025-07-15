import React from "react";
import { List } from "./List";
import { FaCheckCircle } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Components/List",
  component: List,
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

const basicItems = ["Item One", "Item Two", "Item Three"];

const avatarItems = [
  { name: "Alice", description: "Admin" },
  { name: "Bob", description: "Editor" },
  { name: "Charlie", description: "Viewer" },
];

export const Unordered = () => <List items={basicItems} />;

export const Ordered = () => <List items={basicItems} ordered />;

export const WithIcons = () => (
  <List items={basicItems} icon={<FaCheckCircle />} />
);

export const CustomRender = () => (
  <List
    items={avatarItems}
    renderItem={(item) => (
      <div>
        <div style={{ fontWeight: "bold" }}>{item.name}</div>
        <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>
          {item.description}
        </div>
      </div>
    )}
  />
);
