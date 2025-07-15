import React from "react";
import "./ActivityFeed.css";

export const ActivityFeed = ({ activities = [] }) => {
  return (
    <ul className="activity-feed">
      {activities.map((activity, idx) => (
        <li key={idx} className="activity-item">
          <div className="activity-avatar">
            {activity.icon ? (
              <span className="activity-icon">{activity.icon}</span>
            ) : (
              <img src={activity.avatar} alt="user" />
            )}
          </div>
          <div className="activity-content">
            <p className="activity-text">{activity.text}</p>
            <span className="activity-time">{activity.time}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
