import React from "react";
import { LogViewer } from "./LogViewer";
import { fn } from 'storybook/test';

export default {
  title: "System/LogViewer",
  component: LogViewer,
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

const logs = [
  {
    timestamp: "2025-07-14 10:03:12",
    level: "info",
    message: "Server started successfully on port 8080",
  },
  {
    timestamp: "2025-07-14 10:04:45",
    level: "warning",
    message: "API response delayed by 250ms",
  },
  {
    timestamp: "2025-07-14 10:05:02",
    level: "error",
    message: "Failed to connect to database",
  },
  {
    timestamp: "2025-07-14 10:05:33",
    level: "debug",
    message: "Token verified: user_id=12345",
  },
];

export const Default = () => <LogViewer logs={logs} />;
