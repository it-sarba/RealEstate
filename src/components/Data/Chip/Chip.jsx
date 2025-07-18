import React from "react";
import "./Chip.css";

export const Chip = ({
  label,
  icon,
  avatar,
  onClose,
  color = "default",
  size = "md", // 'sm' | 'md' | 'lg'
  variant = "solid", // 'solid' | 'outline'
}) => {
  return (
    <span className={`chip chip-${size} chip-${color} chip-${variant}`}>
      {avatar && <span className="chip-avatar">{avatar}</span>}
      {icon && <span className="chip-icon">{icon}</span>}
      <span className="chip-label">{label}</span>
      {onClose && (
        <button className="chip-close" onClick={onClose} aria-label="Remove chip">
          ×
        </button>
      )}
    </span>
  );
};
export default Chip;