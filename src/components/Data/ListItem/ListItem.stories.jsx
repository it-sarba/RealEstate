import React from "react";
import { ListItem } from "./ListItem";
import { FaUser, FaChevronRight, FaEdit } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Components/ListItem",
  component: ListItem,
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
  <ListItem title="Profile" description="Manage your profile settings" />
);

export const WithIcon = () => (
  <ListItem
    icon={<FaUser />}
    title="Account"
    description="Email, password, and security"
  />
);

export const WithAction = () => (
  <ListItem
    title="Edit Settings"
    icon={<FaEdit />}
    action={<FaChevronRight />}
  />
);
