import React, { useState } from "react";
import { Snackbar } from "./Snackbar";
import { fn } from 'storybook/test';

export default {
  title: "Components/Snackbar",
  component: Snackbar,
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

const Template = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Show Snackbar</button>
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const Info = Template.bind({});
Info.args = {
  message: "This is an info snackbar.",
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  message: "Operation successful!",
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  message: "Something went wrong.",
  type: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Please double-check your input.",
  type: "warning",
};

export const CustomDuration = Template.bind({});
CustomDuration.args = {
  message: "Visible for 5 seconds.",
  type: "info",
  duration: 5000,
};
