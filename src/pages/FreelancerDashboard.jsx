import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import ProjectCard from '../components/ProjectCard';
import ReviewCard from '../components/ReviewCard';
import SearchBar from '../components/SearchBar';
import ProfileHeader from '../components/ProfileHeader';
import AnalyticsChart from '../components/AnalyticsChart';
import './FreelancerDashboard.css';

const projects = [
  { id: 1, title: 'Website Redesign', description: 'Redesign of a company website', status: 'Active', budget: 500 },
  { id: 2, title: 'App Development', description: 'Development of a mobile app', status: 'Completed', budget: 1500 },
];

const reviews = [
  { id: 1, reviewer: 'John Doe', rating: 5, comment: 'Excellent work!' },
  { id: 2, reviewer: 'Jane Smith', rating: 4, comment: 'Good job, but could be improved.' },
];

function FreelancerDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <ProfileHeader name="John Doe" title="Freelancer" />
      <section className="profile-overview">
        <h3>Profile Overview</h3>
        <p>Email: john.doe@example.com</p>
        <p>Skills: Web Design, App Development</p>
        <AnalyticsChart />
      </section>
      <Link to="/jobs" className="view-jobs-link">View Job Listings</Link>
      <SearchBar onSearch={handleSearch} />
      <section className="active-projects">
        <h3>Active Projects</h3>
        {filteredProjects.map(project =>
          project.status === 'Active' && <ProjectCard key={project.id} project={project} />
        )}
      </section>
      <section className="completed-projects">
        <h3>Completed Projects</h3>
        {filteredProjects.map(project =>
          project.status === 'Completed' && <ProjectCard key={project.id} project={project} />
        )}
      </section>
      <section className="reviews">
        <h3>Reviews</h3>
        {reviews.map(review => <ReviewCard key={review.id} review={review} />)}
      </section>
    </div>
  );
}

export default FreelancerDashboard;
