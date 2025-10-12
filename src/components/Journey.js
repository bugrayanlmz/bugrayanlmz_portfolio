import React from "react";
import TimelineItem from "./TimelineItem";

function Journey() {
  const timelineData = [
    {
      date: "Jun 2024",
      title: "I quit at Kodland",
      description:
        "I quit my job because there were projects I wanted to realize",
    },
    {
      date: "May 2023",
      title: "I started at Kodland",
      description:
        "I started my job at Kodland to teach coding to children between the ages of 8-12",
    },
    {
      date: "2021",
      title: "I started university",
      description:
        "I started my desired department, Management Information Systems",
    },
  ];

  return (
    <div className="main-content active">
      <h1 className="section-title">Journey</h1>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Journey;
