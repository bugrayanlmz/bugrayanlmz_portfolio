import React from "react";

function TimelineItem({ date, title, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
