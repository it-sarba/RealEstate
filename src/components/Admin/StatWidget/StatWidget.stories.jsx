import React, { useState } from "react";
import { StatWidget } from "./StatWidget";

// Mock icons since we can't import react-icons in artifacts
const MockIcons = {
  Users: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  ),
  DollarSign: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  ),
  ShoppingCart: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8L6 5H4m3 8a2 2 0 102 2 2 2 0 00-2-2zm10 0a2 2 0 102 2 2 2 0 00-2-2z"/>
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M23 6l-9.5 9.5-5-5L1 18l1.5 1.5 6-6 5 5L23 8V6z"/>
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  )
};

export default {
  title: "Dashboard/StatWidget",
  component: StatWidget,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The StatWidget component displays key metrics and statistics with visual indicators and trend data.

## Features
- **Multiple color themes**: Primary, success, warning, danger, info, and neutral variants
- **Trend indicators**: Visual arrows showing positive/negative trends with percentages
- **Size variants**: Small, medium, and large sizes for different layouts
- **Interactive**: Optional click handlers with proper accessibility
- **Loading states**: Built-in loading spinner and skeleton states
- **Responsive**: Adapts to different screen sizes

## Usage
\`\`\`jsx
import { StatWidget } from './StatWidget';

<StatWidget
  title="Active Users"
  value="1,240"
  icon={<UsersIcon />}
  trend={{ direction: "up", amount: "3.2%" }}
  color="primary"
/>
\`\`\`
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Widget title/label',
      control: { type: 'text' }
    },
    value: {
      description: 'Main value to display',
      control: { type: 'text' }
    },
    icon: {
      description: 'Icon element',
      control: false
    },
    trend: {
      description: 'Trend data with direction and amount',
      control: { type: 'object' }
    },
    color: {
      description: 'Color theme variant',
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', 'neutral']
    },
    size: {
      description: 'Widget size variant',
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    loading: {
      description: 'Loading state',
      control: { type: 'boolean' }
    },
    onClick: {
      description: 'Click handler function',
      action: 'clicked'
    },
    subtitle: {
      description: 'Optional subtitle text',
      control: { type: 'text' }
    },
    currency: {
      description: 'Currency symbol to prefix value',
      control: { type: 'text' }
    },
    percentage: {
      description: 'Whether value represents a percentage',
      control: { type: 'boolean' }
    },
    animated: {
      description: 'Enable animations',
      control: { type: 'boolean' }
    }
  }
};

/**
 * Default story showing a primary themed widget with user statistics
 */
export const Default = {
  args: {
    title: "Active Users",
    value: "1,240",
    icon: <MockIcons.Users />,
    trend: { direction: "up", amount: "3.2%" },
    color: "primary"
  }
};

/**
 * Revenue widget with currency formatting and negative trend
 */
export const Revenue = {
  args: {
    title: "Monthly Revenue",
    value: "84,230",
    currency: "$",
    icon: <MockIcons.DollarSign />,
    trend: { direction: "down", amount: "1.8%", label: "vs last month" },
    color: "success",
    subtitle: "Total earnings this month"
  }
};

/**
 * Orders widget with success theme and positive trend
 */
export const Orders = {
  args: {
    title: "New Orders",
    value: "348",
    icon: <MockIcons.ShoppingCart />,
    trend: { direction: "up", amount: "6.5%" },
    color: "success"
  }
};

/**
 * Warning themed widget for alerts or issues
 */
export const Warnings = {
  args: {
    title: "System Alerts",
    value: "12",
    icon: <MockIcons.Clock />,
    trend: { direction: "up", amount: "2" },
    color: "warning",
    subtitle: "Requires attention"
  }
};

/**
 * Danger themed widget for critical metrics
 */
export const Errors = {
  args: {
    title: "Critical Errors",
    value: "3",
    icon: <MockIcons.TrendingUp />,
    trend: { direction: "down", amount: "67%" },
    color: "danger",
    subtitle: "Last 24 hours"
  }
};

/**
 * Small size variant for compact layouts
 */
export const SmallSize = {
  args: {
    title: "Page Views",
    value: "45.2K",
    icon: <MockIcons.Eye />,
    trend: { direction: "up", amount: "12%" },
    color: "info",
    size: "small"
  }
};

/**
 * Large size variant for emphasis
 */
export const LargeSize = {
  args: {
    title: "Total Revenue",
    value: "2.4M",
    currency: "$",
    icon: <MockIcons.DollarSign />,
    trend: { direction: "up", amount: "23.1%" },
    color: "success",
    size: "large",
    subtitle: "Yearly performance"
  }
};

/**
 * Loading state demonstration
 */
export const Loading = {
  args: {
    title: "Loading Data",
    value: "Loading...",
    icon: <MockIcons.Globe />,
    color: "neutral",
    loading: true
  }
};

/**
 * Widget without trend indicator
 */
export const NoTrend = {
  args: {
    title: "Server Uptime",
    value: "99.9",
    percentage: true,
    icon: <MockIcons.Globe />,
    color: "success",
    subtitle: "Last 30 days"
  }
};

/**
 * Clickable widget with interaction
 */
export const Clickable = {
  args: {
    title: "Click Me",
    value: "Interactive",
    icon: <MockIcons.TrendingUp />,
    trend: { direction: "up", amount: "5%" },
    color: "primary",
    onClick: (e) => alert('Widget clicked!')
  }
};

/**
 * Info themed widget
 */
export const InfoTheme = {
  args: {
    title: "API Calls",
    value: "156K",
    icon: <MockIcons.Globe />,
    trend: { direction: "up", amount: "8.3%" },
    color: "info",
    subtitle: "This month"
  }
};

/**
 * Neutral themed widget
 */
export const NeutralTheme = {
  args: {
    title: "Pending Tasks",
    value: "28",
    icon: <MockIcons.Clock />,
    color: "neutral",
    subtitle: "In queue"
  }
};

/**
 * Percentage value example
 */
export const PercentageValue = {
  args: {
    title: "Conversion Rate",
    value: "24.8",
    percentage: true,
    icon: <MockIcons.TrendingUp />,
    trend: { direction: "up", amount: "2.1%" },
    color: "success"
  }
};

/**
 * Dashboard grid layout example
 */
export const DashboardGrid = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '1.5rem',
      width: '100%',
      maxWidth: '1200px'
    }}>
      <StatWidget
        title="Active Users"
        value="1,240"
        icon={<MockIcons.Users />}
        trend={{ direction: "up", amount: "3.2%" }}
        color="primary"
      />
      <StatWidget
        title="Revenue"
        value="84,230"
        currency="$"
        icon={<MockIcons.DollarSign />}
        trend={{ direction: "up", amount: "12.5%" }}
        color="success"
      />
      <StatWidget
        title="Orders"
        value="348"
        icon={<MockIcons.ShoppingCart />}
        trend={{ direction: "down", amount: "2.1%" }}
        color="warning"
      />
      <StatWidget
        title="Errors"
        value="5"
        icon={<MockIcons.TrendingUp />}
        trend={{ direction: "down", amount: "45%" }}
        color="danger"
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: `
<div className="stat-widget-grid">
  <StatWidget title="Active Users" value="1,240" icon={<UsersIcon />} trend={{ direction: "up", amount: "3.2%" }} color="primary" />
  <StatWidget title="Revenue" value="84,230" currency="$" icon={<DollarIcon />} trend={{ direction: "up", amount: "12.5%" }} color="success" />
  <StatWidget title="Orders" value="348" icon={<CartIcon />} trend={{ direction: "down", amount: "2.1%" }} color="warning" />
  <StatWidget title="Errors" value="5" icon={<TrendIcon />} trend={{ direction: "down", amount: "45%" }} color="danger" />
</div>
        `
      }
    }
  }
};

/**
 * Interactive example with state management
 */
export const InteractiveExample = {
  render: () => {
    const [clickCount, setClickCount] = useState(0);
    
    return (
      <StatWidget
        title="Click Counter"
        value={clickCount.toString()}
        icon={<MockIcons.TrendingUp />}
        trend={clickCount > 0 ? { direction: "up", amount: "100%" } : null}
        color="primary"
        onClick={() => setClickCount(prev => prev + 1)}
        subtitle="Click to increment"
      />
    );
  }
};