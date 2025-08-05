import React from "react";
import { LogViewer } from "./LogViewer";

export default {
  title: "System/LogViewer",
  component: LogViewer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The LogViewer component is designed for displaying formatted log entries in development and monitoring interfaces. 

## Features
- **Color-coded log levels**: Visual distinction between info, warning, error, and debug messages
- **Scrollable container**: Handles large log datasets efficiently
- **Responsive design**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Customizable**: Control visibility of timestamps, levels, and container height

## Usage
\`\`\`jsx
import { LogViewer } from './LogViewer';

const logs = [
  {
    timestamp: "2025-07-14 10:03:12",
    level: "info",
    message: "Server started successfully"
  }
];

<LogViewer logs={logs} />
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    logs: {
      description: 'Array of log objects',
      control: { type: 'object' }
    },
    maxHeight: {
      description: 'Maximum height before scrolling',
      control: { type: 'text' }
    },
    showTimestamp: {
      description: 'Show/hide timestamps',
      control: { type: 'boolean' }
    },
    showLevel: {
      description: 'Show/hide log levels',
      control: { type: 'boolean' }
    },
    className: {
      description: 'Additional CSS classes',
      control: { type: 'text' }
    },
    emptyMessage: {
      description: 'Message when no logs available',
      control: { type: 'text' }
    }
  }
};

const sampleLogs = [
  {
    timestamp: "2025-08-05 10:03:12",
    level: "info",
    message: "Server started successfully on port 8080",
  },
  {
    timestamp: "2025-08-05 10:04:45",
    level: "warning",
    message: "API response delayed by 250ms - consider optimizing database queries",
  },
  {
    timestamp: "2025-08-05 10:05:02",
    level: "error",
    message: "Failed to connect to database: Connection timeout after 30 seconds",
  },
  {
    timestamp: "2025-08-05 10:05:33",
    level: "debug",
    message: "Token verified successfully: user_id=12345, role=admin, expires_in=3600s",
  },
  {
    timestamp: "2025-08-05 10:06:15",
    level: "info",
    message: "User authentication successful for user@example.com",
  },
  {
    timestamp: "2025-08-05 10:07:22",
    level: "warning",
    message: "Memory usage above 80% threshold (current: 85.3%)",
  }
];

const largeLogs = Array.from({ length: 50 }, (_, i) => ({
  timestamp: new Date(Date.now() - (50 - i) * 60000).toISOString().replace('T', ' ').slice(0, 19),
  level: ['info', 'warning', 'error', 'debug'][i % 4],
  message: `Log entry ${i + 1}: ${['System operation completed', 'Performance degradation detected', 'Critical error occurred', 'Debug information'][i % 4]}`
}));

const errorLogs = [
  {
    timestamp: "2025-08-05 14:30:15",
    level: "error",
    message: "Database connection failed: ECONNREFUSED 127.0.0.1:5432",
  },
  {
    timestamp: "2025-08-05 14:30:16",
    level: "error",
    message: "Retrying database connection... (attempt 1/3)",
  },
  {
    timestamp: "2025-08-05 14:30:21",
    level: "error",
    message: "Retrying database connection... (attempt 2/3)",
  },
  {
    timestamp: "2025-08-05 14:30:26",
    level: "error",
    message: "All retry attempts failed. Service unavailable.",
  }
];

/**
 * Default story showing all log levels with typical system messages
 */
export const Default = {
  args: {
    logs: sampleLogs,
    maxHeight: "400px",
    showTimestamp: true,
    showLevel: true,
    className: "",
    emptyMessage: "No logs available"
  }
};

/**
 * Empty state when no logs are provided
 */
export const EmptyState = {
  args: {
    logs: [],
    emptyMessage: "No logs to display"
  }
};

/**
 * Compact view without timestamps for space-constrained interfaces
 */
export const WithoutTimestamps = {
  args: {
    logs: sampleLogs,
    showTimestamp: false,
    showLevel: true
  }
};

/**
 * Minimal view showing only messages
 */
export const MessagesOnly = {
  args: {
    logs: sampleLogs,
    showTimestamp: false,
    showLevel: false
  }
};

/**
 * Error-focused logs for debugging critical issues
 */
export const ErrorLogs = {
  args: {
    logs: errorLogs,
    maxHeight: "300px"
  }
};

/**
 * Large dataset demonstrating scrolling behavior
 */
export const LargeDataset = {
  args: {
    logs: largeLogs,
    maxHeight: "300px"
  }
};

/**
 * Compact height for dashboard widgets
 */
export const CompactHeight = {
  args: {
    logs: sampleLogs.slice(0, 3),
    maxHeight: "200px"
  }
};

/**
 * Info-only logs for general monitoring
 */
export const InfoOnly = {
  args: {
    logs: [
      {
        timestamp: "2025-08-05 10:00:00",
        level: "info",
        message: "Application started successfully",
      },
      {
        timestamp: "2025-08-05 10:01:30",
        level: "info",
        message: "Health check passed - all services operational",
      },
      {
        timestamp: "2025-08-05 10:03:45",
        level: "info",
        message: "User session created: session_id=abc123",
      }
    ]
  }
};


export const DebugLogs = {
  args: {
    logs: [
      {
        timestamp: "2025-08-05 15:20:10",
        level: "debug",
        message: "Function entry: processUserRequest(userId=12345)",
      },
      {
        timestamp: "2025-08-05 15:20:11",
        level: "debug",
        message: "Database query executed: SELECT * FROM users WHERE id = $1",
      },
      {
        timestamp: "2025-08-05 15:20:12",
        level: "debug",
        message: "Query result: 1 row returned in 23ms",
      },
      {
        timestamp: "2025-08-05 15:20:13",
        level: "debug",
        message: "Function exit: processUserRequest() -> success",
      }
    ]
  }
};


export const CustomStyling = {
  args: {
    logs: sampleLogs.slice(0, 4),
    className: "custom-log-viewer",
    maxHeight: "350px"
  },
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
            .custom-log-viewer {
              border: 2px solid #0f2a55ff;
              border-radius: 16px;
              background: linear-gradient(45deg, #1e3a8a, #1e40af) !important;
            }
          `}
        </style>
        <Story />
      </div>
    )
  ]
};