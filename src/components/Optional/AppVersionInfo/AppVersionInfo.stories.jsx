import React from "react";
import { AppVersionInfo } from "./AppVersionInfo";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/AppVersionInfo",
  component: AppVersionInfo,
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

export const Default = () => (
  <AppVersionInfo
    version="2.3.1"
    environment="staging"
    buildDate="2025-07-14"
  />
);
