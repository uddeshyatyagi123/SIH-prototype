import React from 'react';
import './JobCard.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-details">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-description">{job.description}</p>
        <p className="job-company">Company: {job.company}</p>
        <p className="job-location">Location: {job.location}</p>
        <p className="job-budget">Budget: ${job.budget}</p>
      </div>
      <button className="apply-button">Apply</button>
    </div>
  );
}

export default JobCard;
