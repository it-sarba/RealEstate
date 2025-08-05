import React, { useState } from "react";
import { UserTableRow } from "./UserTableRow";

export default {
  title: "Admin/UserTableRow",
  component: UserTableRow,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The UserTableRow component displays user information in a tabular format with interactive features.

## Features
- **User Information Display**: Avatar, name, email, role, and status
- **Interactive Actions**: View, edit, and delete buttons with custom handlers
- **Selection Support**: Checkbox selection for bulk operations  
- **Status Indicators**: Visual badges for different user states
- **Loading States**: Skeleton animations during data loading
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support

## Usage
\`\`\`jsx
import { UserTableRow } from './UserTableRow';

<table>
  <tbody>
    <UserTableRow
      user={userData}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onSelect={handleSelect}
    />
  </tbody>
</table>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    user: {
      description: 'User object containing user data',
      control: { type: 'object' }
    },
    onEdit: {
      description: 'Edit handler function',
      action: 'edit'
    },
    onDelete: {
      description: 'Delete handler function', 
      action: 'delete'
    },
    onView: {
      description: 'View handler function',
      action: 'view'
    },
    onSelect: {
      description: 'Selection handler function',
      action: 'select'
    },
    isSelected: {
      description: 'Whether row is selected',
      control: { type: 'boolean' }
    },
    loading: {
      description: 'Loading state',
      control: { type: 'boolean' }
    },
    showActions: {
      description: 'Whether to show action buttons',
      control: { type: 'boolean' }
    },
    showAvatar: {
      description: 'Whether to show user avatar',
      control: { type: 'boolean' }
    },
    showEmail: {
      description: 'Whether to show user email',
      control: { type: 'boolean' }
    },
    showRole: {
      description: 'Whether to show user role',
      control: { type: 'boolean' }
    },
    showStatus: {
      description: 'Whether to show user status',
      control: { type: 'boolean' }
    },
    size: {
      description: 'Row size variant',
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem', background: '#f8fafc', minHeight: '100vh' }}>
        <div className="user-table-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <table className="user-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Story />
            </tbody>
          </table>
        </div>
      </div>
    )
  ]
};

// Mock user data
const mockUsers = {
  admin: {
    id: 1,
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    role: "Administrator",
    status: "active",
    lastActive: "2 minutes ago",
    department: "IT Operations",
    joinDate: "2023-01-15"
  },
  user: {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    role: "User",
    status: "active",
    lastActive: "1 hour ago",
    department: "Marketing",
    joinDate: "2023-03-22"
  },
  moderator: {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@company.com", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    role: "Moderator",
    status: "away",
    lastActive: "3 hours ago",
    department: "Customer Support"
  },
  suspended: {
    id: 4,
    name: "James Thompson",
    email: "james.thompson@company.com",
    role: "User", 
    status: "suspended",
    lastActive: "2 days ago",
    department: "Sales"
  },
  pending: {
    id: 5,
    name: "Lisa Park",
    email: "lisa.park@company.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    role: "Editor",
    status: "pending",
    lastActive: "Never",
    department: "Content"
  }
};

/**
 * Default story showing an active administrator
 */
export const Default = {
  args: {
    user: mockUsers.admin,
    showActions: true,
    showAvatar: true,
    showEmail: true,
    showRole: true, 
    showStatus: true,
    size: "medium"
  }
};

/**
 * Regular user with standard permissions
 */
export const RegularUser = {
  args: {
    user: mockUsers.user,
    showActions: true
  }
};

/**
 * User without avatar showing initials fallback
 */
export const WithoutAvatar = {
  args: {
    user: mockUsers.suspended,
    showActions: true
  }
};

/**
 * Different user status variants
 */
export const StatusVariants = {
  render: () => (
    <>
      <UserTableRow
        user={{ ...mockUsers.admin, status: "active" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.user, status: "inactive" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.moderator, status: "away" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.suspended, status: "suspended" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.pending, status: "pending" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </>
  )
};

/**
 * Different role types with icons
 */
export const RoleVariants = {
  render: () => (
    <>
      <UserTableRow
        user={{ ...mockUsers.admin, role: "Administrator" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.moderator, role: "Moderator" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.pending, role: "Editor" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.user, role: "User" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
      <UserTableRow
        user={{ ...mockUsers.user, role: "Viewer", name: "John Viewer" }}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </>
  )
};

/**
 * Loading state with skeleton animations
 */
export const Loading = {
  args: {
    user: mockUsers.admin,
    loading: true,
    showActions: true
  }
};

/**
 * Selected state for bulk operations
 */
export const Selected = {
  args: {
    user: mockUsers.admin,
    isSelected: true,
    onSelect: () => {},
    showActions: true
  }
};

/**
 * Row with selection checkbox
 */
export const WithSelection = {
  args: {
    user: mockUsers.user,
    onSelect: () => {},
    isSelected: false,
    showActions: true
  }
};

/**
 * Small size variant for compact layouts
 */
export const SmallSize = {
  args: {
    user: mockUsers.admin,
    size: "small",
    showActions: true
  }
};

/**
 * Large size variant for detailed views
 */
export const LargeSize = {
  args: {
    user: mockUsers.admin,
    size: "large", 
    showActions: true
  }
};

/**
 * Minimal row without actions
 */
export const WithoutActions = {
  args: {
    user: mockUsers.user,
    showActions: false
  }
};

/**
 * Row with custom actions
 */
export const CustomActions = {
  args: {
    user: mockUsers.admin,
    showActions: true,
    customActions: (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button 
          className="action-btn action-btn--view"
          onClick={() => alert('Profile clicked')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6V4H9V6L3 7V9L9 8V20H15V8L21 9Z"/>
          </svg>
          <span>Profile</span>
        </button>
        <button 
          className="action-btn action-btn--edit"
          onClick={() => alert('Reset password')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"/>
          </svg>
          <span>Reset</span>
        </button>
        <button 
          className="action-btn action-btn--delete"
          onClick={() => alert('Suspend user')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
          </svg>
          <span>Suspend</span>
        </button>
      </div>
    )
  }
};

/**
 * Interactive example with state management
 */
export const InteractiveExample = {
  render: () => {
    const [users, setUsers] = useState([
      { ...mockUsers.admin, id: 1 },
      { ...mockUsers.user, id: 2 },
      { ...mockUsers.moderator, id: 3 },
      { ...mockUsers.suspended, id: 4 }
    ]);
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    const [editingUser, setEditingUser] = useState(null);

    const handleSelect = (user, isSelected) => {
      const newSelected = new Set(selectedUsers);
      if (isSelected) {
        newSelected.add(user.id);
      } else {
        newSelected.delete(user.id);
      }
      setSelectedUsers(newSelected);
    };

    const handleEdit = (user) => {
      setEditingUser(user);
      setTimeout(() => setEditingUser(null), 2000); // Auto-close after 2s for demo
    };

    const handleDelete = (user) => {
      if (confirm(`Delete ${user.name}?`)) {
        setUsers(users.filter(u => u.id !== user.id));
        setSelectedUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(user.id);
          return newSet;
        });
      }
    };

    const handleView = (user) => {
      alert(`Viewing profile for ${user.name}`);
    };

    return (
      <>
        {users.map(user => (
          <UserTableRow
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
            onSelect={handleSelect}
            isSelected={selectedUsers.has(user.id)}
            loading={editingUser?.id === user.id}
          />
        ))}
        {users.length === 0 && (
          <tr>
            <td colSpan="6" style={{ 
              textAlign: 'center', 
              padding: '2rem',
              color: '#6b7280',
              fontStyle: 'italic'
            }}>
              No users found
            </td>
          </tr>
        )}
        <tr>
          <td colSpan="6" style={{ 
            background: '#f8fafc',
            padding: '1rem',
            borderTop: '2px solid #e5e7eb'
          }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              <span>
                {selectedUsers.size} of {users.length} users selected
              </span>
              {selectedUsers.size > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => {
                      selectedUsers.forEach(id => {
                        const user = users.find(u => u.id === id);
                        if (user) handleEdit(user);
                      });
                    }}
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#3b82f6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}
                  >
                    Edit Selected ({selectedUsers.size})
                  </button>
                  <button
                    onClick={() => setSelectedUsers(new Set())}
                    style={{
                      padding: '0.5rem 1rem',
                      background: '#6b7280',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}
                  >
                    Clear Selection
                  </button>
                </div>
              )}
            </div>
          </td>
        </tr>
      </>
    );
  }
};

/**
 * Full user management table example
 */
export const FullUserTable = {
  render: () => (
    <>
      <UserTableRow
        user={mockUsers.admin}
        onEdit={() => alert('Edit admin')}
        onDelete={() => alert('Delete admin')}
        onView={() => alert('View admin')}
        onSelect={() => {}}
        isSelected={false}
      />
      <UserTableRow
        user={mockUsers.user}
        onEdit={() => alert('Edit user')}
        onDelete={() => alert('Delete user')}
        onView={() => alert('View user')}
        onSelect={() => {}}
        isSelected={true}
      />
      <UserTableRow
        user={mockUsers.moderator}
        onEdit={() => alert('Edit moderator')}
        onDelete={() => alert('Delete moderator')}
        onView={() => alert('View moderator')}
        onSelect={() => {}}
        isSelected={false}
      />
      <UserTableRow
        user={mockUsers.suspended}
        onEdit={() => alert('Edit suspended user')}
        onDelete={() => alert('Delete suspended user')}
        onView={() => alert('View suspended user')}
        onSelect={() => {}}
        isSelected={false}
      />
      <UserTableRow
        user={mockUsers.pending}
        onEdit={() => alert('Edit pending user')}
        onDelete={() => alert('Delete pending user')}
        onView={() => alert('View pending user')}
        onSelect={() => {}}
        isSelected={false}
      />
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<table className="user-table">
  <thead>
    <tr>
      <th>Select</th>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
      <th>Last Active</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <UserTableRow
        key={user.id}
        user={user}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onSelect={handleSelect}
        isSelected={selectedUsers.has(user.id)}
      />
    ))}
  </tbody>
</table>
        `
      }
    }
  }
};

/**
 * Broken image fallback demonstration
 */
export const BrokenImage = {
  args: {
    user: {
      ...mockUsers.admin,
      avatar: "https://broken-url-that-does-not-exist.jpg"
    },
    showActions: true
  }
};