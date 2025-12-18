import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Student Management System</h1>
        <p>Manage your student database efficiently and effectively</p>
        
        <div className="features">
          <div className="feature-card">
            <h3>📝 Add Students</h3>
            <p>Add new students to the system with their details</p>
            <Link to="/add-student" className="btn btn-primary">Add New Student</Link>
          </div>
          
          <div className="feature-card">
            <h3>📋 View Students</h3>
            <p>View all students and manage their information</p>
            <Link to="/student-list" className="btn btn-primary">View List</Link>
          </div>
          
          <div className="feature-card">
            <h3>ℹ️ Learn More</h3>
            <p>Get information about this application</p>
            <Link to="/about" className="btn btn-primary">About Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
