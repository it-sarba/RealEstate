import React, { useState } from "react";
import MultiSelect from "./MultiSelect";
import { fn } from 'storybook/test';

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
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
  const [selected, setSelected] = useState(["apple"]);

  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Mango", value: "mango" },
  ];

  return (
    <MultiSelect
      label="Select Fruits"
      options={options}
      selected={selected}
      onChange={setSelected}
      placeholder="Choose fruits"
    />
  );
};
