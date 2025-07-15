// src/components/FieldWrapper/FieldWrapper.stories.jsx
import React, { useState } from "react";
import FieldWrapper from "./FieldWrapper";
import Input from "../Input/Input";
import { fn } from 'storybook/test';

export default {
  title: "Components/Form/FieldWrapper",
  component: FieldWrapper,
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
  <FieldWrapper label="Username" required>
    <Input placeholder="Enter your username" />
  </FieldWrapper>
);

export const WithError = () => {
  const [value, setValue] = useState("");

  return (
    <FieldWrapper label="Email" error={value ? "" : "Email is required"} required>
      <Input
        type="email"
        placeholder="you@example.com"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FieldWrapper>
  );
};
