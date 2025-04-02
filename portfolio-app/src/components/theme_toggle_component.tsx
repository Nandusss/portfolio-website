import React, { useState, useRef } from "react";
import "./theme_toggle_component.css";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    setStartY(clientY);
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;

    const clientY =
      "touches" in e
        ? (e as TouchEvent).touches[0].clientY
        : (e as MouseEvent).clientY;
    const deltaY = clientY - startY;

    // Reduced threshold from 50 to 15 pixels for more sensitive movement
    if (Math.abs(deltaY) > 15) {
      if (deltaY > 0 && !isDark) {
        onToggle();
        setIsDragging(false);
      } else if (deltaY < 0 && isDark) {
        onToggle();
        setIsDragging(false);
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchmove", handleDrag);
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mousemove", handleDrag);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDrag);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, startY]);

  return (
    <div
      className={`theme-toggle-wrapper ${isDragging ? "dragging" : ""}`}
      ref={toggleRef}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
    >
      <div className={`theme-toggle-switch ${isDark ? "dark" : "light"}`}>
        <span className="theme-icon">{isDark ? "🌙" : "🔆"}</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
