import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  // Check if project object is defined and has the expected properties
  if (!project) {
    return <div className="project-card">Project data is not available.</div>;
  }

  const { title, description, status, budget } = project;

  return (
    <div className="project-card">
      <h3 className="project-title">{title || 'No Title'}</h3>
      <p className="project-description">{description || 'No Description'}</p>
      <p className="project-status">Status: <span>{status || 'No Status'}</span></p>
      <p className="project-budget">Budget: <span>${budget || '0'}</span></p>
    </div>
  );
}

export default ProjectCard;
