import React from "react";
import "./ThemeSelector.css";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const THEMES = [
  { value: "light", label: "Light", icon: <FaSun /> },
  { value: "dark", label: "Dark", icon: <FaMoon /> },
  { value: "system", label: "System", icon: <FaDesktop /> },
];

export const ThemeSelector = ({ currentTheme = "system", onChange }) => {
  return (
    <div className="theme-selector">
      <select
        className="theme-select"
        value={currentTheme}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {THEMES.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
};
