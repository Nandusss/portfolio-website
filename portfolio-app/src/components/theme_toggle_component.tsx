import React from "react";
import "./theme_toggle_component.css";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle theme"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
