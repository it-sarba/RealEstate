import React from "react";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/ThemeProvider",
  component: ThemeProvider,
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

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "2rem",
        background: theme === "dark" ? "#111827" : "#f3f4f6",
        color: theme === "dark" ? "#f3f4f6" : "#111827",
        borderRadius: "0.5rem",
        textAlign: "center",
      }}
    >
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
        Toggle Theme
      </button>
    </div>
  );
};

export const Default = () => (
  <ThemeProvider>
    <ThemeToggleButton />
  </ThemeProvider>
);
