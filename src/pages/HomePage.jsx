// src/pages/HomePage.jsx
import { allTests } from '../data/index';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation(); // Dùng để xác định active tab nếu cần sau này

  return (
    <div className="homepage-wrapper">
      <div className="hp-container">
        
        {/* HEADER */}
        <div className="hp-header">
          <div className="hp-title">
            <h1>IELTS SIMULATOR</h1>
          </div>

          <div className="hp-nav">
            <Link to="/dashboard" className="hp-link active">MOCK TEST</Link>
            <Link to="/writing-library" className="hp-link">WRITING</Link>
          </div>
        </div>

        {/* LIST */}
        <div className="hp-grid">
          {allTests.map(test => (
            <div key={test.id} className="hp-card">
              <h3>{test.testName}</h3>
              <p style={{color:'#555', fontSize:'14px', lineHeight:'1.5', marginBottom: '20px'}}>{test.description}</p>
              
              <Link to={`/test-menu/${test.id}`} className="btn-start">
                START TEST
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}