import React, { useState } from "react";
import Radio from "./Radio";
import { fn } from 'storybook/test';

export default {
  title: "Components/Radio",
  component: Radio,
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
  const [selected, setSelected] = useState("one");

  return (
    <div>
      <Radio
        label="Option One"
        name="example"
        value="one"
        checked={selected === "one"}
        onChange={() => setSelected("one")}
      />
      <Radio
        label="Option Two"
        name="example"
        value="two"
        checked={selected === "two"}
        onChange={() => setSelected("two")}
      />
      <Radio
        label="Option Three"
        name="example"
        value="three"
        checked={selected === "three"}
        onChange={() => setSelected("three")}
      />
    </div>
  );
};

export const Error = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <Radio
        label="Option One"
        name="error-example"
        value="one"
        checked={selected === "one"}
        onChange={() => setSelected("one")}
        error={selected === ""}
      />
      <Radio
        label="Option Two"
        name="error-example"
        value="two"
        checked={selected === "two"}
        onChange={() => setSelected("two")}
        error={selected === ""}
      />
      
      {selected === "" && (
        <div style={{ color: "#e74c3c", fontSize: "14px", marginTop: "4px" }}>
          Please select an option.
        </div>
      )}
    </div>
  );
};
