import React from "react";
import "./ScrollArea.css";

export const ScrollArea = ({
  children,
  height = "200px",
  width = "100%",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`scroll-area ${className}`}
      style={{ height, width, ...style }}
    >
      {children}
    </div>
  );
};
