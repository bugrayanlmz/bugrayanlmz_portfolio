import React from "react";
import ProjectTimelineItem from "./ProjectTimelineItem";

function Projects() {
  const projects = [
    {
      title: "PETIOPIA",
      description:
        "A comprehensive pet care website I created with the help of AI for the final project of our web programming course. This platform provides pet owners with essential information and services for their beloved pets.",
      image: "/images/petiopia.png",
      techStack: ["HTML", "CSS", "JavaScript", "AI-Assisted"],
      date: "2024",
      demoUrl: "https://petiopia.netlify.app/",
    },
  ];

  return (
    <div className="main-content active">
      <h1 className="section-title">Projects</h1>
      <div className="timeline-container">
        {projects.map((project, index) => (
          <ProjectTimelineItem
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            date={project.date}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
