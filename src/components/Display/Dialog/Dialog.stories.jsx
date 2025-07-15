import React, { useState } from "react";
import { Dialog } from "./Dialog";
import { fn } from 'storybook/test';

export default {
  title: "Components/Dialog",
  component: Dialog,
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          alert("Confirmed!");
          setOpen(false);
        }}
        title="Are you sure?"
        description="This action cannot be undone."
        confirmText="Yes, continue"
        cancelText="Cancel"
      />
    </>
  );
};
