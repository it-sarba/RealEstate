import React, { useState } from "react";
import { Portal } from "./Portal";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/Portal",
  component: Portal,
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setIsOpen(true)}>Open Portal</button>

      {isOpen && (
        <Portal>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "2rem",
              background: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              zIndex: 9999,
              borderRadius: "0.5rem",
            }}
          >
            <p>This content is rendered in a Portal</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </Portal>
      )}
    </div>
  );
};
