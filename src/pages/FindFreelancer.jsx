import React, { useState } from 'react';
import FreelancerCard from '../components/FreelancerCard';
import SearchBar from '../components/SearchBar';
import './FindFreelancer.css';
import { Link } from 'react-router-dom';

const freelancers = [
  { id: 1, name: 'Alice Johnson', skills: ['Web Development', 'UI/UX Design'], experience: 4, rate: 60 },
  { id: 2, name: 'Bob Smith', skills: ['AI & Machine Learning', 'Data Science'], experience: 5, rate: 80 },
  { id: 3, name: 'Charlie Brown', skills: ['Mobile App Development', 'Web Development'], experience: 3, rate: 70 },
  { id: 4, name: 'Diana Prince', skills: ['Graphic Design', 'Web Development'], experience: 6, rate: 50 },
];

function FindFreelancers() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredFreelancers = freelancers.filter(freelancer =>
    freelancer.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="find-freelancers">
                <Link to="/employer" className="nav-link">Profile</Link>

      <h2>Find Freelancers</h2>
      <SearchBar onSearch={handleSearch} />
      <section className="freelancer-list">
        {filteredFreelancers.length > 0 ? (
          filteredFreelancers.map(freelancer => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
          ))
        ) : (
          <p>No freelancers found with the specified skills.</p>
        )}
      </section>
    </div>
  );
}

export default FindFreelancers;
