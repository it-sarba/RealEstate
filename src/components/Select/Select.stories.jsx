import React, { useState } from "react";
import Select from "./Select";
import { fn } from 'storybook/test';

export default {
  title: "Components/Select",
  component: Select,
    parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: "boolean" },
    label: { control: "text" },
  },
  args: {
    onClick: fn(),
  },
  
};

export const Default = (args) => {
  const [selected, setSelected] = useState("option1");

  const options = [
    { value: "option1", label: "Option One" },
    { value: "option2", label: "Option Two" },
    { value: "option3", label: "Option Three" },
  ];

  return (
    <Select
      {...args}
      options={options}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    />
  );
};

Default.args = {
  label: "Select an option",
  disabled: false,
};
