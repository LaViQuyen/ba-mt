// src/pages/HomePage.jsx
import React from 'react';
import { allTests } from '../data/index';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="homepage-wrapper">
      <div className="hp-container">
        
        {/* TRẢ LẠI HEADER GỐC CỦA BẠN: Sạch sẽ, không có menu trùng lặp */}
        <div className="hp-header">
          <div className="hp-title">
            <h1>IELTS SIMULATOR</h1>
          </div>
          <div className="hp-nav">
            <Link to="/dashboard" className="hp-link active">MOCK TEST</Link>
            <Link to="/writing-library" className="hp-link">WRITING</Link>
          </div>
        </div>

        <div className="hp-grid">
          {allTests.map(test => (
            <div key={test.id} className="hp-card">
              <h3>{test.testName}</h3>
              <p className="hp-card-desc">{test.description}</p>
              <Link to={`/test-menu/${test.id}`} className="btn-start">START TEST</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}