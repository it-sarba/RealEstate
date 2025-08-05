import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UserAvatarWithStatus.css";

/**
 * UserAvatarWithStatus component displays user profile pictures with online status indicators.
 * Perfect for user interfaces, chat applications, team directories, and collaboration tools.
 * 
 * Features:
 * - Automatic fallback to initials when no image is provided
 * - Status indicators with smooth animations
 * - Multiple size variants and custom sizing
 * - Hover effects and tooltips
 * - Loading states and error handling
 * - Click handlers for user interactions
 * - Badge support for notifications
 */
export const UserAvatarWithStatus = ({
  src,
  name = "User",
  size = 48,
  status = "offline",
  showTooltip = true,
  onClick = null,
  loading = false,
  showBadge = false,
  badgeContent = null,
  variant = "circular",
  borderColor = null,
  className = "",
  statusPosition = "bottom-right",
  showStatusText = false,
  customFallback = null,
  gradientColors = null
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Generate initials from name
  const getInitials = (fullName) => {
    if (!fullName) return "U";
    return fullName
      .trim()
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = getInitials(name);

  // Generate gradient colors based on name for consistent coloring
  const generateGradient = (userName) => {
    if (gradientColors) return gradientColors;
    
    const colors = [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7'],
      ['#fa709a', '#fee140'],
      ['#a8edea', '#fed6e3'],
      ['#ff9a9e', '#fecfef'],
      ['#96fbc4', '#f9f586']
    ];
    
    const hash = userName.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return colors[Math.abs(hash) % colors.length];
  };

  const gradient = generateGradient(name);

  // Status configuration
  const statusConfig = {
    online: { color: '#22c55e', label: 'Online', pulse: true },
    offline: { color: '#6b7280', label: 'Offline', pulse: false },
    away: { color: '#f59e0b', label: 'Away', pulse: false },
    busy: { color: '#ef4444', label: 'Busy', pulse: false },
    idle: { color: '#8b5cf6', label: 'Idle', pulse: false }
  };

  const currentStatus = statusConfig[status] || statusConfig.offline;

  // Size calculations
  const statusSize = Math.max(8, size * 0.2);
  const statusOffset = Math.max(2, size * 0.04);

  const avatarClasses = [
    'user-avatar',
    `user-avatar--${variant}`,
    `user-avatar--${statusPosition}`,
    loading && 'user-avatar--loading',
    onClick && 'user-avatar--clickable',
    className
  ].filter(Boolean).join(' ');

  const avatarStyle = {
    width: size,
    height: size,
    borderColor: borderColor,
    borderWidth: borderColor ? '2px' : undefined
  };

  const fallbackStyle = {
    background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
    fontSize: Math.max(12, size * 0.35)
  };

  const statusStyle = {
    width: statusSize,
    height: statusSize,
    backgroundColor: currentStatus.color,
    [statusPosition.includes('right') ? 'right' : 'left']: statusOffset,
    [statusPosition.includes('bottom') ? 'bottom' : 'top']: statusOffset
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const renderAvatar = () => {
    if (loading) {
      return <div className="user-avatar__skeleton" />;
    }

    if (src && !imageError) {
      return (
        <>
          <img
            src={src}
            alt={name}
            className={`user-avatar__image ${imageLoaded ? 'loaded' : ''}`}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
          {!imageLoaded && (
            <div className="user-avatar__fallback" style={fallbackStyle}>
              {customFallback || initials}
            </div>
          )}
        </>
      );
    }

    return (
      <div className="user-avatar__fallback" style={fallbackStyle}>
        {customFallback || initials}
      </div>
    );
  };

  const tooltipText = showTooltip 
    ? `${name}${showStatusText ? ` • ${currentStatus.label}` : ''}`
    : undefined;

  return (
    <div
      className={avatarClasses}
      style={avatarStyle}
      onClick={onClick}
      title={tooltipText}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
    >
      {renderAvatar()}
      
      {/* Status Indicator */}
      <div
        className={`user-avatar__status ${currentStatus.pulse ? 'pulse' : ''}`}
        style={statusStyle}
        aria-label={`Status: ${currentStatus.label}`}
      />

      {/* Badge */}
      {showBadge && badgeContent && (
        <div className="user-avatar__badge">
          {badgeContent}
        </div>
      )}

      {/* Loading overlay */}
      {loading && <div className="user-avatar__loading-overlay" />}
    </div>
  );
};

UserAvatarWithStatus.propTypes = {
  /** Image source URL */
  src: PropTypes.string,
  /** User's full name */
  name: PropTypes.string,
  /** Avatar size in pixels */
  size: PropTypes.number,
  /** User's online status */
  status: PropTypes.oneOf(['online', 'offline', 'away', 'busy', 'idle']),
  /** Whether to show tooltip on hover */
  showTooltip: PropTypes.bool,
  /** Click handler function */
  onClick: PropTypes.func,
  /** Loading state */
  loading: PropTypes.bool,
  /** Whether to show notification badge */
  showBadge: PropTypes.bool,
  /** Content for the notification badge */
  badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Avatar shape variant */
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
  /** Custom border color */
  borderColor: PropTypes.string,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Position of status indicator */
  statusPosition: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
  /** Whether to show status text in tooltip */
  showStatusText: PropTypes.bool,
  /** Custom fallback content instead of initials */
  customFallback: PropTypes.node,
  /** Custom gradient colors [startColor, endColor] */
  gradientColors: PropTypes.arrayOf(PropTypes.string)
};

export default UserAvatarWithStatus;