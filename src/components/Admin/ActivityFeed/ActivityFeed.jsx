import React from 'react';
import PropTypes from 'prop-types';
import './ActivityFeed.css';

const ActivityFeed = ({ activities = [], variant = 'default' }) => {
  return (
    <ul className={`activity-feed ${variant === 'compact' ? 'compact' : ''}`}>
      {activities.map((activity, idx) => (
        <li key={idx} className="activity-item">
          <div className="activity-avatar">
            {activity.icon ? (
              <span className="activity-icon">{activity.icon}</span>
            ) : (
              <img src={activity.avatar} alt={`${activity.text} avatar`} />
            )}
          </div>
          <div className="activity-content">
            {activity.type && <span className="activity-type">{activity.type}</span>}
            <p className="activity-text">{activity.text}</p>
            <span className="activity-time">{activity.time}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

ActivityFeed.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      icon: PropTypes.element,
      type: PropTypes.string,
    })
  ),
  variant: PropTypes.oneOf(['default', 'compact']),
};

export default ActivityFeed;