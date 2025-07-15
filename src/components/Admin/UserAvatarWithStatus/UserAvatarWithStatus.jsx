import React from "react";
import "./UserAvatarWithStatus.css";

export const UserAvatarWithStatus = ({
  src,
  name = "User",
  size = 48,
  status = "offline", // 'online' | 'offline' | 'away' | 'busy'
  showTooltip = true,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="avatar-container"
      style={{ width: size, height: size }}
      title={showTooltip ? `${name} (${status})` : undefined}
    >
      {src ? (
        <img src={src} alt={name} className="avatar-img" />
      ) : (
        <span className="avatar-fallback">{initials}</span>
      )}
      <span className={`status-indicator ${status}`} />
    </div>
  );
};
