// src/components/ThemeSwitcher.jsx
import React, { useContext } from "react";

import { ThemeContext } from "../theme/themeContext";
import "./ThemeSwitcher.css"; // 👈 Import the CSS

const ThemeSwitcher = () => {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    // 👇 Add the className here
    <select
      className="theme-switcher-select"
      value={themeName}
      onChange={(e) => setThemeName(e.target.value)}
    >
      <option value="light">☀️ Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="custom">🎨 Custom</option>
    </select>
  );
};

export default ThemeSwitcher;
