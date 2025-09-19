import React, { useState, useEffect, useMemo } from "react";
import { ThemeContext } from "./themeContext"; // Import from the new file
import { themes } from "./themes";

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or default to 'light'
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const currentTheme = themes[themeName];

  // Apply theme colors as CSS variables to the root element
  useEffect(() => {
    const root = document.documentElement;
    Object.keys(currentTheme).forEach((key) => {
      root.style.setProperty(key, currentTheme[key]);
    });
    // Save theme to localStorage
    localStorage.setItem("theme", themeName);
  }, [themeName, currentTheme]);

  const value = useMemo(() => ({ themeName, setThemeName }), [themeName]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
