import React, { useState } from "react";
import TimePicker from "./TimePicker";
import { fn } from 'storybook/test';

export default {
  title: "Components/TimePicker",
  component: TimePicker,  
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
  const [time, setTime] = useState("");

  return (
    <div>
      <TimePicker value={time} onChange={(val) => setTime(val)} />
      <p style={{ marginTop: "10px" }}>Selected Time: {time}</p>
    </div>
  );
};
