import React from "react";
import PropTypes from "prop-types";
import "./StatWidget.css";

/**
 * StatWidget component displays key metrics and statistics with trend indicators.
 * Perfect for dashboards, analytics interfaces, and KPI monitoring.
 * 
 * Features:
 * - Color-coded themes for different metric types
 * - Trend indicators with directional arrows
 * - Responsive design with hover effects
 * - Loading and error states
 * - Customizable sizes and layouts
 */
export const StatWidget = ({
  title,
  value,
  icon,
  trend = null,
  color = "primary",
  size = "medium",
  loading = false,
  onClick = null,
  subtitle = null,
  currency = null,
  percentage = false,
  animated = true,
  className = ""
}) => {
  // Format value based on type
  const formatValue = (val) => {
    if (loading) return "---";
    if (currency) return `${currency}${val}`;
    if (percentage) return `${val}%`;
    return val;
  };

  // Render trend indicator
  const renderTrend = () => {
    if (!trend) return null;
    
    const { direction, amount, label } = trend;
    const isPositive = direction === "up";
    const trendClass = isPositive ? "trend-up" : "trend-down";
    
    return (
      <div className={`stat-trend ${trendClass}`}>
        <svg 
          className="trend-icon"
          viewBox="0 0 12 12" 
          fill="currentColor"
        >
          {isPositive ? (
            <path d="M6 2L10 6H8V10H4V6H2L6 2Z" />
          ) : (
            <path d="M6 10L2 6H4V2H8V6H10L6 10Z" />
          )}
        </svg>
        <span className="trend-amount">{amount}</span>
        {label && <span className="trend-label">{label}</span>}
      </div>
    );
  };

  const widgetClasses = [
    'stat-widget',
    `stat-widget--${color}`,
    `stat-widget--${size}`,
    loading && 'stat-widget--loading',
    onClick && 'stat-widget--clickable',
    animated && 'stat-widget--animated',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={widgetClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
    >
      <div className="stat-widget__icon">
        {loading ? (
          <div className="stat-widget__spinner">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 10}`}
                strokeDashoffset={`${2 * Math.PI * 10 * 0.75}`}
              />
            </svg>
          </div>
        ) : (
          icon
        )}
      </div>
      
      <div className="stat-widget__content">
        <div className="stat-widget__header">
          <div className="stat-widget__title">{title}</div>
          {renderTrend()}
        </div>
        
        <div className="stat-widget__value">
          {formatValue(value)}
        </div>
        
        {subtitle && (
          <div className="stat-widget__subtitle">{subtitle}</div>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="stat-widget__glow"></div>
      <div className="stat-widget__pattern"></div>
    </div>
  );
};

StatWidget.propTypes = {
  /** Widget title/label */
  title: PropTypes.string.isRequired,
  /** Main value to display */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Icon element (React component or JSX) */
  icon: PropTypes.element,
  /** Trend data with direction and amount */
  trend: PropTypes.shape({
    direction: PropTypes.oneOf(['up', 'down']).isRequired,
    amount: PropTypes.string.isRequired,
    label: PropTypes.string
  }),
  /** Color theme variant */
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info', 'neutral']),
  /** Widget size variant */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Loading state */
  loading: PropTypes.bool,
  /** Click handler function */
  onClick: PropTypes.func,
  /** Optional subtitle text */
  subtitle: PropTypes.string,
  /** Currency symbol to prefix value */
  currency: PropTypes.string,
  /** Whether value represents a percentage */
  percentage: PropTypes.bool,
  /** Enable animations */
  animated: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string
};

export default StatWidget;