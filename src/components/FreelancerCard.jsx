import React from 'react';
import './FreelancerCard.css';

function FreelancerCard({ freelancer }) {
  // Ensure skills is an array
  const skills = Array.isArray(freelancer.skills) ? freelancer.skills : [];

  return (
    <div className="freelancer-card">
      <div className="freelancer-header">
        <h3 className="freelancer-name">{freelancer.name || 'No Name'}</h3>
        <p className="freelancer-skillset">
          Skills: {skills.length > 0 ? skills.join(', ') : 'No Skills Listed'}
        </p>
      </div>
      <div className="freelancer-body">
        <p className="freelancer-experience">
          Experience: {freelancer.experience || 'No Experience'} years
        </p>
        <p className="freelancer-rate">
          Rate: ${freelancer.rate || '0'} per hour
        </p>
      </div>
    </div>
  );
}

export default FreelancerCard;
