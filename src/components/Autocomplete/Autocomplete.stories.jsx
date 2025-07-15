import React, { useState } from "react";
import Autocomplete from "./Autocomplete";
import { fn } from "storybook/test";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
     onClick: fn(),
  },
};

export const Default = () => {
  const [selected, setSelected] = useState("");
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Papaya",
    "Strawberry",
    "Blueberry",
    "Watermelon",
  ];

  return (
    <div>
      <Autocomplete
        options={fruits}
        onSelect={setSelected}
        placeholder="Search for fruits..."
      />
      <p style={{ marginTop: "10px" }}>
        Selected: <strong>{selected}</strong>
      </p>
    </div>
  );
};
