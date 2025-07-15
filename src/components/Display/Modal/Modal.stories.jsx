import React, { useState } from "react";
import { Modal } from "./Modal";
import { fn } from 'storybook/test';

export default {
  title: "Components/Modal",
  component: Modal,
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
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
      >
        <p>This is a simple modal component.</p>
        <p>You can place anything you want inside here.</p>
      </Modal>
    </>
  );
};
