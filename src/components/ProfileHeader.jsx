import React from 'react';
import './ProfileHeader.css';

function ProfileHeader({ name, title }) {
  return (
    <div className="profile-header">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

export default ProfileHeader;
