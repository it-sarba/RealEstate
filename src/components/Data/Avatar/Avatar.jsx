import React from "react";
import "./Avatar.css";

export const Avatar = ({
  src,
  alt = "Avatar",
  size = "md",
  fallback,
  shape = "circle",
}) => {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 72,
    xl: 96,
  };

  const avatarSize = sizeMap[size] || sizeMap["md"];

  return (
    <div
      className={`avatar ${shape}`}
      style={{ width: avatarSize, height: avatarSize }}
    >
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <span className="avatar-fallback">{fallback || alt.charAt(0)}</span>
      )}
    </div>
  );
};
