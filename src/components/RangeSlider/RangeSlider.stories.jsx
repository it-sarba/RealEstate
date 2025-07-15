import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import { fn } from 'storybook/test';

export default {
  title: "Components/RangeSlider",
  component: RangeSlider,
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
  const [value, setValue] = useState(30);

  return (
    <div style={{ padding: "20px" }}>
      <RangeSlider
        value={value}
        onChange={(val) => setValue(val)}
        min={0}
        max={100}
        step={1}
        label="Volume"
      />
    </div>
  );
};
