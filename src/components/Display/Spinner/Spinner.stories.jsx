import React from "react";
import { Spinner } from "./Spinner";
import { fn } from 'storybook/test';

export default {
  title: "Components/Spinner",
  component: Spinner,
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

export const Primary = () => <Spinner label="Loading..." />;

export const Sizes = () => (
  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
    <Spinner size="small" />
    <Spinner size="medium" />
    <Spinner size="large" />
  </div>
);

export const Colors = () => (
  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
    <Spinner color="primary" />
    <Spinner color="success" />
    <Spinner color="warning" />
    <Spinner color="error" />
  </div>
);

export const WithLabel = () => <Spinner label="Fetching data..." />;
