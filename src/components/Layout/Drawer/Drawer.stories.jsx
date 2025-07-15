import React, { useState } from "react";
import Drawer from "./Drawer";
import { Menu } from "lucide-react";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Drawer",
  component: Drawer,
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

const DrawerButton = ({ onClick, label }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      backgroundColor: "#1d4ed8",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "1rem",
    }}
  >
    <Menu size={18} /> {label}
  </button>
);

export const LeftDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <DrawerButton label="Open Left Drawer" onClick={() => setOpen(true)} />
      <Drawer isOpen={open} onClose={() => setOpen(false)} position="left">
        <h2 style={{ marginBottom: "1rem", color: "#1d4ed8" }}>Left Drawer</h2>
        <p style={{ color: "#333" }}>
          This is the content of a left-positioned drawer. You can put anything
          here—menus, forms, or other UI.
        </p>
      </Drawer>
    </div>
  );
};

export const RightDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <DrawerButton label="Open Right Drawer" onClick={() => setOpen(true)} />
      <Drawer isOpen={open} onClose={() => setOpen(false)} position="right">
        <h2 style={{ marginBottom: "1rem", color: "#1d4ed8" }}>Right Drawer</h2>
        <p style={{ color: "#333" }}>
          This drawer slides in from the right. Use it for user settings,
          notifications, or side menus.
        </p>
      </Drawer>
    </div>
  );
};
