import React, { useState } from "react";
import { ThemeSelector } from "./ThemeSelector";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/ThemeSelector",
  component: ThemeSelector,
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
  const [theme, setTheme] = useState("system");

  const handleThemeChange = (value) => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value); // Or trigger your theme logic
  };

  return (
    <div style={{ maxWidth: "250px" }}>
      <p>Current theme: {theme}</p>
      <ThemeSelector currentTheme={theme} onChange={handleThemeChange} />
    </div>
  );
};
