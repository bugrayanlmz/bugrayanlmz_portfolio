import React from "react";
import ProjectTimelineItem from "./ProjectTimelineItem";

function Projects() {
  const projects = [
    {
      title: "Invoice Data Extraction",
      description:
        "Inspired by Loadsure's use of Google Cloud Document AI to automate insurance claim processing, this project leverages Google Cloud Document AI and Python to extract structured data from uploaded invoice PDFs. Key fields such as invoice date, amount, tax rate, and supplier details were accurately identified and presented through visual outputs, including confidence score analysis, pie charts, and entity distribution graphs.",
      image: "/images/proje1.png",
      techStack: [
        "Python",
        "Google Cloud Document AI",
        "Streamlit",
        "Data Visualization",
      ],
      date: "2025",
      demoUrl: "https://data-ai-invoice-9v6v2a994pq9pemlundvdd.streamlit.app/",
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
