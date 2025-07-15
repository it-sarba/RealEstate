import React, { useState } from "react";
import { NotificationBell } from "./NotificationBell";
import { fn } from 'storybook/test';

export default {
  title: "UI/NotificationBell",
  component: NotificationBell,
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

export const Default = () => {
  const [count, setCount] = useState(3);

  return (
    <div style={{ padding: "2rem" }}>
      <NotificationBell count={count} onClick={() => alert("Open notifications!")} />
      <br />
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
