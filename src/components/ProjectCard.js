import React from "react";

function ProjectCard({ title, description, image, techStack, date, demoUrl }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <img src={image} className="project-image" alt={`${title} Project`} />
        <div className="project-overlay">
          <a
            href={demoUrl}
            className="project-demo-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Demo
          </a>
        </div>
      </div>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-footer">
          <div className="project-date">{date}</div>
          <a
            href={demoUrl}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
