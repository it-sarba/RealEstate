import React, { useState } from "react";
import FormControl from "./FormControl";
import Input from "../Input/Input"; 
import { fn } from 'storybook/test';

export default {
  title: "Components/FormControl",
  component: FormControl,
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
  return (
    <FormControl label="Username" hint="Enter your preferred username">
      <Input placeholder="Username" />
    </FormControl>
  );
};

export const WithError = () => {
  return (
    <FormControl label="Email" error="Invalid email address">
      <Input type="email" placeholder="Email" />
    </FormControl>
  );
};

export const RequiredField = () => {
  return (
    <FormControl label="Password" required hint="Must be 8+ characters">
      <Input type="password" placeholder="Password" />
    </FormControl>
  );
};
