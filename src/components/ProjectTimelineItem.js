import React from "react";

function ProjectTimelineItem({
  title,
  description,
  image,
  techStack,
  date,
  demoUrl,
}) {
  return (
    <div className="timeline-item project-timeline-item">
      <div className="timeline-date">{date}</div>
      <div className="timeline-content">
        <h3 className="font-semibold mb-2">{title}</h3>

        {image && (
          <div className="project-timeline-image">
            <img src={image} alt={`${title} Project`} />
          </div>
        )}

        <p className="text-gray-600">{description}</p>

        {techStack && techStack.length > 0 && (
          <div className="project-timeline-tech">
            {techStack.map((tech, index) => (
              <span key={index} className="tech-tag-timeline">
                {tech}
              </span>
            ))}
          </div>
        )}

        {demoUrl && (
          <div className="project-timeline-link">
            <a
              href={demoUrl}
              className="timeline-demo-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectTimelineItem;
