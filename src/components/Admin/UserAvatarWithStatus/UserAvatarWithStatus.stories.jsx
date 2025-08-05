import React, { useState } from "react";
import { UserAvatarWithStatus } from "./UserAvatarWithStatus";

export default {
  title: "User/UserAvatarWithStatus",
  component: UserAvatarWithStatus,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The UserAvatarWithStatus component displays user profile pictures with online status indicators and additional features.

## Features
- **Automatic fallbacks**: Shows initials with gradient backgrounds when no image is provided
- **Status indicators**: Visual indicators for online, offline, away, busy, and idle states
- **Multiple variants**: Circular, rounded, and square avatar shapes
- **Interactive**: Optional click handlers with proper accessibility
- **Badges**: Notification badges for unread messages or alerts
- **Loading states**: Built-in loading animations and error handling
- **Responsive**: Adapts to different sizes and screen resolutions

## Usage
\`\`\`jsx

<UserAvatarWithStatus
  name="Jane Doe"
  src="https://example.com/avatar.jpg"
  status="online"
  size={48}
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: 'Image source URL',
      control: { type: 'text' }
    },
    name: {
      description: "User's full name",
      control: { type: 'text' }
    },
    size: {
      description: 'Avatar size in pixels',
      control: { type: 'range', min: 24, max: 200, step: 4 }
    },
    status: {
      description: "User's online status",
      control: { type: 'select' },
      options: ['online', 'offline', 'away', 'busy', 'idle']
    },
    showTooltip: {
      description: 'Whether to show tooltip on hover',
      control: { type: 'boolean' }
    },
    onClick: {
      description: 'Click handler function',
      action: 'clicked'
    },
    loading: {
      description: 'Loading state',
      control: { type: 'boolean' }
    },
    showBadge: {
      description: 'Whether to show notification badge',
      control: { type: 'boolean' }
    },
    badgeContent: {
      description: 'Content for the notification badge',
      control: { type: 'text' }
    },
    variant: {
      description: 'Avatar shape variant',
      control: { type: 'select' },
      options: ['circular', 'rounded', 'square']
    },
    borderColor: {
      description: 'Custom border color',
      control: { type: 'color' }
    },
    statusPosition: {
      description: 'Position of status indicator',
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right']
    },
    showStatusText: {
      description: 'Whether to show status text in tooltip',
      control: { type: 'boolean' }
    }
  }
};

// Mock avatar URLs for consistent examples
const mockAvatars = {
  jane: "https://images.unsplash.com/photo-1494790108755-2616b74b5b1c?w=150&h=150&fit=crop&crop=face",
  john: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  alex: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
  mike: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  sarah: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
};

/**
 * Default story with an image and online status
 */
export const Default = {
  args: {
    name: "Jane Doe",
    src: mockAvatars.jane,
    status: "online",
    size: 48,
    showTooltip: true
  }
};

/**
 * Avatar without image showing initials fallback
 */
export const WithoutImage = {
  args: {
    name: "John Smith",
    status: "away",
    size: 48,
    showTooltip: true
  }
};

/**
 * Large size variant for profile pages
 */
export const LargeSize = {
  args: {
    name: "Alex Johnson",
    src: mockAvatars.alex,
    size: 96,
    status: "busy",
    showTooltip: true,
    showStatusText: true
  }
};

/**
 * Small size variant for compact layouts
 */
export const SmallSize = {
  args: {
    name: "Mike Wilson",
    src: mockAvatars.mike,
    size: 32,
    status: "online",
    showTooltip: true
  }
};

/**
 * Different status indicators
 */
export const StatusVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <UserAvatarWithStatus
        name="Online User"
        src={mockAvatars.jane}
        status="online"
        size={48}
        showStatusText={true}
      />
      <UserAvatarWithStatus
        name="Away User"
        src={mockAvatars.john}
        status="away"
        size={48}
        showStatusText={true}
      />
      <UserAvatarWithStatus
        name="Busy User"
        src={mockAvatars.alex}
        status="busy"  
        size={48}
        showStatusText={true}
      />
      <UserAvatarWithStatus
        name="Idle User"
        src={mockAvatars.mike}
        status="idle"
        size={48}
        showStatusText={true}
      />
      <UserAvatarWithStatus
        name="Offline User"
        status="offline"
        size={48}
        showStatusText={true}
      />
    </div>
  )
};

/**
 * Different avatar shape variants
 */
export const ShapeVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <UserAvatarWithStatus
        name="Circular"
        src={mockAvatars.jane}
        status="online"
        variant="circular"
        size={64}
      />
      <UserAvatarWithStatus
        name="Rounded"
        src={mockAvatars.john}
        status="away"
        variant="rounded"
        size={64}
      />
      <UserAvatarWithStatus
        name="Square"
        src={mockAvatars.alex}
        status="busy"
        variant="square"
        size={64}
      />
    </div>
  )
};

/**
 * Avatar with notification badge
 */
export const WithBadge = {
  args: {
    name: "Sarah Connor",
    src: mockAvatars.sarah,
    status: "online",
    size: 56,
    showBadge: true,
    badgeContent: "3",
    showTooltip: true
  }
};

/**
 * Loading state demonstration
 */
export const Loading = {
  args: {
    name: "Loading User",
    status: "online",
    size: 48,
    loading: true
  }
};

/**
 * Clickable avatar with interaction
 */
export const Clickable = {
  args: {
    name: "John Doe",
    src: mockAvatars.john,
    status: "online",
    size: 56,
    onClick: () => alert('Avatar clicked!'),
    showTooltip: true
  }
};

/**
 * Different status positions
 */
export const StatusPositions = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <UserAvatarWithStatus
          name="Top Left"
          src={mockAvatars.jane}
          status="online"
          statusPosition="top-left"
          size={64}
        />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#666' }}>Top Left</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <UserAvatarWithStatus
          name="Top Right"
          src={mockAvatars.john}
          status="away"
          statusPosition="top-right"
          size={64}
        />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#666' }}>Top Right</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <UserAvatarWithStatus
          name="Bottom Left"
          src={mockAvatars.alex}
          status="busy"
          statusPosition="bottom-left"
          size={64}
        />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#666' }}>Bottom Left</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <UserAvatarWithStatus
          name="Bottom Right"
          src={mockAvatars.mike}
          status="idle"
          statusPosition="bottom-right"
          size={64}
        />
        <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#666' }}>Bottom Right</p>
      </div>
    </div>
  )
};

/**
 * Custom border colors
 */
export const WithBorders = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <UserAvatarWithStatus
        name="Blue Border"
        src={mockAvatars.jane}
        status="online"
        borderColor="#3b82f6"
        size={56}
      />
      <UserAvatarWithStatus
        name="Green Border"
        src={mockAvatars.john}
        status="online"
        borderColor="#10b981"
        size={56}
      />
      <UserAvatarWithStatus
        name="Purple Border"
        src={mockAvatars.alex}
        status="online"
        borderColor="#8b5cf6"
        size={56}
      />
    </div>
  )
};

