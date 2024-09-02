import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FreelancerDashboard from './pages/FreelancerDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import EscrowDashboard from './pages/EscrowDashboard';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import FindFreelancer from './pages/FindFreelancer';  // Import new page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelancer" element={<FreelancerDashboard />} />
          <Route path="/employer" element={<EmployerDashboard />} />
          <Route path="/escrow" element={<EscrowDashboard />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/find-freelancer" element={<FindFreelancer />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
