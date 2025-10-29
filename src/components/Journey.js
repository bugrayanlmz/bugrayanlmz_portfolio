import React from "react";
import TimelineItem from "./TimelineItem";

function Journey() {
  const timelineData = [
    {
      date: "Jun 2025 - Jul 2025",
      title: "IT Intern at Kocaer Steel",
      description:
        "I successfully completed my IT summer internship, where I observed a professional work environment and gained valuable experiences and friendships. It provided me with important steps for my future career.",
    },
    {
      date: "Jun 2024",
      title: "I quit at Kodland",
      description:
        "I left my Python Tutor job, where I gained wonderful friendships and experiences, with the aim of advancing myself in the field I am passionate about.",
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
