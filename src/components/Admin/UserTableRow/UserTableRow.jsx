import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UserTableRow.css";

/**
 * UserTableRow component displays user information in a table format with actions.
 * Perfect for admin panels, user management interfaces, and data tables.
 * 
 * Features:
 * - User avatar with fallback to initials
 * - Status badges with multiple variants
 * - Action buttons with customizable handlers
 * - Loading and selection states
 * - Responsive design with mobile support
 * - Hover effects and smooth animations
 */
export const UserTableRow = ({
  user,
  onEdit,
  onDelete,
  onView = null,
  onSelect = null,
  isSelected = false,
  loading = false,
  showActions = true,
  showAvatar = true,
  showEmail = true,
  showRole = true,
  showStatus = true,
  customActions = null,
  className = "",
  size = "medium"
}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  if (!user) return null;

  const { 
    id, 
    avatar, 
    name = "Unknown User", 
    email, 
    role, 
    status = "inactive",
    lastActive,
    department,
    phone,
    joinDate
  } = user;

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

  // Status configuration
  const statusConfig = {
    active: { label: "Active", color: "success", icon: "●" },
    inactive: { label: "Inactive", color: "warning", icon: "●" },
    banned: { label: "Banned", color: "danger", icon: "●" },
    pending: { label: "Pending", color: "info", icon: "◐" },
    suspended: { label: "Suspended", color: "danger", icon: "⏸" },
    verified: { label: "Verified", color: "success", icon: "✓" }
  };

  const currentStatus = statusConfig[status.toLowerCase()] || statusConfig.inactive;

  // Role configuration for better display
  const roleConfig = {
    admin: { label: "Administrator", icon: "👑" },
    administrator: { label: "Administrator", icon: "👑" },
    user: { label: "User", icon: "👤" },
    moderator: { label: "Moderator", icon: "🛡️" },
    editor: { label: "Editor", icon: "✏️" },
    viewer: { label: "Viewer", icon: "👁️" },
    manager: { label: "Manager", icon: "📊" }
  };

  const currentRole = roleConfig[role?.toLowerCase()] || { label: role, icon: "👤" };

  const handleImageError = () => {
    setImageError(true);
  };

  const rowClasses = [
    'user-table-row',
    `user-table-row--${size}`,
    isSelected && 'user-table-row--selected',
    loading && 'user-table-row--loading',
    isHovered && 'user-table-row--hovered',
    className
  ].filter(Boolean).join(' ');

  const renderAvatar = () => {
    if (!showAvatar) return null;

    if (loading) {
      return <div className="user-avatar user-avatar--skeleton" />;
    }

    if (avatar && !imageError) {
      return (
        <img
          src={avatar}
          alt={name}
          className="user-avatar"
          onError={handleImageError}
        />
      );
    }

    return (
      <div className="user-avatar user-avatar--fallback">
        {initials}
      </div>
    );
  };

  const renderActions = () => {
    if (!showActions) return null;

    if (loading) {
      return (
        <div className="user-actions">
          <div className="action-skeleton" />
          <div className="action-skeleton" />
        </div>
      );
    }

    if (customActions) {
      return <div className="user-actions">{customActions}</div>;
    }

    return (
      <div className="user-actions">
        {onView && (
          <button 
            onClick={() => onView(user)} 
            className="action-btn action-btn--view"
            title="View details"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 9a3 3 0 100 6 3 3 0 000-6zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
            </svg>
            <span>View</span>
          </button>
        )}
        {onEdit && (
          <button 
            onClick={() => onEdit(user)} 
            className="action-btn action-btn--edit"
            title="Edit user"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
            <span>Edit</span>
          </button>
        )}
        {onDelete && (
          <button 
            onClick={() => onDelete(user)} 
            className="action-btn action-btn--delete"
            title="Delete user"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
            <span>Delete</span>
          </button>
        )}
      </div>
    );
  };

  return (
    <tr 
      className={rowClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Selection checkbox */}
      {onSelect && (
        <td className="user-table-cell user-table-cell--select">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => onSelect(user, e.target.checked)}
            className="user-select-checkbox"
            disabled={loading}
          />
        </td>
      )}

      {/* User info */}
      <td className="user-table-cell user-table-cell--user">
        <div className="user-info">
          {renderAvatar()}
          <div className="user-details">
            <div className="user-name">
              {loading ? <div className="text-skeleton" /> : name}
            </div>
            {showEmail && email && (
              <div className="user-email">
                {loading ? <div className="text-skeleton text-skeleton--small" /> : email}
              </div>
            )}
            {department && (
              <div className="user-department">
                {department}
              </div>
            )}
          </div>
        </div>
      </td>

      {/* Role */}
      {showRole && (
        <td className="user-table-cell user-table-cell--role">
          {loading ? (
            <div className="text-skeleton" />
          ) : (
            <div className="user-role">
              <span className="role-icon">{currentRole.icon}</span>
              <span className="role-text">{currentRole.label}</span>
            </div>
          )}
        </td>
      )}

      {/* Status */}
      {showStatus && (
        <td className="user-table-cell user-table-cell--status">
          {loading ? (
            <div className="status-skeleton" />
          ) : (
            <span className={`status-badge status-badge--${currentStatus.color}`}>
              <span className="status-icon">{currentStatus.icon}</span>
              <span className="status-text">{currentStatus.label}</span>
            </span>
          )}
        </td>
      )}

      {/* Last Active */}
      {lastActive && (
        <td className="user-table-cell user-table-cell--activity">
          {loading ? (
            <div className="text-skeleton text-skeleton--small" />
          ) : (
            <div className="user-activity">
              <div className="activity-time">{lastActive}</div>
            </div>
          )}
        </td>
      )}

      {/* Actions */}
      <td className="user-table-cell user-table-cell--actions">
        {renderActions()}
      </td>
    </tr>
  );
};

UserTableRow.propTypes = {
  /** User object containing user data */
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatar: PropTypes.string,
    role: PropTypes.string,
    status: PropTypes.string,
    lastActive: PropTypes.string,
    department: PropTypes.string,
    phone: PropTypes.string,
    joinDate: PropTypes.string
  }).isRequired,
  /** Edit handler function */
  onEdit: PropTypes.func,
  /** Delete handler function */
  onDelete: PropTypes.func,
  /** View handler function */
  onView: PropTypes.func,
  /** Selection handler function */
  onSelect: PropTypes.func,
  /** Whether row is selected */
  isSelected: PropTypes.bool,
  /** Loading state */
  loading: PropTypes.bool,
  /** Whether to show action buttons */
  showActions: PropTypes.bool,
  /** Whether to show user avatar */
  showAvatar: PropTypes.bool,
  /** Whether to show user email */
  showEmail: PropTypes.bool,
  /** Whether to show user role */
  showRole: PropTypes.bool,
  /** Whether to show user status */
  showStatus: PropTypes.bool,
  /** Custom action buttons */
  customActions: PropTypes.node,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Row size variant */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default UserTableRow;