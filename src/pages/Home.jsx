import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Freelance Platform</h1>
      <nav>
        <ul>
          <li><Link to="/freelancer">Freelancer Dashboard</Link></li>
          <li><Link to="/employer">Employer Dashboard</Link></li>
          <li><Link to="/escrow">Escrow Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
