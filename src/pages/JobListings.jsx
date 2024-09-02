import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';
import './JobListings.css';

// Dummy job data
const jobs = [
  { id: 1, title: 'Web Developer Needed', description: 'Looking for a web developer to build a website.', company: 'Tech Corp', location: 'Remote', budget: 600 },
  { id: 2, title: 'Graphic Designer for Marketing', description: 'Need a graphic designer for marketing materials.', company: 'Creative Inc.', location: 'New York, NY', budget: 800 },
  { id: 3, title: 'Mobile App Developer', description: 'Mobile app development for a new startup.', company: 'Innovate Ltd.', location: 'San Francisco, CA', budget: 1200 },
];

function JobListings() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="job-listings">
      <h1>Job Listings</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="job-cards">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobListings;
