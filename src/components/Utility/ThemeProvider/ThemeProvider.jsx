import React, { createContext, useContext, useEffect, useState } from "react";

// Define available themes
const themes = {
  light: "light",
  dark: "dark",
};

// Create the context
const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

// Main ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  // Load theme from localStorage or match system preference
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? themes.dark : themes.light));
  }, []);

  // Update HTML root class and localStorage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
