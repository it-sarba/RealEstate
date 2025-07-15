import React from "react";
import "./Timeline.css";

export const TimelineItem = ({ icon, title, description, time }) => (
  <div className="timeline-item">
    <div className="timeline-marker">{icon || <span className="dot" />}</div>
    <div className="timeline-content">
      <div className="timeline-header">
        <h4>{title}</h4>
        {time && <span className="timeline-time">{time}</span>}
      </div>
      {description && <p>{description}</p>}
    </div>
  </div>
);

export const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item, index) => (
      <TimelineItem key={index} {...item} />
    ))}
  </div>
);
