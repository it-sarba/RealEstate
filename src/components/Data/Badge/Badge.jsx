import React from "react";
import "./Badge.css";

export const Badge = ({
  children,
  color = "gray",
  variant = "solid", // 'solid' | 'outline' | 'subtle'
  size = "md", // 'sm' | 'md' | 'lg'
  rounded = "full", // 'none' | 'sm' | 'md' | 'lg' | 'full'
}) => {
  const className = `badge badge-${color} badge-${variant} badge-${size} badge-rounded-${rounded}`;
  return <span className={className}>{children}</span>;
};
export default Badge;