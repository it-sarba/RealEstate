import React from "react";
import { Chip } from "./Chip";
import { FaCheck, FaUser } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Components/Chip",
  component: Chip,
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

export const Basic = () => <Chip label="Default Chip" />;

export const WithIcon = () => (
  <Chip label="Success" icon={<FaCheck />} color="success" />
);

export const WithAvatar = () => (
  <Chip
    label="Jane Doe"
    avatar={<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane" />}
    color="primary"
  />
);

export const Closable = () => (
  <Chip label="Closable" onClose={() => alert("Chip closed")} color="danger" />
);

export const OutlineVariant = () => (
  <Chip label="Outline Chip" color="primary" variant="outline" />
);
