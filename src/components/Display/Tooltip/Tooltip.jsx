import React, { useState } from "react";
import "./Tooltip.css";

export const Tooltip = ({ content, position = "top", children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className={`tooltip-box tooltip-${position}`}>
          {content}
          <span className="tooltip-arrow" />
        </div>
      )}
    </div>
  );
};
