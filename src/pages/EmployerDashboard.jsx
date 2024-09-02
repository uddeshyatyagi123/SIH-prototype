import React from 'react';
import './EmployerDashboard.css';
import AnalyticsChart from '../components/AnalyticsChart';
import ProjectCard from '../components/ProjectCard';
import ProfileHeader from '../components/ProfileHeader';
import { Link } from 'react-router-dom';


const completedProjects = [
  { id: 1, title: 'Website Redesign', description: 'Redesign of a company website', budget: 500 },
  { id: 2, title: 'App Development', description: 'Development of a mobile app', budget: 1500 },
  { id: 3, title: 'SEO Optimization', description: 'Improving website SEO', budget: 800 },
];

const ongoingProjects = [
  { id: 1, title: 'E-commerce Platform', description: 'Development of an online store', budget: 2000 },
  { id: 2, title: 'CRM System', description: 'Building a customer relationship management system', budget: 1500 },
];

function EmployerDashboard() {
  return (
    <div className="dashboard">
       <h2>Employer Dashboard</h2>
      <p>Here is where employers can manage their projects and job postings.</p>
      <nav className="dashboard-nav">
        <Link to="/find-freelancer" className="nav-link">Find Freelancers</Link>
        {/* <Link to="/profile" className="nav-link">Profile</Link> */}
      </nav>
      <ProfileHeader name="Employer Name" title="Senior Manager" />
      <section className="project-details">
        <h3>Completed Projects</h3>
        <div className="project-list">
          {completedProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <h3>Ongoing Projects</h3>
        <div className="project-list">
          {ongoingProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <AnalyticsChart />
      </section>
    </div>
  );
}

export default EmployerDashboard;
